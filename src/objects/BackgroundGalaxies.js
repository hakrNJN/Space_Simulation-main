import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createStarTexture, createRadialTexture } from '../utils/textureUtils.js';

/**
 * BackgroundGalaxies - Procedural alien galaxies
 * Types: Spiral, Barred, Elliptical, Irregular, Ring, Lenticular
 */
export class BackgroundGalaxies extends BaseSystem {
    constructor() {
        super('BACKGROUND_GALAXIES', { x: 0, y: 0, z: 0 });
    }

    build(textures) {
        // Create 6 unique galaxies at distance
        const types = ['Spiral', 'Barred', 'Elliptical', 'Irregular', 'Ring', 'Lenticular'];
        const starTexture = createStarTexture();

        // Random placement vectors (normalized directions)
        const directions = [
            new THREE.Vector3(1, 0.5, 1),
            new THREE.Vector3(-1, 0.2, -1),
            new THREE.Vector3(0.5, -1, 0.5),
            new THREE.Vector3(-0.5, 1, -0.5),
            new THREE.Vector3(1, -0.5, -1),
            new THREE.Vector3(-1, 0.5, 1)
        ];

        types.forEach((type, index) => {
            const dir = directions[index].normalize();
            const dist = 45000000 + Math.random() * 20000000; // 45M - 65M distance
            const pos = dir.multiplyScalar(dist);

            // Random color theme
            const colorHue = Math.random();
            const scale = 200000 + Math.random() * 300000; // 200k - 500k size

            this.createGalaxy(type, pos, scale, colorHue, starTexture);
        });
    }

    createGalaxy(type, pos, scale, hue, texture) {
        const geo = new THREE.BufferGeometry();
        let count = 5000;
        let positions = [];
        let colors = [];

        // === GENERATION LOGIC ===
        if (type === 'Spiral') {
            this.generateSpiral(positions, colors, count, scale, hue);
        } else if (type === 'Barred') {
            this.generateBarred(positions, colors, count, scale, hue);
        } else if (type === 'Elliptical') {
            this.generateElliptical(positions, colors, count, scale, hue);
        } else if (type === 'Irregular') {
            this.generateIrregular(positions, colors, count, scale, hue);
        } else if (type === 'Ring') {
            this.generateRing(positions, colors, count, scale, hue);
        } else if (type === 'Lenticular') {
            this.generateLenticular(positions, colors, count, scale, hue);
        }

        geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: scale * 0.05, // Relative particle size
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const mesh = new THREE.Points(geo, mat);
        mesh.position.copy(pos);
        // Random rotation
        mesh.lookAt(0, 0, 0); // Face center mostly
        mesh.rotation.z = Math.random() * Math.PI * 2;
        mesh.rotation.x += (Math.random() - 0.5);

        this.group.add(mesh);
    }

    // 1. SPIRAL
    generateSpiral(positions, colors, count, scale, hue) {
        const arms = 2 + Math.floor(Math.random() * 3); // 2-4 arms
        const armOffset = (Math.PI * 2) / arms;

        for (let i = 0; i < count; i++) {
            const r = Math.random() * scale;
            const t = r / scale;
            const armId = i % arms;
            const angle = armId * armOffset + Math.log(r / (scale * 0.1)) * 3.0;

            const spread = (Math.random() - 0.5) * (r * 0.5);
            const x = Math.cos(angle) * r + Math.cos(angle) * spread;
            const z = Math.sin(angle) * r + Math.sin(angle) * spread;
            const y = (Math.random() - 0.5) * (scale * 0.2 * (1 - t));

            positions.push(x, y, z);

            const c = new THREE.Color().setHSL(hue + t * 0.1, 0.8, 0.8 - t * 0.5);
            colors.push(c.r, c.g, c.b);
        }
    }

