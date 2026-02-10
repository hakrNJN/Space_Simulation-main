import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createStarTexture, createRadialTexture } from '../utils/textureUtils.js';
import { SYSTEM_POSITIONS } from './index.js';

/**
 * Andromeda Galaxy (M31) - Realistic Sb-type Spiral Galaxy
 * Located ~2.5 million light-years from the Milky Way
 * Features:
 * - 4 logarithmic spiral arms with varying strength
 * - Exponential density falloff from core
 * - Bright central bulge with volumetric glow
 * - Inter-arm star scatter
 * - HII (star-forming) regions along arms
 * - Realistic color gradients
 */
export class Andromeda extends BaseSystem {
    constructor() {
        super('ANDROMEDA', SYSTEM_POSITIONS.ANDROMEDA);
    }

    build(textures) {
        const starTexture = createStarTexture();
        const radialTexture = createRadialTexture();

        this.createGalacticBulge(radialTexture);
        this.createSpiralArms(starTexture);
        this.createInterArmStars(starTexture);
        this.createHIIRegions(radialTexture);
        this.createDustLanes();
        this.createOuterHalo(radialTexture);
        this.createCoreGlow();

        // Targeting object for radar
        const targetMesh = new THREE.Mesh(
            new THREE.SphereGeometry(5000, 16, 16),
            new THREE.MeshBasicMaterial({ visible: false })
        );
        targetMesh.userData = { name: 'ANDROMEDA', isSystem: true, baseScale: 5000 };
        this.group.add(targetMesh);
        this.targetables.push(targetMesh);

        // Galaxy illumination
        const light = new THREE.PointLight(0xffeedd, 8.0, 600000, 0.5);
        this.group.add(light);
    }

