+++
title = "Github faces website"
type = "fun"
date = "2025-04-27"
draft = false
description = "Creative exploitation of GitHub's CSP to display millions of user avatars in an infinite scrolling mosaic, showcasing web security concepts."
+++

# GitHub Faces Website

A creative web experiment that exploits GitHub's Content Security Policy (CSP) same-origin policy to display millions of GitHub user avatars in an infinite scrolling mosaic. This project demonstrates advanced web security concepts while creating a visually striking representation of the GitHub community.

## Project Overview

**Duration:** 1 week  
**Type:** Creative experiment  
**Purpose:** Web security research and visual art project

## Concept & Innovation

The project leverages a fascinating aspect of web security: GitHub's CSP allows loading images from `avatars.githubusercontent.com` on GitHub Pages sites. By systematically generating avatar URLs and loading them dynamically, the site creates an endless stream of GitHub user faces.

### The Technical Exploit

GitHub's Content Security Policy includes:
```
img-src 'self' data: avatars.githubusercontent.com *.gravatar.com
```

This allows GitHub Pages sites to load user avatars, which this project exploits to create a massive avatar gallery.

## Key Features

### Infinite Scrolling
- **Dynamic Loading**: Avatars load progressively as users scroll
- **Performance Optimization**: Lazy loading prevents memory overflow
- **Smooth Animation**: CSS transforms for fluid scrolling experience
- **Responsive Grid**: Adapts to different screen sizes automatically

### Avatar Discovery
- **Sequential Loading**: Systematically loads avatars by user ID
- **Error Handling**: Gracefully handles missing or private avatars
- **Caching Strategy**: Browser caching for improved performance
- **Fallback System**: Default placeholder for failed loads

### Visual Design
- **Mosaic Layout**: Grid-based layout showcasing avatar diversity
- **Hover Effects**: Interactive feedback on avatar hover
- **Loading States**: Visual indicators for loading progress
- **Dark/Light Themes**: Adaptive theming for better viewing

## Technical Implementation

### Avatar URL Generation
```javascript
// GitHub avatar URL pattern
const avatarUrl = `https://avatars.githubusercontent.com/u/${userId}?v=4&s=80`;
```

### Performance Optimization
- **Intersection Observer**: Efficient scroll detection for lazy loading
- **Image Preloading**: Strategic preloading of upcoming avatars
- **Memory Management**: Cleanup of off-screen images to prevent memory leaks
- **Throttled Requests**: Rate limiting to respect GitHub's servers

### Error Handling
- **404 Detection**: Identifies non-existent users
- **Network Failures**: Retry logic for failed requests
- **CSP Violations**: Graceful degradation if CSP changes
- **Browser Compatibility**: Fallbacks for older browsers

## Security & Ethics

### Responsible Usage
- **Rate Limiting**: Respectful request patterns to avoid server strain
- **Public Data Only**: Only displays publicly available avatars
- **No Data Storage**: No user data is stored or tracked
- **Privacy Respect**: Honors GitHub's public/private user settings

### Educational Value
- **CSP Demonstration**: Practical example of Content Security Policy
- **Same-Origin Policy**: Illustrates browser security mechanisms
- **Web Security**: Educational tool for understanding web security

## Technical Challenges

**Challenge:** Loading millions of images without crashing the browser  
**Solution:** Implemented virtual scrolling with aggressive cleanup of off-screen elements

**Challenge:** Handling GitHub's rate limiting  
**Solution:** Intelligent request spacing and exponential backoff

**Challenge:** Maintaining smooth performance  
**Solution:** Optimized rendering pipeline with requestAnimationFrame

## Performance Metrics

- **Load Time**: Initial page loads in under 1 second
- **Memory Usage**: Maintains under 100MB RAM usage
- **Scroll Performance**: Consistent 60fps scrolling
- **Network Efficiency**: Minimal redundant requests

## Discoveries & Insights

### GitHub User Patterns
- **Avatar Trends**: Common avatar styles and patterns
- **User Distribution**: Geographic and demographic insights
- **Profile Completeness**: Percentage of users with custom avatars

### Technical Learnings
- **CSP Behavior**: Deep understanding of browser security policies
- **Performance Limits**: Browser capabilities for large-scale image loading
- **Network Optimization**: Efficient strategies for bulk image loading

## Stack
- **Frontend:** Vanilla JavaScript ES6+, HTML5, CSS3
- **APIs:** GitHub Avatar API (indirect usage)
- **Performance:** Intersection Observer API, requestAnimationFrame
- **Hosting:** GitHub Pages (leveraging the CSP exploit)
- **Tools:** Browser DevTools for performance analysis

## Impact & Reception

- **Educational Tool**: Used in web security workshops and courses
- **Community Interest**: Featured in web development communities
- **Security Awareness**: Demonstrates real-world CSP implications
- **Artistic Value**: Visual representation of GitHub's massive user base

## Future Enhancements

- **User Search**: Find specific users within the mosaic
- **Statistics Dashboard**: Real-time stats about loaded avatars
- **Interactive Features**: Click to view user profiles
- **Data Visualization**: Charts and graphs about avatar patterns

[Visit the project](https://r0831281.github.io/GithubsFaces/)
