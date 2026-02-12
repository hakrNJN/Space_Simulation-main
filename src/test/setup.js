// Test setup file for vitest
// This file runs before all tests

// Mock WebGPU API for testing
global.navigator = global.navigator || {};

// Mock GPU API (can be overridden in individual tests)
global.navigator.gpu = undefined;

// Mock device pixel ratio
Object.defineProperty(window, 'devicePixelRatio', {
    writable: true,
    configurable: true,
    value: 1
});
