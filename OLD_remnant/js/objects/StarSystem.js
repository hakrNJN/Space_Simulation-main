import * as THREE from 'three';

export function createStarSystem(name, position, size, color, starTexture) {
    // Create the main star sprite
    const material = new THREE.SpriteMaterial({
        map: starTexture,
        color: new THREE.Color(color),
        blending: THREE.AdditiveBlending,
        opacity: 0.9,
        transparent: true
    });

    const sprite = new THREE.Sprite(material);

    // Set position and scale
    // Position array [x, y, z] or Vector3
    if (Array.isArray(position)) {
        sprite.position.set(position[0], position[1], position[2]);
    } else {
        sprite.position.copy(position);
    }

    sprite.scale.set(size, size, 1);

    // Add Metadata for navigation and animation
    sprite.userData = {
        name: name,
        isSystem: true,
        baseOpacity: 0.9,
        baseScale: size,
        pulse: Math.random() * Math.PI * 2, // Random starting phase
        type: 'star_system'
    };

    return sprite;
}

// Function to update the blinking animation
export function updateStarSystem(sprite, delta) {
    if (!sprite.userData || sprite.userData.type !== 'star_system') return;

    // Beacon-style pulsing
    // Slower, more deliberate pulse (0.5 to 1.5 speed factor)
    sprite.userData.pulse += delta * 1.5;

    // Opacity pulse: Sine wave mapped to [0.4, 1.0]
    // A beacon shouldn't disappear completely, just dim significantly
    const blink = 0.7 + Math.sin(sprite.userData.pulse) * 0.3;
    sprite.material.opacity = sprite.userData.baseOpacity * blink;

    // Slight scale pulse: 1.0x to 1.1x
    const scalePulse = 1.0 + Math.sin(sprite.userData.pulse) * 0.15;
    sprite.scale.set(
        sprite.userData.baseScale * scalePulse,
        sprite.userData.baseScale * scalePulse,
        1
    );
}
