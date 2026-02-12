import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createStarTexture, createRadialTexture, createNoiseTexture } from '../utils/textureUtils.js';
import { SYSTEM_POSITIONS } from './SystemPositions.js';
import { adaptMaterial } from '../utils/materialAdapter.js';

function smoothstep(min, max, value) {
    var x = Math.max(0, Math.min(1, (value - min) / (max - min)));
    return x * x * (3 - 2 * x);
}

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

        this.group.rotation.x = 0;
        this.group.rotation.z = 0;

        this.createArmDustFill(radialTexture);
        this.createSpiralArms(starTexture);
        // this.createCentralBar(starTexture); // Removed to empty center ("H type" fix)
        this.createGalacticRing(radialTexture);
        this.createDiskStars(starTexture);
        this.createCoreStars(starTexture); // Dense core stars
        this.createCoreDust(radialTexture); // Blurry dust in cluster
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
        // Scaled by 1.5x (Total ~8.4x original)
        // 787.5k * 1.5 = 1181250
        // 3.65M * 1.5 = 5484375
        const r = 1181250 + t * 5484375;
        const spiralAngle = arm.offset + Math.log(r / 1181250) / arm.tightness;

        // WIDE arms (Scaled 1.5x width too)
        // Base width 2.36M * 1.5 = 3.54M
        const baseWidth = 3540000;
        const tipWidth = 60000;
        const physicalWidth = (baseWidth * Math.pow(1 - t, 3) + tipWidth) * arm.strength * widthMul;

        const angularSpread = physicalWidth / r;
        const angleOffset = (Math.random() - 0.5) * angularSpread;

        const jitterFactor = 0.35 + t * 0.5;
        const radialJitter = (Math.random() - 0.5) * physicalWidth * jitterFactor;

        const theta = spiralAngle + angleOffset;
        const finalR = r + radialJitter;

        // Vertical Bulge Logic - Scaled thickness 1.5x
        const thickness = 30000 + 1312500 * Math.pow(1 - t, 1.2);

        const y = thickness * 0.5 * (Math.random() + Math.random() + Math.random() - 1.5) * 0.67;

        return {
            x: Math.cos(theta) * finalR,
            y: y,
            z: Math.sin(theta) * finalR
        };
    }

    createArmDustFill(texture) {
        const geo = new THREE.BufferGeometry();
        const count = 30000; // Increased 1.5x (20k -> 30k)
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const arms = this._getArms();
        const systems = Object.values(SYSTEM_POSITIONS);

        for (let i = 0; i < count; i++) {
            const arm = arms[i % 4];
            const t = Math.pow(Math.random(), 0.4);
            const pt = this._armPoint(arm, t, 1.1);

            // Exclusion Zone: 250k radius around named systems
            // Exclusion Zone: 375k around named systems
            let excluded = false;
            for (const sys of systems) {
                const dx = pt.x - sys.x;
                const dy = pt.y - sys.y;
                const dz = pt.z - sys.z;
                if (dx * dx + dy * dy + dz * dz < 140625000000) { // 375,000^2
                    excluded = true;
                    break;
                }
            }
            if (excluded) {
                positions[i * 3] = 0; positions[i * 3 + 1] = 0; positions[i * 3 + 2] = 0;
                continue;
            }

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

        const baseMat = new THREE.PointsMaterial({
            size: 45000,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.25, // Base opacity slightly higher, controlled by color brightness
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const mat = adaptMaterial(baseMat, this.engine.isWebGPU);
        this.group.add(new THREE.Points(geo, mat));
    }

    createSpiralArms(texture) {
        const geo = new THREE.BufferGeometry();
        const count = 60000; // Increased 1.5x (40k -> 60k)
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const arms = this._getArms();

        for (let i = 0; i < count; i++) {
            const arm = arms[i % 4];
            // 40x Density Gradient: Bunch at center
            // Power 3.0 -> Very high density near t=0
            const t = Math.pow(Math.random(), 3.0);
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
                c.setHSL(0.12, 0.8, 0.8 - t * 2.0);
            } else {
                // Main arm body: Blue -> Fades to Black at tips
                // Sharp drop-off at tips (t > 0.8)
                const fade = smoothstep(1.0, 0.7, t);
                const brightness = 0.42 * (1 - (t - 0.15) * 1.1) * fade; // Reduced from 0.6 to 0.42 (70%)
                c.setHSL(0.6, 0.6, Math.max(0.0, brightness));

                // If brightness is too low, skip or make invisible
                if (brightness < 0.01 && Math.random() > 0.1) {
                    colors[i * 3] = 0; colors[i * 3 + 1] = 0; colors[i * 3 + 2] = 0;
                    continue;
                }
            }

            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const baseMat = new THREE.PointsMaterial({
            size: 5000,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.56, // Reduced from 0.8 to 0.56 (70%)
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const mat = adaptMaterial(baseMat, this.engine.isWebGPU);
        this.group.add(new THREE.Points(geo, mat));
    }

    createGalacticRing(texture) {
        const geo = new THREE.BufferGeometry();
        const count = 37500; // Increased 1.5x (25k -> 37.5k)
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const innerR = 885937; // 590625 * 1.5
        const outerR = 4218750; // 2.8125M * 1.5

        for (let i = 0; i < count; i++) {
            const t = Math.random();
            const angle = Math.random() * Math.PI * 2;

            // Irregular Radius: Wobbly shape
            // Noise based on angle
            const noise = Math.sin(angle * 3) * 0.2 + Math.cos(angle * 7) * 0.1;
            const finalOuterR = outerR * (1.0 + noise);

            const r = innerR + Math.pow(t, 1.8) * (finalOuterR - innerR);

            // Ring thickness: 2.5x for visible bulge
            const ringThickness = 100000 + 500000 * Math.pow(1 - t, 1.2);
            // Gaussian-like y distribution
            const y = ringThickness * 0.5 * (Math.random() + Math.random() + Math.random() - 1.5) * 0.67;

            positions[i * 3] = Math.cos(angle) * r;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = Math.sin(angle) * r;

            const c = new THREE.Color().setHSL(0.12 + Math.random() * 0.05, 0.8, 0.5 + Math.random() * 0.4);
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const baseMat = new THREE.PointsMaterial({
            size: 9000, // Larger flares
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const mat = adaptMaterial(baseMat, this.engine.isWebGPU);
        this.group.add(new THREE.Points(geo, mat));
    }

    createInterArmGas(texture) {
        // Massive Gas Clouds filling the gaps
        const geo = new THREE.BufferGeometry();
        const count = 7500; // Increased 1.5x (5k -> 7.5k)
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const systems = Object.values(SYSTEM_POSITIONS);

        let valid = 0;
        for (let i = 0; i < count; i++) {
            const r = 1200000 + Math.random() * 4200000; // Scaled 1.5x (800k -> 1.2M, 2.8M -> 4.2M)
            const theta = Math.random() * Math.PI * 2;

            const x = Math.cos(theta) * r;
            const z = Math.sin(theta) * r;

            // Gas cloud thickness follows bulge
            const normR = r / 5400000;
            const gasThickness = 60000 + 120000 * Math.exp(-normR * 3);
            const y = (Math.random() - 0.5) * gasThickness;

            // Exclusion Zone Check
            // Increased exclusion radius to 375k (140.625e9)
            let excluded = false;
            for (const sys of systems) {
                const dx = x - sys.x;
                const dy = y - sys.y;
                const dz = z - sys.z;
                if (dx * dx + dy * dy + dz * dz < 140625000000) {
                    excluded = true;
                    break;
                }
            }
            if (excluded) continue;

            positions[valid * 3] = x;
            positions[valid * 3 + 1] = y;
            positions[valid * 3 + 2] = z;

            // Deep purple/blue gas
            const c = new THREE.Color().setHSL(0.7 + Math.random() * 0.1, 0.6, 0.05 + Math.random() * 0.1);
            colors[valid * 3] = c.r;
            colors[valid * 3 + 1] = c.g;
            colors[valid * 3 + 2] = c.b;
            valid++;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions.slice(0, valid * 3), 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors.slice(0, valid * 3), 3));

        const baseMat = new THREE.PointsMaterial({
            size: 35000, // HUGE
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.15, // Very faint but voluminous
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const mat = adaptMaterial(baseMat, this.engine.isWebGPU);
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

        const baseMat = new THREE.PointsMaterial({
            size: 5000,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const mat = adaptMaterial(baseMat, this.engine.isWebGPU);
        this.group.add(new THREE.Points(geo, mat));
    }

    createCoreStars(texture) {
        // High density core stars (Bulge)
        const geo = new THREE.BufferGeometry();
        const count = 12000; // Increased 1.5x (8k -> 12k)
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Gap 675k (1.5x)
            // Spread up to 2.7M (1.5x)
            const r = 675000 + Math.pow(Math.random(), 1.5) * 2025000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            // Spherical bulge, slightly flattened y
            // Increased y volume 2x (0.6 -> 1.2)
            // Flattened Core: 0.4 vertical scaling (was 1.2)
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = (r * Math.sin(phi) * Math.sin(theta)) * 0.4;
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Warm/White/Yellow core colors
            const c = new THREE.Color().setHSL(0.08 + Math.random() * 0.08, 0.8, 0.6 + Math.random() * 0.4);
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const baseMat = new THREE.PointsMaterial({
            size: 6000,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const mat = adaptMaterial(baseMat, this.engine.isWebGPU);
        this.group.add(new THREE.Points(geo, mat));
    }

    createCoreDust(texture) {
        // Blurry dust / gas balls in the core cluster region
        const geo = new THREE.BufferGeometry();
        const count = 6000; // Increased densely for "brown chocolate" clouds
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Scaled 1.5x: 2.25M - 3.375M
            const r = 2250000 + Math.random() * 2250000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = (r * Math.sin(phi) * Math.sin(theta)) * 0.4;
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // CHOCOLATE BROWN CLOUDS
            // HSL ~ 0.04 (Orange-Red), 0.6 Sat, 0.15 Lightness (Dark Brown)
            const c = new THREE.Color().setHSL(
                0.04 + Math.random() * 0.02,
                0.6 + Math.random() * 0.2, // Rich saturation
                0.1 + Math.random() * 0.1  // Very dark
            );
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const baseMat = new THREE.PointsMaterial({
            size: 50000, // Very large, blurry
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.2,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const mat = adaptMaterial(baseMat, this.engine.isWebGPU);
        this.group.add(new THREE.Points(geo, mat));
    }

    createDiskStars(texture) {
        const geo = new THREE.BufferGeometry();
        const count = 18000; // Scaled 1.5x (12k -> 18k)
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const systems = Object.values(SYSTEM_POSITIONS);
        let valid = 0;

        for (let i = 0; i < count; i++) {
            // Scaled 1.5x: 787.5k -> 1.18M, 3.65M -> 5.48M
            // 2.25M decay -> 3.375M
            const r = 1181250 + Math.random() * 5484375;
            const theta = Math.random() * Math.PI * 2;
            if (Math.random() > Math.exp(-r / 3375000) * 3) continue;

            const t = (r - 1181250) / 5484375;
            const starThickness = 30000 + 1312500 * Math.pow(1 - t, 1.2);

            const x = Math.cos(theta) * r;
            const z = Math.sin(theta) * r;
            const y = starThickness * 0.5 * (Math.random() + Math.random() + Math.random() - 1.5) * 0.67;

            // Exclusion Zone
            // Exclusion Zone: 375k
            let excluded = false;
            for (const sys of systems) {
                const dx = x - sys.x;
                const dy = y - sys.y;
                const dz = z - sys.z;
                if (dx * dx + dy * dy + dz * dz < 140625000000) {
                    excluded = true;
                    break;
                }
            }
            if (excluded) continue;

            positions[valid * 3] = x;
            positions[valid * 3 + 1] = y;
            positions[valid * 3 + 2] = z;

            const c = new THREE.Color().setHSL(0.6, 0.2, 0.4);
            colors[valid * 3] = c.r;
            colors[valid * 3 + 1] = c.g;
            colors[valid * 3 + 2] = c.b;
            valid++;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions.slice(0, valid * 3), 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors.slice(0, valid * 3), 3));

        const baseMat = new THREE.PointsMaterial({
            size: 3500,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const mat = adaptMaterial(baseMat, this.engine.isWebGPU);
        this.group.add(new THREE.Points(geo, mat));
    }

    update(delta, time) {
        this.group.rotation.y += delta * 0.005; // Visible galactic rotation
    }
}
