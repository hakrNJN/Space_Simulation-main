import * as THREE from 'three';
import * as ThreeWebGPU from 'three/webgpu';
import {
    vec4, attribute, positionLocal,
    color, float, texture, uv, uniform
} from 'three/tsl';
import { createNoiseTexture, createStarTexture, createRadialTexture } from '../utils/textureUtils';
import { createAllSystems, SYSTEM_POSITIONS, SingularityBlackHole } from '../objects/index.js';
import { createRenderer } from '../utils/rendererFactory.js';
import { adaptMaterial } from '../utils/materialAdapter.js';
import { GalacticZones } from '../objects/GalacticZones.js';

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
            turnSpeedMax: 1.5,
            dragSensitivity: 0.003,
            maxSpeed: 30000, // Limited to 30k per user request
            acceleration: 10000,
            steerSmoothing: 0.12, // Exponential smoothing factor (lower = smoother)
            steerSensitivity: 0.0015 // Reduced for finer control
        };

        // State
        this.state = {
            time: 0,
            speed: 0, // Current speed
            baseSpeed: 5000, // Was 25000 — slower for better control
            sprintSpeed: 30000, // Max speed cap
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
            rotVelocityY: 0,
            // Smoothed steering targets
            targetRotX: 0,
            targetRotY: 0
        };

        // THREE Objects
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.isWebGPU = false; // Track renderer type
        this.clock = new THREE.Clock();
        this.euler = new THREE.Euler(0, 0, 0, 'YXZ');

        // Modular Systems
        this.systems = [];
        this.allTargetables = [];

        // Initialization and lifecycle flags
        this.initialized = false;
        this.initializing = false;
        this.disposed = false;

        // Start initialization (don't await in constructor)
        this.init().catch(err => {
            console.error('SpaceEngine initialization failed:', err);
        });
    }

    async init() {
        // Prevent double initialization
        if (this.initialized || this.initializing) {
            console.warn('SpaceEngine already initialized or initializing');
            return;
        }

        this.initializing = true;

        try {
            await this.initScene();

            // Only continue if we have a valid scene (not disposed)
            if (!this.scene || !this.renderer) {
                console.log('SpaceEngine scene/renderer missing, initialization aborted');
                this.initializing = false;
                return;
            }

            this.initSystems();
            // Black Hole is now part of initSystems
            // await this.initBlackHole(); 
            this.initBackdrop();
            this.initGalacticZones();
            this.initInput();

            // Set initialized BEFORE starting animation loop
            this.initialized = true;
            this.initializing = false;

            this.animate = this.animate.bind(this);
            this.animate();

            console.log('✓ SpaceEngine initialization complete');
        } catch (error) {
            this.initializing = false;
            console.error('SpaceEngine initialization error:', error);
            throw error;
        }
    }

    async initScene() {
        console.log('→ initScene: Creating scene...');
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x020205);
        this.scene.fog = new THREE.FogExp2(0x000000, 0.0000000005);
        console.log('→ initScene: Scene created, background:', this.scene.background);

        // Camera with huge far plane for space
        this.camera = new THREE.PerspectiveCamera(55, this.width / this.height, 0.1, 2000000000);
        // Start just outside Solar System, looking toward galactic center
        this.camera.position.set(1350000, 15000, 1850000);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0)); // Look toward Sgr A*
        console.log('→ initScene: Camera created at', this.camera.position);

        // Create renderer with WebGPU/WebGL detection
        const { renderer, isWebGPU } = await createRenderer({
            width: this.width,
            height: this.height,
            antialias: true,
            logarithmicDepthBuffer: true
        });

        this.renderer = renderer;
        this.isWebGPU = isWebGPU;
        console.log('→ initScene: Renderer created, isWebGPU:', isWebGPU);
        console.log('→ initScene: Renderer domElement:', this.renderer.domElement);
        console.log('→ initScene: Canvas dimensions:', {
            width: this.renderer.domElement.width,
            height: this.renderer.domElement.height,
            style: {
                width: this.renderer.domElement.style.width,
                height: this.renderer.domElement.style.height
            }
        });

        // Append to DOM
        if (this.container && this.renderer.domElement) {
            // Check if there's already a canvas in the container
            const existingCanvas = this.container.querySelector('canvas');
            if (existingCanvas) {
                console.warn('→ initScene: Removing existing canvas from container');
                this.container.removeChild(existingCanvas);
            }

            this.container.appendChild(this.renderer.domElement);
            console.log('→ initScene: Canvas appended to container');
            console.log('→ initScene: Container dimensions:', {
                width: this.container.clientWidth,
                height: this.container.clientHeight
            });
        } else {
            console.error('→ initScene: Failed to append canvas! container:', this.container, 'domElement:', this.renderer.domElement);
        }

        // Ambient light
        if (this.scene) {
            const ambientLight = new THREE.AmbientLight(0x888888);
            this.scene.add(ambientLight);
            console.log('→ initScene: Ambient light added, scene children:', this.scene.children.length);
        }
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
            system.init(this.scene, textures, this);
            // Collect all targetable objects for radar
            this.allTargetables.push(...system.getTargetables());
        });

        console.log(`Loaded ${this.systems.length} star systems with ${this.allTargetables.length} targetable objects`);
    }

    /**
     * Initialize Singularity Black Hole at galactic center
     */
    async initBlackHole() {
        try {
            console.log('→ Initializing Singularity Black Hole...');

            this.blackHole = new SingularityBlackHole(this);
            console.log('  - Black hole instance created');

            await this.blackHole.build();
            console.log('  - Black hole build complete');

            // Add to systems array for update loop
            this.systems.push(this.blackHole);

            console.log('✓ Singularity Black Hole initialized at galactic center');
        } catch (error) {
            console.error('❌ Failed to initialize black hole:', error);
            console.error('Error stack:', error.stack);
        }
    }

    /**
     * Background star field that follows camera (WebGPU InstancedMesh version)
     */
    initBackdrop() {
        const starTexture = createStarTexture();

        this.starBackdrop = new THREE.Group();
        this.scene.add(this.starBackdrop);

        // --- Create Stars ---
        const getStarPos = () => {
            const r = 800000 + Math.random() * 5000000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            return new THREE.Vector3(
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.sin(phi) * Math.sin(theta),
                r * Math.cos(phi)
            );
        };

        const getStarColor = () => {
            const colorType = Math.random();
            const c = new THREE.Color();
            if (colorType < 0.6) c.setHSL(0.1, 0.1, 0.7 + Math.random() * 0.3);
            else if (colorType < 0.8) c.setHSL(0.6, 0.3, 0.6 + Math.random() * 0.3);
            else c.setHSL(0.08, 0.6, 0.5 + Math.random() * 0.3);
            return c;
        };

        this.starBackdropPoints = this._createInstancedSystem('StarBackdrop', 8000, 8000, starTexture, getStarPos, getStarColor);
        this.starBackdrop.add(this.starBackdropPoints);

        // ===== DUST PARTICLES =====
        this.createDustLayer();
    }

    /**
     * Create dust particle layer in the galaxy (WebGPU InstancedMesh version)
     */
    createDustLayer() {
        const dustTexture = createRadialTexture();

        const getDustPos = () => {
            const r = 200000 + Math.random() * 3000000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            return new THREE.Vector3(
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.sin(phi) * Math.sin(theta),
                r * Math.cos(phi)
            );
        };

        const getDustColor = () => {
            const brightness = 0.3 + Math.random() * 0.4;
            return new THREE.Color(brightness, brightness, brightness);
        };

        this.dustLayerPoints = this._createInstancedSystem('DustLayer', 5000, 3000, dustTexture, getDustPos, getDustColor);
        this.starBackdrop.add(this.dustLayerPoints);
    }

    _createInstancedSystem(name, count, sizeBase, textureMap, getPosition, getColor) {
        const geometry = new THREE.PlaneGeometry(1, 1);
        const mesh = new THREE.InstancedMesh(geometry, new ThreeWebGPU.MeshBasicNodeMaterial(), count);
        mesh.name = name;
        mesh.frustumCulled = false;

        const colors = new Float32Array(count * 3);

        const matrix = new THREE.Matrix4();
        const dummyQ = new THREE.Quaternion();
        const dummyS = new THREE.Vector3(1, 1, 1);

        for (let i = 0; i < count; i++) {
            const pos = getPosition(i);

            matrix.compose(pos, dummyQ, dummyS);
            mesh.setMatrixAt(i, matrix);

            const col = getColor(i);
            colors[i * 3] = col.r;
            colors[i * 3 + 1] = col.g;
            colors[i * 3 + 2] = col.b;
        }
        mesh.instanceMatrix.needsUpdate = true;

        geometry.setAttribute('iColor', new THREE.InstancedBufferAttribute(colors, 3));

        const material = mesh.material;
        material.transparent = true;
        material.blending = THREE.AdditiveBlending;
        material.depthWrite = false;

        // Billboard using Uniforms (TSL fallback)
        const uBackdropViewMatrix = uniform(new THREE.Matrix4());
        const uBackdropProjMatrix = uniform(new THREE.Matrix4());

        // We need to update these uniforms in the loop too.
        // Assign them to the mesh.userData or something accessible?
        // Actually, we can attach an onBeforeRender or just modify the update loop to check for them.
        // Let's store them in the system or loop.

        // Center of instance in View Space
        const viewCenter = uBackdropViewMatrix.mul(vec4(0, 0, 0, 1));
        const scale = float(sizeBase);
        const offset = vec4(positionLocal.x.mul(scale), positionLocal.y.mul(scale), 0.0, 0.0);
        const viewPos = viewCenter.add(offset);
        material.vertexNode = uBackdropProjMatrix.mul(viewPos);

        // Color + Texture
        let colorNode = attribute('iColor');
        if (textureMap) {
            // Determine if 'uv' or 'uv()' is available.
            // Assuming 'uv' is imported.
            colorNode = colorNode.mul(texture(textureMap, uv()));
        }
        material.colorNode = colorNode;

        material.premultipliedAlpha = false;

        // Attach uniforms to mesh so we can find them later
        mesh.userData.uniforms = {
            viewMatrix: uBackdropViewMatrix,
            projectionMatrix: uBackdropProjMatrix
        };

        return mesh;
    }

    /**
     * Initialize Galactic Zone system for performance optimization
     */
    initGalacticZones() {
        console.log('→ Initializing Galactic Zones...');

        this.galacticZones = new GalacticZones(this);

        // Register dynamic particles that should fade out
        if (this.starBackdropPoints) {
            this.galacticZones.registerDynamicParticles(this.starBackdropPoints);
        }
        if (this.dustLayerPoints) {
            this.galacticZones.registerDynamicParticles(this.dustLayerPoints);
        }

        // Register galaxy particles from all systems
        this.scene.traverse((child) => {
            if (child.isPoints && child.name &&
                (child.name.includes('Galaxy') ||
                    child.name.includes('Stars') ||
                    child.name.includes('Dust'))) {
                this.galacticZones.registerDynamicParticles(child);
            }
        });

        // Register nebulas (they should be visible in outer zone only)
        this.scene.traverse((child) => {
            if (child.name && child.name.includes('Nebula')) {
                this.galacticZones.registerNebula(child);
            }
        });

        // Create static background sphere
        this.galacticZones.createStaticBackground();

        console.log('✓ Galactic Zones initialized');
        console.log(`  - Registered ${this.galacticZones.dynamicParticles.length} dynamic particle systems`);
        console.log(`  - Registered ${this.galacticZones.nebulas.length} nebula objects`);
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
        if (this.disposed || !this.initialized) {
            console.log('animate() exiting - disposed:', this.disposed, 'initialized:', this.initialized);
            return; // Stop if disposed or not initialized
        }
        this.animationId = requestAnimationFrame(this.animate);

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

        // =========== SMOOTH DRAG-BASED STEERING ===========
        if (this.state.isDragging) {
            // Sensitivity curve: gentle for small drags, accelerated for big sweeps
            const dx = this.state.dragDeltaX;
            const dy = this.state.dragDeltaY;
            const dragMagnitude = Math.sqrt(dx * dx + dy * dy);
            const curve = 1.0 + dragMagnitude * 0.02; // Accelerating sensitivity

            this.state.targetRotY += dx * this.config.steerSensitivity * curve;
            this.state.targetRotX += dy * this.config.steerSensitivity * curve;

            // Reset drag delta after processing
            this.state.dragDeltaX = 0;
            this.state.dragDeltaY = 0;
        } else {
            // Decay targets when not dragging (smooth stop)
            this.state.targetRotX *= 0.85;
            this.state.targetRotY *= 0.85;
        }

        // Exponential smoothing: lerp velocity toward target
        const smooth = this.config.steerSmoothing;
        this.state.rotVelocityX += (this.state.targetRotX - this.state.rotVelocityX) * smooth;
        this.state.rotVelocityY += (this.state.targetRotY - this.state.rotVelocityY) * smooth;

        // Momentum friction
        this.state.targetRotX *= 0.92;
        this.state.targetRotY *= 0.92;

        // Apply rotation (quaternion-based)
        if (Math.abs(this.state.rotVelocityX) > 0.00005 || Math.abs(this.state.rotVelocityY) > 0.00005) {
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
            system.update(delta, this.state.time, this.camera);
        });

        // =========== UPDATE GALACTIC ZONES ===========
        if (this.galacticZones) {
            this.galacticZones.update();
        }

        // =========== BACKDROP FOLLOWS CAMERA ===========
        if (this.starBackdrop) {
            this.starBackdrop.position.copy(this.camera.position);
        }

        // =========== RENDER ===========
        if (this.renderer && this.scene && this.camera) {
            // Update Backdrop Uniforms
            if (this.camera) {
                const updateUniforms = (mesh) => {
                    if (mesh && mesh.userData && mesh.userData.uniforms) {
                        mesh.userData.uniforms.viewMatrix.value.copy(this.camera.matrixWorldInverse);
                        mesh.userData.uniforms.projectionMatrix.value.copy(this.camera.projectionMatrix);
                    }
                };
                updateUniforms(this.starBackdropPoints);
                updateUniforms(this.dustLayerPoints);
            }

            // Render
            this.renderer.render(this.scene, this.camera);
        } else {
            console.error('Cannot render - missing:', {
                renderer: !!this.renderer,
                scene: !!this.scene,
                camera: !!this.camera
            });
        }

        // =========== HUD UPDATE ===========
        if (this.onUpdate) {
            const nearest = this.getNearestSystem();
            const nearbySystems = this.getNearbySystems();
            const zoneInfo = this.galacticZones ? this.galacticZones.getZoneInfo() : { zone: 'normal', transitionFactor: 0 };
            const distanceFromCenter = this.camera.position.length();

            this.onUpdate({
                speed: Math.abs(this.state.speed),
                altitude: this.camera.position.length(),
                heading: THREE.MathUtils.radToDeg(this.euler.setFromQuaternion(this.camera.quaternion).y),
                position: this.camera.position.clone(),
                rotation: this.camera.rotation.clone(),
                nearestSystem: nearest.system ? nearest.system.name : 'VOID',
                nearestDistance: nearest.distance,
                nearbySystems: nearbySystems,
                planets: this.allTargetables,
                zone: zoneInfo.zone,
                zoneTransition: zoneInfo.transitionFactor,
                distanceFromCenter: distanceFromCenter
            });
        }
    }

    /**
     * Cleanup resources
     */
    cleanup() {
        this.disposed = true; // Flag to stop loop

        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }

        if (this.renderer) {
            this.renderer.dispose();
            // Remove canvas from DOM
            if (this.renderer.domElement && this.renderer.domElement.parentNode) {
                this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
            }
        }

        if (this.scene) {
            this.scene.traverse(obj => {
                if (obj.geometry) obj.geometry.dispose();
                if (obj.material) {
                    if (Array.isArray(obj.material)) {
                        obj.material.forEach(m => m.dispose());
                    } else {
                        obj.material.dispose();
                    }
                }
                if (obj.texture) obj.texture.dispose();
            });
        }

        // Clear references
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.systems = null;
        this.initialized = false;
        this.initializing = false;
    }
}
