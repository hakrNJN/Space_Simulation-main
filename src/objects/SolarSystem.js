import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createNoiseTexture, createStarTexture } from '../utils/textureUtils.js';
import { SYSTEM_POSITIONS } from './SystemPositions.js';

/**
 * SolarSystem - Our home star system
 * Located in the Orion Spur, ~26,000 ly from galactic center
 * Contains: Sun, 8 planets, asteroid belt
 */
export class SolarSystem extends BaseSystem {
    constructor() {
        super('SOLAR', SYSTEM_POSITIONS.SOLAR);
    }

    build(textures) {
        const starTexture = createStarTexture();
        const asteroidTexture = createNoiseTexture('asteroid', '#666666', '#222222');

        // SUN
        const sun = this.createStar(2000, 0xffaa00, 6);
        sun.userData = { name: 'SUN', isSystem: true, baseScale: 2000 };
        this.group.add(sun);
        this.targetables.push(sun);

        // Add point light for the sun
        const sunLight = new THREE.PointLight(0xffffff, 28.75, 5000000, 0.5);
        this.group.add(sunLight);

        // PLANETS — Realistic colors
        const planetData = [
            { size: 50, dist: 4000, c1: '#8c8c8c', c2: '#5a5a5a', name: 'MERCURY' },       // Grey rocky
            { size: 120, dist: 6000, c1: '#e8cda0', c2: '#c9a84c', name: 'VENUS' },         // Pale yellow-tan
            { size: 130, dist: 8000, c1: '#1a6fdb', c2: '#2d8f4e', name: 'EARTH' },         // Ocean blue + land green
            { size: 70, dist: 10000, c1: '#c1440e', c2: '#8b3a0e', name: 'MARS' },          // Rusty red-orange
            { size: 1400, dist: 16000, c1: '#d4a56a', c2: '#a0744a', name: 'JUPITER' },     // Tan-orange bands
            { size: 1200, dist: 22000, c1: '#e8d191', c2: '#c4a35a', name: 'SATURN', hasRings: true }, // Gold-tan
            { size: 500, dist: 28000, c1: '#a8e0e8', c2: '#6bb8c4', name: 'URANUS' },       // Pale cyan
            { size: 480, dist: 32000, c1: '#3355cc', c2: '#1a2d8f', name: 'NEPTUNE' }       // Deep blue
        ];

        this.planets = [];
        planetData.forEach(p => {
            const planet = this.createPlanetMesh(p.size, p.dist, p.c1, p.c2, p.name);
            if (p.hasRings) this.addSaturnRings(planet, p.size);
            this.group.add(planet);
            this.planets.push(planet);
            this.targetables.push(planet);
        });

        // ASTEROID BELT
        this.createAsteroidBelt(3000, 12000, 14000, asteroidTexture);
    }

    createPlanetMesh(size, distance, color1, color2, name) {
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
            speed: (1 / Math.sqrt(distance)) * 300,
            rotSpeed: 0.5 + Math.random()
        };
        return mesh;
    }

    addSaturnRings(planet, size) {
        const ringGeo = new THREE.RingGeometry(size * 1.4, size * 2.2, 64);
        const ringTex = createNoiseTexture('gas', '#aa8855', '#554433');
        const ringMat = new THREE.MeshStandardMaterial({
            map: ringTex, side: THREE.DoubleSide, transparent: true, opacity: 0.8
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        planet.add(ring);
    }

    createAsteroidBelt(count, minRadius, maxRadius, texture) {
        const geo = new THREE.DodecahedronGeometry(20, 1);
        const mat = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.8,
            color: new THREE.Color('#aaaaaa').multiplyScalar(3.0),
            emissive: new THREE.Color(0x222222)
        });
        const mesh = new THREE.InstancedMesh(geo, mat, count);
        const dummy = new THREE.Object3D();
        this.beltData = [];

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = minRadius + Math.random() * (maxRadius - minRadius);
            const y = (Math.random() - 0.5) * 1000;

            dummy.position.set(Math.cos(angle) * dist, y, Math.sin(angle) * dist);
            dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
            const s = Math.random() * 2 + 0.5;
            dummy.scale.set(s, s, s);
            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);

            this.beltData.push({ angle, dist, y, speed: (1 / Math.sqrt(dist)) * 200, rotSpeed: Math.random() });
        }

        this.asteroidMesh = mesh;
        this.asteroidDummy = dummy;
        this.group.add(mesh);
    }

    update(delta, time) {
        // Orbit planets
        if (this.planets) {
            this.planets.forEach(planet => {
                const data = planet.userData;
                data.angle += data.speed * delta * 0.1;
                planet.position.x = Math.cos(data.angle) * data.distance;
                planet.position.z = Math.sin(data.angle) * data.distance;
                planet.rotation.y += data.rotSpeed * delta;
            });
        }

        // Animate asteroid belt
        if (this.asteroidMesh && this.beltData) {
            for (let i = 0; i < this.beltData.length; i++) {
                const d = this.beltData[i];
                d.angle += d.speed * delta * 0.1;
                this.asteroidDummy.position.set(Math.cos(d.angle) * d.dist, d.y, Math.sin(d.angle) * d.dist);
                this.asteroidDummy.rotation.set(time * d.rotSpeed, time * d.rotSpeed, 0);
                this.asteroidDummy.scale.set((i % 3) + 0.5, (i % 3) + 0.5, (i % 3) + 0.5);
                this.asteroidDummy.updateMatrix();
                this.asteroidMesh.setMatrixAt(i, this.asteroidDummy.matrix);
            }
            this.asteroidMesh.instanceMatrix.needsUpdate = true;
        }
    }
}
