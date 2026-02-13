import * as THREE from 'three';
import * as ThreeWebGPU from 'three/webgpu';
import {
    sin, positionLocal, time, vec2, vec3, vec4, uv, uniform, color, fog, rangeFogFactor, texture, If, min,
    range, instanceIndex, step, mix, max, uint, varying, Fn, struct, output, emissive, diffuseColor, PI, PI2, oneMinus, cos, atan, float,
    pass, mrt, viewportDepthTexture, screenUV, linearDepth, depth, viewportLinearDepth, mod, floor, fract, smoothstep, clamp, abs, blendOverlay,
    normalView, reflect, normalize, positionViewDirection, asin, positionView, mx_rgbtohsv, mx_hsvtorgb, positionWorld,
    positionGeometry, modelWorldMatrix, objectPosition, userData, rotate, mat3, mul, mx_fractal_noise_vec3, faceDirection,
    inverse, modelViewMatrix, transformDirection, modelViewPosition, modelWorldMatrixInverse, cameraWorldMatrix,
    cameraPosition, positionWorldDirection, sub, dot, Loop, length, remap, remapClamp, lengthSq, equirectUV
} from 'three/tsl';

// Import TSL utilities
import {
    ColorRamp2_Linear, ColorRamp3_Linear, srgbToLinear, linearToSrgb, noise21, Rot, adjustTemperature, adjustHue,
    adjustSaturation, adjustLevels, fbm, hash12, brickTexture, vecToFac, mixColorHSV, emission, ColorRamp2_Constant,
    rotateZ, rotateAxis, ColorRamp3_BSpline, ColorRamp4_BSpline, whiteNoise2D, lengthSqrt, smoothRange
} from '../utils/tslUtils.js';

/**
 * SingularityBlackHole - Volumetric raymarched black hole
 * Direct port from Singularity repository
 * 
 * CRITICAL: This black hole uses a UNIT SPHERE (radius 1.0) for raymarching
 * The shader works in normalized space [-1, 1]
 * Scale is controlled by the mesh scale, NOT the geometry radius
 */
export class SingularityBlackHole {
    constructor() {
        // Container for black hole
        this.container = new THREE.Group();
        this.container.name = 'SingularityBlackHole';
        this.container.position.set(0, 0, 0); // Galactic center

        // Position reference for compatibility with other systems
        this.position = this.container.position;
        this.name = 'Sagittarius A*';

        // Alias for BaseSystem compatibility
        this.group = this.container;

        // Textures
        this.noiseTexture = null;
        this.starsTexture = null;

        // Meshes - only black hole (no glow)
        this.blackHoleMesh = null; // Actual black hole (800K → 0)
        this.mesh = null;          // Legacy reference (points to blackHoleMesh)
        
        // Uniforms for black hole shader
        this.uniforms = {
            iterations: uniform(float(128)),
            stepSize: uniform(float(0.0071)),
            noiseFactor: uniform(float(0.01)),
            power: uniform(float(0.3)),

            originRadius: uniform(float(0.13)),
            width: uniform(float(0.03)),

            rampCol1: uniform(color(0.95, 0.71, 0.44)),
            rampPos1: uniform(float(0.050)),
            rampCol2: uniform(color(0.14, 0.05, 0.03)),
            rampPos2: uniform(float(0.425)),
            rampCol3: uniform(color(0, 0, 0)),
            rampPos3: uniform(float(1.0)),

            rampEmission: uniform(float(2.0)),
            emissionColor: uniform(color(0.14, 0.129, 0.09)),

            backgroundIntensity: uniform(float(1.0))
        };
    }

    /**
     * Initialize system (called by SpaceEngine)
     */
    init(scene, textures, engine) {
        this.scene = scene;
        this.engine = engine;
        this.isWebGPU = engine.isWebGPU;

        console.log('🌌 Singularity Black Hole initializing...');
        this.build();
    }

    /**
     * Get targetable objects (Radar compatibility)
     */
    getTargetables() {
        return [{
            name: this.name,
            position: this.position,
            type: 'Black Hole',
            distance: 0 // Will be calculated by Radar
        }];
    }

    /**
     * Load required textures
     */
    async loadTextures() {
        const loader = new THREE.TextureLoader();

        // Load noise texture
        this.noiseTexture = await loader.loadAsync('/textures/noise_deep.png');
        this.noiseTexture.wrapS = THREE.RepeatWrapping;
        this.noiseTexture.wrapT = THREE.RepeatWrapping;
        this.noiseTexture.needsUpdate = true;

        // Create starfield texture
        this.starsTexture = this.createStarfieldTexture();

        console.log('✓ Black hole textures loaded');
    }

