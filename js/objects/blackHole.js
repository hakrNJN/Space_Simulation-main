export const bhPos = new THREE.Vector3(-5000000, 1000000, 5000000);

const bhVertexShader = `
    varying vec3 vWorldPosition;
    void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
`;

const bhFragmentShader = `
    uniform float iTime;
    uniform vec3 cameraPos;
    uniform vec3 bhPos;
    varying vec3 vWorldPosition;

    #define MAX_STEPS 180
    #define BH_RADIUS 1.5
    #define DISK_INNER 2.2
    #define DISK_OUTER 22.0
    #define DISK_HEIGHT 0.4 

    float hash(vec3 p) {
        p = fract(p * 0.3183099 + .1);
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
    }

    float noise(in vec3 x) {
        vec3 i = floor(x);
        vec3 f = fract(x);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
                    mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                    mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
    }

    float fbm(vec3 p) {
        float v = 0.0;
        float a = 0.5;
        vec3 shift = vec3(100.0);
        for (int i = 0; i < 5; ++i) {
            v += a * noise(p);
            p = p * 2.0 + shift;
            a *= 0.5;
        }
        return v;
    }

    vec3 getDiskColor(float intensity, float temp) {
        vec3 colorLow = vec3(0.5, 0.1, 0.01); 
        vec3 colorMid = vec3(1.0, 0.6, 0.2); 
        vec3 colorHigh = vec3(1.2, 1.1, 1.0); 
        float t = smoothstep(0.0, 1.2, temp);
        vec3 col = mix(colorLow, colorMid, t);
        col = mix(col, colorHigh, smoothstep(0.6, 2.0, temp));
        return col * intensity * 5.0;
    }

    void main() {
        vec3 ro = cameraPos;
        vec3 rd = normalize(vWorldPosition - ro);
        vec3 pos = ro - bhPos; 
        float scale = 1.0 / 2000.0; 
        pos *= scale;

        vec3 col = vec3(0.0);
        float accumulatedAlpha = 0.0;
        
        for(int i = 0; i < MAX_STEPS; i++) {
            float distToCenter = length(pos);
            float bendStrength = 0.45; 
            vec3 toCenter = normalize(-pos);
            float grav = bendStrength / (distToCenter * distToCenter + 0.02); 
            rd = normalize(rd + toCenter * grav);
            
            float stepSize = max(0.015, distToCenter * 0.04); 
            if (distToCenter < BH_RADIUS * 2.5) stepSize = 0.015; 
            pos += rd * stepSize;

            float distToPlane = abs(pos.y);
            if(distToPlane < DISK_HEIGHT * 6.0 && distToCenter > DISK_INNER && distToCenter < DISK_OUTER) {
                float radialFade = smoothstep(DISK_INNER, DISK_INNER + 0.5, distToCenter) * (1.0 - smoothstep(DISK_OUTER - 4.0, DISK_OUTER, distToCenter));
                float angle = atan(pos.z, pos.x);
                float rotSpeed = 8.0 / (distToCenter + 0.1);
                float animAngle = angle + iTime * rotSpeed;
                vec3 noisePos = vec3(cos(animAngle)*distToCenter, sin(animAngle)*distToCenter, pos.y * 3.0);
                float dens = fbm(noisePos * 2.0); 
                float verticalFade = exp(-pow(distToPlane / (DISK_HEIGHT), 2.0));
                float intensity = dens * radialFade * verticalFade;
                
                if (intensity > 0.01) {
                    float temp = intensity * 1.8;
                    vec3 pCol = getDiskColor(intensity, temp);
                    float absorption = 0.4 * intensity; 
                    col += pCol * absorption * (1.0 - accumulatedAlpha);
                    accumulatedAlpha += absorption;
                }
            }
            if(distToCenter < BH_RADIUS) {
                accumulatedAlpha = 1.0; 
                col = vec3(0.0);
                break;
            }
            if(accumulatedAlpha >= 1.0) break;
        }
        gl_FragColor = vec4(col, min(accumulatedAlpha, 1.0));
    }
`;

export function createBlackHole(bhGroup) {
    const bhMaterial = new THREE.ShaderMaterial({
        vertexShader: bhVertexShader,
        fragmentShader: bhFragmentShader,
        uniforms: {
            iTime: { value: 0 },
            cameraPos: { value: new THREE.Vector3() },
            bhPos: { value: bhPos }
        },
        transparent: true,
        blending: THREE.NormalBlending,
        side: THREE.BackSide
    });

    const bhMesh = new THREE.Mesh(new THREE.BoxGeometry(200000, 200000, 200000), bhMaterial);
    bhGroup.add(bhMesh);
    return bhMaterial;
}
