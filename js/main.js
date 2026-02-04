import { scene, camera, renderer, addStarLight } from './core/scene.js';
import { keys, mouse, smoothedMouse, initInput } from './core/input.js';
import { initUI, updateHUD } from './core/ui.js';
import { createStarTexture, createNoiseTexture } from './utils/textureUtils.js';
import { createGalaxy, createMilkyWay } from './objects/galaxy.js';
import { addSystemDetails, createPlanet, createAsteroidBelt } from './objects/solarSystem.js';
import { createBlackHole, bhPos } from './objects/blackHole.js';

// --- SETUP ---
const starTexture = createStarTexture();
const asteroidTexture = createNoiseTexture('asteroid', '#666666', '#222222');
const animatedBelts = [];
const systemGroups = [];
const planetMeshes = [];
const clock = new THREE.Clock();
const euler = new THREE.Euler(0, 0, 0, 'YXZ');
let speed = 0;
const friction = 0.98;

initInput();
initUI(document.getElementById('compass-tape'));

// Environment
createGalaxy(scene, starTexture);
createMilkyWay(scene, starTexture);

// Starfield & Dust
const starGeo = new THREE.BufferGeometry();
const starCount = 10000;
const starPosArr = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i++) starPosArr[i] = (Math.random() - 0.5) * 400000;
starGeo.setAttribute('position', new THREE.BufferAttribute(starPosArr, 3));
const starMat = new THREE.PointsMaterial({
    color: 0xffffff, size: 400, map: starTexture, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending
});
scene.add(new THREE.Points(starGeo, starMat));

const dustGeo = new THREE.BufferGeometry();
const dustCount = 3000;
const dustPosArr = new Float32Array(dustCount * 3);
for (let i = 0; i < dustCount * 3; i++) dustPosArr[i] = (Math.random() - 0.5) * 100000;
dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPosArr, 3));
const dustMat = new THREE.PointsMaterial({
    color: 0x88aaff, size: 600, map: starTexture, transparent: true, opacity: 0.15, depthWrite: false, blending: THREE.AdditiveBlending
});
const dustSystem = new THREE.Points(dustGeo, dustMat);
scene.add(dustSystem);

// Solar System
const solarGroup = new THREE.Group();
scene.add(solarGroup);
systemGroups.push(solarGroup);
const sun = new THREE.Mesh(new THREE.SphereGeometry(2000, 64, 64), new THREE.MeshBasicMaterial({ color: 0xffaa00 }));
solarGroup.add(sun);
const sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTexture, color: 0xffaa00, blending: THREE.AdditiveBlending }));
sunGlow.scale.set(12000, 12000, 1);
solarGroup.add(sunGlow);
addStarLight({ x: 0, y: 0, z: 0 }, 0xffffff, 2);
addSystemDetails(solarGroup, 0xffaa00, starTexture, animatedBelts);

createPlanet(solarGroup, planetMeshes, 50, 3000, '#A5A5A5', '#5A5A5A', 'rock', 'Mercury', 0.1);
createPlanet(solarGroup, planetMeshes, 120, 5000, '#E6E6C8', '#C8C896', 'gas', 'Venus', -0.05);
createPlanet(solarGroup, planetMeshes, 130, 8000, '#2244AA', '#11AA44', 'earth', 'Earth', 1.0);
createPlanet(solarGroup, planetMeshes, 70, 12000, '#FF4500', '#8B0000', 'rock', 'Mars', 0.9);
createAsteroidBelt(solarGroup, 4000, 16000, 20000, '#aaaaaa', asteroidTexture, animatedBelts);
createPlanet(solarGroup, planetMeshes, 1200, 26000, '#C88B3A', '#A57164', 'gas', 'Jupiter', 2.5);
const saturn = createPlanet(solarGroup, planetMeshes, 1000, 35000, '#E3E0C0', '#D6C485', 'gas', 'Saturn', 2.3);
const rings = new THREE.Mesh(new THREE.RingGeometry(1400, 2200, 64), new THREE.MeshBasicMaterial({ color: 0xD6C485, side: THREE.DoubleSide, transparent: true, opacity: 0.6 }));
rings.rotation.x = Math.PI / 2;
saturn.add(rings);
createPlanet(solarGroup, planetMeshes, 600, 45000, '#ACDFE8', '#4FB6D6', 'gas', 'Uranus', -1.5);
createPlanet(solarGroup, planetMeshes, 580, 55000, '#4B70DD', '#27439C', 'gas', 'Neptune', 1.8);

