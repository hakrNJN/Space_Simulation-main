import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createNoiseTexture } from '../utils/textureUtils.js';
import { adaptMaterial } from '../utils/materialAdapter.js';

/**
 * SpaceDebris - Scattered asteroids, rocks, and metallic debris
 * Multiple clusters positioned throughout space
 */
export class SpaceDebris extends BaseSystem {
    constructor() {
        super('SPACE DEBRIS', { x: 0, y: 0, z: 0 });
    }

    build(textures) {
        const asteroidTexture = createNoiseTexture('asteroid', '#888888', '#444444');

        // Create multiple debris clusters scattered around
        const clusterPositions = [
            { x: 50000, y: 10000, z: 50000 },
            { x: -60000, y: -5000, z: 40000 },
            { x: 30000, y: 15000, z: -70000 },
            { x: -40000, y: 8000, z: -60000 },
            { x: 120000, y: -20000, z: 80000 },
            { x: -150000, y: 30000, z: -50000 },
            { x: 80000, y: -10000, z: 150000 }
        ];

        clusterPositions.forEach((pos, index) => {
            this.createDebrisCluster(pos, 200 + Math.floor(Math.random() * 300), asteroidTexture);
        });

        // Scattered individual larger rocks
        this.createScatteredRocks(asteroidTexture);
    }

    createDebrisCluster(center, count, texture) {
        const geo = new THREE.DodecahedronGeometry(50, 0);
        const baseMat = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.9,
            metalness: 0.3,
            color: new THREE.Color('#aaaaaa')
        });
        const mat = adaptMaterial(baseMat, this.engine?.isWebGPU);

        const mesh = new THREE.InstancedMesh(geo, mat, count);
        const dummy = new THREE.Object3D();

        for (let i = 0; i < count; i++) {
            // Cluster distribution
            const r = Math.pow(Math.random(), 0.5) * 5000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            dummy.position.set(
                center.x + r * Math.sin(phi) * Math.cos(theta),
                center.y + r * Math.sin(phi) * Math.sin(theta),
                center.z + r * Math.cos(phi)
            );

            dummy.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );

            const scale = 0.5 + Math.random() * 3;
            dummy.scale.set(scale, scale * (0.5 + Math.random() * 0.5), scale * (0.5 + Math.random() * 0.5));
            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
        }

        this.group.add(mesh);
    }

    createScatteredRocks(texture) {
        // Larger, individual rocks scattered more widely
        const geo = new THREE.IcosahedronGeometry(200, 1);
        const baseMat = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.85,
            metalness: 0.4,
            color: new THREE.Color('#666666')
        });
        const mat = adaptMaterial(baseMat, this.engine?.isWebGPU);

        const count = 100;
        const mesh = new THREE.InstancedMesh(geo, mat, count);
        const dummy = new THREE.Object3D();

        for (let i = 0; i < count; i++) {
            const r = 30000 + Math.random() * 170000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            dummy.position.set(
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.sin(phi) * Math.sin(theta),
                r * Math.cos(phi)
            );

            dummy.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );

            const scale = 1 + Math.random() * 5;
            dummy.scale.set(scale, scale * 0.7, scale * 0.8);
            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
        }

        this.group.add(mesh);
    }

    update(delta, time) {
        // Slow rotation of debris (tumbling effect would require per-instance animation)
    }
}
