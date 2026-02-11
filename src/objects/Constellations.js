import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';

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
        const material = new THREE.LineBasicMaterial({
            color: 0xffff88, // Pale yellow
            transparent: true,
            opacity: 0.25,   // Faint lines
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

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
        mesh.renderOrder = -1; // Render behind systems but visible
        this.group.add(mesh);
    }

    update(delta, time) {
        // Static lines
    }
}
