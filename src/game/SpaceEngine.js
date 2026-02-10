import * as THREE from 'three';
import { createNoiseTexture, createStarTexture, createRadialTexture } from '../utils/textureUtils';
import { createAllSystems, SYSTEM_POSITIONS } from '../objects/index.js';

/**
 * SpaceEngine - Main 3D engine class
 * Manages scene, camera, systems, and animation loop
 * Uses DRAG-BASED steering (touch/mouse drag to steer)
 */
export class SpaceEngine {
    constructor(container, onUpdate) {
        this.container = container;
        this.onUpdate = onUpdate;

        this.width = container.clientWidth;
        this.height = container.clientHeight;

        // Config
        this.config = {
            friction: 0.95,
            turnSpeedMax: 1.5,
            dragSensitivity: 0.003,
            maxSpeed: 1000000, // Reduced further (was 5M)
            acceleration: 10000 // Reduced further (was 50k)
        };

        // State
        this.state = {
            time: 0,
            speed: 0, // Current speed
            baseSpeed: 5000, // Was 25000 — slower for better control
            sprintSpeed: 35000, // Was 120000 — reduced sprint
            turnSpeed: 1.5,
            pitch: 0,
            yaw: 0,
            roll: 0,
            paused: false,
            keys: { w: false, s: false, shift: false },
            // Drag-based steering state
            isDragging: false,
            dragDeltaX: 0,
            dragDeltaY: 0,
            lastDragX: 0,
            lastDragY: 0,
            // Rotational velocity (for momentum)
            rotVelocityX: 0,
            rotVelocityY: 0
        };

        // THREE Objects
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.clock = new THREE.Clock();
        this.euler = new THREE.Euler(0, 0, 0, 'YXZ');

        // Modular Systems
        this.systems = [];
        this.allTargetables = [];

        this.init();
    }

    init() {
        this.initScene();
        this.initSystems();
        this.initBackdrop();
        this.initInput();
        this.animate = this.animate.bind(this);
        this.animate();
    }

    initScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x020205);
        this.scene.fog = new THREE.FogExp2(0x000000, 0.0000000005);

        // Camera with huge far plane for space
        this.camera = new THREE.PerspectiveCamera(55, this.width / this.height, 0.1, 2000000000);
        // Start just outside Solar System, looking toward galactic center
        this.camera.position.set(850000, 15000, 1160000);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0)); // Look toward Sgr A*

        this.renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        this.container.appendChild(this.renderer.domElement);

        // Ambient light
        this.scene.add(new THREE.AmbientLight(0x888888));
    }

    /**
     * Initialize all star systems from the modular objects
     */
    initSystems() {
        const textures = { createNoiseTexture, createStarTexture, createRadialTexture };

        // Create all systems from registry
        this.systems = createAllSystems();

        // Initialize each system
        this.systems.forEach(system => {
            system.init(this.scene, textures);
            // Collect all targetable objects for radar
            this.allTargetables.push(...system.getTargetables());
        });

        console.log(`Loaded ${this.systems.length} star systems with ${this.allTargetables.length} targetable objects`);
    }

    /**
     * Background star field that follows camera
     */
    initBackdrop() {
        const starTexture = createStarTexture();

        this.starBackdrop = new THREE.Group();
        this.scene.add(this.starBackdrop);

        // Spherical star distribution
        const geo = new THREE.BufferGeometry();
        const count = 8000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const r = 800000 + Math.random() * 5000000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);

            const colorType = Math.random();
            const c = new THREE.Color();
            if (colorType < 0.6) {
                c.setHSL(0.1, 0.1, 0.7 + Math.random() * 0.3);
            } else if (colorType < 0.8) {
                c.setHSL(0.6, 0.3, 0.6 + Math.random() * 0.3);
            } else {
                c.setHSL(0.08, 0.6, 0.5 + Math.random() * 0.3);
            }
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 8000,
            map: starTexture,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.starBackdrop.add(new THREE.Points(geo, mat));

        // ===== DUST PARTICLES (small white/gray, non-glowing) =====
        this.createDustLayer();
    }

    /**
     * Create dust particle layer in the galaxy
     */
    createDustLayer() {
        const dustGeo = new THREE.BufferGeometry();
        const dustCount = 5000;
        const dustPositions = new Float32Array(dustCount * 3);
        const dustColors = new Float32Array(dustCount * 3);

        for (let i = 0; i < dustCount; i++) {
            const r = 200000 + Math.random() * 3000000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            dustPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            dustPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            dustPositions[i * 3 + 2] = r * Math.cos(phi);

            // White/gray dust colors
            const brightness = 0.3 + Math.random() * 0.4;
            const c = new THREE.Color(brightness, brightness, brightness);
            dustColors[i * 3] = c.r;
            dustColors[i * 3 + 1] = c.g;
            dustColors[i * 3 + 2] = c.b;
        }

        dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
        dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));

        // Use radial texture for round particles
        const dustMat = new THREE.PointsMaterial({
            size: 3000,
            map: createRadialTexture(),
            vertexColors: true,
            transparent: true,
            opacity: 0.4,
            depthWrite: false
        });

        this.starBackdrop.add(new THREE.Points(dustGeo, dustMat));
    }

    /**
     * Input handling for flight controls - DRAG-BASED STEERING
     */
    initInput() {
        // Keyboard
        window.addEventListener('keydown', (e) => {
            if (e.key === 'w' || e.key === 'W') this.state.keys.w = true;
            if (e.key === 's' || e.key === 'S') this.state.keys.s = true;
            if (e.key === 'Shift') this.state.keys.shift = true;
        });

        window.addEventListener('keyup', (e) => {
            if (e.key === 'w' || e.key === 'W') this.state.keys.w = false;
            if (e.key === 's' || e.key === 'S') this.state.keys.s = false;
            if (e.key === 'Shift') this.state.keys.shift = false;
        });

        // ===== MOUSE DRAG STEERING =====
        this.container.addEventListener('mousedown', (e) => {
            this.state.isDragging = true;
            this.state.lastDragX = e.clientX;
            this.state.lastDragY = e.clientY;
            this.state.dragDeltaX = 0;
            this.state.dragDeltaY = 0;
        });

        window.addEventListener('mousemove', (e) => {
            if (this.state.isDragging) {
                this.state.dragDeltaX = e.clientX - this.state.lastDragX;
                this.state.dragDeltaY = e.clientY - this.state.lastDragY;
                this.state.lastDragX = e.clientX;
                this.state.lastDragY = e.clientY;
            }
        });

        window.addEventListener('mouseup', () => {
            this.state.isDragging = false;
        });

        // ===== TOUCH DRAG STEERING =====
        this.container.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                this.state.isDragging = true;
                this.state.lastDragX = e.touches[0].clientX;
                this.state.lastDragY = e.touches[0].clientY;
                this.state.dragDeltaX = 0;
                this.state.dragDeltaY = 0;
            }
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            if (this.state.isDragging && e.touches.length === 1) {
                this.state.dragDeltaX = e.touches[0].clientX - this.state.lastDragX;
                this.state.dragDeltaY = e.touches[0].clientY - this.state.lastDragY;
                this.state.lastDragX = e.touches[0].clientX;
                this.state.lastDragY = e.touches[0].clientY;
            }
        }, { passive: true });

        window.addEventListener('touchend', () => {
            this.state.isDragging = false;
        });

        // Resize handler
        window.addEventListener('resize', () => {
            this.width = this.container.clientWidth;
            this.height = this.container.clientHeight;
            this.camera.aspect = this.width / this.height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(this.width, this.height);
        });
    }

    /**
     * Get the nearest star system to camera
     */
    getNearestSystem() {
        let nearest = null;
        let minDist = Infinity;

        this.systems.forEach(system => {
            const dist = system.getDistanceFrom(this.camera.position);
            if (dist < minDist) {
                minDist = dist;
                nearest = system;
            }
        });

        return { system: nearest, distance: minDist };
    }

    /**
     * Get nearby systems for radar display
     */
    getNearbySystems(range = 600000) {
        return this.systems
            .map(system => ({
                name: system.name,
                position: system.position.clone(),
                distance: system.getDistanceFrom(this.camera.position)
            }))
            .filter(s => s.distance < range)
            .sort((a, b) => a.distance - b.distance);
    }

    /**
     * Main animation loop
     */
    animate() {
        requestAnimationFrame(this.animate);

        const delta = Math.min(this.clock.getDelta(), 0.1);
        this.state.time += delta;

        // =========== FLIGHT PHYSICS ===========
        // Speed control (W/S)
        const speedMultiplier = this.state.keys.shift ? 10 : 1;
        if (this.state.keys.w) {
            this.state.speed += this.config.acceleration * speedMultiplier * delta;
        } else if (this.state.keys.s) {
            this.state.speed -= this.config.acceleration * speedMultiplier * delta;
        } else {
            this.state.speed *= this.config.friction;
        }
        this.state.speed = Math.max(-this.config.maxSpeed, Math.min(this.config.maxSpeed, this.state.speed));

        // =========== DRAG-BASED STEERING ===========
        if (this.state.isDragging) {
            // Convert drag delta to rotational velocity
            this.state.rotVelocityY += this.state.dragDeltaX * this.config.dragSensitivity;
            this.state.rotVelocityX += this.state.dragDeltaY * this.config.dragSensitivity;

            // Reset drag delta after processing
            this.state.dragDeltaX = 0;
            this.state.dragDeltaY = 0;
        }

        // Apply friction to rotational velocity (momentum effect)
        this.state.rotVelocityX *= 0.9;
        this.state.rotVelocityY *= 0.9;

        // Apply rotation (quaternion-based)
        if (Math.abs(this.state.rotVelocityX) > 0.0001 || Math.abs(this.state.rotVelocityY) > 0.0001) {
            const pitchRate = -this.state.rotVelocityX;
            const yawRate = -this.state.rotVelocityY;

            const pitchQuat = new THREE.Quaternion().setFromAxisAngle(
                new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion), pitchRate
            );
            const yawQuat = new THREE.Quaternion().setFromAxisAngle(
                new THREE.Vector3(0, 1, 0), yawRate
            );

            this.camera.quaternion.multiplyQuaternions(yawQuat, this.camera.quaternion);
            this.camera.quaternion.multiplyQuaternions(this.camera.quaternion, pitchQuat);
            this.camera.quaternion.normalize();
        }

        // Move camera forward
        const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
        this.camera.position.addScaledVector(forward, this.state.speed * delta);

        // =========== UPDATE SYSTEMS ===========
        this.systems.forEach(system => {
            system.update(delta, this.state.time, this.camera.position);
        });

        // =========== BACKDROP FOLLOWS CAMERA ===========
        if (this.starBackdrop) {
            this.starBackdrop.position.copy(this.camera.position);
        }

        // =========== RENDER ===========
        this.renderer.render(this.scene, this.camera);

        // =========== HUD UPDATE ===========
        if (this.onUpdate) {
            const nearest = this.getNearestSystem();
            const nearbySystems = this.getNearbySystems();

            this.onUpdate({
                speed: Math.abs(this.state.speed),
                altitude: this.camera.position.length(),
                heading: THREE.MathUtils.radToDeg(this.euler.setFromQuaternion(this.camera.quaternion).y),
                position: this.camera.position.clone(),
                rotation: this.camera.rotation.clone(),
                nearestSystem: nearest.system ? nearest.system.name : 'VOID',
                nearestDistance: nearest.distance,
                nearbySystems: nearbySystems,
                planets: this.allTargetables
            });
        }
    }

    /**
     * Cleanup resources
     */
    cleanup() {
        this.renderer.dispose();
        this.scene.traverse(obj => {
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) {
                if (Array.isArray(obj.material)) {
                    obj.material.forEach(m => m.dispose());
                } else {
                    obj.material.dispose();
                }
            }
        });
    }
}
