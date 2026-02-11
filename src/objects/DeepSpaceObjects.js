import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createStarTexture, createRadialTexture } from '../utils/textureUtils.js';

/**
 * DeepSpaceObjects
 * Unique celestial phenomena outside the main galaxy.
 */
export class DeepSpaceObjects extends BaseSystem {
    constructor() {
        super('DEEP_SPACE', { x: 0, y: 0, z: 0 });
    }

    build(textures) {
        const starTexture = createStarTexture();
        const radialTexture = createRadialTexture();

        // 1. GOD'S HAND NEBULA
        // A complex nebula structure shaped like a hand reaching for a star.
        // Location: Far quadrant
        this.createGodsHand(new THREE.Vector3(12000000, 3000000, 12000000), radialTexture, starTexture);

        // 2. GLOBULAR CLUSTER (Omega Centauri inspired)
        // High halo orbit
        this.createGlobularCluster(new THREE.Vector3(0, 6000000, 0), starTexture);
    }

    createGodsHand(pos, dustTexture, starTexture) {
        const group = new THREE.Group();
        group.position.copy(pos);
        group.lookAt(0, 0, 0); // Face center

        // A. The "Palm" (Main Cloud)
        // Dark Red/Purple dust
        const palmGeo = new THREE.BufferGeometry();
        const palmCount = 8000;
        const palmPos = [];
        const palmCol = [];

        for (let i = 0; i < palmCount; i++) {
            // Rough sphere/blob
            const r = 400000 + Math.random() * 400000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            palmPos.push(
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.sin(phi) * Math.sin(theta) * 0.8, // Slightly flattened
                r * Math.cos(phi)
            );

            // Dark Purple/Red
            const c = new THREE.Color().setHSL(0.8 + Math.random() * 0.1, 0.6, 0.05 + Math.random() * 0.1);
            palmCol.push(c.r, c.g, c.b);
        }
        palmGeo.setAttribute('position', new THREE.Float32BufferAttribute(palmPos, 3));
        palmGeo.setAttribute('color', new THREE.Float32BufferAttribute(palmCol, 3));

        const palmMat = new THREE.PointsMaterial({
            size: 60000,
            map: dustTexture,
            vertexColors: true,
            transparent: true,
            opacity: 0.15,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        group.add(new THREE.Points(palmGeo, palmMat));


        // B. The "Fingers" (Pillars)
        // 3 Cylinders extending up/out
        const fingersGeo = new THREE.BufferGeometry();
        const fingersPos = [];
        const fingersCol = [];
        const fingerCount = 6000;

        for (let f = 0; f < 3; f++) {
            // Finger offset
            const fAngle = (f - 1) * 0.5; // -0.5, 0, 0.5 radians

            for (let i = 0; i < fingerCount / 3; i++) {
                const h = Math.random() * 800000; // Length
                const r = 60000 + Math.random() * 100000 * (1 - h / 800000); // Taper
                const a = Math.random() * Math.PI * 2;

                // Local cylinder
                let x = Math.cos(a) * r;
                let z = Math.sin(a) * r;
                let y = h + 200000; // Start above palm

                // Rotate finger to spread
                const rx = x * Math.cos(fAngle) - z * Math.sin(fAngle);
                const rz = x * Math.sin(fAngle) + z * Math.cos(fAngle);

                // Tilt fingers inward slightly (grasping)
                const graspAngle = 0.3 * (h / 800000);
                const gx = rx; // Simplify
                const gy = y * Math.cos(graspAngle) - z * Math.sin(graspAngle);
                const gz = y * Math.sin(graspAngle) + z * Math.cos(graspAngle);

                // Offset x/z for separation
                const finalX = gx + (f - 1) * 300000;

                fingersPos.push(finalX, gy, gz);

                const c = new THREE.Color().setHSL(0.9 + Math.random() * 0.1, 0.7, 0.1 + Math.random() * 0.1); // Redder
                fingersCol.push(c.r, c.g, c.b);
            }
        }
        fingersGeo.setAttribute('position', new THREE.Float32BufferAttribute(fingersPos, 3));
        fingersGeo.setAttribute('color', new THREE.Float32BufferAttribute(fingersCol, 3));

        group.add(new THREE.Points(fingersGeo, palmMat)); // Reuse mat

        // C. The "Jewel" (Pulsar)
        // Bright blue star in the 'hand'
        const jewelGeo = new THREE.BufferGeometry();
        jewelGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 1000000, 200000], 3)); // Above palm
        const jewelMat = new THREE.PointsMaterial({
            size: 200000, // Huge flare
            map: starTexture,
            color: 0x00ffff,
            transparent: true,
            opacity: 1.0,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        group.add(new THREE.Points(jewelGeo, jewelMat));

        this.group.add(group);
    }

    createGlobularCluster(pos, texture) {
        const geo = new THREE.BufferGeometry();
        const count = 10000;
        const positions = [];
        const colors = [];

        for (let i = 0; i < count; i++) {
            // Dense core, diffuse halo
            // Inverse power law approx
            const r = 200000 * Math.pow(Math.random(), 3) + 50000 * Math.random();
            // Wait, pow(rnd, 3) concentrates near 0. Correct.
            // Scale: 200k radius

            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions.push(
                pos.x + r * Math.sin(phi) * Math.cos(theta),
                pos.y + r * Math.sin(phi) * Math.sin(theta),
                pos.z + r * Math.cos(phi)
            );

            // Old stars: Yellow, White, Red
            const type = Math.random();
            const c = new THREE.Color();
            if (type > 0.7) c.setHSL(0.15, 0.8, 0.7); // Yellow
            else if (type > 0.3) c.setHSL(0.05, 0.8, 0.6); // Red/Orange
            else c.setHSL(0.6, 0.0, 0.9); // White dwarf approx

            colors.push(c.r, c.g, c.b);
        }

        geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 4000,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.group.add(new THREE.Points(geo, mat));
    }

    update(delta, time) {
        // Static
    }
}
