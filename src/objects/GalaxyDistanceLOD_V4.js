import * as THREE from 'three';
import * as ThreeWebGPU from 'three/webgpu';
import { BaseSystem } from './BaseSystem.js';
import { adaptMaterial } from '../utils/materialAdapter.js';
import { attribute, float, texture, uv, color, positionLocal } from 'three/tsl';

/**
 * GalaxyDistanceLOD_V4 (Realistic Clouds & Scaling)
 * 
 * Improvements over V3:
 * 1. Variable Particle Sizes: Uses 'size' attribute to scale particles based on arm width.
 *    - Core: Massive (3.5M+)
 *    - Tips: Small (50k)
 *    - Fixes the "sparse/empty" look near the center.
 * 
 * 2. Realistic Textures: Uses 'textures/nebula.png' for soft, cloud-like appearance.
 * 
 * 3. Hybrid Shader Support:
 *    - WebGL: Uses custom ShaderMaterial.
 *    - WebGPU: Uses PointsNodeMaterial with TSL sizeNode.
 */
export class GalaxyDistanceLOD extends BaseSystem {
    constructor() {
        super('GALAXY_LOD_V4', { x: 0, y: 0, z: 0 });
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

        // PHYSICAL WIDTH is key for V4 sizing
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

        // Load Realistic Texture
        // Using distinct textures if available, otherwise fallback
        const nebulaTex = this.textureLoader.load('./textures/nebula.png', (tex) => {
            // Ensure proper color space
            tex.colorSpace = THREE.SRGBColorSpace;
        });

        const noiseTex = this.textureLoader.load('./textures/noise_deep.png');

        const arms = this._getArms();

        // 1. GOLDEN CORE (Single Sprite - Simple & Effective)
        const coreMat = adaptMaterial(new THREE.SpriteMaterial({
            map: nebulaTex, // Use nebula texture for softer core
            color: 0xffaa88,
            transparent: true,
            opacity: 0,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        }), isWebGPU);
        const coreSprite = new THREE.Sprite(coreMat);
        coreSprite.scale.set(800000, 800000, 1); // Large core
        this.group.add(coreSprite);
        this.materials.push(coreMat);


        // 2. BLUE SPIRAL ARMS (Points with Variable Size)
        this._createPointsLayer(arms, {
            count: 3000, // Reduced count, larger sprites
            color: 0x88ccff,
            widthMul: 2.0, // Overlap significantly
            sizeMultiplier: 2.5, // 2.5x the physical width
            opacityMax: 0.15,
            blending: THREE.AdditiveBlending,
            texture: nebulaTex
        }, isWebGPU);


        // 3. H-II REGIONS (Pink Nebulae)
        this._createPointsLayer(arms, {
            count: 600,
            color: 0xff3366,
            widthMul: 0.5, // Tighter to spine
            sizeMultiplier: 1.5,
            opacityMax: 0.6,
            blending: THREE.AdditiveBlending,
            texture: noiseTex // Use noise for variety
        }, isWebGPU);


        // 4. DARK DUST LANES (Occluding)
        this._createPointsLayer(arms, {
            count: 1500,
            color: 0x050200,
            widthMul: 1.0,
            sizeMultiplier: 2.0,
            opacityMax: 0.7,
            blending: THREE.NormalBlending, // Occlude
            texture: nebulaTex
        }, isWebGPU);
    }

    _createPointsLayer(arms, config, isWebGPU) {
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(config.count * 3);
        const sizes = new Float32Array(config.count); // Custom Size Attribute

        // V4: Calculate Size per particle
        for (let i = 0; i < config.count; i++) {
            const arm = arms[i % 4];

            // Bias random t towards center for more density there? 
            // Or uniform? Uniform is fine if scaled correctly.
            const t = Math.random();

            const pt = this._armPoint(arm, t, config.widthMul);

            positions[i * 3] = pt.x;
            positions[i * 3 + 1] = pt.y;
            positions[i * 3 + 2] = pt.z;

            // SIZE LOGIC
            // Scale based on physical arm width at this point
            // e.g. Center width ~3.5M -> Particle Size ~7M (if 2.0 multiplier)
            // Tips width ~60k -> Particle Size ~120k
            sizes[i] = pt.width * config.sizeMultiplier;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1)); // Pass 'size' to shader

