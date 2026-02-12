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

        // Nebula clouds positioned along Milky Way spiral arms (on galactic plane)
        const clouds = [
            // Along Perseus arm
            { pos: { x: -80000, y: 2000, z: 30000 }, hue: 0.8, stretch: { x: 1.5, y: 0.6, z: 1.2 } },
            { pos: { x: 200000, y: -1000, z: 150000 }, hue: 0.55, stretch: { x: 0.8, y: 1.3, z: 1.0 } },
            // Along Sagittarius arm
            { pos: { x: 60000, y: 1500, z: 100000 }, hue: 0.08, stretch: { x: 1.2, y: 0.7, z: 1.4 } },
            { pos: { x: -120000, y: -800, z: -100000 }, hue: 0.9, stretch: { x: 1.0, y: 1.5, z: 0.6 } },
            // Along Scutum-Centaurus arm
            { pos: { x: 180000, y: 500, z: -120000 }, hue: 0.6, stretch: { x: 1.4, y: 0.8, z: 1.1 } },
            { pos: { x: -300000, y: 1200, z: 180000 }, hue: 0.75, stretch: { x: 1.1, y: 0.9, z: 1.3 } },
            // Near galactic center
            { pos: { x: -50000, y: -500, z: -40000 }, hue: 0.02, stretch: { x: 0.9, y: 1.2, z: 0.8 } },
            { pos: { x: 320000, y: 800, z: -250000 }, hue: 0.45, stretch: { x: 1.3, y: 0.6, z: 1.0 } }
        ];

        clouds.forEach(cloud => {
            this.createRealisticNebulaCloud(cloud.pos, cloud.hue, cloud.stretch, radialTexture, irregularTexture);
        });
    }

    createRealisticNebulaCloud(center, hue, stretch, radialTex, irregularTex) {
        const cloudGroup = new THREE.Group();
        cloudGroup.position.set(center.x, center.y, center.z);

        // ===== LAYER 1: Dense core with organic shape =====
        const coreGeo = new THREE.BufferGeometry();
        const coreCount = 3000;
        const corePos = new Float32Array(coreCount * 3);
        const coreCol = new Float32Array(coreCount * 3);

        for (let i = 0; i < coreCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const baseR = Math.pow(Math.random(), 0.6) * 7000;

            // Multi-frequency distortion for organic shape (NO fixed directions)
            const d1 = Math.sin(theta * 2.7 + phi * 1.3) * 0.35;
            const d2 = Math.cos(theta * 4.1 - phi * 2.8) * 0.2;
            const d3 = Math.sin(theta * 1.1 + phi * 5.2) * 0.15;
            const irregularFactor = 1.0 + d1 + d2 + d3;
            const r = baseR * irregularFactor;

            corePos[i * 3] = r * Math.sin(phi) * Math.cos(theta) * stretch.x;
            corePos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * stretch.y;
            corePos[i * 3 + 2] = r * Math.cos(phi) * stretch.z;

            // Hot interior → cooler exterior gradient
            const distRatio = baseR / 7000;
            const localHue = hue + (distRatio - 0.5) * 0.12;
            const saturation = 0.7 - distRatio * 0.2;
            const lightness = 0.5 - distRatio * 0.2;
            const c = new THREE.Color().setHSL(
                localHue + (Math.random() - 0.5) * 0.08,
                saturation,
                lightness + Math.random() * 0.15
            );
            coreCol[i * 3] = c.r;
            coreCol[i * 3 + 1] = c.g;
            coreCol[i * 3 + 2] = c.b;
        }

        coreGeo.setAttribute('position', new THREE.BufferAttribute(corePos, 3));
        coreGeo.setAttribute('color', new THREE.BufferAttribute(coreCol, 3));

        const baseCoreMat = new THREE.PointsMaterial({
            size: 1800,
            map: radialTex,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const coreMat = adaptMaterial(baseCoreMat, this.engine.isWebGPU);

        cloudGroup.add(new THREE.Points(coreGeo, coreMat));

        // ===== LAYER 2: Organic filaments at random angles =====
        const filGeo = new THREE.BufferGeometry();
        const filCount = 1500;
        const filPos = new Float32Array(filCount * 3);
        const filCol = new Float32Array(filCount * 3);

        // Generate 6-10 random filament directions (NOT fixed to 4)
        const numFilaments = 6 + Math.floor(Math.random() * 5);
        const filamentAngles = [];
        for (let f = 0; f < numFilaments; f++) {
            filamentAngles.push({
                theta: Math.random() * Math.PI * 2,
                phi: Math.random() * Math.PI,
                length: 8000 + Math.random() * 12000,
                width: 1500 + Math.random() * 2500
            });
        }

        for (let i = 0; i < filCount; i++) {
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

            filPos[i * 3] = (dirX * alongDist + perpX * perpSpread) * stretch.x;
            filPos[i * 3 + 1] = (dirY * alongDist + vertSpread) * stretch.y;
            filPos[i * 3 + 2] = (dirZ * alongDist + perpZ * perpSpread) * stretch.z;

            // Cooler colors at filament tips
            const tipFade = 1 - t;
            const c = new THREE.Color().setHSL(
                hue + tipFade * 0.1,
                0.5 + tipFade * 0.2,
                0.2 + tipFade * 0.15
            );
            filCol[i * 3] = c.r;
            filCol[i * 3 + 1] = c.g;
            filCol[i * 3 + 2] = c.b;
        }

        filGeo.setAttribute('position', new THREE.BufferAttribute(filPos, 3));
        filGeo.setAttribute('color', new THREE.BufferAttribute(filCol, 3));

        const baseFilMat = new THREE.PointsMaterial({
            size: 2200,
            map: irregularTex,
            vertexColors: true,
            transparent: true,
            opacity: 0.3,
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
