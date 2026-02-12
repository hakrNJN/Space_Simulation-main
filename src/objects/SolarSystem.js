import * as THREE from 'three';
import { BaseSystem } from './BaseSystem.js';
import { createNoiseTexture, createStarTexture } from '../utils/textureUtils.js';
import { SYSTEM_POSITIONS } from './SystemPositions.js';
import { adaptMaterial } from '../utils/materialAdapter.js';

/**
 * SolarSystem - Our home star system
 * Located in the Orion Spur, ~26,000 ly from galactic center
 * Contains: Sun, 8 planets, asteroid belt
 */
export class SolarSystem extends BaseSystem {
    constructor() {
        super('SOLAR', SYSTEM_POSITIONS.SOLAR);
    }

    build(textures) {
        const loader = new THREE.TextureLoader();
        const asteroidTexture = createNoiseTexture('asteroid', '#666666', '#222222');

        // SUN
        // High-res sun texture
        const sunGeo = new THREE.SphereGeometry(2000, 64, 64);
        const sunTex = loader.load('/textures/planets/sun.jpg');
        const sunMat = adaptMaterial(
            new THREE.MeshBasicMaterial({
                map: sunTex,
                color: 0xffffff // Let texture define color
            }),
            this.engine.isWebGPU
        );
        const sun = new THREE.Mesh(sunGeo, sunMat);

        sun.userData = { name: 'SUN', isSystem: true, baseScale: 2000 };
        this.group.add(sun);
        this.targetables.push(sun);

        // Add point light for the sun
        const sunLight = new THREE.PointLight(0xffffff, 6.0, 5000000, 0.5); // 1.5x brighter (was 4.0)
        this.group.add(sunLight);

        // Add ambient light to boost overall brightness
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Add base visibility
        this.group.add(ambientLight);

        // SUN HALO
        const haloTexture = this.createHaloTexture();
        const haloMaterial = adaptMaterial(
            new THREE.SpriteMaterial({
                map: haloTexture,
                color: 0xffaa33,
                transparent: true,
                opacity: 1.0,
                depthWrite: false,
                blending: THREE.AdditiveBlending
            }),
            this.engine.isWebGPU
        );
        const sunHalo = new THREE.Sprite(haloMaterial);
        sunHalo.scale.set(24000, 24000, 1);
        this.group.add(sunHalo);

        // Texture Loading Helper
        const loadTex = (path) => {
            return path ? loader.load(path) : null;
        };

        // PLANETS — Realistic colors & Rotation Speeds & Orbit Speeds
        const planetData = [
            {
                name: 'MERCURY',
                size: 50,
                dist: 4000,
                texturePath: null,
                c1: '#8c8c8c', c2: '#5a5a5a',
                rotSpeed: 0.01,
                orbitSpeed: 5.0 // Very Fast
            },
            {
                name: 'VENUS',
                size: 120,
                dist: 6000,
                texturePath: '/textures/planets/venus.jpg',
                rotSpeed: -0.005,
                orbitSpeed: 3.5 // Fast
            },
            {
                name: 'EARTH',
                size: 130,
                dist: 8000,
                texturePath: '/textures/planets/earth_day.jpg',
                normalPath: '/textures/planets/earth_normal.jpg',
                hasClouds: true,
                rotSpeed: 0.5,
                orbitSpeed: 2.5 // Baseline
            },
            {
                name: 'MARS',
                size: 70,
                dist: 10000,
                texturePath: '/textures/planets/mars.jpg',
                rotSpeed: 0.48,
                orbitSpeed: 2.0 // Slower than Earth
            },
            {
                name: 'JUPITER',
                size: 1400,
                dist: 16000,
                texturePath: '/textures/planets/jupiter.jpg',
                rotSpeed: 1.2,
                orbitSpeed: 0.8 // Slow
            },
            {
                name: 'SATURN',
                size: 1200,
                dist: 22000,
                texturePath: '/textures/planets/saturn.png',
                hasRings: true,
                rotSpeed: 1.1,
                orbitSpeed: 0.5 // Slower
            },
            {
                name: 'URANUS',
                size: 500,
                dist: 28000,
                texturePath: '/textures/planets/uranus.jpg',
                rotSpeed: -0.7,
                orbitSpeed: 0.3, // Very Slow
                hasRings: true
            },
            {
                name: 'NEPTUNE',
                size: 480,
                dist: 32000,
                texturePath: null,
                c1: '#3355cc', c2: '#1a2d8f',
                rotSpeed: 0.8,
                orbitSpeed: 0.2 // Crawling
            }
        ];

        this.planets = [];
        planetData.forEach(p => {
            const texture = p.texturePath ? loader.load(p.texturePath) : null;
            const normal = p.normalPath ? loader.load(p.normalPath) : null;

            // Pass orbitSpeed to createPlanetMesh
            const planet = this.createPlanetMesh(p.size, p.dist, p.c1, p.c2, p.name, texture, normal, p.rotSpeed, p.orbitSpeed);

            if (p.hasRings) {
                if (p.name === 'SATURN') {
                    this.addSaturnRings(planet, p.size);
                } else if (p.name === 'URANUS') {
                    this.addUranusRings(planet, p.size);
                }
            }
            if (p.hasClouds) this.addEarthClouds(planet, p.size);

            // Add Moon for Earth
            if (p.name === 'EARTH') {
                this.addMoon(planet, p.size);
            }

            this.group.add(planet);
            this.planets.push(planet);
            this.targetables.push(planet);
        });

        // ASTEROID BELT
        this.createAsteroidBelt(3000, 12000, 14000, asteroidTexture);
    }

