import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createRadialTexture } from '../utils/textureUtils.js';
import { adaptMaterial } from '../utils/materialAdapter.js';

/**
 * GalaxyDistanceLOD
 * Adds a "heavy", dense visual layer to the galaxy arms, visible only from a distance.
 * This version uses scale-matched dark sprites that follow the tapering width of the arms.
 */
export class GalaxyDistanceLOD extends BaseSystem {
    constructor() {
        super('GALAXY_LOD', { x: 0, y: 0, z: 0 });
        this.materials = [];
        this.darkSprites = []; // Track individual sprites for opacity updates
    }

    _getArms() {
        return [
            { offset: 0, tightness: 0.18, strength: 1.0 },
            { offset: Math.PI * 0.55, tightness: 0.17, strength: 0.9 },
            { offset: Math.PI * 1.05, tightness: 0.20, strength: 0.85 },
            { offset: Math.PI * 1.55, tightness: 0.19, strength: 0.75 }
        ];
    }

    /**
     * Calculates position and ARM WIDTH at a given t [0, 1]
     */
    _armPoint(arm, t, widthMul) {
        const r = 1181250 + t * 5484375;
        const spiralAngle = arm.offset + Math.log(r / 1181250) / arm.tightness;

        // Match MilkyWayBand physicalWidth math
        const baseWidth = 3540000;
        const tipWidth = 60000;
        const physicalWidth = (baseWidth * Math.pow(1 - t, 3) + tipWidth) * arm.strength * widthMul;

        const angularSpread = physicalWidth / r;
        const angleOffset = (Math.random() - 0.5) * angularSpread;

        const theta = spiralAngle + angleOffset;

        // Vertical thickness (matching Phase 25 flattened core)
        const thickness = 30000 + 1312500 * Math.pow(1 - t, 1.2);
        const y = thickness * 0.5 * (Math.random() + Math.random() + Math.random() - 1.5) * 0.4;

        return {
            x: Math.cos(theta) * r,
            y: y,
            z: Math.sin(theta) * r,
            width: physicalWidth
        };
    }

    build(textures) {
        const softTex = createRadialTexture();

        // Core Smoothing Glow removed by user request (was causing "halo" artifact)
        /*
        const coreMat = adaptMaterial(new THREE.SpriteMaterial({
            map: softTex,
            color: 0xffaa88, // Warm core color
            transparent: true,
            opacity: 0, // Starts invisible
            blending: THREE.AdditiveBlending,
            depthWrite: false
        }), this.engine?.isWebGPU);

        const coreSprite = new THREE.Sprite(coreMat);
        coreSprite.scale.set(600000, 600000, 1); // Covers the core
        this.group.add(coreSprite);
        this.materials.push(coreMat);
        */
    }

    update(delta, time, cameraOrPos) {
        let cameraPos = cameraOrPos;
        if (cameraOrPos && cameraOrPos.isCamera) {
            cameraPos = cameraOrPos.position;
        }

        if (!cameraPos) return;

        const dist = cameraPos.length();

        // LOD Check (Fade in: 300k -> 1.5M)
        // Galaxy radius is ~450k. usage starts inside.
        // We want it visible from "Mid-Outer".
        let opacity = 0;
        const startDist = 300000;
        const fullDist = 1500000;

        if (dist > startDist) {
            opacity = (dist - startDist) / (fullDist - startDist);
            opacity = Math.max(0, Math.min(1, opacity));
        }

        this.group.visible = opacity > 0.01;
        if (!this.group.visible) return;

        // Update Opacity
        this.materials.forEach(mat => {
            mat.opacity = opacity;
            mat.needsUpdate = true; // Ensure visual update
        });

        // Slow galactic rotation
        this.group.rotation.y = time * 0.005;
    }
}
