import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import * as fc from 'fast-check';
import { createRenderer, createRendererSync } from './rendererFactory.js';
import * as THREE from 'three';

// Mock THREE.js renderers
vi.mock('three', async () => {
    const actual = await vi.importActual('three');
    
    class MockWebGLRenderer {
        constructor(options) {
            this.options = options;
            this.toneMapping = null;
            this.toneMappingExposure = 1.0;
            this.domElement = { style: {} };
        }
        setSize() {}
        setPixelRatio(ratio) {
            this.pixelRatio = ratio;
        }
        render() {}
        dispose() {}
    }
    
    class MockWebGPURenderer {
        constructor(options) {
            this.options = options;
            this.toneMapping = null;
            this.toneMappingExposure = 1.0;
            this.domElement = { style: {} };
            this.isWebGPURenderer = true;
        }
        async init() {
            // Can be overridden in tests to throw
        }
        setSize() {}
        setPixelRatio(ratio) {
            this.pixelRatio = ratio;
        }
        render() {}
        dispose() {}
    }
    
    return {
        ...actual,
        WebGLRenderer: MockWebGLRenderer,
        WebGPURenderer: MockWebGPURenderer
    };
});

describe('Renderer Factory', () => {
    let originalGpu;
    
    beforeEach(() => {
        // Save original GPU state
        originalGpu = global.navigator.gpu;
        // Reset mocks before each test
        vi.clearAllMocks();
    });
    
    afterEach(() => {
        // Restore original GPU state
        global.navigator.gpu = originalGpu;
    });

    describe('Property 3: WebGPU Detection Consistency', () => {
        /**
         * **Validates: Requirements 2.1**
         * 
         * Property: For any browser environment, the WebGPU detection logic should 
         * return true if and only if `navigator.gpu` is defined and functional.
         */
        it('should detect WebGPU availability consistently', async () => {
            await fc.assert(
                fc.asyncProperty(
                    fc.boolean(), // Whether navigator.gpu is defined
                    fc.boolean(), // Whether WebGPU init succeeds
                    async (hasGpu, initSucceeds) => {
                        // Setup: Mock navigator.gpu based on test case
                        if (hasGpu) {
                            global.navigator.gpu = {
                                requestAdapter: vi.fn().mockResolvedValue({
                                    requestDevice: vi.fn().mockResolvedValue({})
                                })
                            };
                            
                            // Mock WebGPURenderer init to succeed or fail
                            if (!initSucceeds) {
                                THREE.WebGPURenderer.prototype.init = vi.fn().mockRejectedValue(
                                    new Error('WebGPU init failed')
                                );
                            } else {
                                THREE.WebGPURenderer.prototype.init = vi.fn().mockResolvedValue(undefined);
                            }
                        } else {
                            global.navigator.gpu = undefined;
                        }
                        
                        // Execute: Create renderer
                        const config = {
                            width: 800,
                            height: 600,
                            antialias: true,
                            logarithmicDepthBuffer: true
                        };
                        
                        const result = await createRenderer(config);
                        
                        // Verify: WebGPU should be used if and only if it's available AND init succeeds
                        const expectedWebGPU = hasGpu && initSucceeds;
                        expect(result.isWebGPU).toBe(expectedWebGPU);
                        
                        // Verify: Renderer should always be created (fallback to WebGL if needed)
                        expect(result.renderer).toBeDefined();
                        
                        // Verify: Correct renderer type is used
                        if (expectedWebGPU) {
                            expect(result.renderer.isWebGPURenderer).toBe(true);
                        } else {
                            expect(result.renderer.isWebGPURenderer).toBeUndefined();
                        }
                    }
                ),
                { numRuns: 100 } // Run 100 iterations with different combinations
            );
        });
    });

    describe('Property 1: Renderer Pixel Ratio Clamping', () => {
        /**
         * **Validates: Requirements 1.4**
         * 
         * Property: For any device pixel ratio value, when creating a renderer, 
         * the pixel ratio should be set to the minimum of the device pixel ratio and 2.
         */
        it('should clamp pixel ratio to maximum of 2', async () => {
            await fc.assert(
                fc.asyncProperty(
                    fc.double({ min: 0.5, max: 10, noNaN: true }), // Device pixel ratio
                    async (devicePixelRatio) => {
                        // Setup: Mock device pixel ratio
                        const originalPixelRatio = window.devicePixelRatio;
                        Object.defineProperty(window, 'devicePixelRatio', {
                            writable: true,
                            configurable: true,
                            value: devicePixelRatio
                        });
                        
                        // Mock navigator.gpu as undefined to force WebGL (simpler to test)
                        global.navigator.gpu = undefined;
                        
                        // Execute: Create renderer
                        const config = {
                            width: 800,
                            height: 600,
                            antialias: true,
                            logarithmicDepthBuffer: true
                        };
                        
                        const result = await createRenderer(config);
                        
                        // Verify: Pixel ratio should be clamped to min(devicePixelRatio, 2)
                        const expectedPixelRatio = Math.min(devicePixelRatio, 2);
                        
                        // Check that the renderer received the clamped value
                        expect(result.renderer.pixelRatio).toBe(expectedPixelRatio);
                        expect(result.renderer.pixelRatio).toBeLessThanOrEqual(2);
                        
                        // Cleanup
                        Object.defineProperty(window, 'devicePixelRatio', {
                            writable: true,
                            configurable: true,
                            value: originalPixelRatio
                        });
                    }
                ),
                { numRuns: 100 } // Run 100 iterations with different pixel ratios
            );
        });
    });

    describe('Unit Tests - Renderer Configuration', () => {
        it('should create WebGL renderer when WebGPU is not available', async () => {
            // Setup: Ensure WebGPU is not available
            global.navigator.gpu = undefined;
            
            const config = {
                width: 1920,
                height: 1080,
                antialias: true,
                logarithmicDepthBuffer: true
            };
            
            const result = await createRenderer(config);
            
            expect(result.isWebGPU).toBe(false);
            expect(result.renderer).toBeDefined();
            expect(result.renderer.toneMapping).toBe(THREE.ACESFilmicToneMapping);
            expect(result.renderer.toneMappingExposure).toBe(1.2);
        });

        it('should apply correct tone mapping settings', async () => {
            const config = {
                width: 800,
                height: 600,
                antialias: true,
                logarithmicDepthBuffer: true
            };
            
            const result = await createRenderer(config);
            
            expect(result.renderer.toneMapping).toBe(THREE.ACESFilmicToneMapping);
            expect(result.renderer.toneMappingExposure).toBe(1.2);
        });

        it('should handle synchronous renderer creation', () => {
            const config = {
                width: 800,
                height: 600,
                antialias: true,
                logarithmicDepthBuffer: true
            };
            
            const result = createRendererSync(config);
            
            expect(result.isWebGPU).toBe(false);
            expect(result.renderer).toBeDefined();
        });
    });
});