    createGalacticBulge(texture) {
        // Dense central stellar bulge
        const geo = new THREE.BufferGeometry();
        const count = 12000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Exponential concentration toward center
            const r = Math.pow(Math.random(), 3) * 18000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.25; // Very flattened
            positions[i * 3 + 2] = r * Math.cos(phi);

            // Warm yellow-white core (old stellar population)
            const distRatio = r / 18000;
            const c = new THREE.Color().setHSL(
                0.1 + distRatio * 0.05,
                0.5 - distRatio * 0.3,
                0.7 + (1 - distRatio) * 0.25
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
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.group.add(new THREE.Points(geo, mat));
    }

    createSpiralArms(texture) {
        // 4 logarithmic spiral arms with varying strengths
        const geo = new THREE.BufferGeometry();
        const count = 35000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        // Arm parameters: offset angle, tightness, strength
        const arms = [
            { offset: 0, tightness: 0.3, strength: 1.0 },
            { offset: Math.PI * 0.5, tightness: 0.28, strength: 0.85 },
            { offset: Math.PI, tightness: 0.32, strength: 0.9 },
            { offset: Math.PI * 1.5, tightness: 0.26, strength: 0.7 }
        ];

        for (let i = 0; i < count; i++) {
            const armIdx = i % 4;
            const arm = arms[armIdx];

            // Logarithmic spiral
            const t = Math.pow(Math.random(), 0.6);
            const r = 4000 + t * 65000;
            const spiralAngle = arm.offset + Math.log(r / 4000) / arm.tightness;

            // *** TAPERING: angular + radial spread ***
            // Physical width: 18K near center → 3K at tips
            const physicalWidth = (18000 * (1 - t * 0.83) + 3000) * arm.strength;
            const angularSpread = physicalWidth / r;
            const angleOffset = (Math.random() - 0.5) * angularSpread;
            const radialJitter = (Math.random() - 0.5) * physicalWidth * 0.25;

            const theta = spiralAngle + angleOffset;
            const finalR = r + radialJitter;
            const verticalSpread = (Math.random() - 0.5) * 1500 * (1 - t * 0.7);

            positions[i * 3] = Math.cos(theta) * finalR;
            positions[i * 3 + 1] = verticalSpread;
            positions[i * 3 + 2] = Math.sin(theta) * finalR;

            // Color: blue-white young stars in arms, redder at edges
            const distRatio = r / 65000;
            const c = new THREE.Color();
            if (distRatio < 0.3) {
                // Inner arms: white-blue
                c.setHSL(0.6 + Math.random() * 0.08, 0.5, 0.5 + Math.random() * 0.3);
            } else if (distRatio < 0.7) {
                // Mid arms: blue
                c.setHSL(0.58 + Math.random() * 0.1, 0.6, 0.4 + Math.random() * 0.3);
            } else {
                // Outer arms: dimmer blue
                c.setHSL(0.6 + Math.random() * 0.05, 0.4, 0.3 + Math.random() * 0.2);
            }
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 1800,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.75,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.group.add(new THREE.Points(geo, mat));
    }

    createInterArmStars(texture) {
        // Scattered stars between arms (disk population)
        const geo = new THREE.BufferGeometry();
        const count = 8000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const r = 3000 + Math.random() * 60000;
            const theta = Math.random() * Math.PI * 2;
            const y = (Math.random() - 0.5) * 2500;

            // Exponential density falloff
            const densityWeight = Math.exp(-r / 30000);
            if (Math.random() > densityWeight * 2) {
                // Skip this particle (sparser at edges)
                positions[i * 3] = 0;
                positions[i * 3 + 1] = 0;
                positions[i * 3 + 2] = 0;
                colors[i * 3] = 0;
                colors[i * 3 + 1] = 0;
                colors[i * 3 + 2] = 0;
                continue;
            }

            positions[i * 3] = Math.cos(theta) * r;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = Math.sin(theta) * r;

            // Dim yellowish field stars
            const c = new THREE.Color().setHSL(
                0.12 + Math.random() * 0.08,
                0.3,
                0.3 + Math.random() * 0.2
            );
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 1200,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.group.add(new THREE.Points(geo, mat));
    }

    createHIIRegions(texture) {
        // Pink/red star-forming regions along spiral arms
        const geo = new THREE.BufferGeometry();
        const count = 2000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Place along spiral arms
            const armIdx = Math.floor(Math.random() * 4);
            const offsets = [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5];

            const t = 0.2 + Math.random() * 0.6; // Mid-section of arms
            const r = 10000 + t * 45000;
            const spiralAngle = offsets[armIdx] + Math.log(r / 4000) / 0.3;

            // Tight clusters
            const clusterSpread = 1500 + Math.random() * 2000;
            const cx = Math.cos(spiralAngle) * r + (Math.random() - 0.5) * clusterSpread;
            const cz = Math.sin(spiralAngle) * r + (Math.random() - 0.5) * clusterSpread;

            positions[i * 3] = cx;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 800;
            positions[i * 3 + 2] = cz;

            // HII emission: pink-red (H-alpha)
            const c = new THREE.Color().setHSL(
                0.95 + Math.random() * 0.1, // pink-red
                0.8,
                0.35 + Math.random() * 0.2
            );
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 3000,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.25,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.group.add(new THREE.Points(geo, mat));
    }

    createDustLanes() {
        // Dark dust lanes between and along arms
        const geo = new THREE.BufferGeometry();
        const count = 6000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const t = Math.random();
            const r = 6000 + t * 55000;
            // Place just inside the spiral arms
            const armIdx = Math.floor(Math.random() * 4);
            const offsets = [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5];
            const spiralAngle = offsets[armIdx] + Math.log(r / 4000) / 0.3 - 0.15;

            const spread = (Math.random() - 0.5) * 3000;

            positions[i * 3] = Math.cos(spiralAngle) * r + spread;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 800;
            positions[i * 3 + 2] = Math.sin(spiralAngle) * r + spread;

            const c = new THREE.Color().setHSL(0.06, 0.5, 0.06 + Math.random() * 0.04);
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 3500,
            vertexColors: true,
            transparent: true,
            opacity: 0.4,
            depthWrite: false
        });

        this.group.add(new THREE.Points(geo, mat));
    }

    createOuterHalo(texture) {
        // Faint globular cluster halo
        const geo = new THREE.BufferGeometry();
        const count = 2500;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const r = 50000 + Math.random() * 35000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.35;
            positions[i * 3 + 2] = r * Math.cos(phi);

            const c = new THREE.Color().setHSL(0.12, 0.2, 0.2 + Math.random() * 0.1);
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
            opacity: 0.12,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.group.add(new THREE.Points(geo, mat));
    }

    createCoreGlow() {
        // Bright central AGN/bulge glow sprite
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, 'rgba(255, 240, 220, 1)');
        gradient.addColorStop(0.1, 'rgba(255, 220, 180, 0.8)');
        gradient.addColorStop(0.3, 'rgba(255, 180, 120, 0.4)');
        gradient.addColorStop(0.6, 'rgba(200, 150, 100, 0.1)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 256);

        const tex = new THREE.CanvasTexture(canvas);
        const spriteMat = new THREE.SpriteMaterial({
            map: tex,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.9
        });
        const glow = new THREE.Sprite(spriteMat);
        glow.scale.set(30000, 30000, 1);
        this.group.add(glow);
    }

    /**
     * Box-Muller transform for Gaussian random number
     */
    gaussianRandom() {
        let u = 0, v = 0;
        while (u === 0) u = Math.random();
        while (v === 0) v = Math.random();
        return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    }

    update(delta, time) {
        // Slow majestic rotation
        this.group.rotation.y += delta * 0.008;
    }
}
