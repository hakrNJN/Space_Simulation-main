import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createRadialTexture } from '../utils/textureUtils.js';
import { adaptMaterial } from '../utils/materialAdapter.js';

/**
 * VolumetricArms - Dense particle clouds along spiral arms
 * Creates volumetric appearance with clumpy, irregular distribution
 * Positioned at galactic center, spans the full galaxy (1.18M - 6.67M radius)
 */
export class VolumetricArms extends BaseSystem {
    constructor() {
        super('VOLUMETRIC ARMS', { x: 0, y: 0, z: 0 }); // Galactic center
    }

    build(textures) {
        const radialTexture = createRadialTexture();

        // Create 4 spiral arms with dense particles
        const numArms = 4;
        
        for (let armIndex = 0; armIndex < numArms; armIndex++) {
            this.createSpiralArm(armIndex, numArms, radialTexture);
        }
    }

    createSpiralArm(armIndex, totalArms, texture) {
        const armGroup = new THREE.Group();
        
        // Particle count per arm - dense for volumetric effect
        const particleCount = 15000;
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        const baseAngle = (armIndex / totalArms) * Math.PI * 2;
        const spiralTightness = 0.18 + Math.random() * 0.03;
        
        let particleIndex = 0;

        // Generate more particles, filter with noise for clumpy distribution
        for (let i = 0; i < particleCount * 1.8; i++) {
            // Position along spiral arm (matching galaxy structure)
            const t = Math.random();
            const r = 1181250 + t * 5484375; // 1.18M to 6.67M radius
            const spiralAngle = baseAngle + Math.log(r / 1181250) / spiralTightness;
            
            // Perpendicular spread (arm width)
            const baseWidth = 3540000;
            const tipWidth = 60000;
            const physicalWidth = baseWidth * Math.pow(1 - t, 3) + tipWidth;
            const angularSpread = physicalWidth / r;
            const perpSpread = (Math.random() - 0.5) * angularSpread;
            const finalAngle = spiralAngle + perpSpread;
            
            // Vertical spread (arm thickness)
            const thickness = 30000 + 1312500 * Math.pow(1 - t, 1.2);
            const verticalSpread = (Math.random() - 0.5) * thickness * 0.4;
            
            const x = Math.cos(finalAngle) * r;
            const y = verticalSpread;
            const z = Math.sin(finalAngle) * r;
            
            // Multi-frequency noise for clumpy distribution
            const n1 = Math.sin(x * 0.00015 + z * 0.00012) * 0.5;
            const n2 = Math.cos(y * 0.0003 + x * 0.00018) * 0.4;
            const n3 = Math.sin(z * 0.00014 + y * 0.00025) * 0.3;
            const noiseValue = (n1 + n2 + n3 + 1.2) / 2.4; // Normalize
            
            // Threshold creates clumpy regions
            const threshold = 0.4 + t * 0.1; // Higher threshold toward outer edge
            
            if (noiseValue > threshold && particleIndex < particleCount) {
                positions[particleIndex * 3] = x;
                positions[particleIndex * 3 + 1] = y;
                positions[particleIndex * 3 + 2] = z;

                // Color zones based on position and noise
                const distRatio = (r - 40000) / 240000;
                const color = new THREE.Color();
                
                // Define color regions
                if (noiseValue > 0.7) {
                    // Hot blue regions (young stars)
                    color.setHSL(0.58 + (noiseValue - 0.7) * 0.1, 0.7, 0.6 + noiseValue * 0.2);
                } else if (noiseValue > 0.55) {
                    // Purple transition zones
                    color.setHSL(0.75 + (noiseValue - 0.55) * 0.2, 0.65, 0.5 + noiseValue * 0.15);
                } else {
                    // Red/orange regions (dust and older stars)
                    color.setHSL(0.05 + distRatio * 0.08, 0.75, 0.45 + noiseValue * 0.2);
                }
                
                // Core is brighter
                if (r < 100000) {
                    color.multiplyScalar(1.2);
                }
                
                colors[particleIndex * 3] = color.r;
                colors[particleIndex * 3 + 1] = color.g;
                colors[particleIndex * 3 + 2] = color.b;
                
                particleIndex++;
            }
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const baseMat = new THREE.PointsMaterial({
            size: 45000, // Galaxy scale - matching existing particles
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const mat = adaptMaterial(baseMat, this.engine.isWebGPU);

        armGroup.add(new THREE.Points(geo, mat));
        this.group.add(armGroup);
    }

    update(delta, time) {
        // Slow rotation to simulate galactic rotation
        this.group.rotation.y += delta * 0.0008;
        
        // Subtle pulsing effect for color regions
        this.group.children.forEach((arm, i) => {
            const pulsePhase = time * 0.5 + i * Math.PI * 0.5;
            const pulseFactor = 0.95 + Math.sin(pulsePhase) * 0.05;
            arm.scale.setScalar(pulseFactor);
        });
    }
}
