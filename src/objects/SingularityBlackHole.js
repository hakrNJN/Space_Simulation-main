import * as THREE from 'three';
import * as ThreeWebGPU from 'three/webgpu';
import {
    sin, positionLocal, time, vec2, vec3, vec4, uv, uniform, color, fog, rangeFogFactor, texture, If, min,
    range, instanceIndex, step, mix, max, uint, varying, Fn, struct, output, emissive, diffuseColor, PI, PI2, oneMinus, cos, atan, float,
    pass, mrt, viewportDepthTexture, screenUV, linearDepth, depth, viewportLinearDepth, mod, floor, fract, smoothstep, clamp, abs, blendOverlay,
    normalView, reflect, normalize, positionViewDirection, asin, positionView, mx_rgbtohsv, mx_hsvtorgb, positionWorld,
    positionGeometry, modelWorldMatrix, objectPosition, userData, rotate, mat3, mul, mx_fractal_noise_vec3, faceDirection,
    inverse, modelViewMatrix, transformDirection, modelViewPosition, modelWorldMatrixInverse, cameraWorldMatrix,
    cameraPosition, positionWorldDirection, sub, dot, Loop, length, remap, remapClamp, lengthSq, equirectUV, Break
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

        // Textures
        this.noiseTexture = null;
        this.starsTexture = null;

        // Mesh
        this.mesh = null;
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
     * Create temporary starfield texture
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

        // Initialize TSL Uniforms here, once textures are ready (or even before)
        // But we need them before build() calls createTSLMaterial
        this.uniforms = {
            stepSize: uniform(0.0071),
            noiseFactor: uniform(2.0), // Noise amp
            power: uniform(0.3),
            originRadius: uniform(0.13),
            width: uniform(0.03),
            iterations: uniform(64), // int

            // Color Ramp
            rampCol1: uniform(color(0.95, 0.71, 0.44)),
            rampPos1: uniform(0.050),
            rampCol2: uniform(color(0.14, 0.05, 0.03)),
            rampPos2: uniform(0.425),
            rampCol3: uniform(color(0.0, 0.0, 0.0)),
            rampPos3: uniform(1.0),

            rampEmission: uniform(2.0),
            emissionColor: uniform(color(0.14, 0.129, 0.09)),
            backgroundIntensity: uniform(1.0)
        };

        return texture;
    }

    /**
     * Build the black hole mesh and material
     */
    async build() {
        await this.loadTextures();

        // Create LARGE sphere geometry - 50K radius so it's visible from far away
        const geometry = new THREE.SphereGeometry(50000, 64, 64);

        // Create material based on renderer type
        let material;

        if (this.isWebGPU) {
            material = this.createTSLMaterial();
        } else {
            material = this.createGLSLMaterial();
        }

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.name = 'BlackHoleMesh';
        this.mesh.frustumCulled = false; // Always render, don't cull
        this.mesh.renderOrder = 999; // Render on top
        this.container.add(this.mesh);
        this.scene.add(this.container);

        console.log('✓ Black hole mesh created');
        console.log(`  - Renderer: ${this.isWebGPU ? 'WebGPU (TSL)' : 'WebGL (GLSL)'}`);
        console.log(`  - Position: (${this.container.position.x}, ${this.container.position.y}, ${this.container.position.z})`);
        console.log(`  - Radius: 50,000 units`);
        console.log(`  - Mesh in scene:`, this.scene.getObjectByName('BlackHoleMesh') !== undefined);
        console.log(`  - Material type:`, material.type);
    }

    /**
     * Create TSL-based material for WebGPU - Direct port from Singularity
     */
    createTSLMaterial() {
        const material = new ThreeWebGPU.MeshStandardNodeMaterial({
            side: THREE.BackSide, // Render on inside of sphere for raymarching
            transparent: true,
            blending: THREE.NormalBlending
        });

        // Store texture references for use in shader
        const noiseTexture = this.noiseTexture;
        const starsTexture = this.starsTexture;
        // Use local reference to uniforms for cleaner code in Fn
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
            // Object Space Coords: Normalized to Unit Sphere range [-1, 1]
            // We must divide by the mesh radius (50000.0) to get into unit space for the raymarcher
            const meshRadius = float(50000.0);

            // Normalize geometry position
            const normalizedPos = positionGeometry.div(meshRadius);
            const objCoords = normalizedPos.mul(vec3(1, 1, -1)).xzy; // flip Z then swizzle
            const isBackface = step(0.0, faceDirection.negate());        // 1 backface, 0 front

            // Camera as point in object space (also normalized)
            // Assuming object is at 0,0,0 and no rotation, world-local is identity-ish
            // But to be safe, we transform camera to local space
            // Since we are using TSL, 'cameraPosition' is world space. 
            // 'objectPosition' is world space center.
            const camLocal = cameraPosition.sub(objectPosition).div(meshRadius);

            // Map to TSL shader space
            const camPointObj = camLocal.mul(vec3(1, 1, -1)).xzy;

            // Pick coords from camera for backfaces, from geometry for frontfaces
            const startCoords = mix(objCoords, camPointObj.xyz, isBackface);

            // Incoming view direction in world
            // Direction is scale-invariant, so we can use standard world positions
            const viewDir = normalize(sub(positionWorld, cameraPosition));

            // Transform to our swizzled object space
            const rayDir = viewDir.mul(vec3(1, 1, -1)).xzy;

            // White noise to jitter start to reduce banding
            const noiseWhite = whiteNoise2D(objCoords.xy).mul(noiseAmp);
            const jitter = rayDir.mul(noiseWhite);

            // Ray initial position
            const rayPos = startCoords.sub(jitter);

            // Accumulators
            const colorAcc = vec3(0);
            const alphaAcc = float(0.0);

            // ==== Main loop ====
            // Use explicit Loop syntax to avoid ambiguity or unrolled Fn issues
            // We use a constant 64 for now to ensure stability, as dynamic loops on uniforms can be tricky in TSL
            Loop({ start: 0, end: 64, type: 'int' }, ({ i }) => {
                // Steering term toward center (gravity lensing simulation)
                const rNorm = normalize(rayPos);
                const rLen = lengthSqrt(rayPos);
                const steerMag = _step.mul(power).div(rLen.mul(rLen));       // step*power / r^2
                const range = remapClamp(rLen, 1.0, 0.5, 0.0, 1.0);         // fade steering effect
                const steer = rNorm.mul(steerMag.mul(range));
                const steeredDir = rayDir.sub(steer).normalize();

                // Advance ray
                const advance = rayDir.mul(_step);
                rayPos.addAssign(advance);

                // Local measures in XY plane and rotating UVs (accretion disk)
                const xyLen = lengthSqrt(rayPos.mul(vec3(1, 1, 0)));
                const rotPhase = xyLen.mul(4.270).sub(time.mul(0.1));
                const uvAxis = vec3(0, 0, 1);
                const uvRot = rayPos.mul(rotateAxis(uvAxis, rotPhase));
                const uv = uvRot.mul(2);

                // Deep noise sample
                const noiseDeep = texture(noiseTexture, uv.xy);

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
                const noiseNormal = texture(noiseTexture, uvForNormal.xy)
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
            // Lensing effect on background stars
            const dirForEnv = rayDir.mul(vec3(1, -1, 1)).xzy;

            // Note: We use linearToSrgb because texture read might be linear in NodeMaterial
            const env = linearToSrgb(
                texture(starsTexture, equirectUV(dirForEnv)).mul(uniforms.backgroundIntensity)
            );

            const trans = float(1.0).sub(alphaAcc);
            const finalRGB = mix(colorAcc, env, trans.mul(1.0));

            return srgbToLinear(finalRGB);
        })();

        material.emissiveNode = material.colorNode;

        console.log('✓ TSL black hole material created (Full Shader)');

        return material;
    }

    /**
     * Create GLSL fallback material for WebGL
     */
    createGLSLMaterial() {
        // Create a proper volumetric black hole shader for WebGL
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                noiseTexture: { value: this.noiseTexture },
                starsTexture: { value: this.starsTexture },
                camPos: { value: new THREE.Vector3() },

                // Black hole parameters
                iterations: { value: 64 },
                stepSize: { value: 0.0071 },
                power: { value: 0.3 },
                originRadius: { value: 0.13 },
                width: { value: 0.03 },

                // Color ramp
                rampCol1: { value: new THREE.Color(0.95, 0.71, 0.44) },
                rampPos1: { value: 0.050 },
                rampCol2: { value: new THREE.Color(0.14, 0.05, 0.03) },
                rampPos2: { value: 0.425 },
                rampCol3: { value: new THREE.Color(0, 0, 0) },
                rampPos3: { value: 1.0 },

                rampEmission: { value: 2.0 },
                emissionColor: { value: new THREE.Color(0.14, 0.129, 0.09) },
                backgroundIntensity: { value: 1.0 }
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
                    // Normalize position
                    vec3 dir = normalize(vPosition);
                    
                    // Distance from center in XY plane
                    float diskRadius = length(dir.xy);
                    
                    // Z height - THIS IS KEY for making it a disk, not a sphere
                    float height = abs(dir.z);
                    
                    // DISK ONLY - visible only when Z is small (flat disk)
                    float diskThickness = smoothstep(0.15, 0.0, height);
                    
                    // Disk ring - hollow center for black hole
                    float diskInner = smoothstep(0.25, 0.35, diskRadius);
                    float diskOuter = smoothstep(0.95, 0.85, diskRadius);
                    float diskMask = diskInner * diskOuter * diskThickness;
                    
                    // Color gradient
                    vec3 innerColor = vec3(1.5, 1.0, 0.3);  // Bright yellow
                    vec3 outerColor = vec3(1.0, 0.3, 0.1);  // Orange-red
                    vec3 diskColor = mix(innerColor, outerColor, diskRadius);
                    
                    // Spiral animation
                    float angle = atan(dir.y, dir.x);
                    float spiral = sin(angle * 8.0 + time * 0.4 - diskRadius * 12.0) * 0.3 + 0.7;
                    diskColor *= spiral;
                    
                    // Brightness
                    diskColor *= 4.0;
                    
                    // Apply disk mask - if not in disk, make it BLACK
                    vec3 finalColor = diskColor * diskMask;
                    
                    // Event horizon - completely black center
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
     */
    /**
     * Update black hole (called every frame)
     */
    update(delta, time, camera) {
        // TSL Uniforms update (WebGPU)
        if (this.isWebGPU) {
            // TSL utilizes global 'time' node usually, but if we used uniforms:
            // this.uniforms.time does not exist because we used 'time' node from three/tsl
            // However, we might want to update other uniforms if they change

            // Example: Pulsing effect or similar could go here if we had a specific uniform for it
            // For now, TSL 'time' node handles animation automatically.
        }

        // GLSL Uniforms update (WebGL Fallback)
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

    // getTargetables moved to init/class structure above
}
