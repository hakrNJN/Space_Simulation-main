import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createStarTexture, createRadialTexture, createNoiseTexture } from '../utils/textureUtils.js';
import { SYSTEM_POSITIONS } from './SystemPositions.js';

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
        this.createInterArmGas(createNoiseTexture('gas', '#4400cc', '#000000')); // NEW: Fill gaps
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
        // Scaled by 1.5x (Total ~5.6x original)
        const r = 787500 + t * 3656250; // 525k -> 787.5k, 2.4375M -> 3.65M
        const spiralAngle = arm.offset + Math.log(r / 787500) / arm.tightness;

        // WIDE arms (Scaled)
        const physicalWidth = (787500 * (1 - t * 0.92) + 67500) * arm.strength * widthMul;

        const angularSpread = physicalWidth / r;
        const angleOffset = (Math.random() - 0.5) * angularSpread;

        const jitterFactor = 0.35 + t * 0.5;
        const radialJitter = (Math.random() - 0.5) * physicalWidth * jitterFactor;

        const theta = spiralAngle + angleOffset;
        const finalR = r + radialJitter;

        // Vertical Bulge Logic: Smooth taper from center to edge
        // 2.5x thickness for visible bulge profile
        const thickness = 20000 + 875000 * Math.pow(1 - t, 1.2);
        // Gaussian-like distribution: stars concentrate near midplane, soft fade at edges
        const y = thickness * 0.5 * (Math.random() + Math.random() + Math.random() - 1.5) * 0.67;

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

        const mat = new THREE.PointsMaterial({
            size: 5000,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.56, // Reduced from 0.8 to 0.56 (70%)
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.group.add(new THREE.Points(geo, mat));
    }

    createGalacticRing(texture) {
        const geo = new THREE.BufferGeometry();
        const count = 25000; // Increased count for spread
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const innerR = 590625; // 393,750 * 1.5
        const outerR = 2812500; // 1.875M * 1.5

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

        const mat = new THREE.PointsMaterial({
            size: 9000, // Larger flares
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.group.add(new THREE.Points(geo, mat));
    }

    createInterArmGas(texture) {
        // Massive Gas Clouds filling the gaps
        const geo = new THREE.BufferGeometry();
        const count = 5000; // Big blurred clouds
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const systems = Object.values(SYSTEM_POSITIONS);

        let valid = 0;
        for (let i = 0; i < count; i++) {
            const r = 800000 + Math.random() * 2800000; // Start at 800k - outer arms only
            const theta = Math.random() * Math.PI * 2;

            const x = Math.cos(theta) * r;
            const z = Math.sin(theta) * r;

            // Gas cloud thickness follows bulge
            const normR = r / 3600000;
            const gasThickness = 40000 + 80000 * Math.exp(-normR * 3);
            const y = (Math.random() - 0.5) * gasThickness;

            // Exclusion Zone Check
            let excluded = false;
            for (const sys of systems) {
                const dx = x - sys.x;
                const dy = y - sys.y;
                const dz = z - sys.z;
                if (dx * dx + dy * dy + dz * dz < 225000 * 225000) { // 150k -> 225k radius clear zone
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

        const mat = new THREE.PointsMaterial({
            size: 35000, // HUGE
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.15, // Very faint but voluminous
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

    createCoreStars(texture) {
        // High density core stars (Bulge)
        const geo = new THREE.BufferGeometry();
        const count = 8000; // ~0.7x of disk stars (12000)
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Gap 300,000 (User Request)
            // Spread into large area up to 750k (Filling inner galaxy)
            const r = 300000 + Math.pow(Math.random(), 1.5) * 450000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            // Spherical bulge, slightly flattened y
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = (r * Math.sin(phi) * Math.sin(theta)) * 0.6;
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

        const mat = new THREE.PointsMaterial({
            size: 6000,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.group.add(new THREE.Points(geo, mat));
    }

    createCoreDust(texture) {
        // Blurry dust / gas balls in the core cluster region
        const geo = new THREE.BufferGeometry();
        const count = 3000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Same region as core stars: 300k - 750k
            const r = 300000 + Math.random() * 450000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = (r * Math.sin(phi) * Math.sin(theta)) * 0.5; // Flattened
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Warm amber / orange / reddish dust
            const c = new THREE.Color().setHSL(
                0.05 + Math.random() * 0.1,
                0.5 + Math.random() * 0.3,
                0.08 + Math.random() * 0.12
            );
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 50000, // Very large, blurry
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.2,
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
            const r = 787500 + Math.random() * 3656250; // 525k -> 787.5k, 2.437M -> 3.65M
            const theta = Math.random() * Math.PI * 2;
            if (Math.random() > Math.exp(-r / 2250000) * 3) continue; // Decay 1.5M -> 2.25M

            positions[valid * 3] = Math.cos(theta) * r;
            const t = (r - 787500) / 3656250;
            const starThickness = 75000 + 375000 * Math.pow(1 - t, 1.2); // 2.5x smooth taper
            // Gaussian-like y
            positions[valid * 3 + 1] = starThickness * 0.5 * (Math.random() + Math.random() + Math.random() - 1.5) * 0.67;
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
        this.group.rotation.y += delta * 0.005; // Visible galactic rotation
    }
}