    /**
     * Create starfield texture for background
     */
    createStarfieldTexture() {
        const size = 1024;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // Black background
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, size, size);

        // Generate stars
        const starCount = 8000;
        for (let i = 0; i < starCount; i++) {
            const x = Math.random() * size;
            const y = Math.random() * size;
            const brightness = Math.random();
            const starSize = brightness > 0.95 ? 2 : 1;

            ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
            ctx.fillRect(x, y, starSize, starSize);
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.mapping = THREE.EquirectangularReflectionMapping;
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.needsUpdate = true;

        return texture;
    }

    /**
     * Build the black hole mesh and material
     * 
     * CRITICAL: Creates ONLY the black hole mesh (no glow)
     */
    async build() {
        await this.loadTextures();

        // UNIT SPHERE - radius 1.0 (Singularity uses this)
        const geometry = new THREE.SphereGeometry(1, 64, 64);

        // Create BLACK HOLE material (complex raymarched shader)
        let blackHoleMaterial;
        if (this.isWebGPU) {
            blackHoleMaterial = this.createTSLMaterial();
        } else {
            blackHoleMaterial = this.createGLSLMaterial();
        }

        // Create BLACK HOLE mesh
        this.blackHoleMesh = new THREE.Mesh(geometry, blackHoleMaterial);
        this.blackHoleMesh.name = 'BlackHoleMesh';
        this.blackHoleMesh.scale.setScalar(15000); // Start at minimum
        this.blackHoleMesh.frustumCulled = false;
        this.blackHoleMesh.renderOrder = 999;
        this.blackHoleMesh.visible = false; // Start invisible
        if (blackHoleMaterial.opacity !== undefined) {
            blackHoleMaterial.opacity = 0;
        }

        // Add to container
        this.container.add(this.blackHoleMesh);
        this.scene.add(this.container);

        // Legacy reference
        this.mesh = this.blackHoleMesh;

        console.log('✓ Black hole mesh created (no glow)');
        console.log(`  - Renderer: ${this.isWebGPU ? 'WebGPU (TSL)' : 'WebGL (GLSL)'}`);
        console.log(`  - Position: (${this.container.position.x}, ${this.container.position.y}, ${this.container.position.z})`);
        console.log(`  - Rule: >800K = invisible, <800K = visible`);
    }

