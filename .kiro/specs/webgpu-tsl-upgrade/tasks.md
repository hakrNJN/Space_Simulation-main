# Implementation Plan: WebGPU/TSL Upgrade with Black Hole Integration

## Overview

This implementation plan breaks down the WebGPU/TSL migration into discrete, incremental steps. Each task builds on previous work, with testing integrated throughout to catch issues early. The plan follows three main phases: renderer infrastructure, material migration, and custom shader conversion.

## Tasks

- [x] 1. Set up WebGPU detection and renderer factory
  - Create `src/utils/rendererFactory.js` with WebGPU detection logic
  - Implement `createRenderer()` function that returns renderer and `isWebGPU` flag
  - Add WebGL fallback with console warnings
  - Handle async WebGPU initialization with try-catch
  - _Requirements: 1.1, 2.1, 2.2, 2.3_

- [x] 1.1 Write property test for WebGPU detection
  - **Property 3: WebGPU Detection Consistency**
  - **Validates: Requirements 2.1**

- [x] 1.2 Write property test for pixel ratio clamping
  - **Property 1: Renderer Pixel Ratio Clamping**
  - **Validates: Requirements 1.4**

- [x] 2. Integrate renderer factory into SpaceEngine
  - Modify `SpaceEngine.initScene()` to use `createRenderer()`
  - Store `isWebGPU` flag in SpaceEngine instance
  - Configure renderer settings (tone mapping, exposure, pixel ratio)
  - Update resize handler to work with both renderer types
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 2.1 Write property test for window resize updates
  - **Property 2: Window Resize Updates**
  - **Validates: Requirements 1.5**

- [x] 2.2 Write unit tests for renderer configuration
  - Test tone mapping settings
  - Test exposure value
  - Test pixel ratio configuration
  - _Requirements: 1.2, 1.3, 1.4_

- [x] 3. Create material adapter utility
  - Create `src/utils/materialAdapter.js`
  - Implement `adaptMaterial()` function for material conversion
  - Add conversion logic for MeshStandardMaterial → MeshStandardNodeMaterial
  - Add conversion logic for MeshBasicMaterial → MeshBasicNodeMaterial
  - Add conversion logic for PointsMaterial → PointsNodeMaterial
  - Add conversion logic for SpriteMaterial → SpriteNodeMaterial
  - Preserve all material properties (color, roughness, metalness, textures, etc.)
  - Handle materials that don't need conversion (return original for WebGL)
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_

- [x] 3.1 Write property test for material type conversion
  - **Property 5: Material Type Conversion**
  - **Validates: Requirements 3.1, 3.2, 3.3, 3.4**

- [x] 3.2 Write property test for texture preservation
  - **Property 6: Texture Compatibility Preservation**
  - **Validates: Requirements 3.5**

- [x] 3.3 Write property test for blending mode preservation
  - **Property 7: Blending Mode Preservation**
  - **Validates: Requirements 3.6, 10.2**

- [x] 3.4 Write property test for vertex color preservation
  - **Property 8: Vertex Color Preservation**
  - **Validates: Requirements 3.7**

- [x] 4. Checkpoint - Verify basic infrastructure
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Migrate SolarSystem materials
  - Update `SolarSystem.js` to use material adapter
  - Pass `this.engine.isWebGPU` flag to material creation
  - Convert planet materials (MeshStandardMaterial)
  - Convert sun material (MeshBasicMaterial)
  - Convert ring materials (MeshStandardMaterial with transparency)
  - Convert cloud materials (MeshStandardMaterial with transparency)
  - Convert asteroid belt materials (MeshStandardMaterial with instancing)
  - Test rendering with both WebGPU and WebGL
  - _Requirements: 3.1, 3.2, 3.5, 3.6, 9.1, 9.2, 10.3, 10.4_

- [x] 5.1 Write unit tests for SolarSystem material conversion
  - Test planet material conversion
  - Test ring transparency preservation
  - Test cloud transparency preservation
  - _Requirements: 3.1, 10.3, 10.4_

- [x] 6. Migrate particle systems
  - Update `SpaceEngine.initBackdrop()` to use material adapter
  - Convert star backdrop PointsMaterial
  - Convert dust layer PointsMaterial
  - Preserve additive blending for glow effects
  - Preserve vertex colors for star variety
  - Test particle rendering at various distances
  - _Requirements: 3.3, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

- [x] 6.1 Write property test for particle size scaling
  - **Property 11: Particle Size Scaling**
  - **Validates: Requirements 5.6**

- [x] 6.2 Write unit tests for particle system rendering
  - Test star backdrop particle count (8000)
  - Test dust particle count (5000)
  - Test additive blending preservation
  - Test depthWrite disabled
  - _Requirements: 5.1, 5.2, 5.3, 5.5_

