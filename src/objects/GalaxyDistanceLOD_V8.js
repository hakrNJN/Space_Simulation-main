import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createRadialTexture } from '../utils/textureUtils.js';
import { adaptMaterial } from '../utils/materialAdapter.js';

/**
 * GalaxyDistanceLOD_V8 (Realistic Inside-Out View)
 * 
 * Simulates realistic galaxy viewing:
 * - Inside (< 100k): Only local stars, no galactic structure visible
 * - Transition (100k-800k): Galaxy structure gradually appears and condenses
 * - Outside (> 800k): Complete spiral galaxy with bright core and 4 arms
 * 
 * Key: The entire galaxy structure (including core) fades IN as you fly out.
 */
export class GalaxyDistanceLOD extends BaseSystem {
    constructor() {
        super('GALAXY_LOD_V8', { x: 0, y: 0, z: 0 });
        this.materials = [];
        
        // System components
        this.localStars = null;        // Visible when inside
        this.spiralArms = [];          // 4 arms, visible from outside
        this.centralBulge = null;      // Core, visible from outside
        this.dustLanes = null;         // Dark lanes between arms
    }

    _getArms() {
        return [
            { offset: 0, tightness: 0.18, strength: 1.0 },
            { offset: Math.PI * 0.5, tightness: 0.17, strength: 0.9 },
            { offset: Math.PI, tightness: 0.20, strength: 0.85 },
            { offset: Math.PI * 1.5, tightness: 0.19, strength: 0.75 }
        ];
    }

    _armPoint(arm, t, widthMul) {
        // Logarithmic spiral
        const r = 30000 + t * 220000;
        const spiralAngle = arm.offset + t * Math.PI * 3;
        const baseWidth = 3540000;
        const tipWidth = 60000;
        const physicalWidth = (baseWidth * Math.pow(1 - t, 3) + tipWidth) * arm.strength * widthMul;
        const angularSpread = physicalWidth / r;
        const angleOffset = (Math.random() - 0.5) * angularSpread * 0.8;
        const theta = spiralAngle + angleOffset;
        const thickness = 1000 + r * 0.05;
        const y = (Math.random() - 0.5) * thickness;
        
        return {
            x: Math.cos(theta) * r,
            y: y,
            z: Math.sin(theta) * r,
            r: r
        };
    }

    build(textures) {
        const softTex = createRadialTexture();
        const arms = this._getArms();
        const isWebGPU = this.engine?.isWebGPU || false;

        // 1. LOCAL STARS (visible when inside galaxy)
        this._createLocalStars(arms, softTex, isWebGPU);

        // 2. SPIRAL ARMS (4 dense arms, visible from outside)
        this._createSpiralArms(arms, softTex, isWebGPU);

        // 3. CENTRAL BULGE (bright core, visible from outside)
        this._createCentralBulge(softTex, isWebGPU);

        // 4. DUST LANES (dark regions between arms)
        this._createDustLanes(arms, softTex, isWebGPU);
    }

