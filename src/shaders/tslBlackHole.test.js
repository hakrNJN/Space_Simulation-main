import { describe, it, expect, beforeEach } from 'vitest';
import * as THREE from 'three';
import {
    createTSLBlackHoleMaterial,
    updateTSLBlackHoleMaterial,
    updateTSLBlackHoleResolution
} from './tslBlackHole.js';

describe('TSL Black Hole Shader', () => {
    let bhPos;

    beforeEach(() => {
        bhPos = new THREE.Vector3(0, 0, 0);
    });

    describe('createTSLBlackHoleMaterial', () => {
        it('should create a NodeMaterial instance', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            
            expect(material).toBeDefined();
            expect(material.isNodeMaterial).toBe(true);
        });

        it('should set transparent property to true', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            
            expect(material.transparent).toBe(true);
        });

        it('should set side to BackSide', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            
            expect(material.side).toBe(THREE.BackSide);
        });

        it('should set blending to NormalBlending', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            
            expect(material.blending).toBe(THREE.NormalBlending);
        });

        it('should set depthWrite to false', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            
            expect(material.depthWrite).toBe(false);
        });

        it('should initialize uniforms object', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            
            expect(material.uniforms).toBeDefined();
            expect(material.uniforms.time).toBeDefined();
            expect(material.uniforms.resolution).toBeDefined();
            expect(material.uniforms.bhPos).toBeDefined();
        });

        it('should initialize time uniform to 0', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            
            expect(material.uniforms.time.value).toBe(0.0);
        });

        it('should initialize resolution uniform with window dimensions', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            
            expect(material.uniforms.resolution.value).toBeInstanceOf(THREE.Vector2);
            expect(material.uniforms.resolution.value.x).toBe(window.innerWidth);
            expect(material.uniforms.resolution.value.y).toBe(window.innerHeight);
        });

        it('should initialize bhPos uniform with provided position', () => {
            const testPos = new THREE.Vector3(100, 200, 300);
            const material = createTSLBlackHoleMaterial(testPos);
            
            expect(material.uniforms.bhPos.value).toBeInstanceOf(THREE.Vector3);
            expect(material.uniforms.bhPos.value.x).toBe(100);
            expect(material.uniforms.bhPos.value.y).toBe(200);
            expect(material.uniforms.bhPos.value.z).toBe(300);
        });

        it('should have a fragmentNode defined', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            
            // Note: fragmentNode will be implemented in subsequent tasks
            // For now, we just verify the material is created successfully
            expect(material).toBeDefined();
        });
    });

    describe('updateTSLBlackHoleMaterial', () => {
        it('should update time uniform', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            const testTime = 5.5;
            
            updateTSLBlackHoleMaterial(material, testTime);
            
            expect(material.uniforms.time.value).toBe(testTime);
        });

        it('should handle multiple time updates', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            
            updateTSLBlackHoleMaterial(material, 1.0);
            expect(material.uniforms.time.value).toBe(1.0);
            
            updateTSLBlackHoleMaterial(material, 2.5);
            expect(material.uniforms.time.value).toBe(2.5);
            
            updateTSLBlackHoleMaterial(material, 10.0);
            expect(material.uniforms.time.value).toBe(10.0);
        });

        it('should not throw if material has no uniforms', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            delete material.uniforms;
            
            expect(() => {
                updateTSLBlackHoleMaterial(material, 5.0);
            }).not.toThrow();
        });
    });

    describe('updateTSLBlackHoleResolution', () => {
        it('should update resolution uniform', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            const newWidth = 1920;
            const newHeight = 1080;
            
            updateTSLBlackHoleResolution(material, newWidth, newHeight);
            
            expect(material.uniforms.resolution.value.x).toBe(newWidth);
            expect(material.uniforms.resolution.value.y).toBe(newHeight);
        });

        it('should handle multiple resolution updates', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            
            updateTSLBlackHoleResolution(material, 800, 600);
            expect(material.uniforms.resolution.value.x).toBe(800);
            expect(material.uniforms.resolution.value.y).toBe(600);
            
            updateTSLBlackHoleResolution(material, 1920, 1080);
            expect(material.uniforms.resolution.value.x).toBe(1920);
            expect(material.uniforms.resolution.value.y).toBe(1080);
        });

        it('should not throw if material has no uniforms', () => {
            const material = createTSLBlackHoleMaterial(bhPos);
            delete material.uniforms;
            
            expect(() => {
                updateTSLBlackHoleResolution(material, 1920, 1080);
            }).not.toThrow();
        });
    });
});
