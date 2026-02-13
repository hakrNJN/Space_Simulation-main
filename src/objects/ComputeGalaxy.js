import * as THREE from 'three';
import * as ThreeWebGPU from 'three/webgpu';
import {
    Fn, uniform, texture, instanceIndex, float, vec3, vec4, color,
    positionLocal, storage, If, mix, color as tslColor,
    sin, cos, length,
    attribute, pointUV
} from 'three/tsl';
import { createStarTexture, createRadialTexture } from '../utils/textureUtils.js';
import { SYSTEM_POSITIONS } from './SystemPositions.js';

export class ComputeGalaxy {
    constructor(engine) {
        this.engine = engine;
        this.group = new THREE.Group();
        this.systems = []; // Holds the sub-systems (Stars, Dust) references
        this.isCompute = true;
    }

    build() {
        // Textures
        const starTexture = createStarTexture();
        const dustTexture = createRadialTexture();

        // 1. Gather all "Star" data (Arms, Disk, Core Stars)
        const starData = this._collectStarData();
        this._createComputeSystem(starData, starTexture, 'Stars', 0.6);

        // 2. Gather all "Dust" data (Arm Fill, Ring, Core Dust, Gas)
        const dustData = this._collectDustData();
        this._createComputeSystem(dustData, dustTexture, 'Dust', 0.25);

        // 3. Gather "Gas Cloud" data (Large volumetric clouds)
        const gasData = this._collectGasCloudData();
        // Use dust texture but with different scale/opacity in the system creation if needed, 
        // or just add them as a separate system with the same texture for now.
        this._createComputeSystem(gasData, dustTexture, 'GasClouds', 0.15);
    }

    update(delta, time, camera) {
        // Dispatch Compute Shaders
        if (this.engine.renderer && this.systems.length > 0) {
            this.systems.forEach(sys => {
                // Update time uniform
                if (sys.uniforms) {
                    if (sys.uniforms.time) sys.uniforms.time.value = time;
                    if (camera && sys.uniforms.viewMatrix) sys.uniforms.viewMatrix.value.copy(camera.matrixWorldInverse);
                    if (camera && sys.uniforms.projectionMatrix) sys.uniforms.projectionMatrix.value.copy(camera.projectionMatrix);
                }

                // Execute Compute
                this.engine.renderer.compute(sys.computeNode);
            });
        }
    }

    // --- Data Collection Helpers (Ported from MilkyWayBand) ---
    // These regenerate the exact same positions as the CPU version

    _getArms() {
        return [
            { offset: 0, tightness: 0.18, strength: 1.0 },
            { offset: Math.PI * 0.55, tightness: 0.17, strength: 0.9 },
            { offset: Math.PI * 1.05, tightness: 0.20, strength: 0.85 },
            { offset: Math.PI * 1.55, tightness: 0.19, strength: 0.75 }
        ];
    }

    _armPoint(arm, t, widthMul) {
        // Scaled by 1.5x (Total ~8.4x original)
        const r = 1181250 + t * 5484375;
        const spiralAngle = arm.offset + Math.log(r / 1181250) / arm.tightness;

        const baseWidth = 3540000;
        const tipWidth = 60000;
        const physicalWidth = (baseWidth * Math.pow(1 - t, 3) + tipWidth) * arm.strength * widthMul;

        const angularSpread = physicalWidth / r;
        const angleOffset = (Math.random() - 0.5) * angularSpread;

        const jitterFactor = 0.35 + t * 0.5;
        const radialJitter = (Math.random() - 0.5) * physicalWidth * jitterFactor;

        const theta = spiralAngle + angleOffset;
        const finalR = r + radialJitter;

        const thickness = 30000 + 1312500 * Math.pow(1 - t, 1.2);
        const y = thickness * 0.5 * (Math.random() + Math.random() + Math.random() - 1.5) * 0.67;

        return {
            x: Math.cos(theta) * finalR,
            y: y,
            z: Math.sin(theta) * finalR
        };
    }

