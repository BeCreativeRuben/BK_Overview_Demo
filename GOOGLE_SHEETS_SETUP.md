# Google Sheets Setup Instructies

## Stap 1: Maak een nieuwe Google Sheet

1. Ga naar [Google Sheets](https://sheets.google.com)
2. Klik op "Leeg" om een nieuwe spreadsheet te maken
3. Geef het een naam (bijv. "Battlekart Dashboard Data")

## Stap 2: Configureer het Dashboard tabblad

1. Het eerste tabblad heet standaard "Blad1" - hernoem dit naar **"Dashboard"**
2. In de eerste rij (header), voeg de volgende kolommen toe:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Tool ID | Tool Titel | Regelmaat | Laatste Invuldatum | Laatste Invultijd | Door Wie Ingevuld | Link |

## Stap 3: Voeg je tools toe

Voeg de volgende rijen toe met je tools:

### Voorbeeld Data:

| Tool ID | Tool Titel | Regelmaat | Laatste Invuldatum | Laatste Invultijd | Door Wie Ingevuld | Link |
|---------|------------|-----------|-------------------|-------------------|-------------------|------|
| stockcheck | Stockcheck Document | Wekelijks | 2024-01-15 | 10:30 | Naam | /tools/stockcheck |
| weekly-kart | Weekly Kart Check | Wekelijks | 2024-01-14 | 09:15 | Naam | /tools/weekly-kart |
| cash-tracking | Cash-tracking | Dagelijks | 2024-01-16 | 14:20 | Naam | /tools/cash-tracking |
| cash-payments | Cash & Payments | Dagelijks | 2024-01-16 | 18:00 | Naam | /tools/cash-payments |
| kuismachine-logs | Kuismachine Logs | Dagelijks | | | | # |
| daily-kartcheck | Daily Kartcheck | Dagelijks | | | | # |
| dagreports | Dagreports | Dagelijks | | | | # |

### Belangrijke opmerkingen:

- **Tool ID**: Moet uniek zijn en geen spaties bevatten (gebruik koppeltekens)
- **Tool Titel**: De naam zoals deze op het dashboard verschijnt
- **Regelmaat**: "Dagelijks" of "Wekelijks"
- **Laatste Invuldatum**: Format: YYYY-MM-DD (bijv. 2024-01-15) of leeg laten
- **Laatste Invultijd**: Format: HH:MM (bijv. 10:30) of leeg laten
- **Door Wie Ingevuld**: Naam van de persoon of leeg laten
- **Link**: URL naar de detailpagina of "#" voor tools die nog niet beschikbaar zijn

## Stap 4: Kopieer de Sheet ID

1. Kijk naar de URL van je Google Sheet
2. De URL ziet er zo uit: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
3. Kopieer het deel tussen `/d/` en `/edit` - dit is je Sheet ID
4. Deze ID heb je nodig voor de Google Apps Script configuratie

## Stap 5: Deel de Sheet (optioneel)

Als je wilt dat anderen ook toegang hebben:
1. Klik op "Delen" (rechtsboven)
2. Voeg emailadressen toe of maak het "Iedereen met de link"
3. Geef de juiste rechten (Bekijken of Bewerken)

**Let op**: De Google Apps Script moet toegang hebben tot deze Sheet. Zorg ervoor dat het Google account dat de Apps Script gebruikt, toegang heeft tot de Sheet.

