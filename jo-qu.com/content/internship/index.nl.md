+++
title = 'Stage'
+++

# Mijn stage bij Ordolio
Ik liep stage bij [Ordolio](https://ordolio.com), een Belgisch platform waarmee clubs en verenigingen hun werking kunnen beheren. Tijdens mijn stage werkte ik mee aan zowel projectmatige opdrachten als de dagelijkse ontwikkeling van het platform.

## Samenvatting

Mijn stage had twee grote centrale opdrachten:
1. Het **ontwikkelen van een wachtlijstfunctionaliteit** voor evenementen
2. Het **uitvoeren van een penetratietest** op de applicatie

Daarnaast werkte ik actief mee binnen het ontwikkelteam en loste ik 26 tickets op rond bugfixes en nieuwe features. Ik werkte binnen een Scrum-omgeving, met tools zoals Jira en Git.

---

## Stageopdrachten

### 🧾 Wachtlijstfunctionaliteit

Voor evenementen met beperkte capaciteit ontwikkelde ik een slimme wachtlijstmodule. Deze laat gebruikers zich inschrijven wanneer een evenement volzet is, en nodigt hen automatisch uit zodra er plaatsen vrijkomen. De uitnodigingen verlopen via een FIFO-principe met tijdelijke toegangstokens.

**Belangrijke aspecten:**
- Activatie per event, configureerbare limieten
- Automatische uitnodigingen met tijdslimiet
- Dashboard voor beheerders
- Geïntegreerd in bestaande ticketflow

🛠 Gebruikte technologieën: Django, Django Templates, Mail, Tokensysteem

📊 Ik voerde een vergelijkende analyse uit van 4 methodes (FIFO, prioriteit, loting, batch invites) en koos op basis van een Weighted Ranking Methode de best passende aanpak voor Ordolio.

### 🔐 Penetratietest

Naar aanleiding van een gevonden XSS-kwetsbaarheid, voerde ik een volledige pentest uit op de applicatie. Deze test was gebaseerd op OWASP Top 10 en NIST SP 800-115 en behandelde zowel frontend, backend, API’s als containerbeveiliging.

**Uitgevoerde stappen:**
- Attack surface mapping (1.393 endpoints)
- Automatische en handmatige tests (ZAP, Burp Suite, Snyk)
- Beoordeling van e-mailbeveiliging (SPF, DKIM, DMARC)
- Custom scripts voor URL-extractie en headervalidatie

🛠 Gebruikte tools: OWASP ZAP, Burp Suite, Snyk, Docker, Python & Bash (custom scripts)

📌 Resultaten leidden tot concrete verbeteringen: invoervalidatie, veiligere headers en aanbevelingen voor jaarlijkse pentests.

---

## Dagelijkse werking en extra bijdrages

Naast mijn hoofdopdrachten loste ik 26 Jira-tickets op. Deze varieerden van UX-verbeteringen tot nieuwe features en bugfixes.

###  Voorbeelden van opgeloste tickets
- **OV-1488:** Onbeperkt aantal tickets instelbaar
- **OV-1487:** Login prompt bij leden-tickets
- **OV-1486:** ‘Kopieer link’-knop op eventpagina
- **OV-1259:** Bijlagen toevoegen aan e-mails
- **OV-1495:** Visuele feedback bij lage ledenaantallen

 Deze tickets verbeterden de gebruikservaring en gaven me inzicht in het onderhouden van een grote codebase.

---

## Workflow en teamwerking

Ik werkte volgens de **Scrum-methodologie**, met Jira voor taakbeheer. Elke feature of bug werd opgevolgd via duidelijke stappen: van *To Do* naar *In Progress*, *Tech Review*, *Test*, *Release* en uiteindelijk *Done*.

Elke bijdrage werd gekoppeld aan een OV-nummer in Git, waardoor de workflow goed gedocumenteerd en traceerbaar bleef.

---

## Reflectie

Mijn stage bij Ordolio was intensief en leerrijk. Ik leerde:
- Technische features analyseren en ontwerpen op basis van businessbehoeften
- Beveiligingsrisico’s detecteren en remediëren in een bestaande codebase
- Samenwerken in een team en ontwikkelen in een agile omgeving

Ik kijk terug op een geslaagde stage waarin ik niet alleen technische skills heb verfijnd, maar ook gegroeid ben in professionele samenwerking en verantwoordelijkheid.

---

## Geverifieerde documenten

<div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-top: 1.5rem;">
  <a href="/files/PlanVanAanpak.docx" download style="flex: 1 1 200px; text-align: center; background: #007acc; color: #fff; padding: 1.2em 0; border-radius: 8px; font-size: 1.2em; text-decoration: none; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: background 0.2s;">
    📄 Plan van Aanpak
  </a>
  <a href="/files/Onderzoek_wachtlijsten.docx" download style="flex: 1 1 200px; text-align: center; background: #007acc; color: #fff; padding: 1.2em 0; border-radius: 8px; font-size: 1.2em; text-decoration: none; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: background 0.2s;">
    📄 Onderzoek Wachtlijst functionaliteit
  </a>
  <a href="/files/Realisatiedocument__Jonas_Quintiens.pdf" download style="flex: 1 1 200px; text-align: center; background: #007acc; color: #fff; padding: 1.2em 0; border-radius: 8px; font-size: 1.2em; text-decoration: none; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: background 0.2s;">
    📄 Realisatie Document
  </a>
  <a href="/files/Reflectie_Jonas_Quintiens.pdf" download style="flex: 1 1 200px; text-align: center; background: #007acc; color: #fff; padding: 1.2em 0; border-radius: 8px; font-size: 1.2em; text-decoration: none; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: background 0.2s;">
    📄 Reflection Document
  </a>
</div>
