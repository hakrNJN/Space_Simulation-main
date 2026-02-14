import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createRadialTexture, createIrregularTexture } from '../utils/textureUtils.js';
import { adaptMaterial } from '../utils/materialAdapter.js';

/**
 * CosmicCloud - Irregular clouds scattered throughout galactic arms
 * Uses noise-based sculpting for organic, varied shapes
 * Positioned along the actual galaxy spiral arms (1.18M - 6.67M radius)
 */
export class CosmicCloud extends BaseSystem {
    constructor() {
        super('COSMIC CLOUDS', { x: 0, y: 0, z: 0 }); // Galactic center
    }

    build(textures) {
        const radialTexture = createRadialTexture();
        const irregularTexture = createIrregularTexture();

        // Scatter clouds along galactic arms with varying properties
        const clouds = this.generateCloudPositions();

        clouds.forEach(cloud => {
            this.createCosmicCloud(cloud, radialTexture, irregularTexture);
        });
    }

    generateCloudPositions() {
        const clouds = [];
        const numClouds = 20; // Scattered throughout galaxy
        
        // Galaxy spans from ~1.18M to ~6.67M radius
        // Generate clouds along spiral arms
        for (let i = 0; i < numClouds; i++) {
            // Spiral arm positioning (matching galaxy structure)
            const armIndex = i % 4; // 4 spiral arms
            const armOffset = (armIndex / 4) * Math.PI * 2;
            const t = Math.random(); // Position along arm (0 = inner, 1 = outer)
            const r = 1181250 + t * 5484375; // 1.18M to 6.67M radius
            const tightness = 0.18 + Math.random() * 0.03;
            const spiralAngle = armOffset + Math.log(r / 1181250) / tightness;
            
            // Add random spread perpendicular to arm
            const spread = (Math.random() - 0.5) * 500000;
            const theta = spiralAngle + spread / r;
            
            const x = Math.cos(theta) * r;
            const y = (Math.random() - 0.5) * (30000 + r * 0.02); // Vertical spread
            const z = Math.sin(theta) * r;
            
            // Variable properties for each cloud
            clouds.push({
                pos: { x, y, z },
                hue: Math.random(), // Random color
                size: 0.8 + Math.random() * 0.6, // Size variation
                density: 0.6 + Math.random() * 0.4, // Density variation
                stretch: {
                    x: 0.8 + Math.random() * 0.4,
                    y: 0.6 + Math.random() * 0.6,
                    z: 0.8 + Math.random() * 0.4
                }
            });
        }
        
        return clouds;
    }

    createCosmicCloud(cloud, radialTex, irregularTex) {
        const cloudGroup = new THREE.Group();
        cloudGroup.position.set(cloud.pos.x, cloud.pos.y, cloud.pos.z);

        // Base particle count scaled by size
        const baseCount = Math.floor(3000 * cloud.size * cloud.density);
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(baseCount * 3);
        const colors = new Float32Array(baseCount * 3);
        
        let particleIndex = 0;
        const baseRadius = 200000 * cloud.size; // MUCH LARGER - galaxy scale

        // Generate particles with noise-based sculpting
        for (let i = 0; i < baseCount * 2; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = Math.pow(Math.random(), 0.7) * baseRadius;

            // Multi-frequency noise for irregular shape
            const n1 = Math.sin(theta * 3.2 + phi * 2.1) * 0.4;
            const n2 = Math.cos(theta * 5.7 - phi * 3.4) * 0.3;
            const n3 = Math.sin(theta * 1.8 + phi * 4.9) * 0.25;
            const noiseValue = (n1 + n2 + n3 + 1.0) / 2.0; // Normalize to 0-1
            
            // Threshold carving - creates irregular, clumpy structure
            const threshold = 0.35 + (r / baseRadius) * 0.2;
            
            if (noiseValue > threshold && particleIndex < baseCount) {
                const irregularFactor = 1.0 + n1 + n2 + n3;
                const finalR = r * irregularFactor;
                
                positions[particleIndex * 3] = Math.sin(phi) * Math.cos(theta) * finalR * cloud.stretch.x;
                positions[particleIndex * 3 + 1] = Math.cos(phi) * finalR * cloud.stretch.y;
                positions[particleIndex * 3 + 2] = Math.sin(phi) * Math.sin(theta) * finalR * cloud.stretch.z;

                // Color regions based on noise and position
                const distRatio = r / baseRadius;
                const noiseHueShift = (noiseValue - 0.5) * 0.2;
                const localHue = cloud.hue + noiseHueShift + (distRatio - 0.5) * 0.1;
                const saturation = 0.6 + noiseValue * 0.3;
                const lightness = 0.4 + (1 - distRatio) * 0.3 + (noiseValue - 0.5) * 0.15;
                
                const c = new THREE.Color().setHSL(
                    localHue,
                    saturation,
                    lightness
                );
                colors[particleIndex * 3] = c.r;
                colors[particleIndex * 3 + 1] = c.g;
                colors[particleIndex * 3 + 2] = c.b;
                
                particleIndex++;
            }
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const baseMat = new THREE.PointsMaterial({
            size: 50000 * cloud.size, // Galaxy scale - matching existing particles
            map: irregularTex,
            vertexColors: true,
            transparent: true,
            opacity: 0.5 + cloud.density * 0.3,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const mat = adaptMaterial(baseMat, this.engine.isWebGPU);

        cloudGroup.add(new THREE.Points(geo, mat));
        this.group.add(cloudGroup);
    }

    update(delta, time) {
        // Subtle rotation and drift
        this.group.rotation.y += delta * 0.001;
        this.group.children.forEach((cloud, i) => {
            cloud.rotation.x += delta * 0.0005 * (1 + i * 0.1);
            cloud.rotation.z += delta * 0.0003 * (1 + i * 0.15);
        });
    }
}
