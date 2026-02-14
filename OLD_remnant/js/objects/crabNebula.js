import * as THREE from 'three';
import { createNoiseTexture } from '../../src/utils/textureUtils';

/**
 * Create filament particle system for Crab Nebula
 * Generates 5,000 particles in irregular explosion pattern with red/orange colors
 * @param {THREE.Texture} nebulaTexture - Nebula texture for particles
 * @returns {THREE.Points} Filament particle system
 */
function createFilaments(nebulaTexture) {
    const geometry = new THREE.BufferGeometry();
    const count = 8000; // Increased for denser filaments
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Create filamentary structure with radial streaks
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1); // Better spherical distribution
        
        // Distance from center - concentrated in outer shell
        const t = Math.pow(Math.random(), 0.5); // Bias toward outer edge
        const r = 15000 + t * 35000; // 15k to 50k radius
        
        // Add strong filamentary noise - creates wispy threads
        const filamentNoise = Math.sin(theta * 8) * Math.cos(phi * 6) * 5000;
        const randomNoise = (Math.random() - 0.5) * 8000;
        
        const finalR = r + filamentNoise + randomNoise;
        
        positions[i3] = Math.sin(phi) * Math.cos(theta) * finalR;
        positions[i3 + 1] = Math.cos(phi) * finalR * 0.85; // Slightly flattened
        positions[i3 + 2] = Math.sin(phi) * Math.sin(theta) * finalR;
        
        // Color based on distance from center
        const color = new THREE.Color();
        const distRatio = r / 50000;
        
        if (distRatio > 0.6) {
            // Outer filaments: red/orange/brown (like reference image)
            const hue = 0.02 + Math.random() * 0.06; // Red-orange range
            const sat = 0.85 + Math.random() * 0.15;
            const light = 0.35 + Math.random() * 0.25; // Darker, more realistic
            color.setHSL(hue, sat, light);
        } else if (distRatio > 0.3) {
            // Mid region: mix of orange and yellow
            const hue = 0.08 + Math.random() * 0.08;
            const sat = 0.8 + Math.random() * 0.2;
            const light = 0.4 + Math.random() * 0.2;
            color.setHSL(hue, sat, light);
        } else {
            // Inner region: will be covered by interior particles (task 6.2)
            const hue = 0.05;
            const sat = 0.7;
            const light = 0.5;
            color.setHSL(hue, sat, light);
        }
        
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
        
        // Varying particle sizes - smaller for more detail
        sizes[i] = 1500 + Math.random() * 2500;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.PointsMaterial({
        size: 3500, // Adjusted for better filament appearance
        map: nebulaTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });
    
    return new THREE.Points(geometry, material);
}

export function createCrabNebula(position, size, nebulaTexture = null) {
    const group = new THREE.Group();
    group.position.copy(position);

    console.log('Creating Crab Nebula at', position, 'with size', size, 'and texture:', nebulaTexture ? 'loaded' : 'null');

    // Core pulsar/star
    const pulsar = new THREE.Sprite(new THREE.SpriteMaterial({
        map: createNoiseTexture('star', '#ffffff', '#aaaaff'),
        color: 0xffffff,
        blending: THREE.AdditiveBlending
    }));
    pulsar.scale.set(size * 0.1, size * 0.1, 1);
    group.add(pulsar);

    // Enhanced filament system if nebula texture is provided
    if (nebulaTexture) {
        const filaments = createFilaments(nebulaTexture);
        group.add(filaments);
        console.log('✓ Enhanced filament system added to Crab Nebula');
    } else {
        // Fallback to original filament implementation
        const filamentGeo = new THREE.BufferGeometry();
        const filamentCount = 2000;
        const fPos = new Float32Array(filamentCount * 3);
        const fCol = new Float32Array(filamentCount * 3);

        for (let i = 0; i < filamentCount; i++) {
            // Crab nebula shape: Roughly elliptical/irregular explosion
            const r = Math.random() * size;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            // Noise for irregularity
            const noise = Math.sin(theta * 5) * Math.cos(phi * 5) * 0.3;
            const finalR = r * (0.8 + noise);

            fPos[i * 3] = finalR * Math.sin(phi) * Math.cos(theta);
            fPos[i * 3 + 1] = finalR * Math.sin(phi) * Math.sin(theta) * 0.7; // Slightly flattened
            fPos[i * 3 + 2] = finalR * Math.cos(phi);

            // Colors: Red/Orange filaments with Blue interior
            const c = new THREE.Color();
            const distRatio = finalR / size;
            if (distRatio < 0.4) {
                c.setHSL(0.6, 0.8, 0.5); // Blue center
            } else {
                c.setHSL(0.05 + Math.random() * 0.1, 0.9, 0.4 + Math.random() * 0.2); // Red/Orange outer
            }

            fCol[i * 3] = c.r;
            fCol[i * 3 + 1] = c.g;
            fCol[i * 3 + 2] = c.b;
        }

        filamentGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3));
        filamentGeo.setAttribute('color', new THREE.BufferAttribute(fCol, 3));

        const material = new THREE.PointsMaterial({
            size: size * 0.05,
            map: createNoiseTexture('nebula', '#ffffff', '#000000'), // Use noise texture
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        group.add(new THREE.Points(filamentGeo, material));
    }

    // Outer Glow - subtle orange/red halo
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: createNoiseTexture('glow', '#ff6633', '#000000'),
        color: 0xff4422,
        blending: THREE.AdditiveBlending,
        opacity: 0.15 // More subtle
    }));
    glow.scale.set(size * 2.2, size * 1.8, 1); // Slightly elliptical
    group.add(glow);

    // Identify for navigation
    group.userData = {
        name: "CRAB NEBULA",
        isSystem: true,
        baseScale: size,
        type: 'nebula'
    };

    return group;
}
