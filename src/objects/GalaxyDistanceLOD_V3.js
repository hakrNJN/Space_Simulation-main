import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createRadialTexture } from '../utils/textureUtils.js';
import { adaptMaterial } from '../utils/materialAdapter.js';

/**
 * GalaxyDistanceLOD_V3 (Performance Optimized)
 * Uses THREE.Points instead of thousands of Sprites to eliminate CPU overhead and lag.
 * Layers:
 * 1. Warm/Golden Core (Single Sprite)
 * 2. Blue Spiral Arms (Points)
 * 3. H-II Regions (Points)
 * 4. Dark Dust Lanes (Points)
 */
export class GalaxyDistanceLOD extends BaseSystem {
    constructor() {
        super('GALAXY_LOD_V3', { x: 0, y: 0, z: 0 });
        this.materials = [];
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

        // 1. GOLDEN CORE (Single Sprite is fine for 1 object)
        const coreMat = adaptMaterial(new THREE.SpriteMaterial({
            map: softTex,
            color: 0xffaa88,
            transparent: true,
            opacity: 0,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        }), isWebGPU);
        const coreSprite = new THREE.Sprite(coreMat);
        coreSprite.scale.set(600000, 600000, 1);
        this.group.add(coreSprite);
        this.materials.push(coreMat);

        // 2. BLUE SPIRAL ARMS (Points)
        this._createPointsLayer(arms, {
            count: 2500,
            color: 0x88ccff,
            widthMul: 1.8,
            size: 40000, // Large particles
            opacityMax: 0.15, // Low opacity to prevent washout
            blending: THREE.AdditiveBlending
        }, isWebGPU);

        // 3. H-II REGIONS POI (Pink Points)
        this._createPointsLayer(arms, {
            count: 800,
            color: 0xff3366,
            widthMul: 0.6,
            size: 25000,
            opacityMax: 0.4,
            blending: THREE.AdditiveBlending
        }, isWebGPU);

        // 4. DARK DUST LANES (Points)
        this._createPointsLayer(arms, {
            count: 2000,
            color: 0x050200, // Almost black
            widthMul: 1.2,
            size: 35000,
            opacityMax: 0.6,
            blending: THREE.NormalBlending // Occlude
        }, isWebGPU);
    }

    _createPointsLayer(arms, config, isWebGPU) {
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(config.count * 3);
        const uvs = new Float32Array(config.count * 2); // Dummy UVs

        for (let i = 0; i < config.count; i++) {
            const arm = arms[i % 4];
            const t = Math.random();
            const pt = this._armPoint(arm, t, config.widthMul);

            positions[i * 3] = pt.x;
            positions[i * 3 + 1] = pt.y;
            positions[i * 3 + 2] = pt.z;

            uvs[i * 2] = 0;
            uvs[i * 2 + 1] = 0;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

        const mat = adaptMaterial(new THREE.PointsMaterial({
            map: createRadialTexture(),
            color: config.color,
            transparent: true,
            opacity: 0,
            size: config.size,
            sizeAttenuation: true,
            blending: config.blending,
            depthWrite: false
        }), isWebGPU);

        // Store config for opacity updates
        mat.userData = { maxOpacity: config.opacityMax };

        const points = new THREE.Points(geo, mat);
        this.group.add(points);
        this.materials.push(mat);
    }

    update(delta, time, cameraOrPos) {
        let cameraPos = cameraOrPos;
        if (cameraOrPos && cameraOrPos.isCamera) {
            cameraPos = cameraOrPos.position;
        }
        if (!cameraPos) return;

        const dist = cameraPos.length();

        // ZONE LOGIC
        // Inner Zone (< 50k): ZERO Opacity
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

        // Structure Fade: 150k -> 800k
        let structureOpacity = 0;
        if (dist > 150000) {
            structureOpacity = (dist - 150000) / 650000;
            structureOpacity = Math.max(0, Math.min(1, structureOpacity));
        }

        // Apply Opacities
        this.materials.forEach(mat => {
            const isAdditive = mat.blending === THREE.AdditiveBlending;
            const colorHex = mat.color.getHex();
            const isCore = (mat instanceof THREE.SpriteMaterial); // Core is the only Sprite

            let targetOp = 0;

            if (isCore) {
                targetOp = coreOpacity * 0.8;
            } else {
                // Use stored max opacity from userData
                const maxOp = mat.userData.maxOpacity || 0.1;
                targetOp = structureOpacity * maxOp;

                // Extra safety for additive materials to prevent washout
                if (isAdditive && targetOp > 0.2) targetOp = 0.2;
            }

            mat.opacity = targetOp;
            mat.needsUpdate = true;
        });

        this.group.rotation.y = time * 0.005;
    }
}
