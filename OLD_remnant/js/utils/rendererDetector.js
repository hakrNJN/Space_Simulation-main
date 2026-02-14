/**
 * RendererDetector - Utility class to detect and report renderer type (WebGPU vs WebGL)
 */
export class RendererDetector {
    constructor(renderer) {
        if (!renderer) {
            throw new Error('RendererDetector: renderer parameter is required');
        }
        
        this.renderer = renderer;
        this.rendererType = null;
        this.detectionError = null;
        
        // Perform detection on initialization
        try {
            this.detectRenderer();
        } catch (error) {
            this.detectionError = error;
            console.error('RendererDetector: Failed to detect renderer type', error);
        }
    }
    
    /**
     * Detects the renderer type (WebGPU or WebGL)
     * @returns {string} 'WebGPU' or 'WebGL'
     */
    detectRenderer() {
        try {
            // Check for WebGPU renderer
            if (this.renderer.isWebGPURenderer === true) {
                this.rendererType = 'WebGPU';
                return 'WebGPU';
            }
            
            // Check constructor name as fallback
            const constructorName = this.renderer.constructor.name;
            if (constructorName === 'WebGPURenderer') {
                this.rendererType = 'WebGPU';
                return 'WebGPU';
            }
            
            // Check for WebGL renderer
            if (this.renderer.isWebGLRenderer === true || 
                constructorName === 'WebGLRenderer') {
                this.rendererType = 'WebGL';
                return 'WebGL';
            }
            
            // Default to WebGL if uncertain
            console.warn('RendererDetector: Could not definitively detect renderer type, defaulting to WebGL');
            this.rendererType = 'WebGL';
            return 'WebGL';
            
        } catch (error) {
            this.detectionError = error;
            console.error('RendererDetector: Error during detection', error);
            throw new Error(`Failed to detect renderer type: ${error.message}`);
        }
    }
    
    /**
     * Check if the renderer is WebGPU
     * @returns {boolean}
     */
    isWebGPU() {
        return this.rendererType === 'WebGPU';
    }
    
    /**
     * Check if the renderer is WebGL
     * @returns {boolean}
     */
    isWebGL() {
        return this.rendererType === 'WebGL';
    }
    
    /**
     * Logs renderer information to console with emoji indicator
     */
    logRendererInfo() {
        try {
            const emoji = this.isWebGPU() ? '🎮' : '🖥️';
            const message = `${emoji} Renderer Type: ${this.rendererType}`;
            
            console.log('%c' + message, 'font-size: 14px; font-weight: bold; color: #00ff00;');
            
            // Log additional renderer info if available
            if (this.renderer.capabilities) {
                console.log('Renderer Capabilities:', {
                    maxTextures: this.renderer.capabilities.maxTextures,
                    maxVertexTextures: this.renderer.capabilities.maxVertexTextures,
                    maxTextureSize: this.renderer.capabilities.maxTextureSize,
                    precision: this.renderer.capabilities.precision
                });
            }
            
            if (this.detectionError) {
                console.warn('Detection completed with warnings:', this.detectionError);
            }
            
        } catch (error) {
            console.error('RendererDetector: Failed to log renderer info', error);
        }
    }
    
    /**
     * Displays renderer type in UI/HUD element
     * @param {HTMLElement} hudElement - The HUD element to display renderer info in
     */
    displayRendererInUI(hudElement) {
        try {
            if (!hudElement) {
                console.warn('RendererDetector: No HUD element provided for UI display');
                return;
            }
            
            if (!(hudElement instanceof HTMLElement)) {
                throw new Error('RendererDetector: hudElement must be an HTMLElement');
            }
            
            const emoji = this.isWebGPU() ? '🎮' : '🖥️';
            const rendererText = `${emoji} ${this.rendererType}`;
            
            // Create or update renderer info element
            let rendererInfoElement = hudElement.querySelector('.renderer-info');
            
            if (!rendererInfoElement) {
                rendererInfoElement = document.createElement('div');
                rendererInfoElement.className = 'renderer-info';
                rendererInfoElement.style.cssText = `
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    padding: 8px 12px;
                    background: rgba(0, 0, 0, 0.7);
                    color: #00ff00;
                    font-family: monospace;
                    font-size: 12px;
                    border-radius: 4px;
                    border: 1px solid #00ff00;
                    z-index: 1000;
                `;
                hudElement.appendChild(rendererInfoElement);
            }
            
            rendererInfoElement.textContent = rendererText;
            
        } catch (error) {
            console.error('RendererDetector: Failed to display renderer in UI', error);
        }
    }
    
    /**
     * Get the detected renderer type
     * @returns {string|null}
     */
    getRendererType() {
        return this.rendererType;
    }
    
    /**
     * Check if detection was successful
     * @returns {boolean}
     */
    isDetectionSuccessful() {
        return this.rendererType !== null && this.detectionError === null;
    }
}
