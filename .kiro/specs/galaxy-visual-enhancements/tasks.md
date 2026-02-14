# Implementation Tasks: Galaxy Visual Enhancements
# Implementation Tasks: Galaxy Visual Enhancements

## Phase 1: Renderer Detection & Setup

- [x] 1.1 Create RendererDetector utility class
  - Create `js/utils/rendererDetector.js`
  - Implement constructor accepting renderer parameter
  - Implement `detectRenderer()` method to identify WebGPU vs WebGL
  - Implement `isWebGPU()` and `isWebGL()` helper methods
  - Implement `logRendererInfo()` to log renderer type with emoji to console
  - Implement `displayRendererInUI()` method for optional HUD display
  - Add error handling for detection failures

- [x] 1.2 Integrate RendererDetector in main.js
  - Import RendererDetector class
  - Initialize after renderer creation
  - Store result as global/static property for access by other modules
  - Test console logging output

## Phase 2: LOD System Foundation

- [x] 2.1 Create GalaxyLODSystem class
  - Create `js/core/galaxyLOD.js`
  - Implement constructor accepting galaxyGroup and camera
  - Add properties for particle system, cloud system, and spiral structure references
  - Implement `calculateDistance()` method using world position
  - Implement smoothstep and lerp utility functions
  - Implement `calculateBlendFactors()` with all distance thresholds
  - Add error handling for missing systems

- [x] 2.2 Implement LOD update methods
  - Implement `updateParticleOpacity()` method
  - Implement `updateCloudOpacity()` method
  - Implement `updateSpiralVisibility()` method with traverse
  - Implement main `update()` method coordinating all updates
  - Add visibility toggling based on opacity thresholds

- [x] 2.3 Integrate LOD system with galaxy
  - Modify `js/objects/galaxy.js` to accept LOD system
  - Pass references to particle, cloud, and spiral systems
  - Add LOD update call in main animation loop
  - Test distance calculation accuracy
  - Verify blend factor calculations at different distances

## Phase 3: Volumetric Cloud System

- [x] 3.1 Load and prepare textures
  - Verify nebula.png exists in public/textures
  - Verify noise_deep.png exists in public/textures
  - Add texture loading in galaxy.js or textureUtils.js
  - Configure texture parameters (wrapping, filtering)
  - Add error handling for texture loading failures

- [x] 3.2 Create cloud particle system
  - Implement `createCloudParticles()` method in galaxy.js
  - Generate 40,000 particle positions along spiral arms
  - Calculate particle colors (purple/blue in arms, orange/pink in core)
  - Generate varying particle sizes (3000-8000 units)
  - Create BufferGeometry with position, color, and size attributes

- [x] 3.3 Configure cloud material and rendering
  - Create PointsMaterial with nebula texture
  - Set vertexColors, transparent, and additive blending
  - Set initial opacity to 0.0 (invisible)
  - Disable depthWrite for performance
  - Add cloud system to galaxy group
  - Test cloud visibility at mid-outer distances

## Phase 4: Spiral Structure Enhancement

- [x] 4.1 Create spiral arm structure
  - Implement `createSpiralStructure()` method in galaxy.js
  - Generate 4 spiral arms with 15,000 particles each
  - Implement logarithmic spiral algorithm
  - Apply color gradients (yellow-orange core → blue-white arms)
  - Create BufferGeometry and PointsMaterial for each arm
  - Add all arms to spiral structure group

- [x] 4.2 Create dust lane system
  - Generate 10,000 dust particles between spiral arms
  - Position particles with armOffset calculation
  - Apply dark brown/black colors
  - Create BufferGeometry and PointsMaterial
  - Use NormalBlending instead of AdditiveBlending
  - Add dust system to spiral structure group

- [x] 4.3 Integrate spiral structure with LOD
  - Add spiral structure group to galaxy
  - Set initial opacity to 0.0 (invisible)
  - Connect to LOD system for visibility control
  - Test spiral structure appearance at outer distances
  - Verify color gradients and dust lanes visible

## Phase 5: Sagittarius A* Black Hole

- [ ] 5.1 Port black hole code from singularity
  - Review singularity/src/Experience/Worlds/MainWorld/BlackHole.js
  - Review singularity TSL utilities (curlNoise, simplexNoise, etc.)
  - Create `js/objects/sagittariusA.js`
  - Port core black hole structure and uniforms
  - Adapt code to work with existing codebase structure

- [ ] 5.2 Implement TSL material for WebGPU
  - Import TSL functions from three/tsl
  - Implement `createTSLMaterial()` method
  - Port raymarching shader logic
  - Implement gravity steering and accretion disk
  - Configure color ramp uniforms
  - Add noise texture sampling
  - Test WebGPU rendering

- [ ] 5.3 Implement GLSL fallback for WebGL
  - Implement `createGLSLMaterial()` method
  - Create simplified vertex shader
  - Create simplified fragment shader with disk rendering
  - Implement animated spiral pattern
  - Configure uniforms for WebGL compatibility
  - Test WebGL rendering

