import * as THREE from 'three';
import { NodeMaterial } from 'three/nodes';

/**
 * TSL Black Hole Shader
 * 
 * Creates a NodeMaterial for rendering a raymarched black hole with:
 * - Gravitational lensing
 * - Volumetric accretion disk
 * - Doppler beaming
 * - Photon ring
 * - ACES tone mapping
 * 
 * This is the WebGPU/TSL version of the GLSL shader in SagittariusAStar.js
 */

/**
 * Create TSL black hole material
 * @param {THREE.Vector3} bhPos - Black hole position in world space
 * @returns {NodeMaterial} Configured NodeMaterial for black hole rendering
 */
export function createTSLBlackHoleMaterial(bhPos) {
    // Create the material
    const material = new NodeMaterial();
    
    // Store uniforms for external updates
    // Note: The actual TSL node graph will be implemented in subsequent tasks
    // For now, we're just setting up the basic structure
    material.uniforms = {
        time: { value: 0.0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        bhPos: { value: bhPos.clone() }
    };
    
    // Configure material properties to match GLSL version
    material.transparent = true;
    material.side = THREE.BackSide;
    material.blending = THREE.NormalBlending;
    material.depthWrite = false;
    
    // Note: fragmentNode will be set up in subsequent tasks with full raymarching logic
    // For now, the material is configured but will render as default
    
    return material;
}

/**
 * Update black hole material uniforms
 * @param {NodeMaterial} material - The TSL black hole material
 * @param {number} time - Current animation time
 * @param {THREE.Vector3} cameraPos - Camera position (handled automatically by TSL)
 */
export function updateTSLBlackHoleMaterial(material, time) {
    if (material.uniforms) {
        material.uniforms.time.value = time;
    }
}

/**
 * Update resolution uniform on window resize
 * @param {NodeMaterial} material - The TSL black hole material
 * @param {number} width - New window width
 * @param {number} height - New window height
 */
export function updateTSLBlackHoleResolution(material, width, height) {
    if (material.uniforms) {
        material.uniforms.resolution.value.set(width, height);
    }
}
