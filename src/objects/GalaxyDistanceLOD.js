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
        const arms = this._getArms();

        // 1. CORE SMOOTHING GLOW
        const baseGlowMat = new THREE.SpriteMaterial({
            map: softTex,
            color: 0xffddaa,
            transparent: true,
            opacity: 0,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const glowMat = adaptMaterial(baseGlowMat, this.engine.isWebGPU);
        this.materials.push(glowMat);
        const glowSprite = new THREE.Sprite(glowMat);
        glowSprite.scale.set(16000000, 4000000, 1);
        this.group.add(glowSprite);

        // 2. SCALE-MATCHED DARK CLOUDS (Sprites)
        const darkCount = 300;
        for (let i = 0; i < darkCount; i++) {
            const arm = arms[i % 4];
            const t = 0.05 + Math.random() * 0.9; // Along arm body
            const pt = this._armPoint(arm, t, 0.85);

            const baseMat = new THREE.SpriteMaterial({
                map: softTex,
                transparent: true,
                opacity: 0,
                blending: THREE.NormalBlending, // Normal for "heavy" shadows
                depthWrite: false
            });
            const mat = adaptMaterial(baseMat, this.engine.isWebGPU);

            // Tapered dark colors
            const type = Math.random();
            if (type > 0.4) {
                mat.color.setHSL(0.04, 0.4, 0.05); // Dark Brown
            } else {
                mat.color.setHSL(0.1, 0.1, 0.02); // Grey-Black
            }

            const sprite = new THREE.Sprite(mat);
            sprite.position.set(pt.x, pt.y, pt.z);

            // SCALE MATCHED TO ARM WIDTH
            // 1.5x multiplier for blurriness and overlap
            const scale = pt.width * 1.5;
            sprite.scale.set(scale, scale, 1);

            this.group.add(sprite);
            this.darkSprites.push(sprite);
            this.materials.push(mat);
        }
    }

    update(delta, time, cameraPos) {
        if (!cameraPos) return;

        const dist = cameraPos.length();

        // LOD Check (Fade in: 10M -> 50M)
        let opacity = 0;
        if (dist > 10000000) {
            opacity = (dist - 10000000) / 40000000;
            opacity = Math.max(0, Math.min(1, opacity));
        }

        this.group.visible = opacity > 0.01;
        if (!this.group.visible) return;

        // Update Opacity
        this.materials.forEach(mat => {
            const isDark = mat.blending === THREE.NormalBlending;
            const maxOp = isDark ? 0.35 : 0.6;
            mat.opacity = opacity * maxOp;
        });

        // Slow galactic rotation
        this.group.rotation.y = time * 0.005;
    }
}