- [x] 7. Migrate other star system materials
  - Update all star system classes (ProximaCentauri, Kepler22, Trappist1, etc.)
  - Convert star materials (MeshBasicMaterial with glow)
  - Convert planet materials in each system
  - Convert sprite halo materials (SpriteMaterial with additive blending)
  - Ensure point lights are configured correctly
  - _Requirements: 3.1, 3.2, 3.4, 6.1, 6.2, 6.4_

- [x] 7.1 Write property test for star system lighting
  - **Property 12: Star System Lighting**
  - **Validates: Requirements 6.2**

- [x] 7.2 Write unit tests for star system materials
  - Test sun point light configuration
  - Test sprite halo blending
  - Test ambient light preservation
  - _Requirements: 6.1, 6.4, 6.5_

- [x] 8. Migrate galaxy and nebula materials
  - Update Andromeda, MilkyWayBand, BackgroundGalaxies
  - Convert particle materials for galaxy arms
  - Convert nebula cloud materials
  - Preserve transparency and color gradients
  - Test LOD system with WebGPU
  - _Requirements: 3.3, 5.4, 11.4_

- [x] 8.1 Write property test for LOD distance scaling
  - **Property 23: LOD Distance Scaling**
  - **Validates: Requirements 11.4**

- [x] 9. Checkpoint - Verify all standard materials migrated
  - Ensure all tests pass, ask the user if questions arise.

- [x] 10. Create TSL black hole shader foundation
  - Create `src/shaders/tslBlackHole.js`
  - Import TSL node functions from 'three/nodes'
  - Create basic NodeMaterial structure
  - Implement vertex shader equivalent (world position, UV)
  - Set up uniforms (time, cameraPos, bhPos, resolution)
  - Test basic material creation and rendering
  - _Requirements: 4.2, 4.3, 7.1_

- [x] 10.1 Write unit test for TSL shader creation
  - Test NodeMaterial instantiation
  - Test uniform setup
  - Test shader compilation without errors
  - _Requirements: 4.4_

- [x] 11. Implement TSL noise functions
  - Port hash() function to TSL custom function node
  - Port noise() function to TSL custom function node
  - Port fbm() function to TSL custom function node
  - Port warp() function for domain warping
  - Test noise functions produce expected output
  - _Requirements: 4.3, 7.2_

- [x] 12. Implement TSL raymarching core
  - Create raymarchBlackHole() TSL function
  - Implement raymarching loop (unroll or use TSL loop constructs)
  - Implement gravitational lensing calculations
  - Implement event horizon detection
  - Test raymarching produces black hole silhouette
  - _Requirements: 4.3, 7.2, 7.5_

- [x] 12.1 Write property test for camera position updates
  - **Property 13: Black Hole Camera Position Updates**
  - **Validates: Requirements 7.5**

- [x] 13. Implement TSL accretion disk
  - Add volumetric disk sampling to raymarching
  - Implement radial fade (inner to outer)
  - Implement vertical fade (disk height)
  - Implement domain-warped noise for disk texture
  - Test disk renders with correct shape
  - _Requirements: 4.3, 7.3_

- [x] 14. Implement TSL Doppler beaming and color grading
  - Add Doppler shift calculations
  - Implement getDiskGradient() color function
  - Apply relativistic beaming (asymmetry)
  - Test disk shows color variation and brightness asymmetry
  - _Requirements: 4.3, 7.3_

- [x] 15. Implement TSL photon ring and glow
  - Add photon ring calculation (razor-sharp ring)
  - Add glow effect around event horizon
  - Test photon ring is visible
  - _Requirements: 4.3, 7.4_

- [x] 16. Implement TSL tone mapping
  - Add ACES tone mapping to fragment output
  - Adjust exposure based on camera distance
  - Test high dynamic range is handled correctly
  - _Requirements: 4.3, 7.7_

- [x] 16.1 Write unit test for visual parity
  - Compare TSL shader output to GLSL shader output
  - Verify key visual features are present
  - _Requirements: 4.5_

- [x] 17. Integrate TSL black hole into SagittariusAStar
  - Modify `SagittariusAStar.js` to detect renderer type
  - Use TSL shader for WebGPU, GLSL shader for WebGL
  - Update uniforms in update() method
  - Test black hole renders correctly with both renderers
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7_

- [x] 17.1 Write property test for black hole animation
  - **Property 14: Black Hole Animation**
  - **Validates: Requirements 7.6**

- [x] 17.2 Write unit tests for black hole integration
  - Test material type is correct for each renderer
  - Test uniforms are updated each frame
  - Test black hole is positioned at (0, 0, 0)
  - _Requirements: 7.1, 7.6_

- [x] 18. Checkpoint - Verify black hole shader complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 19. Implement texture compatibility tests
  - Test image texture loading with WebGPU
  - Test canvas texture creation with WebGPU
  - Test normal map application
  - Test texture rotation and UV mapping
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [x] 19.1 Write property tests for texture system
  - **Property 15: Texture Loading Compatibility**
  - **Property 16: Normal Map Application**
  - **Property 17: Canvas Texture Compatibility**
  - **Property 18: Texture Rotation and UV Preservation**
  - **Property 19: Texture Atlas Coordinates**
  - **Validates: Requirements 9.1, 9.2, 9.3, 9.4, 9.5**

