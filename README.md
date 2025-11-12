# Battlekart Dashboard

Centrale overzichtspagina voor alle Battlekart tools en toepassingen.

## Features

- Overzicht van alle tools met laatste invuldata
- Toont regelmaat (dagelijks/weekelijks)
- Laatste invuldatum, tijd en door wie ingevuld
- Links naar detailpagina's per tool
- Offline fallback met localStorage

## Setup Instructies

### 1. Google Sheets Setup

1. Maak een nieuwe Google Sheet aan
2. Noem het eerste tabblad "Dashboard"
3. Voeg de volgende kolommen toe in de eerste rij:
   - Tool ID
   - Tool Titel
   - Regelmaat
   - Laatste Invuldatum
   - Laatste Invultijd
   - Door Wie Ingevuld
   - Link

4. Voeg je tools toe in de volgende rijen. Voorbeeld:
   ```
   | Tool ID      | Tool Titel        | Regelmaat | Laatste Invuldatum | Laatste Invultijd | Door Wie Ingevuld | Link              |
   |--------------|-------------------|-----------|-------------------|-------------------|-------------------|-------------------|
   | stockcheck   | Stockcheck        | Wekelijks | 2024-01-15        | 10:30            | Naam             | /tools/stockcheck|
   | weekly-kart  | Weekly Kart Check | Wekelijks | 2024-01-14        | 09:15            | Naam             | /tools/weekly-kart|
   ```

5. Kopieer de Sheet ID uit de URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - De Sheet ID is het deel tussen `/d/` en `/edit`

### 2. Google Apps Script Setup

1. Ga naar [Google Apps Script](https://script.google.com/)
2. Klik op "Nieuw project"
3. Verwijder de standaard code en plak de inhoud van `Code.gs`
4. Vervang `YOUR_SHEET_ID_HERE` met je Sheet ID uit stap 1
5. Sla het project op (bijv. "Battlekart Dashboard API")

#### Deploy als Web App

1. Klik op "Deploy" > "Nieuwe deployment"
2. Kies "Web app" als type
3. Configureer:
   - **Beschrijving**: Battlekart Dashboard API
   - **Uitvoeren als**: Mij (jouw email)
   - **Wie heeft toegang**: Iedereen (of specifieke gebruikers)
4. Klik op "Deploy"
5. **BELANGRIJK**: Kopieer de Web App URL die wordt gegenereerd
6. Geef toestemming wanneer daarom wordt gevraagd

### 3. Frontend Setup

1. Open `js/dashboard.js`
2. Vervang `YOUR_APPS_SCRIPT_WEB_APP_URL_HERE` met de Web App URL uit stap 2
3. Sla het bestand op

### 4. GitHub Pages Deployment

1. Commit alle bestanden naar je GitHub repository:
   ```
   git add .
   git commit -m "Initial dashboard setup"
   git push
   ```

2. Ga naar je repository op GitHub
3. Klik op "Settings" > "Pages"
4. Kies je branch (meestal `main` of `master`)
5. Kies `/ (root)` als folder
6. Klik op "Save"
7. Je dashboard is nu beschikbaar op: `https://jouwusername.github.io/repositorynaam/`

## Project Structuur

```
BK_Algemeen/
├── index.html          # Dashboard hoofdpagina
├── css/
│   └── style.css       # Styling
├── js/
│   └── dashboard.js    # Frontend logica
├── Code.gs             # Google Apps Script backend
└── README.md           # Deze file
```

## Tools

De volgende tools zijn standaard opgenomen in het dashboard:

- Stockcheck Document
- Weekly Kart Check
- Cash-tracking
- Cash & Payments
- Kuismachine Logs
- Daily Kartcheck
- Dagreports

Nieuwe tools kunnen eenvoudig worden toegevoegd door een nieuwe rij toe te voegen aan de Google Sheet.

## Troubleshooting

### Dashboard laadt niet
- Controleer of de Google Apps Script Web App URL correct is ingevuld in `dashboard.js`
- Controleer of de Sheet ID correct is in `Code.gs`
- Controleer of de Sheet naam "Dashboard" is (of pas aan in Code.gs)

### Data wordt niet getoond
- Controleer of de kolomnamen exact overeenkomen met die in de Sheet
- Controleer of de Google Apps Script deployment correct is (toegangsrechten)
- Open de browser console (F12) voor error messages

### CORS errors
- Zorg ervoor dat de Google Apps Script Web App is gedeployed met "Iedereen" als toegang
- Controleer of de deployment actief is

## Toekomstige Uitbreidingen

- Detailpagina's per tool
- Formulieren voor het invullen van tools
- Automatische updates van laatste invuldata
- Gebruikersauthenticatie
- Notificaties voor tools die ingevuld moeten worden

