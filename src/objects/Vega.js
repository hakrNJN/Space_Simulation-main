import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { SYSTEM_POSITIONS } from './SystemPositions.js';
import { createRadialTexture } from '../utils/textureUtils.js';
import { adaptMaterial } from '../utils/materialAdapter.js';


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

        // Debris Disks (Asteroid Belts)
        this.createAsteroidBelts();

        // Add Hypothetical Planets in the Gap
        this.createGapPlanets();
    }

    createAsteroidBelts() {
        // Helper to create a belt using InstancedMesh for WebGPU support
        const createBelt = (innerR, outerR, count, colorHue, saturation, lightness, name) => {
            const geometry = new THREE.PlaneGeometry(1, 1);
            // const material = new THREE.MeshBasicNodeMaterial({ // This was commented out in the instruction, so I'm commenting it out here too.
            //     color: 0xffffff,
            //     transparent: true,
            //     opacity: 0.8,
            //     side: THREE.DoubleSide,
            //     blending: THREE.AdditiveBlending,
            //     depthWrite: false,
            // });

            // Uniforms for Billboarding
            // const uViewMatrix = uniform(new THREE.Matrix4()); // This was commented out in the instruction, so I'm commenting it out here too.
            // const modelViewMatrix = uViewMatrix.mul(this.group.matrixWorld).mul(instance(positionLocal)); // Simplified logic, might need full billboard matrix // This was commented out in the instruction, so I'm commenting it out here too.

            // Simple billboard logic using TSL
            // We need to construct a billboard matrix for each instance. 
            // Since we are inside a system, let's just use standard sprite alignment or similar.
            // Actually, for simple debris, let's stick to standard MeshBasicMaterial if possible, 
            // BUT InstancedMesh is better for count. 
            // Let's use the same billboard logic as ComputeGalaxy for consistency.

            // Texture
            // material.map = createRadialTexture(); // This was commented out in the instruction, so I'm commenting it out here too.
            // material.alphaTest = 0.01; // This was commented out in the instruction, so I'm commenting it out here too.

            // const mesh = new THREE.InstancedMesh(geometry, material, count); // This was commented out in the instruction, so I'm commenting it out here too.
            // mesh.name = name; // This was commented out in the instruction, so I'm commenting it out here too.

            const dummy = new THREE.Object3D();
            // const colors = []; // This was commented out in the instruction, so I'm commenting it out here too.

            // for (let i = 0; i < count; i++) { // This block was commented out in the instruction, so I'm commenting it out here too.
            //     const angle = Math.random() * Math.PI * 2;
            //     const r = innerR + Math.random() * (outerR - innerR);
            //     const y = (Math.random() - 0.5) * (r * 0.05);

            //     dummy.position.set(Math.cos(angle) * r, y, Math.sin(angle) * r);

            //     // Random scale for particles
            //     const s = (outerR - innerR) * 0.02 * (0.5 + Math.random()); 
            //     dummy.scale.set(s, s, s);

            //     dummy.lookAt(0, 0, 0); // Initial orientation (will be overridden by billboard if we add it, but for now just face center or random)
            //     // Actually, asteroid fields don't strictly need billboarding if they are 3D meshes, 
            //     // but for 2D planes they do. 
            //     // Let's try simple LookAt Camera in update loop or just use Tetrahydron/Icosahedron for 3D Debris!
            //     // 3D Geometry is better for "Rocks" than 2D sprites in a full 3D app if we can afford it.
            //     // with 4000 instances, Low Poly Icosahedron is fine.
            // }

            // RE-DECISION: Use Low Poly Icosahedron for 3D Asteroids! No Billboarding needed!
            const rockGeo = new THREE.IcosahedronGeometry(1, 0);
            const rockMat = adaptMaterial(new THREE.MeshStandardMaterial({
                roughness: 0.8,
                metalness: 0.2,
                color: 0xffffff
            }), this.engine?.isWebGPU);

            const rockMesh = new THREE.InstancedMesh(rockGeo, rockMat, count);
            rockMesh.name = name;

            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = innerR + Math.random() * (outerR - innerR);
                const y = (Math.random() - 0.5) * (r * 0.02);

                dummy.position.set(Math.cos(angle) * r, y, Math.sin(angle) * r);

                const s = (Math.random() * 200) + 100; // Size 100-300 units
                dummy.scale.set(s, s, s);

                dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
                dummy.updateMatrix();
                rockMesh.setMatrixAt(i, dummy.matrix);

                // Color variation
                const c = new THREE.Color().setHSL(
                    colorHue + (Math.random() - 0.5) * 0.1,
                    saturation,
                    lightness + (Math.random() - 0.5) * 0.1
                );
                rockMesh.setColorAt(i, c);
            }

            rockMesh.rotation.x = Math.PI / 6;
            this.group.add(rockMesh);
            return rockMesh;
        };

        // 1. Inner Warm Belt (Rocky) 
        // 3D Rocks for visibility
        this.innerBelt = createBelt(8000, 14000, 2000, 0.08, 0.4, 0.4, 'InnerBelt');

        // 2. Outer Cool Belt (Icy) 
        this.outerBelt = createBelt(80000, 140000, 4000, 0.6, 0.2, 0.8, 'OuterBelt');
    }

    createGapPlanets() {
        // Gap is between ~14k and ~80k.
        // Let's place planets at ~25k and ~55k
        const loader = new THREE.TextureLoader();

        // Planet 1: "Vega b" (Hot Neptune?)
        // Reuse Neptune or Uranus texture if available, or just generic planet logic
        // We will use standard material for now.
        const planet1Geo = new THREE.SphereGeometry(1200, 64, 64); // Larger than before
        const planet1Mat = adaptMaterial(new THREE.MeshStandardMaterial({
            color: 0xaa88ff, // Purple-ish
            roughness: 0.8
        }), this.engine?.isWebGPU);

        const planet1 = new THREE.Mesh(planet1Geo, planet1Mat);
        const dist1 = 25000;
        planet1.position.set(dist1, 0, 0);
        planet1.userData = {
            name: 'VEGA b', type: 'planet',
            angle: 0, dist: dist1, speed: 0.08, rotSpeed: 0.5
        };

        // Planet 2: "Vega c" (Cold Giant?)
        const planet2Geo = new THREE.SphereGeometry(1800, 64, 64);
        const planet2Mat = adaptMaterial(new THREE.MeshStandardMaterial({
            color: 0x88ccff, // Icy Blue
            roughness: 0.6
        }), this.engine?.isWebGPU);

        const planet2 = new THREE.Mesh(planet2Geo, planet2Mat);
        const dist2 = 55000;
        planet2.position.set(dist2, 0, 0);
        planet2.userData = {
            name: 'VEGA c', type: 'planet',
            angle: 2.0, dist: dist2, speed: 0.04, rotSpeed: 0.3
        };

        // Group for tilt
        this.planetGroup = new THREE.Group();
        this.planetGroup.rotation.x = Math.PI / 6;
        this.planetGroup.add(planet1);
        this.planetGroup.add(planet2);

        this.group.add(this.planetGroup);
        this.targetables.push(planet1, planet2);

        // Store for update
        this.planets = [planet1, planet2];
    }

    update(delta, time) {
        // Rotate Belts
        if (this.innerBelt) this.innerBelt.rotation.y += delta * 0.05;
        if (this.outerBelt) this.outerBelt.rotation.y += delta * 0.01;

        // Orbit Planets
        if (this.planets) {
            this.planets.forEach(planet => {
                const data = planet.userData;
                data.angle += data.speed * delta;
                planet.position.x = Math.cos(data.angle) * data.dist;
                planet.position.z = Math.sin(data.angle) * data.dist;
                planet.rotation.y += data.rotSpeed * delta;
            });
        }
    }
}
