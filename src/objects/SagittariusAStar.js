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

            #define MAX_STEPS 120
            #define BH_RADIUS 1.5
            #define EVENT_HORIZON_FADE 1.55 
            #define DISK_INNER 2.6
            #define DISK_OUTER 16.8
            #define DISK_HEIGHT 0.25
            
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
                return mix(mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
                            mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                        mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                            mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
            }

            float fbm(vec3 p) {
                float v = 0.0;
                float a = 0.5;
                vec3 shift = vec3(100.0);
                for (int i = 0; i < 5; ++i) {
                    v += a * noise(p);
                    p = p * 2.0 + shift;
                    a *= 0.5;
                }
                return v;
            }

            float voronoi(vec3 p) {
                vec3 i = floor(p);
                vec3 f = fract(p);
                float res = 0.0;
                for(int z=-1; z<=1; z++) {
                    for(int y=-1; y<=1; y++) {
                        for(int x=-1; x<=1; x++) {
                            vec3 b = vec3(float(x), float(y), float(z));
                            vec3 r = vec3(b) - f + hash(i + b);
                            float d = dot(r,r);
                            res += exp( -16.0*d );
                        }
                    }
                }
                return res;
            }

            vec3 getDiskColor(float intensity, float temp) {
                vec3 colorLow = vec3(0.8, 0.08, 0.0);
                vec3 colorMid = vec3(1.0, 0.55, 0.08);
                vec3 colorHigh = vec3(1.0, 0.92, 0.85);
                vec3 col = mix(colorLow, colorMid, smoothstep(0.0, 0.35, temp));
                col = mix(col, colorHigh, smoothstep(0.35, 1.0, temp));
                return col * intensity * 18.0;
            }

            void main() {
                // Calculate ray from camera through this fragment
                vec3 ro = cameraPos;
                vec3 rd = normalize(vWorldPosition - ro);
                
                // Transform to black hole local space
                vec3 pos = (ro - bhPos) / 5000.0;
                vec3 dir = rd;
                
                // Dithering
                float dither = hash2(vUv + iTime) * 0.08; 
                pos += dir * dither; 

                vec3 col = vec3(0.0);
                float totalDist = 0.0;
                bool hitBH = false;
                float closestDistToBH = 9999.0;
                float accumulatedAlpha = 0.0;

                // --- Ray Marching ---
                for(int i = 0; i < MAX_STEPS; i++) {
                    float distToCenter = length(pos);
                    closestDistToBH = min(closestDistToBH, distToCenter);
                    
                    // Gravitational Lensing
                    float bendStrength = 0.45; // 3x lensing for stronger pull
                    vec3 toCenter = normalize(-pos);
                    float grav = bendStrength / (distToCenter * distToCenter + 0.01); 
                    dir = normalize(dir + toCenter * grav);
                    
                    float stepSize = max(0.02, distToCenter * 0.03); 
                    if (distToCenter < BH_RADIUS * 2.0) stepSize = 0.05; 
                    if (distToCenter < BH_RADIUS * 1.2) stepSize = 0.02;

                    pos += dir * stepSize;
                    totalDist += stepSize;

                    // --- Volumetric Disk Sampling ---
                    float distToPlane = abs(pos.y);
                    
                    if(distToPlane < DISK_HEIGHT * 4.0 && distToCenter > DISK_INNER && distToCenter < DISK_OUTER) {
                        float radialFade = smoothstep(DISK_INNER, DISK_INNER + 0.5, distToCenter) * (1.0 - smoothstep(DISK_OUTER - 4.0, DISK_OUTER, distToCenter));
                        
                        float angle = atan(pos.z, pos.x);
                        float rotSpeed = 5.0 / (distToCenter + 0.1);
                        float animAngle = angle + iTime * rotSpeed;
                        
                        // Clean smooth disk - no noise, pure radial gradient
                        float dens = radialFade; // Smooth gradient, no noise
                        
                        // Rocks orbit around the black hole - visible rotation
                        float rockOrbitSpeed = 4.0 / (distToCenter + 0.3);
                        float rockAngle = angle + iTime * rockOrbitSpeed * 6.0; // 6x orbital speed
                        vec3 rockPos = vec3(cos(rockAngle)*distToCenter, sin(rockAngle)*distToCenter, pos.y * 2.0);
                        float rocks = voronoi(rockPos * 2.0 + 10.0); // Slightly larger rocks
                        float rockSolid = smoothstep(0.65, 0.85, rocks); // More visible
                        
                        float rockStart = DISK_INNER + 1.5; // Rocks start closer to center
                        float rockFade = smoothstep(rockStart, rockStart + 2.0, distToCenter);
                        rockSolid *= rockFade;

                        float verticalFade = exp(-pow(distToPlane / (DISK_HEIGHT), 2.0));
                        float intensity = dens * verticalFade;
                        
                        if (intensity > 0.001 || rockSolid > 0.1) {
                            vec3 diskVel = normalize(vec3(-pos.z, 0.0, pos.x));
                            float doppler = dot(diskVel, -normalize(pos - (ro - bhPos) / 5000.0));
                            
                            float beam = pow(1.0 + doppler * 0.85, 2.5); 
                            float temperature = intensity + (doppler * 0.4);
                            
                            vec3 particleCol = vec3(0.0);
                            
                            if (rockSolid > 0.1) {
                                particleCol = vec3(0.02, 0.01, 0.0);
                                intensity += rockSolid * 2.0; 
                            } else {
                                particleCol = getDiskColor(intensity, clamp(temperature, 0.0, 1.2));
                            }
                            
                            particleCol *= beam;
                            
                            float absorption = 0.35 * intensity; // Denser disk
                            col += particleCol * absorption * (2.5 - length(col) * 0.3);
                            accumulatedAlpha += absorption;
                        }
                    }

                    // --- Volumetric Event Horizon ---
                    if(distToCenter < EVENT_HORIZON_FADE) {
                        float voidDensity = smoothstep(EVENT_HORIZON_FADE, BH_RADIUS, distToCenter);
                        float voidAbsorption = voidDensity * 10.0 * stepSize;
                        accumulatedAlpha += voidAbsorption;
                    }

                    if(accumulatedAlpha >= 1.0) {
                        hitBH = (distToCenter < BH_RADIUS * 1.2); 
                        break;
                    }
                    
                    if(distToCenter < BH_RADIUS * 0.8) {
                        hitBH = true;
                        break;
                    }

                    if(totalDist > 60.0) break;
                }

                // --- Post-Process ---
                
                // Photon Ring
                float ringWidth = 0.18;
                if (!hitBH && closestDistToBH < BH_RADIUS + ringWidth) {
                    float ringIntensity = 1.0 - smoothstep(BH_RADIUS, BH_RADIUS + ringWidth, closestDistToBH);
                    col += vec3(1.0, 0.95, 0.8) * pow(ringIntensity, 3.0) * 15.0; // Brighter ring
                }

                // Inner edge warm glow
                if (!hitBH && closestDistToBH < BH_RADIUS + 0.5) {
                    float edgeGlow = 1.0 - smoothstep(BH_RADIUS, BH_RADIUS + 0.5, closestDistToBH);
                    col += vec3(1.0, 0.7, 0.3) * edgeGlow * 8.0; // Brighter edge
                }

                // Glow
                vec3 glowColor = vec3(1.0, 0.6, 0.2); 
                float glowStrength = hitBH ? 0.0 : 1.8 / (closestDistToBH - BH_RADIUS + 0.3); // Stronger glow
                col += glowColor * glowStrength * 1.2;

                // Tone Mapping (ACES)
                col *= 4.0; // Higher exposure
                const float a = 2.51;
                const float b = 0.03;
                const float c = 2.43;
                const float d = 0.59;
                const float e = 0.14;
                col = clamp((col * (a * col + b)) / (col * (c * col + d) + e), 0.0, 1.0);
                
                col = pow(col, vec3(1.0 / 2.2));
                
                // Force full opacity inside event horizon
                if (hitBH) {
                    col = vec3(0.0);
                    accumulatedAlpha = 1.0;
                }
                
                gl_FragColor = vec4(col, clamp(accumulatedAlpha + glowStrength * 0.5, 0.0, 1.0));
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
