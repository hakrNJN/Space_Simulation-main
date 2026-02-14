import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createRadialTexture, createIrregularTexture } from '../utils/textureUtils.js';
import { adaptMaterial } from '../utils/materialAdapter.js';

/**
 * NebulaCloud - Realistic interstellar gas and dust clouds
 * Organic, irregular shapes with no visible arm patterns
 * Uses multi-layer particle systems with random-angle filaments
 */
export class NebulaCloud extends BaseSystem {
    constructor() {
        super('NEBULA CLOUDS', { x: 0, y: 0, z: 0 });
    }

    build(textures) {
        const radialTexture = createRadialTexture();
        const irregularTexture = createIrregularTexture();

        // Position nebula clouds along Milky Way spiral arms (galaxy scale: 1.18M - 6.67M radius)
        const clouds = [
            // Along spiral arms - inner regions
            { pos: { x: -1500000, y: 20000, z: 1800000 }, hue: 0.8, stretch: { x: 1.5, y: 0.6, z: 1.2 } },
            { pos: { x: 2200000, y: -15000, z: 2500000 }, hue: 0.55, stretch: { x: 0.8, y: 1.3, z: 1.0 } },
            // Mid regions
            { pos: { x: 1800000, y: 25000, z: 2800000 }, hue: 0.08, stretch: { x: 1.2, y: 0.7, z: 1.4 } },
            { pos: { x: -2500000, y: -18000, z: -2200000 }, hue: 0.9, stretch: { x: 1.0, y: 1.5, z: 0.6 } },
            // Outer regions
            { pos: { x: 3800000, y: 12000, z: -3200000 }, hue: 0.6, stretch: { x: 1.4, y: 0.8, z: 1.1 } },
            { pos: { x: -4200000, y: 22000, z: 3800000 }, hue: 0.75, stretch: { x: 1.1, y: 0.9, z: 1.3 } },
            // Near galactic center
            { pos: { x: -800000, y: -8000, z: -900000 }, hue: 0.02, stretch: { x: 0.9, y: 1.2, z: 0.8 } },
            { pos: { x: 4500000, y: 18000, z: -4800000 }, hue: 0.45, stretch: { x: 1.3, y: 0.6, z: 1.0 } }
        ];

        clouds.forEach(cloud => {
            this.createRealisticNebulaCloud(cloud.pos, cloud.hue, cloud.stretch, radialTexture, irregularTexture);
        });
    }