// Black Hole
const bhGroup = new THREE.Group();
bhGroup.position.copy(bhPos);
scene.add(bhGroup);
const bhMaterial = createBlackHole(bhGroup);
planetMeshes.push({ position: bhGroup.position, userData: { name: "GARGANTUA", isSystem: true, baseScale: 20000 } });
const bhDebris = createAsteroidBelt(bhGroup, 150, 30000, 45000, '#553322', asteroidTexture, animatedBelts);

// Other Systems
const neutronGroup = new THREE.Group();
neutronGroup.position.set(600000, -10000, 600000);
scene.add(neutronGroup);
systemGroups.push(neutronGroup);
planetMeshes.push({ position: neutronGroup.position, userData: { name: "NEUTRON STAR", isSystem: true, baseScale: 20000 } });
neutronGroup.add(new THREE.Mesh(new THREE.SphereGeometry(100, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffffff })));
const neuGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTexture, color: 0x00ffff, blending: THREE.AdditiveBlending }));
neuGlow.scale.set(20000, 20000, 1);
neutronGroup.add(neuGlow);
const jetGeo = new THREE.ConeGeometry(50, 4000, 32, 1, true);
const jetMat = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
const jet1 = new THREE.Mesh(jetGeo, jetMat); jet1.position.y = 2000; neutronGroup.add(jet1);
const jet2 = new THREE.Mesh(jetGeo, jetMat); jet2.position.y = -2000; jet2.rotation.z = Math.PI; neutronGroup.add(jet2);

function createSystem(name, color, x, y, z) {
    const sysGroup = new THREE.Group();
    sysGroup.position.set(x, y, z);
    const star = new THREE.Mesh(new THREE.SphereGeometry(1000, 32, 32), new THREE.MeshBasicMaterial({ color: color }));
    sysGroup.add(star);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTexture, color: color, blending: THREE.AdditiveBlending }));
    glow.scale.set(15000, 15000, 1);
    sysGroup.add(glow);
    addStarLight({ x, y, z }, color, 1);
    planetMeshes.push({ position: sysGroup.position, userData: { name: name, isSystem: true, glow: glow, baseScale: 15000 } });
    systemGroups.push(sysGroup);
    addSystemDetails(sysGroup, color, starTexture, animatedBelts);
    if (name === "VEGA") createAsteroidBelt(sysGroup, 2000, 5000, 10000, '#88aaff', asteroidTexture, animatedBelts);
    scene.add(sysGroup);
}
// Sirius
const siriusGroup = new THREE.Group();
siriusGroup.position.set(-500000, -200000, 300000);
scene.add(siriusGroup);
systemGroups.push(siriusGroup);
const siriusA = new THREE.Mesh(new THREE.SphereGeometry(1200, 32, 32), new THREE.MeshBasicMaterial({ color: 0x99ccff }));
siriusGroup.add(siriusA);
const sGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTexture, color: 0x99ccff, blending: THREE.AdditiveBlending }));
sGlow.scale.set(18000, 18000, 1);
siriusGroup.add(sGlow);
addSystemDetails(siriusGroup, 0x99ccff, starTexture, animatedBelts);
const siriusB = new THREE.Mesh(new THREE.SphereGeometry(300, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffffff }));
siriusB.position.set(8000, 500, 0);
siriusGroup.add(siriusB);
const sGlowB = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTexture, color: 0xffffff, blending: THREE.AdditiveBlending }));
sGlowB.scale.set(4000, 4000, 1);
siriusB.add(sGlowB);
addStarLight({ x: -500000, y: -200000, z: 300000 }, 0x99ccff, 2);
planetMeshes.push({ position: siriusGroup.position, userData: { name: "SIRIUS", isSystem: true, glow: sGlow, baseScale: 18000 } });

createSystem("PROXIMA", 0xff0000, 600000, 150000, -400000);
createSystem("TRAPPIST-1", 0xff5500, 300000, -400000, -100000);
createSystem("VEGA", 0x4488ff, -200000, 300000, -600000);
createSystem("KEPLER-186", 0xffaa55, 800000, -100000, 500000);
createSystem("ZARMINA", 0x55ff55, -500000, 500000, 100000);
createSystem("ANTARES", 0xff3300, 100000, 800000, -200000);