        let mat;

        if (isWebGPU) {
            // === WEBGPU (TSL) ===
            // Use PointsNodeMaterial with TSL logic
            mat = new ThreeWebGPU.PointsNodeMaterial({
                transparent: true,
                opacity: 0,
                blending: config.blending,
                depthWrite: false
            });

            mat.color = new THREE.Color(config.color);
            mat.map = config.texture;

            // Connect Attribute to Size Node
            // TSL: sizeNode = attribute('size', 'float')
            mat.sizeNode = attribute('size', 'float');

            // Ensure additive blending works correctly (no premultiplied alpha for additive)
            if (config.blending === THREE.AdditiveBlending) {
                mat.transparent = true;
                // WebGPURenderer handles blending
            }

        } else {
            // === WEBGL (GLSL) ===
            // Custom ShaderMaterial to handle 'attribute float size'

            const uniforms = {
                color: { value: new THREE.Color(config.color) },
                map: { value: config.texture },
                opacity: { value: 0.0 }
            };

            mat = new THREE.ShaderMaterial({
                uniforms: uniforms,
                vertexShader: `
                    attribute float size;
                    varying float vOpacity;
                    varying vec2 vUv;
                    
                    void main() {
                        vUv = uv;
                        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                        gl_Position = projectionMatrix * mvPosition;
                        
                        // Size Attenuation
                        // Scale size by distance to camera
                        gl_PointSize = size * (3000.0 / -mvPosition.z); 
                    }
                `,
                fragmentShader: `
                    uniform vec3 color;
                    uniform sampler2D map;
                    uniform float opacity;
                    varying vec2 vUv;
                    
                    void main() {
                        vec4 tex = texture2D(map, gl_PointCoord);
                        gl_FragColor = vec4(color * tex.rgb, opacity * tex.a);
                    }
                `,
                transparent: true,
                blending: config.blending,
                depthWrite: false,
                depthTest: true
            });
        }

        // Store config for opacity updates
        mat.userData = { maxOpacity: config.opacityMax, isShader: !isWebGPU };

        const points = new THREE.Points(geo, mat);

        // Frustum Culling optimization (Crucial for large galaxy)
        // If 3M wide, standard bounding sphere might compute wrong.
        // But for points it's usually fine.
        points.frustumCulled = false; // Always render to avoid popping

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
                this.materials.forEach(m => {
                    if (m.userData.isShader) m.uniforms.opacity.value = 0;
                    else m.opacity = 0;
                });
            }
            return;
        }

        this.group.visible = true;

        // FADE LOGIC
        let coreOpacity = 0;
        if (dist > 50000) {
            coreOpacity = (dist - 50000) / 150000;
            coreOpacity = Math.max(0, Math.min(1, coreOpacity));
        }

        let structureOpacity = 0;
        if (dist > 150000) {
            structureOpacity = (dist - 150000) / 650000;
            structureOpacity = Math.max(0, Math.min(1, structureOpacity));
        }

        // Apply Opacities
        this.materials.forEach(mat => {
            const isAdditive = mat.blending === THREE.AdditiveBlending;
            const isCore = (mat instanceof THREE.SpriteMaterial); // Core is the only Sprite

            let targetOp = 0;

            if (isCore) {
                targetOp = coreOpacity * 0.8;
            } else {
                const maxOp = mat.userData.maxOpacity || 0.1;
                targetOp = structureOpacity * maxOp;

                // Boost for realistic texture (since texture has alpha)
                // V4 has texture alpha, so we can afford higher base opacity
                // But still clamp additive to avoid washout
                if (isAdditive && targetOp > 0.4) targetOp = 0.4;
            }

            // Update Material
            if (mat.userData.isShader) {
                mat.uniforms.opacity.value = targetOp;
            } else {
                mat.opacity = targetOp;
            }

            mat.needsUpdate = true;
        });

        this.group.rotation.y = time * 0.005;
    }
}