    _collectStarData() {
        const positions = [];
        const colors = [];
        const sizes = [];
        const phases = [];
        const systems = Object.values(SYSTEM_POSITIONS);

        // 1. Spiral Arms (Stars) - REDUCED COUNT
        // 1. Spiral Arms (Stars) - REDUCED FURTHER (Another 20%)
        const armCount = 22400; // Was 28000
        const arms = this._getArms();
        for (let i = 0; i < armCount; i++) {
            const arm = arms[i % 4];
            const t = Math.random();
            const pt = this._armPoint(arm, t, 1.0);

            // Exclusion Zone (~1M units squared)
            let excluded = false;
            for (const sys of systems) {
                // 1,000,000^2 = 1,000,000,000,000
                if ((pt.x - sys.x) ** 2 + (pt.y - sys.y) ** 2 + (pt.z - sys.z) ** 2 < 1000000000000) {
                    excluded = true; break;
                }
            }
            if (excluded) continue;

            positions.push(pt.x, pt.y, pt.z);

            // Color logic
            const distRatio = Math.sqrt(pt.x * pt.x + pt.z * pt.z) / 4500000;
            const hue = 0.6 + (0.1 - 0.6) * distRatio + (Math.random() - 0.5) * 0.1;
            const c = new THREE.Color().setHSL(hue, 0.8, 0.7 + Math.random() * 0.3);
            colors.push(c.r, c.g, c.b);
            sizes.push(4000);
            phases.push(Math.random());
        }

        // 2. Disk Stars - REDUCED FURTHER (Another 20%)
        const diskCount = 6400; // Was 8000
        for (let i = 0; i < diskCount; i++) {
            const r = 1181250 + Math.random() * 5484375;
            const theta = Math.random() * Math.PI * 2;
            if (Math.random() > Math.exp(-r / 3375000) * 3) continue;

            const t = (r - 1181250) / 5484375;
            const starThickness = 30000 + 1312500 * Math.pow(1 - t, 1.2);

            const x = Math.cos(theta) * r;
            const z = Math.sin(theta) * r;
            const y = starThickness * 0.5 * (Math.random() + Math.random() + Math.random() - 1.5) * 0.67;

            // Exclusion
            let excluded = false;
            for (const sys of systems) {
                if ((x - sys.x) ** 2 + (y - sys.y) ** 2 + (z - sys.z) ** 2 < 1000000000000) {
                    excluded = true; break;
                }
            }
            if (excluded) continue;

            positions.push(x, y, z);
            const c = new THREE.Color().setHSL(0.6, 0.2, 0.4);
            colors.push(c.r, c.g, c.b);
            sizes.push(3500);
            phases.push(Math.random());
        }

        // 3. Core Stars - REDUCED FURTHER (Another 20%)
        const coreCount = 5120; // Was 6400
        for (let i = 0; i < coreCount; i++) {
            const r = 675000 + Math.pow(Math.random(), 1.5) * 2025000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = (r * Math.sin(phi) * Math.sin(theta)) * 0.4;
            const z = r * Math.cos(phi);

            positions.push(x, y, z);
            const c = new THREE.Color().setHSL(0.08 + Math.random() * 0.08, 0.8, 0.6 + Math.random() * 0.4);
            colors.push(c.r, c.g, c.b);
            sizes.push(6000);
            phases.push(Math.random());
        }

        return { positions, colors, sizes, phases };
    }

