export const SYSTEM_POSITIONS = {
    // === Galactic Center ===
    SGR_A_STAR: { x: 0, y: 0, z: 0 },

    // === Solar neighborhood (Orion Spur) ===
    SOLAR: { x: 1300000, y: 0, z: 1800000 }, // Outer Arm (~2.2M distance)
    PROXIMA: { x: 1096875, y: 14062, z: 1406250 },
    SIRIUS: { x: 562500, y: -16875, z: 871875 },

    // === Distributed across the galaxy ===
    VEGA: { x: 1575000, y: 3375, z: 1125000 },
    TRAPPIST: { x: -843750, y: 2250, z: -1406250 },
    KEPLER22: { x: 2250000, y: -2812, z: -562500 },

    // Moved specifically to avoid center
    CRAB_NEBULA: { x: -750000, y: 11250, z: 2250000 },

    // === External galaxy ===
    // Pushed further out
    ANDROMEDA: { x: 15000000, y: 4500000, z: -12000000 }
};
