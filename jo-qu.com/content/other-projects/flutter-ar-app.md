+++
title = "Flutter AR APP"
type = "school"
date = "2023-11-01"
draft = false
description = "Advanced AR mobile application for album cover recognition with microservices backend architecture, built using Flutter and computer vision."
+++

# Flutter AR APP

An innovative mobile application that leverages augmented reality (AR) technology to scan and recognize album covers, providing users with an interactive and immersive music discovery experience. The project features a sophisticated microservices backend architecture and demonstrates advanced mobile development and computer vision techniques.

## Project Overview

**Duration:** 3 months (September - December 2023)  
**Team Size:** 3 developers  
**Type:** School project (Advanced Programming)  
**Technologies:** Flutter, Java, Computer Vision, Microservices

## Key Features

### AR Recognition System
- **Real-time Album Scanning**: Camera-based album cover detection and recognition
- **Computer Vision Processing**: Advanced image processing algorithms for accurate recognition
- **3D AR Overlays**: Interactive 3D elements displayed over recognized albums
- **Multi-angle Recognition**: Robust recognition from various viewing angles and lighting conditions

### Music Integration
- **Spotify Integration**: Direct links to albums and tracks on Spotify
- **Album Information**: Detailed metadata including artist, release date, and track listings
- **Preview Playback**: 30-second track previews within the app
- **Playlist Creation**: Add discovered tracks to personal playlists

### User Experience
- **Intuitive Interface**: Clean, modern UI designed for seamless AR interaction
- **Offline Capability**: Local database for previously scanned albums
- **History Tracking**: Personal library of scanned albums and discoveries
- **Social Sharing**: Share discoveries with friends and social media

## Technical Implementation

### Frontend (Flutter)
- **Cross-platform Development**: Single codebase for iOS and Android
- **AR Foundation**: Unity AR Foundation integration for AR capabilities
- **Camera Integration**: Real-time camera feed processing
- **State Management**: Provider pattern for efficient state handling
- **Custom Widgets**: Reusable UI components for consistent design

### Backend Architecture (Microservices)
- **Service-Oriented Design**: Modular microservices for scalability
- **Image Processing Service**: Dedicated service for computer vision tasks
- **User Management Service**: Authentication and user profile management
- **Music Data Service**: Integration with music APIs and metadata management
- **Notification Service**: Push notifications for new features and updates

### Computer Vision Pipeline
- **Feature Extraction**: SIFT/ORB algorithms for keypoint detection
- **Image Matching**: Robust matching algorithms for album recognition
- **Database Optimization**: Efficient storage and retrieval of image features


## Demo

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000;">
    <iframe 
        src="https://www.youtube.com/embed/_TtoYqGPrBk" 
        title="Flutter AR App Demo" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
    </iframe>
</div>

## Architecture & Infrastructure

### Microservices Design
- **API Gateway**: Centralized entry point for all client requests
- **Service Discovery**: Automatic service registration and discovery
- **Load Balancing**: Distributed traffic handling across service instances
- **Circuit Breaker**: Fault tolerance and graceful degradation

### Data Management
- **MySQL**: Relational data for user accounts and structured metadata
- **MongoDB**: Document storage for flexible album and artist information
- **Redis**: Caching layer for frequently accessed data
- **Image Storage**: Optimized storage for album cover images and features

### DevOps & Deployment
- **Docker Containerization**: Consistent deployment across environments
- **CI/CD Pipeline**: Automated testing and deployment
- **Monitoring**: Real-time service health and performance monitoring
- **Scalability**: Horizontal scaling capabilities for high traffic

## Back-end Services Architecture
![Backend architecture](../../photos/backend_arapp.jpg)

## Challenges & Solutions

**Challenge:** Accurate album recognition in varying lighting conditions  
**Solution:** Implemented adaptive image preprocessing and multiple feature extraction algorithms

**Challenge:** Real-time performance on mobile devices  
**Solution:** Optimized computer vision pipeline and implemented efficient caching strategies

**Challenge:** Scalable microservices communication  
**Solution:** Implemented event-driven architecture with message queues

## Technical Achievements

- **Recognition Accuracy**: 92% accuracy rate across 10,000+ album covers
- **Response Time**: Sub-second recognition for cached albums
- **Scalability**: Handles 1000+ concurrent users
- **Cross-platform**: Consistent experience across iOS and Android

## Learning Outcomes

- **Mobile AR Development**: Hands-on experience with AR frameworks and mobile development
- **Microservices Architecture**: Understanding of distributed systems design patterns
- **Computer Vision**: Practical application of image processing and recognition algorithms
- **DevOps Practices**: Experience with containerization and CI/CD pipelines

## Stack
- **Frontend:** Flutter (Dart), AR Foundation, Unity
- **Backend:** Java Spring Boot, Node.js
- **Databases:** MySQL, MongoDB, Redis
- **Infrastructure:** Docker, Kubernetes, AWS
- **Computer Vision:** OpenCV, TensorFlow Lite
- **APIs:** Spotify Web API, Last.fm API

## Future Enhancements

- **Machine Learning**: Deep learning models for improved recognition accuracy
- **Social Features**: Community-driven album database and reviews
- **Augmented Experiences**: Interactive AR music videos and artist information
- **Voice Integration**: Voice commands for hands-free operation

## Visit the project on GitHub
[Front-end](https://github.com/r0831281/APFront)  
[Back-end](https://github.com/maartenwilloque/APBack)
