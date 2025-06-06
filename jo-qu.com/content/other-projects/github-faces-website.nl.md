+++
title = "Github faces website"
type = "fun"
date = "2025-04-27"
draft = false
description = "Creatieve exploitatie van GitHub's CSP om miljoenen gebruiker avatars te tonen."
+++

# GitHub Faces Website

Een creatief web experiment dat GitHub's Content Security Policy (CSP) same-origin policy en IDOR exploiteert om miljoenen GitHub gebruiker avatars weer te geven in een oneindige scrollende mozaïek. Dit project demonstreert geavanceerde web security concepten terwijl het een visueel opvallende representatie van de GitHub gemeenschap creëert.

## Project Overzicht

**Duur:** 1 week  
**Type:** Creatief experiment  
**Doel:** Web security onderzoek en visueel kunst project

## Concept & Innovatie

Het project maakt gebruik van een fascinerend aspect van web security: GitHub's CSP staat het laden van afbeeldingen van `avatars.githubusercontent.com` toe op GitHub Pages sites. Door systematisch avatar URLs te genereren en ze dynamisch te laden, creëert de site een eindeloze stroom van GitHub gebruiker gezichten.

### De Technische Exploit

GitHub's Content Security Policy bevat:
```
img-src 'self' data: avatars.githubusercontent.com *.gravatar.com
```

Dit samen met een Indirect Object Reference zwakte staat GitHub Pages sites toe om gebruiker avatars te laden, wat dit project exploiteert om een massieve avatar galerij te creëren.

## Belangrijkste Functies

### Oneindige Scrolling
- **Dynamische Laden**: Avatars laden progressief terwijl gebruikers scrollen
- **Prestatie Optimalisatie**: Lazy loading voorkomt geheugen overflow
- **Soepele Animatie**: CSS transforms voor vloeiende scroll ervaring
- **Responsieve Grid**: Past zich automatisch aan aan verschillende schermgroottes

### Avatar Ontdekking
- **Sequentiële Laden**: Systematisch laden van avatars per gebruiker ID
- **Error Handling**: Graceful afhandeling van ontbrekende of private avatars
- **Caching Strategie**: Browser caching voor verbeterde prestaties
- **Fallback Systeem**: Standaard placeholder voor gefaalde loads

### Visueel Ontwerp
- **Mozaïek Layout**: Grid-gebaseerde layout die avatar diversiteit toont


## Technische Implementatie

### Avatar URL Generatie
```javascript
// GitHub avatar URL patroon
const avatarUrl = `https://avatars.githubusercontent.com/u/${userId}?v=4&s=80`;
```

### Prestatie Optimalisatie
- **Intersection Observer**: Efficiënte scroll detectie voor lazy loading
- **Image Preloading**: Strategische preloading van komende avatars
- **Geheugen Beheer**: Cleanup van off-screen afbeeldingen om geheugen lekken te voorkomen
- **Throttled Requests**: Rate limiting om GitHub's servers te respecteren

### Error Handling
- **404 Detectie**: Identificeert niet-bestaande gebruikers
- **Netwerk Failures**: Retry logica voor gefaalde requests
- **CSP Violations**: Graceful degradation als CSP verandert
- **Browser Compatibiliteit**: Fallbacks voor oudere browsers

## Security & Ethiek

### Verantwoordelijk Gebruik
- **Rate Limiting**: Respectvolle request patronen om server belasting te vermijden
- **Alleen Publieke Data**: Toont alleen publiek beschikbare avatars
- **Geen Data Opslag**: Geen gebruiker data wordt opgeslagen of getrackt
- **Privacy Respect**: Respecteert GitHub's publieke/private gebruiker instellingen

### Educatieve Waarde
- **CSP Demonstratie**: Praktisch voorbeeld van Content Security Policy
- **Same-Origin Policy**: Illustreert browser security mechanismen
- **Web Security**: Educatieve tool voor begrip van web security

## Technische Uitdagingen

**Uitdaging:** Miljoenen afbeeldingen laden zonder browser crash  
**Oplossing:** Virtuele scrolling geïmplementeerd met agressieve cleanup van off-screen elementen

**Uitdaging:** Omgaan met GitHub's rate limiting  
**Oplossing:** Intelligente request spacing en exponential backoff

**Uitdaging:** Soepele prestaties behouden  
**Oplossing:** Geoptimaliseerde rendering pipeline met requestAnimationFrame

## Prestatie Metrieken

- **Laadtijd**: Initiële pagina laadt in onder 1 seconde
- **Geheugen Gebruik**: Houdt onder 100MB RAM gebruik
- **Scroll Prestaties**: Consistente 60fps scrolling
- **Netwerk Efficiëntie**: Minimale redundante requests

## Ontdekkingen & Inzichten

### GitHub Gebruiker Patronen
- **Avatar Trends**: Veelvoorkomende avatar stijlen en patronen
- **Gebruiker Distributie**: Geografische en demografische inzichten
- **Profiel Volledigheid**: Percentage gebruikers met aangepaste avatars

### Technische Lessen
- **CSP Gedrag**: Diep begrip van browser security policies
- **Prestatie Limieten**: Browser mogelijkheden voor grootschalige afbeelding laden
- **Netwerk Optimalisatie**: Efficiënte strategieën voor bulk afbeelding laden

## Stack
- **Frontend:** Vanilla JavaScript ES6+, HTML5, CSS3
- **APIs:** GitHub Avatar API (indirect gebruik)
- **Prestaties:** Intersection Observer API, requestAnimationFrame
- **Hosting:** GitHub Pages (gebruik makend van de CSP exploit)
- **Tools:** Browser DevTools voor prestatie analyse

## Impact & Ontvangst

- **Educatieve Tool**: Gebruik in web security workshops en cursussen
- **Community Interesse**: Uitgelicht in web development gemeenschappen
- **Security Awareness**: Demonstreert real-world CSP implicaties
- **Artistieke Waarde**: Visuele representatie van GitHub's massieve gebruikersbasis

## Toekomstige Verbeteringen

- **Gebruiker Zoeken**: Specifieke gebruikers vinden binnen de mozaïek
- **Statistieken Dashboard**: Real-time stats over geladen avatars
- **Interactieve Functies**: Klik om gebruiker profielen te bekijken
- **Data Visualisatie**: Grafieken over avatar patronen

[Bezoek het project](https://r0831281.github.io/GithubsFaces/)