    // 2. BARRED SPIRAL
    generateBarred(positions, colors, count, scale, hue) {
        const barLen = scale * 0.4;
        const barWidth = scale * 0.1;

        // Bar
        for (let i = 0; i < count / 3; i++) {
            const x = (Math.random() - 0.5) * 2 * barLen;
            const z = (Math.random() - 0.5) * barWidth;
            const y = (Math.random() - 0.5) * barWidth;
            positions.push(x, y, z);
            const c = new THREE.Color().setHSL(hue, 1.0, 0.7);
            colors.push(c.r, c.g, c.b);
        }

        // Arms starting from bar ends
        for (let i = 0; i < count * 0.66; i++) {
            const side = i % 2 === 0 ? 1 : -1;
            const r = (Math.random()) * (scale - barLen);
            const angle = side * Math.PI * 0.5 + Math.log((r + barLen) / barLen) * 2.0;

            const finalR = barLen + r;
            const spread = (Math.random() - 0.5) * (finalR * 0.3);

            const x = side * barLen + Math.cos(angle) * r + Math.cos(angle) * spread; // Roughly
            const z = Math.sin(angle) * r + Math.sin(angle) * spread;
            // Actually simpler to just rotate from bar end

            // Re-do simpler math for visual effect:
            // Just normal spiral but 2 arms starting 180 deg
            const t = Math.random();
            const armR = barLen + t * (scale - barLen);
            const theta = (side > 0 ? 0 : Math.PI) + t * 4.0;

            const px = Math.cos(theta) * armR + (Math.random() - 0.5) * barWidth * 2;
            const pz = Math.sin(theta) * armR + (Math.random() - 0.5) * barWidth * 2;
            const py = (Math.random() - 0.5) * barWidth;

            positions.push(px, py, pz);
            const c = new THREE.Color().setHSL(hue + 0.1, 0.8, 0.5);
            colors.push(c.r, c.g, c.b);
        }
    }

    // 3. ELLIPTICAL
    generateElliptical(positions, colors, count, scale, hue) {
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = Math.pow(Math.random(), 3) * scale; // Dense core

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta) * 0.8; // Slightly flattened
            const z = r * Math.cos(phi);

            positions.push(x, y, z);
            // Yellowish/Reddish usually
            const c = new THREE.Color().setHSL(0.1 + Math.random() * 0.1, 0.6, 1.0 - (r / scale));
            colors.push(c.r, c.g, c.b);
        }
    }

    // 4. IRREGULAR
    generateIrregular(positions, colors, count, scale, hue) {
        for (let i = 0; i < count; i++) {
            // Perlin-ish blobs
            const r = Math.random() * scale;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;

            // Warp positions
            const warpX = Math.sin(theta * 3) * scale * 0.3;

            const x = (r * Math.sin(phi) * Math.cos(theta)) + warpX;
            const y = (r * Math.sin(phi) * Math.sin(theta)) * 0.5;
            const z = (r * Math.cos(phi));

            positions.push(x, y, z);
            const c = new THREE.Color().setHSL(hue, 0.9, 0.6);
            colors.push(c.r, c.g, c.b);
        }
    }

    // 5. RING (Hoag's Object)
    generateRing(positions, colors, count, scale, hue) {
        // Core
        for (let i = 0; i < count * 0.3; i++) {
            const r = Math.random() * scale * 0.2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            positions.push(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
            colors.push(1, 1, 0.8); // Yellow core
        }

        // Ring
        for (let i = 0; i < count * 0.7; i++) {
            const angle = Math.random() * Math.PI * 2;
            const r = scale * 0.8 + Math.random() * scale * 0.2;
            const x = Math.cos(angle) * r;
            const z = Math.sin(angle) * r;
            const y = (Math.random() - 0.5) * scale * 0.1;
            positions.push(x, y, z);
            const c = new THREE.Color().setHSL(hue, 0.8, 0.7);
            colors.push(c.r, c.g, c.b);
        }
    }

    // 6. LENTICULAR
    generateLenticular(positions, colors, count, scale, hue) {
        for (let i = 0; i < count; i++) {
            const r = Math.pow(Math.random(), 2) * scale;
            const angle = Math.random() * Math.PI * 2;

            const x = Math.cos(angle) * r;
            const z = Math.sin(angle) * r;
            // Smooth disk, thicker center
            const y = (Math.random() - 0.5) * scale * 0.4 * (1 - r / scale);

            positions.push(x, y, z);
            const c = new THREE.Color().setHSL(0.1, 0.4, 0.9 - (r / scale) * 0.8); // White core -> Fade
            colors.push(c.r, c.g, c.b);
        }
    }

    update(delta, time) {
        // No animation needed for background static galaxies
    }
}
