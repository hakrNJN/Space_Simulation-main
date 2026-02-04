import * as THREE from 'three';
import { createNoiseTexture, createStarTexture, createRadialTexture } from '../utils/textureUtils';

export class SpaceEngine {
    constructor(container, onUpdate) {
        this.container = container;
        this.onUpdate = onUpdate; // Callback for HUD updates

        this.width = container.clientWidth;
        this.height = container.clientHeight;

        // Config
        this.config = {
            friction: 0.98,
            turnSpeedMax: 0.8,
            smoothingFactor: 4.0
        };

        // State
        this.state = {
            speed: 0,
            keys: { w: false, s: false },
            mouse: { x: 0, y: 0 },
            smoothedMouse: { x: 0, y: 0 },
            drag: { active: false, startX: 0, startY: 0 },
            time: 0,
            globalPulse: 0
        };

        // THREE Objects
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.clock = new THREE.Clock();
        this.euler = new THREE.Euler(0, 0, 0, 'YXZ');

        // Entity Lists
        this.planetMeshes = [];
        this.systemGroups = [];
        this.animatedBelts = [];
        this.dummy = new THREE.Object3D();

        this.init();
    }

    init() {
        this.initScene();
        this.initGalaxy();
        this.initSolarSystem();
        this.initBlackHole();
        this.initOtherSystems();
        this.initInput();
        this.animate = this.animate.bind(this);
        this.animate();
    }

    initScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x020205);
        // Reduced fog density to allow seeing objects at 10 Billion units
        this.scene.fog = new THREE.FogExp2(0x000000, 0.00000000001);

        // Increased Far Plane to 10 Billion to view distant Galaxy
        this.camera = new THREE.PerspectiveCamera(55, this.width / this.height, 0.1, 10000000000);
        this.camera.position.set(0, 5000, 55000);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        this.renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2; // Increase exposure
        this.container.appendChild(this.renderer.domElement);

        // High Ambient Light for visibility
        this.scene.add(new THREE.AmbientLight(0xAAAAAA));
    }

    addStarLight(pos, color, intensity) {
        // Reduced decay for wider reach, high intensity
        const light = new THREE.PointLight(color, intensity, 5000000, 0.5);
        light.position.set(pos.x, pos.y, pos.z);
        this.scene.add(light);
    }

    createAsteroidBelt(group, count, minRadius, maxRadius, colorStr, asteroidTexture) {
        const asteroidGeo = new THREE.DodecahedronGeometry(20, 0);
        // Increased lightness of base color
        const beltMat = new THREE.MeshStandardMaterial({
            map: asteroidTexture,
            roughness: 0.8,
            color: new THREE.Color(colorStr).multiplyScalar(3.0), // Boost color
            emissive: new THREE.Color(0x222222) // Slight self-illumination
        });
        const mesh = new THREE.InstancedMesh(asteroidGeo, beltMat, count);
        const data = [];

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = minRadius + Math.random() * (maxRadius - minRadius);
            const y = (Math.random() - 0.5) * 1000;

            this.dummy.position.set(Math.cos(angle) * dist, y, Math.sin(angle) * dist);
            this.dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
            const s = Math.random() * 2 + 0.5;
            this.dummy.scale.set(s, s, s);
            this.dummy.updateMatrix();
            mesh.setMatrixAt(i, this.dummy.matrix);

            data.push({ angle: angle, dist: dist, y: y, speed: (1 / Math.sqrt(dist)) * 200, rotSpeed: Math.random() });
        }
        group.add(mesh);
        this.animatedBelts.push({ mesh, data });
    }

    initGalaxy() {
        const particleTexture = createRadialTexture();
        const starTexture = createStarTexture(); // Need star texture for core

        const CONFIG = {
            count: 150000,
            gasCount: 100000,
            radius: 450000,
            branches: 5,
            spin: 5,
            randomness: 1.0,
            randomnessPower: 2.2,
            insideColor: '#ffccaa',
            outsideColor: '#1b62ff',
            gasInsideColor: '#ff5522',
            gasOutsideColor: '#000a2e'
        };

        const galGroup = new THREE.Group();
        // Moved near the Milky Way band for visual composition
        galGroup.position.set(200000000, 50000000, -200000000);
        galGroup.rotation.x = Math.PI / 2.5;
        galGroup.rotation.y = THREE.MathUtils.degToRad(60);
        galGroup.rotation.z = Math.PI / 6;
        // Scale it up significantly since it's now backdrop
        galGroup.scale.set(500, 500, 500);

        this.scene.add(galGroup);
        this.galaxyGroup = galGroup;

        const colorInside = new THREE.Color(CONFIG.insideColor);
        const colorOutside = new THREE.Color(CONFIG.outsideColor);

        // --- VARIABLE ARM LENGTHS ---
        // Some arms are long (1.0), others short (0.6)
        const armLengths = [1.0, 0.65, 0.9, 0.75, 0.5];

        // --- 1. STARS (CLUSTERS & TAPERED ARMS) ---
        const starGeo = new THREE.BufferGeometry();
        // Since we are filtering by arm length, count might be slightly less, but buffers need to be fixed size.
        // We will just position rejected stars at 0,0,0 or just let loop run longer
        // Better: Loop slightly more to ensure count? Or just accept slight reduction.

        const sPos = new Float32Array(CONFIG.count * 3);
        const sCol = new Float32Array(CONFIG.count * 3);
        const sSize = new Float32Array(CONFIG.count);

        for (let i = 0; i < CONFIG.count; i++) {
            const i3 = i * 3;
            // Get arm index first
            const armIndex = i % CONFIG.branches;
            const maxR = CONFIG.radius * armLengths[armIndex];

            // Random radius up to maxR for this arm
            const r = Math.random() * maxR;
            const isCore = r < (CONFIG.radius * 0.15);

            const spinAngle = r * CONFIG.spin / 150000;
            const branchAngle = armIndex / CONFIG.branches * Math.PI * 2;

            // TAPERING LOGIC: 
            // - Core: Very wide spread (spherical)
            // - Mid: Moderately wide
            // - End: Thin tips
            let spreadRatio = 1.0;
            if (isCore) {
                spreadRatio = 2.0;
            } else {
                // Taper: (1 - r/maxR) makes it 1.0 at start of arm, 0.0 at tip.
                // We add a base so it doesn't vanish: 0.3 + 1.2 * taper
                const taper = 1.0 - (r / maxR);
                spreadRatio = 0.2 + 1.5 * taper;
            }
            const spread = CONFIG.randomness * spreadRatio;

            // Random position with spread logic
            // Note: 'r' factor scales it linearly, so spreadRatio adjusts the slope.
            // If spread is constant, Width = spread * r, so Width grows linearly.
            // If spreadRatio shrinks as r grows, we fight the linear growth.
            // Result: Arm stays roughly constant width or tapers.

            const randomX = Math.pow(Math.random(), CONFIG.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * spread * r;
            const randomY = Math.pow(Math.random(), CONFIG.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * spread * r * 0.25;
            const randomZ = Math.pow(Math.random(), CONFIG.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * spread * r;

            sPos[i3] = Math.cos(branchAngle + spinAngle) * r + randomX;
            sPos[i3 + 1] = randomY;
            sPos[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

            // Color mixing - based on global radius for consistency
            const mixedColor = colorInside.clone();
            mixedColor.lerp(colorOutside, r / CONFIG.radius);

            // Bright Cluster Stars
            const intensity = Math.random();
            if (intensity > 0.96) {
                sCol[i3] = 1.0; sCol[i3 + 1] = 1.0; sCol[i3 + 2] = 1.0;
                sSize[i] = Math.random() * 4000 + 1000;
            } else {
                sCol[i3] = mixedColor.r; sCol[i3 + 1] = mixedColor.g; sCol[i3 + 2] = mixedColor.b;
                sSize[i] = Math.random() * 1500 + 200;
            }
        }

        starGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
        starGeo.setAttribute('color', new THREE.BufferAttribute(sCol, 3));
        // We aren't using a custom shader that uses 'size' attribute yet, just standard PointsMaterial
        // But the data is there if we switch. For now, uniformly bright but clustered positions.
        const starMat = new THREE.PointsMaterial({
            size: 2000, map: particleTexture, vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending
        });
        galGroup.add(new THREE.Points(starGeo, starMat));


        // --- 2. DUST CLOUDS (Nebulae) ---
        const dustGeo = new THREE.BufferGeometry();
        const dCount = 50000;
        const dPos = new Float32Array(dCount * 3);
        const dCol = new Float32Array(dCount * 3);

        for (let i = 0; i < dCount; i++) {
            const i3 = i * 3;
            const armIndex = i % CONFIG.branches;
            const maxR = CONFIG.radius * armLengths[armIndex];
            const r = Math.random() * maxR;

            const spinAngle = r * CONFIG.spin / 150000;
            const branchAngle = ((armIndex) + 0.5) / CONFIG.branches * Math.PI * 2; // Offset

            // Dust should be wider than stars usually
            const taper = 1.0 - (r / maxR);
            const spread = CONFIG.randomness * (0.8 + 1.2 * taper) * 2.0;

            const randomX = (Math.random() - 0.5) * 2 * spread * r;
            const randomY = (Math.random() - 0.5) * 2 * spread * r * 0.3;
            const randomZ = (Math.random() - 0.5) * 2 * spread * r;

            dPos[i3] = Math.cos(branchAngle + spinAngle) * r + randomX;
            dPos[i3 + 1] = randomY;
            dPos[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

            const c = new THREE.Color().setHSL(Math.random() * 0.1, 0.8, 0.2 + Math.random() * 0.3);
            dCol[i3] = c.r; dCol[i3 + 1] = c.g; dCol[i3 + 2] = c.b;
        }
        dustGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
        dustGeo.setAttribute('color', new THREE.BufferAttribute(dCol, 3));
        const dustMat = new THREE.PointsMaterial({
            size: 8000, map: particleTexture, vertexColors: true, transparent: true, opacity: 0.15, depthWrite: false, blending: THREE.AdditiveBlending
        });
        galGroup.add(new THREE.Points(dustGeo, dustMat));

        // --- 3. ARM GLOW ---
        const glowGeo = new THREE.BufferGeometry();
        const glowCount = 80000;
        const glowPos = new Float32Array(glowCount * 3);
        const glowCol = new Float32Array(glowCount * 3);

        for (let i = 0; i < glowCount; i++) {
            const i3 = i * 3;
            const armIndex = i % CONFIG.branches;
            const maxR = CONFIG.radius * armLengths[armIndex];
            const r = Math.random() * maxR;

            const spinAngle = r * CONFIG.spin / 150000;
            const branchAngle = armIndex / CONFIG.branches * Math.PI * 2;

            const taper = 1.0 - (r / maxR);
            const spread = CONFIG.randomness * (0.5 + 0.5 * taper);

            const angleOffset = (Math.random() - 0.5) * spread;
            const theta = branchAngle + spinAngle + angleOffset;

            glowPos[i3] = Math.cos(theta) * r;
            glowPos[i3 + 1] = (Math.random() - 0.5) * 3000;
            glowPos[i3 + 2] = Math.sin(theta) * r;

            const color = new THREE.Color();
            color.setHSL(0.55 + Math.random() * 0.1, 0.9, 0.6);
            glowCol[i3] = color.r; glowCol[i3 + 1] = color.g; glowCol[i3 + 2] = color.b;
        }
        glowGeo.setAttribute('position', new THREE.BufferAttribute(glowPos, 3));
        glowGeo.setAttribute('color', new THREE.BufferAttribute(glowCol, 3));
        const glowMat = new THREE.PointsMaterial({
            size: 4000, map: particleTexture, vertexColors: true, transparent: true, opacity: 0.1, depthWrite: false, blending: THREE.AdditiveBlending
        });
        galGroup.add(new THREE.Points(glowGeo, glowMat));

        // --- 4. CORE SPIRITES ---
        const core1 = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTexture, color: 0xffffee, blending: THREE.AdditiveBlending, opacity: 1.0 }));
        core1.scale.set(60000, 60000, 1);
        galGroup.add(core1);

        const core2 = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTexture, color: 0xffaa44, blending: THREE.AdditiveBlending, opacity: 0.5 }));
        core2.scale.set(120000, 90000, 1);
        galGroup.add(core2);

        // --- 5. BACKGROUND MILKY WAY ---
        this.createMilkyWay();
    }

    createMilkyWay() {
        const starTexture = createStarTexture();
        const radialTexture = createRadialTexture();
        const mwGroup = new THREE.Group();
        // Angled to look like a band across the sky
        mwGroup.rotation.x = Math.PI / 3;
        mwGroup.rotation.z = Math.PI / 8;

        // 1. DENSE CORE BAND (The "Spine")
        const coreGeo = new THREE.BufferGeometry();
        const coreCount = 80000;
        const cPos = new Float32Array(coreCount * 3);
        const cCol = new Float32Array(coreCount * 3);

        for (let i = 0; i < coreCount; i++) {
            const r = 5000000 + Math.random() * 3000000;
            const theta = Math.random() * Math.PI * 2;
            const y = (Math.random() - 0.5) * 600000;

            cPos[i * 3] = Math.cos(theta) * r;
            cPos[i * 3 + 1] = y;
            cPos[i * 3 + 2] = Math.sin(theta) * r;

            const c = new THREE.Color().setHSL(0.05 + Math.random() * 0.1, 0.9, 0.5 + Math.random() * 0.5);
            cCol[i * 3] = c.r; cCol[i * 3 + 1] = c.g; cCol[i * 3 + 2] = c.b;
        }
        coreGeo.setAttribute('position', new THREE.BufferAttribute(cPos, 3));
        coreGeo.setAttribute('color', new THREE.BufferAttribute(cCol, 3));
        const coreMat = new THREE.PointsMaterial({
            size: 18000, map: starTexture, vertexColors: true, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false
        });
        mwGroup.add(new THREE.Points(coreGeo, coreMat));

        // 2. WIDE SCATTERED LAYER (The "Haze") - MADE WIDER
        const scatGeo = new THREE.BufferGeometry();
        const scatCount = 80000;
        const sPos = new Float32Array(scatCount * 3);
        const sCol = new Float32Array(scatCount * 3);

        for (let i = 0; i < scatCount; i++) {
            const r = 2000000 + Math.random() * 8000000;
            const theta = Math.random() * Math.PI * 2;
            // Extremely wide spread
            const y = (Math.random() - 0.5) * 5000000;

            sPos[i * 3] = Math.cos(theta) * r;
            sPos[i * 3 + 1] = y;
            sPos[i * 3 + 2] = Math.sin(theta) * r;

            const c = new THREE.Color().setHSL(0.6 + Math.random() * 0.1, 0.4, 0.2 + Math.random() * 0.3);
            sCol[i * 3] = c.r; sCol[i * 3 + 1] = c.g; sCol[i * 3 + 2] = c.b;
        }
        scatGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
        scatGeo.setAttribute('color', new THREE.BufferAttribute(sCol, 3));
        const scatMat = new THREE.PointsMaterial({
            size: 25000, map: starTexture, vertexColors: true, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false
        });
        mwGroup.add(new THREE.Points(scatGeo, scatMat));

        // 3. GLOWING NEBULA CLOUDS (Dense & Bright)
        const dustGeo = new THREE.BufferGeometry();
        const dustCount = 20000;
        const dPos = new Float32Array(dustCount * 3);
        const dCol = new Float32Array(dustCount * 3);

        for (let i = 0; i < dustCount; i++) {
            const r = 3000000 + Math.random() * 6000000;
            const theta = Math.random() * Math.PI * 2;
            const y = (Math.random() - 0.5) * 2000000;

            dPos[i * 3] = Math.cos(theta) * r;
            dPos[i * 3 + 1] = y;
            dPos[i * 3 + 2] = Math.sin(theta) * r;

            // Purple and Orange Glows using noise
            const patchNoise = Math.sin(theta * 3) * Math.cos(r * 0.000003);
            const c = new THREE.Color();

            if (patchNoise > 0.3) {
                // Deep Purple / Magenta Glow
                c.setHSL(0.8 + Math.random() * 0.1, 0.9, 0.2);
            } else if (patchNoise < -0.3) {
                // Bright Orange Inner Glow
                c.setHSL(0.08 + Math.random() * 0.05, 0.9, 0.2);
            } else {
                // Standard Blueish Haze
                c.setHSL(0.6, 0.4, 0.05);
            }

            dCol[i * 3] = c.r; dCol[i * 3 + 1] = c.g; dCol[i * 3 + 2] = c.b;
        }
        dustGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
        dustGeo.setAttribute('color', new THREE.BufferAttribute(dCol, 3));
        const dustMat = new THREE.PointsMaterial({
            size: 100000, map: radialTexture, vertexColors: true, transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false
        });
        mwGroup.add(new THREE.Points(dustGeo, dustMat));

        // 4. GLOWING BRIGHT STARS (New Layer)
        const brightGeo = new THREE.BufferGeometry();
        const brightCount = 2000;
        const bPos = new Float32Array(brightCount * 3);
        const bCol = new Float32Array(brightCount * 3);

        for (let i = 0; i < brightCount; i++) {
            const r = 4000000 + Math.random() * 4000000;
            const theta = Math.random() * Math.PI * 2;
            const y = (Math.random() - 0.5) * 1000000;

            bPos[i * 3] = Math.cos(theta) * r;
            bPos[i * 3 + 1] = y;
            bPos[i * 3 + 2] = Math.sin(theta) * r;

            const c = new THREE.Color().setHSL(0.6 + Math.random() * 0.1, 1.0, 0.9); // Blue-White bright
            if (Math.random() > 0.8) c.setHSL(0.1, 1.0, 0.8); // Occasional Red Giant

            bCol[i * 3] = c.r; bCol[i * 3 + 1] = c.g; bCol[i * 3 + 2] = c.b;
        }
        brightGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3));
        brightGeo.setAttribute('color', new THREE.BufferAttribute(bCol, 3));
        const brightMat = new THREE.PointsMaterial({
            size: 40000, map: radialTexture, vertexColors: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false
        });
        mwGroup.add(new THREE.Points(brightGeo, brightMat));

        this.scene.add(mwGroup);
    }

    initSolarSystem() {
        const starTexture = createStarTexture();
        const asteroidTexture = createNoiseTexture('asteroid', '#666666', '#222222');

        const solarGroup = new THREE.Group();
        this.scene.add(solarGroup);
        // We push to systemGroups if we want to track it, but planetMeshes is used for HUD/Physics
        this.systemGroups.push(solarGroup);

        // SUN
        const sun = new THREE.Mesh(new THREE.SphereGeometry(2000, 64, 64), new THREE.MeshBasicMaterial({ color: 0xffaa00 }));
        solarGroup.add(sun);
        // Identify Sun as a system target
        sun.userData = { name: "SUN", isSystem: true, baseScale: 2000 };
        this.planetMeshes.push(sun);

        const sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTexture, color: 0xffaa00, blending: THREE.AdditiveBlending }));
        sunGlow.scale.set(12000, 12000, 1);
        solarGroup.add(sunGlow);

        // LIGHTING
        // Main Sun Light (Point) - SUPER BRIGHT
        this.addStarLight({ x: 0, y: 0, z: 0 }, 0xffffff, 25.0);
        // Ambient fill for the planets
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 2.0);
        this.scene.add(hemiLight);

        // PLANETS
        // (group, size, distance, color1, color2, type, name, rotSpeed)
        this.createPlanet(solarGroup, 50, 4000, '#aaaaaa', '#555555', 'rock', 'MERCURY', 0.8);
        this.createPlanet(solarGroup, 120, 6000, '#eecfa1', '#d4a017', 'atmosphere', 'VENUS', 0.6);
        this.createPlanet(solarGroup, 130, 8000, '#2244AA', '#11AA44', 'earth', 'EARTH', 1.0);
        this.createPlanet(solarGroup, 70, 10000, '#ff4422', '#882211', 'rock', 'MARS', 0.9);
        this.createPlanet(solarGroup, 1400, 16000, '#d4a017', '#885522', 'gas', 'JUPITER', 2.0);
        this.createPlanet(solarGroup, 1200, 22000, '#eecfa1', '#888888', 'gas', 'SATURN', 1.8);
        this.createPlanet(solarGroup, 500, 28000, '#4488ff', '#224488', 'gas', 'URANUS', 1.2);
        this.createPlanet(solarGroup, 480, 32000, '#2244ff', '#112288', 'gas', 'NEPTUNE', 1.1);

        // Asteroid Belt (Between Mars and Jupiter)
        this.createAsteroidBelt(solarGroup, 3000, 12000, 14000, '#aaaaaa', asteroidTexture);
    }

    createPlanet(group, size, distance, color1, color2, type, name, selfRotSpeed) {
        const geo = new THREE.SphereGeometry(size, 64, 64);
        // Ensure texture is created
        const tex = createNoiseTexture(type, color1, color2);

        // Use Standard material for lighting reaction, but boost ambient reaction
        const mat = new THREE.MeshStandardMaterial({
            map: tex,
            roughness: 0.7,
            metalness: 0.1
        });

        const mesh = new THREE.Mesh(geo, mat);
        const angle = Math.random() * Math.PI * 2;
        mesh.position.set(Math.cos(angle) * distance, 0, Math.sin(angle) * distance);
        group.add(mesh);

        // Track for HUD/Physics
        mesh.userData = {
            name: name, type: 'planet', distance: distance, angle: angle, speed: (1 / Math.sqrt(distance)) * 300, rotSpeed: selfRotSpeed
        };
        this.planetMeshes.push(mesh);

        // Add Ring for Saturn
        if (name === 'SATURN') {
            const ringGeo = new THREE.RingGeometry(size * 1.4, size * 2.2, 64);
            const ringTex = createNoiseTexture('gas', '#aa8855', '#554433');
            const ringMat = new THREE.MeshStandardMaterial({
                map: ringTex, side: THREE.DoubleSide, transparent: true, opacity: 0.8
            });
            // Adjust UVs for ring mapping
            const pos = ringGeo.attributes.position;
            const uv = ringGeo.attributes.uv;
            for (let i = 0; i < pos.count; i++) {
                // Simple cylindrical UV mapping
                const x = pos.getX(i);
                const y = pos.getY(i);
                const len = Math.sqrt(x * x + y * y);
                const u = (Math.atan2(y, x) / (Math.PI * 2)) + 0.5;
                const v = (len - size * 1.4) / (size * 0.8);
                uv.setXY(i, u, v);
            }

            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.x = Math.PI / 2;
            mesh.add(ring);
        }
    }

    initBlackHole() {
        const bhPos = new THREE.Vector3(-5000000, 1000000, 5000000);
        const bhGroup = new THREE.Group();
        bhGroup.position.copy(bhPos);
        this.scene.add(bhGroup);
        // Identify as targetable object
        bhGroup.userData = { name: "GARGANTUA", isSystem: true, baseScale: 20000 };
        this.planetMeshes.push(bhGroup);

        const bhVertexShader = `
            varying vec3 vWorldPosition;
            void main() {
                vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                vWorldPosition = worldPosition.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPosition;
            }
        `;

        const bhFragmentShader = `
            uniform float iTime;
            uniform vec3 cameraPos;
            uniform vec3 bhPos;
            varying vec3 vWorldPosition;

            #define MAX_STEPS 160
            #define BH_RADIUS 1.5
            #define DISK_INNER 2.6
            #define DISK_OUTER 14.0
            #define DISK_HEIGHT 0.15
            
            float hash(vec3 p) {
                p = fract(p * 0.3183099 + .1);
                p *= 17.0;
                return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
            }

            float noise(in vec3 x) {
                vec3 i = floor(x);
                vec3 f = fract(x);
                f = f * f * (3.0 - 2.0 * f);
                return mix(mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
                            mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                        mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                            mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
            }

            float fbm(vec3 p) {
                float v = 0.0;
                float a = 0.5;
                vec3 shift = vec3(100.0);
                for (int i = 0; i < 5; ++i) {
                    v += a * noise(p);
                    p = p * 2.0 + shift;
                    a *= 0.5;
                }
                return v;
            }

            float voronoi(vec3 p) {
                vec3 i = floor(p);
                vec3 f = fract(p);
                float res = 0.0;
                for(int z=-1; z<=1; z++) {
                    for(int y=-1; y<=1; y++) {
                        for(int x=-1; x<=1; x++) {
                            vec3 b = vec3(float(x), float(y), float(z));
                            vec3 r = vec3(b) - f + hash(i + b);
                            float d = dot(r,r);
                            res += exp( -16.0*d );
                        }
                    }
                }
                return res;
            }

            vec3 getDiskColor(float intensity, float temp) {
                vec3 colorLow = vec3(0.6, 0.05, 0.0);
                vec3 colorMid = vec3(1.0, 0.5, 0.05);
                vec3 colorHigh = vec3(1.0, 0.9, 0.8);
                
                vec3 col = mix(colorLow, colorMid, smoothstep(0.0, 0.4, temp));
                col = mix(col, colorHigh, smoothstep(0.4, 1.0, temp));
                return col * intensity * 5.0; 
            }

            void main() {
                vec3 ro = cameraPos;
                vec3 rd = normalize(vWorldPosition - ro);
                
                // Adjust position relative to BH and SCALE DOWN for shader math
                vec3 pos = ro - bhPos; 
                float scale = 1.0 / 5000.0; // Scale 50000 -> ~10 units
                pos *= scale;

                vec3 col = vec3(0.0);
                float accumulatedAlpha = 0.0;
                float closestDistToBH = 9999.0;
                
                for(int i = 0; i < MAX_STEPS; i++) {
                    float distToCenter = length(pos);
                    closestDistToBH = min(closestDistToBH, distToCenter);
                    
                    float bendStrength = 0.15; 
                    vec3 toCenter = normalize(-pos);
                    float grav = bendStrength / (distToCenter * distToCenter + 0.01); 
                    rd = normalize(rd + toCenter * grav);
                    
                    float stepSize = max(0.02, distToCenter * 0.03); 
                    if (distToCenter < BH_RADIUS * 2.0) stepSize = 0.05; 
                    if (distToCenter < BH_RADIUS * 1.2) stepSize = 0.02;

                    pos += rd * stepSize;

                    // Volumetric Disk
                    float distToPlane = abs(pos.y);
                    if(distToPlane < DISK_HEIGHT * 4.0 && distToCenter > DISK_INNER && distToCenter < DISK_OUTER) {
                        float radialFade = smoothstep(DISK_INNER, DISK_INNER + 0.5, distToCenter) * (1.0 - smoothstep(DISK_OUTER - 4.0, DISK_OUTER, distToCenter));
                        float angle = atan(pos.z, pos.x);
                        float rotSpeed = 5.0 / (distToCenter + 0.1);
                        float animAngle = angle + iTime * rotSpeed;
                        
                        vec3 noisePos = vec3(cos(animAngle)*distToCenter, sin(animAngle)*distToCenter, pos.y * 1.5);
                        float dens = fbm(noisePos * 0.9);
                        float rocks = voronoi(noisePos * 2.5 + 10.0);
                        float rockSolid = smoothstep(0.7, 0.9, rocks); 
                        
                        float rockStart = DISK_INNER + 2.5; 
                        float rockFade = smoothstep(rockStart, rockStart + 3.0, distToCenter);
                        rockSolid *= rockFade;

                        float verticalFade = exp(-pow(distToPlane / (DISK_HEIGHT), 2.0));
                        float intensity = dens * radialFade * verticalFade;
                        
                        if (intensity > 0.001 || rockSolid > 0.1) {
                            vec3 diskVel = normalize(vec3(-pos.z, 0.0, pos.x));
                            float doppler = dot(diskVel, -normalize(pos - ro)); 
                            // Note: ro is cameraPos in scaled space? No, ro is huge. 
                            // Doppler vector should be using 'rd' which is directional and unit length.
                            // Let's use 'rd' for view vector approximation
                            // float doppler = dot(diskVel, -rd); 
                            
                            float beam = pow(1.0 + doppler * 0.6, 2.0); 
                            float temperature = intensity + (doppler * 0.3);
                            
                            vec3 particleCol = vec3(0.0);
                            if (rockSolid > 0.1) {
                                particleCol = vec3(0.02, 0.01, 0.0); 
                                intensity += rockSolid * 2.0; 
                            } else {
                                particleCol = getDiskColor(intensity, clamp(temperature, 0.0, 1.2));
                            }
                            particleCol *= beam;
                            
                            float absorption = 0.08 * intensity;
                            col += particleCol * absorption * (1.5 - length(col) * 0.6);
                            accumulatedAlpha += absorption;
                        }
                    }

                    if(distToCenter < 1.55) { // Event Horizon Fade
                        float voidDensity = smoothstep(1.55, BH_RADIUS, distToCenter);
                        accumulatedAlpha += voidDensity * 10.0 * stepSize;
                    }

                    if(accumulatedAlpha >= 1.0 || distToCenter < BH_RADIUS * 0.8) break;
                }

                // Glow post-process
                vec3 glowColor = vec3(1.0, 0.6, 0.2); 
                float glowStrength = 0.0;
                if (accumulatedAlpha < 1.0) {
                     glowStrength = 0.3 / (closestDistToBH - BH_RADIUS + 0.5);
                }
                col += glowColor * glowStrength * 0.5;

                // Scale color up
                col *= 1.4;
                col = pow(col, vec3(1.0 / 2.2)); // Gamma
                
                gl_FragColor = vec4(col, min(accumulatedAlpha + glowStrength, 1.0));
            }
        `;

        this.bhMaterial = new THREE.ShaderMaterial({
            vertexShader: bhVertexShader,
            fragmentShader: bhFragmentShader,
            uniforms: {
                iTime: { value: 0 },
                cameraPos: { value: new THREE.Vector3() },
                bhPos: { value: bhPos }
            },
            transparent: true,
            side: THREE.BackSide,
            blending: THREE.NormalBlending
        });

        // Giant box to act as the "volumetric container"
        const bhMesh = new THREE.Mesh(new THREE.BoxGeometry(200000, 200000, 200000), this.bhMaterial);
        bhGroup.add(bhMesh);
    }

    initOtherSystems() {
        const starTexture = createStarTexture();
        const starsGeo = new THREE.BufferGeometry();
        const starsCount = 5000; // Increased count
        const sPos = new Float32Array(starsCount * 3);
        const sCol = new Float32Array(starsCount * 3);
        const sSize = new Float32Array(starsCount);

        for (let i = 0; i < starsCount; i++) {
            // Randomly distributed far away stars (background/nearby systems)
            const r = 200000 + Math.random() * 800000; // Spread out from 200k to 1M scale
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            sPos[i * 3] = x;
            sPos[i * 3 + 1] = y;
            sPos[i * 3 + 2] = z;

            // Random colors for star systems
            const c = new THREE.Color().setHSL(Math.random(), 0.8, 0.8);
            sCol[i * 3] = c.r; sCol[i * 3 + 1] = c.g; sCol[i * 3 + 2] = c.b;

            sSize[i] = Math.random() * 3000 + 1000;
        }

        starsGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
        starsGeo.setAttribute('color', new THREE.BufferAttribute(sCol, 3));

        const starsMat = new THREE.PointsMaterial({
            size: 2000, map: starTexture, vertexColors: true, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending
        });

        const starSystems = new THREE.Points(starsGeo, starsMat);
        this.scene.add(starSystems);
    }

    initInput() {
        window.addEventListener('keydown', e => {
            if (e.key.toLowerCase() === 'w') this.state.keys.w = true;
            if (e.key.toLowerCase() === 's') this.state.keys.s = true;
        });
        window.addEventListener('keyup', e => {
            if (e.key.toLowerCase() === 'w') this.state.keys.w = false;
            if (e.key.toLowerCase() === 's') this.state.keys.s = false;
        });
        document.addEventListener('mousemove', e => {
            if (!this.state.drag.active) {
                this.state.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                this.state.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
            }
        });
    }

    handleResize() {
        if (!this.container) return;
        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height);
    }

    animate() {
        if (!this.renderer) return; // Stopped
        requestAnimationFrame(this.animate.bind(this));

        const time = performance.now() * 0.001;
        const delta = Math.min(this.clock.getDelta(), 0.1); // Cap delta to prevent huge jumps
        this.state.time = time;
        this.state.globalPulse = 1.0 + Math.sin(time * 3) * 0.2;

        // --- FLIGHT PHYSICS ---

        // 1. ROTATION (Steering)
        // Mouse input drives target angular velocity ( Pitch, Yaw, Roll )
        const rollSpeed = 2.0;
        const pitchSpeed = 1.0;
        const yawSpeed = 1.0;

        // Calculate Target Rotational Velocity based on input
        // Mouse X -> Yaw (Turn Left/Right)
        // Mouse Y -> Pitch (Nose Up/Down)
        // Keys A/D -> Roll (Bank Left/Right)

        const targetRotX = this.state.mouse.y * pitchSpeed; // Pitch
        const targetRotY = -this.state.mouse.x * yawSpeed;  // Yaw
        let targetRotZ = 0;
        if (this.state.keys.a) targetRotZ = rollSpeed;      // Roll Left
        if (this.state.keys.d) targetRotZ = -rollSpeed;     // Roll Right

        // Apply Inertia (Smoothly interpolate current angular velocity to target)
        // Lerp factor: Lower = Heavier feel.
        const rotInertia = 2.0 * delta;

        // We accumulate rotation into a Quaternion
        const q = this.camera.quaternion;

        // Create delta rotation for this frame
        // We simply effect the Pitch/Yaw/Roll LOCAL to the camera
        const dq = new THREE.Quaternion();
        const euler = new THREE.Euler(targetRotX * delta, targetRotY * delta, targetRotZ * delta, 'YXZ');
        dq.setFromEuler(euler);

        // Apply rotation
        q.multiply(dq);

        // Auto-level roll if no roll input? (Optional, maybe for "Assistant" mode)
        // For "Real" feel, we drift. 
        // But for gameplay, let's keep it direct but smoothed.
        // Actually, the user asked for "Real". 
        // Real space flight: Input adds torque, which adds angular velocity.
        // Let's implement a simplified "Fly-by-wire" where input = rate of turn.
        // The above code is Rate of Turn control. 
        // To fix "stuck", we ensure we NEVER clamp Euler angles. We just multiply Quaternions.

        this.camera.quaternion.normalize(); // Prevent drift error

        // 2. MOVEMENT (Thrust)
        // W/S Keys -> Throttle
        if (this.state.keys.w) this.state.speed += 2000 * delta; // Accelerate
        if (this.state.keys.s) this.state.speed -= 2000 * delta; // Decelerate

        // Drag / Friction in space? 
        // Real space has no drag, but playable handling needs limits.
        this.state.speed = THREE.MathUtils.clamp(this.state.speed, -50000, 50000000); // Massive max speed

        // Apply velocity in forward direction
        const forward = new THREE.Vector3(0, 0, -1);
        forward.applyQuaternion(this.camera.quaternion);
        forward.multiplyScalar(this.state.speed * delta);

        this.camera.position.add(forward);


        // Infinite Background
        const range = 100000;
        if (this.dustSystem) {
            this.dustSystem.position.x = Math.floor(this.camera.position.x / range) * range;
            this.dustSystem.position.y = Math.floor(this.camera.position.y / range) * range;
            this.dustSystem.position.z = Math.floor(this.camera.position.z / range) * range;
        }

        // Galaxy Spin
        if (this.galaxyGroup) {
            this.galaxyGroup.rotation.y += delta * 0.05;
        }

        // Object Animations
        this.planetMeshes.forEach(mesh => {
            if (mesh.userData.isSystem) return;

            mesh.userData.angle += mesh.userData.speed * delta * 0.1;
            mesh.position.x = Math.cos(mesh.userData.angle) * mesh.userData.distance;
            mesh.position.z = Math.sin(mesh.userData.angle) * mesh.userData.distance;
            mesh.rotation.y += mesh.userData.rotSpeed * delta;
        });

        // Update Shader Uniforms
        if (this.bhMaterial) {
            this.bhMaterial.uniforms.iTime.value = time;
            this.bhMaterial.uniforms.cameraPos.value.copy(this.camera.position);
        }

        // Asteroid Belt Animation
        this.animatedBelts.forEach(belt => {
            const { mesh, data } = belt;
            for (let i = 0; i < data.length; i++) {
                const d = data[i];
                d.angle += d.speed * delta * 0.1;
                this.dummy.position.set(Math.cos(d.angle) * d.dist, d.y, Math.sin(d.angle) * d.dist);
                this.dummy.rotation.set(time * d.rotSpeed, time * d.rotSpeed, 0);
                this.dummy.scale.set((i % 3) + 0.5, (i % 3) + 0.5, (i % 3) + 0.5);
                this.dummy.updateMatrix();
                mesh.setMatrixAt(i, this.dummy.matrix);
            }
            mesh.instanceMatrix.needsUpdate = true;
        });

        this.renderer.render(this.scene, this.camera);

        if (this.onUpdate) {
            this.onUpdate({
                speed: Math.abs(this.state.speed),
                position: this.camera.position,
                rotation: this.camera.rotation, // Sending camera rotation directly
                planets: this.planetMeshes,
                altitude: this.camera.position.length(),
                heading: (this.camera.rotation.y * 180 / Math.PI).toFixed(0)
            });
        }
    }



    cleanup() {
        // Dispose resources if needed
        this.renderer.dispose();
        // Remove event listeners
    }
}
