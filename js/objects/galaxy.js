// Galaxy and Milky Way creation functions

/**
 * Create volumetric cloud particle system for mid-outer galaxy view
 * @param {THREE.Texture} nebulaTexture - Nebula texture for cloud rendering
 * @returns {THREE.Points} Cloud particle system
 */
function createCloudParticles(nebulaTexture) {
    const geometry = new THREE.BufferGeometry();
    const count = 40000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Spiral arm positioning (same as stars but denser)
        const r = Math.pow(Math.random(), 1.5) * 280000;
        const spin = r * 0.00005;
        const armAngle = (i % 2) * Math.PI;
        const spread = (Math.random() - 0.5) * 2.5;
        const theta = spin + armAngle + spread;
        
        positions[i3] = Math.cos(theta) * r;
        positions[i3 + 1] = (Math.random() - 0.5) * (8000 + r * 0.15);
        positions[i3 + 2] = Math.sin(theta) * r;
        
        // Color: purple/blue in arms, orange/pink in core
        const color = new THREE.Color();
        if (r < 80000) {
            // Core: orange/pink
            color.setHSL(0.05 + Math.random() * 0.1, 0.8, 0.5);
        } else {
            // Arms: purple/blue
            color.setHSL(0.65 + Math.random() * 0.15, 0.7, 0.6);
        }
        
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
        
        // Varying sizes for depth
        sizes[i] = 3000 + Math.random() * 5000;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.PointsMaterial({
        size: 5000,
        map: nebulaTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.0, // Start invisible
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });
    
    return new THREE.Points(geometry, material);
}

/**
 * Create spiral arm structure for outer galaxy view
 * @param {THREE.Texture} starTexture - Star texture for rendering
 * @returns {THREE.Group} Spiral structure group containing arms and dust lanes
 */
function createSpiralStructure(starTexture) {
    const group = new THREE.Group();
    
    // Enhanced spiral arms with 4 arms
    const armCount = 4;
    const particlesPerArm = 15000;
    
    for (let arm = 0; arm < armCount; arm++) {
        const armGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particlesPerArm * 3);
        const colors = new Float32Array(particlesPerArm * 3);
        
        const baseAngle = (arm / armCount) * Math.PI * 2;
        
        for (let i = 0; i < particlesPerArm; i++) {
            const i3 = i * 3;
            
            // Logarithmic spiral
            const t = i / particlesPerArm;
            const r = 30000 + t * 220000;
            const theta = baseAngle + t * Math.PI * 3 + (Math.random() - 0.5) * 0.8;
            
            positions[i3] = Math.cos(theta) * r;
            positions[i3 + 1] = (Math.random() - 0.5) * (1000 + r * 0.05);
            positions[i3 + 2] = Math.sin(theta) * r;
            
            // Color gradient
            const color = new THREE.Color();
            if (r < 80000) {
                // Core: yellow-orange
                color.setHSL(0.08, 0.9, 0.65);
            } else {
                // Arms: blue-white
                color.setHSL(0.6, 0.6, 0.8);
            }
            
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }
        
        armGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        armGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const armMaterial = new THREE.PointsMaterial({
            size: 4000,
            map: starTexture,
            vertexColors: true,
            transparent: true,
            opacity: 0.0, // Start invisible
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        
        group.add(new THREE.Points(armGeometry, armMaterial));
    }
    
    // Dust lanes (dark regions between arms)
    const dustGeometry = new THREE.BufferGeometry();
    const dustCount = 10000;
    const dustPositions = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);
    
    for (let i = 0; i < dustCount; i++) {
        const i3 = i * 3;
        
        // Position between arms
        const r = 80000 + Math.random() * 170000;
        const armOffset = Math.PI / armCount; // Between arms
        const theta = Math.random() * Math.PI * 2 + armOffset;
        
        dustPositions[i3] = Math.cos(theta) * r;
        dustPositions[i3 + 1] = (Math.random() - 0.5) * (2000 + r * 0.08);
        dustPositions[i3 + 2] = Math.sin(theta) * r;
        
        // Dark brown/black
        const color = new THREE.Color(0.05, 0.03, 0.02);
        dustColors[i3] = color.r;
        dustColors[i3 + 1] = color.g;
        dustColors[i3 + 2] = color.b;
    }
    
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    dustGeometry.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));
    
    const dustMaterial = new THREE.PointsMaterial({
        size: 6000,
        vertexColors: true,
        transparent: true,
        opacity: 0.0, // Start invisible
        depthWrite: false,
        blending: THREE.NormalBlending
    });
    
    group.add(new THREE.Points(dustGeometry, dustMaterial));
    
    return group;
}

