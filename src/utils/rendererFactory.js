import * as THREE from 'three';

/**
 * Renderer Factory
 * 
 * NOTE: WebGPU Support Status
 * ---------------------------
 * Three.js r160 includes WebGPU support, but it requires importing from 'three/webgpu' or
 * 'three/addons/renderers/webgpu/WebGPURenderer.js' rather than the main 'three' export.
 * 
 * The infrastructure for WebGPU is in place (material adapter, TSL shader foundation),
 * but currently using WebGL as the primary renderer for stability.
 * 
 * To enable WebGPU in the future:
 * 1. Import WebGPURenderer from the appropriate module
 * 2. Uncomment the WebGPU initialization code below
 * 3. Test with the TSL black hole shader implementation
 * 
 * Current behavior: Always returns WebGL renderer with isWebGPU: false
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
 * @returns {Promise<{renderer: THREE.WebGLRenderer, isWebGPU: boolean}>}
 */
export async function createRenderer(config) {
    const { width, height, antialias = true, logarithmicDepthBuffer = true } = config;
    
    // Note: WebGPU support in Three.js r160 requires importing from 'three/webgpu' or addons
    // For now, we'll use WebGL as the primary renderer since WebGPU is experimental
    // To enable WebGPU in the future, import WebGPURenderer from the appropriate module
    
    // Check if WebGPU is available (for future use)
    const isWebGPUAvailable = typeof navigator !== 'undefined' && navigator.gpu !== undefined;
    
    if (isWebGPUAvailable) {
        console.log('ℹ WebGPU detected but using WebGL (WebGPU support requires three/webgpu import)');
    }
    
    // WebGL renderer
    console.log('→ Initializing WebGL renderer');
    
    const renderer = new THREE.WebGLRenderer({
        antialias,
        logarithmicDepthBuffer
    });
    
    // Configure WebGL renderer
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    
    console.log('✓ WebGL renderer initialized');
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
