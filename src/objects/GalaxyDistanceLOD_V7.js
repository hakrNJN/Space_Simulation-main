import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createRadialTexture } from '../utils/textureUtils.js';
import { adaptMaterial } from '../utils/materialAdapter.js';

/**
 * GalaxyDistanceLOD_V7 (Spec-Compliant Version)
 * 
 * Implements the three-stage LOD system from the spec:
 * - Inner View (< 75k): Individual star particles only
 * - Mid-Outer View (75k-550k): Volumetric clouds (purple/blue/orange)
 * - Outer View (> 550k): Full 4-arm spiral galaxy structure
 * 
 * Smooth transitions with no popping using smoothstep interpolation.
 */
export class GalaxyDistanceLOD extends BaseSystem {
    constructor() {
        super('GALAXY_LOD_V7', { x: 0, y: 0, z: 0 });
        this.materials = [];
        
        // System references
        this.particleSystem = null;
        this.cloudSystem = null;
        this.spiralArms = [];
        this.dustLanes = null;
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
        // Logarithmic spiral algorithm
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

        // 1. PARTICLE SYSTEM (Inner view - existing stars)
        // This represents the 80,000 star particles that are visible up close
        // We'll create a reference system here for LOD control
        this._createParticleSystem(arms, softTex, isWebGPU);

        // 2. VOLUMETRIC CLOUD SYSTEM (Mid-outer view)
        this._createCloudSystem(arms, softTex, isWebGPU);

        // 3. SPIRAL STRUCTURE (Outer view)
        this._createSpiralStructure(arms, softTex, isWebGPU);

        // 4. DUST LANES (Outer view)
        this._createDustLanes(arms, softTex, isWebGPU);
    }

    _createParticleSystem(arms, texture, isWebGPU) {
        // Create star particles for inner view
        const geo = new THREE.BufferGeometry();
        const count = 120000; // Increased from 80k for more density
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const uvs = new Float32Array(count * 2);

        for (let i = 0; i < count; i++) {
            const arm = arms[i % 2]; // 2 arms for particles
            const t = Math.pow(Math.random(), 2) * 0.9 + Math.random() * 0.1;
            const pt = this._armPoint(arm, t, 1.2);

            positions[i * 3] = pt.x;
            positions[i * 3 + 1] = pt.y;
            positions[i * 3 + 2] = pt.z;

            // Color gradient: yellow-orange core → blue-white arms
            const color = new THREE.Color();
            if (pt.r < 50000) {
                color.setHSL(0.05 + Math.random() * 0.1, 0.9, 0.6);
            } else {
                color.setHSL(0.6 + Math.random() * 0.1, 0.8, 0.8);
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
            size: 600, // Slightly smaller for more realistic stars
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        }), isWebGPU);