    _collectDustData() {
        const positions = [];
        const colors = [];
        const sizes = [];
        const phases = [];
        const systems = Object.values(SYSTEM_POSITIONS);

        // 1. Arm Dust Fill - REDUCED FURTHER (Another 20%)
        const armCount = 11520; // Was 14400
        const arms = this._getArms();
        for (let i = 0; i < armCount; i++) {
            const arm = arms[i % 4];
            const t = Math.pow(Math.random(), 0.4);
            const pt = this._armPoint(arm, t, 1.1);

            let excluded = false;
            for (const sys of systems) {
                if ((pt.x - sys.x) ** 2 + (pt.y - sys.y) ** 2 + (pt.z - sys.z) ** 2 < 1000000000000) {
                    excluded = true; break;
                }
            }
            if (excluded) continue;

            positions.push(pt.x, pt.y, pt.z);
            const brightness = (1 - t * 0.8) * 0.3;
            const c = new THREE.Color().setHSL(0.08 + Math.random() * 0.06, 0.4, brightness);
            colors.push(c.r, c.g, c.b);
            sizes.push(45000);
            phases.push(Math.random());
        }

        // 2. Galactic Ring - REDUCED FURTHER (Another 20%)
        const ringCount = 12800; // Was 16000
        const innerR = 885937;
        const outerR = 4218750;
        for (let i = 0; i < ringCount; i++) {
            const t = Math.random();
            const angle = Math.random() * Math.PI * 2;
            const noise = Math.sin(angle * 3) * 0.2 + Math.cos(angle * 7) * 0.1;
            const finalOuterR = outerR * (1.0 + noise);
            const r = innerR + Math.pow(t, 1.8) * (finalOuterR - innerR);
            const ringThickness = 100000 + 500000 * Math.pow(1 - t, 1.2);
            const y = ringThickness * 0.5 * (Math.random() + Math.random() + Math.random() - 1.5) * 0.67;

            positions.push(Math.cos(angle) * r, y, Math.sin(angle) * r);
            const c = new THREE.Color().setHSL(0.12 + Math.random() * 0.05, 0.8, 0.5 + Math.random() * 0.4);
            colors.push(c.r, c.g, c.b);
            sizes.push(9000);
            phases.push(Math.random());
        }

        // 3. Inter-Arm Gas - REDUCED FURTHER (Another 20%)
        const gasCount = 2560; // Was 3200
        for (let i = 0; i < gasCount; i++) {
            const r = 1200000 + Math.random() * 4200000;
            const theta = Math.random() * Math.PI * 2;
            const x = Math.cos(theta) * r;
            const z = Math.sin(theta) * r;
            const normR = r / 5400000;
            const gasThickness = 60000 + 120000 * Math.exp(-normR * 3);
            const y = (Math.random() - 0.5) * gasThickness;

            let excluded = false;
            for (const sys of systems) {
                if ((x - sys.x) ** 2 + (y - sys.y) ** 2 + (z - sys.z) ** 2 < 1000000000000) {
                    excluded = true; break;
                }
            }
            if (excluded) continue;

            positions.push(x, y, z);
            const c = new THREE.Color().setHSL(0.7 + Math.random() * 0.1, 0.6, 0.05 + Math.random() * 0.1);
            colors.push(c.r, c.g, c.b);
            sizes.push(35000);
            phases.push(Math.random());
        }

        // 4. Core Dust - REDUCED FURTHER (20%)
        const coreDustCount = 2560; // Was 4000
        for (let i = 0; i < coreDustCount; i++) {
            const r = 2250000 + Math.random() * 2250000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = (r * Math.sin(phi) * Math.sin(theta)) * 0.4;
            const z = r * Math.cos(phi);

            positions.push(x, y, z);
            const c = new THREE.Color().setHSL(0.04 + Math.random() * 0.02, 0.6 + Math.random() * 0.2, 0.1 + Math.random() * 0.1);
            colors.push(c.r, c.g, c.b);
            sizes.push(50000);
            phases.push(Math.random());
        }

        return { positions, colors, sizes, phases };
    }

    _collectGasCloudData() {
        const positions = [];
        const colors = [];
        const sizes = [];
        const phases = [];
        const systems = Object.values(SYSTEM_POSITIONS);

        // Large, volumetric gas clouds (200,000 unit size)
        // INVERTED DISTRIBUTION: Denser at outskirts
        const cloudCount = 1500;
        const arms = this._getArms();

        for (let i = 0; i < cloudCount; i++) {
            const arm = arms[i % 4];
            // Bias 't' towards 1.0 (Outer edge) for higher density at outskirts
            // Using 1 - pow(random, 3) gives strong bias to 1.
            const u = Math.random();
            const t = 1.0 - (u * u * u * 0.8); // Range 0.2 to 1.0, biased to 1.0

            const pt = this._armPoint(arm, t, 1.6); // Even wider spread at edges

            // Exclusion
            let excluded = false;
            for (const sys of systems) {
                if ((pt.x - sys.x) ** 2 + (pt.y - sys.y) ** 2 + (pt.z - sys.z) ** 2 < 1000000000000) {
                    excluded = true; break;
                }
            }
            if (excluded) continue;

            positions.push(pt.x, pt.y, pt.z);

            // Varied hues (Nebula colors: Purple, Blue, Red/Orange)
            const type = Math.random();
            const c = new THREE.Color();
            if (type < 0.33) c.setHSL(0.6, 0.5, 0.1);
            else if (type < 0.66) c.setHSL(0.8, 0.6, 0.08);
            else c.setHSL(0.05, 0.7, 0.08);

            colors.push(c.r, c.g, c.b);
            sizes.push(200000 + Math.random() * 150000); // HUGE
            phases.push(Math.random());
        }

        return { positions, colors, sizes, phases };
    }

