+++
title = "FPV interactive Portfolio Poc"
type = "fun"
draft = false
description = "An innovative 3D first-person portfolio experience where visitors shoot at targets to discover projects, built with Three.js and WebGL."
+++

# FPV Interactive Portfolio PoC

An experimental and highly interactive portfolio experience that transforms the traditional portfolio browsing into a first-person shooter-style game. Visitors navigate through a 3D environment and shoot at targets to reveal project information, creating an engaging and memorable way to showcase work.

## Project Overview

**Duration:** 3 weeks  
**Type:** Creative experiment  
**Purpose:** Innovative portfolio presentation and Three.js skill development

## Concept & Design

The portfolio reimagines how visitors interact with project showcases by gamifying the experience. Instead of scrolling through static content, users:

1. **Navigate** through a 3D environment using FPS-style controls
2. **Aim and shoot** at floating project boxes scattered throughout the scene
3. **Discover** project details through interactive hit detection

## Key Features

### 3D Environment
- **Immersive 3D Scene**: Fully navigable 3D space with atmospheric lighting
- **FPS Controls**: WASD movement with mouse look for familiar gaming experience
- **Dynamic Lighting**: Real-time shadows and lighting effects for visual appeal
- **Particle Systems**: Visual feedback for interactions and ambient effects

### Interactive Elements
- **Target System**: Floating project boxes that respond to mouse interaction
- **Hit Detection**: Precise raycasting for accurate shooting mechanics
- **Information Panels**: Animated UI panels that appear when targets are hit
- **Sound Effects**: Audio feedback for shots, hits, and UI interactions


## Technical Implementation

### 3D Graphics (Three.js)
- **Scene Management**: Organized scene graph with efficient object culling
- **Material System**: PBR materials with realistic lighting and reflections
- **Animation System**: Smooth interpolated animations for UI and objects
- **Camera Controls**: Custom FPS camera controller with smooth movement

### Game Mechanics
- **Raycasting**: Precise mouse-to-3D-world intersection detection
- **Physics Simulation**: Basic physics for projectile visualization
- **State Management**: Clean state handling for different interaction modes
- **Event System**: Decoupled event handling for scalable interactions

### Performance Optimization
- **LOD System**: Level-of-detail rendering for distant objects
- **Texture Optimization**: Compressed textures and efficient UV mapping
- **Geometry Instancing**: Efficient rendering of repeated elements
- **Memory Management**: Proper disposal of 3D resources

## Challenges & Solutions

**Challenge:** Maintaining 60fps performance across different devices  
**Solution:** Implemented adaptive quality settings and efficient LOD system

**Challenge:** Making the interface intuitive for non-gamers  
**Solution:** Added comprehensive tutorial and alternative interaction methods

**Challenge:** Loading 3D assets efficiently  
**Solution:** Implemented progressive loading with visual feedback

## Technical Metrics

- **Performance**: Consistent 60fps on mid-range devices
- **Load Time**: Initial scene loads in under 3 seconds
- **Bundle Size**: Optimized to under 2MB total assets
- **Browser Support**: 95%+ compatibility with modern browsers

## Stack
- **3D Engine:** Three.js (WebGL)
- **Languages:** JavaScript ES6+, HTML5, CSS3
- **Build Tools:** Vite for development and bundling
- **Hosting:** Cloudflare Pages for global CDN delivery
- **Assets:** Blender for 3D modeling, Audacity for sound effects

## Future Enhancements

- **VR Support**: WebXR integration for immersive VR experience
- **Multiplayer**: Real-time collaboration features
- **Mobile Optimization**: Touch-friendly controls for mobile devices
- **Analytics**: User interaction tracking for portfolio insights

[Visit the project](https://jo-qu.pages.dev/)
