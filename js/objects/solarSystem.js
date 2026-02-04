import { createNoiseTexture } from '../utils/textureUtils.js';

const dummy = new THREE.Object3D();

export function addSystemDetails(group, color, starTexture, animatedBelts) {
    // 1. Local Dust
    const dGeo = new THREE.BufferGeometry();
    const dCount = 200;
    const dPos = new Float32Array(dCount * 3);
    for (let i = 0; i < dCount * 3; i += 3) {
        const r = 2000 + Math.random() * 8000;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 2;
        dPos[i] = r * Math.sin(phi) * Math.cos(theta);
        dPos[i + 1] = (Math.random() - 0.5) * 1000;
        dPos[i + 2] = r * Math.cos(phi);
    }
    dGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
    const dMat = new THREE.PointsMaterial({
        color: color, size: 50, map: starTexture, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false
    });
    group.add(new THREE.Points(dGeo, dMat));

    // 2. Local Rocks
    const rCount = 40;
    const rGeo = new THREE.DodecahedronGeometry(15, 0);
    const rMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.9 });
    const rMesh = new THREE.InstancedMesh(rGeo, rMat, rCount);
    const rData = [];
    for (let i = 0; i < rCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = 3000 + Math.random() * 4000;
        dummy.position.set(Math.cos(angle) * dist, (Math.random() - 0.5) * 500, Math.sin(angle) * dist);
        dummy.rotation.set(Math.random(), Math.random(), Math.random());
        const s = 0.5 + Math.random();
        dummy.scale.set(s, s, s);
        dummy.updateMatrix();
        rMesh.setMatrixAt(i, dummy.matrix);
        rData.push({ angle, dist, y: dummy.position.y, speed: (1 / Math.sqrt(dist)) * 300, rotSpeed: Math.random() });
    }
    group.add(rMesh);
    animatedBelts.push({ mesh: rMesh, data: rData });
}

export function createPlanet(solarGroup, planetMeshes, size, distance, color1, color2, type, name, selfRotSpeed = 0.5) {
    const geo = new THREE.SphereGeometry(size, 64, 64);
    const tex = createNoiseTexture(type, color1, color2);
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, metalness: 0.1 });
    const mesh = new THREE.Mesh(geo, mat);
    const angle = Math.random() * Math.PI * 2;
    mesh.position.set(Math.cos(angle) * distance, 0, Math.sin(angle) * distance);
    solarGroup.add(mesh);

    mesh.userData = {
        name: name, type: 'planet', distance: distance, angle: angle, speed: (1 / Math.sqrt(distance)) * 200, rotSpeed: selfRotSpeed
    };
    planetMeshes.push(mesh);
    return mesh;
}

export function createAsteroidBelt(group, count, minRadius, maxRadius, colorStr, asteroidTexture, animatedBelts) {
    const asteroidGeo = new THREE.DodecahedronGeometry(20, 0);
    const beltMat = new THREE.MeshStandardMaterial({ map: asteroidTexture, roughness: 0.9, color: new THREE.Color(colorStr) });
    const mesh = new THREE.InstancedMesh(asteroidGeo, beltMat, count);
    const data = [];

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

        data.push({ angle: angle, dist: dist, y: y, speed: (1 / Math.sqrt(dist)) * 200, rotSpeed: Math.random() });
    }
    group.add(mesh);
    const belt = { mesh, data };
    animatedBelts.push(belt);
    return belt;
}
