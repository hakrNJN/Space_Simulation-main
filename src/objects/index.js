/**
 * Star Systems Registry
 * Central export point for all celestial objects
 */

// Import all classes for local use
import { BaseSystem } from './BaseSystem.js';
import { SolarSystem } from './SolarSystem.js';
import { SagittariusAStar } from './Gargantua.js';
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
export const SYSTEM_POSITIONS = {
    // === Galactic Center ===
    SGR_A_STAR: { x: 0, y: 0, z: 0 },

    // === Solar neighborhood (Orion Spur) ===
    SOLAR: { x: 250000, y: 0, z: 120000 },
    PROXIMA: { x: 300000, y: 800, z: 140000 },     // Pushed 50K+ away — visible as separate system
    SIRIUS: { x: 320000, y: -500, z: 90000 },      // Pushed 80K+ away — distinct blue-white star

    // === Distributed across the galaxy ===
    VEGA: { x: 280000, y: 600, z: 200000 },        // 25 ly — Sagittarius arm region
    TRAPPIST: { x: -150000, y: 400, z: -250000 },  // 40 ly — far side, Scutum arm
    KEPLER22: { x: 400000, y: -500, z: -100000 },  // 638 ly — Perseus arm outer
    CRAB_NEBULA: { x: -100000, y: 2000, z: 350000 }, // 6500 ly — Sagittarius arm

    // === External galaxy ===
    ANDROMEDA: { x: 3000000, y: 900000, z: -2500000 }
};

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
