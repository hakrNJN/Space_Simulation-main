/**
 * GalaxyLODSystem - Manages distance-based Level of Detail transitions for galaxy rendering
 * 
 * This system provides smooth visual transitions between three representations:
 * - Inner View (< 75k): Individual star particles only
 * - Mid-Outer View (75k - 550k): Blended particles and volumetric clouds
 * - Outer View (> 550k): Full spiral galaxy structure
 */
export class GalaxyLODSystem {
    constructor(galaxyGroup, camera) {
        if (!galaxyGroup) {
            throw new Error('GalaxyLODSystem: galaxyGroup parameter is required');
        }
        if (!camera) {
            throw new Error('GalaxyLODSystem: camera parameter is required');
        }
        
        this.galaxyGroup = galaxyGroup;
        this.camera = camera;
        
        // References to galaxy subsystems (to be set externally)
        this.particleSystem = null;
        this.cloudSystem = null;
        this.spiralStructure = null;
        
        // Cache for world position to avoid repeated allocations
        this._galaxyWorldPos = new THREE.Vector3();
        
        // Error tracking
        this.lastError = null;
    }
    
    /**
     * Set reference to the particle system (star particles)
     * @param {THREE.Points} particleSystem
     */
    setParticleSystem(particleSystem) {
        if (!particleSystem) {
            console.warn('GalaxyLODSystem: particleSystem is null or undefined');
        }
        this.particleSystem = particleSystem;
    }
    
    /**
     * Set reference to the cloud system (volumetric clouds)
     * @param {THREE.Points} cloudSystem
     */
    setCloudSystem(cloudSystem) {
        if (!cloudSystem) {
            console.warn('GalaxyLODSystem: cloudSystem is null or undefined');
        }
        this.cloudSystem = cloudSystem;
    }
    
    /**
     * Set reference to the spiral structure (full galaxy view)
     * @param {THREE.Group} spiralStructure
     */
    setSpiralStructure(spiralStructure) {
        if (!spiralStructure) {
            console.warn('GalaxyLODSystem: spiralStructure is null or undefined');
        }
        this.spiralStructure = spiralStructure;
    }
    
    /**
     * Calculate distance from camera to galaxy center
     * @returns {number} Distance in world units
     */
    calculateDistance() {
        try {
            this.galaxyGroup.getWorldPosition(this._galaxyWorldPos);
            return this.camera.position.distanceTo(this._galaxyWorldPos);
        } catch (error) {
            this.lastError = error;
            console.error('GalaxyLODSystem: Error calculating distance', error);
            return 0;
        }
    }
    
    /**
     * Calculate blend factors based on camera distance
     * @param {number} distance - Distance from camera to galaxy center
     * @returns {Object} Blend factors for each system
     */
    calculateBlendFactors(distance) {
        try {
            // Inner view: particles only (< 75k)
            if (distance < 75000) {
                return {
                    particleOpacity: 0.9,
                    cloudOpacity: 0.0,
                    spiralVisibility: 0.0
                };
            }
            
            // Transition 1: particles → clouds (75k - 125k)
            if (distance < 125000) {
                const t = this.smoothstep(75000, 125000, distance);
                return {
                    particleOpacity: this.lerp(0.9, 0.1, t),
                    cloudOpacity: this.lerp(0.0, 0.6, t),
                    spiralVisibility: 0.0
                };
            }
            
            // Mid-outer view: clouds visible (125k - 450k)
            if (distance < 450000) {
                return {
                    particleOpacity: 0.1,
                    cloudOpacity: 0.6,
                    spiralVisibility: 0.0
                };
            }
            
            // Transition 2: clouds → full structure (450k - 550k)
            if (distance < 550000) {
                const t = this.smoothstep(450000, 550000, distance);
                return {
                    particleOpacity: this.lerp(0.1, 0.0, t),
                    cloudOpacity: 0.6,
                    spiralVisibility: t
                };
            }
            
            // Outer view: full structure only (> 550k)
            return {
                particleOpacity: 0.0,
                cloudOpacity: 0.6,
                spiralVisibility: 1.0
            };
            
        } catch (error) {
            this.lastError = error;
            console.error('GalaxyLODSystem: Error calculating blend factors', error);
            // Return safe defaults
            return {
                particleOpacity: 0.9,
                cloudOpacity: 0.0,
                spiralVisibility: 0.0
            };
        }
    }
    
