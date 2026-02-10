import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { SYSTEM_POSITIONS } from './SystemPositions.js';
import { createNoiseTexture } from '../utils/textureUtils.js';

/**
 * TRAPPIST-1 System - Ultra-cool red dwarf with 7 Earth-sized planets
 * Famous for having multiple planets in the habitable zone
 */
export class Trappist1 extends BaseSystem {
    constructor() {
        super('TRAPPIST-1', SYSTEM_POSITIONS.TRAPPIST);
    }

    build(textures) {
        // Ultra-cool Red Dwarf (very small, dim, red)
        const star = this.createStar(400, 0xff2200, 6);
        star.userData = { name: 'TRAPPIST-1', isSystem: true, baseScale: 400 };
        this.group.add(star);
        this.targetables.push(star);

        // Dim red light
        const light = new THREE.PointLight(0xff3300, 3.0, 100000, 0.5);
        this.group.add(light);

        // 7 tightly packed planets (b through h)
        const planetConfigs = [
            { name: 'TRAPPIST-1b', size: 80, dist: 800, c1: '#553322', c2: '#221100' },   // Rocky, hot
            { name: 'TRAPPIST-1c', size: 85, dist: 1100, c1: '#664433', c2: '#332211' },  // Rocky
            { name: 'TRAPPIST-1d', size: 60, dist: 1400, c1: '#445566', c2: '#223344' },  // Possibly water
            { name: 'TRAPPIST-1e', size: 75, dist: 1700, c1: '#224488', c2: '#113355' },  // Habitable zone
            { name: 'TRAPPIST-1f', size: 90, dist: 2000, c1: '#336699', c2: '#224466' },  // Habitable zone
            { name: 'TRAPPIST-1g', size: 95, dist: 2300, c1: '#4477aa', c2: '#335588' },  // Habitable zone
            { name: 'TRAPPIST-1h', size: 55, dist: 2600, c1: '#556688', c2: '#334455' }   // Cold, icy
        ];

        this.planets = [];
        planetConfigs.forEach((config, index) => {
            const planet = this.createPlanetMesh(config);
            // Offset starting angles for visual variety
            planet.userData.angle = (index / 7) * Math.PI * 2;
            planet.position.x = Math.cos(planet.userData.angle) * config.dist;
            planet.position.z = Math.sin(planet.userData.angle) * config.dist;
            this.group.add(planet);
            this.planets.push(planet);
            this.targetables.push(planet);
        });
    }

    createPlanetMesh(config) {
        const geo = new THREE.SphereGeometry(config.size, 64, 64);
        const tex = createNoiseTexture('rock', config.c1, config.c2);
        const mat = new THREE.MeshStandardMaterial({
            map: tex,
            roughness: 0.7,
            metalness: 0.1
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.userData = {
            name: config.name,
            type: 'planet',
            angle: 0,
            distance: config.dist,
            speed: (1 / Math.sqrt(config.dist)) * 500, // Faster due to tight orbits
            rotSpeed: 0.3 + Math.random() * 0.5
        };
        return mesh;
    }

    update(delta, time) {
        this.planets.forEach(planet => {
            const data = planet.userData;
            data.angle += data.speed * delta * 0.1;
            planet.position.x = Math.cos(data.angle) * data.distance;
            planet.position.z = Math.sin(data.angle) * data.distance;
            planet.rotation.y += data.rotSpeed * delta;
        });
    }
}