    /**
     * Create TSL-based material for WebGPU - Direct port from Singularity
     */
    createTSLMaterial() {
        const material = new ThreeWebGPU.MeshStandardNodeMaterial({
            side: THREE.DoubleSide,
            transparent: true,  // Enable transparency for glow fade
            depthWrite: false,  // Disable depth write to prevent flickering
            depthTest: true
        });

        // Store texture references for use in shader
        const noiseTexture = this.noiseTexture;
        const starsTexture = this.starsTexture;
        const uniforms = this.uniforms;

        material.colorNode = Fn(() => {
            // ==== Uniforms and constants ====
            const _step = uniforms.stepSize;
            const noiseAmp = uniforms.noiseFactor;
            const power = uniforms.power;
            const originRadius = uniforms.originRadius;
            const bandWidth = uniforms.width;
            const iterCount = uniforms.iterations;

            // ==== Geometry- and view-dependent bases ====
            // CRITICAL: Singularity uses UNIT SPHERE coordinates [-1, 1]
            const objCoords = positionGeometry.mul(vec3(1, 1, -1)).xzy; // flip Z then swizzle
            const isBackface = step(0.0, faceDirection.negate());        // 1 backface, 0 front

            // Camera as point in object space
            const camPointObj = cameraPosition.mul(modelWorldMatrix).mul(vec3(1, 1, -1)).xzy;

            // Pick coords from camera for backfaces, from geometry for frontfaces
            const startCoords = mix(objCoords, camPointObj.xyz, isBackface);

            // Incoming view direction in world, then to object-like swizzle
            const viewInWorld = normalize(sub(cameraPosition, positionWorld))
                .mul(vec3(1, 1, -1)).xzy;
            const rayDir = viewInWorld.negate(); // initial march direction

            // White noise to jitter start
            const noiseWhite = whiteNoise2D(objCoords.xy).mul(noiseAmp);
            const jitter = rayDir.mul(noiseWhite);

            // Ray initial position
            const rayPos = startCoords.sub(jitter);

            // Accumulators
            const colorAcc = vec3(0);
            const alphaAcc = float(0.0);

            // ==== Main loop ====
            Loop(iterCount, ({ i }) => {
                // Steering term toward center (gravity lensing)
                const rNorm = normalize(rayPos);
                const rLen = lengthSqrt(rayPos);
                const steerMag = _step.mul(power).div(rLen.mul(rLen));       // step*power / r^2
                const range = remapClamp(rLen, 1.0, 0.5, 0.0, 1.0);         // fade steering
                const steer = rNorm.mul(steerMag.mul(range));
                const steeredDir = rayDir.sub(steer).normalize();

                // Advance once
                const advance = rayDir.mul(_step);
                rayPos.addAssign(advance);

                // Local measures in XY plane and rotating UVs (accretion disk)
                const xyLen = lengthSqrt(rayPos.mul(vec3(1, 1, 0)));
                const rotPhase = xyLen.mul(4.270).sub(time.mul(0.1));
                const uvAxis = vec3(0, 0, 1);
                const uvRot = rayPos.mul(rotateAxis(uvAxis, rotPhase));
                const uv = uvRot.mul(2);

                // Deep noise sample
                const noiseDeep = texture(noiseTexture, uv);

                // Z band shaping (disk thickness)
                const bandMin = bandWidth.negate();
                const bandEnds = vec3(bandMin, 0.0, bandWidth);             // [-w, 0, w]
                const dz = sub(bandEnds, vec3(rayPos.z));
                const zQuad = dz.mul(dz).div(bandWidth);
                const zBand = max(bandWidth.sub(zQuad).div(bandWidth), 0.0);

                // Modulated noise amplitude
                const noiseAmp3 = noiseDeep.mul(zBand);
                const noiseAmpLen = lengthSqrt(noiseAmp3);

                // Pseudo normal via offset noise
                const uvForNormal = uv.mul(1.002);
                const noiseNormal = texture(noiseTexture, uvForNormal)
                    .mul(zBand);
                const noiseNormalLen = lengthSqrt(noiseNormal);

                // Color ramp evaluation
                const rampInput =
                    xyLen
                        .add(noiseAmpLen.sub(0.780).mul(1.5))
                        .add(noiseAmpLen.sub(noiseNormalLen).mul(19.750));

                const rampA = vec4(uniforms.rampCol1, uniforms.rampPos1);
                const rampB = vec4(uniforms.rampCol2, uniforms.rampPos2);
                const rampC = vec4(uniforms.rampCol3, uniforms.rampPos3);

                const baseCol = ColorRamp3_BSpline(rampInput.x, rampA, rampB, rampC);
                const emissiveCol = baseCol.mul(uniforms.rampEmission)
                    .add(uniforms.emissionColor);

                // Core suppression near origin (Event Horizon)
                const rLenNow = lengthSqrt(rayPos);
                const insideCore = rLenNow.lessThan(originRadius);
                const shadedCol = mix(emissiveCol, vec3(0), insideCore);

                // Alpha shaping
                const zAbs = abs(rayPos.z);
                const aNoise = noiseAmpLen.sub(0.750).mul(-0.60);
                const aPre = zAbs.add(aNoise);
                const aRadial = smoothRange(xyLen, 1.0, 0.0, 0.0, 1.0);
                const aBand = smoothRange(aPre, bandWidth, 0, 0, aRadial);
                const alphaLocal = mix(aBand, 1.0, insideCore);

                // Front-to-back compositing
                const oneMinusA = alphaAcc.oneMinus();
                const weight = oneMinusA.mul(vecToFac(alphaLocal));
                const newColor = mix(colorAcc, shadedCol, weight);
                const newAlpha = mix(alphaAcc, 1.0, vecToFac(alphaLocal));

                // Second advance and steering update
                rayPos.addAssign(advance);
                rayDir.assign(steeredDir);
                colorAcc.assign(newColor);
                alphaAcc.assign(newAlpha);
            });

            // ==== Environment blend on remaining transparency ====
            const dirForEnv = rayDir.mul(vec3(1, -1, 1)).xzy;
            const env = linearToSrgb(
                texture(starsTexture, equirectUV(dirForEnv)).mul(uniforms.backgroundIntensity)
            );

            const trans = float(1.0).sub(alphaAcc);
            const finalRGB = mix(colorAcc, env, trans.mul(1.0));

            return srgbToLinear(finalRGB);
        })();

        material.emissiveNode = material.colorNode;

        console.log('✓ TSL black hole material created');

        return material;
    }

