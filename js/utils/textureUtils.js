export function createNoiseTexture(type, color1, color2) {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const idata = ctx.createImageData(size, size);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const c1 = new THREE.Color(color1);
    const c2 = new THREE.Color(color2);

    for (let i = 0; i < buffer32.length; i++) {
        const noise = Math.random();
        let r, g, b;

        if (type === 'asteroid') {
            const n = Math.random();
            const mix = n > 0.6 ? 0.3 : (n < 0.2 ? 0.8 : 0.5);
            r = c1.r * mix + c2.r * (1 - mix);
            g = c1.g * mix + c2.g * (1 - mix);
            b = c1.b * mix + c2.b * (1 - mix);
        } else if (type === 'gas') {
            const y = Math.floor(i / size);
            const band = Math.sin(y * 0.05) * 0.5 + 0.5;
            const mix = band * noise;
            r = c1.r * mix + c2.r * (1 - mix);
            g = c1.g * mix + c2.g * (1 - mix);
            b = c1.b * mix + c2.b * (1 - mix);
        } else {
            const mix = noise;
            r = c1.r * mix + c2.r * (1 - mix);
            g = c1.g * mix + c2.g * (1 - mix);
            b = c1.b * mix + c2.b * (1 - mix);
        }
        buffer32[i] = (255 << 24) | ((b * 255) << 16) | ((g * 255) << 8) | ((r * 255));
    }
    ctx.putImageData(idata, 0, 0);
    return new THREE.CanvasTexture(canvas);
}

export function createStarTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'white');
    grad.addColorStop(0.4, 'rgba(255,255,255,0.8)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
}

// Very soft cloud texture for nebulae - creates a smooth gaussian-like blur
export function createCloudTexture() {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Create a very soft radial gradient - gaussian-like falloff
    const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.1, 'rgba(255,255,255,0.8)');
    grad.addColorStop(0.3, 'rgba(255,255,255,0.4)');
    grad.addColorStop(0.5, 'rgba(255,255,255,0.15)');
    grad.addColorStop(0.7, 'rgba(255,255,255,0.05)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    return new THREE.CanvasTexture(canvas);
}