    /**
     * Smooth interpolation function (Hermite interpolation)
     * @param {number} edge0 - Lower edge
     * @param {number} edge1 - Upper edge
     * @param {number} x - Value to interpolate
     * @returns {number} Smoothly interpolated value between 0 and 1
     */
    smoothstep(edge0, edge1, x) {
        // Clamp x to [0, 1]
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
        // Hermite interpolation: 3t² - 2t³
        return t * t * (3 - 2 * t);
    }
    
    /**
     * Linear interpolation
     * @param {number} a - Start value
     * @param {number} b - End value
     * @param {number} t - Interpolation factor (0-1)
     * @returns {number} Interpolated value
     */
    lerp(a, b, t) {
        return a + (b - a) * t;
    }
    
    /**
     * Update particle system opacity
     * @param {number} opacity - Target opacity (0.0 - 1.0)
     */
    updateParticleOpacity(opacity) {
        try {
            if (!this.particleSystem) {
                return;
            }
            
            if (!this.particleSystem.material) {
                console.warn('GalaxyLODSystem: particleSystem has no material');
                return;
            }
            
            this.particleSystem.material.opacity = opacity;
            this.particleSystem.material.needsUpdate = true;
            this.particleSystem.visible = opacity > 0.01;
            
        } catch (error) {
            this.lastError = error;
            console.error('GalaxyLODSystem: Error updating particle opacity', error);
        }
    }
    
    /**
     * Update cloud system opacity
     * @param {number} opacity - Target opacity (0.0 - 1.0)
     */
    updateCloudOpacity(opacity) {
        try {
            if (!this.cloudSystem) {
                return;
            }
            
            if (!this.cloudSystem.material) {
                console.warn('GalaxyLODSystem: cloudSystem has no material');
                return;
            }
            
            this.cloudSystem.material.opacity = opacity;
            this.cloudSystem.material.needsUpdate = true;
            this.cloudSystem.visible = opacity > 0.01;
            
        } catch (error) {
            this.lastError = error;
            console.error('GalaxyLODSystem: Error updating cloud opacity', error);
        }
    }
    
    /**
     * Update spiral structure visibility
     * @param {number} visibility - Target visibility (0.0 - 1.0)
     */
    updateSpiralVisibility(visibility) {
        try {
            if (!this.spiralStructure) {
                return;
            }
            
            // Traverse all children and update their material opacity
            this.spiralStructure.traverse((child) => {
                if (child.material) {
                    child.material.opacity = visibility;
                    child.material.needsUpdate = true;
                }
            });
            
            this.spiralStructure.visible = visibility > 0.01;
            
        } catch (error) {
            this.lastError = error;
            console.error('GalaxyLODSystem: Error updating spiral visibility', error);
        }
    }
    
    /**
     * Main update method - call this every frame
     * Coordinates all LOD updates based on camera distance
     */
    update() {
        try {
            // Calculate current distance
            const distance = this.calculateDistance();
            
            // Calculate blend factors for this distance
            const factors = this.calculateBlendFactors(distance);
            
            // Debug logging (only log occasionally to avoid spam)
            if (Math.random() < 0.01) { // Log ~1% of frames
                console.log('LOD Update:', {
                    distance: Math.round(distance),
                    particleOpacity: factors.particleOpacity.toFixed(2),
                    cloudOpacity: factors.cloudOpacity.toFixed(2),
                    spiralVisibility: factors.spiralVisibility.toFixed(2),
                    hasSpiralStructure: !!this.spiralStructure
                });
            }
            
            // Update all systems
            this.updateParticleOpacity(factors.particleOpacity);
            this.updateCloudOpacity(factors.cloudOpacity);
            this.updateSpiralVisibility(factors.spiralVisibility);
            
        } catch (error) {
            this.lastError = error;
            console.error('GalaxyLODSystem: Error in update', error);
        }
    }
    
    /**
     * Get the last error that occurred
     * @returns {Error|null}
     */
    getLastError() {
        return this.lastError;
    }
    
    /**
     * Check if all required systems are set
     * @returns {boolean}
     */
    hasAllSystems() {
        return this.particleSystem !== null && 
               this.cloudSystem !== null && 
               this.spiralStructure !== null;
    }
}