    /**
     * Create GLSL fallback material for WebGL
     */
    createGLSLMaterial() {
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                noiseTexture: { value: this.noiseTexture },
                starsTexture: { value: this.starsTexture },
                camPos: { value: new THREE.Vector3() }
            },
            vertexShader: `
                varying vec3 vPosition;
                varying vec3 vWorldPosition;
                
                void main() {
                    vPosition = position;
                    vec4 worldPos = modelMatrix * vec4(position, 1.0);
                    vWorldPosition = worldPos.xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                varying vec3 vPosition;
                varying vec3 vWorldPosition;
                
                void main() {
                    // Simple accretion disk visualization for WebGL fallback
                    vec3 dir = normalize(vPosition);
                    float diskRadius = length(dir.xy);
                    float height = abs(dir.z);
                    
                    // Disk shape
                    float diskThickness = smoothstep(0.15, 0.0, height);
                    float diskInner = smoothstep(0.25, 0.35, diskRadius);
                    float diskOuter = smoothstep(0.95, 0.85, diskRadius);
                    float diskMask = diskInner * diskOuter * diskThickness;
                    
                    // Color gradient
                    vec3 innerColor = vec3(1.5, 1.0, 0.3);
                    vec3 outerColor = vec3(1.0, 0.3, 0.1);
                    vec3 diskColor = mix(innerColor, outerColor, diskRadius);
                    
                    // Spiral animation
                    float angle = atan(dir.y, dir.x);
                    float spiral = sin(angle * 8.0 + time * 0.4 - diskRadius * 12.0) * 0.3 + 0.7;
                    diskColor *= spiral * 4.0;
                    
                    // Apply disk mask
                    vec3 finalColor = diskColor * diskMask;
                    
                    // Event horizon
                    float horizonMask = step(diskRadius, 0.3);
                    finalColor = mix(finalColor, vec3(0.0), horizonMask);
                    
                    gl_FragColor = vec4(finalColor, 1.0);
                }
            `,
            side: THREE.DoubleSide,
            transparent: false
        });

        // Store material for updates
        this.material = material;

        console.log('✓ GLSL black hole material created');

        return material;
    }

    /**
     * Update black hole (called every frame)
     * 
     * SIMPLE RULE:
     * - >800K: INVISIBLE (no black hole)
     * - 800K → 600K: Fades IN (accretion disk appears)
     * - 600K → 400K: Black sphere fades IN
     * - <400K: Fully visible
     */
    update(delta, time, camera) {
        if (!this.blackHoleMesh) return;

        // Calculate distance from camera to black hole
        const distance = camera.position.length(); // Distance from galactic center

        let bhScale, bhOpacity;
        
        if (distance > 800000) {
            // Far (>800K) - NO BLACK HOLE
            bhScale = 15000;
            bhOpacity = 0.0;
        } else if (distance > 600000) {
            // Approaching (800K → 600K) - BH fades IN
            const t = (800000 - distance) / (800000 - 600000); // 0 at 800K → 1 at 600K
            bhScale = 15000 + t * 25000; // 15K → 40K
            bhOpacity = t * 0.5; // 0.0 → 0.5 (accretion disk)
        } else if (distance > 400000) {
            // Close (600K → 400K) - Black sphere fades IN
            const t = (600000 - distance) / (600000 - 400000); // 0 at 600K → 1 at 400K
            bhScale = 40000 + t * 20000; // 40K → 60K
            bhOpacity = 0.5 + t * 0.5; // 0.5 → 1.0 (black sphere appears)
        } else {
            // Very close (<400K) - Fully visible, growing
            const t = Math.min(1.0, (400000 - distance) / 300000);
            bhScale = 60000 + t * 20000; // 60K → 80K
            bhOpacity = 1.0;
        }

        // Update black hole mesh with FAST smoothing
        const currentBHScale = this.blackHoleMesh.scale.x;
        const newBHScale = currentBHScale + (bhScale - currentBHScale) * 0.1;
        this.blackHoleMesh.scale.setScalar(newBHScale);
        
        if (this.blackHoleMesh.material.opacity !== undefined) {
            const currentBHOpacity = this.blackHoleMesh.material.opacity;
            const newBHOpacity = currentBHOpacity + (bhOpacity - currentBHOpacity) * 0.5;
            this.blackHoleMesh.material.opacity = newBHOpacity;
            
            // FORCE invisible when >800K
            if (distance > 800000) {
                this.blackHoleMesh.visible = false;
            } else {
                this.blackHoleMesh.visible = newBHOpacity > 0.01;
            }
        } else {
            this.blackHoleMesh.visible = distance <= 800000 && bhOpacity > 0.01;
        }

        // Update GLSL uniforms (WebGL fallback)
        if (this.material && this.material.uniforms) {
            this.material.uniforms.time.value = time;
            if (camera) this.material.uniforms.camPos.value.copy(camera.position);
        }
    }

    /**
     * Get distance from a position to the black hole
     */
    getDistanceFrom(pos) {
        return this.container.position.distanceTo(pos);
    }
}
