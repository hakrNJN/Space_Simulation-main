import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createStarTexture } from '../utils/textureUtils.js';
import { adaptMaterial } from '../utils/materialAdapter.js';

/**
 * Constellations - Star patterns across the universe
 * 
 * 5 Inner "Home" Constellations (Inside Milky Way)
 * 5 Outer "Alien" Constellations (Far outside galaxy)
 */
export class Constellations extends BaseSystem {
    constructor() {
        super('CONSTELLATIONS', { x: 0, y: 0, z: 0 });
    }

    build() {
        const baseMaterial = new THREE.LineBasicMaterial({
            color: 0xffff88, // Pale yellow
            transparent: true,
            opacity: 0.25,   // Faint lines
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const material = adaptMaterial(baseMaterial, this.engine?.isWebGPU);

        const lines = [];

        // === 5 INNER CONSTELLATIONS (Home Galaxy) ===
        // Random lines connecting points within 2M - 6M range
        for (let i = 0; i < 5; i++) {
            const numStars = 4 + Math.floor(Math.random() * 4); // 4-7 stars
            const centerX = (Math.random() - 0.5) * 8000000;
            const centerZ = (Math.random() - 0.5) * 8000000;
            const centerY = (Math.random() - 0.5) * 500000;

            let lastX = centerX;
            let lastY = centerY;
            let lastZ = centerZ;

            for (let j = 0; j < numStars; j++) {
                const nextX = lastX + (Math.random() - 0.5) * 1500000;
                const nextY = lastY + (Math.random() - 0.5) * 200000;
                const nextZ = lastZ + (Math.random() - 0.5) * 1500000;

                lines.push(lastX, lastY, lastZ);
                lines.push(nextX, nextY, nextZ);

                lastX = nextX;
                lastY = nextY;
                lastZ = nextZ;
            }
        }

        // === 5 OUTER CONSTELLATIONS (Alien) ===
        // Distant patterns far outside (15M+ range)
        for (let i = 0; i < 5; i++) {
            const numStars = 5 + Math.floor(Math.random() * 5); // 5-9 stars

            // Pick a distant octant
            const dist = 25000000 + Math.random() * 20000000; // 25M - 45M
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            const baseX = dist * Math.sin(phi) * Math.cos(theta);
            const baseY = dist * Math.sin(phi) * Math.sin(theta);
            const baseZ = dist * Math.cos(phi);

            let lastX = baseX;
            let lastY = baseY;
            let lastZ = baseZ;

            for (let j = 0; j < numStars; j++) {
                // Large scale patterns for distant viewing
                const nextX = lastX + (Math.random() - 0.5) * 4000000;
                const nextY = lastY + (Math.random() - 0.5) * 4000000;
                const nextZ = lastZ + (Math.random() - 0.5) * 4000000;

                lines.push(lastX, lastY, lastZ);
                lines.push(nextX, nextY, nextZ);

                lastX = nextX;
                lastY = nextY;
                lastZ = nextZ;
            }
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(lines, 3));

        const mesh = new THREE.LineSegments(geo, material);
        mesh.renderOrder = -1;
        this.group.add(mesh);

        // === STAR POINTS ===
        // Create visible stars at the vertices
        const starGeo = new THREE.BufferGeometry();
        const starPos = [];
        const starCol = [];

        // Helper to add unique stars could be complex, but simple approach:
        // iterate the lines array (which has pairs). 
        // We will just add ALL line endpoints as stars. 
        // Duplicates (overlapping stars at same point) are physically fine for visuals (just brighter).

        for (let i = 0; i < lines.length; i += 3) {
            const x = lines[i];
            const y = lines[i + 1];
            const z = lines[i + 2];

            starPos.push(x, y, z);

            // Color based on distance (Inner vs Outer)
            const distSq = x * x + z * z;
            if (distSq < 100000000000000) { // < 10M radius (Inner)
                // White / Blue-ish
                const c = new THREE.Color().setHSL(0.6, 0.2, 0.8 + Math.random() * 0.2);
                starCol.push(c.r, c.g, c.b);
            } else { // Outer (Alien)
                // Yellow / Red / White mix
                const hue = Math.random() > 0.5 ? 0.1 : 0.6; // Yellow or Blue
                const c = new THREE.Color().setHSL(hue, 0.8, 0.7);
                starCol.push(c.r, c.g, c.b);
            }
        }

        starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
        starGeo.setAttribute('color', new THREE.Float32BufferAttribute(starCol, 3));

        const baseStarMat = new THREE.PointsMaterial({
            size: 60000,
            map: createStarTexture(), // Use shared utility if available or standard circle
            transparent: true,
            vertexColors: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const starMat = adaptMaterial(baseStarMat, this.engine?.isWebGPU);

        // Need to import createStarTexture if not imported.
        // It is not imported in original file context shown in Step 1336?
        // Wait, Step 1336 shows:
        // 1: import * as THREE from 'three';
        // 2: import { BaseSystem } from './BaseSystem.js';
        // It does NOT import createStarTexture.
        // I must add the import too!

        this.group.add(new THREE.Points(starGeo, starMat));
    }

    update(delta, time) {
        // Static lines
    }
}
