import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { SYSTEM_POSITIONS } from './SystemPositions.js';

/**
 * Sagittarius A* — Supermassive Black Hole at the Milky Way's center
 * Features volumetric raymarched accretion disk with:
 * - Gravitational lensing
 * - Volumetric gas and space rocks
 * - Doppler beaming
 * - Photon ring
 * - Cinematic tone mapping
 */
export class SagittariusAStar extends BaseSystem {
    constructor() {
        super('SAGITTARIUS A*', SYSTEM_POSITIONS.SGR_A_STAR);

        // Align to Milky Way Plane (Pitch: 18 deg, Roll: ~12 deg)
        // Align to Milky Way Plane (Flat)
        this.group.rotation.x = 0;
        this.group.rotation.z = 0;
    }

    build(textures) {
        // Vertex Shader
        const vertexShader = `
            varying vec3 vWorldPosition;
            varying vec2 vUv;
            void main() {
                vUv = uv;
                vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                vWorldPosition = worldPosition.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPosition;
            }
        `;

        // Fragment Shader - Full raymarched black hole
        const fragmentShader = `
            uniform float iTime;
            uniform vec2 iResolution;
            uniform vec3 cameraPos;
            uniform vec3 bhPos;
            
            varying vec3 vWorldPosition;
            varying vec2 vUv;

            #define MAX_STEPS 250 
            #define BH_RADIUS 0.8
            #define EVENT_HORIZON_FADE 0.85 
            #define DISK_INNER 1.5
            #define DISK_OUTER 35.0
            #define DISK_HEIGHT 0.08 
            
            // --- Noise Functions ---
            float hash(vec3 p) {
                p = fract(p * 0.3183099 + .1);
                p *= 17.0;
                return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
            }
            
            float hash2(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }

            float noise(in vec3 x) {
                vec3 i = floor(x);
                vec3 f = fract(x);
                f = f * f * (3.0 - 2.0 * f);
                vec3 u = f * f * (3.0 - 2.0 * f);
                return mix(mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
                            mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                        mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                            mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
            }

            // FBM with more octaves for detail
            float fbm(vec3 p) {
                float v = 0.0;
                float a = 0.5;
                vec3 shift = vec3(100.0);
                mat3 rot = mat3(cos(0.5), sin(0.5), 0.0, -sin(0.5), cos(0.5), 0.0, 0.0, 0.0, 1.0);
                for (int i = 0; i < 5; ++i) { 
                    v += a * noise(p);
                    p = rot * p * 2.0 + shift;
                    a *= 0.5;
                }
                return v;
            }

            // --- DOMAIN WARPING (Fluid Smoke Trails) ---
            float warp(vec3 p) {
                vec3 q = vec3(
                    fbm(p + vec3(0.0)),
                    fbm(p + vec3(5.2, 1.3, 2.8)),
                    fbm(p + vec3(3.2, 9.2, 0.3))
                );
                
                return fbm(p + 4.0 * q);
            }

            // --- CINEMA GRADIENT (Interstellar Exact) ---
            vec3 getDiskGradient(float temp) {
                // Glassy Ramps
                
                vec3 cBlack  = vec3(0.0, 0.0, 0.0);         
                vec3 cRed    = vec3(0.4, 0.02, 0.005);      // Deep Blood Red
                vec3 cOrange = vec3(0.9, 0.3, 0.02);        // Magma Orange
                vec3 cGold   = vec3(1.0, 0.8, 0.4);         // Wheat Gold
                vec3 cWhite  = vec3(1.0, 1.0, 1.0);         // Blinding
                
                // Widened transitions
                vec3 col = mix(cBlack, cRed, smoothstep(0.0, 0.3, temp));
                col = mix(col, cOrange, smoothstep(0.3, 0.55, temp));
                col = mix(col, cGold, smoothstep(0.55, 0.85, temp));
                col = mix(col, cWhite, smoothstep(0.85, 1.15, temp));
                
                return col;
            }

            void main() {
                vec3 ro = cameraPos;
                vec3 rd = normalize(vWorldPosition - ro);
                vec3 pos = (ro - bhPos) / 5000.0;
                vec3 dir = rd;
                
                // Calculate Camera Distance for Exposure Control
                float camDistLocal = length((ro - bhPos) / 5000.0);
                float exposure = mix(4.0, 8.0, 1.0 - smoothstep(10.0, 60.0, camDistLocal));

                // Dither
                pos += dir * hash2(vUv + iTime * 0.1) * 0.02; 

                vec3 col = vec3(0.0);
                float totalDist = 0.0;
                bool hitBH = false;
                float closestDistToBH = 9999.0;
                float accumulatedAlpha = 0.0;

                // --- Ray Marching ---
                for(int i = 0; i < MAX_STEPS; i++) {
                    float distToCenter = length(pos);
                    closestDistToBH = min(closestDistToBH, distToCenter);
                    
                    // AGGRESSIVE GRAVITY for Einstein Ring from distance
                    float bendStrength = 2.5; 
                    vec3 toCenter = normalize(-pos);
                    float grav = bendStrength / (distToCenter * distToCenter + 0.001); 
                    dir = normalize(dir + toCenter * grav);
                    
                    // High precision steps near the hole for the sharp turn
                    float stepSize = max(0.01, distToCenter * 0.015); 
                    if (distToCenter < BH_RADIUS * 4.0) stepSize = 0.015; // Ensure we capture the arc
                    
                    pos += dir * stepSize;
                    totalDist += stepSize;

                    // --- Volumetric Disk Sampling ---
                    float distToPlane = abs(pos.y);
                    
                    // Thicken inner disk for visible arc
                    float localHeight = DISK_HEIGHT;
                    if (distToCenter < 4.0) localHeight *= 2.5;

                    if(distToPlane < localHeight * 6.0 && distToCenter > DISK_INNER && distToCenter < DISK_OUTER) {
                        
                        // 1. Radial Fade (Sharp inner, soft outer smoke)
                        float radialFade = smoothstep(DISK_INNER, DISK_INNER + 0.5, distToCenter);
                        // Outer Gas Density Fade (Translucency)
                        radialFade *= (1.0 - smoothstep(15.0, DISK_OUTER, distToCenter)) * 0.8 + 0.2; 
                        
                        // 2. Domain Warped Noise coordinates
                        float angle = atan(pos.z, pos.x);
                        
                        // RADIAL STRETCHING (Waterfall Effect)
                        float twist = angle + distToCenter * 0.3; 
                        vec3 noisePos = vec3(twist * 10.0, distToCenter * 20.0, pos.y * 10.0 - iTime * 0.5);
                        
                        // 3. The Detail Texture (Silk)
                        float gas = warp(noisePos);
                        
                        // 4. Soft Contrast (No Grain)
                        float fluidVariant = smoothstep(0.15, 0.85, gas); 
                        
                        // 5. Vertical Fade (RAZOR THIN base)
                        float verticalFade = exp(-pow(distToPlane / (localHeight * (0.8 + distToCenter*0.02)), 4.0));
                        
                        float intensityLimit = radialFade * verticalFade * fluidVariant;
                        
                        // ACCUMULATE
                        if (intensityLimit > 0.001) {
                            // Relativistic Doppler Calculation
                            vec3 diskVel = normalize(vec3(-pos.z, 0.0, pos.x));
                            float viewDot = dot(diskVel, -dir);
                            float doppler = viewDot * (12.0 / (distToCenter + 5.0)); 
                            
                            // EXTREME BEAMING (Asymmetry)
                            // Left side (approaching) gets huge boost, Right side gets dim
                            float beam = pow(1.0 + doppler * 0.8, 4.0); 
                            
                            // Temp Shift: Approaching is hotter/bluer
                            float tempBase = intensityLimit + (1.0 - (distToCenter/DISK_OUTER)*1.5); 
                            float effTemp = tempBase * 0.7 + (doppler * 0.3);
                            
                            // Look up color
                            vec3 gasCol = getDiskGradient(clamp(effTemp, 0.0, 1.2));
                            
                            // Translucency at edges
                            if (distToCenter > 15.0) {
                                intensityLimit *= 0.5; // Ghostly outer ring
                            }

                            float absorption = 0.5 * intensityLimit; 
                            col += gasCol * beam * exposure * absorption * (1.0 - accumulatedAlpha);
                            accumulatedAlpha += absorption;
                        }
                    }

                    // Event Horizon Void
                    if(distToCenter < EVENT_HORIZON_FADE) {
                        float voidDensity = smoothstep(EVENT_HORIZON_FADE, BH_RADIUS * 0.9, distToCenter);
                        accumulatedAlpha += voidDensity * stepSize * 20.0;
                    }

                    // RELAXED HORIZON KILL (Allows deep wrapping)
                    if(accumulatedAlpha >= 0.99) {
                        hitBH = (distToCenter < BH_RADIUS * 0.6); 
                        break;
                    }
                    
                    if(distToCenter < BH_RADIUS * 0.5) {
                        hitBH = true;
                        break;
                    }

                    if(totalDist > 100.0) break;
                }

                // --- Cine-Post ---
                
                // Photon Ring (Razor Sharp)
                float ringWidth = 0.04; 
                if (!hitBH && closestDistToBH < BH_RADIUS + ringWidth) {
                    float ringIntensity = smoothstep(BH_RADIUS + ringWidth, BH_RADIUS, closestDistToBH);
                    col += vec3(1.0, 0.9, 0.7) * pow(ringIntensity, 12.0) * 40.0; // Thinner & Brighter
                }

                // Bloom/Glow (Soft Dreamy)
                if (!hitBH) {
                     float glow = 1.0 / (closestDistToBH - BH_RADIUS + 0.1);
                     col += vec3(1.0, 0.5, 0.2) * glow * 0.03; 
                }

                // ACES Tone Mapping (Approximation) needed for high dynamic range
                col *= 1.2;
                vec3 x = max(vec3(0.0), col - 0.004);
                vec3 retCol = (x * (6.2 * x + 0.5)) / (x * (6.2 * x + 1.7) + 0.06);
                
                // Black Hole Silhouette
                if (hitBH) {
                    retCol = vec3(0.0);
                    accumulatedAlpha = 1.0;
                }
                
                gl_FragColor = vec4(retCol, clamp(accumulatedAlpha, 0.0, 1.0));
            }
        `;

        // Create shader material
        this.bhMaterial = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                cameraPos: { value: new THREE.Vector3() },
                bhPos: { value: this.position.clone() }
            },
            transparent: true,
            side: THREE.BackSide,
            blending: THREE.NormalBlending,
            depthWrite: false
        });

        // Large box to render the black hole effect
        const bhMesh = new THREE.Mesh(
            new THREE.BoxGeometry(150000, 150000, 150000),
            this.bhMaterial
        );
        bhMesh.position.copy(this.position);
        bhMesh.userData = { name: 'SAGITTARIUS A*', isSystem: true, baseScale: 5000 };
        bhMesh.renderOrder = 999; // Render AFTER all stars so alpha=1 properly occludes them
        this.group.add(bhMesh);
        this.targetables.push(bhMesh);

        // Handle resize
        window.addEventListener('resize', () => {
            if (this.bhMaterial) {
                this.bhMaterial.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
            }
        });
    }

    update(delta, time, cameraPos) {
        if (this.bhMaterial) {
            this.bhMaterial.uniforms.iTime.value = time * 0.3;
            if (cameraPos) {
                this.bhMaterial.uniforms.cameraPos.value.copy(cameraPos);
            }
        }
    }
}