- [ ] 5.4 Integrate black hole with scene
  - Create SagittariusABlackHole instance in main.js
  - Position at galaxy center (0, 0, 0 in local space)
  - Set mesh radius to 50,000 units
  - Set render order to 999
  - Disable frustum culling
  - Add to galaxy group
  - Implement `update()` method with time uniforms

- [ ] 5.5 Add black hole to navigation system
  - Add black hole to planetMeshes array
  - Set name as "Sagittarius A*"
  - Set type as "Black Hole"
  - Test navigation targeting
  - Verify camera approach behavior
  - Add minimum distance constraint

## Phase 6: Enhanced Crab Nebula

- [x] 6.1 Create filament particle system
  - Modify `js/objects/crabNebula.js`
  - Implement `createFilaments()` method
  - Generate 5,000 particles in irregular explosion pattern
  - Use spherical coordinates with noise variation
  - Apply red/orange colors (HSL: 0.0-0.1)
  - Set particle sizes 2000-4000 units
  - Create PointsMaterial with nebula texture and additive blending

- [ ] 6.2 Create interior particle system
  - Implement `createInterior()` method
  - Generate 3,000 particles in denser core
  - Use smaller radius (50% of filaments)
  - Apply blue colors (HSL: 0.55-0.65) for synchrotron radiation
  - Set particle sizes 1500-3000 units
  - Create PointsMaterial with higher opacity

- [ ] 6.3 Enhance pulsar with jets
  - Modify existing pulsar sprite
  - Create two jet sprites extending along Y-axis
  - Add rotation animation
  - Implement pulsing glow effect
  - Position jets correctly relative to pulsar
  - Test animation and visual appearance

- [ ] 6.4 Integrate enhanced nebula
  - Add filaments and interior to nebula container
  - Position at (600000, -10000, 600000) in world space
  - Test navigation to Crab Nebula
  - Verify filamentary structure visible
  - Verify color distinction between filaments and interior

## Phase 7: Integration & Testing

- [ ] 7.1 Test LOD transitions
  - Test inner view (< 75k): only particles visible
  - Test transition 1 (75k-125k): smooth particles → clouds fade
  - Test mid-outer view (125k-450k): clouds visible, particles dim
  - Test transition 2 (450k-550k): smooth clouds → full structure fade
  - Test outer view (> 550k): full spiral galaxy visible
  - Verify no popping or sudden changes

- [ ] 7.2 Test renderer compatibility
  - Test with WebGPU renderer (if available)
  - Test with WebGL renderer fallback
  - Verify black hole TSL material works in WebGPU
  - Verify black hole GLSL material works in WebGL
  - Check console for renderer detection log
  - Verify no errors in either renderer

- [ ] 7.3 Test navigation and targeting
  - Test navigation to "GALACTIC CENTER"
  - Test navigation to "BLACK HOLE" (Sagittarius A*)
  - Test navigation to "CRAB NEBULA"
  - Verify camera positioning correct for each target
  - Test rapid navigation between targets
  - Verify existing targets (Solar System, GARGANTUA) still work

- [ ] 7.4 Performance testing
  - Monitor FPS at inner view (target: 60 FPS)
  - Monitor FPS at mid-outer view (target: 60 FPS)
  - Monitor FPS at outer view (target: 30-60 FPS)
  - Monitor FPS near black hole (target: 30+ FPS)
  - Test for memory leaks (fly in/out multiple times)
  - Check memory usage (should be ~9 MB additional)

- [ ] 7.5 Visual quality verification
  - Verify volumetric clouds have purple/blue/orange colors
  - Verify spiral structure has 4 distinct arms
  - Verify dust lanes visible between arms
  - Verify color gradients (yellow core → blue arms)
  - Verify black hole accretion disk visible
  - Verify Crab Nebula filamentary structure visible
  - Compare with reference images provided

## Phase 8: Polish & Refinement

- [ ] 8.1 Fine-tune LOD thresholds
  - Adjust distance thresholds if transitions feel abrupt
  - Test different smoothstep ranges
  - Adjust opacity min/max values
  - Test with different camera speeds
  - Ensure smooth experience for all users

- [ ] 8.2 Adjust visual parameters
  - Fine-tune particle colors for realism
  - Adjust particle sizes for visibility
  - Tune cloud opacity for best appearance
  - Adjust black hole color ramp
  - Fine-tune nebula colors
  - Ensure visual consistency across all views

- [ ] 8.3 Optimize performance if needed
  - Reduce particle counts if FPS < 30
  - Lower black hole raymarching iterations if needed
  - Implement dynamic quality reduction
  - Add performance monitoring
  - Test on lower-end hardware if possible

- [ ] 8.4 Final testing and validation
  - Complete full visual testing checklist from design doc
  - Test all edge cases (extreme distances, rapid movement, etc.)
  - Verify all acceptance criteria from requirements met
  - Test texture loading error handling
  - Verify no console errors or warnings
  - Document any known issues or limitations

## Notes

- Each task should be completed and tested before moving to the next
- Refer to design.md for detailed implementation specifications
- Test frequently during development to catch issues early
- Preserve existing functionality (Solar System, GARGANTUA, etc.)
- Target performance: 30+ FPS at all times, 60 FPS preferred
- Total estimated time: 3-5 days for full implementation
