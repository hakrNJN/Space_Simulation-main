import * as THREE from 'three';

/**
 * BaseSystem - Abstract base class for all star systems
 * All systems extend this class to provide consistent interface
 */
export class BaseSystem {
    constructor(name, position) {
        this.name = name;
        this.position = position instanceof THREE.Vector3
            ? position
            : new THREE.Vector3(position.x || 0, position.y || 0, position.z || 0);
        this.group = new THREE.Group();
        this.group.position.copy(this.position);
        this.group.userData = { name: this.name, isSystem: true };
        this.targetables = []; // Objects that can be targeted by radar
        this.initialized = false;
    }

    /**
     * Initialize the system - add all objects to the group
     * @param {THREE.Scene} scene - The main scene
     * @param {Object} textures - Shared texture utilities
     */
    init(scene, textures) {
        if (this.initialized) return;
        this.build(textures);
        scene.add(this.group);
        this.initialized = true;
    }

    /**
     * Build the system's objects - override in subclasses
     * @param {Object} textures - Shared texture utilities
     */
    build(textures) {
        // Override in subclass
    }

    /**
     * Animation update tick
     * @param {number} delta - Time since last frame
     * @param {number} time - Total elapsed time
     */
    update(delta, time) {
        // Override in subclass for animations
    }

    /**
     * Get all targetable objects in this system
     * @returns {Array} Array of THREE.Object3D with userData
     */
    getTargetables() {
        return this.targetables;
    }

    /**
     * Get distance from a position to this system's origin
     * @param {THREE.Vector3} pos - Position to measure from
     * @returns {number} Distance in world units
     */
    getDistanceFrom(pos) {
        return this.position.distanceTo(pos);
    }

    /**
     * Check if a position is "inside" this system (within interaction range)
     * @param {THREE.Vector3} pos - Position to check
     * @param {number} range - Interaction range (default 50000)
     * @returns {boolean}
     */
    isInRange(pos, range = 50000) {
        return this.getDistanceFrom(pos) < range;
    }

    /**
     * Helper to create a star with glow
     */
    createStar(radius, color, glowScale = 6) {
        const starGroup = new THREE.Group();

        // Core sphere
        const geo = new THREE.SphereGeometry(radius, 64, 64);
        const mat = new THREE.MeshBasicMaterial({ color: color });
        const mesh = new THREE.Mesh(geo, mat);
        starGroup.add(mesh);

        // Glow sprite
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, `rgba(${(color >> 16) & 255},${(color >> 8) & 255},${color & 255},0.8)`);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 256);

        const tex = new THREE.CanvasTexture(canvas);
        const spriteMat = new THREE.SpriteMaterial({
            map: tex,
            color: color,
            blending: THREE.AdditiveBlending,
            transparent: true
        });
        const glow = new THREE.Sprite(spriteMat);
        glow.scale.set(radius * glowScale, radius * glowScale, 1);
        starGroup.add(glow);

        return starGroup;
    }

    /**
     * Helper to create a planet
     */
    createPlanet(radius, distance, color1, color2, textures) {
        const geo = new THREE.SphereGeometry(radius, 64, 64);
        const tex = textures.createNoiseTexture('rock', color1, color2);
        const mat = new THREE.MeshStandardMaterial({
            map: tex,
            roughness: 0.7,
            metalness: 0.1
        });
        const mesh = new THREE.Mesh(geo, mat);
        const angle = Math.random() * Math.PI * 2;
        mesh.position.set(Math.cos(angle) * distance, 0, Math.sin(angle) * distance);
        mesh.userData = {
            angle: angle,
            distance: distance,
            speed: (1 / Math.sqrt(distance)) * 300,
            rotSpeed: 0.5 + Math.random()
        };
        return mesh;
    }
}