    _smoothstep(min, max, value) {
        var x = Math.max(0, Math.min(1, (value - min) / (max - min)));
        return x * x * (3 - 2 * x);
    }

    _createComputeSystem(data, textureMap, name, opacityVal) {
        const count = data.positions.length / 3;

        // 1. Create Typed Arrays
        const positionArray = new Float32Array(data.positions);
        const colorArray = new Float32Array(data.colors);
        const sizePhaseArray = new Float32Array(count * 2);

        for (let i = 0; i < count; i++) {
            sizePhaseArray[i * 2] = data.sizes[i];
            sizePhaseArray[i * 2 + 1] = data.phases[i];
        }

        // 2. Storage Instanced Buffers
        const positionBuffer = new ThreeWebGPU.StorageInstancedBufferAttribute(positionArray, 3);
        const positionStorage = storage(positionBuffer, 'vec3', count);
        const originalPosStorage = storage(new ThreeWebGPU.StorageInstancedBufferAttribute(positionArray.slice(), 3), 'vec3', count);

        // 3. Compute Logic (Same as before)
        const timeUniform = uniform(0);

        const computeShader = Fn(() => {
            const index = instanceIndex;
            const originalPos = originalPosStorage.element(index);
            const r = length(originalPos.xz);
            const speed = float(100000.0).div(r.add(100.0)).pow(0.5).mul(0.1);
            const angle = speed.mul(timeUniform);
            const sinA = sin(angle);
            const cosA = cos(angle);
            const newX = originalPos.x.mul(cosA).sub(originalPos.z.mul(sinA));
            const newZ = originalPos.x.mul(sinA).add(originalPos.z.mul(cosA));
            positionStorage.element(index).assign(vec3(newX, originalPos.y, newZ));
        });

        const computeNode = computeShader().compute(count);

        // 4. Render Mesh: InstancedMesh
        const geometry = new THREE.PlaneGeometry(1, 1);
        const mesh = new THREE.InstancedMesh(geometry, new ThreeWebGPU.MeshBasicNodeMaterial(), count);
        mesh.frustumCulled = false;

        // Attributes
        geometry.setAttribute('particleColor', new THREE.InstancedBufferAttribute(colorArray, 3));
        geometry.setAttribute('particleSize', new THREE.InstancedBufferAttribute(sizePhaseArray, 2));

        const material = mesh.material;
        material.name = 'Compute_' + name;
        material.transparent = true;
        material.blending = THREE.AdditiveBlending;
        material.depthWrite = false;

        // -- TSL Vertex --
        // Billboarding with Uniforms (Safety Fallback)
        // Since TSL built-in matrices are elusive, we pass them as uniforms.
        const uViewMatrix = uniform(new THREE.Matrix4());
        const uProjectionMatrix = uniform(new THREE.Matrix4());

        const particlePos = positionStorage.element(instanceIndex);
        const size = attribute('particleSize').x;

        // 1. Center in View Space
        const viewCenter = uViewMatrix.mul(vec4(particlePos, 1.0));

        // 2. Corner Offset in View Space (aligned with camera plane)
        const offset = vec4(positionLocal.x.mul(size), positionLocal.y.mul(size), 0.0, 0.0);

        // 3. Final View Position
        const viewPos = viewCenter.add(offset);

        // 4. Output Clip Space Position
        material.vertexNode = uProjectionMatrix.mul(viewPos);

        // -- TSL Fragment --
        // Color
        const vColor = attribute('particleColor');
        let colorNode = vColor;

        if (textureMap) {
            const tex = texture(textureMap);
            colorNode = colorNode.mul(tex);
        }

        colorNode = colorNode.mul(opacityVal);
        material.colorNode = colorNode;
        material.premultipliedAlpha = false;

        this.group.add(mesh);

        // Store uniforms for update loop
        this.systems.push({
            mesh: mesh,
            computeNode: computeNode,
            uniforms: {
                time: timeUniform,
                viewMatrix: uViewMatrix,
                projectionMatrix: uProjectionMatrix
            }
        });
    }
}
