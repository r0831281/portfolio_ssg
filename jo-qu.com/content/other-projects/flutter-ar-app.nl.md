+++
title = "Flutter AR APP"
type = "school"
date = "2023-11-01"
draft = false
description = "Geavanceerde AR mobiele applicatie voor albumhoes herkenning met microservices."
+++

# Flutter AR APP

Een innovatieve mobiele applicatie die augmented reality (AR) technologie gebruikt om albumhoezen te scannen en herkennen, waardoor gebruikers een interactieve en meeslepende muziekontdekking ervaring krijgen. Het project beschikt over een geavanceerde microservices backend architectuur en demonstreert geavanceerde mobiele ontwikkeling en computer vision technieken.

## Project Overzicht

**Duur:** 3 maanden (september - december 2023)  
**Teamgrootte:** 3 ontwikkelaars  
**Type:** Schoolproject (Geavanceerd Programmeren)  
**Technologieën:** Flutter, Java, Computer Vision, Microservices

## Belangrijkste Functies

### AR Herkenningssysteem
- **Real-time Album Scannen**: Camera-gebaseerde albumhoes detectie en herkenning
- **Computer Vision Verwerking**: Geavanceerde beeldverwerkingsalgoritmen voor nauwkeurige herkenning
- **3D AR Overlays**: Interactieve 3D elementen weergegeven over herkende albums
- **Multi-hoek Herkenning**: Robuuste herkenning vanuit verschillende kijkhoeken en lichtomstandigheden

### Muziek Integratie
- **Spotify Integratie**: Directe links naar albums en tracks op Spotify
- **Album Informatie**: Gedetailleerde metadata inclusief artiest, releasedatum en tracklist
- **Preview Afspelen**: 30-seconden track previews binnen de app
- **Playlist Creatie**: Ontdekte tracks toevoegen aan persoonlijke playlists

### Gebruikerservaring
- **Intuïtieve Interface**: Schone, moderne UI ontworpen voor naadloze AR interactie
- **Offline Mogelijkheden**: Lokale database voor eerder gescande albums
- **Geschiedenis Tracking**: Persoonlijke bibliotheek van gescande albums en ontdekkingen
- **Sociaal Delen**: Ontdekkingen delen met vrienden en sociale media

## Technische Implementatie

### Frontend (Flutter)
- **Cross-platform Ontwikkeling**: Enkele codebase voor iOS en Android
- **AR Foundation**: Unity AR Foundation integratie voor AR mogelijkheden
- **Camera Integratie**: Real-time camera feed verwerking
- **State Management**: Provider patroon voor efficiënte state handling
- **Aangepaste Widgets**: Herbruikbare UI componenten voor consistente design

### Backend Architectuur (Microservices)
- **Service-Georiënteerd Ontwerp**: Modulaire microservices voor schaalbaarheid
- **Beeldverwerking Service**: Toegewijde service voor computer vision taken
- **Gebruikersbeheer Service**: Authenticatie en gebruikersprofiel beheer
- **Muziekdata Service**: Integratie met muziek APIs en metadata beheer
- **Notificatie Service**: Push notificaties voor nieuwe functies en updates

### Computer Vision Pipeline
- **Feature Extractie**: SIFT/ORB algoritmen voor keypoint detectie
- **Beeld Matching**: Robuuste matching algoritmen voor album herkenning
- **Database Optimalisatie**: Efficiënte opslag en ophaling van beeld features


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

## Architectuur & Infrastructuur

### Microservices Ontwerp
- **API Gateway**: Gecentraliseerd ingangspunt voor alle client requests
- **Service Discovery**: Automatische service registratie en ontdekking
- **Load Balancing**: Gedistribueerde verkeer afhandeling over service instances
- **Circuit Breaker**: Fouttolerantie en graceful degradation

### Data Beheer
- **MySQL**: Relationele data voor gebruikersaccounts en gestructureerde metadata
- **MongoDB**: Document opslag voor flexibele album en artiest informatie
- **Redis**: Caching laag voor frequent toegankelijke data
- **Afbeelding Opslag**: Geoptimaliseerde opslag voor albumhoes afbeeldingen en features

### DevOps & Deployment
- **Docker Containerisatie**: Consistente deployment over omgevingen
- **API Beveiliging**: Authenticatie en autorisatie met OAuth2 en JWT
- **Schaalbaarheid**: Horizontale schaling mogelijkheden voor hoog verkeer

## Back-end Services Architectuur
![Backend architectuur](/photos/backend_arapp.jpg)

## Uitdagingen & Oplossingen

**Uitdaging:** Nauwkeurige album herkenning in variërende lichtomstandigheden  
**Oplossing:** Adaptieve beeldvoorverwerking en meerdere feature extractie algoritmen geïmplementeerd

**Uitdaging:** Real-time prestaties op mobiele apparaten  
**Oplossing:** Computer vision pipeline geoptimaliseerd en efficiënte caching strategieën geïmplementeerd

**Uitdaging:** Schaalbare microservices communicatie  
**Oplossing:** Event-driven architectuur met message queues geïmplementeerd

## Technische Prestaties

- **Cross-platform**: Consistente ervaring over iOS en Android

## Leerresultaten

- **Mobiele AR Ontwikkeling**: Hands-on ervaring met AR frameworks en mobiele ontwikkeling
- **Microservices Architectuur**: Begrip van gedistribueerde systeem ontwerp patronen
- **Computer Vision**: Praktische toepassing van beeldverwerking en herkenningsalgoritmen
- **DevOps Praktijken**: Ervaring met containerisatie en CI/CD pipelines

## Stack
- **Frontend:** Flutter (Dart), AR Foundation, Unity
- **Backend:** Java Spring Boot, Node.js
- **Databases:** MySQL, MongoDB, Redis
- **Infrastructuur:** Docker, Kubernetes, AWS
- **Computer Vision:** OpenCV, TensorFlow Lite
- **APIs:** Spotify Web API, Last.fm API

## Toekomstige Verbeteringen

- **Machine Learning**: Deep learning modellen voor verbeterde herkenningsnauwkeurigheid
- **Sociale Functies**: Community-gedreven album database en reviews
- **Augmented Ervaringen**: Interactieve AR muziekvideo's en artiest informatie
- **Spraak Integratie**: Spraakopdrachten voor hands-free bediening

## Bezoek het project op GitHub
[Front-end](https://github.com/r0831281/APFront)  
[Back-end](https://github.com/maartenwilloque/APBack)