        this.particleSystem = new THREE.Points(geo, mat);
        this.group.add(this.particleSystem);
        this.materials.push(mat);
    }

    _createCloudSystem(arms, texture, isWebGPU) {
        // Create volumetric clouds for mid-outer view
        const geo = new THREE.BufferGeometry();
        const count = 40000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        const uvs = new Float32Array(count * 2);

        for (let i = 0; i < count; i++) {
            const arm = arms[i % 2];
            const t = Math.pow(Math.random(), 1.5);
            const pt = this._armPoint(arm, t, 2.5);

            positions[i * 3] = pt.x;
            positions[i * 3 + 1] = pt.y * 1.5; // More vertical spread
            positions[i * 3 + 2] = pt.z;

            // Color: purple/blue in arms, orange/pink in core
            const color = new THREE.Color();
            if (pt.r < 80000) {
                // Core: orange/pink
                color.setHSL(0.05 + Math.random() * 0.1, 0.8, 0.5);
            } else {
                // Arms: purple/blue
                color.setHSL(0.65 + Math.random() * 0.15, 0.7, 0.6);
            }

            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            sizes[i] = 3000 + Math.random() * 5000;

            uvs[i * 2] = 0;
            uvs[i * 2 + 1] = 0;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

        const mat = adaptMaterial(new THREE.PointsMaterial({
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.0, // Start invisible
            size: 5000,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        }), isWebGPU);

        this.cloudSystem = new THREE.Points(geo, mat);
        this.group.add(this.cloudSystem);
        this.materials.push(mat);
    }

    _createSpiralStructure(arms, texture, isWebGPU) {
        // Create 4-arm spiral structure for outer view
        const armCount = 4;
        const particlesPerArm = 25000; // Increased from 15k for denser spiral

        for (let armIdx = 0; armIdx < armCount; armIdx++) {
            const arm = arms[armIdx];
            const geo = new THREE.BufferGeometry();
            const positions = new Float32Array(particlesPerArm * 3);
            const colors = new Float32Array(particlesPerArm * 3);
            const uvs = new Float32Array(particlesPerArm * 2);

            for (let i = 0; i < particlesPerArm; i++) {
                const t = i / particlesPerArm;
                const pt = this._armPoint(arm, t, 0.8);

                positions[i * 3] = pt.x;
                positions[i * 3 + 1] = pt.y;
                positions[i * 3 + 2] = pt.z;

                // Color gradient: yellow-orange core → blue-white arms
                const color = new THREE.Color();
                if (pt.r < 80000) {
                    color.setHSL(0.08, 0.9, 0.65);
                } else {
                    color.setHSL(0.6, 0.6, 0.8);
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
                size: 5000, // Larger for visibility from distance
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

    _createDustLanes(arms, texture, isWebGPU) {
        // Create dark dust lanes between spiral arms
        const geo = new THREE.BufferGeometry();
        const count = 10000;
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
            size: 6000,
            sizeAttenuation: true,
            blending: THREE.NormalBlending,
            depthWrite: false
        }), isWebGPU);

        this.dustLanes = new THREE.Points(geo, mat);
        this.group.add(this.dustLanes);
        this.materials.push(mat);
    }

    /**
     * Smooth interpolation function (Hermite interpolation)
     */
    _smoothstep(edge0, edge1, x) {
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
        return t * t * (3 - 2 * t);
    }

    /**
     * Linear interpolation
     */
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

        // Calculate blend factors based on distance
        let particleOpacity, cloudOpacity, spiralVisibility;

        // Inner view: particles only (< 75k)
        if (dist < 75000) {
            particleOpacity = 0.9;
            cloudOpacity = 0.0;
            spiralVisibility = 0.0;
        }
        // Transition 1: particles → clouds (75k - 125k)
        else if (dist < 125000) {
            const t = this._smoothstep(75000, 125000, dist);
            particleOpacity = this._lerp(0.9, 0.1, t);
            cloudOpacity = this._lerp(0.0, 0.6, t);
            spiralVisibility = 0.0;
        }
        // Mid-outer view: clouds visible (125k - 450k)
        else if (dist < 450000) {
            particleOpacity = 0.1;
            cloudOpacity = 0.6;
            spiralVisibility = 0.0;
        }
        // Transition 2: clouds → full structure (450k - 550k)
        else if (dist < 550000) {
            const t = this._smoothstep(450000, 550000, dist);
            particleOpacity = this._lerp(0.1, 0.0, t);
            cloudOpacity = 0.6;
            spiralVisibility = t;
        }
        // Outer view: full structure only (> 550k)
        else {
            particleOpacity = 0.0;
            cloudOpacity = 0.6;
            spiralVisibility = 1.0;
        }

        // Apply opacities
        if (this.particleSystem && this.particleSystem.material) {
            this.particleSystem.material.opacity = particleOpacity;
            this.particleSystem.visible = particleOpacity > 0.01;
            this.particleSystem.material.needsUpdate = true;
        }

        if (this.cloudSystem && this.cloudSystem.material) {
            this.cloudSystem.material.opacity = cloudOpacity;
            this.cloudSystem.visible = cloudOpacity > 0.01;
            this.cloudSystem.material.needsUpdate = true;
        }

        // Update spiral arms
        this.spiralArms.forEach(arm => {
            if (arm.material) {
                arm.material.opacity = spiralVisibility;
                arm.material.needsUpdate = true;
            }
            if (arm.points) {
                arm.points.visible = spiralVisibility > 0.01;
            }
        });

        // Update dust lanes
        if (this.dustLanes && this.dustLanes.material) {
            this.dustLanes.material.opacity = spiralVisibility;
            this.dustLanes.visible = spiralVisibility > 0.01;
            this.dustLanes.material.needsUpdate = true;
        }

        // Slow rotation for visual effect
        this.group.rotation.y = time * 0.002;

        // Debug logging (occasional)
        if (Math.random() < 0.005) {
            console.log('LOD V7 Update:', {
                distance: Math.round(dist),
                particleOpacity: particleOpacity.toFixed(2),
                cloudOpacity: cloudOpacity.toFixed(2),
                spiralVisibility: spiralVisibility.toFixed(2)
            });
        }
    }
}