- [x] 20. Implement transparency and blending tests
  - Test transparent object sorting
  - Test depth write settings
  - Test blending mode preservation
  - _Requirements: 10.1, 10.2, 10.5_

- [x] 20.1 Write property tests for transparency
  - **Property 20: Transparent Object Sorting**
  - **Property 21: Depth Write for Transparent Objects**
  - **Validates: Requirements 10.1, 10.5**

- [x] 21. Implement performance optimizations
  - Verify InstancedMesh is used for asteroid belts
  - Implement delta time clamping in animation loop
  - Test LOD system works with WebGPU
  - Measure and log FPS
  - _Requirements: 11.1, 11.2, 11.3, 11.4_

- [x] 21.1 Write property test for delta time clamping
  - **Property 22: Delta Time Clamping**
  - **Validates: Requirements 11.3**

- [x] 21.2 Write unit tests for performance
  - Test InstancedMesh usage
  - Test FPS meets minimum 30 FPS
  - _Requirements: 11.1, 11.2_

- [x] 22. Verify UI compatibility
  - Test CockpitUI renders with WebGPU
  - Test UI displays correct data (speed, altitude, heading, position)
  - Test nearest system calculation
  - Test nearby systems filtering
  - Test UI overlays correctly without z-fighting
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_

- [x] 22.1 Write property tests for UI
  - **Property 24: Nearest System Calculation**
  - **Property 25: Nearby Systems Filtering**
  - **Validates: Requirements 12.2, 12.3**

- [x] 22.2 Write unit tests for UI rendering
  - Test UI displays all required data
  - Test UI renders on top of 3D scene
  - Test React and WebGPU work together
  - _Requirements: 12.1, 12.4, 12.5_

- [x] 23. Verify camera and navigation
  - Test mouse drag steering with WebGPU
  - Test keyboard controls (W, S, Shift)
  - Test touch input on mobile
  - Test quaternion-based rotation
  - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6_

- [x] 23.1 Write property tests for camera controls
  - **Property 26: Camera Drag Rotation**
  - **Property 27: Forward Acceleration**
  - **Property 28: Deceleration**
  - **Property 29: Touch Input Steering**
  - **Validates: Requirements 13.1, 13.2, 13.3, 13.6**

- [x] 23.2 Write unit tests for navigation
  - Test Shift key speed multiplier
  - Test quaternion-based movement
  - _Requirements: 13.4, 13.5_

- [x] 24. Verify scene object preservation
  - Test all star systems load correctly
  - Test all targetable objects are created
  - Test constellations render
  - Test orbital paths render
  - Test space debris renders
  - Test scene graph hierarchies are preserved
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6_

- [x] 24.1 Write property tests for scene objects
  - **Property 30: Targetable Object Creation**
  - **Property 31: Scene Graph Preservation**
  - **Validates: Requirements 14.2, 14.6**

- [x] 24.2 Write unit tests for scene objects
  - Test all systems load from registry
  - Test constellations render
  - Test orbital paths render
  - Test space debris renders
  - _Requirements: 14.1, 14.3, 14.4, 14.5_

- [x] 25. Verify fog and atmospheric effects
  - Test fog configuration (density, color)
  - Test fog works in TSL shaders
  - Test distant objects fade into fog
  - Test fog toggle functionality
  - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5_

- [x] 25.1 Write property test for fog distance fading
  - **Property 32: Fog Distance Fading**
  - **Validates: Requirements 15.4**

- [x] 25.2 Write unit tests for fog
  - Test fog density and color settings
  - Test fog in custom shaders
  - Test fog toggle
  - _Requirements: 15.1, 15.2, 15.3, 15.5_

- [ ] 26. Optional: Evaluate singularity repository
  - Clone https://github.com/MisterPrada/singularity.git
  - Analyze implementation for WebGPU compatibility
  - Compare visual quality to existing implementation
  - Document findings and recommendation
  - If superior, plan integration; otherwise retain existing
  - _Requirements: 8.1, 8.2, 8.6_

- [x] 27. Final checkpoint - Complete integration test
  - Run full simulation with WebGPU
  - Run full simulation with WebGL fallback
  - Verify all visual features are present
  - Verify performance meets requirements
  - Verify no console errors
  - Ensure all tests pass, ask the user if questions arise.

- [x] 27.1 Write visual regression test
  - Capture reference frames from WebGL version
  - Capture frames from WebGPU version
  - Compare for visual parity
  - _Requirements: 16.6_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- The singularity repository evaluation (task 26) is optional and can be done after core migration
- TSL shader implementation (tasks 10-17) is the most complex and may require iteration