    createPlanetMesh(size, distance, color1, color2, name, texture, normalMap, rotSpeed = 0.5, orbitSpeed = null) {
        const geo = new THREE.SphereGeometry(size, 64, 64);
        let mat;

        if (texture) {
            mat = adaptMaterial(
                new THREE.MeshStandardMaterial({
                    map: texture,
                    normalMap: normalMap || null,
                    roughness: 0.8,
                    metalness: 0.1
                }),
                this.engine.isWebGPU
            );
        } else {
            // Procedural fallback
            const tex = createNoiseTexture('rock', color1, color2);
            mat = adaptMaterial(
                new THREE.MeshStandardMaterial({
                    map: tex,
                    roughness: 0.7,
                    metalness: 0.1
                }),
                this.engine.isWebGPU
            );
        }

        // Uranus Alignment Fix:
        // Rotate Geometry Z=90 so poles are on X-axis. 
        // Then rotating mesh around X-axis will spin it "vertically" (rolling).
        if (name === 'URANUS') {
            geo.rotateZ(Math.PI / 2);
        }

        const mesh = new THREE.Mesh(geo, mat);
        const angle = Math.random() * Math.PI * 2;
        mesh.position.set(Math.cos(angle) * distance, 0, Math.sin(angle) * distance);

        // Note: For Uranus, we rotated Geometry, not Mesh. 
        // So Mesh axes are still aligned Top-Up. 
        // But Texture pole is pointing X.
        // If we rotate Mesh around X, it will roll.

        // Use provided orbitSpeed or fallback to keplerian-ish approximation (1/sqrt( dist ))
        const calculatedSpeed = orbitSpeed !== null ? orbitSpeed : (1 / Math.sqrt(distance)) * 300;

        mesh.userData = {
            name: name,
            type: 'planet',
            angle: angle,
            distance: distance,
            speed: calculatedSpeed,
            rotSpeed: rotSpeed
        };
        return mesh;
    }

    addSaturnRings(planet, size) {
        const loader = new THREE.TextureLoader();

        // === MAIN RING ===
        // Realistic Proportions:
        // Planet Radius = size
        // Ring Start ~ 1.11 - 1.2 x Radius (C Ring / B Ring start)
        // Ring End ~ 2.3 x Radius (A Ring end)
        // Setting Inner: 1.15 (Close to planet)
        // Setting Outer: 2.5 (Wide span)
        const ringGeo = new THREE.RingGeometry(size * 1.15, size * 2.5, 128);
        const ringTex = loader.load('/textures/planets/saturn_ring.png');
        ringTex.rotation = Math.PI / 2;
        ringTex.center.set(0.5, 0.5);

        const ringMat = adaptMaterial(
            new THREE.MeshStandardMaterial({
                map: ringTex,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 1.0,
                roughness: 0.6,
                metalness: 0.1,
                emissive: 0x050505,
                color: 0xffeedd
            }),
            this.engine.isWebGPU
        );

        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2; // Lie Flat
        ring.castShadow = true;
        ring.receiveShadow = true;
        planet.add(ring);
    }

    addUranusRings(planet, size) {
        const loader = new THREE.TextureLoader();
        // Uranus Rings
        const ringGeo = new THREE.RingGeometry(size * 1.8, size * 3.0, 64);

        const ringTex = loader.load('/textures/planets/saturn_ring.png');
        ringTex.rotation = Math.PI / 2;
        ringTex.center.set(0.5, 0.5);

        const ringMat = adaptMaterial(
            new THREE.MeshStandardMaterial({
                map: ringTex,
                color: 0x88aabb,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.45,
                roughness: 0.8
            }),
            this.engine.isWebGPU
        );

        const ring = new THREE.Mesh(ringGeo, ringMat);
        // Align with Equator (since Planet is tilted Z=90, Equator is vertical)
        // Ring defined in XY plane (RingGeometry faces Z). 
        // We want Ring to face X (to be in YZ plane).
        ring.rotation.y = Math.PI / 2;

        planet.add(ring);
    }

