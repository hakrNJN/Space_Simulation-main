import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createStarTexture, createRadialTexture } from '../utils/textureUtils.js';

/**
 * MilkyWay - 4-arm Barred Spiral Galaxy
 * 
 * CENTER: **Dark Void** (r < 45,000) — Huge gap for Sgr A*
 * CORE: **Wide Galactic Ring** (r = 45,000 - 135,000) — Dense, bright
 * ARMS: Bright near ring, fading to faint at tips (reversed gradient)
 */
export class MilkyWayBand extends BaseSystem {
    constructor() {
        super('MILKY WAY', { x: 0, y: 0, z: 0 });
    }

    build(textures) {
        const starTexture = createStarTexture();
        const radialTexture = createRadialTexture();

        this.group.rotation.x = Math.PI / 10;
        this.group.rotation.z = Math.PI / 14;

        this.createArmDustFill(radialTexture);
        this.createSpiralArms(starTexture);
        this.createCentralBar(starTexture);
        this.createGalacticRing(radialTexture);
        this.createDiskStars(starTexture);
    }

    _getArms() {
        return [
            { offset: 0, tightness: 0.18, strength: 1.0 },
            { offset: Math.PI * 0.55, tightness: 0.17, strength: 0.9 },
            { offset: Math.PI * 1.05, tightness: 0.20, strength: 0.85 },
            { offset: Math.PI * 1.55, tightness: 0.19, strength: 0.75 }
        ];
    }

    _armPoint(arm, t, widthMul) {
        const r = 140000 + t * 650000;
        const spiralAngle = arm.offset + Math.log(r / 140000) / arm.tightness;

        // WIDE arms
        const physicalWidth = (140000 * (1 - t * 0.92) + 12000) * arm.strength * widthMul;

        const angularSpread = physicalWidth / r;
        const angleOffset = (Math.random() - 0.5) * angularSpread;

        // Disperse tips more to avoid "condensed dots" look
        // Jitter increases slightly at tips relative to width
        const jitterFactor = 0.35 + t * 0.5;
        const radialJitter = (Math.random() - 0.5) * physicalWidth * jitterFactor;

        const theta = spiralAngle + angleOffset;
        const finalR = r + radialJitter;
        const y = (Math.random() - 0.5) * (7000 * (1 - t * 0.6));

        return {
            x: Math.cos(theta) * finalR,
            y: y,
            z: Math.sin(theta) * finalR
        };
    }

    createArmDustFill(texture) {
        const geo = new THREE.BufferGeometry();
        const count = 20000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const arms = this._getArms();

        for (let i = 0; i < count; i++) {
            const arm = arms[i % 4];
            const t = Math.pow(Math.random(), 0.4);
            const pt = this._armPoint(arm, t, 1.1);

            positions[i * 3] = pt.x;
            positions[i * 3 + 1] = pt.y;
            positions[i * 3 + 2] = pt.z;

            // Dust gradient: Bright opaque center -> faint transparent tips
            const brightness = (1 - t * 0.8) * 0.3; // 0.3 -> 0.06
            const c = new THREE.Color().setHSL(0.08 + Math.random() * 0.06, 0.4, brightness);
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 45000,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.25, // Base opacity slightly higher, controlled by color brightness
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.group.add(new THREE.Points(geo, mat));
    }

    createSpiralArms(texture) {
        const geo = new THREE.BufferGeometry();
        const count = 40000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const arms = this._getArms();

        for (let i = 0; i < count; i++) {
            const arm = arms[i % 4];
            const t = Math.pow(Math.random(), 0.5);
            const pt = this._armPoint(arm, t, 0.8);

            positions[i * 3] = pt.x;
            positions[i * 3 + 1] = pt.y;
            positions[i * 3 + 2] = pt.z;

            const c = new THREE.Color();

            // REVERSED BRIGHTNESS GRADIENT
            // t=0 (center): Bright yellow-white, high intensity
            // t=1 (tips): Dim blue, low intensity (fading to black)

            if (t < 0.15) {
                // Interface with ring: Intense yellow-white
                // Blends seamlessly with the ring
                c.setHSL(0.12, 0.8, 0.8 - t * 2.0);
            } else {
                // Main arm body: Blue
                // Brightness fades linearly with distance: 0.6 -> 0.1
                const brightness = 0.6 * (1 - (t - 0.15) * 1.1);
                c.setHSL(0.6, 0.6, Math.max(0.05, brightness));
            }

            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 5000,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.group.add(new THREE.Points(geo, mat));
    }

    createGalacticRing(texture) {
        const geo = new THREE.BufferGeometry();
        const count = 15000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const innerR = 45000;
        const outerR = 135000;

        for (let i = 0; i < count; i++) {
            const t = Math.random();
            const r = innerR + Math.pow(t, 1.5) * (outerR - innerR);
            const theta = Math.random() * Math.PI * 2;
            const y = (Math.random() - 0.5) * 6000 * Math.sin(Math.PI * t);

            positions[i * 3] = Math.cos(theta) * r;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = Math.sin(theta) * r;

            const c = new THREE.Color().setHSL(0.12, 0.8, 0.5 + Math.random() * 0.4);
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 8000,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.75,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.group.add(new THREE.Points(geo, mat));
    }

    createCentralBar(texture) {
        const geo = new THREE.BufferGeometry();
        const count = 12000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const barAngle = Math.PI * 0.15;
        const minL = 45000;
        const maxL = 130000;
        const width = 45000;

        for (let i = 0; i < count; i++) {
            const side = Math.random() > 0.5 ? 1 : -1;
            const along = (minL + Math.random() * (maxL - minL)) * side;
            const perp = (Math.random() - 0.5) * width;

            positions[i * 3] = Math.cos(barAngle) * along - Math.sin(barAngle) * perp;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 4000;
            positions[i * 3 + 2] = Math.sin(barAngle) * along + Math.cos(barAngle) * perp;

            const c = new THREE.Color().setHSL(0.1, 0.6, 0.6);
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 5000,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.group.add(new THREE.Points(geo, mat));
    }

    createDiskStars(texture) {
        const geo = new THREE.BufferGeometry();
        const count = 12000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        let valid = 0;

        for (let i = 0; i < count; i++) {
            const r = 140000 + Math.random() * 650000;
            const theta = Math.random() * Math.PI * 2;
            if (Math.random() > Math.exp(-r / 400000) * 3) continue;

            positions[valid * 3] = Math.cos(theta) * r;
            positions[valid * 3 + 1] = (Math.random() - 0.5) * 5000;
            positions[valid * 3 + 2] = Math.sin(theta) * r;

            const c = new THREE.Color().setHSL(0.6, 0.2, 0.4);
            colors[valid * 3] = c.r;
            colors[valid * 3 + 1] = c.g;
            colors[valid * 3 + 2] = c.b;
            valid++;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions.slice(0, valid * 3), 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors.slice(0, valid * 3), 3));

        const mat = new THREE.PointsMaterial({
            size: 3500,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.group.add(new THREE.Points(geo, mat));
    }

    update(delta, time) {
        this.group.rotation.y += delta * 0.0002;
    }
}
