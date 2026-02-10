import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createRadialTexture } from '../utils/textureUtils.js';
import { SYSTEM_POSITIONS } from './SystemPositions.js';

/**
 * Crab Nebula (M1) - Realistic Supernova Remnant
 * Located inside the Milky Way (~6,500 light-years from Earth)
 * Features:
 * - Central pulsar with beams and synchrotron glow
 * - Multi-frequency filamentary structure (no arm patterns)
 * - SII/OIII emission-colored outer fringes (red/green)
 * - Wispy tendrils extending outward via random walk
 * - Asymmetric irregular shape
 */
export class CrabNebula extends BaseSystem {
    constructor() {
        super('CRAB NEBULA', SYSTEM_POSITIONS.CRAB_NEBULA);
    }

    build(textures) {
        const radialTexture = createRadialTexture();

        // Central Pulsar (Neutron Star)
        const pulsar = this.createPulsar();
        this.group.add(pulsar);
        this.targetables.push(pulsar);
        this.pulsar = pulsar;

        // Pulsar light (flashing)
        this.pulsarLight = new THREE.PointLight(0xaaddff, 60.0, 400000, 0.5);
        pulsar.add(this.pulsarLight);

        // Synchrotron radiation glow (large blue-white center glow)
        this.createSynchrotronGlow();

        // IRREGULAR nebula layers
        this.createInnerFilaments(radialTexture);
        this.createOuterFilaments(radialTexture);
        this.createEmissionFringe(radialTexture);
        this.createWispyTendrils(radialTexture);
    }

    createPulsar() {
        const geo = new THREE.SphereGeometry(50, 32, 32);
        const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.userData = { name: 'CRAB PULSAR', isSystem: true, baseScale: 50 };

        // Intense glow sprite
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.1, 'rgba(200,220,255,0.9)');
        gradient.addColorStop(0.4, 'rgba(100,150,255,0.4)');
        gradient.addColorStop(0.7, 'rgba(50,80,200,0.1)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 256);

        const tex = new THREE.CanvasTexture(canvas);
        const spriteMat = new THREE.SpriteMaterial({
            map: tex,
            blending: THREE.AdditiveBlending,
            transparent: true
        });
        const glow = new THREE.Sprite(spriteMat);
        glow.scale.set(5000, 5000, 1);
        mesh.add(glow);

        // Pulsar beams
        const beamGeo = new THREE.CylinderGeometry(50, 250, 25000, 16, 1, true);
        const beamMat = new THREE.MeshBasicMaterial({
            color: 0x88aaff,
            transparent: true,
            opacity: 0.35,
            side: THREE.DoubleSide
        });
        const beam1 = new THREE.Mesh(beamGeo, beamMat);
        beam1.position.y = 12500;
        mesh.add(beam1);

        const beam2 = new THREE.Mesh(beamGeo, beamMat);
        beam2.position.y = -12500;
        beam2.rotation.x = Math.PI;
        mesh.add(beam2);

        return mesh;
    }

    createSynchrotronGlow() {
        // Large blue-white synchrotron radiation glow around the pulsar wind nebula
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, 'rgba(180,200,255,0.7)');
        gradient.addColorStop(0.2, 'rgba(120,160,255,0.4)');
        gradient.addColorStop(0.5, 'rgba(80,100,200,0.15)');
        gradient.addColorStop(0.8, 'rgba(40,50,120,0.05)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 256);

        const tex = new THREE.CanvasTexture(canvas);
        const spriteMat = new THREE.SpriteMaterial({
            map: tex,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.8
        });
        const synchGlow = new THREE.Sprite(spriteMat);
        synchGlow.scale.set(20000, 15000, 1);
        this.group.add(synchGlow);
    }

    createInnerFilaments(texture) {
        // Inner filamentary structure - blue/white synchrotron region
        const geo = new THREE.BufferGeometry();
        const count = 22000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            // Asymmetric stretching (unique per direction)
            const stretchX = 1.0 + Math.sin(theta * 2.3) * 0.5 + Math.cos(phi * 1.7) * 0.3;
            const stretchY = 0.55 + Math.cos(theta * 3.1 + phi * 0.8) * 0.25;
            const stretchZ = 1.15 + Math.sin(theta * 1.5 + phi * 2.4) * 0.45;

            const baseR = Math.pow(Math.random(), 0.5) * 22000;

            // Multi-frequency filament distortion
            const f1 = Math.sin(theta * 5.3 + phi * 2.7) * 0.35;
            const f2 = Math.cos(theta * 3.1 - phi * 4.2) * 0.2;
            const f3 = Math.sin(theta * 7.8 + phi * 1.3) * 0.12;
            const r = baseR * (1 + f1 + f2 + f3);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta) * stretchX;
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * stretchY;
            positions[i * 3 + 2] = r * Math.cos(phi) * stretchZ;

