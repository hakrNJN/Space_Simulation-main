import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { SYSTEM_POSITIONS } from './SystemPositions.js';
import { adaptMaterial } from '../utils/materialAdapter.js';

/**
 * Crab Nebula (M1) - Supernova Remnant
 * Features distance-based LOD for optimal performance and visual quality
 */
export class CrabNebula extends BaseSystem {
    constructor() {
        super('CRAB NEBULA', SYSTEM_POSITIONS.CRAB_NEBULA);
        this.textureLoader = new THREE.TextureLoader();
        
        // LOD system
        this.lodLevels = {
            far: { distance: 200000, active: false },      // > 200km: minimal particles
            medium: { distance: 100000, active: false },   // 100-200km: medium particles
            close: { distance: 50000, active: false },     // 50-100km: high particles
            inside: { distance: 0, active: false }         // < 50km: maximum particles
        };
        
        this.particleSystems = {
            base: null,        // Always visible
            medium: null,      // Activates at medium distance
            close: null,       // Activates when close
            inside: null       // Activates when inside
        };
    }

    build(textures) {
        const nebulaTex = this.textureLoader.load('./textures/nebula.png', (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace;
        });

        const noiseTex = this.textureLoader.load('./textures/noise_deep.png', (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace;
        });

        this.createPulsar(nebulaTex);
        
        // Create all LOD levels (initially hidden except base)
        this.createBaseLOD(nebulaTex, noiseTex);
        this.createMediumLOD(nebulaTex);
        this.createCloseLOD(nebulaTex);
        this.createInsideLOD(nebulaTex, noiseTex);
        
        console.log('✓ Crab Nebula: LOD system initialized');
    }

    createPulsar(texture) {
        const coreGeo = new THREE.SphereGeometry(150, 16, 16);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const core = new THREE.Mesh(coreGeo, coreMat);
        core.userData = { name: 'CRAB PULSAR', isSystem: true, baseScale: 150 };
        this.group.add(core);
        this.targetables.push(core);
        this.pulsar = core;

        const glowMat = new THREE.SpriteMaterial({
            map: texture,
            color: 0xeeffff,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.9,
            depthWrite: false
        });
        const glow = new THREE.Sprite(glowMat);
        glow.scale.set(6000, 6000, 1);
        core.add(glow);

        const jetGeo = new THREE.CylinderGeometry(100, 250, 18000, 8, 1, true);
        const jetMat = new THREE.MeshBasicMaterial({
            color: 0x88ccff,
            transparent: true,
            opacity: 0.6,
            side: THREE.DoubleSide,
            depthWrite: false
        });
        
        const jet1 = new THREE.Mesh(jetGeo, jetMat);
        jet1.position.y = 9000;
        core.add(jet1);

        const jet2 = new THREE.Mesh(jetGeo, jetMat);
        jet2.position.y = -9000;
        jet2.rotation.x = Math.PI;
        core.add(jet2);

        this.pulsarLight = new THREE.PointLight(0xaaddff, 35.0, 200000, 0.7);
        core.add(this.pulsarLight);
    }

    // BASE LOD: Always visible from any distance (6k particles)
    createBaseLOD(nebulaTex, noiseTex) {
        const group = new THREE.Group();
        
        // Small blue core
        group.add(this.createParticleLayer(2000, nebulaTex, {
            radiusMin: 0, radiusMax: 15000,
            sizeMin: 8000, sizeMax: 8000,
            opacity: 0.7,
            colorFunc: (r) => {
                const ratio = r / 15000;
                const color = new THREE.Color();
                color.setHSL(0.57, 0.5, 0.7 + ratio * 0.2);
                return color;
            }
        }));
        
        // Red outer shell
        group.add(this.createParticleLayer(3000, nebulaTex, {
            radiusMin: 15000, radiusMax: 30000,
            sizeMin: 12000, sizeMax: 12000,
            opacity: 0.6,
            colorFunc: (r) => {
                const color = new THREE.Color();
                color.setHSL(0.0, 0.85, 0.4);
                return color;
            }
        }));
        
        // Outer haze
        group.add(this.createParticleLayer(1000, noiseTex, {
            radiusMin: 25000, radiusMax: 35000,
            sizeMin: 15000, sizeMax: 15000,
            opacity: 0.25,
            colorFunc: () => new THREE.Color().setHSL(0.01, 0.7, 0.25)
        }));
        
        this.group.add(group);
        this.particleSystems.base = group;
        group.visible = true;
    }

    // MEDIUM LOD: Activates 100-200km (adds 10k particles)
    createMediumLOD(texture) {
        const group = new THREE.Group();
        
        group.add(this.createParticleLayer(5000, texture, {
            radiusMin: 5000, radiusMax: 20000,
            sizeMin: 7000, sizeMax: 7000,
            opacity: 0.65,
            colorFunc: (r) => {
                const ratio = r / 20000;
                const color = new THREE.Color();
                if (ratio < 0.5) {
                    color.setHSL(0.56, 0.6, 0.6);
                } else {
                    color.setHSL(0.0, 0.8, 0.45);
                }
                return color;
            }
        }));
        
        group.add(this.createParticleLayer(5000, texture, {
            radiusMin: 18000, radiusMax: 32000,
            sizeMin: 10000, sizeMax: 10000,
            opacity: 0.5,
            colorFunc: () => new THREE.Color().setHSL(0.02, 0.85, 0.4)
        }));
        
        this.group.add(group);
        this.particleSystems.medium = group;
        group.visible = false;
    }

