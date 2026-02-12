import * as THREE from 'three';
import * as ThreeWebGPU from 'three/webgpu';

/**
 * Adapts Three.js materials for WebGPU compatibility
 * 
 * Converts standard materials to their NodeMaterial equivalents when using WebGPU,
 * while preserving all material properties. Returns original materials for WebGL.
 * 
 * @param {THREE.Material} material - The material to adapt
 * @param {boolean} isWebGPU - Whether WebGPU renderer is being used
 * @returns {THREE.Material} - Adapted material (NodeMaterial for WebGPU, original for WebGL)
 */
export function adaptMaterial(material, isWebGPU) {
    // If using WebGL, return original material unchanged
    if (!isWebGPU) {
        return material;
    }
    
    // Convert to WebGPU-compatible NodeMaterial based on type
    try {
        if (material.isMeshStandardMaterial) {
            return convertMeshStandardMaterial(material);
        }
        
        if (material.isMeshBasicMaterial) {
            return convertMeshBasicMaterial(material);
        }
        
        if (material.isPointsMaterial) {
            return convertPointsMaterial(material);
        }
        
        if (material.isSpriteMaterial) {
            return convertSpriteMaterial(material);
        }
        
        // Unknown material type - log warning and return original
        console.warn(`Unknown material type: ${material.type}, using original material`);
        return material;
        
    } catch (error) {
        console.error(`Material adaptation failed for ${material.type}:`, error);
        return material; // Return original as fallback
    }
}

/**
 * Converts MeshStandardMaterial to MeshStandardNodeMaterial
 * Preserves all standard material properties including textures, colors, and PBR parameters
 */
function convertMeshStandardMaterial(material) {
    const nodeMaterial = new ThreeWebGPU.MeshStandardNodeMaterial();
    
    // Copy basic properties
    nodeMaterial.name = material.name;
    nodeMaterial.color.copy(material.color);
    nodeMaterial.roughness = material.roughness;
    nodeMaterial.metalness = material.metalness;
    nodeMaterial.emissive.copy(material.emissive);
    nodeMaterial.emissiveIntensity = material.emissiveIntensity;
    
    // Copy textures
    if (material.map) nodeMaterial.map = material.map;
    if (material.normalMap) {
        nodeMaterial.normalMap = material.normalMap;
        nodeMaterial.normalScale.copy(material.normalScale);
    }
    if (material.roughnessMap) nodeMaterial.roughnessMap = material.roughnessMap;
    if (material.metalnessMap) nodeMaterial.metalnessMap = material.metalnessMap;
    if (material.emissiveMap) nodeMaterial.emissiveMap = material.emissiveMap;
    if (material.aoMap) {
        nodeMaterial.aoMap = material.aoMap;
        nodeMaterial.aoMapIntensity = material.aoMapIntensity;
    }
    if (material.envMap) nodeMaterial.envMap = material.envMap;
    
    // Copy transparency and blending
    nodeMaterial.transparent = material.transparent;
    nodeMaterial.opacity = material.opacity;
    nodeMaterial.blending = material.blending;
    nodeMaterial.side = material.side;
    nodeMaterial.depthWrite = material.depthWrite;
    nodeMaterial.depthTest = material.depthTest;
    
    // WebGPU requires premultiplied alpha for proper blending
    // Enable for transparent or blended materials
    if (material.transparent || material.blending !== THREE.NormalBlending) {
        nodeMaterial.premultipliedAlpha = true;
    }
    
    // Copy vertex colors
    nodeMaterial.vertexColors = material.vertexColors;
    
    // Copy other properties
    nodeMaterial.flatShading = material.flatShading;
    nodeMaterial.wireframe = material.wireframe;
    nodeMaterial.fog = material.fog;
    
    return nodeMaterial;
}

/**
 * Converts MeshBasicMaterial to MeshBasicNodeMaterial
 * Preserves color, textures, and rendering properties
 */
function convertMeshBasicMaterial(material) {
    const nodeMaterial = new ThreeWebGPU.MeshBasicNodeMaterial();
    
    // Copy basic properties
    nodeMaterial.name = material.name;
    nodeMaterial.color.copy(material.color);
    
    // Copy texture
    if (material.map) nodeMaterial.map = material.map;
    
    // Copy transparency and blending
    nodeMaterial.transparent = material.transparent;
    nodeMaterial.opacity = material.opacity;
    nodeMaterial.blending = material.blending;
    nodeMaterial.side = material.side;
    nodeMaterial.depthWrite = material.depthWrite;
    nodeMaterial.depthTest = material.depthTest;
    
    // WebGPU requires premultiplied alpha for proper blending
    // Enable for transparent or blended materials
    if (material.transparent || material.blending !== THREE.NormalBlending) {
        nodeMaterial.premultipliedAlpha = true;
    }
    
    // Copy vertex colors
    nodeMaterial.vertexColors = material.vertexColors;
    
    // Copy other properties
    nodeMaterial.wireframe = material.wireframe;
    nodeMaterial.fog = material.fog;
    
    return nodeMaterial;
}

/**
 * Converts PointsMaterial to PointsNodeMaterial
 * Preserves particle size, textures, colors, and blending modes
 */
function convertPointsMaterial(material) {
    const nodeMaterial = new ThreeWebGPU.PointsNodeMaterial();
    
    // Copy basic properties
    nodeMaterial.name = material.name;
    nodeMaterial.color.copy(material.color);
    nodeMaterial.size = material.size;
    nodeMaterial.sizeAttenuation = material.sizeAttenuation;
    
    // Copy texture
    if (material.map) nodeMaterial.map = material.map;
    
    // Copy transparency and blending
    nodeMaterial.transparent = material.transparent;
    nodeMaterial.opacity = material.opacity;
    nodeMaterial.blending = material.blending;
    nodeMaterial.depthWrite = material.depthWrite;
    nodeMaterial.depthTest = material.depthTest;
    
    // WebGPU requires premultiplied alpha for proper blending
    // This is especially critical for additive blending
    nodeMaterial.premultipliedAlpha = true;
    
    // Copy vertex colors
    nodeMaterial.vertexColors = material.vertexColors;
    
    // Copy fog
    nodeMaterial.fog = material.fog;
    
    return nodeMaterial;
}

/**
 * Converts SpriteMaterial to SpriteNodeMaterial
 * Preserves sprite textures, colors, and blending modes
 */
function convertSpriteMaterial(material) {
    const nodeMaterial = new ThreeWebGPU.SpriteNodeMaterial();
    
    // Copy basic properties
    nodeMaterial.name = material.name;
    nodeMaterial.color.copy(material.color);
    nodeMaterial.rotation = material.rotation;
    
    // Copy texture
    if (material.map) nodeMaterial.map = material.map;
    
    // Copy transparency and blending
    nodeMaterial.transparent = material.transparent;
    nodeMaterial.opacity = material.opacity;
    nodeMaterial.blending = material.blending;
    nodeMaterial.depthWrite = material.depthWrite;
    nodeMaterial.depthTest = material.depthTest;
    
    // WebGPU requires premultiplied alpha for proper blending
    // This is especially critical for additive blending
    nodeMaterial.premultipliedAlpha = true;
    
    // Copy fog
    nodeMaterial.fog = material.fog;
    
    return nodeMaterial;
}