    createRealisticNebulaCloud(center, hue, stretch, radialTex, irregularTex) {
        const cloudGroup = new THREE.Group();
        cloudGroup.position.set(center.x, center.y, center.z);

        // ===== LAYER 1: Dense core with noise-based sculpting =====
        const coreGeo = new THREE.BufferGeometry();
        const coreCount = 8000; // Increased for galaxy scale
        const corePos = new Float32Array(coreCount * 3);
        const coreCol = new Float32Array(coreCount * 3);
        
        let particleIndex = 0;

        for (let i = 0; i < coreCount * 2; i++) { // Generate more, filter with noise
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const baseR = Math.pow(Math.random(), 0.6) * 150000; // Galaxy scale - was 7000

            // Multi-frequency noise for organic shape
            const d1 = Math.sin(theta * 2.7 + phi * 1.3) * 0.35;
            const d2 = Math.cos(theta * 4.1 - phi * 2.8) * 0.2;
            const d3 = Math.sin(theta * 1.1 + phi * 5.2) * 0.15;
            const irregularFactor = 1.0 + d1 + d2 + d3;
            
            // Noise-based threshold carving (Swiss cheese effect)
            const noiseValue = (d1 + d2 + d3 + 1.5) / 3.0; // Normalize to 0-1
            const threshold = 0.3 + (baseR / 150000) * 0.2; // Higher threshold at edges
            
            // Only keep particles where noise exceeds threshold
            if (noiseValue > threshold && particleIndex < coreCount) {
                const r = baseR * irregularFactor;

                corePos[particleIndex * 3] = r * Math.sin(phi) * Math.cos(theta) * stretch.x;
                corePos[particleIndex * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * stretch.y;
                corePos[particleIndex * 3 + 2] = r * Math.cos(phi) * stretch.z;

                // Color regions based on noise patterns
                const distRatio = baseR / 150000;
                const noiseHueShift = (noiseValue - 0.5) * 0.15; // Noise affects hue
                const localHue = hue + (distRatio - 0.5) * 0.12 + noiseHueShift;
                const saturation = 0.7 - distRatio * 0.2 + noiseValue * 0.1;
                const lightness = 0.5 - distRatio * 0.2 + (noiseValue - 0.5) * 0.15;
                
                const c = new THREE.Color().setHSL(
                    localHue + (Math.random() - 0.5) * 0.08,
                    saturation,
                    lightness + Math.random() * 0.15
                );
                coreCol[particleIndex * 3] = c.r;
                coreCol[particleIndex * 3 + 1] = c.g;
                coreCol[particleIndex * 3 + 2] = c.b;
                
                particleIndex++;
            }
        }

        coreGeo.setAttribute('position', new THREE.BufferAttribute(corePos, 3));
        coreGeo.setAttribute('color', new THREE.BufferAttribute(coreCol, 3));

        const baseCoreMat = new THREE.PointsMaterial({
            size: 35000, // Galaxy scale - was 5000
            map: radialTex,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const coreMat = adaptMaterial(baseCoreMat, this.engine.isWebGPU);

        cloudGroup.add(new THREE.Points(coreGeo, coreMat));

        // ===== LAYER 2: Filamentary structures with noise sculpting =====
        const filGeo = new THREE.BufferGeometry();
        const filCount = 4000; // Increased for galaxy scale
        const filPos = new Float32Array(filCount * 3);
        const filCol = new Float32Array(filCount * 3);

        // Generate 6-10 random filament directions (NOT fixed to 4)
        const numFilaments = 6 + Math.floor(Math.random() * 5);
        const filamentAngles = [];
        for (let f = 0; f < numFilaments; f++) {
            filamentAngles.push({
                theta: Math.random() * Math.PI * 2,
                phi: Math.random() * Math.PI,
                length: 180000 + Math.random() * 250000, // Galaxy scale - was 8000-20000
                width: 35000 + Math.random() * 55000 // Galaxy scale - was 1500-4000
            });
        }
        
        particleIndex = 0;

        for (let i = 0; i < filCount * 1.5; i++) { // Generate more, filter with noise
            // Pick a random filament to belong to
            const fil = filamentAngles[Math.floor(Math.random() * numFilaments)];

            // Position along filament with random walk displacement
            const t = Math.pow(Math.random(), 0.7); // Bias toward base
            const alongDist = t * fil.length;
            const perpSpread = fil.width * (1 - t * 0.5) * (Math.random() - 0.5);
            const vertSpread = fil.width * 0.4 * (Math.random() - 0.5);

            // Filament direction vector from angles
            const dirX = Math.sin(fil.phi) * Math.cos(fil.theta);
            const dirY = Math.cos(fil.phi);
            const dirZ = Math.sin(fil.phi) * Math.sin(fil.theta);

            // Perpendicular vector
            const perpX = -Math.sin(fil.theta);
            const perpZ = Math.cos(fil.theta);
            
            const x = (dirX * alongDist + perpX * perpSpread) * stretch.x;
            const y = (dirY * alongDist + vertSpread) * stretch.y;
            const z = (dirZ * alongDist + perpZ * perpSpread) * stretch.z;
            
            // Multi-frequency noise for filament sculpting
            const noiseX = Math.sin(x * 0.0003 + y * 0.0002) * 0.5;
            const noiseY = Math.cos(y * 0.0004 + z * 0.0003) * 0.5;
            const noiseZ = Math.sin(z * 0.0003 + x * 0.0004) * 0.5;
            const noiseValue = (noiseX + noiseY + noiseZ + 1.5) / 3.0;
            
            // Threshold: keep particles in filamentary regions
            const threshold = 0.35 + t * 0.15; // Higher threshold at tips
            
            if (noiseValue > threshold && particleIndex < filCount) {
                filPos[particleIndex * 3] = x;
                filPos[particleIndex * 3 + 1] = y;
                filPos[particleIndex * 3 + 2] = z;

                // Cooler colors at filament tips with noise variation
                const tipFade = 1 - t;
                const c = new THREE.Color().setHSL(
                    hue + tipFade * 0.1 + (noiseValue - 0.5) * 0.08,
                    0.5 + tipFade * 0.2 + noiseValue * 0.1,
                    0.2 + tipFade * 0.15 + (noiseValue - 0.5) * 0.1
                );
                filCol[particleIndex * 3] = c.r;
                filCol[particleIndex * 3 + 1] = c.g;
                filCol[particleIndex * 3 + 2] = c.b;
                
                particleIndex++;
            }
        }

        filGeo.setAttribute('position', new THREE.BufferAttribute(filPos, 3));
        filGeo.setAttribute('color', new THREE.BufferAttribute(filCol, 3));

        const baseFilMat = new THREE.PointsMaterial({
            size: 42000, // Galaxy scale - was 6000
            map: irregularTex,
            vertexColors: true,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const filMat = adaptMaterial(baseFilMat, this.engine.isWebGPU);

        cloudGroup.add(new THREE.Points(filGeo, filMat));

        // ===== LAYER 3: Diffuse outer haze =====
        const hazeGeo = new THREE.BufferGeometry();
        const hazeCount = 600;
        const hazePos = new Float32Array(hazeCount * 3);
        const hazeCol = new Float32Array(hazeCount * 3);

        for (let i = 0; i < hazeCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = 6000 + Math.random() * 10000;

            // Organic distortion
            const warp = Math.sin(theta * 1.7) * Math.cos(phi * 2.3) * 3000;

            hazePos[i * 3] = (r + warp) * Math.sin(phi) * Math.cos(theta) * stretch.x;
            hazePos[i * 3 + 1] = (r + warp) * Math.sin(phi) * Math.sin(theta) * stretch.y * 0.7;
            hazePos[i * 3 + 2] = (r + warp) * Math.cos(phi) * stretch.z;

            const c = new THREE.Color().setHSL(hue + 0.05, 0.4, 0.15);
            hazeCol[i * 3] = c.r;
            hazeCol[i * 3 + 1] = c.g;
            hazeCol[i * 3 + 2] = c.b;
        }

        hazeGeo.setAttribute('position', new THREE.BufferAttribute(hazePos, 3));
        hazeGeo.setAttribute('color', new THREE.BufferAttribute(hazeCol, 3));

        const baseHazeMat = new THREE.PointsMaterial({
            size: 5000,
            map: radialTex,
            vertexColors: true,
            transparent: true,
            opacity: 0.12,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const hazeMat = adaptMaterial(baseHazeMat, this.engine.isWebGPU);

        cloudGroup.add(new THREE.Points(hazeGeo, hazeMat));

        this.group.add(cloudGroup);
    }

    update(delta, time) {
        // Subtle organic drift
        this.group.rotation.y += delta * 0.002;
    }
}
