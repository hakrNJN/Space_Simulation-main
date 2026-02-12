import * as THREE from 'three';
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js';
import * as ThreeWebGPU from 'three/webgpu';

/**
 * Renderer Factory
 * 
 * WebGPU Support Status
 * ---------------------
 * Three.js v0.180.0 includes full WebGPU support via 'three/webgpu' module.
 * This factory will attempt to use WebGPU if available, falling back to WebGL.
 * 
 * WebGPU is required for:
 * - TSL (Three.js Shading Language) shaders
 * - Singularity black hole volumetric raymarching
 * - Advanced node-based materials
 */

/**
 * Creates a renderer with WebGPU support if available, falling back to WebGL
 * 
 * @param {Object} config - Renderer configuration
 * @param {HTMLElement} config.container - Container element for the renderer
 * @param {number} config.width - Renderer width
 * @param {number} config.height - Renderer height
 * @param {boolean} config.antialias - Enable antialiasing
 * @param {boolean} config.logarithmicDepthBuffer - Enable logarithmic depth buffer (WebGL only)
 * @returns {Promise<{renderer: THREE.WebGLRenderer|ThreeWebGPU.WebGPURenderer, isWebGPU: boolean}>}
 */
export async function createRenderer(config) {
    const { width, height, antialias = true, logarithmicDepthBuffer = true } = config;
    
    // TEMPORARY: Disable WebGPU until blending issues are resolved
    // TODO: Fix additive blending for PointsNodeMaterial in WebGPU
    const ENABLE_WEBGPU = false;
    
    // Check if WebGPU is available
    const isWebGPUAvailable = ENABLE_WEBGPU && WebGPU.isAvailable();
    
    if (isWebGPUAvailable) {
        try {
            console.log('→ Initializing WebGPU renderer');
            
            const renderer = new ThreeWebGPU.WebGPURenderer({
                antialias,
                forceWebGL: false
            });
            
            // Initialize WebGPU (async operation)
            await renderer.init();
            
            // Configure WebGPU renderer
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.2;
            
            console.log('✓ WebGPU renderer initialized successfully');
            return { renderer, isWebGPU: true };
        } catch (error) {
            console.warn('⚠ WebGPU initialization failed, falling back to WebGL:', error.message);
        }
    } else {
        console.log('ℹ WebGPU not available, using WebGL');
    }
    
    // WebGL fallback
    console.log('→ Initializing WebGL renderer (fallback mode)');
    
    const renderer = new THREE.WebGLRenderer({
        antialias,
        logarithmicDepthBuffer
    });
    
    // Configure WebGL renderer
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    
    console.log('✓ WebGL renderer initialized (compatibility mode)');
    return { renderer, isWebGPU: false };
}

/**
 * Synchronous version for environments where async is not possible
 * Note: This will always return WebGL renderer as WebGPU requires async init
 * 
 * @param {Object} config - Renderer configuration
 * @returns {{renderer: THREE.WebGLRenderer, isWebGPU: boolean}}
 */
export function createRendererSync(config) {
    const { width, height, antialias = true, logarithmicDepthBuffer = true } = config;
    
    console.warn('⚠ Using synchronous renderer creation - WebGPU not available (requires async)');
    
    const renderer = new THREE.WebGLRenderer({
        antialias,
        logarithmicDepthBuffer
    });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    
    console.log('✓ WebGL renderer initialized (sync mode)');
    return { renderer, isWebGPU: false };
}
