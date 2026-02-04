import * as THREE from 'three';
import { createNoiseTexture } from '../../src/utils/textureUtils';

export function createCrabNebula(position, size) {
    const group = new THREE.Group();
    group.position.copy(position);

    // Core pulsar/star
    const pulsar = new THREE.Sprite(new THREE.SpriteMaterial({
        map: createNoiseTexture('star', '#ffffff', '#aaaaff'),
        color: 0xffffff,
        blending: THREE.AdditiveBlending
    }));
    pulsar.scale.set(size * 0.1, size * 0.1, 1);
    group.add(pulsar);

    // Filaments - Volumetric cloud effect
    const filamentGeo = new THREE.BufferGeometry();
    const filamentCount = 2000;
    const fPos = new Float32Array(filamentCount * 3);
    const fCol = new Float32Array(filamentCount * 3);

    for (let i = 0; i < filamentCount; i++) {
        // Crab nebula shape: Roughly elliptical/irregular explosion
        const r = Math.random() * size;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);

        // Noise for irregularity
        const noise = Math.sin(theta * 5) * Math.cos(phi * 5) * 0.3;
        const finalR = r * (0.8 + noise);

        fPos[i * 3] = finalR * Math.sin(phi) * Math.cos(theta);
        fPos[i * 3 + 1] = finalR * Math.sin(phi) * Math.sin(theta) * 0.7; // Slightly flattened
        fPos[i * 3 + 2] = finalR * Math.cos(phi);

        // Colors: Red/Orange filaments with Blue interior
        const c = new THREE.Color();
        const distRatio = finalR / size;
        if (distRatio < 0.4) {
            c.setHSL(0.6, 0.8, 0.5); // Blue center
        } else {
            c.setHSL(0.05 + Math.random() * 0.1, 0.9, 0.4 + Math.random() * 0.2); // Red/Orange outer
        }

        fCol[i * 3] = c.r;
        fCol[i * 3 + 1] = c.g;
        fCol[i * 3 + 2] = c.b;
    }

    filamentGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3));
    filamentGeo.setAttribute('color', new THREE.BufferAttribute(fCol, 3));

    const material = new THREE.PointsMaterial({
        size: size * 0.05,
        map: createNoiseTexture('nebula', '#ffffff', '#000000'), // Use noise texture
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    group.add(new THREE.Points(filamentGeo, material));

    // Outer Glow
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: createNoiseTexture('glow', '#ff4400', '#000000'),
        color: 0xff4400,
        blending: THREE.AdditiveBlending,
        opacity: 0.2
    }));
    glow.scale.set(size * 2.5, size * 2.0, 1);
    group.add(glow);

    // Identify for navigation
    group.userData = {
        name: "CRAB NEBULA",
        isSystem: true,
        baseScale: size,
        type: 'nebula'
    };

    return group;
}