            // Inner blue → outer orange/red transition
            const c = new THREE.Color();
            const distRatio = baseR / 22000;
            if (distRatio < 0.2) {
                // Core: bright white-blue
                c.setHSL(0.6, 0.7, 0.75 + Math.random() * 0.2);
            } else if (distRatio < 0.4) {
                // Inner: blue
                c.setHSL(0.58 + Math.random() * 0.06, 0.75, 0.6 + Math.random() * 0.15);
            } else if (distRatio < 0.65) {
                // Mid: cyan-green (OIII emission)
                c.setHSL(0.45 + Math.random() * 0.1, 0.7, 0.45 + Math.random() * 0.15);
            } else {
                // Outer: red-orange (SII emission)
                c.setHSL(0.03 + Math.random() * 0.05, 0.85, 0.4 + Math.random() * 0.15);
            }
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 800,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.75,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.group.add(new THREE.Points(geo, mat));
    }

    createOuterFilaments(texture) {
        // Outer shell with visible asymmetry and tendrils
        const geo = new THREE.BufferGeometry();
        const count = 5000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            const baseR = 15000 + Math.random() * 22000;
            const irregular = Math.sin(theta * 3.7) * Math.cos(phi * 2.9) * 8000
                + Math.sin(theta * 6.1 + phi * 1.8) * 4000;
            const r = baseR + irregular;

            // More pronounced asymmetry
            const xS = 1.35 + Math.sin(theta * 0.7) * 0.2;
            const yS = 0.65;
            const zS = 0.85 + Math.cos(theta * 1.3) * 0.15;

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta) * xS;
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * yS;
            positions[i * 3 + 2] = r * Math.cos(phi) * zS;

            // Purple/magenta outer shell
            const c = new THREE.Color().setHSL(
                0.82 + Math.random() * 0.08,
                0.6 + Math.random() * 0.2,
                0.3 + Math.random() * 0.15
            );
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 2500,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.group.add(new THREE.Points(geo, mat));
    }

    createEmissionFringe(texture) {
        // SII (red) and OIII (green) emission fringes at the boundary
        const geo = new THREE.BufferGeometry();
        const count = 3000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            const r = 18000 + Math.random() * 15000;
            const warp = Math.sin(theta * 4.3 + phi * 2.1) * 5000;

            positions[i * 3] = (r + warp) * Math.sin(phi) * Math.cos(theta) * 1.3;
            positions[i * 3 + 1] = (r + warp) * Math.sin(phi) * Math.sin(theta) * 0.6;
            positions[i * 3 + 2] = (r + warp) * Math.cos(phi) * 0.9;

            // Alternate between SII red and OIII green
            const c = new THREE.Color();
            if (Math.random() < 0.6) {
                // SII: deep red
                c.setHSL(0.0 + Math.random() * 0.03, 0.8, 0.3 + Math.random() * 0.15);
            } else {
                // OIII: teal-green
                c.setHSL(0.42 + Math.random() * 0.05, 0.7, 0.3 + Math.random() * 0.12);
            }
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 1500,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.25,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.group.add(new THREE.Points(geo, mat));
    }

    createWispyTendrils(texture) {
        // Long wispy tendrils extending outward (random walk displacement)
        const geo = new THREE.BufferGeometry();
        const tendrilCount = 12;
        const pointsPerTendril = 200;
        const count = tendrilCount * pointsPerTendril;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let t = 0; t < tendrilCount; t++) {
            // Random starting direction
            const startTheta = Math.random() * Math.PI * 2;
            const startPhi = Math.random() * Math.PI;
            let px = Math.sin(startPhi) * Math.cos(startTheta) * 15000;
            let py = Math.sin(startPhi) * Math.sin(startTheta) * 8000;
            let pz = Math.cos(startPhi) * 12000;

            // Direction (outward with drift)
            const dx = px / 15000;
            const dy = py / 15000;
            const dz = pz / 15000;

            for (let p = 0; p < pointsPerTendril; p++) {
                const idx = (t * pointsPerTendril + p);

                // Random walk along outward direction
                px += dx * (300 + Math.random() * 800) + (Math.random() - 0.5) * 400;
                py += dy * (200 + Math.random() * 500) + (Math.random() - 0.5) * 300;
                pz += dz * (300 + Math.random() * 800) + (Math.random() - 0.5) * 400;

                positions[idx * 3] = px;
                positions[idx * 3 + 1] = py;
                positions[idx * 3 + 2] = pz;

                // Fade from nebula color to dim red at tips
                const tipFade = p / pointsPerTendril;
                const c = new THREE.Color().setHSL(
                    0.05 + tipFade * 0.02,
                    0.6 - tipFade * 0.3,
                    0.35 - tipFade * 0.2
                );
                colors[idx * 3] = c.r;
                colors[idx * 3 + 1] = c.g;
                colors[idx * 3 + 2] = c.b;
            }
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 600,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.35,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.group.add(new THREE.Points(geo, mat));
    }

    update(delta, time) {
        // Pulsar rotation
        if (this.pulsar) {
            this.pulsar.rotation.y += delta * 5;
            this.pulsar.rotation.x += delta * 0.5;
        }

        // Pulsing light
        if (this.pulsarLight) {
            this.pulsarLight.intensity = 40 + Math.sin(time * 50) * 25;
        }
    }
}
