/**
 * Star Systems Registry
 * Central export point for all celestial objects
 */

// Import all classes for local use
import { BaseSystem } from './BaseSystem.js';
import { SolarSystem } from './SolarSystem.js';
import { SagittariusAStar } from './SagittariusAStar.js';
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

// Re-export for external use
export {
    BaseSystem,
    SolarSystem,
    SagittariusAStar,
    ProximaCentauri,
    SiriusBinary,
    Trappist1,
    Vega,
    Kepler22,
    CrabNebula,
    SpaceDebris,
    NebulaCloud,
    MilkyWayBand,
    Andromeda
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

        // === Galactic Center ===
        new SagittariusAStar(),

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
