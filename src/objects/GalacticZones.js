import * as THREE from 'three';

/**
 * GalacticZones - Zone management system for galactic center approach
 * 
 * Manages three zones as player approaches Sagittarius A* (galactic center):
 * 
 * Zone 1: Normal Space (Dynamic Galaxy)
 *   - Full particle systems, dynamic content
 *   - Distance: > OUTER_ZONE_DISTANCE from center
 * 
 * Zone 2: Outer Zone (Transition Zone)
 *   - Gradual fade from dynamic to static
 *   - Nebula effects, reduced GPU load
 *   - Distance: BLACK_HOLE_ZONE_DISTANCE to OUTER_ZONE_DISTANCE
 * 
 * Zone 3: Black Hole Zone (Inner Zone)
 *   - Static starfield background only
 *   - Black hole sphere at center
 *   - Minimal GPU load
 *   - Distance: 0 to BLACK_HOLE_ZONE_DISTANCE
 */

export class GalacticZones {
    constructor(engine) {
        this.engine = engine;
        this.scene = engine.scene;
        this.camera = engine.camera;
        
        // Zone boundaries (distances from galactic center at 0,0,0)
        // Optimized for black hole rendering with breathing room
        this.BLACK_HOLE_ZONE_DISTANCE = 250000;  // Inner boundary - Static background + BH breathing room
        this.OUTER_ZONE_DISTANCE = 800000;       // Outer boundary - Transition zone (550K range)
        
        // Current zone state
        this.currentZone = 'normal';  // 'normal', 'outer', 'blackhole'
        this.transitionFactor = 0;  // 0 = fully in one zone, 1 = fully in next zone
        
        // References to scene objects (set after scene is built)
        this.dynamicParticles = [];  // Galaxy particles, starfield, etc.
        this.staticBackground = null;  // Static starfield sphere
        this.nebulas = [];  // Nebula objects
        
        console.log('🌌 Galactic Zones initialized:');
        console.log(`  - Black Hole Zone: 0 to ${this.BLACK_HOLE_ZONE_DISTANCE.toLocaleString()} units`);
        console.log(`  - Outer Zone: ${this.BLACK_HOLE_ZONE_DISTANCE.toLocaleString()} to ${this.OUTER_ZONE_DISTANCE.toLocaleString()} units`);
        console.log(`  - Normal Space: > ${this.OUTER_ZONE_DISTANCE.toLocaleString()} units`);
    }
    
    /**
     * Register dynamic particles that should fade out in outer zone
     */
    registerDynamicParticles(particleSystem) {
        this.dynamicParticles.push(particleSystem);
    }
    
    /**
     * Register nebula objects (should be visible in outer zone only)
     */
    registerNebula(nebula) {
        this.nebulas.push(nebula);
    }
    
