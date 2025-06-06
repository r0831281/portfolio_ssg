+++
title = "Smart Mouse Trap"
type = "Opleiding"
draft = false
description = "Een humane, IoT-enabled muizenval, bestuurd door een Orange Pi."
+++

# Smart Mouse Trap

Een geavanceerde IoT-enabled humane muizenval die hardware engineering, embedded programmering en cloud connectiviteit combineert om een intelligente ongediertebestrijding oplossing te creëren. Dit project demonstreert geavanceerde integratie van sensoren, actuatoren en real-time data streaming terwijl dierenwelzijn prioriteit heeft.

## Project Overzicht

**Duur:** 6 weken  
**Teamgrootte:** 2 ontwikkelaars  
**Type:** Schoolproject (IoT Systemen)  
**Platform:** Orange Pi single-board computer

## Belangrijkste Functies

### Humane Vangmechanisme
- **Niet-dodelijk Ontwerp**: Vangt muizen veilig zonder schade met een val-deur mechanisme
- **Temperatuur Monitoring**: Zorgt voor veilige omgevingsomstandigheden voor gevangen dieren
- **Snelle Vrijlating**: Handmatige reset knop voor onmiddellijke dier vrijlating
- **Ventilatie Systeem**: Adequate luchtstroom om dierenwelzijn te behouden

### Slim Detectie Systeem
- **Ultrasone Sensoren**: Precieze afstandsmeting voor trigger detectie
- **Instelbare Gevoeligheid**: Rotary encoder voor aanpasbare trigger afstand
- **Vals Positief Preventie**: Geavanceerde filtering om accidentele triggers te voorkomen

### Geautomatiseerde Werking
- **Stepper Motor Besturing**: Precieze deur mechanisme met vergrendeling mogelijkheid
- **DC Motor Reset**: Geautomatiseerd val reset mechanisme voor continue werking
- **LED Indicator Systeem**: Visuele status indicatoren voor val toestand
- **LCD Informatie Display**: Real-time status en configuratie informatie

### IoT Connectiviteit & Monitoring
- **Live Data Streaming**: Real-time sensor data transmissie naar cloud dashboard
- **Twitch Integratie**: Automatische live streaming wanneer val getriggerd wordt
- **uBeac Dashboard**: Uitgebreide monitoring interface met historische data
- **Remote Notificaties**: Onmiddellijke waarschuwingen wanneer val geactiveerd wordt

## Demo

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000;">
    <iframe 
        src="https://www.youtube.com/embed/7RVyvhLRBDM" 
        title="Smart Mouse Trap Demo" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
    </iframe>
</div>

## Technische Implementatie

### Hardware Componenten
- **Orange Pi**: Hoofd verwerkingseenheid met embedded Linux
- **Stepper Motor**: Precieze deur besturing met positie feedback
- **DC Motor**: Reset mechanisme voor val heractivering
- **Ultrasone Sensor (HC-SR04)**: Afstandsmeting voor trigger detectie
- **Temperatuur Sensor (DS18B20)**: Omgeving monitoring
- **LCD Display (16x2)**: Lokale status en configuratie weergave
- **Rotary Encoder**: Gevoeligheid aanpassing interface
- **LED Indicatoren**: Visueel status feedback systeem
- **Relay Module**: Hoog-vermogen schakeling voor externe apparaten

### Software Architectuur
- **Embedded Linux**: Orange Pi OS voor robuuste systeem werking
- **Python Besturing Systeem**: Hoofd applicatie logica en sensor integratie
- **GPIO Beheer**: Directe hardware besturing en interrupt handling
- **Multi-threading**: Gelijktijdige sensor monitoring en actuator besturing
- **State Machine**: Robuuste val status beheer en transities

### IoT Integratie
- **MQTT Protocol**: Lichtgewicht messaging voor sensor data transmissie
- **RESTful APIs**: Integratie met cloud services en dashboards
- **WebSocket Streaming**: Real-time data updates naar monitoring interfaces
- **Cloud Opslag**: Historische data logging en analytics

## Geavanceerde Functies

### Intelligent Trigger Systeem
- **Adaptieve Gevoeligheid**: Machine learning-gebaseerde trigger optimalisatie
- **Patroon Herkenning**: Onderscheid maken tussen verschillende dier groottes
- **Omgeving Compensatie**: Automatische aanpassing voor temperatuur en vochtigheid effecten
- **Ruis Filtering**: Digitale signaal verwerking om valse triggers te elimineren

### Data Analytics
- **Trigger Statistieken**: Uitgebreide logging van val activeringen
- **Omgeving Correlatie**: Analyse van temperatuur vs. activiteit patronen
- **Prestatie Metrieken**: Val efficiëntie en succes percentage tracking

### Remote Beheer
- **Web Interface**: Browser-gebaseerde besturing en monitoring
- **Mobiele Compatibiliteit**: Responsief ontwerp voor smartphone toegang
- **Configuratie Beheer**: Remote parameter aanpassing

## Uitdagingen & Oplossingen

**Uitdaging:** Humane behandeling waarborgen terwijl effectiviteit behouden blijft  
**Oplossing:** Uitgebreide omgeving monitoring en snelle vrijlating mechanismen geïmplementeerd

**Uitdaging:** Valse triggers van omgevingsfactoren voorkomen  
**Oplossing:** Multi-sensor validatie en geavanceerde signaal verwerkingsalgoritmen

**Uitdaging:** Betrouwbare IoT connectiviteit in verschillende omgevingen  
**Oplossing:** Robuuste error handling en offline operatie mogelijkheden

## Technische Prestaties

- **Responstijd**: Sub-seconde trigger respons voor onmiddellijke vangst
- **Proof of Concept**: Werkend prototype succesvol getest in gecontroleerde omgeving, met betrouwbare detectie, vangst en live data streaming naar het cloud dashboard.

## Leerresultaten

- **Embedded Systemen**: Hands-on ervaring met single-board computers en Linux
- **IoT Architectuur**: Begrip van sensor netwerken en cloud integratie
- **Hardware Integratie**: Praktische vaardigheden in elektronica en mechanische systemen
- **Dierenwelzijn**: Ethische overwegingen in technologie ontwerp

## Stack
- **Hardware:** Orange Pi, Verschillende sensoren en actuatoren
- **Besturingssysteem:** Armbian (Debian-gebaseerde Linux)
- **Programmering:** Python 3, GPIO libraries, threading
- **IoT Platform:** MQTT, uBeac dashboard
- **Streaming:** Twitch API integratie
- **Protocollen:** HTTP/HTTPS, WebSocket, MQTT

## Toekomstige Verbeteringen

- **AI-Aangedreven Herkenning**: Computer vision voor soort identificatie
- **Zonne-energie Integratie**: Duurzame energie oplossing voor buitenplaatsing
- **Multi-Val Netwerk**: Gecoördineerde werking van meerdere val eenheden
- **Mobiele App**: Toegewijde smartphone applicatie voor beheer

## Ethische Overwegingen

- **Dierenwelzijn Prioriteit**: Alle ontwerp beslissingen prioriteren humane behandeling
- **Snelle Respons**: Onmiddellijk notificatie systeem voor prompte dier vrijlating
- **Omgeving Veiligheid**: Niet-toxische materialen en veilige werking
- **Regelgeving Naleving**: Naleving van lokale dierenwelzijn regelgeving

[Bezoek het project op GitHub](https://github.com/r0831281/ProjectIot)
