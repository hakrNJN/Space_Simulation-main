import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { SYSTEM_POSITIONS } from './index.js';
import { createNoiseTexture } from '../utils/textureUtils.js';

/**
 * Proxima Centauri - Nearest star to the Sun
 * Red Dwarf star with one rocky exoplanet (Proxima b)
 */
export class ProximaCentauri extends BaseSystem {
    constructor() {
        super('PROXIMA CENTAURI', SYSTEM_POSITIONS.PROXIMA);
    }

    build(textures) {
        // Red Dwarf Star (smaller than Sun)
        const star = this.createStar(800, 0xff3300, 8);
        star.userData = { name: 'PROXIMA', isSystem: true, baseScale: 800 };
        this.group.add(star);
        this.targetables.push(star);

        // Point light (dimmer than Sun)
        const light = new THREE.PointLight(0xff4400, 8.0, 200000, 0.5);
        this.group.add(light);

        // Proxima b - Rocky exoplanet in habitable zone
        const proximaB = this.createProximaB();
        this.group.add(proximaB);
        this.targetables.push(proximaB);
        this.planet = proximaB;
    }

    createProximaB() {
        const geo = new THREE.SphereGeometry(100, 64, 64);
        const tex = createNoiseTexture('rock', '#664422', '#332211');
        const mat = new THREE.MeshStandardMaterial({
            map: tex,
            roughness: 0.8,
            metalness: 0.2
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(3000, 0, 0);
        mesh.userData = {
            name: 'PROXIMA B',
            type: 'planet',
            angle: 0,
            distance: 3000,
            speed: 150,
            rotSpeed: 0.8
        };
        return mesh;
    }

    update(delta, time) {
        if (this.planet) {
            const data = this.planet.userData;
            data.angle += data.speed * delta * 0.1;
            this.planet.position.x = Math.cos(data.angle) * data.distance;
            this.planet.position.z = Math.sin(data.angle) * data.distance;
            this.planet.rotation.y += data.rotSpeed * delta;
        }
    }
}
