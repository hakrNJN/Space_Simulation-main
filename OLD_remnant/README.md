# OLD Remnant Files

This directory contains unused legacy files that are not part of the current application.

## Contents

### `/js` - Legacy JavaScript Files (UNUSED)
- **Status**: Not used by current application
- **Reason**: Application now uses `src/` directory with React/Vite structure
- **Contents**:
  - `js/main.js` - Old entry point (replaced by `src/main.jsx`)
  - `js/objects/crabNebula.js` - Old Crab Nebula implementation (replaced by `src/objects/CrabNebula.js`)
  - `js/objects/galaxy.js` - Old galaxy implementation
  - `js/objects/solarSystem.js` - Old solar system implementation
  - `js/core/` - Old core modules (scene, input, UI, LOD)
  - `js/utils/` - Old utility modules (renderer detector, texture utils)

### `/css` - Legacy CSS Files (UNUSED)
- **Status**: Not used by current application
- **Reason**: Application now uses `src/index.css` and component-level styling
- **Contents**:
  - `css/style.css` - Old stylesheet

### `/_legacy` - Empty Legacy Directory
- **Status**: Empty directory from previous cleanup

### `/temp_singularity` - Temporary Singularity Files
- **Status**: Temporary files, likely from development/testing

### Temp JSON Files
- `temp_img_list.json` - Temporary image list
- `temp_texture_list.json` - Temporary texture list

## Current Application Structure

The active application uses:
- **Entry Point**: `index.html` → `src/main.jsx`
- **Components**: `src/components/`
- **Game Logic**: `src/game/SpaceEngine.js`
- **Objects**: `src/objects/` (CrabNebula.js, etc.)
- **Utils**: `src/utils/`
- **Styles**: `src/index.css`

## Safe to Delete?

Yes, this entire directory can be safely deleted if you want to clean up the project. All functionality has been migrated to the `src/` directory structure.

---
*Created: February 14, 2026*
*Reason: Cleanup of unused legacy files during Crab Nebula enhancement task*