    _createLocalStars(arms, texture, isWebGPU) {
        // Local stars visible when inside the galaxy
        const geo = new THREE.BufferGeometry();
        const count = 150000; // Dense local star field
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const uvs = new Float32Array(count * 2);

        for (let i = 0; i < count; i++) {
            const arm = arms[i % 2];
            const t = Math.pow(Math.random(), 2) * 0.9 + Math.random() * 0.1;
            const pt = this._armPoint(arm, t, 1.5);

            positions[i * 3] = pt.x;
            positions[i * 3 + 1] = pt.y;
            positions[i * 3 + 2] = pt.z;

            // Color gradient
            const color = new THREE.Color();
            if (pt.r < 50000) {
                color.setHSL(0.05 + Math.random() * 0.1, 0.9, 0.7);
            } else {
                color.setHSL(0.6 + Math.random() * 0.1, 0.8, 0.85);
            }

            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            uvs[i * 2] = 0;
            uvs[i * 2 + 1] = 0;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

        const mat = adaptMaterial(new THREE.PointsMaterial({
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            size: 700,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        }), isWebGPU);

        this.localStars = new THREE.Points(geo, mat);
        this.group.add(this.localStars);
        this.materials.push(mat);
    }

    _createSpiralArms(arms, texture, isWebGPU) {
        // Create 4 DENSE spiral arms
        const armCount = 4;
        const particlesPerArm = 40000; // Very dense for realistic appearance

        for (let armIdx = 0; armIdx < armCount; armIdx++) {
            const arm = arms[armIdx];
            const geo = new THREE.BufferGeometry();
            const positions = new Float32Array(particlesPerArm * 3);
            const colors = new Float32Array(particlesPerArm * 3);
            const uvs = new Float32Array(particlesPerArm * 2);

            for (let i = 0; i < particlesPerArm; i++) {
                const t = i / particlesPerArm;
                const pt = this._armPoint(arm, t, 1.2);

                positions[i * 3] = pt.x;
                positions[i * 3 + 1] = pt.y;
                positions[i * 3 + 2] = pt.z;

                // Color gradient: yellow-orange core → blue-white arms
                const color = new THREE.Color();
                if (pt.r < 80000) {
                    color.setHSL(0.08, 0.9, 0.7);
                } else {
                    color.setHSL(0.6, 0.7, 0.85);
                }

                colors[i * 3] = color.r;
                colors[i * 3 + 1] = color.g;
                colors[i * 3 + 2] = color.b;

                uvs[i * 2] = 0;
                uvs[i * 2 + 1] = 0;
            }

            geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

            const mat = adaptMaterial(new THREE.PointsMaterial({
                map: texture,
                vertexColors: true,
                transparent: true,
                opacity: 0.0, // Start invisible
                size: 6000,
                sizeAttenuation: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            }), isWebGPU);

            const points = new THREE.Points(geo, mat);
            this.group.add(points);
            this.spiralArms.push({ points, material: mat });
            this.materials.push(mat);
        }
    }

    _createCentralBulge(texture, isWebGPU) {
        // Bright central core - only visible from outside
        const mat = adaptMaterial(new THREE.SpriteMaterial({
            map: texture,
            color: 0xffcc88,
            transparent: true,
            opacity: 0.0, // Start invisible
            blending: THREE.AdditiveBlending,
            depthWrite: false
        }), isWebGPU);

        this.centralBulge = new THREE.Sprite(mat);
        this.centralBulge.scale.set(120000, 120000, 1);
        this.group.add(this.centralBulge);
        this.materials.push(mat);
    }

    _createDustLanes(arms, texture, isWebGPU) {
        // Dark dust lanes between spiral arms
        const geo = new THREE.BufferGeometry();
        const count = 15000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const uvs = new Float32Array(count * 2);

        const armCount = 4;

        for (let i = 0; i < count; i++) {
            const t = Math.random();
            const r = 80000 + Math.random() * 170000;
            
            // Position between arms
            const armOffset = Math.PI / armCount;
            const theta = Math.random() * Math.PI * 2 + armOffset;
            
            const thickness = 2000 + r * 0.08;
            const y = (Math.random() - 0.5) * thickness;

            positions[i * 3] = Math.cos(theta) * r;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = Math.sin(theta) * r;

            // Dark brown/black
            const color = new THREE.Color(0.05, 0.03, 0.02);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            uvs[i * 2] = 0;
            uvs[i * 2 + 1] = 0;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

        const mat = adaptMaterial(new THREE.PointsMaterial({
            vertexColors: true,
            transparent: true,
            opacity: 0.0, // Start invisible
            size: 7000,
            sizeAttenuation: true,
            blending: THREE.NormalBlending,
            depthWrite: false
        }), isWebGPU);

        this.dustLanes = new THREE.Points(geo, mat);
        this.group.add(this.dustLanes);
        this.materials.push(mat);
    }

    _smoothstep(edge0, edge1, x) {
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
        return t * t * (3 - 2 * t);
    }

    _lerp(a, b, t) {
        return a + (b - a) * t;
    }

    update(delta, time, cameraOrPos) {
        let cameraPos = cameraOrPos;
        if (cameraOrPos && cameraOrPos.isCamera) {
            cameraPos = cameraOrPos.position;
        }
        if (!cameraPos) return;

        const dist = cameraPos.length();

        // Calculate opacity based on distance
        let localStarsOpacity, galaxyStructureOpacity;

        // INSIDE GALAXY (< 100k): Only local stars visible
        if (dist < 100000) {
            localStarsOpacity = 0.9;
            galaxyStructureOpacity = 0.0;
        }
        // TRANSITION (100k - 800k): Galaxy structure fades in, local stars fade out
        else if (dist < 800000) {
            const t = this._smoothstep(100000, 800000, dist);
            localStarsOpacity = this._lerp(0.9, 0.0, t);
            galaxyStructureOpacity = this._lerp(0.0, 1.0, t);
        }
        // OUTSIDE (> 800k): Only galaxy structure visible
        else {
            localStarsOpacity = 0.0;
            galaxyStructureOpacity = 1.0;
        }

        // Apply to local stars
        if (this.localStars && this.localStars.material) {
            this.localStars.material.opacity = localStarsOpacity;
            this.localStars.visible = localStarsOpacity > 0.01;
            this.localStars.material.needsUpdate = true;
        }

        // Apply to spiral arms
        this.spiralArms.forEach(arm => {
            if (arm.material) {
                arm.material.opacity = galaxyStructureOpacity * 0.8;
                arm.material.needsUpdate = true;
            }
            if (arm.points) {
                arm.points.visible = galaxyStructureOpacity > 0.01;
            }
        });

        // Apply to central bulge
        if (this.centralBulge && this.centralBulge.material) {
            this.centralBulge.material.opacity = galaxyStructureOpacity * 0.9;
            this.centralBulge.visible = galaxyStructureOpacity > 0.01;
            this.centralBulge.material.needsUpdate = true;
        }

        // Apply to dust lanes
        if (this.dustLanes && this.dustLanes.material) {
            this.dustLanes.material.opacity = galaxyStructureOpacity * 0.7;
            this.dustLanes.visible = galaxyStructureOpacity > 0.01;
            this.dustLanes.material.needsUpdate = true;
        }

        // Slow rotation
        this.group.rotation.y = time * 0.002;

        // Debug logging
        if (Math.random() < 0.005) {
            console.log('LOD V8 Update:', {
                distance: Math.round(dist),
                localStars: localStarsOpacity.toFixed(2),
                galaxyStructure: galaxyStructureOpacity.toFixed(2)
            });
        }
    }
}
