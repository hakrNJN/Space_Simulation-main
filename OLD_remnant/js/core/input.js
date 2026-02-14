export const keys = { w: false, s: false };
export const mouse = { x: 0, y: 0 };
export const drag = { active: false, x: 0, y: 0, startX: 0, startY: 0 };
export const smoothedMouse = { x: 0, y: 0 };

export function initInput() {
    window.addEventListener('keydown', e => {
        if (e.key.toLowerCase() === 'w') keys.w = true;
        if (e.key.toLowerCase() === 's') keys.s = true;
    });

    window.addEventListener('keyup', e => {
        if (e.key.toLowerCase() === 'w') keys.w = false;
        if (e.key.toLowerCase() === 's') keys.s = false;
    });

    document.addEventListener('mousemove', e => {
        if (!drag.active) {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        }
    });

    const btnWarp = document.getElementById('btn-warp');
    const btnBrake = document.getElementById('btn-brake');

    btnWarp.addEventListener('touchstart', (e) => { e.preventDefault(); keys.w = true; });
    btnWarp.addEventListener('touchend', (e) => { e.preventDefault(); keys.w = false; });
    btnBrake.addEventListener('touchstart', (e) => { e.preventDefault(); keys.s = true; });
    btnBrake.addEventListener('touchend', (e) => { e.preventDefault(); keys.s = false; });

    document.addEventListener('touchstart', e => {
        if (e.target.className !== 'touch-btn') {
            drag.active = true;
            drag.startX = e.touches[0].clientX;
            drag.startY = e.touches[0].clientY;
        }
    }, { passive: false });

    document.addEventListener('touchmove', e => {
        if (drag.active) {
            e.preventDefault();
            const dx = e.touches[0].clientX - drag.startX;
            const dy = e.touches[0].clientY - drag.startY;
            mouse.x = THREE.MathUtils.clamp(dx / 100, -1, 1);
            mouse.y = THREE.MathUtils.clamp(-dy / 100, -1, 1);
        }
    }, { passive: false });

    const endDrag = () => { drag.active = false; mouse.x = 0; mouse.y = 0; };
    document.addEventListener('touchend', endDrag);
    document.addEventListener('touchcancel', endDrag);
}
