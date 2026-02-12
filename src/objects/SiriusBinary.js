import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { SYSTEM_POSITIONS } from './SystemPositions.js';

/**
 * Sirius Binary - Brightest star in the night sky
 * Binary system: Sirius A (white main-sequence) + Sirius B (white dwarf)
 */
export class SiriusBinary extends BaseSystem {
    constructor() {
        super('SIRIUS', SYSTEM_POSITIONS.SIRIUS);
    }

    build(textures) {
        // Binary orbit parameters
        this.orbitRadius = 2000;
        this.orbitSpeed = 0.5;
        this.orbitAngle = 0;

        // Sirius A - Main star (bright white-blue)
        this.siriusA = this.createStar(1500, 0xaaccff, 8);
        this.siriusA.userData = { name: 'SIRIUS A', isSystem: true, baseScale: 1500 };
        this.group.add(this.siriusA);
        this.targetables.push(this.siriusA);

        // Point light for Sirius A
        this.lightA = new THREE.PointLight(0xaaccff, 30.0, 500000, 0.5);
        this.siriusA.add(this.lightA);

        // Sirius B - White Dwarf (small but bright)
        this.siriusB = this.createStar(200, 0xffffff, 4);
        this.siriusB.userData = { name: 'SIRIUS B', type: 'star', baseScale: 200 };
        this.group.add(this.siriusB);
        this.targetables.push(this.siriusB);

        // Point light for Sirius B
        this.lightB = new THREE.PointLight(0xffffff, 5.0, 100000, 0.5);
        this.siriusB.add(this.lightB);

        // Orbit trail visualization
        const trailGeo = new THREE.RingGeometry(this.orbitRadius - 50, this.orbitRadius + 50, 64);
        const trailMat = new THREE.MeshBasicMaterial({
            color: 0x4488ff,
            transparent: true,
            opacity: 0.15,
            side: THREE.DoubleSide
        });
        const trail = new THREE.Mesh(trailGeo, trailMat);
        trail.rotation.x = Math.PI / 2;
        this.group.add(trail);

        // Reuse Texture: Add "Sirius Prime" Planet
        // Using Mars texture for a scorched, rocky look
        const loader = new THREE.TextureLoader();
        const pGeo = new THREE.SphereGeometry(300, 64, 64);
        const pTex = loader.load('/textures/planets/mars.jpg');
        const pMat = new THREE.MeshStandardMaterial({ map: pTex, roughness: 0.8 });

        this.siriusPlanet = new THREE.Mesh(pGeo, pMat);
        const pDist = 5000; // Farther out
        this.siriusPlanet.userData = {
            name: 'SIRIUS PRIME',
            type: 'planet',
            dist: pDist,
            angle: Math.random() * Math.PI * 2,
            speed: 0.3,
            rotSpeed: 0.6
        };
        this.siriusPlanet.position.set(pDist, 0, 0);
        this.group.add(this.siriusPlanet);
        this.targetables.push(this.siriusPlanet);
    }

    update(delta, time) {
        // Binary orbit animation
        this.orbitAngle += this.orbitSpeed * delta;

        // Sirius A orbits one way
        this.siriusA.position.x = Math.cos(this.orbitAngle) * this.orbitRadius * 0.3;
        this.siriusA.position.z = Math.sin(this.orbitAngle) * this.orbitRadius * 0.3;

        // Sirius B orbits opposite
        this.siriusB.position.x = -Math.cos(this.orbitAngle) * this.orbitRadius;
        this.siriusB.position.z = -Math.sin(this.orbitAngle) * this.orbitRadius;

        // Update Planet
        if (this.siriusPlanet) {
            const sd = this.siriusPlanet.userData;
            sd.angle += sd.speed * delta * 0.5;
            this.siriusPlanet.position.x = Math.cos(sd.angle) * sd.dist;
            this.siriusPlanet.position.z = Math.sin(sd.angle) * sd.dist;
            this.siriusPlanet.rotation.y += sd.rotSpeed * delta;
        }
    }
}
