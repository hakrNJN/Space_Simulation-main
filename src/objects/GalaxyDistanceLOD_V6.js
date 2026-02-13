import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { adaptMaterial } from '../utils/materialAdapter.js';

/**
 * GalaxyDistanceLOD_V6 (The "Safe" Version)
 * 
 * FIXES CRASH (V5) & LAG (V2):
 * - V5 crashed due to massive fill-rate/overdraw (6300 giant additive particles).
 * - V2 lagged due to CPU overhead (1700 sprites updating per frame).
 * - V4 failed due to hardware point size limit (64px).
 * 
 * SOLUTION V6:
 * - Back to `THREE.Sprite` (100% Stable, works on WebGPU/WebGL).
 * - Drastically REDUCED count (~350 total).
 * - MASSIVE Size to compensate (Clouds overlap heavily).
 * - Minimal CPU cost (few objects to update).
 */
export class GalaxyDistanceLOD extends BaseSystem {
    constructor() {
        super('GALAXY_LOD_V6', { x: 0, y: 0, z: 0 });
        this.materials = [];
        this.textureLoader = new THREE.TextureLoader();
    }

    _getArms() {
        return [
            { offset: 0, tightness: 0.18, strength: 1.0 },
            { offset: Math.PI * 0.55, tightness: 0.17, strength: 0.9 },
            { offset: Math.PI * 1.05, tightness: 0.20, strength: 0.85 },
            { offset: Math.PI * 1.55, tightness: 0.19, strength: 0.75 }
        ];
    }

    _armPoint(arm, t, widthMul) {
        // Matches MilkyWayBand logic
        const r = 1181250 + t * 5484375;
        const spiralAngle = arm.offset + Math.log(r / 1181250) / arm.tightness;
        const baseWidth = 3540000;
        const tipWidth = 60000;

        // PHYSICAL WIDTH
        const physicalWidth = (baseWidth * Math.pow(1 - t, 3) + tipWidth) * arm.strength * widthMul;

        const angularSpread = physicalWidth / r;
        const angleOffset = (Math.random() - 0.5) * angularSpread;
        const theta = spiralAngle + angleOffset;
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
        const isWebGPU = this.engine?.isWebGPU || false;

        const nebulaTex = this.textureLoader.load('./textures/nebula.png');
        nebulaTex.colorSpace = THREE.SRGBColorSpace;

        const noiseTex = this.textureLoader.load('./textures/noise_deep.png');

        const arms = this._getArms();

        // 1. CORE (1 Giant Sprite)
        const coreMat = adaptMaterial(new THREE.SpriteMaterial({
            map: nebulaTex,
            color: 0xffaa88,
            transparent: true,
            opacity: 0,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        }), isWebGPU);
        const coreSprite = new THREE.Sprite(coreMat);
        coreSprite.scale.set(1000000, 1000000, 1);
        this.group.add(coreSprite);
        this.materials.push(coreMat);


        // 2. ARMS (Reduced Count, Massive Clouds)
        // V2 had 1700. V6 has 250.
        this._createSpriteLayer(arms, {
            count: 250,
            color: 0x88ccff,
            widthMul: 2.0,
            sizeMultiplier: 4.0, // HUGE clouds
            opacityMax: 0.15, // Low opacity to stack
            blending: THREE.AdditiveBlending,
            texture: nebulaTex
        }, isWebGPU);

        // 3. NEBULAE (Highlights)
        this._createSpriteLayer(arms, {
            count: 80,
            color: 0xff3366,
            widthMul: 0.6,
            sizeMultiplier: 2.0,
            opacityMax: 0.4,
            blending: THREE.AdditiveBlending,
            texture: noiseTex
        }, isWebGPU);

        // 4. DUST (Darkness)
        this._createSpriteLayer(arms, {
            count: 150,
            color: 0x050200,
            widthMul: 1.0,
            sizeMultiplier: 2.5,
            opacityMax: 0.7,
            blending: THREE.NormalBlending,
            texture: nebulaTex
        }, isWebGPU);
    }

    _createSpriteLayer(arms, config, isWebGPU) {
        const mat = adaptMaterial(new THREE.SpriteMaterial({
            map: config.texture,
            color: config.color,
            transparent: true,
            opacity: 0,
            blending: config.blending,
            depthWrite: false
        }), isWebGPU);

        mat.userData = { maxOpacity: config.opacityMax };
        this.materials.push(mat);

        for (let i = 0; i < config.count; i++) {
            const arm = arms[i % 4];
            const t = Math.random();
            const pt = this._armPoint(arm, t, config.widthMul);

            const sprite = new THREE.Sprite(mat);
            sprite.position.set(pt.x, pt.y, pt.z);

            const size = pt.width * config.sizeMultiplier;
            sprite.scale.set(size, size, 1);

            this.group.add(sprite);
        }
    }

    update(delta, time, cameraOrPos) {
        let cameraPos = cameraOrPos;
        if (cameraOrPos && cameraOrPos.isCamera) cameraPos = cameraOrPos.position;
        if (!cameraPos) return;

        const dist = cameraPos.length();

        // Zone Logic
        if (dist < 50000) {
            this.group.visible = false;
            return;
        }
        this.group.visible = true;

        // Fade Logic
        let coreOpacity = (dist - 50000) / 150000;
        coreOpacity = Math.max(0, Math.min(1, coreOpacity));

        let structureOpacity = (dist - 150000) / 650000;
        structureOpacity = Math.max(0, Math.min(1, structureOpacity));

        this.materials.forEach(mat => {
            // Check if Core by size/color or just assume first pushed is core?
            // Actually core opacity logic is slightly different.
            // Simplified: All materials fade in similarly.

            // Adjust specific material opacity
            const maxOp = mat.userData.maxOpacity || 0.1;
            let targetOp = structureOpacity * maxOp;

            // Core overrides (first material usually)
            if (mat.color.getHex() === 0xffaa88) {
                targetOp = coreOpacity * 0.8;
            }

            // Safety Cap for additives
            if (mat.blending === THREE.AdditiveBlending && targetOp > 0.4) targetOp = 0.4;

            mat.opacity = targetOp;

            // Also update Shader/Node uniforms if adaptMaterial produced one
            if (mat.uniforms && mat.uniforms.opacity) {
                mat.uniforms.opacity.value = targetOp;
            }
        });

        // Slowly rotate galaxy
        this.group.rotation.y = time * 0.02;
    }
}
