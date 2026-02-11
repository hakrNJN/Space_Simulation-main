import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createRadialTexture, createNoiseTexture } from '../utils/textureUtils.js';

/**
 * GalaxyDistanceLOD
 * Adds a "heavy", dense visual layer to the galaxy that is only visible from a distance.
 * This simulates the accumulation of light and dust that makes galaxies look solid from afar.
 */
export class GalaxyDistanceLOD extends BaseSystem {
    constructor() {
        super('GALAXY_LOD', { x: 0, y: 0, z: 0 });
        this.materials = []; // Track materials to update opacity
    }

    build(textures) {
        const glowTexture = createRadialTexture();
        // SMOOTH TEXTURE: Use radial instead of noise to remove grain. 
        // We will tint it in the particle colors to look like dark heavy dust.
        const cloudTexture = createRadialTexture();

        // 1. MASSIVE CORE GLOW (The "Solid" Center)
        // Visible only from > 10M distance
        const glowGeo = new THREE.SpriteMaterial({
            map: glowTexture,
            color: 0xffddaa, // Warm core
            transparent: true,
            opacity: 0, // Starts invisible
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.materials.push(glowGeo);

        const glowSprite = new THREE.Sprite(glowGeo);
        glowSprite.scale.set(16000000, 4000000, 1); // 12M width, flattened
        this.group.add(glowSprite);

        // 2. SMOOTH DISTANT FOG (Heavy Look)
        // Soft, large particles for cohesive look without grain
        const dustGeo = new THREE.BufferGeometry();
        const count = 5000; // Increased density
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        const phases = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            // Distribution: Wide disk, 8M - 33M radius
            // Slightly larger spread
            const r = 8000000 + Math.random() * 25000000;
            const theta = Math.random() * Math.PI * 2;

            const x = Math.cos(theta) * r;
            const z = Math.sin(theta) * r;
            // Flattened fog layer
            const y = (Math.random() - 0.5) * r * 0.12;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            phases[i] = Math.random() * Math.PI * 2;

            // Colors: Deep Purple / Blue / Black-ish
            // "Heavy" but smooth
            const c = new THREE.Color().setHSL(0.7 + Math.random() * 0.05, 0.5, 0.2 + Math.random() * 0.1);
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;

            // Huge particles to overlap smoothly
            sizes[i] = 1000000 + Math.random() * 1000000;
        }

        dustGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        dustGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        dustGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        dustGeo.setAttribute('phase', new THREE.BufferAttribute(phases, 1));

        const dustMat = new THREE.PointsMaterial({
            size: 1500000, // Very large base size for smooth overlap
            map: cloudTexture,
            vertexColors: true,
            transparent: true,
            opacity: 0,
            // Additive looks "glowing" and smooth. 
            // User requested "no grains". Radial texture + Additive is smoothest.
            // To make it look "heavy", we used darker colors.
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.materials.push(dustMat);

        this.dustMesh = new THREE.Points(dustGeo, dustMat);
        this.group.add(this.dustMesh);
    }

    update(delta, time, cameraPos) {
        if (!cameraPos) return;

        const dist = cameraPos.length();

        // LOD Check
        // Fade in: 10M -> 50M
        // Opacity 0 -> 1
        let opacity = 0;
        if (dist > 10000000) {
            opacity = (dist - 10000000) / 40000000;
            opacity = Math.max(0, Math.min(1, opacity));
        }

        // Optimization: if opacity is 0, hide
        this.group.visible = opacity > 0.01;
        if (!this.group.visible) return;

        // Update Opacity
        this.materials.forEach(mat => {
            // Max opacity logic:
            // Glow: 0.6
            // Dust: 0.4 (keep it subtle/ghostly)
            const maxOp = 0.5;
            mat.opacity = opacity * maxOp;
        });

        // Dynamic Motion for Dust
        // Rotate the whole heavy cloud layer
        if (this.dustMesh) {
            this.dustMesh.rotation.y = time * 0.002;
        }
    }
}
