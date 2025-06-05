+++
title = "Gladioforce"
date = "2024-04-27"
draft = false
type = "school"
description = "Full-stack membership management system for a festival."
+++

# Gladioforce

A comprehensive membership management system developed for a festival organization. This was a real-world client project where our team of 4 developers delivered a complete solution for managing festival memberships, events, and administrative tasks.

## Project Overview

**Duration:** 3 months (February - April 2024)  
**Team Size:** 4 developers  
**Role:** Full-stack developer  
**Client:** Gladiolen festival organization

## Key Features

- **Member Registration & Management**: Complete member lifecycle management with profile creation, updates, and status tracking
- **Event Management**: Create and manage festival events with registration capabilities
- **Payment Processing**: Integrated payment system for membership fees and event tickets
- **Admin Dashboard**: Comprehensive administrative interface for festival organizers
- **Reporting System**: Generate detailed reports on membership statistics and event attendance
- **Role-based Access Control**: Different permission levels for admins, organizers, and members

## Technical Implementation

### Backend (Django + Django Ninja)
- RESTful API design with Django Ninja for fast, type-safe endpoints
- PostgreSQL database with optimized queries for large member datasets
- JWT authentication with role-based permissions
- Automated email notifications for membership renewals and events

### Frontend (Angular)
- Responsive single-page application with Angular 15+
- Material Design components for consistent UI/UX
- Real-time updates using WebSocket connections
- Progressive Web App (PWA) capabilities for mobile access

### Infrastructure
- Dockerized application for consistent deployment
- CI/CD pipeline with automated testing
- Production deployment on cloud infrastructure

## Challenges & Solutions

**Challenge:** Managing complex membership hierarchies and permissions  
**Solution:** Implemented a flexible role-based access control system with inheritance


## Stack
- **Backend:** Django, Django Ninja, PostgreSQL
- **Frontend:** Angular, TypeScript, Angular Material
- **Infrastructure:** Docker, Docker Compose
- **Testing:** Pytest, Jasmine, Karma

## Outcomes
- Reduced administrative workload through automation
- Improved member satisfaction with streamlined registration process
- Client renewed contract for ongoing maintenance and feature development

[Visit the project on GitHub](https://github.com/GladioForce-Org/GladioForce)
