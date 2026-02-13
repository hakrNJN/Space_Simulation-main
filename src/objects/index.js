/**
 * Star Systems Registry
 * Central export point for all celestial objects
 */

// Import all classes for local use
import { BaseSystem } from './BaseSystem.js';
import { SolarSystem } from './SolarSystem.js';
import { SagittariusAStar } from './SagittariusAStar.js';
import { SingularityBlackHole } from './SingularityBlackHole.js';
import { ProximaCentauri } from './ProximaCentauri.js';
import { SiriusBinary } from './SiriusBinary.js';
import { Trappist1 } from './Trappist1.js';
import { Vega } from './Vega.js';
import { Kepler22 } from './Kepler22.js';
import { CrabNebula } from './CrabNebula.js';
import { SpaceDebris } from './SpaceDebris.js';
import { NebulaCloud } from './NebulaCloud.js';
import { MilkyWayBand } from './MilkyWayBand.js';
import { Andromeda } from './Andromeda.js';
import { Constellations } from './Constellations.js';
import { BackgroundGalaxies } from './BackgroundGalaxies.js';
import { DeepSpaceObjects } from './DeepSpaceObjects.js';
// import { GalaxyDistanceLOD as GalaxyDistanceLOD_V6 } from './GalaxyDistanceLOD_V6.js';
// import { GalaxyDistanceLOD } from './GalaxyDistanceLOD.js'; // V1 (Stable)
// import { GalaxyDistanceLOD as GalaxyDistanceLOD_V2 } from './GalaxyDistanceLOD_V2.js'; // V2 (Laggy)
import { GalaxyDistanceLOD as GalaxyDistanceLOD_V3 } from './GalaxyDistanceLOD_V3.js'; // V3 (Performance/Sparse) - ACTIVE
// import { GalaxyDistanceLOD as GalaxyDistanceLOD_V4 } from './GalaxyDistanceLOD_V4.js'; // V4 (Hardware Limit)
// import { GalaxyDistanceLOD as GalaxyDistanceLOD_V5 } from './GalaxyDistanceLOD_V5.js'; // V5 (Device Hung)
// import { GalaxyDistanceLOD as GalaxyDistanceLOD_V7 } from './GalaxyDistanceLOD_V7.js'; // V7 (Failed)
// import { GalaxyDistanceLOD as GalaxyDistanceLOD_V8 } from './GalaxyDistanceLOD_V8.js'; // V8 (Failed)

const GalaxyDistanceLOD = GalaxyDistanceLOD_V3; // Alias for export

// Re-export for external use
export {
    BaseSystem,
    SolarSystem,
    SagittariusAStar,
    SingularityBlackHole,
    ProximaCentauri,
    SiriusBinary,
    Trappist1,
    Vega,
    Kepler22,
    CrabNebula,
    SpaceDebris,
    NebulaCloud,
    MilkyWayBand,
    Andromeda,
    Constellations,
    BackgroundGalaxies,
    DeepSpaceObjects,
    GalaxyDistanceLOD
};

/**
 * System positions — Milky Way galactic disk + Andromeda
 *
 * GALACTIC CENTER: Sagittarius A* (supermassive black hole)
 * ORION SPUR: Solar System (~250K units from center)
 * Other MW systems scattered on the galactic plane
 * EXTERNAL: Andromeda (M31)
 */
import { SYSTEM_POSITIONS } from './SystemPositions.js';
export { SYSTEM_POSITIONS };

/**
 * Create all systems and return them as an array
 */
export function createAllSystems() {
    return [
        // === Milky Way Galaxy Structure ===
        new MilkyWayBand(),
        new Constellations(),     // Star patterns (Inner & Outer)
        new BackgroundGalaxies(), // 6 Alien Galaxy Types
        new DeepSpaceObjects(),   // God's Hand Nebula, Globular Clusters
        new GalaxyDistanceLOD(),  // Heavy Density Layer (Visible at Distance)

        // === Galactic Center ===
        new SingularityBlackHole(), // Sagittarius A* black hole

        // === Star Systems (Milky Way disk) ===
        new SolarSystem(),
        new ProximaCentauri(),
        new SiriusBinary(),
        new Trappist1(),
        new Vega(),
        new Kepler22(),
        new CrabNebula(),

        // === External Galaxy ===
        new Andromeda(),

        // === Environmental ===
        new SpaceDebris(),
        new NebulaCloud()
    ];
}
