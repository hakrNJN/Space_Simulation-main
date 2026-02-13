import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createRadialTexture } from '../utils/textureUtils.js';
import { adaptMaterial } from '../utils/materialAdapter.js';

/**
 * GalaxyDistanceLOD_V2
 * Implements a gradual visual transition for the galaxy fly-out.
 * Layers:
 * 1. Warm/Golden Core (Visible > 50k)
 * 2. Blue Spiral Arms (Visible > 150k)
 * 3. H-II Regions (Pink) (Visible > 150k)
 * 4. Dark Dust Lanes (Visible > 100k)
 */
export class GalaxyDistanceLOD extends BaseSystem {
    constructor() {
        super('GALAXY_LOD_V2', { x: 0, y: 0, z: 0 });
        this.materials = [];
        this.darkSprites = [];
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
        const softTex = createRadialTexture();
        const arms = this._getArms();
        const isWebGPU = this.engine?.isWebGPU || false;

        // 1. GOLDEN CORE (Replaces the "Halo", but gated by distance)
        const coreMat = adaptMaterial(new THREE.SpriteMaterial({
            map: softTex,
            color: 0xffaa88, // Warm core
            transparent: true,
            opacity: 0,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        }), isWebGPU);
        const coreSprite = new THREE.Sprite(coreMat);
        coreSprite.scale.set(600000, 600000, 1);
        this.group.add(coreSprite);
        this.materials.push(coreMat);

        // 2. BLUE SPIRAL ARMS (Volumetric Cloud Structure)
        // Visible from afar
        const armCount = 800;
        for (let i = 0; i < armCount; i++) {
            const arm = arms[i % 4];
            const t = Math.random();
            const pt = this._armPoint(arm, t, 1.5); // Wide spread

            const mat = adaptMaterial(new THREE.SpriteMaterial({
                map: softTex,
                color: 0x88ccff, // Blue/White
                transparent: true,
                opacity: 0,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            }), isWebGPU);

            const sprite = new THREE.Sprite(mat);
            sprite.position.set(pt.x, pt.y, pt.z);
            const scale = pt.width * 2.0;
            sprite.scale.set(scale, scale, 1);

            // Random rotation (mocked by sprite rotation if possible, or just placement)
            this.group.add(sprite);
            this.materials.push(mat);
        }

        // 3. H-II REGIONS (Pink Nebulae)
        const hiiCount = 300;
        for (let i = 0; i < hiiCount; i++) {
            const arm = arms[i % 4];
            const t = 0.1 + Math.random() * 0.8;
            const pt = this._armPoint(arm, t, 0.8); // Tighter to arm spine

            const mat = adaptMaterial(new THREE.SpriteMaterial({
                map: softTex,
                color: 0xff3366, // Deep Pink
                transparent: true,
                opacity: 0,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            }), isWebGPU);

            const sprite = new THREE.Sprite(mat);
            sprite.position.set(pt.x, pt.y, pt.z);
            const scale = pt.width * 1.5; // Smaller than arm clouds
            sprite.scale.set(scale, scale, 1);

            this.group.add(sprite);
            this.materials.push(mat);
        }

        // 4. DARK DUST LANES (Occluding)
        const dustCount = 600;
        for (let i = 0; i < dustCount; i++) {
            const arm = arms[i % 4];
            const t = Math.random();
            const pt = this._armPoint(arm, t, 1.0);

            // Use NormalBlending for occlusion-like effect
            const mat = adaptMaterial(new THREE.SpriteMaterial({
                map: softTex,
                color: 0x110500, // Very dark brown
                transparent: true,
                opacity: 0,
                blending: THREE.NormalBlending,
                depthWrite: false
            }), isWebGPU);

            const sprite = new THREE.Sprite(mat);
            sprite.position.set(pt.x, pt.y + 1000, pt.z); // Slightly offset Y
            const scale = pt.width * 1.8;
            sprite.scale.set(scale, scale, 1);

            this.group.add(sprite);
            this.materials.push(mat);
            // Track dark sprites separately for different opacity logic
            // (We'll just treat them as materials for simplicity first, but note blending)
        }
    }

    update(delta, time, cameraOrPos) {
        let cameraPos = cameraOrPos;
        if (cameraOrPos && cameraOrPos.isCamera) {
            cameraPos = cameraOrPos.position;
        }
        if (!cameraPos) return;

        const dist = cameraPos.length();

        // ZONE LOGIC
        // 1. Core Glow: Visible > 50k (just outside solar system range)
        // 2. Galaxy Structure: Visible > 150k (mid-transition)

        // Inner Zone (< 50k): ZERO Opacity (Vast Universal Feeling)
        if (dist < 50000) {
            if (this.group.visible) {
                this.group.visible = false;
                this.materials.forEach(m => m.opacity = 0);
            }
            return;
        }

        this.group.visible = true;

        // FADE LOGIC
        // Core Fade: 50k -> 200k
        let coreOpacity = 0;
        if (dist > 50000) {
            coreOpacity = (dist - 50000) / 150000;
            coreOpacity = Math.max(0, Math.min(1, coreOpacity));
        }

        // Structure Fade: 150k -> 800k (Gradual reveal of arms)
        let structureOpacity = 0;
        if (dist > 150000) {
            structureOpacity = (dist - 150000) / 650000;
            structureOpacity = Math.max(0, Math.min(1, structureOpacity));
        }

        // Apply Opacities
        this.materials.forEach(mat => {
            const isAdditive = mat.blending === THREE.AdditiveBlending;
            const isDark = mat.blending === THREE.NormalBlending;
            const colorHex = mat.color.getHex();

            // Identify layer by color/blend
            // Core: 0xffaa88
            const isCore = (colorHex === 0xffaa88);

            let targetOp = 0;

            if (isCore) {
                // Core max opacity 0.8
                targetOp = coreOpacity * 0.8;
            } else if (isDark) {
                // Dust max opacity 0.7
                targetOp = structureOpacity * 0.7;
            } else {
                // Arms/Nebulae max opacity low (PREVENT WHITE SCREEN)
                // Was 0.08 in V1 fix. Let's try 0.06 for subtlety
                targetOp = structureOpacity * 0.06;
            }

            mat.opacity = targetOp;
            mat.needsUpdate = true;
        });

        this.group.rotation.y = time * 0.005;
    }
}
