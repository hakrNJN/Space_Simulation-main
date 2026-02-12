import * as THREE from 'three';
import * as ThreeWebGPU from 'three/webgpu';
import {
    sin, time, vec2, vec3, vec4, uniform, color, texture, If, min,
    step, mix, max, Fn, normalize, positionWorld,
    positionGeometry, sub, dot, Loop, equirectUV, faceDirection,
    cameraPosition, abs, mul, float, remapClamp, length, smoothstep
} from 'three/tsl';

// Import TSL utilities
import { 
    ColorRamp3_BSpline, 
    srgbToLinear, 
    linearToSrgb, 
    whiteNoise2D, 
    lengthSqrt, 
    smoothRange,
    vecToFac,
    rotateAxis
} from '../utils/tslUtils.js';

/**
 * SingularityBlackHole - Volumetric raymarched black hole
 * Direct port from Singularity repository
 */
export class SingularityBlackHole {
    constructor(engine) {
        this.engine = engine;
        this.scene = engine.scene;
        this.camera = engine.camera;
        this.isWebGPU = engine.isWebGPU;
        
        // Container for black hole
        this.container = new THREE.Group();
        this.container.name = 'SingularityBlackHole';
        this.container.position.set(0, 0, 0); // Galactic center
        
        // Position reference for compatibility with other systems
        this.position = this.container.position;
        this.name = 'Sagittarius A*';
        
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
        
        console.log('🌌 Singularity Black Hole initialized at galactic center (0,0,0)');
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
            side: THREE.DoubleSide
        });
        
        // Store texture references for use in shader
        const noiseTexture = this.noiseTexture;
        const starsTexture = this.starsTexture;
        const uniforms = this.uniforms;
        
        // Test basic raymarching without textures first
        material.colorNode = Fn(() => {
            // ==== Geometry- and view-dependent bases ====
            const objCoords = positionGeometry.mul(vec3(1, 1, -1)).xzy;
            
            // Simple distance-based coloring to test raymarching
            const dist = length(objCoords);
            const color = mix(
                vec3(1.0, 0.5, 0.0), // Orange at center
                vec3(0.0, 0.0, 0.0), // Black at edges
                smoothstep(0.0, 1.0, dist)
            );
            
            return color;
        })();
        
        material.emissiveNode = material.colorNode;
        
        console.log('✓ TSL material created (distance test)');
        
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
    update(delta, time, cameraPosition) {
        // Update shader uniforms if using GLSL material
        if (this.material && this.material.uniforms) {
            this.material.uniforms.time.value = time;
            this.material.uniforms.camPos.value.copy(cameraPosition);
        }
    }

    /**
     * Get distance from a position to the black hole
     */
    getDistanceFrom(pos) {
        return this.container.position.distanceTo(pos);
    }

    /**
     * Get all targetable objects
     */
    getTargetables() {
        return [];
    }
}
