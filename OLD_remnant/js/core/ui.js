export function initUI(compassTape) {
    for (let i = 0; i < 360; i += 5) {
        const div = document.createElement('div');
        div.className = i % 45 === 0 ? 'tick major' : 'tick';
        div.innerHTML = i % 45 === 0 ? `<span>${i}</span>` : '';
        compassTape.appendChild(div);
    }
    compassTape.innerHTML += compassTape.innerHTML;
}

export function updateHUD(camera, euler, speed, planetMeshes, hudElements, globalPulse, delta) {
    const {
        compassTape, hudCoords, hudSpeed, hudTarget, hudDist, steeringHandle, blipHome, blipTarget
    } = hudElements;

    // Compass
    let heading = THREE.MathUtils.radToDeg(euler.y);
    heading = (heading % 360 + 360) % 360;
    const tapeOffset = heading * 8;
    compassTape.style.transform = `translateX(-${tapeOffset}px)`;

    // Coords & Speed
    hudCoords.innerText = `${camera.position.x.toFixed(0)}, ${camera.position.y.toFixed(0)}, ${camera.position.z.toFixed(0)}`;
    hudSpeed.innerHTML = `${Math.abs(speed).toFixed(0)}`;

    // Nearest Object Logic
    let nearestDist = Infinity;
    let nearestName = "None";
    let nearestPos = null;

    planetMeshes.forEach(obj => {
        const worldPos = new THREE.Vector3();
        if (obj.isMesh || obj.isGroup) {
            worldPos.copy(obj.position);
            if (obj.parent && obj.parent.matrixWorld) worldPos.applyMatrix4(obj.parent.matrixWorld);
        } else {
            worldPos.copy(obj.position);
        }

        const dist = camera.position.distanceTo(worldPos);
        if (dist < nearestDist) {
            nearestDist = dist;
            nearestName = obj.userData.name;
            nearestPos = worldPos;
        }
    });

    hudTarget.innerText = nearestName;
    hudDist.innerText = (nearestDist / 1000).toFixed(2);

    // Radar Blips
    updateBlip(blipHome, new THREE.Vector3(0, 0, 0), camera, globalPulse, false);
    if (nearestPos) updateBlip(blipTarget, nearestPos, camera, globalPulse, true);
    else blipTarget.style.opacity = 0;

    // Steering Visuals
    const steerAngle = THREE.MathUtils.lerp(0, (steeringHandle.dataset.inputX || 0) * 45, 1); // This will be updated from main.js
    steeringHandle.style.transform = `rotate(${steerAngle}deg)`;
}

function updateBlip(blipEl, targetPos, camera, globalPulse, isTarget) {
    if (!targetPos) { blipEl.style.opacity = 0; return; }
    const relPos = new THREE.Vector3().subVectors(targetPos, camera.position);
    relPos.applyQuaternion(camera.quaternion.clone().invert());

    const angle = Math.atan2(relPos.x, -relPos.z);
    let distFactor = relPos.length() / 100000;
    distFactor = Math.min(distFactor, 1);
    if (relPos.length() < 5000) distFactor = relPos.length() / 5000 * 0.2;

    const rx = Math.sin(angle) * distFactor;
    const ry = -Math.cos(angle) * distFactor;

    blipEl.style.left = `${60 + rx * 50}px`;
    blipEl.style.top = `${60 + ry * 50}px`;

    if (isTarget) {
        blipEl.style.opacity = (relPos.z > 0 ? 0.4 : 1) * globalPulse;
        blipEl.style.transform = `translate(-50%, -50%) scale(${globalPulse})`;
    } else {
        blipEl.style.opacity = relPos.z > 0 ? 0.4 : 1;
    }
}
