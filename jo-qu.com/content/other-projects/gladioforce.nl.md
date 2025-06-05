+++
title = "Gladioforce"
date = "2024-04-27"
draft = false
type = "school"
description = "Full-stack ledenbeheer systeem voor een festival."
+++

# Gladioforce

Een uitgebreid ledenbeheer systeem ontwikkeld voor een festival organisatie. Dit was een echt klantproject waarbij ons team van 4 ontwikkelaars een complete oplossing leverde voor het beheren van festival lidmaatschappen, evenementen en administratieve taken.

## Project Overzicht

**Duur:** 3 maanden (februari - april 2024)  
**Teamgrootte:** 4 ontwikkelaars  
**Rol:** Full-stack ontwikkelaar  
**Klant:** Gladiolen festival organisatie

## Belangrijkste Functies

- **Lid Registratie & Beheer**: Compleet levenscyclus beheer van leden met profiel aanmaak, updates en status tracking
- **Evenement Beheer**: Creëren en beheren van festival evenementen met registratie mogelijkheden
- **Betalingsverwerking**: Geïntegreerd betalingssysteem voor lidmaatschapsgelden en evenement tickets
- **Admin Dashboard**: Uitgebreid administratief interface voor festival organisatoren
- **Rapportage Systeem**: Genereren van gedetailleerde rapporten over lidmaatschap statistieken en evenement aanwezigheid
- **Rol-gebaseerde Toegangscontrole**: Verschillende permissie niveaus voor admins, organisatoren en leden

## Technische Implementatie

### Backend (Django + Django Ninja)
- RESTful API ontwerp met Django Ninja voor snelle, type-veilige endpoints
- PostgreSQL database met geoptimaliseerde queries voor grote leden datasets
- JWT authenticatie met rol-gebaseerde permissies
- Geautomatiseerde email notificaties voor lidmaatschap verlengingen en evenementen

### Frontend (Angular)
- Responsieve single-page applicatie met Angular 15+
- Material Design componenten voor consistente UI/UX
- Real-time updates met WebSocket verbindingen
- Progressive Web App (PWA) mogelijkheden voor mobiele toegang

### Infrastructuur
- Gedockeriseerde applicatie voor consistente deployment
- CI/CD pipeline met geautomatiseerde testing
- Productie deployment op cloud infrastructuur

## Uitdagingen & Oplossingen

**Uitdaging:** Beheren van complexe lidmaatschap hiërarchieën en permissies  
**Oplossing:** Implementatie van een flexibel rol-gebaseerd toegangscontrole systeem met overerving


## Stack
- **Backend:** Django, Django Ninja, PostgreSQL
- **Frontend:** Angular, TypeScript, Angular Material
- **Infrastructuur:** Docker, Docker Compose
- **Testing:** Pytest, Jasmine, Karma

## Resultaten
- Administratieve werklast verminderd door automatisering
- Verbeterde leden tevredenheid met gestroomlijnde registratie proces
- Klant verlengde contract voor doorlopend onderhoud en feature ontwikkeling

[Bezoek het project op GitHub](https://github.com/GladioForce-Org/GladioForce)
