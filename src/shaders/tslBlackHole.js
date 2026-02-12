/**
 * TSL Black Hole Shader - Singularity Port
 * 
 * Creates a NodeMaterial for rendering a volumetric raymarched black hole with:
 * - Gravitational lensing
 * - Volumetric accretion disk
 * - Environment reflection
 * - Color ramp with B-Spline interpolation
 * 
 * This is the WebGPU/TSL version ported from the Singularity project.
 * Requires WebGPU renderer and TSL support.
 */

import * as THREE from 'three';
import * as ThreeWebGPU from 'three/webgpu';
import {
    sin, positionLocal, time, vec2, vec3, vec4, uniform, color, texture, If, min,
    step, mix, max, varying, Fn, normalize, positionWorld,
    positionGeometry, sub, dot, Loop, length, equirectUV, faceDirection,
    cameraPosition, abs, mul, float
} from 'three/tsl';

import {
    rotateAxis, vecToFac, lengthSqrt, smoothRange, ColorRamp3_BSpline,
    srgbToLinear, linearToSrgb, whiteNoise2D
} from '../utils/tslUtils.js';

/**
 * Create TSL black hole material with Singularity shader
 * @param {THREE.Vector3} bhPos - Black hole position in world space
 * @param {THREE.Texture} noiseTexture - Deep noise texture for accretion disk
 * @param {THREE.Texture} starsTexture - Environment/stars texture for reflections
 * @returns {ThreeWebGPU.MeshStandardNodeMaterial} Configured material for black hole rendering
 */
export function createTSLBlackHoleMaterial(bhPos, noiseTexture, starsTexture) {
    console.log('Creating TSL black hole material');
    
    // Create uniforms for the shader
    const uniforms = {
        iterations: uniform(float(128)),
        stepSize: uniform(float(0.0071)),
        noiseFactor: uniform(float(0.01)),
        power: uniform(float(0.3)),
        originRadius: uniform(float(0.13)),
        width: uniform(float(0.03)),
        
        // Color ramp for accretion disk
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
    
    // Create the material
    const material = new ThreeWebGPU.MeshStandardNodeMaterial({
        side: THREE.DoubleSide
    });
    
    // Set up textures
    if (noiseTexture) {
        noiseTexture.wrapS = THREE.RepeatWrapping;
        noiseTexture.wrapT = THREE.RepeatWrapping;
        noiseTexture.needsUpdate = true;
    }
    
    // Create the shader using TSL
    material.colorNode = Fn(() => {
        // ==== Uniforms and constants ====
        const _step = uniforms.stepSize;
        const noiseAmp = uniforms.noiseFactor;
        const power = uniforms.power;
        const originRadius = uniforms.originRadius;
        const bandWidth = uniforms.width;
        const iterCount = uniforms.iterations;

        // ==== Geometry- and view-dependent bases ====
        const objCoords = positionGeometry.mul(vec3(1, 1, -1)).xzy; // flip Z then swizzle
        const isBackface = step(0.0, faceDirection.negate());        // 1 backface, 0 front

        // Camera as point in object space
        const camPointObj = cameraPosition.mul(vec3(1, 1, -1)).xzy;

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

        // ==== Main raymarching loop ====
        Loop(iterCount, ({ i }) => {
            // Steering term toward center (gravitational lensing)
            const rNorm = normalize(rayPos);
            const rLen = lengthSqrt(rayPos);
            const steerMag = _step.mul(power).div(rLen.mul(rLen));       // step*power / r^2
            const range = smoothRange(rLen, 1.0, 0.5, 0.0, 1.0);         // fade steering
            const steer = rNorm.mul(steerMag.mul(range));
            const steeredDir = rayDir.sub(steer).normalize();

            // Advance once
            const advance = rayDir.mul(_step);
            rayPos.addAssign(advance);

            // Local measures in XY plane and rotating UVs
            const xyLen = lengthSqrt(rayPos.mul(vec3(1, 1, 0)));
            const rotPhase = xyLen.mul(4.270).sub(time.mul(0.1));
            const uvAxis = vec3(0, 0, 1);
            const uvRot = rayPos.mul(rotateAxis(uvAxis, rotPhase));
            const uv = uvRot.mul(2);

            // Deep noise sample (if texture available)
            let noiseDeep = vec3(0.5);
            if (noiseTexture) {
                noiseDeep = texture(noiseTexture, uv);
            }

            // Z band shaping (accretion disk)
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
            let noiseNormal = vec3(0.5);
            if (noiseTexture) {
                noiseNormal = texture(noiseTexture, uvForNormal).mul(zBand);
            }
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

            // Core suppression near origin (event horizon)
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
        let env = vec3(0);
        if (starsTexture) {
            env = linearToSrgb(
                texture(starsTexture, equirectUV(dirForEnv)).mul(uniforms.backgroundIntensity)
            );
        }

        const trans = float(1.0).sub(alphaAcc);
        const finalRGB = mix(colorAcc, env, trans.mul(1.0));

        return srgbToLinear(finalRGB);
    })();
    
    material.emissiveNode = material.colorNode;
    
    // Store uniforms for external access
    material.userData.uniforms = uniforms;
    
    return material;
}

/**
 * Update black hole material uniforms
 * @param {ThreeWebGPU.MeshStandardNodeMaterial} material - The TSL black hole material
 * @param {number} time - Current animation time (not used, time is automatic in TSL)
 */
export function updateTSLBlackHoleMaterial(material, time) {
    // Time is handled automatically by TSL's time node
    // No manual updates needed
}

/**
 * Update resolution uniform on window resize
 * @param {ThreeWebGPU.MeshStandardNodeMaterial} material - The TSL black hole material
 * @param {number} width - New window width
 * @param {number} height - New window height
 */
export function updateTSLBlackHoleResolution(material, width, height) {
    // Resolution is handled automatically by TSL
    // No manual updates needed
}