export function createGalaxy(scene, starTexture, nebulaTexture = null) {
    const galGroup = new THREE.Group();
    galGroup.position.set(3000000, 1500000, -4000000);
    galGroup.rotation.x = Math.PI / 2.5;
    galGroup.rotation.z = Math.PI / 5;

    const starGeo = new THREE.BufferGeometry();
    const starCount = 80000;
    const sPos = new Float32Array(starCount * 3);
    const sCol = new Float32Array(starCount * 3);
    const arms = 2;

    for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        const r = (Math.random() * 0.1 + Math.pow(Math.random(), 2) * 0.9) * 250000;
        const spin = r * 0.00005;
        const armAngle = (i % arms) * ((Math.PI * 2) / arms);
        const spread = (Math.random() - 0.5) * 1.2;
        const theta = spin + armAngle + spread;

        sPos[i3] = Math.cos(theta) * r;
        sPos[i3 + 1] = (Math.random() - 0.5) * (2000 + r * 0.1);
        sPos[i3 + 2] = Math.sin(theta) * r;

        const color = new THREE.Color();
        if (r < 50000) color.setHSL(0.05 + Math.random() * 0.1, 0.9, 0.6);
        else color.setHSL(0.6 + Math.random() * 0.1, 0.8, 0.8);

        sCol[i3] = color.r; sCol[i3 + 1] = color.g; sCol[i3 + 2] = color.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(sCol, 3));
    const starMat = new THREE.PointsMaterial({
        size: 800, map: starTexture, vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(starGeo, starMat);
    galGroup.add(particleSystem);

    const dustGeo = new THREE.BufferGeometry();
    const dustCount = 20000;
    const dPos = new Float32Array(dustCount * 3);
    const dCol = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
        const i3 = i * 3;
        const r = Math.pow(Math.random(), 0.6) * 280000;
        const spin = r * 0.00005;
        const armAngle = (i % arms) * ((Math.PI * 2) / arms);
        const spread = (Math.random() - 0.5) * 3.5;
        const theta = spin + armAngle + spread;

        dPos[i3] = Math.cos(theta) * r;
        dPos[i3 + 1] = (Math.random() - 0.5) * (6000 + r * 0.25);
        dPos[i3 + 2] = Math.sin(theta) * r;

        const color = new THREE.Color();
        if (Math.random() > 0.5) color.setHSL(0.7 + Math.random() * 0.1, 0.6, 0.2 + Math.random() * 0.1);
        else color.setHSL(0.55 + Math.random() * 0.1, 0.4, 0.15 + Math.random() * 0.1);

        dCol[i3] = color.r; dCol[i3 + 1] = color.g; dCol[i3 + 2] = color.b;
    }

    dustGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dCol, 3));
    const dustMat = new THREE.PointsMaterial({
        size: 6000, map: starTexture, vertexColors: true, transparent: true, opacity: 0.04, depthWrite: false, blending: THREE.AdditiveBlending
    });
    galGroup.add(new THREE.Points(dustGeo, dustMat));

    const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTexture, color: 0xffddaa, blending: THREE.AdditiveBlending, opacity: 0.8 }));
    core.scale.set(70000, 50000, 1);
    galGroup.add(core);

    // Create cloud particle system if nebula texture is provided
    let cloudSystem = null;
    if (nebulaTexture) {
        cloudSystem = createCloudParticles(nebulaTexture);
        galGroup.add(cloudSystem);
    }

    // Create spiral structure for outer view
    const spiralStructure = createSpiralStructure(starTexture);
    galGroup.add(spiralStructure);

    scene.add(galGroup);
    
    // Return galaxy group and systems for LOD integration
    return {
        group: galGroup,
        particleSystem: particleSystem,
        cloudSystem: cloudSystem,
        spiralStructure: spiralStructure
    };
}

// Milky Way band - REMOVED
export function createMilkyWay(scene, starTexture) {
    // Empty - Milky Way band removed
}
