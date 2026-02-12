/**
 * TSL Utility Functions
 * Ported from Singularity project for black hole shader
 */

import {
    float, vec2, vec3, vec4, cos, sin, Fn, normalize, max, min,
    length, smoothstep, Loop, int, mat3, sub, mul, fract, dot, mix,
    floor, pow, saturate, add, clamp, abs, step, mod, mx_rgbtohsv, mx_hsvtorgb,
    If, select, equirectUV
} from 'three/tsl';

/**
 * Rotate axis - creates rotation matrix around arbitrary axis
 */
export const rotateAxis = Fn(([axis_immutable, angle_immutable]) => {
    const angle = float(angle_immutable).toVar();
    const axis = vec3(axis_immutable).toVar();
    const s = float(sin(angle)).toVar();
    const c = float(cos(angle)).toVar();
    const oc = float(sub(1.0, c)).toVar();

    return mat3(
        oc.mul(axis.x).mul(axis.x).add(c),
        oc.mul(axis.x).mul(axis.y).sub(axis.z.mul(s)),
        oc.mul(axis.z).mul(axis.x).add(axis.y.mul(s)),
        oc.mul(axis.x).mul(axis.y).add(axis.z.mul(s)),
        oc.mul(axis.y).mul(axis.y).add(c),
        oc.mul(axis.y).mul(axis.z).sub(axis.x.mul(s)),
        oc.mul(axis.z).mul(axis.x).sub(axis.y.mul(s)),
        oc.mul(axis.y).mul(axis.z).add(axis.x.mul(s)),
        oc.mul(axis.z).mul(axis.z).add(c)
    );
}, { axis: 'vec3', angle: 'float', return: 'mat3' });

/**
 * Convert vector to scalar factor (luminance)
 */
export const vecToFac = Fn(([vector]) => {
    return vector.r.mul(0.2126).add(vector.g.mul(0.7152)).add(vector.b.mul(0.0722)).toVar();
});

/**
 * Length using sqrt (for compatibility)
 */
export const lengthSqrt = Fn(([v]) => {
    return v.x.mul(v.x).add(v.y.mul(v.y)).add(v.z.mul(v.z)).sqrt();
});

/**
 * Smooth range mapping with smoothstep curve
 */
export const smoothRange = Fn(([value, inMin, inMax, outMin, outMax]) => {
    const t = clamp((value.sub(inMin)).div(inMax.sub(inMin)), 0.0, 1.0);
    const smoothT = t.mul(t).mul(float(3.0).sub(t.mul(2.0))); // smoothstep curve
    return mix(outMin, outMax, smoothT);
}, { value: 'float', inMin: 'float', inMax: 'float', outMin: 'float', outMax: 'float', return: 'float' });

/**
 * White noise 2D
 */
export const whiteNoise2D = (coord) => 
    fract(sin(dot(coord, vec2(12.9898, 78.233))).mul(43758.5453));

/**
 * Catmull-Rom interpolation for color ramps
 */
const CatmulRom = Fn(([T, D, C, B, A]) => {
    return mul(0.5, mul(2.0, B).add(A.negate().add(C).mul(T)).add(mul(2.0, A).sub(mul(5.0, B)).add(mul(4.0, C)).sub(D).mul(T).mul(T)).add(A.negate().add(mul(3.0, B)).sub(mul(3.0, C)).add(D).mul(T).mul(T).mul(T)));
}, { T: 'float', D: 'vec3', C: 'vec3', B: 'vec3', A: 'vec3', return: 'vec3' });

/**
 * Color ramp with 3 control points using B-Spline interpolation
 */
export const ColorRamp3_BSpline = Fn(([T, A, B, C]) => {
    const AB = B.w.sub(A.w);
    const BC = C.w.sub(B.w);

    const iAB = T.sub(A.w).div(AB).saturate();
    const iBC = T.sub(B.w).div(BC).saturate();

    const p = vec3(sub(1.0, iAB), iAB.sub(iBC), iBC);

    const cA = CatmulRom(p.x, A.xyz, A.xyz, B.xyz, C.xyz);
    const cB = CatmulRom(p.y, A.xyz, B.xyz, C.xyz, C.xyz);
    const cC = C.xyz;

    If(T.lessThan(B.w), () => {
        return cA.xyz;
    });

    If(T.lessThan(C.w), () => {
        return cB.xyz;
    });

    return cC.xyz;
}, { T: 'float', A: 'vec4', B: 'vec4', C: 'vec4', return: 'vec3' });

/**
 * sRGB to Linear color space conversion
 */
export const srgbToLinear = Fn(([rgb]) => {
    return mix(rgb.div(12.92), pow(add(rgb, 0.055).div(1.055), vec3(2.4)), step(0.04045, rgb));
});

/**
 * Linear to sRGB color space conversion
 */
export const linearToSrgb = Fn(([lin]) => {
    const low = lin.mul(12.92);
    const high = pow(lin, vec3(1.0 / 2.4)).mul(1.055).sub(0.055);
    return mix(low, high, step(0.0031308, lin));
});
