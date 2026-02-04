export function createGalaxy(scene, starTexture) {
    const galGroup = new THREE.Group();
    galGroup.position.set(3000000, 1500000, -4000000);
    galGroup.rotation.x = Math.PI / 2.5;
    galGroup.rotation.z = Math.PI / 5;

    const starGeo = new THREE.BufferGeometry();
    const starCount = 80000;
    const sPos = new Float32Array(starCount * 3);
    const sCol = new Float32Array(starCount * 3);
    const arms = 2;

    for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        const r = (Math.random() * 0.1 + Math.pow(Math.random(), 2) * 0.9) * 250000;
        const spin = r * 0.00005;
        const armAngle = (i % arms) * ((Math.PI * 2) / arms);
        const spread = (Math.random() - 0.5) * 1.2;
        const theta = spin + armAngle + spread;

        sPos[i3] = Math.cos(theta) * r;
        sPos[i3 + 1] = (Math.random() - 0.5) * (2000 + r * 0.1);
        sPos[i3 + 2] = Math.sin(theta) * r;

        const color = new THREE.Color();
        if (r < 50000) color.setHSL(0.05 + Math.random() * 0.1, 0.9, 0.6);
        else color.setHSL(0.6 + Math.random() * 0.1, 0.8, 0.8);

        sCol[i3] = color.r; sCol[i3 + 1] = color.g; sCol[i3 + 2] = color.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(sCol, 3));
    const starMat = new THREE.PointsMaterial({
        size: 800, map: starTexture, vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending
    });
    galGroup.add(new THREE.Points(starGeo, starMat));

    // Gas & Dust
    const dustGeo = new THREE.BufferGeometry();
    const dustCount = 20000;
    const dPos = new Float32Array(dustCount * 3);
    const dCol = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
        const i3 = i * 3;
        const r = Math.pow(Math.random(), 0.6) * 280000;
        const spin = r * 0.00005;
        const armAngle = (i % arms) * ((Math.PI * 2) / arms);
        const spread = (Math.random() - 0.5) * 3.5;
        const theta = spin + armAngle + spread;

        dPos[i3] = Math.cos(theta) * r;
        dPos[i3 + 1] = (Math.random() - 0.5) * (6000 + r * 0.25);
        dPos[i3 + 2] = Math.sin(theta) * r;

        const color = new THREE.Color();
        if (Math.random() > 0.5) color.setHSL(0.7 + Math.random() * 0.1, 0.6, 0.2 + Math.random() * 0.1);
        else color.setHSL(0.55 + Math.random() * 0.1, 0.4, 0.15 + Math.random() * 0.1);

        dCol[i3] = color.r; dCol[i3 + 1] = color.g; dCol[i3 + 2] = color.b;
    }

    dustGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dCol, 3));
    const dustMat = new THREE.PointsMaterial({
        size: 6000, map: starTexture, vertexColors: true, transparent: true, opacity: 0.04, depthWrite: false, blending: THREE.AdditiveBlending
    });
    galGroup.add(new THREE.Points(dustGeo, dustMat));

    const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTexture, color: 0xffddaa, blending: THREE.AdditiveBlending, opacity: 0.8 }));
    core.scale.set(70000, 50000, 1);
    galGroup.add(core);

    scene.add(galGroup);
}

export function createMilkyWay(scene, starTexture) {
    const mwGroup = new THREE.Group();
    mwGroup.rotation.x = Math.PI / 3;
    mwGroup.rotation.z = Math.PI / 8;

    const mwGeo = new THREE.BufferGeometry();
    const mwCount = 40000;
    const pos = new Float32Array(mwCount * 3);
    const col = new Float32Array(mwCount * 3);

    for (let i = 0; i < mwCount; i++) {
        const i3 = i * 3;
        const r = 4000000 + Math.random() * 500000;
        const theta = Math.random() * Math.PI * 2;
        const heightBias = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1);

        pos[i3] = Math.cos(theta) * r;
        pos[i3 + 1] = heightBias * 400000;
        pos[i3 + 2] = Math.sin(theta) * r;

        const color = new THREE.Color();
        if (Math.random() > 0.8) color.setHSL(0.08, 0.8, 0.7);
        else color.setHSL(0.6, 0.1, 0.9);

        col[i3] = color.r; col[i3 + 1] = color.g; col[i3 + 2] = color.b;
    }

    mwGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    mwGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const mwMat = new THREE.PointsMaterial({
        size: 5000, map: starTexture, vertexColors: true, transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending
    });
    mwGroup.add(new THREE.Points(mwGeo, mwMat));
    scene.add(mwGroup);
}
