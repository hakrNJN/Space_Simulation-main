import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { SYSTEM_POSITIONS } from './index.js';
import { createNoiseTexture } from '../utils/textureUtils.js';

/**
 * Kepler-22 System - G-type star with Kepler-22b
 * First confirmed exoplanet in the habitable zone of a Sun-like star
 */
export class Kepler22 extends BaseSystem {
    constructor() {
        super('KEPLER-22', SYSTEM_POSITIONS.KEPLER22);
    }

    build(textures) {
        // Kepler-22 - Sun-like G-type star
        const star = this.createStar(1800, 0xffdd88, 7);
        star.userData = { name: 'KEPLER-22', isSystem: true, baseScale: 1800 };
        this.group.add(star);
        this.targetables.push(star);

        // Sun-like yellow light
        const light = new THREE.PointLight(0xffee99, 20.0, 400000, 0.5);
        this.group.add(light);

        // Kepler-22b - The famous "water world"
        this.kepler22b = this.createKepler22b();
        this.group.add(this.kepler22b);
        this.targetables.push(this.kepler22b);

        // Additional planets (speculative)
        this.planets = [this.kepler22b];

        // Kepler-22c (hypothetical inner rocky planet)
        const innerPlanet = this.createPlanet(80, 3000, '#aa8866', '#665544', 'KEPLER-22c');
        this.group.add(innerPlanet);
        this.planets.push(innerPlanet);
        this.targetables.push(innerPlanet);

        // Kepler-22d (hypothetical outer gas giant)
        const outerPlanet = this.createPlanet(600, 12000, '#ddbb88', '#aa8855', 'KEPLER-22d');
        this.group.add(outerPlanet);
        this.planets.push(outerPlanet);
        this.targetables.push(outerPlanet);
    }

    createKepler22b() {
        // Super-Earth / Mini-Neptune - possibly water world
        const geo = new THREE.SphereGeometry(200, 64, 64);
        const tex = createNoiseTexture('atmosphere', '#4488cc', '#225588');
        const mat = new THREE.MeshStandardMaterial({
            map: tex,
            roughness: 0.3,
            metalness: 0.1
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(7000, 0, 0);
        mesh.userData = {
            name: 'KEPLER-22b',
            type: 'planet',
            angle: 0,
            distance: 7000,
            speed: 80,
            rotSpeed: 0.4
        };

        // Add atmosphere glow
        const glowGeo = new THREE.SphereGeometry(220, 32, 32);
        const glowMat = new THREE.MeshBasicMaterial({
            color: 0x4488cc,
            transparent: true,
            opacity: 0.15,
            side: THREE.BackSide
        });
        const glow = new THREE.Mesh(glowGeo, glowMat);
        mesh.add(glow);

        return mesh;
    }

    createPlanet(size, distance, color1, color2, name) {
        const geo = new THREE.SphereGeometry(size, 64, 64);
        const tex = createNoiseTexture('rock', color1, color2);
        const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7, metalness: 0.1 });
        const mesh = new THREE.Mesh(geo, mat);
        const angle = Math.random() * Math.PI * 2;
        mesh.position.set(Math.cos(angle) * distance, 0, Math.sin(angle) * distance);
        mesh.userData = {
            name: name,
            type: 'planet',
            angle: angle,
            distance: distance,
            speed: (1 / Math.sqrt(distance)) * 200,
            rotSpeed: 0.5 + Math.random()
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