    // CLOSE LOD: Activates 50-100km (adds 15k particles)
    createCloseLOD(texture) {
        const group = new THREE.Group();
        
        group.add(this.createParticleLayer(8000, texture, {
            radiusMin: 0, radiusMax: 18000,
            sizeMin: 5000, sizeMax: 5000,
            opacity: 0.7,
            colorFunc: (r) => {
                const ratio = r / 18000;
                const color = new THREE.Color();
                color.setHSL(0.57, 0.65, 0.5 + ratio * 0.3);
                return color;
            }
        }));
        
        group.add(this.createParticleLayer(7000, texture, {
            radiusMin: 12000, radiusMax: 28000,
            sizeMin: 8000, sizeMax: 8000,
            opacity: 0.6,
            colorFunc: () => new THREE.Color().setHSL(0.98, 0.85, 0.5)
        }));
        
        this.group.add(group);
        this.particleSystems.close = group;
        group.visible = false;
    }

    // INSIDE LOD: Activates < 50km (adds 20k particles for dense cloud)
    createInsideLOD(nebulaTex, noiseTex) {
        const group = new THREE.Group();
        
        // Dense blue interior
        group.add(this.createParticleLayer(10000, nebulaTex, {
            radiusMin: 0, radiusMax: 15000,
            sizeMin: 4000, sizeMax: 4000,
            opacity: 0.75,
            colorFunc: (r) => {
                const ratio = r / 15000;
                const color = new THREE.Color();
                if (ratio < 0.3) {
                    color.setHSL(0.57, 0.4, 0.9);
                } else {
                    color.setHSL(0.56, 0.7, 0.6);
                }
                return color;
            }
        }));
        
        // Dense red filaments
        group.add(this.createParticleLayer(8000, nebulaTex, {
            radiusMin: 10000, radiusMax: 25000,
            sizeMin: 6000, sizeMax: 6000,
            opacity: 0.7,
            colorFunc: () => new THREE.Color().setHSL(0.0, 0.9, 0.5)
        }));
        
        // Fill particles
        group.add(this.createParticleLayer(2000, noiseTex, {
            radiusMin: 5000, radiusMax: 30000,
            sizeMin: 5000, sizeMax: 5000,
            opacity: 0.4,
            colorFunc: (r) => {
                const ratio = r / 30000;
                const color = new THREE.Color();
                color.setHSL(ratio < 0.5 ? 0.57 : 0.01, 0.7, 0.4);
                return color;
            }
        }));
        
        this.group.add(group);
        this.particleSystems.inside = group;
        group.visible = false;
    }

    // Helper to create particle layer
    createParticleLayer(count, texture, config) {
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = config.radiusMin + Math.random() * (config.radiusMax - config.radiusMin);
            
            // Add noise
            const noise = Math.sin(theta * 4) * Math.cos(phi * 3) * 1500;
            const finalR = r + noise;
            
            positions[i3] = Math.sin(phi) * Math.cos(theta) * finalR;
            positions[i3 + 1] = Math.cos(phi) * finalR * 0.85;
            positions[i3 + 2] = Math.sin(phi) * Math.sin(theta) * finalR;

            const color = config.colorFunc(r);
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const size = config.sizeMin + Math.random() * (config.sizeMax - config.sizeMin);
        const baseMat = new THREE.PointsMaterial({
            size: size,
            sizeAttenuation: false,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: config.opacity,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const mat = adaptMaterial(baseMat, this.engine?.isWebGPU);

        return new THREE.Points(geo, mat);
    }

    update(delta, time, camera) {
        if (this.pulsar) {
            this.pulsar.rotation.y += delta * 3.2;
            this.pulsar.rotation.x += delta * 0.5;
        }
        if (this.pulsarLight) {
            this.pulsarLight.intensity = 25 + Math.sin(time * 35) * 15;
        }

        // LOD system based on camera distance
        if (camera) {
            const distance = camera.position.distanceTo(this.position);
            
            // Update LOD visibility
            if (distance > 200000) {
                // Far: only base
                this.particleSystems.medium.visible = false;
                this.particleSystems.close.visible = false;
                this.particleSystems.inside.visible = false;
            } else if (distance > 100000) {
                // Medium distance
                this.particleSystems.medium.visible = true;
                this.particleSystems.close.visible = false;
                this.particleSystems.inside.visible = false;
            } else if (distance > 50000) {
                // Close
                this.particleSystems.medium.visible = true;
                this.particleSystems.close.visible = true;
                this.particleSystems.inside.visible = false;
            } else {
                // Inside: all layers
                this.particleSystems.medium.visible = true;
                this.particleSystems.close.visible = true;
                this.particleSystems.inside.visible = true;
            }
        }
    }
}
