import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { SYSTEM_POSITIONS } from './SystemPositions.js';
import { createRadialTexture } from '../utils/textureUtils.js';


/**
 * Vega - Blue-white main-sequence star
 * One of the brightest stars visible from Earth
 * Has a debris disk suggesting possible planets
 */
export class Vega extends BaseSystem {
    constructor() {
        super('VEGA', SYSTEM_POSITIONS.VEGA);
    }

    build(textures) {
        // Vega - Large blue-white star
        const star = this.createStar(2500, 0x99ccff, 10);
        star.userData = { name: 'VEGA', isSystem: true, baseScale: 2500 };
        this.group.add(star);
        this.targetables.push(star);

        // Bright blue-white light
        const light = new THREE.PointLight(0xaaddff, 40.0, 800000, 0.5);
        this.group.add(light);

        // Debris disk (dust ring)
        this.createDebrisDisk();
    }

    createDebrisDisk() {
        const diskGeo = new THREE.BufferGeometry();
        const diskCount = 5000;
        const positions = new Float32Array(diskCount * 3);
        const colors = new Float32Array(diskCount * 3);

        for (let i = 0; i < diskCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 8000 + Math.random() * 12000;
            const y = (Math.random() - 0.5) * 500;

            positions[i * 3] = Math.cos(angle) * radius;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = Math.sin(angle) * radius;

            // Dusty orange-brown color
            const c = new THREE.Color().setHSL(0.08, 0.6, 0.3 + Math.random() * 0.2);
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        diskGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        diskGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const diskMat = new THREE.PointsMaterial({
            size: 400, // Slightly larger to account for soft texture
            map: createRadialTexture(),
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const disk = new THREE.Points(diskGeo, diskMat);
        disk.rotation.x = Math.PI / 6; // Tilted disk
        this.debrisDisk = disk;
        this.group.add(disk);

        // Add Hypothetical Planet "Vega b"
        // Using reused texture (e.g., Uranus or Jupiter look-alike)
        const loader = new THREE.TextureLoader();
        const planetGeo = new THREE.SphereGeometry(600, 64, 64);
        const planetTex = loader.load('/textures/planets/uranus.jpg'); // Reuse Uranus texture for a cold dust planet
        const planetMat = new THREE.MeshStandardMaterial({
            map: planetTex,
            roughness: 0.9
        });
        this.vegaPlanet = new THREE.Mesh(planetGeo, planetMat);

        // Initial position
        const dist = 6000;
        this.vegaPlanet.position.set(dist, 0, 0);
        this.vegaPlanet.userData = {
            name: 'VEGA b',
            type: 'planet',
            angle: 0,
            dist: dist,
            speed: 0.2,
            rotSpeed: 0.8
        };

        // Tilt orbit to match disk
        this.vegaPlanetGroup = new THREE.Group();
        this.vegaPlanetGroup.rotation.x = Math.PI / 6;
        this.vegaPlanetGroup.add(this.vegaPlanet);
        this.group.add(this.vegaPlanetGroup);
        this.targetables.push(this.vegaPlanet);
    }

    update(delta, time) {
        if (this.debrisDisk) {
            this.debrisDisk.rotation.y += delta * 0.02;
        }
        if (this.vegaPlanet) {
            const data = this.vegaPlanet.userData;
            data.angle += data.speed * delta;
            this.vegaPlanet.position.x = Math.cos(data.angle) * data.dist;
            this.vegaPlanet.position.z = Math.sin(data.angle) * data.dist;
            this.vegaPlanet.rotation.y += data.rotSpeed * delta;
        }
    }
}