    /**
     * Create static starfield background sphere
     * This will be used in the Black Hole Zone
     */
    createStaticBackground() {
        // Create a large sphere with stars texture
        // Similar to Singularity's equirectangular background
        const geometry = new THREE.SphereGeometry(500000, 64, 64);
        
        // Create star texture (we'll use a procedural approach for now)
        const texture = this.createStarfieldTexture();
        
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.BackSide,  // Render inside of sphere
            transparent: true,
            opacity: 0,  // Start invisible
            depthWrite: false,
            fog: false
        });
        
        this.staticBackground = new THREE.Mesh(geometry, material);
        this.staticBackground.name = 'StaticStarfield';
        this.scene.add(this.staticBackground);
        
        console.log('✨ Static starfield background created');
    }
    
    /**
     * Create procedural starfield texture
     * TODO: Replace with actual equirectangular star texture like Singularity
     */
    createStarfieldTexture() {
        const size = 2048;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        
        // Black background
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, size, size);
        
        // Generate stars (increase count to match galaxy density)
        const starCount = 15000;  // Increased from typical 5000
        
        for (let i = 0; i < starCount; i++) {
            const x = Math.random() * size;
            const y = Math.random() * size;
            const brightness = Math.random();
            const starSize = brightness > 0.95 ? 2 : 1;
            
            // Color variation (white, blue-white, yellow-white)
            let color;
            const colorRand = Math.random();
            if (colorRand > 0.95) {
                color = `rgba(255, 200, 150, ${brightness})`; // Yellow-white
            } else if (colorRand > 0.85) {
                color = `rgba(150, 200, 255, ${brightness})`; // Blue-white
            } else {
                color = `rgba(255, 255, 255, ${brightness})`; // White
            }
            
            ctx.fillStyle = color;
            ctx.fillRect(x, y, starSize, starSize);
            
            // Add glow for bright stars
            if (brightness > 0.9) {
                ctx.fillStyle = `rgba(255, 255, 255, ${(brightness - 0.9) * 0.3})`;
                ctx.fillRect(x - 1, y - 1, starSize + 2, starSize + 2);
            }
        }
        
        const texture = new THREE.CanvasTexture(canvas);
        texture.premultiplyAlpha = false;
        return texture;
    }
    
    /**
     * Update zone state based on camera position
     * Call this every frame
     */
    update() {
        // Calculate distance from galactic center (0, 0, 0)
        const distanceFromCenter = this.camera.position.length();
        
        // Determine current zone and transition factor
        let newZone = this.currentZone;
        let newTransitionFactor = 0;
        
        if (distanceFromCenter <= this.BLACK_HOLE_ZONE_DISTANCE) {
            // Inside Black Hole Zone
            newZone = 'blackhole';
            newTransitionFactor = 1.0;
        } else if (distanceFromCenter <= this.OUTER_ZONE_DISTANCE) {
            // Inside Outer Zone (transition zone)
            newZone = 'outer';
            // Smooth transition: 0 at OUTER_ZONE_DISTANCE, 1 at BLACK_HOLE_ZONE_DISTANCE
            const range = this.OUTER_ZONE_DISTANCE - this.BLACK_HOLE_ZONE_DISTANCE;
            const progress = (this.OUTER_ZONE_DISTANCE - distanceFromCenter) / range;
            // Use smoothstep for very smooth transition
            newTransitionFactor = this.smoothstep(0, 1, progress);
        } else {
            // In Normal Space
            newZone = 'normal';
            newTransitionFactor = 0;
        }
        
        // Log zone changes
        if (newZone !== this.currentZone) {
            console.log(`🌌 Zone transition: ${this.currentZone} → ${newZone} (distance: ${distanceFromCenter.toLocaleString()})`);
            this.currentZone = newZone;
        }
        
        this.transitionFactor = newTransitionFactor;
        
        // Apply zone effects
        this.applyZoneEffects();
    }
    
    /**
     * Apply visual effects based on current zone and transition factor
     */
    applyZoneEffects() {
        const t = this.transitionFactor;
        
        // Fade out dynamic particles (1.0 in normal space, 0.0 in black hole zone)
        const dynamicOpacity = 1.0 - t;
        this.dynamicParticles.forEach(particle => {
            if (particle.material) {
                particle.material.opacity = dynamicOpacity;
                particle.visible = dynamicOpacity > 0.01;
            }
        });
        
        // Fade in static background (0.0 in normal space, 1.0 in black hole zone)
        if (this.staticBackground) {
            this.staticBackground.material.opacity = t;
            this.staticBackground.visible = t > 0.01;
        }
        
        // Nebulas visible in outer zone only (fade in then fade out)
        // Peak visibility at t = 0.5
        const nebulaOpacity = this.currentZone === 'outer' 
            ? Math.sin(t * Math.PI)  // 0 → 1 → 0 as t goes 0 → 0.5 → 1
            : 0;
        
        this.nebulas.forEach(nebula => {
            if (nebula.traverse) {
                nebula.traverse(child => {
                    if (child.material && child.material.opacity !== undefined) {
                        // Store original opacity if not already stored
                        if (child.userData.originalOpacity === undefined) {
                            child.userData.originalOpacity = child.material.opacity;
                        }
                        child.material.opacity = child.userData.originalOpacity * nebulaOpacity;
                        child.visible = nebulaOpacity > 0.01;
                    }
                });
            }
        });
    }
    
    /**
     * Smooth interpolation function (smoothstep)
     * Provides very smooth transitions between zones
     */
    smoothstep(edge0, edge1, x) {
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
        return t * t * (3 - 2 * t);
    }
    
    /**
     * Get current zone info for debugging
     */
    getZoneInfo() {
        const distance = this.camera.position.length();
        return {
            zone: this.currentZone,
            transitionFactor: this.transitionFactor.toFixed(3),
            distanceFromCenter: Math.floor(distance).toLocaleString(),
            dynamicParticlesVisible: this.dynamicParticles.filter(p => p.visible).length,
            staticBackgroundVisible: this.staticBackground?.visible || false
        };
    }
}