    addEarthClouds(planet, size) {
        const loader = new THREE.TextureLoader();
        const cloudGeo = new THREE.SphereGeometry(size * 1.01, 64, 64);
        const cloudTex = loader.load('/textures/planets/earth_clouds.png');

        const cloudMat = adaptMaterial(
            new THREE.MeshStandardMaterial({
                map: cloudTex,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthWrite: false
            }),
            this.engine.isWebGPU
        );

        const clouds = new THREE.Mesh(cloudGeo, cloudMat);
        clouds.userData = { isCloud: true };
        planet.add(clouds);
        planet.userData.clouds = clouds; // Reference for animation
    }

    addMoon(earth, earthSize) {
        const loader = new THREE.TextureLoader();
        const moonSize = earthSize * 0.27;
        const moonDist = earthSize * 4; // Scaled down distance for visibility relative to game scale

        const moonGeo = new THREE.SphereGeometry(moonSize, 32, 32);
        const moonTex = loader.load('/textures/planets/moon.jpg');

        const moonMat = adaptMaterial(
            new THREE.MeshStandardMaterial({
                map: moonTex,
                roughness: 0.9,
                metalness: 0.0
            }),
            this.engine.isWebGPU
        );

        const moon = new THREE.Mesh(moonGeo, moonMat);
        moon.position.set(moonDist, 0, 0); // Start position relative to Earth

        // Moon orbit group
        const moonGroup = new THREE.Group();
        earth.add(moonGroup); // Add group to Earth so it follows Earth
        moonGroup.add(moon);

        earth.userData.moonGroup = moonGroup; // For animation
    }

    createAsteroidBelt(count, minRadius, maxRadius, texture) {
        const geo = new THREE.DodecahedronGeometry(20, 1);
        const mat = adaptMaterial(
            new THREE.MeshStandardMaterial({
                map: texture,
                roughness: 0.8,
                color: new THREE.Color('#aaaaaa').multiplyScalar(3.0),
                emissive: new THREE.Color(0x222222)
            }),
            this.engine.isWebGPU
        );
        const mesh = new THREE.InstancedMesh(geo, mat, count);
        const dummy = new THREE.Object3D();
        this.beltData = [];

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = minRadius + Math.random() * (maxRadius - minRadius);
            const y = (Math.random() - 0.5) * 1000;

            dummy.position.set(Math.cos(angle) * dist, y, Math.sin(angle) * dist);
            dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
            const s = Math.random() * 2 + 0.5;
            dummy.scale.set(s, s, s);
            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);

            this.beltData.push({ angle, dist, y, speed: (1 / Math.sqrt(dist)) * 200, rotSpeed: Math.random() });
        }

        this.asteroidMesh = mesh;
        this.asteroidDummy = dummy;
        this.group.add(mesh);
    }

    update(delta, time) {
        // Orbit planets
        if (this.planets) {
            this.planets.forEach(planet => {
                const data = planet.userData;
                data.angle += data.speed * delta * 0.1;
                planet.position.x = Math.cos(data.angle) * data.distance;
                planet.position.z = Math.sin(data.angle) * data.distance;

                // Rotation on axis
                if (planet.userData.name === 'URANUS') {
                    // Geometric rotation (Z=90) was applied to Geometry, OR we apply rotation X to Mesh
                    // To Roll: Rotate around Mesh's X axis (which is aligned with Orbit if Z=0, Y=0)
                    planet.rotateX(data.rotSpeed * delta);
                } else {
                    planet.rotation.y += data.rotSpeed * delta;
                }

                // Animate Clouds
                if (data.clouds) {
                    data.clouds.rotation.y += delta * 0.05;
                }

                // Animate Moon
                if (data.moonGroup) {
                    data.moonGroup.rotation.y += delta * 0.5; // Orbit Earth
                }
            });
        }

        // Animate asteroid belt
        if (this.asteroidMesh && this.beltData) {
            for (let i = 0; i < this.beltData.length; i++) {
                const d = this.beltData[i];
                d.angle += d.speed * delta * 0.1;
                this.asteroidDummy.position.set(Math.cos(d.angle) * d.dist, d.y, Math.sin(d.angle) * d.dist);
                this.asteroidDummy.rotation.set(time * d.rotSpeed, time * d.rotSpeed, 0);
                this.asteroidDummy.scale.set((i % 3) + 0.5, (i % 3) + 0.5, (i % 3) + 0.5);
                this.asteroidDummy.updateMatrix();
                this.asteroidMesh.setMatrixAt(i, this.asteroidDummy.matrix);
            }
            this.asteroidMesh.instanceMatrix.needsUpdate = true;
        }
    }
    createHaloTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const context = canvas.getContext('2d');
        const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(255, 200, 150, 0.8)');
        gradient.addColorStop(0.5, 'rgba(255, 100, 50, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, 128, 128);
        const texture = new THREE.CanvasTexture(canvas);
        return texture;
    }
}