// Initial Camera
camera.position.set(0, 5000, 55000);
camera.lookAt(new THREE.Vector3(0, 0, 0));

const hudElements = {
    compassTape: document.getElementById('compass-tape'),
    hudCoords: document.getElementById('hud-coords'),
    hudSpeed: document.getElementById('hud-speed'),
    hudTarget: document.getElementById('hud-target'),
    hudDist: document.getElementById('hud-dist'),
    steeringHandle: document.getElementById('steering-handle'),
    blipHome: document.getElementById('radar-blip-home'),
    blipTarget: document.getElementById('radar-blip-target')
};

function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    const time = Date.now() * 0.001;
    const globalPulse = 1.0 + Math.sin(time * 3) * 0.2;

    // Controls Logic
    let inputX = mouse.x;
    let inputY = mouse.y;
    if (Math.abs(inputX) < 0.05) inputX = 0;
    if (Math.abs(inputY) < 0.05) inputY = 0;

    smoothedMouse.x = THREE.MathUtils.lerp(smoothedMouse.x, inputX, delta * 4.0);
    smoothedMouse.y = THREE.MathUtils.lerp(smoothedMouse.y, inputY, delta * 4.0);

    euler.setFromQuaternion(camera.quaternion);
    euler.y -= smoothedMouse.x * 0.8 * delta;
    euler.x += smoothedMouse.y * 0.8 * delta;
    euler.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, euler.x));
    camera.quaternion.setFromEuler(euler);
    camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, -smoothedMouse.x * 0.4, 3.0 * delta);

    if (keys.w) speed += 1000;
    if (keys.s) speed -= 1000;
    speed *= friction;
    if (Math.abs(speed) < 1) speed = 0;
    camera.translateZ(-speed * delta);

    // Infinite Background
    const range = 100000;
    dustSystem.position.x = Math.floor(camera.position.x / range) * range;
    dustSystem.position.y = Math.floor(camera.position.y / range) * range;
    dustSystem.position.z = Math.floor(camera.position.z / range) * range;

    // Shader Uniforms
    bhMaterial.uniforms.iTime.value = time;
    bhMaterial.uniforms.cameraPos.value.copy(camera.position);

    // Planet/Glow Animation
    planetMeshes.forEach(mesh => {
        if (mesh.userData.type === 'planet') {
            mesh.userData.angle += mesh.userData.speed * delta * 0.1;
            mesh.position.x = Math.cos(mesh.userData.angle) * mesh.userData.distance;
            mesh.position.z = Math.sin(mesh.userData.angle) * mesh.userData.distance;
            mesh.rotation.y += mesh.userData.rotSpeed * delta;
        }
        if (mesh.userData.isSystem && mesh.userData.glow) {
            const dist = camera.position.distanceTo(mesh.position);
            let scaleFactor = 50000 / Math.max(dist, 10000);
            scaleFactor = Math.min(Math.max(scaleFactor, 0.05), 1.0);
            if (dist > 200000) scaleFactor = Math.max(scaleFactor, 0.15);
            const finalScale = mesh.userData.baseScale * scaleFactor * globalPulse;
            mesh.userData.glow.scale.set(finalScale, finalScale, 1);
            mesh.userData.glow.material.opacity = Math.min(scaleFactor * 2.0, 0.3);
        }
    });

    systemGroups.forEach(group => group.rotation.y += 0.05 * delta);
    neutronGroup.rotation.y += 15 * delta;

    // Belts Animation
    animatedBelts.forEach(belt => {
        const { mesh, data } = belt;
        const dummy = new THREE.Object3D();
        for (let i = 0; i < data.length; i++) {
            const d = data[i];
            d.angle += d.speed * delta * 0.1;
            dummy.position.set(Math.cos(d.angle) * d.dist, d.y, Math.sin(d.angle) * d.dist);
            dummy.rotation.set(time * d.rotSpeed, time * d.rotSpeed, 0);
            dummy.scale.set((i % 3) + 0.5, (i % 3) + 0.5, (i % 3) + 0.5);
            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
        }
        mesh.instanceMatrix.needsUpdate = true;
    });

    // Final HUD Sync
    hudElements.steeringHandle.dataset.inputX = smoothedMouse.x;
    updateHUD(camera, euler, speed, planetMeshes, hudElements, globalPulse, delta);

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
