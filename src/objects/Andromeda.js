import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createStarTexture, createRadialTexture, createNoiseTexture } from '../utils/textureUtils.js';
import { SYSTEM_POSITIONS } from './SystemPositions.js';

function smoothstep(min, max, value) {
    var x = Math.max(0, Math.min(1, (value - min) / (max - min)));
    return x * x * (3 - 2 * x);
}

/**
 * Andromeda Galaxy (M31)
 * Visuals matched to Milky Way style but positioned at Andromeda coordinates.
 * Significantly smaller than the scaled-up Milky Way.
 */
export class Andromeda extends BaseSystem {
    constructor() {
        super('ANDROMEDA', SYSTEM_POSITIONS.ANDROMEDA);
    }

    build(textures) {
        const starTexture = createStarTexture();
        const radialTexture = createRadialTexture();

        this.group.rotation.x = 0;
        this.group.rotation.z = 0;

        this.createArmDustFill(radialTexture);
        this.createInterArmGas(createNoiseTexture('gas', '#cc4444', '#000000'));
        this.createSpiralArms(starTexture);
        this.createGalacticRing(radialTexture);
        this.createDiskStars(starTexture);
        this.createCentralBlackHole(); // M31* - Andromeda's central black hole

        // Radar target
        const targetMesh = new THREE.Mesh(
            new THREE.SphereGeometry(5000, 16, 16),
            new THREE.MeshBasicMaterial({ visible: false })
        );
        targetMesh.userData = { name: 'ANDROMEDA', isSystem: true, baseScale: 5000 };
        this.group.add(targetMesh);
        this.targetables.push(targetMesh);
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
        // Reduced size for Andromeda (approx 0.4x of new Milky Way)
        const r = 200000 + t * 800000;
        const spiralAngle = arm.offset + Math.log(r / 200000) / arm.tightness;

        const physicalWidth = (200000 * (1 - t * 0.92) + 15000) * arm.strength * widthMul;
        const angularSpread = physicalWidth / r;
        const angleOffset = (Math.random() - 0.5) * angularSpread;

        const jitterFactor = 0.35 + t * 0.5;
        const radialJitter = (Math.random() - 0.5) * physicalWidth * jitterFactor;

        const theta = spiralAngle + angleOffset;
        const finalR = r + radialJitter;
        const y = (Math.random() - 0.5) * (10000 * (1 - t * 0.6));

        return { x: Math.cos(theta) * finalR, y: y, z: Math.sin(theta) * finalR };
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

            const brightness = (1 - t * 0.8) * 0.3;
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
            opacity: 0.12, // Dimmed for distance
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
            if (t < 0.15) {
                c.setHSL(0.12, 0.8, 0.8 - t * 2.0);
            } else {
                const fade = smoothstep(1.0, 0.7, t);
                const brightness = 0.3 * (1 - (t - 0.15) * 1.1) * fade; // Dimmed
                c.setHSL(0.6, 0.6, Math.max(0.0, brightness));

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
            opacity: 0.35, // Dimmed from 0.8
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.group.add(new THREE.Points(geo, mat));
    }

    createGalacticRing(texture) {
        const geo = new THREE.BufferGeometry();
        const count = 25000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const innerR = 150000;
        const outerR = 650000;

        for (let i = 0; i < count; i++) {
            const t = Math.random();
            const angle = Math.random() * Math.PI * 2;
            const noise = Math.sin(angle * 3) * 0.2 + Math.cos(angle * 7) * 0.1;
            const finalOuterR = outerR * (1.0 + noise);

            const r = innerR + Math.pow(t, 1.8) * (finalOuterR - innerR);
            const y = (Math.random() - 0.5) * 20000 * Math.sin(Math.PI * t);

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
            size: 9000,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.3, // Dimmed from 0.6
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.group.add(new THREE.Points(geo, mat));
    }

    createInterArmGas(texture) {
        const geo = new THREE.BufferGeometry();
        const count = 5000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        let valid = 0;
        for (let i = 0; i < count; i++) {
            const r = Math.random() * 300000;
            const theta = Math.random() * Math.PI * 2;
            const x = Math.cos(theta) * r;
            const z = Math.sin(theta) * r;
            const y = (Math.random() - 0.5) * 25000;

            positions[valid * 3] = x;
            positions[valid * 3 + 1] = y;
            positions[valid * 3 + 2] = z;

            const c = new THREE.Color().setHSL(0.7 + Math.random() * 0.1, 0.6, 0.05 + Math.random() * 0.1);
            colors[valid * 3] = c.r;
            colors[valid * 3 + 1] = c.g;
            colors[valid * 3 + 2] = c.b;
            valid++;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions.slice(0, valid * 3), 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors.slice(0, valid * 3), 3));

        const mat = new THREE.PointsMaterial({
            size: 35000,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.08, // Dimmed
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
            const r = 200000 + Math.random() * 800000;
            const theta = Math.random() * Math.PI * 2;

            if (Math.random() > Math.exp(-r / 500000) * 3) continue;

            positions[valid * 3] = Math.cos(theta) * r;
            positions[valid * 3 + 1] = (Math.random() - 0.5) * 12500;
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
            opacity: 0.15, // Dimmed from 0.3
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.group.add(new THREE.Points(geo, mat));
    }

    update(delta, time) {
        this.group.rotation.y += delta * 0.005; // Visible galactic rotation
    }

    createCentralBlackHole() {
        // M31* - Andromeda's central supermassive black hole (smaller than Sag A*)
        // Simple dark sphere with faint accretion glow ring
        const bhGeo = new THREE.SphereGeometry(8000, 32, 32);
        const bhMat = new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: false
        });
        const bhMesh = new THREE.Mesh(bhGeo, bhMat);
        this.group.add(bhMesh);

        // Faint accretion glow ring around it
        const ringGeo = new THREE.RingGeometry(10000, 25000, 64);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0xff6622,
            transparent: true,
            opacity: 0.3,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI * 0.5; // Flat on galactic plane
        this.group.add(ringMesh);
    }
}
