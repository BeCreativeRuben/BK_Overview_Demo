// Link data met alle tools en links
const tools = [
    // Dagelijkse taken
    {
        id: 'cash-payments',
        title: 'Cash & Payments Employees',
        url: 'https://docs.google.com/spreadsheets/d/1NRhb54013pCnwgjNvl6OgvL7UAzP_xarv601Va_DFNY/edit?gid=269408941#gid=269408941',
        frequency: 'daily'
    },
    {
        id: 'kart-daily-logboek',
        title: 'Kart Daily logboek',
        url: 'https://battlekartbelgium-my.sharepoint.com/:x:/g/personal/kayode_gent_battlekart_com/IQCMZLSPmdZfTIf2hhkD0WneAVO_aWJp5IvU1HPyfNuCJrs?e=q2OFJM',
        frequency: 'daily'
    },
    {
        id: 'daily-report',
        title: 'Daily Report',
        url: 'https://battlekartbelgium-my.sharepoint.com/:w:/g/personal/info_gent_battlekart_com/IQAFUG29K3cPRqUOHIo-eiC3AcGFK6Q8GalIm9Mwv8I52rM?e=RK7Ypo',
        frequency: 'daily'
    },
    {
        id: 'bk-panel',
        title: 'BK panel',
        url: 'https://oauth.battlekart.com/authorize?client_id=d66a502f0a4b7690ed5808e0b559010b&redirect_uri=https%3A%2F%2Fpanel.battlekart.com%2F&response_type=id_token&scope=openid+profile+email&state=33be5a04e47045b69f25360d57512097&brand_id=2&flow=',
        frequency: 'daily'
    },
    {
        id: 'kuismachine-logs',
        title: 'Kuismachine logs',
        url: '#',
        isFile: true,
        frequency: 'daily'
    },
    // Wekelijkse taken
    {
        id: 'stockcheck-bk',
        title: 'StockcheckBK',
        url: 'https://becreativeruben.github.io/StockCheckBK_V2/',
        frequency: 'weekly'
    },
    {
        id: 'kart-weekly',
        title: 'Kart Weekly',
        url: 'https://becreativeruben.github.io/WeeklyKartCheck/',
        logboekUrl: 'https://docs.google.com/spreadsheets/d/1sCTKJzF1b7pZ5bB1AFD8Y-Hzx2HXI4x5AhVMNVi6gM8/edit',
        frequency: 'weekly',
        hasMultipleLinks: true
    }
];

// Tutorial data voor elk document
const tutorials = {
    'cash-payments': {
        title: 'Cash & Payments Employees - Tutorial',
        description: 'Leer hoe je het Cash & Payments document correct invult en waarom dit belangrijk is.',
        sections: [
            {
                title: 'Waarom invullen?',
                content: 'Dit document moet dagelijks worden ingevuld om alle geldzaken bij te houden van Battlekart. Het is essentieel voor financiële tracking, rapportage en het bijhouden van alle cash transacties en employee payments.',
                image: null
            },
            {
                title: 'Belangrijk: Selecteer de juiste maand',
                content: 'Zorg er altijd voor dat je de juiste maand selecteert onderaan in het document. Dit is cruciaal om de gegevens op de juiste plaats te registreren. Controleer de maand-selectie voordat je begint met invullen.',
                image: null
            },
            {
                title: 'Cash Opening',
                content: 'De cash opening moet altijd correct zijn. Controleer het startbedrag en vul dit nauwkeurig in.',
                image: null
            },
            {
                title: 'Cash Sluiting',
                content: 'De cash sluiting moet altijd correct worden ingevuld. Tel alle cash transacties zorgvuldig op en controleer of het totaal klopt.',
                image: null
            },
            {
                title: 'Betaalterminals - Stap 1: Neem beide terminals',
                content: 'Neem beide betaalterminals mee en ga naar de transactielijst van die dag. Je kunt in de transactielijst met de code 1015 bij beide terminals.',
                image: null
            },
            {
                title: 'Betaalterminals - Stap 2: Tel de bedragen op',
                content: 'Tel de bedragen van beide terminals op en geef die in in "Betaalterminals som". Controleer of de totalen kloppen voordat je ze invoert.',
                image: null
            },
            {
                title: 'Cash-envelop - Stap 1: Vul de envelop correct',
                content: 'Vul de cash-envelop correct in. Zorg dat de cash van die dag + de transactielijsten in de envelop zitten.',
                image: null
            },
            {
                title: 'Cash-envelop - Stap 2: Doublecheck en bewaar',
                content: 'Doublecheck of alles klopt voordat je de envelop in de kluis steekt. Controleer:\n• Cash bedrag klopt\n• Transactielijsten zijn aanwezig\n• Envelop is correct gelabeld',
                image: null
            },
            {
                title: 'Tips',
                content: '• Vul dit document dagelijks in aan het einde van de dag\n• Controleer altijd de maand-selectie onderaan\n• Tel alle bedragen dubbel na\n• Bewaar de envelop altijd veilig in de kluis\n• Neem contact op bij twijfel over een transactie',
                image: null
            }
        ]
    },
    'kart-daily-logboek': {
        title: 'Kart Daily Logboek - Tutorial',
        description: 'Ontdek hoe je het dagelijkse kart logboek correct invult en wat er allemaal in moet staan.',
        sections: [
            {
                title: 'Waarom invullen?',
                content: 'Het kart daily logboek helpt ons om de status van alle karts bij te houden, inclusief onderhoud, reparaties en gebruik. Dit is essentieel voor veiligheid en planning.',
                image: null
            },
            {
                title: 'Daily Check - Wat testen?',
                content: 'Als daily check test je de standaard zaken zoals:\n• Werking van de knopjes\n• Pedalen\n• Sensors\n\nControleer of alles correct functioneert voordat je verder gaat.',
                image: null
            },
            {
                title: 'Daily Check - Kuisen',
                content: 'Kuisen is een belangrijk onderdeel van de daily check:\n• Sturen kuisen (liefst met vochtige doek)\n• Schermen kuisen\n• Zitjes kuisen\n\nZorg dat alles schoon is voordat je de kart gebruikt.',
                image: null
            },
            {
                title: 'Problemen rapporteren',
                content: 'Geef alleen de karts aan die problemen hebben. Wees specifiek bij het beschrijven van het probleem:\n• Wat is er mis?\n• Wanneer is het opgemerkt?\n• Is het urgent?',
                image: null
            },
            {
                title: 'Karts gekuist aangeven',
                content: 'Zeker en vast aangeven als je de karts hebt gekuist. Vink het "Karts gekuist" vakje aan onderaan het formulier. Dit is belangrijk voor tracking en kwaliteitscontrole.',
                image: null
            },
            {
                title: 'Tips',
                content: '• Test systematisch alle onderdelen\n• Kuisen met vochtige doek voor sturen\n• Wees specifiek bij problemen\n• Vink altijd aan als karts zijn gekuist\n• Noteer altijd de tijd van meldingen',
                image: null
            }
        ]
    },
    'daily-report': {
        title: 'Daily Report - Tutorial',
        description: 'Leer hoe je het dagelijkse rapport invult en welke informatie belangrijk is om te vermelden.',
        sections: [
            {
                title: 'Waarom invullen?',
                content: 'Het daily report geeft een overzicht van de dagelijkse activiteiten, problemen en belangrijke gebeurtenissen. Dit helpt bij communicatie en planning.',
                image: null
            },
            {
                title: 'Hoe invullen?',
                content: 'Vul de template gewoon in. De template heeft een vaste structuur die je moet volgen.',
                image: null
            },
            {
                title: 'Template structuur',
                content: 'DAILY REPORT [datum]\n\nNaam onthaalverantwoordelijke: [naam]\n\nVertraging op de piste?\n/\nZo ja, tussen welke tijd?\n/\nZaten we hierdoor achter op schema?\n/\n\nOngelukkige klanten:\n/\nZo ja, waarom?\n/\n\nBugs / problemen?\n/\n\nDiversen:\n\nAanwezigen: [lijst van namen]\n\nEinde van dienst drankjes:\n[Naam]: [drankje]\n[Naam]: [drankje]\n...',
                image: null
            },
            {
                title: 'Stap 1: Open het document',
                content: 'Klik op de link om het Word document te openen. Je kunt het ook online bewerken als je de juiste rechten hebt.',
                image: null
            },
            {
                title: 'Stap 2: Vul de template in',
                content: 'Vul alle secties van de template in:\n• Naam onthaalverantwoordelijke\n• Vertraging op de piste (met subvragen)\n• Ongelukkige klanten (met waarom)\n• Bugs / problemen\n• Diversen\n• Aanwezigen\n• Einde van dienst drankjes (per persoon)',
                image: null
            },
            {
                title: 'Voorbeeld: Einde van dienst drankjes',
                content: 'Vul per persoon in welke drankjes ze hebben genomen:\n\nMauro: Omer\nJonas: Omer\nSven: Redbull\nKayo: Omer\nRuben: Omer',
                image: null
            },
            {
                title: 'Tips',
                content: '• Vul het rapport in aan het einde van de dag\n• Wees objectief en duidelijk\n• Vermeld alle belangrijke gebeurtenissen\n• Vul alle secties van de template in\n• Noteer alle aanwezigen en hun drankjes',
                image: null
            }
        ]
    },
    'kuismachine-logs': {
        title: 'Kuismachine Logs - Tutorial',
        description: 'Ontdek hoe je de kuismachine logs correct invult en waarom dit belangrijk is voor onderhoud en planning.',
        sections: [
            {
                title: 'Waarom invullen?',
                content: 'De kuismachine logs helpen ons om bij te houden wanneer de pistes zijn gekuist, welke machines zijn gebruikt, en of ze correct zijn onderhouden. Dit is belangrijk voor kwaliteit en veiligheid.',
                image: null
            },
            {
                title: 'Hoe lees je de kuismachine display af?',
                content: 'Op de kuismachine vind je het display in het midden van het control panel, naast de VIPER logo. Het display toont groene cijfers zoals "023.19". Dit is het aantal uren dat de machine heeft gedraaid.\n\nNoteer dit cijfer VOOR je begint met kuisen (begintijd) en NA je klaar bent (eindtijd). Je kunt zowel komma als punt gebruiken (023.19 of 023,19), maar het wordt opgeslagen met komma.',
                image: 'images/tutorials/kuismachine-display.jpg'
            },
            {
                title: 'Hoe lees je de stofzuiger display af?',
                content: 'Op de stofzuiger vind je het display rechts op het control panel. Het display toont "HOURS" bovenaan en een cijfer zoals "50.3" (50 uur en 3 tienden).\n\nNoteer dit cijfer VOOR je begint met stofzuigen (begintijd) en NA je klaar bent (eindtijd). Het format is meestal xx.x (bijv. 50.3), maar je kunt ook komma gebruiken (50,3).',
                image: 'images/tutorials/stofzuiger-display-closeup.jpg'
            },
            {
                title: 'Waar vind je het stofzuiger display?',
                content: 'Het display bevindt zich op het control panel aan de linkerkant van de machine. Je ziet het "HOURS" display met het cijfer eronder. Zorg dat je het display goed kunt zien voordat je begint.',
                image: 'images/tutorials/stofzuiger-display-overview.jpg'
            },
            {
                title: 'Stap 1: Open de overlay',
                content: 'Klik op "Ga naar tool" bij Kuismachine logs om de invoer overlay te openen.',
                image: null
            },
            {
                title: 'Stap 2: Vul de gegevens in',
                content: 'Geef aan welke machines je hebt gebruikt (kuismachine en/of stofzuiger), welke pistes je hebt gekuist (A en/of B), en of je de machines daarna hebt uitgekuist. Vul ook de start- en eindtijden in die je van de machine displays hebt afgelezen.',
                image: null
            },
            {
                title: 'Stap 3: Reden indien niet uitgekuist',
                content: 'Als je een machine niet hebt uitgekuist, is het verplicht om een reden op te geven. Dit helpt bij planning en communicatie.',
                image: null
            },
            {
                title: 'Tips',
                content: '• Vul de logs direct in na het kuisen\n• Controleer de machine displays voor de juiste tijden\n• Noteer zowel begintijd als eindtijd van de displays\n• Geef altijd een duidelijke reden als je niet kunt uitkuisen',
                image: null
            }
        ]
    },
    'stockcheck-bk': {
        title: 'StockcheckBK - Tutorial',
        description: 'Leer hoe je de stockcheck tool gebruikt om de voorraad bij te houden en te controleren.',
        sections: [
            {
                title: 'Waarom invullen?',
                content: 'De stockcheck tool helpt ons om de voorraad van alle items bij te houden. Dit is belangrijk voor bestellingen, planning en het voorkomen van tekorten.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Stockcheck+1'
            },
            {
                title: 'Stap 1: Open de tool',
                content: 'Klik op de link om de StockcheckBK tool te openen in je browser.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Stockcheck+2'
            },
            {
                title: 'Stap 2: Controleer de voorraad',
                content: 'Loop door de verschillende categorieën en controleer de fysieke voorraad. Vergelijk dit met wat er in het systeem staat.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Stockcheck+3'
            },
            {
                title: 'Stap 3: Update de aantallen',
                content: 'Pas de aantallen aan waar nodig. Noteer eventuele opmerkingen bij items die aandacht nodig hebben.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Stockcheck+4'
            },
            {
                title: 'Tips',
                content: '• Controleer systematisch per categorie\n• Noteer items die bijna op zijn\n• Sla regelmatig op tijdens het invullen',
                image: null
            }
        ]
    },
    'kart-weekly': {
        title: 'Kart Weekly - Tutorial',
        description: 'Ontdek hoe je de wekelijkse kart check uitvoert en het logboek invult.',
        sections: [
            {
                title: 'Waarom invullen?',
                content: 'De wekelijkse kart check zorgt ervoor dat alle karts grondig worden gecontroleerd en onderhouden. Dit is essentieel voor veiligheid en kwaliteit.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Kart+Weekly+1'
            },
            {
                title: 'Stap 1: Open de tool',
                content: 'Klik op "Ga naar tool" om de WeeklyKartCheck tool te openen. Dit is een interactieve checklist voor elke kart.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Kart+Weekly+2'
            },
            {
                title: 'Stap 2: Doorloop de checklist',
                content: 'Voor elke kart doorloop je de volledige checklist: remmen, banden, motor, veiligheid, etc. Vink alles af dat in orde is.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Kart+Weekly+3'
            },
            {
                title: 'Stap 3: Noteer problemen',
                content: 'Als je problemen vindt, noteer deze duidelijk in het systeem. Dit helpt bij het plannen van reparaties.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Kart+Weekly+4'
            },
            {
                title: 'Stap 4: Vul het logboek in',
                content: 'Na het voltooien van de check, klik op "Ga naar logboek" om de resultaten in het Google Sheets document te noteren.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Kart+Weekly+5'
            },
            {
                title: 'Tips',
                content: '• Neem de tijd voor een grondige check\n• Wees eerlijk over de status van elke kart\n• Plan tijd in voor eventuele reparaties',
                image: null
            }
        ]
    },
    'bk-panel': {
        title: 'BK Panel - Tutorial',
        description: 'Leer hoe je het BK Panel gebruikt en welke taken je moet uitvoeren.',
        sections: [
            {
                title: 'Waarom gebruiken?',
                content: 'Het BK Panel is het centrale systeem voor het beheren van verschillende taken en processen bij Battlekart. Het is belangrijk om alle taken correct uit te voeren.',
                image: null
            },
            {
                title: 'Stap 1: Open BK Panel',
                content: 'Klik op de link om het BK Panel te openen. Zorg dat je ingelogd bent met de juiste account.',
                image: null
            },
            {
                title: 'Checklists invullen',
                content: 'Ga naar Checklists → Execute → Select Checklist. Vul alle checklists in die voor die dag van toepassing zijn. Zorg dat je alle items afvinkt die zijn voltooid.',
                image: null
            },
            {
                title: 'In- en uitklokken',
                content: 'Zeker en vast in- en uitklokken via het BK Panel. Dit is belangrijk voor tijdregistratie en planning. Vergeet niet om jezelf uit te klokken aan het einde van je dienst.',
                image: null
            },
            {
                title: 'Beamers aanzetten',
                content: 'Zet de beamers altijd aan als er klanten zijn. Controleer of ze correct werken en de juiste content tonen.',
                image: null
            },
            {
                title: 'Karts opladen',
                content: 'Zorg er zeker voor dat de karts opgeladen zijn. Controleer de batterijstatus en laad indien nodig op voordat klanten arriveren.',
                image: null
            },
            {
                title: 'Photobooth checken',
                content: 'Check de photobooth regelmatig. Controleer of deze correct werkt en of er voldoende papier/inkt is.',
                image: null
            },
            {
                title: 'TV\'s checken',
                content: 'Check de TV\'s regelmatig. Zet de logo\'s B2B aan of uit indien nodig. Controleer of alle schermen correct werken en de juiste content tonen.',
                image: null
            },
            {
                title: 'Tips',
                content: '• Gebruik de link als hyperlink om direct naar BK Panel te gaan\n• Vul alle checklists dagelijks in\n• Vergeet niet in- en uit te klokken\n• Controleer beamers, karts, photobooth en TV\'s regelmatig\n• Zet logo\'s B2B aan/uit wanneer nodig',
                image: null
            }
        ]
    }
};

// Algemene tutorial data voor het hele dashboard
const generalTutorial = {
    title: 'Battlekart Dashboard - Algemene Tutorial',
    description: 'Leer hoe je het dashboard gebruikt',
    steps: [
        {
            title: 'Welkom bij Battlekart Dashboard',
            content: 'Dit dashboard helpt je om alle dagelijkse en wekelijkse taken bij te houden. Laten we beginnen met een korte rondleiding!',
            target: null,
            position: 'center',
            highlight: 'none'
        },
        {
            title: 'Naam Invoer',
            content: 'Voordat je het dashboard kunt gebruiken, moet je je naam invoeren. Dit helpt ons om te zien wie welke taken heeft uitgevoerd. Je naam wordt opgeslagen en je hoeft deze niet elke keer opnieuw in te voeren. Na 3 minuten inactiviteit moet je opnieuw inloggen.',
            target: '#name-modal',
            position: 'center',
            highlight: 'element'
        },
        {
            title: 'Dashboard Overzicht',
            content: 'Het dashboard bestaat uit verschillende secties: de header bovenaan met quick links, de dagplanning, de tool blokjes voor dagelijkse en wekelijkse taken, en de footer onderaan voor feedback.',
            target: 'header',
            position: 'bottom',
            highlight: 'element'
        },
        {
            title: 'Dagplanning',
            content: 'De dagplanning toont alle taken die je vandaag moet uitvoeren, opgedeeld in "Opening", "Doorheen de dag" en "Sluiting". Je kunt de planning inklappen/uitklappen. Klik op een taak om direct naar de bijbehorende tool te gaan. Vink taken af als je ze hebt voltooid.',
            target: '#day-planning',
            position: 'bottom',
            highlight: 'element'
        },
        {
            title: 'Tool Blokjes',
            content: 'Elk tool blokje vertegenwoordigt een document of tool die je moet gebruiken. Je ziet wanneer er voor het laatst op is geklikt ("X geleden") en door wie. De groene/rode badges tonen of het een dagelijkse of wekelijkse taak is.',
            target: '.tool-card:first-child',
            position: 'right',
            highlight: 'element'
        },
        {
            title: 'Real-time Synchronisatie',
            content: 'Het dashboard synchroniseert automatisch met andere devices. Als iemand anders op een tool klikt, zie je dit direct op je scherm. Kijk naar "Laatst geklikt" bij de tool blokjes - deze informatie wordt real-time bijgewerkt. Dit zorgt ervoor dat iedereen altijd de meest actuele informatie ziet.',
            target: '.tool-card:first-child .info-item:first-child',
            position: 'right',
            highlight: 'element'
        },
        {
            title: 'Tool Specifieke Tutorials',
            content: 'Bij elk tool blokje vind je een vraagteken knop (?) in de rechterbovenhoek. Klik hierop voor gedetailleerde instructies over hoe je dat specifieke document of tool gebruikt.',
            target: '.tool-tutorial-btn',
            position: 'left',
            highlight: 'element'
        },
        {
            title: 'Quick Links in Header',
            content: 'In de header vind je snelle links naar Outlook, BK Panel en BK Website. Deze zijn altijd beschikbaar, ongeacht waar je je op het dashboard bevindt.',
            target: '.header-links',
            position: 'bottom',
            highlight: 'element'
        },
        {
            title: 'Feedback Geven',
            content: 'Onderaan het dashboard vind je een footer met een feedback knop. Als je problemen tegenkomt of suggesties hebt, klik hierop om een melding in te dienen. Dit helpt ons om het dashboard te verbeteren.',
            target: '.footer-feedback-btn',
            position: 'top',
            highlight: 'element'
        },
        {
            title: 'Tips & Best Practices',
            content: '• Vul taken direct in nadat je ze hebt uitgevoerd\n• Controleer regelmatig de "X geleden" tags om te zien wat recent is gedaan\n• Gebruik de vraagteken knoppen als je niet zeker weet hoe iets werkt\n• Geef altijd feedback als je problemen tegenkomt\n• Log uit als je klaar bent (na 3 minuten gebeurt dit automatisch)',
            target: null,
            position: 'center',
            highlight: 'none'
        }
    ]
};

// Easter egg boodschappen
const easterEggMessages = {
    morning: [
        { message: "Beire goe bezig makker! Goeiemorgend", author: "Ruben" },
        { message: "Have a good day pookie", author: "Tilly" },
        { message: "Denk aan mij, dan gaat de tijd wat sneller vooruit xx Tilly", author: "Tilly" },
        { message: "ben je moe? drink nalu.. Of koffie.. Koffie works too..", author: "Rubinhio" },
        { message: "Goeiemorgen champ! Je hebt dit!", author: "Ruben" },
        { message: "Rise and shine! Time to conquer the day 🌟", author: "Tilly" }
    ],
    evening: [
        { message: "Goe gedaan vandaag makker! Proud.", author: "Ruben" },
        { message: "You're the reason the lights are on. (maar vergeet ze niet uit te zetten als je weggaat ;))", author: "Tilly" },
        { message: "Goodnight, you did it once again!", author: "Rubinhio" },
        { message: "Another day, another victory royale", author: "Ruben" },
        { message: "Je hebt het weer gefikst! Respect 👏", author: "Tilly" },
        { message: "Time to rest, you've earned it! 🎉", author: "Rubinhio" }
    ]
};

// Dagplanning data
const dayPlanning = {
    opening: [
        { 
            id: 'clock-in', 
            title: 'Inklokken', 
            description: 'BK Panel → HR → Clocking', 
            url: 'https://oauth.battlekart.com/authorize?client_id=d66a502f0a4b7690ed5808e0b559010b&redirect_uri=https%3A%2F%2Fpanel.battlekart.com%2F&response_type=id_token&scope=openid+profile+email&state=33be5a04e47045b69f25360d57512097&brand_id=2&flow=', 
            icon: '🕐' 
        },
        { 
            id: 'checklist', 
            title: 'Checklist overlopen opening piste & opening baan', 
            description: 'BK Panel → Checklists → Execute', 
            url: 'https://oauth.battlekart.com/authorize?client_id=d66a502f0a4b7690ed5808e0b559010b&redirect_uri=https%3A%2F%2Fpanel.battlekart.com%2F&response_type=id_token&scope=openid+profile+email&state=33be5a04e47045b69f25360d57512097&brand_id=2&flow=', 
            icon: '✅' 
        },
        { 
            id: 'cash-payments-morning', 
            title: 'Opening Kassa & Cash & Payments', 
            toolId: 'cash-payments', 
            icon: '💰' 
        },
        { 
            id: 'kart-daily', 
            title: 'Kart Daily Check', 
            toolId: 'kart-daily-logboek', 
            icon: '📋' 
        },
        { 
            id: 'kuismachine', 
            title: 'Kuismachine logs', 
            toolId: 'kuismachine-logs', 
            icon: '🧹' 
        }
    ],
    during: [],
    closing: [
        { 
            id: 'cash-payments-evening', 
            title: 'Cash & Payments Employees', 
            toolId: 'cash-payments', 
            icon: '💰' 
        },
        { 
            id: 'daily-report', 
            title: 'Daily Report', 
            toolId: 'daily-report', 
            icon: '📊' 
        }
    ]
};

// Firebase database referentie en functies (wordt gezet in index.html)
let database = null;
let firebaseFunctions = null;

// Huidige gebruiker naam
let currentUserName = null;

// Teller voor "Inklokken" checkbox clicks (easter egg)
let clockInClickCount = 0;
const CLOCK_IN_TRIGGER_COUNT = 5;

// Inactivity timer
let inactivityTimer = null;
const INACTIVITY_TIMEOUT = 10 * 60 * 1000; // 10 minuten in milliseconden

// Wacht tot Firebase geladen is
function waitForFirebase() {
    return new Promise((resolve) => {
        if (window.firebaseDatabase && window.firebaseDatabaseFunctions) {
            database = window.firebaseDatabase;
            firebaseFunctions = window.firebaseDatabaseFunctions;
            resolve();
        } else {
            // Wacht tot Firebase geladen is (max 5 seconden)
            let attempts = 0;
            const checkInterval = setInterval(() => {
                if (window.firebaseDatabase && window.firebaseDatabaseFunctions) {
                    database = window.firebaseDatabase;
                    firebaseFunctions = window.firebaseDatabaseFunctions;
                    clearInterval(checkInterval);
                    resolve();
                } else if (attempts++ > 50) {
                    clearInterval(checkInterval);
                    console.warn('Firebase niet geladen, gebruik alleen localStorage');
                    resolve();
                }
            }, 100);
        }
    });
}

// Laad dashboard bij pagina load
document.addEventListener('DOMContentLoaded', async () => {
    await waitForFirebase();
    
    // Check of er al een naam is opgeslagen
    currentUserName = getUserName();
    
    if (!currentUserName) {
        // Toon naam invoer modal
        showNameModal();
    } else {
        // Toon dashboard
        showDashboard();
        loadDashboard();
        setupFirebaseListeners();
        // Start inactivity timer
        startInactivityTimer();
    }
    
    // Setup activity listeners
    setupActivityListeners();
});

/**
 * Laad dashboard en toon alle tools
 */
async function loadDashboard() {
    // Check en reset dagplanning indien nodig
    await checkAndResetDayPlanning();
    
    // Render dagplanning
    await renderDayPlanning();
    
    const container = document.getElementById('tools-container');
    container.innerHTML = '';

    // Sorteer tools: eerst dagelijks, dan wekelijks
    const dailyTools = tools.filter(tool => tool.frequency === 'daily');
    const weeklyTools = tools.filter(tool => tool.frequency === 'weekly');

    // Toon dagelijkse taken
    for (const tool of dailyTools) {
        const toolCard = await createToolCard(tool);
        container.appendChild(toolCard);
    }

    // Voeg scheidingslijn toe tussen dagelijkse en wekelijkse taken
    if (dailyTools.length > 0 && weeklyTools.length > 0) {
        const divider = document.createElement('div');
        divider.className = 'frequency-divider';
        divider.innerHTML = '<div class="divider-line"></div><div class="divider-text">Wekelijkse taken</div><div class="divider-line"></div>';
        container.appendChild(divider);
    }

    // Toon wekelijkse taken
    for (const weeklyTool of weeklyTools) {
        const toolCard = await createToolCard(weeklyTool);
        container.appendChild(toolCard);
    }
}

/**
 * Maak een tool card element
 */
async function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.setAttribute('data-tool-id', tool.id);
    
    // Haal laatste klik data op (async) - inclusief gebruikersnaam
    const lastClickData = await getLastClickData(tool.id);
    const lastClick = lastClickData ? new Date(lastClickData.timestamp) : null;
    const lastClickText = lastClick 
        ? formatDateTime(lastClick) 
        : 'Nog niet geklikt';
    const lastClickUserName = lastClickData?.userName || null;
    
    // Bereken "X geleden" tag
    const timeAgoText = lastClick ? getTimeAgo(lastClick) : null;
    
    // Frequency badge
    const frequencyBadge = tool.frequency === 'daily' 
        ? '<span class="frequency-badge frequency-daily">Dagelijks</span>'
        : '<span class="frequency-badge frequency-weekly">Wekelijks</span>';

    // Speciale behandeling voor kuismachine-logs
    let kuismachineInfoHTML = '';
    let kartDailyInfoHTML = '';
    
    // Speciale behandeling voor kart-daily-logboek
    if (tool.id === 'kart-daily-logboek') {
        const status = await renderKartDailyStatus();
        if (status && status.lastCheck) {
            const logDate = new Date(status.lastCheck.timestamp);
            const dateTimeStr = formatDateTime(logDate);
            const userName = status.lastCheck.userName || 'Onbekend';
            const problemCount = status.problemCount;
            const allKartsCleaned = status.allKartsCleaned;
            
            // Verzamel kart nummers met problemen
            const problemKarts = [];
            if (status.lastCheck.karts) {
                Object.keys(status.lastCheck.karts).forEach(kartNum => {
                    const kart = status.lastCheck.karts[kartNum];
                    const hasProblem = kart.hasProblem === true || kart.hasProblem === 'true' || kart.hasProblem === 1 || kart.hasProblem === '1';
                    if (hasProblem) {
                        problemKarts.push({
                            number: parseInt(kartNum),
                            reason: kart.reason || 'Geen reden opgegeven'
                        });
                    }
                });
            }
            
            // Sorteer karts op nummer
            problemKarts.sort((a, b) => a.number - b.number);
            
            // Maak kort overzicht van problematische karts
            let problemKartsText = '';
            if (problemKarts.length > 0) {
                const kartNumbers = problemKarts.map(k => k.number).join(', ');
                problemKartsText = `<div class="info-item" style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #e0e0e0;">
                    <span class="info-label" style="font-size: 0.85rem; color: #666;">Problematische karts:</span>
                    <span class="info-value" style="font-size: 0.85rem; color: #dc3545; font-weight: 500;">${escapeHtml(kartNumbers)}</span>
                </div>`;
            }
            
            kartDailyInfoHTML = `
                <div class="info-item">
                    <span class="info-label">Laatst gecheckt:</span>
                    <span class="info-value">${escapeHtml(dateTimeStr)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Karts met problemen:</span>
                    <span class="info-value">${problemCount > 0 ? `<span style="color: #dc3545; font-weight: 600;">${problemCount}</span>` : '<span style="color: #28a745;">0</span>'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Alle karts gekuist:</span>
                    <span class="info-value">${allKartsCleaned ? '<span class="checkmark-yes">✓ Ja</span>' : '<span class="checkmark-no">✗ Nee</span>'}</span>
                </div>
                ${problemKartsText}
                <div class="info-item">
                    <span class="info-label">Door:</span>
                    <span class="info-value info-value-user">${escapeHtml(userName)}</span>
                </div>
            `;
        } else {
            kartDailyInfoHTML = `
                <div class="info-item">
                    <span class="info-label">Status:</span>
                    <span class="info-value empty">Nog niet gecheckt vandaag</span>
                </div>
            `;
        }
    }
    
    if (tool.id === 'kuismachine-logs') {
        const lastLog = await getLastKuismachineLog();
        if (lastLog) {
            const logDate = new Date(lastLog.timestamp);
            const dateTimeStr = formatDateTime(logDate);
            const userName = lastLog.userName || 'Onbekend';
            
            // Bepaal status per baan - expliciet controleren op boolean true
            // Firebase kan booleans soms als strings opslaan, dus we normaliseren ze
            const kuismachineGebruikt = lastLog.kuismachineGebruikt === true || lastLog.kuismachineGebruikt === 'true';
            const stofzuigerGebruikt = lastLog.stofzuigerGebruikt === true || lastLog.stofzuigerGebruikt === 'true';
            const kuismachinePisteA = lastLog.kuismachinePisteA === true || lastLog.kuismachinePisteA === 'true';
            const kuismachinePisteB = lastLog.kuismachinePisteB === true || lastLog.kuismachinePisteB === 'true';
            const stofzuigerPisteA = lastLog.stofzuigerPisteA === true || lastLog.stofzuigerPisteA === 'true';
            const stofzuigerPisteB = lastLog.stofzuigerPisteB === true || lastLog.stofzuigerPisteB === 'true';
            
            const baanAKuismachine = kuismachineGebruikt && kuismachinePisteA;
            const baanAStofzuiger = stofzuigerGebruikt && stofzuigerPisteA;
            const baanBKuismachine = kuismachineGebruikt && kuismachinePisteB;
            const baanBStofzuiger = stofzuigerGebruikt && stofzuigerPisteB;
            
            // Helper functie voor checkmark - expliciet controleren op true
            const getCheckmark = (value) => {
                const isTrue = value === true || value === 'true' || value === 1 || value === '1';
                return isTrue ? '<span class="checkmark-yes">✓</span>' : '<span class="checkmark-no">✗</span>';
            };
            
            kuismachineInfoHTML = `
                <div class="info-item">
                    <span class="info-label">Laatst ingevuld:</span>
                    <span class="info-value">${escapeHtml(dateTimeStr)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Baan A:</span>
                    <span class="info-value">
                        Kuismachine ${getCheckmark(baanAKuismachine)}, 
                        Stofzuiger ${getCheckmark(baanAStofzuiger)}
                    </span>
                </div>
                <div class="info-item">
                    <span class="info-label">Baan B:</span>
                    <span class="info-value">
                        Kuismachine ${getCheckmark(baanBKuismachine)}, 
                        Stofzuiger ${getCheckmark(baanBStofzuiger)}
                    </span>
                </div>
                ${lastLog.kuismachineGebruikt ? `
                <div class="info-item">
                    <span class="info-label">Kuismachine uitgekuist?</span>
                    <span class="info-value">${lastLog.kuismachineUitgekuist ? 'Ja' : 'Nee'}</span>
                </div>
                ${!lastLog.kuismachineUitgekuist && lastLog.kuismachineReden ? `
                <div class="info-item info-item-reason">
                    <span class="info-label"></span>
                    <span class="info-value info-value-reason">${escapeHtml(lastLog.kuismachineReden)}</span>
                </div>
                ` : ''}
                ` : ''}
                ${lastLog.stofzuigerGebruikt ? `
                <div class="info-item">
                    <span class="info-label">Stofzuiger uitgekuist?</span>
                    <span class="info-value">${lastLog.stofzuigerUitgekuist ? 'Ja' : 'Nee'}</span>
                </div>
                ${!lastLog.stofzuigerUitgekuist && lastLog.stofzuigerReden ? `
                <div class="info-item info-item-reason">
                    <span class="info-label"></span>
                    <span class="info-value info-value-reason">${escapeHtml(lastLog.stofzuigerReden)}</span>
                </div>
                ` : ''}
                ` : ''}
                <div class="info-item">
                    <span class="info-label">Door:</span>
                    <span class="info-value info-value-user">${escapeHtml(userName)}</span>
                </div>
            `;
        }
    }
    
    // Voor Kart Weekly: twee knoppen
    let actionsHTML = '';
    if (tool.id === 'kuismachine-logs') {
        // Check of er logs van vandaag zijn die nog niet uitgekuist zijn
        const todayLogs = await getTodayKuismachineLogs();
        const hasLogsToEdit = todayLogs.length > 0;
        
        // Speciale buttons voor kuismachine overlay
        actionsHTML = `
            <button class="tool-link-button" onclick="openKuismachineOverlay(event)">
                → Ga naar tool
            </button>
            <button class="tool-link-button tool-link-button-secondary" onclick="openKuismachineOverlayForEditing(event)" ${hasLogsToEdit ? 'style="background: #ffc107; border-color: #ffc107; color: #856404; font-weight: 600;"' : ''}>
                ✏️ Bewerk logs van vandaag${hasLogsToEdit ? ` (${todayLogs.length})` : ''}
            </button>
        `;
    } else if (tool.id === 'kart-daily-logboek') {
        // Speciale button voor kart daily overlay
        actionsHTML = `
            <button class="tool-link-button" onclick="openKartDailyOverlay(event)">
                → Start Daily Check
            </button>
        `;
    } else if (tool.hasMultipleLinks && tool.logboekUrl) {
        actionsHTML = `
            <a href="${escapeHtml(tool.url)}" 
               class="tool-link-button" 
               target="_blank"
               onclick="handleLinkClick('${tool.id}', event)">
                → Ga naar tool
            </a>
            <a href="${escapeHtml(tool.logboekUrl)}" 
               class="tool-link-button tool-link-button-secondary" 
               target="_blank"
               onclick="handleLinkClick('${tool.id}-logboek', event)">
                → Ga naar logboek
            </a>
        `;
    } else if (tool.url && tool.url !== '#') {
        actionsHTML = `
            <a href="${escapeHtml(tool.url)}" 
               class="tool-link-button" 
               target="_blank"
               onclick="handleLinkClick('${tool.id}', event)">
                → Ga naar tool
            </a>
        `;
    } else {
        actionsHTML = '<span class="tool-link-button disabled">Binnenkort beschikbaar</span>';
    }

    // Check of er een tutorial beschikbaar is voor deze tool
    const hasTutorial = tutorials[tool.id] !== undefined;
    const tutorialButton = hasTutorial 
        ? `<button class="tool-tutorial-btn" onclick="openTutorial('${tool.id}', event)" title="Tutorial bekijken">?</button>`
        : '';

    card.innerHTML = `
        <div class="tool-header">
            <div class="tool-title">${escapeHtml(tool.title)}</div>
            <div class="tool-header-right">
                ${frequencyBadge}
                ${tutorialButton}
            </div>
        </div>
        ${timeAgoText ? `<div class="time-ago-tag">${escapeHtml(timeAgoText)}</div>` : ''}
        <div class="tool-info">
            ${tool.id === 'kuismachine-logs' ? kuismachineInfoHTML : 
              tool.id === 'kart-daily-logboek' ? kartDailyInfoHTML : `
            <div class="info-item">
                <span class="info-label">Laatst geklikt:</span>
                <span class="info-value ${!lastClick ? 'empty' : ''}">${escapeHtml(lastClickText)}</span>
            </div>
            ${lastClickUserName ? `
            <div class="info-item">
                <span class="info-label">Door:</span>
                <span class="info-value info-value-user">${escapeHtml(lastClickUserName)}</span>
            </div>
            ` : ''}
            `}
        </div>
        <div class="tool-actions">
            ${actionsHTML}
        </div>
    `;

    return card;
}

/**
 * Haal gebruikersnaam op uit localStorage
 */
function getUserName() {
    try {
        return localStorage.getItem('userName');
    } catch (error) {
        console.error('Error getting user name:', error);
        return null;
    }
}

/**
 * Sla gebruikersnaam op in localStorage
 */
function saveUserName(name) {
    try {
        localStorage.setItem('userName', name.trim());
        currentUserName = name.trim();
    } catch (error) {
        console.error('Error saving user name:', error);
    }
}

/**
 * Toon naam invoer modal
 */
function showNameModal() {
    const modal = document.getElementById('name-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.getElementById('user-name-input').focus();
    }
}

/**
 * Verberg naam invoer modal
 */
function hideNameModal() {
    const modal = document.getElementById('name-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

/**
 * Toon dashboard
 */
function showDashboard() {
    const container = document.getElementById('main-container');
    const userNameDisplay = document.getElementById('current-user-name');
    
    if (container) {
        container.style.display = 'block';
    }
    
    if (userNameDisplay && currentUserName) {
        userNameDisplay.textContent = currentUserName;
    }
}

/**
 * Handle naam formulier submit
 */
function handleNameSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('user-name-input');
    const userName = nameInput.value.trim();
    
    if (userName && userName.length > 0) {
        saveUserName(userName);
        hideNameModal();
        showDashboard();
        loadDashboard();
        setupFirebaseListeners();
        // Start inactivity timer na login
        startInactivityTimer();
    }
}

/**
 * Wijzig gebruikersnaam
 */
function changeUserName() {
    const nameInput = document.getElementById('user-name-input');
    if (nameInput && currentUserName) {
        nameInput.value = currentUserName;
    }
    showNameModal();
}

/**
 * Start inactivity timer
 */
function startInactivityTimer() {
    // Clear bestaande timer
    resetInactivityTimer();
    
    // Start nieuwe timer
    inactivityTimer = setTimeout(() => {
        logoutUser();
    }, INACTIVITY_TIMEOUT);
}

/**
 * Reset inactivity timer
 */
function resetInactivityTimer() {
    if (inactivityTimer) {
        clearTimeout(inactivityTimer);
        inactivityTimer = null;
    }
}

/**
 * Logout gebruiker na inactivity
 */
function logoutUser() {
    // Clear gebruikersnaam
    currentUserName = null;
    try {
        localStorage.removeItem('userName');
    } catch (error) {
        console.error('Error removing userName:', error);
    }
    
    // Verberg dashboard
    const container = document.getElementById('main-container');
    if (container) {
        container.style.display = 'none';
    }
    
    // Sluit eventuele open overlays
    closeKuismachineOverlay();
    
    // Toon naam modal opnieuw
    showNameModal();
    
    console.log('Gebruiker uitgelogd wegens inactiviteit');
}

/**
 * Setup activity listeners om inactivity timer te resetten
 */
function setupActivityListeners() {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    events.forEach(event => {
        document.addEventListener(event, () => {
            // Reset timer alleen als gebruiker ingelogd is
            if (currentUserName) {
                resetInactivityTimer();
                startInactivityTimer();
            }
        }, { passive: true });
    });
}

/**
 * Handle quick link click - log de klik tijd
 */
function handleQuickLinkClick(linkId) {
    // Check of er een gebruikersnaam is
    if (!currentUserName) {
        showNameModal();
        return;
    }
    
    // Log de klik tijd
    const now = new Date();
    saveClickLog(linkId, now);
}

// Tutorial tour state
let currentTutorialStep = 0;
let tutorialActive = false;
let tutorialOverlay = null;

/**
 * Open help tutorial - start de algemene tutorial tour
 */
function openHelpTutorial() {
    if (tutorialActive) {
        return; // Tutorial is al actief
    }
    startGeneralTutorial();
}

/**
 * Start de algemene tutorial tour
 */
function startGeneralTutorial() {
    if (!generalTutorial || !generalTutorial.steps || generalTutorial.steps.length === 0) {
        console.error('Geen tutorial data beschikbaar');
        return;
    }

    tutorialActive = true;
    currentTutorialStep = 0;
    
    // Maak overlay aan
    createTutorialOverlay();
    
    // Toon eerste stap
    showTutorialStep(0);
    
    // Voeg keyboard listeners toe
    document.addEventListener('keydown', handleTutorialKeyboard);
}

/**
 * Maak de tutorial overlay aan
 */
function createTutorialOverlay() {
    // Verwijder bestaande overlay als die er is
    const existing = document.getElementById('tutorial-tour-overlay');
    if (existing) {
        existing.remove();
    }

    // Maak nieuwe overlay
    tutorialOverlay = document.createElement('div');
    tutorialOverlay.id = 'tutorial-tour-overlay';
    tutorialOverlay.className = 'tutorial-tour-overlay';
    tutorialOverlay.innerHTML = `
        <div class="tutorial-spotlight"></div>
        <div class="tutorial-tooltip" data-position="center">
            <div class="tutorial-tooltip-header">
                <h3 class="tutorial-tooltip-title"></h3>
                <button class="tutorial-tooltip-close" onclick="closeGeneralTutorial()" aria-label="Sluiten">&times;</button>
            </div>
            <div class="tutorial-tooltip-content"></div>
            <div class="tutorial-tooltip-footer">
                <button class="btn-secondary" onclick="previousTutorialStep()" id="tutorial-prev-btn">Vorige</button>
                <div class="tutorial-progress">
                    <span class="tutorial-step-indicator">Stap <span id="tutorial-current-step">1</span> van <span id="tutorial-total-steps">10</span></span>
                </div>
                <button class="btn-primary" onclick="nextTutorialStep()" id="tutorial-next-btn">Volgende</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(tutorialOverlay);
    document.body.style.overflow = 'hidden';
}

/**
 * Toon een specifieke tutorial stap
 */
function showTutorialStep(stepIndex) {
    if (!generalTutorial || !generalTutorial.steps || stepIndex < 0 || stepIndex >= generalTutorial.steps.length) {
        console.error('Ongeldige tutorial stap:', stepIndex);
        return;
    }

    currentTutorialStep = stepIndex;
    const step = generalTutorial.steps[stepIndex];
    
    // Update tooltip content
    const titleEl = tutorialOverlay.querySelector('.tutorial-tooltip-title');
    const contentEl = tutorialOverlay.querySelector('.tutorial-tooltip-content');
    const progressEl = document.getElementById('tutorial-current-step');
    const totalStepsEl = document.getElementById('tutorial-total-steps');
    const prevBtn = document.getElementById('tutorial-prev-btn');
    const nextBtn = document.getElementById('tutorial-next-btn');
    
    if (titleEl) titleEl.textContent = step.title;
    if (contentEl) {
        contentEl.innerHTML = step.content.replace(/\n/g, '<br>');
    }
    if (progressEl) progressEl.textContent = stepIndex + 1;
    if (totalStepsEl) totalStepsEl.textContent = generalTutorial.steps.length;
    
    // Update knoppen
    if (prevBtn) {
        prevBtn.disabled = stepIndex === 0;
        prevBtn.style.opacity = stepIndex === 0 ? '0.5' : '1';
    }
    if (nextBtn) {
        const isLastStep = stepIndex === generalTutorial.steps.length - 1;
        nextBtn.textContent = isLastStep ? 'Afronden' : 'Volgende';
    }
    
    // Update tooltip positie
    const tooltip = tutorialOverlay.querySelector('.tutorial-tooltip');
    if (tooltip) {
        tooltip.setAttribute('data-position', step.position || 'center');
    }
    
    // Bij stap 10 (laatste stap), scroll naar boven
    if (stepIndex === generalTutorial.steps.length - 1) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Highlight element
    if (step.target && step.highlight !== 'none') {
        // Wacht even zodat overlay volledig is gerenderd
        setTimeout(() => {
            highlightElement(step.target, step.position);
        }, 100);
    } else {
        removeHighlight();
        // Center tooltip voor geen highlight
        if (tooltip) {
            tooltip.style.position = 'fixed';
            tooltip.style.top = '50%';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translate(-50%, -50%)';
        }
    }
}

/**
 * Highlight een element met spotlight effect
 */
function highlightElement(selector, position) {
    if (!selector) {
        removeHighlight();
        return;
    }

    const element = document.querySelector(selector);
    if (!element) {
        console.warn('Element niet gevonden:', selector);
        removeHighlight();
        return;
    }

    // Scroll naar element
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Wacht langer voor scroll animatie en herhaal tot element stabiel is
    let attempts = 0;
    const maxAttempts = 10;
    
    const updateSpotlight = () => {
        const rect = element.getBoundingClientRect();
        const spotlight = tutorialOverlay.querySelector('.tutorial-spotlight');
        const tooltip = tutorialOverlay.querySelector('.tutorial-tooltip');
        
        if (!spotlight || !tooltip) return;
        
        // Check of element nog steeds op dezelfde plek staat (scroll animatie klaar)
        const currentTop = rect.top;
        const currentLeft = rect.left;
        
        // Wacht 50ms en check opnieuw
        setTimeout(() => {
            const newRect = element.getBoundingClientRect();
            // Als positie is veranderd, wacht nog even
            if (Math.abs(newRect.top - currentTop) > 1 || Math.abs(newRect.left - currentLeft) > 1) {
                attempts++;
                if (attempts < maxAttempts) {
                    updateSpotlight();
                } else {
                    // Gebruik laatste rect zelfs als nog niet stabiel
                    applySpotlight(newRect, spotlight, tooltip, position);
                }
            } else {
                // Positie is stabiel, pas spotlight toe
                applySpotlight(newRect, spotlight, tooltip, position);
            }
        }, 50);
    };
    
    const applySpotlight = (rect, spotlight, tooltip, position) => {
        const padding = 15;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Extra padding voor elementen onderaan het scherm (zoals footer)
        const isNearBottom = rect.bottom > viewportHeight * 0.7;
        const bottomPadding = isNearBottom ? padding + 30 : padding; // Extra ruimte onderaan
        
        // Clip-path coördinaten (viewport-relative, absoluut)
        const left = Math.max(0, rect.left - padding);
        const top = Math.max(0, rect.top - padding);
        const right = Math.min(viewportWidth, rect.right + padding);
        // Geef extra ruimte onderaan als element onderaan scherm is
        const bottom = Math.min(viewportHeight, rect.bottom + bottomPadding);
        
        // Maak clip-path polygon - gebruik absoluut pixel waarden
        spotlight.style.clipPath = `polygon(
            0px 0px, 
            0px ${viewportHeight}px, 
            ${left}px ${viewportHeight}px, 
            ${left}px ${top}px, 
            ${right}px ${top}px, 
            ${right}px ${bottom}px, 
            ${left}px ${bottom}px, 
            ${left}px ${viewportHeight}px, 
            ${viewportWidth}px ${viewportHeight}px, 
            ${viewportWidth}px 0px
        )`;
        
        spotlight.style.display = 'block';
        positionTooltip(tooltip, rect, position);
    };
    
    // Start na initiële delay
    setTimeout(updateSpotlight, 300);
}

/**
 * Positioneer tooltip relatief aan element
 */
function positionTooltip(tooltip, elementRect, position) {
    // Wacht even zodat tooltip volledig is gerenderd voor getBoundingClientRect
    setTimeout(() => {
        const tooltipRect = tooltip.getBoundingClientRect();
        const padding = 30; // Verhoogde padding om overlap te voorkomen
        let top, left;
        
        switch (position) {
            case 'top':
                top = elementRect.top - tooltipRect.height - padding;
                left = elementRect.left + (elementRect.width / 2) - (tooltipRect.width / 2);
                // Als tooltip te hoog is, plaats onder element
                if (top < padding) {
                    top = elementRect.bottom + padding;
                }
                break;
            case 'bottom':
                top = elementRect.bottom + padding;
                left = elementRect.left + (elementRect.width / 2) - (tooltipRect.width / 2);
                // Als tooltip te laag is of over element zou vallen, plaats boven element
                if (top + tooltipRect.height > window.innerHeight - padding) {
                    top = elementRect.top - tooltipRect.height - padding;
                    // Als dat ook niet werkt (element is onderaan scherm), plaats rechts of links
                    if (top < padding) {
                        // Probeer rechts
                        if (elementRect.right + tooltipRect.width + padding < window.innerWidth) {
                            top = elementRect.top + (elementRect.height / 2) - (tooltipRect.height / 2);
                            left = elementRect.right + padding;
                        } else if (elementRect.left - tooltipRect.width - padding > 0) {
                            // Probeer links
                            top = elementRect.top + (elementRect.height / 2) - (tooltipRect.height / 2);
                            left = elementRect.left - tooltipRect.width - padding;
                        }
                    }
                }
                break;
            case 'left':
                top = elementRect.top + (elementRect.height / 2) - (tooltipRect.height / 2);
                left = elementRect.left - tooltipRect.width - padding;
                // Als tooltip te ver links is, plaats rechts van element
                if (left < padding) {
                    left = elementRect.right + padding;
                }
                break;
            case 'right':
                top = elementRect.top + (elementRect.height / 2) - (tooltipRect.height / 2);
                left = elementRect.right + padding;
                // Als tooltip te ver rechts is, plaats links van element
                if (left + tooltipRect.width > window.innerWidth - padding) {
                    left = elementRect.left - tooltipRect.width - padding;
                }
                break;
            default: // center
                top = window.innerHeight / 2 - tooltipRect.height / 2;
                left = window.innerWidth / 2 - tooltipRect.width / 2;
        }
        
        // Zorg dat tooltip binnen viewport blijft (met extra marge)
        top = Math.max(padding, Math.min(top, window.innerHeight - tooltipRect.height - padding));
        left = Math.max(padding, Math.min(left, window.innerWidth - tooltipRect.width - padding));
        
        tooltip.style.position = 'fixed';
        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
        tooltip.style.transform = 'none';
    }, 50);
}

/**
 * Verwijder alle highlights
 */
function removeHighlight() {
    const spotlight = tutorialOverlay?.querySelector('.tutorial-spotlight');
    if (spotlight) {
        // Verberg spotlight volledig (geen cutout)
        spotlight.style.clipPath = 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)';
    }
}

/**
 * Ga naar volgende tutorial stap
 */
function nextTutorialStep() {
    if (currentTutorialStep < generalTutorial.steps.length - 1) {
        const nextStep = currentTutorialStep + 1;
        // Als we naar de laatste stap gaan (stap 10), scroll naar boven
        if (nextStep === generalTutorial.steps.length - 1) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        showTutorialStep(nextStep);
    } else {
        closeGeneralTutorial();
    }
}

/**
 * Ga naar vorige tutorial stap
 */
function previousTutorialStep() {
    if (currentTutorialStep > 0) {
        showTutorialStep(currentTutorialStep - 1);
    }
}

/**
 * Sluit de algemene tutorial
 */
function closeGeneralTutorial() {
    tutorialActive = false;
    currentTutorialStep = 0;
    
    // Verwijder keyboard listeners
    document.removeEventListener('keydown', handleTutorialKeyboard);
    
    // Verwijder overlay
    if (tutorialOverlay) {
        tutorialOverlay.remove();
        tutorialOverlay = null;
    }
    
    document.body.style.overflow = '';
}

/**
 * Handle keyboard events voor tutorial
 */
function handleTutorialKeyboard(event) {
    if (!tutorialActive) return;
    
    switch (event.key) {
        case 'Escape':
            closeGeneralTutorial();
            event.preventDefault();
            break;
        case 'ArrowRight':
        case 'ArrowDown':
            nextTutorialStep();
            event.preventDefault();
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
            previousTutorialStep();
            event.preventDefault();
            break;
    }
}

/**
 * Handle link click - log de klik tijd
 */
function handleLinkClick(toolId, event) {
    // Check of er een gebruikersnaam is
    if (!currentUserName) {
        showNameModal();
        return;
    }
    
    // Speciale behandeling voor Daily Report - toon waarschuwing
    if (toolId === 'daily-report') {
        event.preventDefault();
        showDailyReportWarning();
        return;
    }
    
    // Log de klik tijd
    const now = new Date();
    
    // Voor logboek clicks, sla op onder de basis toolId
    const baseToolId = toolId.replace('-logboek', '');
    saveClickLog(baseToolId, now);
    
    // Update de weergave (met gebruikersnaam)
    updateLastClickDisplay(baseToolId, now, currentUserName);
}

/**
 * Sla volledige click log op in Firebase (met gebruikersnaam en geschiedenis)
 */
async function saveClickLog(toolId, dateTime) {
    if (!currentUserName) {
        console.warn('Geen gebruikersnaam, kan click niet loggen');
        return;
    }
    
    const clickData = {
        userName: currentUserName,
        toolId: toolId,
        timestamp: dateTime.getTime(),
        dateTime: dateTime.toISOString()
    };
    
    // Sla ook op in localStorage als laatste klik (voor fallback)
    try {
        localStorage.setItem(`lastClick_${toolId}`, JSON.stringify({
            timestamp: dateTime.getTime(),
            dateTime: dateTime.toISOString(),
            userName: currentUserName
        }));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
    
    // Sla volledige log op in Firebase (push = voeg toe, niet overschrijf)
    if (database && firebaseFunctions) {
        try {
            const { ref, push } = firebaseFunctions;
            const logsRef = ref(database, `logs/${toolId}`);
            await push(logsRef, clickData);
            
            // Sla ook laatste klik op voor snelle toegang
            const lastClickRef = ref(database, `clicks/${toolId}`);
            const { set } = firebaseFunctions;
            await set(lastClickRef, {
                timestamp: dateTime.getTime(),
                dateTime: dateTime.toISOString(),
                userName: currentUserName
            });
        } catch (error) {
            console.error('Error saving to Firebase:', error);
        }
    }
}

/**
 * Haal laatste klik data op uit Firebase of localStorage (inclusief gebruikersnaam)
 */
async function getLastClickData(toolId) {
    // Probeer eerst Firebase (als beschikbaar)
    if (database && firebaseFunctions) {
        try {
            const { ref, get } = firebaseFunctions;
            const clickRef = ref(database, `clicks/${toolId}`);
            const snapshot = await get(clickRef);
            
            if (snapshot.exists()) {
                const data = snapshot.val();
                return {
                    timestamp: data.timestamp,
                    dateTime: data.dateTime,
                    userName: data.userName || null
                };
            }
        } catch (error) {
            console.error('Error loading from Firebase:', error);
        }
    }
    
    // Fallback naar localStorage
    try {
        const stored = localStorage.getItem(`lastClick_${toolId}`);
        if (stored) {
            const data = JSON.parse(stored);
            return {
                timestamp: data.timestamp,
                dateTime: data.dateTime,
                userName: data.userName || null
            };
        }
    } catch (error) {
        console.error('Error loading from localStorage:', error);
    }
    
    return null;
}

/**
 * Haal laatste klik tijd op uit Firebase of localStorage (backward compatibility)
 */
async function getLastClick(toolId) {
    const data = await getLastClickData(toolId);
    return data ? new Date(data.timestamp) : null;
}

/**
 * Update de weergave van laatste klik tijd en gebruikersnaam
 */
function updateLastClickDisplay(toolId, dateTime, userName = null) {
    // Voor logboek clicks, gebruik de basis toolId
    const baseToolId = toolId.replace('-logboek', '');
    const card = document.querySelector(`.tool-card[data-tool-id="${baseToolId}"]`);
    if (card) {
        const infoValue = card.querySelector('.info-value');
        if (infoValue) {
            infoValue.textContent = formatDateTime(dateTime);
            infoValue.classList.remove('empty');
        }
        
        // Update of voeg gebruikersnaam toe
        const toolInfo = card.querySelector('.tool-info');
        if (toolInfo && userName) {
            // Zoek naar bestaande gebruikersnaam item
            const allInfoItems = toolInfo.querySelectorAll('.info-item');
            let userNameItem = null;
            for (const item of allInfoItems) {
                if (item.querySelector('.info-value-user')) {
                    userNameItem = item;
                    break;
                }
            }
            
            if (!userNameItem) {
                // Voeg nieuwe regel toe voor gebruikersnaam
                userNameItem = document.createElement('div');
                userNameItem.className = 'info-item';
                userNameItem.innerHTML = `
                    <span class="info-label">Door:</span>
                    <span class="info-value info-value-user">${escapeHtml(userName)}</span>
                `;
                toolInfo.appendChild(userNameItem);
            } else {
                // Update bestaande gebruikersnaam
                const userNameValue = userNameItem.querySelector('.info-value-user');
                if (userNameValue) {
                    userNameValue.textContent = userName;
                }
            }
        }
        
        // Update time-ago tag
        const timeAgoTag = card.querySelector('.time-ago-tag');
        if (timeAgoTag) {
            timeAgoTag.textContent = getTimeAgo(dateTime);
        } else if (dateTime) {
            // Voeg time-ago tag toe als deze nog niet bestaat
            const toolHeader = card.querySelector('.tool-header');
            if (toolHeader && toolHeader.nextElementSibling) {
                const newTag = document.createElement('div');
                newTag.className = 'time-ago-tag';
                newTag.textContent = getTimeAgo(dateTime);
                toolHeader.parentNode.insertBefore(newTag, toolHeader.nextElementSibling);
            }
        }
    }
}

/**
 * Setup Firebase real-time listeners voor alle tools
 */
async function setupFirebaseListeners() {
    if (!database || !firebaseFunctions) {
        console.log('Firebase niet beschikbaar, geen real-time sync');
        return;
    }

    try {
        const { ref, onValue } = firebaseFunctions;
        const clicksRef = ref(database, 'clicks');
        
        // Luister naar alle clicks (laatste klik per tool)
        onValue(clicksRef, (snapshot) => {
            if (snapshot.exists()) {
                const allClicks = snapshot.val();
                
                // Update elke tool die een update heeft gekregen
                Object.keys(allClicks).forEach(toolId => {
                    const clickData = allClicks[toolId];
                    const dateTime = new Date(clickData.timestamp);
                    const userName = clickData.userName || null;
                    
                    // Update de weergave (met gebruikersnaam)
                    updateLastClickDisplay(toolId, dateTime, userName);
                    
                    // Update ook localStorage als backup
                    try {
                        localStorage.setItem(`lastClick_${toolId}`, JSON.stringify(clickData));
                    } catch (error) {
                        console.error('Error updating localStorage:', error);
                    }
                });
            }
        }, (error) => {
            console.error('Error in Firebase listener:', error);
        });
        
        // Luister naar kuismachine logs voor real-time updates
        const kuismachineLogsRef = ref(database, 'logs/kuismachine-logs');
        onValue(kuismachineLogsRef, async (snapshot) => {
            if (snapshot.exists()) {
                // Update kuismachine tool card wanneer logs veranderen
                const toolCard = document.querySelector('.tool-card[data-tool-id="kuismachine-logs"]');
                if (toolCard) {
                    // Herlaad alleen de kuismachine tool card
                    const kuismachineTool = tools.find(t => t.id === 'kuismachine-logs');
                    if (kuismachineTool) {
                        const newCard = await createToolCard(kuismachineTool);
                        toolCard.replaceWith(newCard);
                    }
                }
            }
        }, (error) => {
            console.error('Error in kuismachine logs listener:', error);
        });
        
        // Luister naar kart daily checks voor real-time updates
        const kartDailyChecksRef = ref(database, 'logs/kart-daily-checks');
        onValue(kartDailyChecksRef, async (snapshot) => {
            // Update kart daily tool card wanneer checks veranderen (ook als er geen checks zijn)
            const toolCard = document.querySelector('.tool-card[data-tool-id="kart-daily-logboek"]');
            if (toolCard) {
                // Herlaad alleen de kart daily tool card
                const kartDailyTool = tools.find(t => t.id === 'kart-daily-logboek');
                if (kartDailyTool) {
                    const newCard = await createToolCard(kartDailyTool);
                    toolCard.replaceWith(newCard);
                }
            }
        }, (error) => {
            console.error('Error in kart daily checks listener:', error);
        });
        
        // Luister ook naar clicks voor kart-daily-logboek voor real-time updates
        const kartDailyClickRef = ref(database, 'clicks/kart-daily-logboek');
        onValue(kartDailyClickRef, async (snapshot) => {
            if (snapshot.exists()) {
                // Update kart daily tool card wanneer click data verandert
                const toolCard = document.querySelector('.tool-card[data-tool-id="kart-daily-logboek"]');
                if (toolCard) {
                    const kartDailyTool = tools.find(t => t.id === 'kart-daily-logboek');
                    if (kartDailyTool) {
                        const newCard = await createToolCard(kartDailyTool);
                        toolCard.replaceWith(newCard);
                    }
                }
            }
        }, (error) => {
            console.error('Error in kart daily click listener:', error);
        });
        
        console.log('Firebase real-time listeners actief');
        console.log('Alle click logs zijn beschikbaar in Firebase onder: logs/{toolId}/');
    } catch (error) {
        console.error('Error setting up Firebase listeners:', error);
    }
}

/**
 * Format datum en tijd voor weergave
 */
function formatDateTime(date) {
    if (!date) return '';
    
    try {
        const dateObj = date instanceof Date ? date : new Date(date);
        if (isNaN(dateObj.getTime())) {
            return date.toString();
        }
        
        return dateObj.toLocaleString('nl-NL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (error) {
        return date.toString();
    }
}

/**
 * Bereken "X geleden" tekst
 */
function getTimeAgo(date) {
    if (!date) return '';
    
    try {
        const dateObj = date instanceof Date ? date : new Date(date);
        if (isNaN(dateObj.getTime())) {
            return '';
        }
        
        const now = new Date();
        const diffMs = now - dateObj;
        const diffSeconds = Math.floor(diffMs / 1000);
        const diffMinutes = Math.floor(diffSeconds / 60);
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);
        const diffWeeks = Math.floor(diffDays / 7);
        const diffMonths = Math.floor(diffDays / 30);
        
        if (diffSeconds < 60) {
            return 'Zojuist';
        } else if (diffMinutes < 60) {
            return `${diffMinutes} ${diffMinutes === 1 ? 'minuut' : 'minuten'} geleden`;
        } else if (diffHours < 24) {
            return `${diffHours} ${diffHours === 1 ? 'uur' : 'uren'} geleden`;
        } else if (diffDays < 7) {
            return `${diffDays} ${diffDays === 1 ? 'dag' : 'dagen'} geleden`;
        } else if (diffWeeks < 4) {
            return `${diffWeeks} ${diffWeeks === 1 ? 'week' : 'weken'} geleden`;
        } else if (diffMonths < 12) {
            return `${diffMonths} ${diffMonths === 1 ? 'maand' : 'maanden'} geleden`;
        } else {
            const diffYears = Math.floor(diffMonths / 12);
            return `${diffYears} ${diffYears === 1 ? 'jaar' : 'jaren'} geleden`;
        }
    } catch (error) {
        return '';
    }
}

/**
 * Escape HTML om XSS te voorkomen
 */
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Open kuismachine overlay voor bewerken (scrollt naar bewerk sectie)
 */
async function openKuismachineOverlayForEditing(event) {
    await openKuismachineOverlay(event);
    
    // Scroll naar bewerk sectie na korte delay (om te zorgen dat overlay geladen is)
    setTimeout(() => {
        const editSection = document.getElementById('edit-today-logs-section');
        if (editSection && editSection.style.display !== 'none') {
            editSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Highlight de sectie kort
            editSection.style.transition = 'box-shadow 0.3s ease';
            editSection.style.boxShadow = '0 0 20px rgba(255, 193, 7, 0.5)';
            setTimeout(() => {
                editSection.style.boxShadow = '';
            }, 2000);
        }
    }, 300);
}

/**
 * Open kuismachine overlay
 */
async function openKuismachineOverlay(event) {
    if (event) {
        event.preventDefault();
    }
    
    if (!currentUserName) {
        showNameModal();
        return;
    }
    
    const overlay = document.getElementById('kuismachine-overlay');
    const form = document.getElementById('kuismachine-form');
    const errorDiv = document.getElementById('kuismachine-form-error');
    
    // Reset formulier
    form.reset();
    errorDiv.style.display = 'none';
    errorDiv.textContent = '';
    
    // Verberg alle machine velden
    document.getElementById('kuismachine-fields').style.display = 'none';
    document.getElementById('stofzuiger-fields').style.display = 'none';
    const kuismachineNietGebruiktReason = document.getElementById('kuismachine-niet-gebruikt-reason');
    const stofzuigerNietGebruiktReason = document.getElementById('stofzuiger-niet-gebruikt-reason');
    if (kuismachineNietGebruiktReason) kuismachineNietGebruiktReason.style.display = 'none';
    if (stofzuigerNietGebruiktReason) stofzuigerNietGebruiktReason.style.display = 'none';
    
    // Reset uitgekuist checkboxes en reden velden
    document.getElementById('kuismachine-uitgekuist').checked = false;
    document.getElementById('stofzuiger-uitgekuist').checked = false;
    document.getElementById('kuismachine-reden').value = '';
    document.getElementById('stofzuiger-reden').value = '';
    
    // Reset niet-gebruikt reden velden
    const kuismachineNietGebruiktReden = document.getElementById('kuismachine-niet-gebruikt-reden');
    const stofzuigerNietGebruiktReden = document.getElementById('stofzuiger-niet-gebruikt-reden');
    if (kuismachineNietGebruiktReden) {
        kuismachineNietGebruiktReden.value = '';
        kuismachineNietGebruiktReden.required = false;
    }
    if (stofzuigerNietGebruiktReden) {
        stofzuigerNietGebruiktReden.value = '';
        stofzuigerNietGebruiktReden.required = false;
    }
    
    // Update required status voor reden velden
    toggleUitgekuistFields('kuismachine');
    toggleUitgekuistFields('stofzuiger');
    
    // Reset editing flag en submit button tekst
    delete form.dataset.editingLogId;
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.textContent = 'Opslaan';
    }
    
    // Laad en toon logs van vandaag die nog niet uitgekuist zijn
    await loadTodayLogsForEditing();
    
    // Toon overlay
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

/**
 * Sluit kuismachine overlay
 */
function closeKuismachineOverlay() {
    const overlay = document.getElementById('kuismachine-overlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    // Reset editing flag en submit button tekst
    const form = document.getElementById('kuismachine-form');
    if (form) {
        delete form.dataset.editingLogId;
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.textContent = 'Opslaan';
        }
    }
}

/**
 * Toggle machine section velden
 */
function toggleMachineSection(machineType) {
    const checkbox = document.getElementById(`${machineType}-gebruikt`);
    const fields = document.getElementById(`${machineType}-fields`);
    const nietGebruiktReason = document.getElementById(`${machineType}-niet-gebruikt-reason`);
    const nietGebruiktRedenInput = document.getElementById(`${machineType}-niet-gebruikt-reden`);
    
    // Check of de andere machine gebruikt wordt
    const otherMachineType = machineType === 'kuismachine' ? 'stofzuiger' : 'kuismachine';
    const otherMachineUsed = document.getElementById(`${otherMachineType}-gebruikt`).checked;
    
    if (checkbox.checked) {
        // Machine wordt gebruikt - toon velden, verberg niet-gebruikt reden
        fields.style.display = 'block';
        if (nietGebruiktReason) {
            nietGebruiktReason.style.display = 'none';
            if (nietGebruiktRedenInput) {
                nietGebruiktRedenInput.required = false;
                nietGebruiktRedenInput.value = '';
            }
        }
    } else {
        // Machine wordt niet gebruikt
        fields.style.display = 'none';
        // Reset velden
        document.getElementById(`${machineType}-piste-a`).checked = false;
        document.getElementById(`${machineType}-piste-b`).checked = false;
        document.getElementById(`${machineType}-uitgekuist`).checked = false;
        document.getElementById(`${machineType}-begintijd`).value = '';
        document.getElementById(`${machineType}-eindtijd`).value = '';
        document.getElementById(`${machineType}-reden`).value = '';
        // Reset required status
        toggleUitgekuistFields(machineType);
        
        // Als de andere machine ook niet gebruikt wordt, toon dan niet-gebruikt reden
        // Als alleen deze machine niet gebruikt wordt, toon reden
        if (!otherMachineUsed) {
            // Beide machines niet gebruikt - geen reden nodig (beide zijn optioneel)
            if (nietGebruiktReason) {
                nietGebruiktReason.style.display = 'none';
                if (nietGebruiktRedenInput) {
                    nietGebruiktRedenInput.required = false;
                    nietGebruiktRedenInput.value = '';
                }
            }
        } else {
            // Alleen deze machine niet gebruikt - reden verplicht
            if (nietGebruiktReason) {
                nietGebruiktReason.style.display = 'block';
                if (nietGebruiktRedenInput) {
                    nietGebruiktRedenInput.required = true;
                }
            }
        }
    }
    
    // Update de andere machine's niet-gebruikt reden veld ook
    updateOtherMachineReasonField(otherMachineType);
}

/**
 * Update het niet-gebruikt reden veld voor de andere machine
 */
function updateOtherMachineReasonField(machineType) {
    const checkbox = document.getElementById(`${machineType}-gebruikt`);
    const nietGebruiktReason = document.getElementById(`${machineType}-niet-gebruikt-reason`);
    const nietGebruiktRedenInput = document.getElementById(`${machineType}-niet-gebruikt-reden`);
    
    if (!checkbox || !nietGebruiktReason) return;
    
    const otherMachineType = machineType === 'kuismachine' ? 'stofzuiger' : 'kuismachine';
    const otherMachineUsed = document.getElementById(`${otherMachineType}-gebruikt`).checked;
    
    if (!checkbox.checked && otherMachineUsed) {
        // Deze machine niet gebruikt, andere wel - reden verplicht
        nietGebruiktReason.style.display = 'block';
        if (nietGebruiktRedenInput) {
            nietGebruiktRedenInput.required = true;
        }
    } else {
        // Deze machine gebruikt OF beide niet gebruikt - geen reden nodig
        nietGebruiktReason.style.display = 'none';
        if (nietGebruiktRedenInput) {
            nietGebruiktRedenInput.required = false;
            nietGebruiktRedenInput.value = '';
        }
    }
}

/**
 * Toggle uitgekuist reden velden
 */
function toggleUitgekuistFields(machineType) {
    const checkbox = document.getElementById(`${machineType}-uitgekuist`);
    const redenFields = document.getElementById(`${machineType}-reden-fields`);
    const redenInput = document.getElementById(`${machineType}-reden`);
    const requiredSpan = document.getElementById(`${machineType}-reden-required`);
    
    // Veld is altijd zichtbaar, alleen required status verandert
    if (!checkbox.checked) {
        // Niet uitgekuist - maak veld verplicht
        redenInput.required = true;
        if (requiredSpan) {
            requiredSpan.style.display = 'inline';
        }
    } else {
        // Wel uitgekuist - veld is niet verplicht
        redenInput.required = false;
        if (requiredSpan) {
            requiredSpan.style.display = 'none';
        }
    }
}

/**
 * Valideer tijd formaat (accepteert zowel punt als komma)
 */
function validateTimeFormat(time, machineType) {
    if (!time || time.trim() === '') {
        return false;
    }
    
    // Accepteert getallen met punt of komma als decimaal scheidingsteken
    const timeRegex = /^[0-9]+([,\.][0-9]+)?$/;
    return timeRegex.test(time.trim());
}

/**
 * Converteer tijd naar komma format (punt wordt komma)
 */
function convertTimeToCommaFormat(time) {
    if (!time) return '';
    return time.trim().replace('.', ',');
}

/**
 * Valideer kuismachine formulier
 */
function validateKuismachineForm(formData) {
    const errors = [];
    
    // Minimaal één machine moet gebruikt zijn
    if (!formData.kuismachineGebruikt && !formData.stofzuigerGebruikt) {
        errors.push('Selecteer minimaal één machine (kuismachine of stofzuiger)');
    }
    
    // Als alleen één machine gebruikt wordt, moet er een reden zijn voor de andere
    if (formData.kuismachineGebruikt && !formData.stofzuigerGebruikt) {
        if (!formData.stofzuigerNietGebruiktReden || formData.stofzuigerNietGebruiktReden.trim() === '') {
            errors.push('Geef een reden op waarom de stofzuiger niet gebruikt is');
        }
    }
    
    if (!formData.kuismachineGebruikt && formData.stofzuigerGebruikt) {
        if (!formData.kuismachineNietGebruiktReden || formData.kuismachineNietGebruiktReden.trim() === '') {
            errors.push('Geef een reden op waarom de kuismachine niet gebruikt is');
        }
    }
    
    // Valideer kuismachine velden
    if (formData.kuismachineGebruikt) {
        if (!formData.kuismachinePisteA && !formData.kuismachinePisteB) {
            errors.push('Selecteer minimaal één piste voor de kuismachine (A of B)');
        }
        if (!formData.kuismachineBegintijd || formData.kuismachineBegintijd.trim() === '') {
            errors.push('Kuismachine begintijd is verplicht');
        } else if (!validateTimeFormat(formData.kuismachineBegintijd, 'kuismachine')) {
            errors.push('Kuismachine begintijd moet een getal zijn (bijv. 210,3 of 210.3)');
        }
        if (!formData.kuismachineEindtijd || formData.kuismachineEindtijd.trim() === '') {
            errors.push('Kuismachine eindtijd is verplicht');
        } else if (!validateTimeFormat(formData.kuismachineEindtijd, 'kuismachine')) {
            errors.push('Kuismachine eindtijd moet een getal zijn (bijv. 210,3 of 210.3)');
        }
        if (!formData.kuismachineUitgekuist) {
            if (!formData.kuismachineReden || formData.kuismachineReden.trim() === '') {
                errors.push('Geef een reden op waarom de kuismachine niet uitgekuist kon worden');
            }
        }
    }
    
    // Valideer stofzuiger velden
    if (formData.stofzuigerGebruikt) {
        if (!formData.stofzuigerPisteA && !formData.stofzuigerPisteB) {
            errors.push('Selecteer minimaal één piste voor de stofzuiger (A of B)');
        }
        if (!formData.stofzuigerBegintijd || formData.stofzuigerBegintijd.trim() === '') {
            errors.push('Stofzuiger begintijd is verplicht');
        } else if (!validateTimeFormat(formData.stofzuigerBegintijd, 'stofzuiger')) {
            errors.push('Stofzuiger begintijd moet een getal zijn (bijv. 42,2 of 42.2)');
        }
        if (!formData.stofzuigerEindtijd || formData.stofzuigerEindtijd.trim() === '') {
            errors.push('Stofzuiger eindtijd is verplicht');
        } else if (!validateTimeFormat(formData.stofzuigerEindtijd, 'stofzuiger')) {
            errors.push('Stofzuiger eindtijd moet een getal zijn (bijv. 42,2 of 42.2)');
        }
        if (!formData.stofzuigerUitgekuist) {
            if (!formData.stofzuigerReden || formData.stofzuigerReden.trim() === '') {
                errors.push('Geef een reden op waarom de stofzuiger niet uitgekuist kon worden');
            }
        }
    }
    
    return errors;
}

/**
 * Handle kuismachine formulier submit
 */
async function handleKuismachineSubmit(event) {
    event.preventDefault();
    
    const errorDiv = document.getElementById('kuismachine-form-error');
    errorDiv.style.display = 'none';
    errorDiv.textContent = '';
    
    // Verzamel formulier data
    // Haal niet-gebruikt redenen op, controleer of het veld zichtbaar is
    const kuismachineNietGebruiktReasonEl = document.getElementById('kuismachine-niet-gebruikt-reason');
    const stofzuigerNietGebruiktReasonEl = document.getElementById('stofzuiger-niet-gebruikt-reason');
    const kuismachineNietGebruiktRedenEl = document.getElementById('kuismachine-niet-gebruikt-reden');
    const stofzuigerNietGebruiktRedenEl = document.getElementById('stofzuiger-niet-gebruikt-reden');
    
    // Verwijder required attribute van verborgen velden om HTML5 validatie te voorkomen
    // Gebruik getComputedStyle om ook CSS-hidden elementen te detecteren
    const kuismachineNietGebruiktReasonStyle = kuismachineNietGebruiktReasonEl 
        ? window.getComputedStyle(kuismachineNietGebruiktReasonEl).display 
        : 'none';
    const stofzuigerNietGebruiktReasonStyle = stofzuigerNietGebruiktReasonEl 
        ? window.getComputedStyle(stofzuigerNietGebruiktReasonEl).display 
        : 'none';

    if (kuismachineNietGebruiktReasonStyle === 'none') {
        if (kuismachineNietGebruiktRedenEl) {
            kuismachineNietGebruiktRedenEl.required = false;
            kuismachineNietGebruiktRedenEl.removeAttribute('required');
        }
    }
    if (stofzuigerNietGebruiktReasonStyle === 'none') {
        if (stofzuigerNietGebruiktRedenEl) {
            stofzuigerNietGebruiktRedenEl.required = false;
            stofzuigerNietGebruiktRedenEl.removeAttribute('required');
        }
    }
    
    const formData = {
        kuismachineGebruikt: document.getElementById('kuismachine-gebruikt').checked,
        kuismachinePisteA: document.getElementById('kuismachine-piste-a').checked,
        kuismachinePisteB: document.getElementById('kuismachine-piste-b').checked,
        kuismachineBegintijd: document.getElementById('kuismachine-begintijd').value.trim(),
        kuismachineEindtijd: document.getElementById('kuismachine-eindtijd').value.trim(),
        kuismachineUitgekuist: document.getElementById('kuismachine-uitgekuist').checked,
        kuismachineReden: document.getElementById('kuismachine-reden').value.trim(),
        kuismachineNietGebruiktReden: kuismachineNietGebruiktRedenEl ? kuismachineNietGebruiktRedenEl.value.trim() : '',
        stofzuigerGebruikt: document.getElementById('stofzuiger-gebruikt').checked,
        stofzuigerPisteA: document.getElementById('stofzuiger-piste-a').checked,
        stofzuigerPisteB: document.getElementById('stofzuiger-piste-b').checked,
        stofzuigerBegintijd: document.getElementById('stofzuiger-begintijd').value.trim(),
        stofzuigerEindtijd: document.getElementById('stofzuiger-eindtijd').value.trim(),
        stofzuigerUitgekuist: document.getElementById('stofzuiger-uitgekuist').checked,
        stofzuigerReden: document.getElementById('stofzuiger-reden').value.trim(),
        stofzuigerNietGebruiktReden: stofzuigerNietGebruiktRedenEl ? stofzuigerNietGebruiktRedenEl.value.trim() : ''
    };
    
    // Debug logging
    console.log('FormData:', formData);
    console.log('Validating...');
    
    // Valideer
    const errors = validateKuismachineForm(formData);
    console.log('Validation errors:', errors);
    if (errors.length > 0) {
        errorDiv.textContent = errors.join('. ');
        errorDiv.style.display = 'block';
        return;
    }
    
    // Voeg datum en tijd toe
    const now = new Date();
    formData.timestamp = now.getTime();
    formData.dateTime = now.toISOString();
    formData.userName = currentUserName;
    
    // Converteer tijden naar komma format (punt wordt komma)
    if (formData.kuismachineBegintijd) {
        formData.kuismachineBegintijd = convertTimeToCommaFormat(formData.kuismachineBegintijd);
    }
    if (formData.kuismachineEindtijd) {
        formData.kuismachineEindtijd = convertTimeToCommaFormat(formData.kuismachineEindtijd);
    }
    if (formData.stofzuigerBegintijd) {
        formData.stofzuigerBegintijd = convertTimeToCommaFormat(formData.stofzuigerBegintijd);
    }
    if (formData.stofzuigerEindtijd) {
        formData.stofzuigerEindtijd = convertTimeToCommaFormat(formData.stofzuigerEindtijd);
    }
    
    // Disable submit button
    // event.target kan het form zijn of de button zelf
    const submitButton = event.target.tagName === 'FORM' 
        ? event.target.querySelector('button[type="submit"]')
        : event.target.closest('form')?.querySelector('button[type="submit"]');
    
    if (!submitButton) {
        console.error('Submit button niet gevonden');
        errorDiv.textContent = 'Fout: Submit button niet gevonden';
        errorDiv.style.display = 'block';
        return;
    }
    
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Opslaan...';
    
    try {
        // Check of we een bestaande log aan het bewerken zijn
        const form = document.getElementById('kuismachine-form');
        const editingLogId = form.dataset.editingLogId;
        
        if (editingLogId) {
            // Update bestaande log
            await updateKuismachineLog(formData, editingLogId);
            
            // Reset editing flag
            delete form.dataset.editingLogId;
        } else {
            // Nieuwe log aanmaken
            await saveKuismachineLog(formData);
        }
        
        // Success - sluit overlay en update card
        closeKuismachineOverlay();
        
        // Reload dashboard om card te updaten
        await loadDashboard();
        await setupFirebaseListeners();
        
    } catch (error) {
        console.error('Error saving kuismachine log:', error);
        errorDiv.textContent = 'Fout bij opslaan: ' + error.message;
        errorDiv.style.display = 'block';
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
}

/**
 * Sla kuismachine log op in Firebase
 */
async function saveKuismachineLog(formData) {
    if (!currentUserName) {
        throw new Error('Geen gebruikersnaam');
    }
    
    if (!database || !firebaseFunctions) {
        throw new Error('Firebase niet beschikbaar');
    }
    
    try {
        const { ref, push, set } = firebaseFunctions;
        
        // Sla volledige log op
        const logsRef = ref(database, 'logs/kuismachine-logs');
        await push(logsRef, formData);
        
        // Update laatste klik voor tracking
        const lastClickRef = ref(database, 'clicks/kuismachine-logs');
        await set(lastClickRef, {
            timestamp: formData.timestamp,
            dateTime: formData.dateTime,
            userName: formData.userName
        });
        
        console.log('Kuismachine log opgeslagen in Firebase');
    } catch (error) {
        console.error('Error saving to Firebase:', error);
        throw error;
    }
}

/**
 * Haal kuismachine logs van vandaag op die nog niet uitgekuist zijn
 */
async function getTodayKuismachineLogs() {
    if (!database || !firebaseFunctions) {
        return [];
    }
    
    try {
        const { ref, get } = firebaseFunctions;
        const logsRef = ref(database, 'logs/kuismachine-logs');
        const snapshot = await get(logsRef);
        
        if (!snapshot.exists()) {
            return [];
        }
        
        const logs = snapshot.val();
        const today = new Date();
        const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
        const todayEnd = todayStart + 86400000; // 24 uur later
        
        const todayLogs = [];
        
        Object.keys(logs).forEach(logId => {
            const log = logs[logId];
            const logTimestamp = log.timestamp || 0;
            
            // Check of log van vandaag is
            if (logTimestamp >= todayStart && logTimestamp < todayEnd) {
                const normalizedLog = {
                    id: logId,
                    ...log,
                    kuismachineGebruikt: log.kuismachineGebruikt === true || log.kuismachineGebruikt === 'true',
                    kuismachineUitgekuist: log.kuismachineUitgekuist === true || log.kuismachineUitgekuist === 'true',
                    stofzuigerGebruikt: log.stofzuigerGebruikt === true || log.stofzuigerGebruikt === 'true',
                    stofzuigerUitgekuist: log.stofzuigerUitgekuist === true || log.stofzuigerUitgekuist === 'true',
                    updatedLater: log.updatedLater === true || log.updatedLater === 'true'
                };
                
                // Voeg alle logs van vandaag toe (zodat ze allemaal bewerkt kunnen worden)
                todayLogs.push(normalizedLog);
            }
        });
        
        // Sorteer op timestamp (oudste eerst)
        todayLogs.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
        
        return todayLogs;
    } catch (error) {
        console.error('Error loading today kuismachine logs:', error);
        return [];
    }
}

/**
 * Haal een specifieke kuismachine log op uit Firebase
 */
async function getKuismachineLogById(logId) {
    if (!database || !firebaseFunctions) {
        return null;
    }
    
    try {
        const { ref, get } = firebaseFunctions;
        const logRef = ref(database, `logs/kuismachine-logs/${logId}`);
        const snapshot = await get(logRef);
        
        if (snapshot.exists()) {
            return snapshot.val();
        }
    } catch (error) {
        console.error('Error loading kuismachine log by ID:', error);
    }
    
    return null;
}

/**
 * Vul het formulier in met gegevens van een bestaande log
 */
async function loadLogIntoForm(logId, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const log = await getKuismachineLogById(logId);
    if (!log) {
        alert('Log niet gevonden');
        return;
    }
    
    // Reset formulier eerst
    const form = document.getElementById('kuismachine-form');
    form.reset();
    
    // Verberg alle velden eerst
    document.getElementById('kuismachine-fields').style.display = 'none';
    document.getElementById('stofzuiger-fields').style.display = 'none';
    document.getElementById('kuismachine-niet-gebruikt-reason').style.display = 'none';
    document.getElementById('stofzuiger-niet-gebruikt-reason').style.display = 'none';
    
    // Vul kuismachine velden
    if (log.kuismachineGebruikt === true || log.kuismachineGebruikt === 'true') {
        document.getElementById('kuismachine-gebruikt').checked = true;
        toggleMachineSection('kuismachine');
        
        document.getElementById('kuismachine-piste-a').checked = log.kuismachinePisteA === true || log.kuismachinePisteA === 'true';
        document.getElementById('kuismachine-piste-b').checked = log.kuismachinePisteB === true || log.kuismachinePisteB === 'true';
        document.getElementById('kuismachine-begintijd').value = log.kuismachineBegintijd || log.kuismachineStarttijd || '';
        document.getElementById('kuismachine-eindtijd').value = log.kuismachineEindtijd || '';
        document.getElementById('kuismachine-uitgekuist').checked = log.kuismachineUitgekuist === true || log.kuismachineUitgekuist === 'true';
        document.getElementById('kuismachine-reden').value = log.kuismachineReden || '';
        toggleUitgekuistFields('kuismachine');
    } else if (log.kuismachineNietGebruiktReden) {
        document.getElementById('kuismachine-niet-gebruikt-reason').style.display = 'block';
        document.getElementById('kuismachine-niet-gebruikt-reden').value = log.kuismachineNietGebruiktReden || '';
    }
    
    // Vul stofzuiger velden
    if (log.stofzuigerGebruikt === true || log.stofzuigerGebruikt === 'true') {
        document.getElementById('stofzuiger-gebruikt').checked = true;
        toggleMachineSection('stofzuiger');
        
        document.getElementById('stofzuiger-piste-a').checked = log.stofzuigerPisteA === true || log.stofzuigerPisteA === 'true';
        document.getElementById('stofzuiger-piste-b').checked = log.stofzuigerPisteB === true || log.stofzuigerPisteB === 'true';
        document.getElementById('stofzuiger-begintijd').value = log.stofzuigerBegintijd || log.stofzuigerStarttijd || '';
        document.getElementById('stofzuiger-eindtijd').value = log.stofzuigerEindtijd || '';
        document.getElementById('stofzuiger-uitgekuist').checked = log.stofzuigerUitgekuist === true || log.stofzuigerUitgekuist === 'true';
        document.getElementById('stofzuiger-reden').value = log.stofzuigerReden || '';
        toggleUitgekuistFields('stofzuiger');
    } else if (log.stofzuigerNietGebruiktReden) {
        document.getElementById('stofzuiger-niet-gebruikt-reason').style.display = 'block';
        document.getElementById('stofzuiger-niet-gebruikt-reden').value = log.stofzuigerNietGebruiktReden || '';
    }
    
    // Bewaar logId voor update
    form.dataset.editingLogId = logId;
    
    // Update submit button tekst
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.textContent = 'Update log';
    }
    
    // Verberg bewerk sectie
    const editSection = document.getElementById('edit-today-logs-section');
    if (editSection) {
        editSection.style.display = 'none';
    }
    
    // Scroll naar formulier sectie
    setTimeout(() => {
        const machineContainer = document.querySelector('.machine-sections-container');
        if (machineContainer) {
            machineContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

/**
 * Laad logs van vandaag en toon ze voor bewerking
 */
async function loadTodayLogsForEditing() {
    const editSection = document.getElementById('edit-today-logs-section');
    const logsList = document.getElementById('today-logs-list');
    
    if (!editSection || !logsList) {
        return;
    }
    
    try {
        const todayLogs = await getTodayKuismachineLogs();
        
        if (todayLogs.length === 0) {
            editSection.style.display = 'none';
            return;
        }
        
        editSection.style.display = 'block';
        
        let logsHTML = '';
        
        todayLogs.forEach(log => {
            const logDate = new Date(log.timestamp);
            const timeStr = logDate.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
            
            logsHTML += '<div class="today-log-item" style="margin-bottom: 16px; padding: 12px; background: #f8f9fa; border-radius: 8px; border: 1px solid #e0e0e0;">';
            logsHTML += `<div style="margin-bottom: 8px;"><strong>Tijd:</strong> ${escapeHtml(timeStr)} | <strong>Door:</strong> ${escapeHtml(log.userName || 'Onbekend')}</div>`;
            
            // Toon status van machines
            let statusInfo = [];
            if (log.kuismachineGebruikt) {
                statusInfo.push(`🧹 Kuismachine: ${log.kuismachineUitgekuist ? 'Uitgekuist ✓' : 'Niet uitgekuist ✗'}`);
            }
            if (log.stofzuigerGebruikt) {
                statusInfo.push(`💨 Stofzuiger: ${log.stofzuigerUitgekuist ? 'Uitgekuist ✓' : 'Niet uitgekuist ✗'}`);
            }
            if (statusInfo.length > 0) {
                logsHTML += `<div style="margin-bottom: 12px; color: #666; font-size: 0.9rem;">${statusInfo.join(' | ')}</div>`;
            }
            
            // Voeg "Bewerk deze log" knop toe
            logsHTML += `<div style="margin-bottom: 8px;">`;
            logsHTML += `<button class="btn-primary" onclick="loadLogIntoForm('${escapeHtml(log.id)}', event)" style="padding: 8px 16px; font-size: 0.9rem; margin-right: 8px;">✏️ Bewerk deze log</button>`;
            logsHTML += `</div>`;
            
            // Snelle actie knoppen voor machines die nog niet uitgekuist zijn
            if (log.kuismachineGebruikt && !log.kuismachineUitgekuist) {
                logsHTML += '<div style="margin-top: 8px;">';
                logsHTML += `<button class="btn-secondary" onclick="markMachineAsUitgekuist('${escapeHtml(log.id)}', 'kuismachine', event)" style="padding: 6px 12px; font-size: 0.85rem;">Markeer kuismachine als uitgekuist</button>`;
                logsHTML += '</div>';
            }
            
            if (log.stofzuigerGebruikt && !log.stofzuigerUitgekuist) {
                logsHTML += '<div style="margin-top: 8px;">';
                logsHTML += `<button class="btn-secondary" onclick="markMachineAsUitgekuist('${escapeHtml(log.id)}', 'stofzuiger', event)" style="padding: 6px 12px; font-size: 0.85rem;">Markeer stofzuiger als uitgekuist</button>`;
                logsHTML += '</div>';
            }
            
            logsHTML += '</div>';
        });
        
        logsList.innerHTML = logsHTML;
    } catch (error) {
        console.error('Error loading today logs:', error);
        editSection.style.display = 'none';
    }
}

/**
 * Markeer machine als uitgekuist (achteraf update)
 */
async function markMachineAsUitgekuist(logId, machineType, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    if (!currentUserName) {
        alert('Je moet ingelogd zijn om logs te kunnen bewerken.');
        return;
    }
    
    const machineName = machineType === 'kuismachine' ? 'kuismachine' : 'stofzuiger';
    const confirmed = confirm(`Weet je zeker dat je de ${machineName} als uitgekuist wilt markeren? Dit wordt geregistreerd als achteraf aangepast.`);
    
    if (!confirmed) {
        return;
    }
    
    const button = event?.target;
    if (button) {
        button.disabled = true;
        button.textContent = 'Bezig...';
    }
    
    try {
        await updateKuismachineLogUitgekuist(logId, machineType, true);
        
        // Herlaad de logs lijst
        await loadTodayLogsForEditing();
        
        // Update tool card om nieuwe status te tonen
        const toolCard = document.querySelector('.tool-card[data-tool-id="kuismachine-logs"]');
        if (toolCard) {
            const kuismachineTool = tools.find(t => t.id === 'kuismachine-logs');
            if (kuismachineTool) {
                const newCard = await createToolCard(kuismachineTool);
                toolCard.replaceWith(newCard);
            }
        }
        
        alert(`${machineName.charAt(0).toUpperCase() + machineName.slice(1)} succesvol gemarkeerd als uitgekuist. Dit is geregistreerd als achteraf aangepast.`);
    } catch (error) {
        console.error('Error marking machine as uitgekuist:', error);
        alert('Fout bij het updaten van de log. Probeer het opnieuw.');
        
        if (button) {
            button.disabled = false;
            button.textContent = 'Markeer als uitgekuist';
        }
    }
}

/**
 * Update een bestaande kuismachine log volledig
 */
async function updateKuismachineLog(formData, logId) {
    if (!currentUserName) {
        throw new Error('Geen gebruikersnaam');
    }
    
    if (!database || !firebaseFunctions) {
        throw new Error('Firebase niet beschikbaar');
    }
    
    try {
        const { ref, get, set } = firebaseFunctions;
        const logRef = ref(database, `logs/kuismachine-logs/${logId}`);
        
        // Haal huidige log op
        const snapshot = await get(logRef);
        if (!snapshot.exists()) {
            throw new Error('Log niet gevonden');
        }
        
        const currentLog = snapshot.val();
        const now = new Date();
        
        // Converteer tijden naar komma format
        const convertedFormData = { ...formData };
        if (convertedFormData.kuismachineBegintijd) {
            convertedFormData.kuismachineBegintijd = convertTimeToCommaFormat(convertedFormData.kuismachineBegintijd);
        }
        if (convertedFormData.kuismachineEindtijd) {
            convertedFormData.kuismachineEindtijd = convertTimeToCommaFormat(convertedFormData.kuismachineEindtijd);
        }
        if (convertedFormData.stofzuigerBegintijd) {
            convertedFormData.stofzuigerBegintijd = convertTimeToCommaFormat(convertedFormData.stofzuigerBegintijd);
        }
        if (convertedFormData.stofzuigerEindtijd) {
            convertedFormData.stofzuigerEindtijd = convertTimeToCommaFormat(convertedFormData.stofzuigerEindtijd);
        }
        
        // Merge met nieuwe data, behoud originele timestamp en userName
        const updatedLog = {
            ...currentLog,
            ...convertedFormData,
            timestamp: currentLog.timestamp, // Behoud originele timestamp
            dateTime: currentLog.dateTime, // Behoud originele datum/tijd
            userName: currentLog.userName, // Behoud originele gebruiker
            updatedLater: true,
            updatedTimestamp: now.getTime(),
            updatedDateTime: now.toISOString(),
            updatedBy: currentUserName
        };
        
        // Sla update op
        await set(logRef, updatedLog);
        
        console.log(`Kuismachine log ${logId} geüpdatet`);
        
        return updatedLog;
    } catch (error) {
        console.error('Error updating kuismachine log:', error);
        throw error;
    }
}

/**
 * Update uitgekuist status van een kuismachine log
 */
async function updateKuismachineLogUitgekuist(logId, machineType, uitgekuist) {
    if (!currentUserName || !database || !firebaseFunctions) {
        throw new Error('Geen gebruikersnaam of Firebase niet beschikbaar');
    }
    
    try {
        const { ref, get, set } = firebaseFunctions;
        const logRef = ref(database, `logs/kuismachine-logs/${logId}`);
        
        // Haal huidige log op
        const snapshot = await get(logRef);
        if (!snapshot.exists()) {
            throw new Error('Log niet gevonden');
        }
        
        const currentLog = snapshot.val();
        const now = new Date();
        
        // Update de log met nieuwe status en metadata
        const updatedLog = {
            ...currentLog,
            [`${machineType}Uitgekuist`]: uitgekuist,
            updatedLater: true,
            updatedTimestamp: now.getTime(),
            updatedDateTime: now.toISOString(),
            updatedBy: currentUserName
        };
        
        // Als uitgekuist, verwijder reden veld
        if (uitgekuist) {
            updatedLog[`${machineType}Reden`] = '';
        }
        
        // Sla update op
        await set(logRef, updatedLog);
        
        console.log(`Kuismachine log ${logId} geüpdatet: ${machineType} uitgekuist = ${uitgekuist}`);
        
        return updatedLog;
    } catch (error) {
        console.error('Error updating kuismachine log:', error);
        throw error;
    }
}

/**
 * Haal laatste kuismachine log op uit Firebase
 */
async function getLastKuismachineLog() {
    if (!database || !firebaseFunctions) {
        return null;
    }
    
    try {
        const { ref, get } = firebaseFunctions;
        const logsRef = ref(database, 'logs/kuismachine-logs');
        
        // Haal alle logs op
        const snapshot = await get(logsRef);
        
        if (snapshot.exists()) {
            const logs = snapshot.val();
            // Vind de log met de hoogste timestamp
            let lastLog = null;
            let lastTimestamp = 0;
            
            Object.keys(logs).forEach(logId => {
                const log = logs[logId];
                if (log.timestamp && log.timestamp > lastTimestamp) {
                    lastTimestamp = log.timestamp;
                    // Normaliseer boolean waarden (Firebase kan ze soms als strings opslaan)
                    const normalizedLog = {
                        ...log,
                        kuismachineGebruikt: log.kuismachineGebruikt === true || log.kuismachineGebruikt === 'true',
                        kuismachinePisteA: log.kuismachinePisteA === true || log.kuismachinePisteA === 'true',
                        kuismachinePisteB: log.kuismachinePisteB === true || log.kuismachinePisteB === 'true',
                        stofzuigerGebruikt: log.stofzuigerGebruikt === true || log.stofzuigerGebruikt === 'true',
                        stofzuigerPisteA: log.stofzuigerPisteA === true || log.stofzuigerPisteA === 'true',
                        stofzuigerPisteB: log.stofzuigerPisteB === true || log.stofzuigerPisteB === 'true',
                        kuismachineUitgekuist: log.kuismachineUitgekuist === true || log.kuismachineUitgekuist === 'true',
                        stofzuigerUitgekuist: log.stofzuigerUitgekuist === true || log.stofzuigerUitgekuist === 'true'
                    };
                    lastLog = normalizedLog;
                }
            });
            
            return lastLog;
        }
    } catch (error) {
        console.error('Error loading kuismachine log from Firebase:', error);
    }
    
    return null;
}

/**
 * Open kart daily overlay
 */
async function openKartDailyOverlay(event) {
    if (event) {
        event.preventDefault();
    }
    
    if (!currentUserName) {
        showNameModal();
        return;
    }
    
    const overlay = document.getElementById('kart-daily-overlay');
    const form = document.getElementById('kart-daily-form');
    const errorDiv = document.getElementById('kart-daily-form-error');
    const kartList = document.getElementById('kart-list');
    
    // Reset formulier
    form.reset();
    errorDiv.style.display = 'none';
    errorDiv.textContent = '';
    
    // Genereer kart items (1-36) als blokjes
    kartList.innerHTML = '';
    for (let i = 1; i <= 36; i++) {
        const kartItem = document.createElement('div');
        kartItem.className = 'kart-block';
        kartItem.setAttribute('data-kart-number', i);
        kartItem.innerHTML = `
            <div class="kart-block-number" onclick="openKartDetails(${i})">
                <span class="kart-number">${i}</span>
                <input type="checkbox" id="kart-${i}-problem" name="kart-${i}-problem" class="kart-problem-checkbox-input" onchange="toggleKartProblem(${i})" onclick="event.stopPropagation()">
            </div>
            <div id="kart-${i}-details" class="kart-details" style="display: none;">
                <div class="kart-details-header">
                    <h4>Kart ${i} - Probleem rapporteren</h4>
                    <button type="button" class="kart-details-close" onclick="closeKartDetails(${i})" title="Sluit details">×</button>
                </div>
                <div id="kart-${i}-reason-field" class="kart-reason-field">
                    <div class="form-group">
                        <label for="kart-${i}-reason">Reden <span class="required">*</span></label>
                        <input type="text" id="kart-${i}-reason" name="kart-${i}-reason" placeholder="Beschrijf het probleem...">
                    </div>
                </div>
                <div class="form-group">
                    <label for="kart-${i}-comments">Opmerkingen (optioneel)</label>
                    <textarea id="kart-${i}-comments" name="kart-${i}-comments" rows="2" placeholder="Extra opmerkingen..."></textarea>
                </div>
            </div>
        `;
        kartList.appendChild(kartItem);
    }
    
    // Laad laatste check data indien beschikbaar
    const lastCheck = await getLastKartDailyCheck();
    if (lastCheck && lastCheck.karts) {
        // Vul formulier in met laatste check data
        Object.keys(lastCheck.karts).forEach(kartNum => {
            const kart = lastCheck.karts[kartNum];
            const problemCheckbox = document.getElementById(`kart-${kartNum}-problem`);
            const reasonField = document.getElementById(`kart-${kartNum}-reason-field`);
            const reasonInput = document.getElementById(`kart-${kartNum}-reason`);
            const commentsInput = document.getElementById(`kart-${kartNum}-comments`);
            
            const detailsDiv = document.getElementById(`kart-${kartNum}-details`);
            const kartBlock = document.querySelector(`.kart-block[data-kart-number="${kartNum}"]`);
            
            if (kart.hasProblem) {
                if (problemCheckbox) {
                    problemCheckbox.checked = true;
                }
                if (detailsDiv) {
                    detailsDiv.style.display = 'block';
                }
                if (kartBlock) {
                    kartBlock.classList.add('kart-block-active', 'kart-block-has-problem');
                }
                if (reasonField) {
                    reasonField.style.display = 'block';
                }
                if (reasonInput) {
                    reasonInput.value = kart.reason || '';
                    reasonInput.required = true;
                }
            }
            if (commentsInput && kart.comments) {
                commentsInput.value = kart.comments;
            }
        });
        
        // Vul kuisen checkbox
        if (lastCheck.allKartsCleaned !== undefined) {
            document.getElementById('all-karts-cleaned').checked = lastCheck.allKartsCleaned;
        }
        
        // Vul algemene comments
        if (lastCheck.generalComments && document.getElementById('kart-general-comments')) {
            document.getElementById('kart-general-comments').value = lastCheck.generalComments;
        }
    }
    
    // Toon overlay
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

/**
 * Sluit kart daily overlay
 */
function closeKartDailyOverlay() {
    const overlay = document.getElementById('kart-daily-overlay');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

/**
 * Open kart details venster (bij klik op kart blokje) - automatisch checkbox aanvinken
 */
function openKartDetails(kartNumber) {
    // Sluit eerst alle andere openstaande kart details
    for (let i = 1; i <= 36; i++) {
        if (i !== kartNumber) {
            const otherDetailsDiv = document.getElementById(`kart-${i}-details`);
            const otherKartBlock = document.querySelector(`.kart-block[data-kart-number="${i}"]`);
            
            if (otherDetailsDiv && otherDetailsDiv.style.display !== 'none') {
                otherDetailsDiv.style.display = 'none';
            }
            if (otherKartBlock) {
                otherKartBlock.classList.remove('kart-block-active');
            }
        }
    }
    
    const checkbox = document.getElementById(`kart-${kartNumber}-problem`);
    const detailsDiv = document.getElementById(`kart-${kartNumber}-details`);
    const kartBlock = document.querySelector(`.kart-block[data-kart-number="${kartNumber}"]`);
    const reasonField = document.getElementById(`kart-${kartNumber}-reason-field`);
    const reasonInput = document.getElementById(`kart-${kartNumber}-reason`);
    
    // Vink automatisch checkbox aan
    if (checkbox && !checkbox.checked) {
        checkbox.checked = true;
        // Trigger change event om alle logica uit te voeren
        toggleKartProblem(kartNumber);
    }
    
    // Open details
    if (detailsDiv) {
        detailsDiv.style.display = 'block';
    }
    if (kartBlock) {
        kartBlock.classList.add('kart-block-active', 'kart-block-has-problem');
    }
    if (reasonField) {
        reasonField.style.display = 'block';
    }
    if (reasonInput) {
        reasonInput.required = true;
        // Focus op reason input voor snelle invoer
        setTimeout(() => reasonInput.focus(), 100);
    }
}

/**
 * Sluit kart details venster (zonder checkbox te deselecteren)
 */
function closeKartDetails(kartNumber) {
    const detailsDiv = document.getElementById(`kart-${kartNumber}-details`);
    const kartBlock = document.querySelector(`.kart-block[data-kart-number="${kartNumber}"]`);
    
    if (detailsDiv) {
        detailsDiv.style.display = 'none';
    }
    if (kartBlock) {
        kartBlock.classList.remove('kart-block-active');
        // Behoud kart-block-has-problem class als checkbox nog checked is
        const checkbox = document.getElementById(`kart-${kartNumber}-problem`);
        if (!checkbox || !checkbox.checked) {
            kartBlock.classList.remove('kart-block-has-problem');
        }
    }
}

/**
 * Toggle kart probleem checkbox state (bij directe checkbox click)
 */
function toggleKartProblem(kartNumber) {
    const checkbox = document.getElementById(`kart-${kartNumber}-problem`);
    const reasonField = document.getElementById(`kart-${kartNumber}-reason-field`);
    const reasonInput = document.getElementById(`kart-${kartNumber}-reason`);
    const detailsDiv = document.getElementById(`kart-${kartNumber}-details`);
    const kartBlock = document.querySelector(`.kart-block[data-kart-number="${kartNumber}"]`);
    
    // Als checkbox wordt aangevinkt, maak reden verplicht en toon als probleem
    if (checkbox.checked) {
        if (detailsDiv && detailsDiv.style.display === 'none') {
            detailsDiv.style.display = 'block';
        }
        if (kartBlock) {
            kartBlock.classList.add('kart-block-has-problem');
            if (detailsDiv && detailsDiv.style.display !== 'none') {
                kartBlock.classList.add('kart-block-active');
            }
        }
        if (reasonField) {
            reasonField.style.display = 'block';
        }
        if (reasonInput) {
            reasonInput.required = true;
        }
    } else {
        // Als checkbox wordt uitgevinkt, maak reden niet verplicht en clear velden
        if (reasonInput) {
            reasonInput.required = false;
            reasonInput.value = '';
        }
        const commentsInput = document.getElementById(`kart-${kartNumber}-comments`);
        if (commentsInput) {
            commentsInput.value = '';
        }
        if (kartBlock) {
            kartBlock.classList.remove('kart-block-has-problem');
        }
        // Sluit details als checkbox wordt uitgevinkt
        if (detailsDiv) {
            detailsDiv.style.display = 'none';
        }
        if (kartBlock) {
            kartBlock.classList.remove('kart-block-active');
        }
    }
}

/**
 * Valideer kart daily formulier
 */
function validateKartDailyForm() {
    const errors = [];
    
    // Check alle karts (1-36)
    for (let i = 1; i <= 36; i++) {
        const problemCheckbox = document.getElementById(`kart-${i}-problem`);
        const reasonInput = document.getElementById(`kart-${i}-reason`);
        
        if (problemCheckbox && problemCheckbox.checked) {
            // Als probleem is aangevinkt, moet reden ingevuld zijn
            if (!reasonInput || !reasonInput.value.trim()) {
                errors.push(`Kart ${i}: Reden is verplicht wanneer er een probleem is`);
            }
        }
    }
    
    return errors;
}

/**
 * Handle kart daily formulier submit
 */
async function handleKartDailySubmit(event) {
    event.preventDefault();
    
    const errorDiv = document.getElementById('kart-daily-form-error');
    errorDiv.style.display = 'none';
    errorDiv.textContent = '';
    
    // Valideer formulier
    const errors = validateKartDailyForm();
    if (errors.length > 0) {
        errorDiv.textContent = errors.join('\n');
        errorDiv.style.display = 'block';
        return;
    }
    
    // Verzamel formulier data
    const karts = {};
    for (let i = 1; i <= 36; i++) {
        const problemCheckbox = document.getElementById(`kart-${i}-problem`);
        const reasonInput = document.getElementById(`kart-${i}-reason`);
        const commentsInput = document.getElementById(`kart-${i}-comments`);
        
        karts[i.toString()] = {
            hasProblem: problemCheckbox ? problemCheckbox.checked : false,
            reason: reasonInput ? reasonInput.value.trim() : '',
            comments: commentsInput ? commentsInput.value.trim() : ''
        };
    }
    
    const allKartsCleaned = document.getElementById('all-karts-cleaned').checked;
    const generalComments = document.getElementById('kart-general-comments') ? document.getElementById('kart-general-comments').value.trim() : '';
    
    const checkData = {
        userName: currentUserName,
        timestamp: Date.now(),
        dateTime: formatDateTime(new Date()),
        karts: karts,
        allKartsCleaned: allKartsCleaned,
        generalComments: generalComments,
        checkCompleted: true
    };
    
    try {
        await saveKartDailyCheck(checkData);
        
        // Update tool card display
        await renderKartDailyStatus();
        
        // Sluit overlay
        closeKartDailyOverlay();
        
        // Herlaad dashboard om status te updaten
        await loadDashboard();
    } catch (error) {
        console.error('Error saving kart daily check:', error);
        errorDiv.textContent = 'Er is een fout opgetreden bij het opslaan. Probeer het opnieuw.';
        errorDiv.style.display = 'block';
    }
}

/**
 * Sla kart daily check op in Firebase
 */
async function saveKartDailyCheck(checkData) {
    if (!currentUserName) {
        throw new Error('Geen gebruikersnaam');
    }
    
    if (!database || !firebaseFunctions) {
        throw new Error('Firebase niet beschikbaar');
    }
    
    try {
        const { ref, push, set } = firebaseFunctions;
        
        // Sla volledige log op
        const now = new Date();
        const dateString = now.toISOString().split('T')[0];
        const logsRef = ref(database, `logs/kart-daily-checks/${dateString}`);
        await push(logsRef, checkData);
        
        // Update laatste klik voor tracking
        const lastClickRef = ref(database, 'clicks/kart-daily-logboek');
        await set(lastClickRef, {
            timestamp: checkData.timestamp,
            dateTime: checkData.dateTime,
            userName: checkData.userName
        });
        
        console.log('Kart daily check opgeslagen in Firebase');
    } catch (error) {
        console.error('Error saving to Firebase:', error);
        throw error;
    }
}

/**
 * Haal laatste kart daily check op voor vandaag
 */
async function getLastKartDailyCheck() {
    if (!database || !firebaseFunctions) {
        return null;
    }
    
    try {
        const { ref, get, query, orderByChild, limitToLast } = firebaseFunctions;
        const now = new Date();
        const dateString = now.toISOString().split('T')[0];
        const logsRef = ref(database, `logs/kart-daily-checks/${dateString}`);
        
        // Haal laatste check op
        const logsQuery = query(logsRef, orderByChild('timestamp'), limitToLast(1));
        const snapshot = await get(logsQuery);
        
        if (snapshot.exists()) {
            const logs = snapshot.val();
            // Vind de log met de hoogste timestamp
            let lastLog = null;
            let lastTimestamp = 0;
            
            Object.keys(logs).forEach(logId => {
                const log = logs[logId];
                if (log.timestamp && log.timestamp > lastTimestamp) {
                    lastTimestamp = log.timestamp;
                    lastLog = log;
                }
            });
            
            return lastLog;
        }
    } catch (error) {
        console.error('Error loading kart daily check from Firebase:', error);
    }
    
    return null;
}

/**
 * Render kart daily status op tool card
 */
async function renderKartDailyStatus() {
    const lastCheck = await getLastKartDailyCheck();
    
    if (!lastCheck) {
        return null;
    }
    
    // Tel aantal karts met problemen - expliciet controleren op boolean true
    let problemCount = 0;
    if (lastCheck.karts) {
        Object.keys(lastCheck.karts).forEach(kartNum => {
            const kart = lastCheck.karts[kartNum];
            // Normaliseer boolean waarde (Firebase kan ze soms als strings opslaan)
            const hasProblem = kart.hasProblem === true || kart.hasProblem === 'true' || kart.hasProblem === 1 || kart.hasProblem === '1';
            if (hasProblem) {
                problemCount++;
            }
        });
    }
    
    // Normaliseer allKartsCleaned boolean
    const allKartsCleaned = lastCheck.allKartsCleaned === true || lastCheck.allKartsCleaned === 'true' || lastCheck.allKartsCleaned === 1 || lastCheck.allKartsCleaned === '1';
    const checkCompleted = lastCheck.checkCompleted === true || lastCheck.checkCompleted === 'true' || lastCheck.checkCompleted === 1 || lastCheck.checkCompleted === '1';
    
    return {
        lastCheck: lastCheck,
        problemCount: problemCount,
        allKartsCleaned: allKartsCleaned,
        checkCompleted: checkCompleted
    };
}

/**
 * Haal dagplanning status op uit Firebase
 */
async function getDayPlanningStatus(dateString, userId) {
    if (!database || !firebaseFunctions || !userId) {
        return {};
    }
    
    try {
        const { ref, get } = firebaseFunctions;
        const statusRef = ref(database, `dayPlanning/${dateString}/${userId}`);
        const snapshot = await get(statusRef);
        
        if (snapshot.exists()) {
            return snapshot.val();
        }
    } catch (error) {
        console.error('Error loading day planning status from Firebase:', error);
    }
    
    return {};
}

/**
 * Sla dagplanning status op in Firebase
 */
async function saveDayPlanningStatus(taskId, completed) {
    if (!currentUserName || !database || !firebaseFunctions) {
        return;
    }
    
    const now = new Date();
    const dateString = now.toISOString().split('T')[0]; // YYYY-MM-DD
    
    try {
        const { ref, set } = firebaseFunctions;
        const statusRef = ref(database, `dayPlanning/${dateString}/${currentUserName}/${taskId}`);
        
        await set(statusRef, {
            completed: completed,
            timestamp: now.getTime(),
            dateTime: now.toISOString()
        });
    } catch (error) {
        console.error('Error saving day planning status to Firebase:', error);
    }
}

/**
 * Reset dagplanning status voor een specifieke datum
 */
async function resetDayPlanningStatus(dateString) {
    if (!database || !firebaseFunctions) {
        return;
    }
    
    try {
        const { ref, remove } = firebaseFunctions;
        const statusRef = ref(database, `dayPlanning/${dateString}`);
        await remove(statusRef);
    } catch (error) {
        console.error('Error resetting day planning status:', error);
    }
}

/**
 * Controleer en reset dagplanning indien nodig (om 04:00)
 */
async function checkAndResetDayPlanning() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDate = now.toISOString().split('T')[0];
    
    // Check of we na 04:00 zijn
    if (currentHour >= 4) {
        // Haal laatste reset datum op
        const lastResetKey = 'dayPlanning_lastReset';
        let lastResetDate = null;
        
        try {
            lastResetDate = localStorage.getItem(lastResetKey);
        } catch (error) {
            console.error('Error reading last reset date:', error);
        }
        
        // Als laatste reset niet vandaag was, reset alle taken
        if (lastResetDate !== currentDate) {
            await resetDayPlanningStatus(currentDate);
            
            // Sla huidige datum op als laatste reset
            try {
                localStorage.setItem(lastResetKey, currentDate);
            } catch (error) {
                console.error('Error saving last reset date:', error);
            }
        }
    }
}

/**
 * Render dagplanning sectie
 */
async function renderDayPlanning() {
    const planningContainer = document.getElementById('day-planning');
    if (!planningContainer) {
        return;
    }
    
    if (!currentUserName) {
        planningContainer.innerHTML = '';
        return;
    }
    
    const now = new Date();
    const dateString = now.toISOString().split('T')[0]; // YYYY-MM-DD
    
    // Haal status op uit Firebase
    const status = await getDayPlanningStatus(dateString, currentUserName);
    
    // Vind volgende incomplete taak
    let nextTask = null;
    const allTasks = [...dayPlanning.opening, ...dayPlanning.during, ...dayPlanning.closing];
    for (const task of allTasks) {
        const isCompleted = status[task.id]?.completed || false;
        if (!isCompleted) {
            nextTask = task;
            break;
        }
    }
    
    // Check of expanded state behouden moet worden
    const wasExpanded = planningContainer.classList.contains('expanded');
    
    // Build header met volgende taak
    let headerHTML = '<div class="day-planning-header" onclick="toggleDayPlanning()">';
    headerHTML += '<h2>';
    headerHTML += '<span>📋 Dagplanning</span>';
    if (nextTask) {
        headerHTML += `<span class="day-planning-next-task">→ Volgende taak: <span class="task-name">${escapeHtml(nextTask.icon)} ${escapeHtml(nextTask.title)}</span></span>`;
    } else {
        headerHTML += '<span class="day-planning-next-task">→ Alle taken voltooid! 🎉</span>';
    }
    headerHTML += '</h2>';
    headerHTML += '<div class="day-planning-toggle">';
    headerHTML += '<span class="day-planning-toggle-text">' + (wasExpanded ? 'Inklappen' : 'Uitklappen') + '</span>';
    headerHTML += '<span class="day-planning-toggle-icon">▼</span>';
    headerHTML += '</div>';
    headerHTML += '</div>';
    
    // Build content
    let contentHTML = '<div class="day-planning-content">';
    
    // Opening sectie
    if (dayPlanning.opening.length > 0) {
        contentHTML += '<div class="planning-section"><h3>Opening</h3><div class="planning-tasks">';
        for (const task of dayPlanning.opening) {
            const isCompleted = status[task.id]?.completed || false;
            // Haal laatste klik data op als taak een toolId heeft
            let lastClickData = null;
            if (task.toolId) {
                lastClickData = await getLastClickData(task.toolId);
            }
            contentHTML += renderPlanningTask(task, isCompleted, lastClickData);
        }
        contentHTML += '</div></div>';
    }
    
    // During sectie (leeg voor nu, maar structuur is er)
    if (dayPlanning.during.length > 0) {
        contentHTML += '<div class="planning-section"><h3>Doorheen de dag</h3><div class="planning-tasks">';
        for (const task of dayPlanning.during) {
            const isCompleted = status[task.id]?.completed || false;
            // Haal laatste klik data op als taak een toolId heeft
            let lastClickData = null;
            if (task.toolId) {
                lastClickData = await getLastClickData(task.toolId);
            }
            contentHTML += renderPlanningTask(task, isCompleted, lastClickData);
        }
        contentHTML += '</div></div>';
    }
    
    // Closing sectie
    if (dayPlanning.closing.length > 0) {
        contentHTML += '<div class="planning-section"><h3>Sluiting</h3><div class="planning-tasks">';
        for (const task of dayPlanning.closing) {
            const isCompleted = status[task.id]?.completed || false;
            // Haal laatste klik data op als taak een toolId heeft
            let lastClickData = null;
            if (task.toolId) {
                lastClickData = await getLastClickData(task.toolId);
            }
            contentHTML += renderPlanningTask(task, isCompleted, lastClickData);
        }
        contentHTML += '</div></div>';
    }
    
    contentHTML += '</div>';
    
    planningContainer.innerHTML = headerHTML + contentHTML;
    
    // Herstel expanded state
    if (wasExpanded) {
        planningContainer.classList.add('expanded');
    } else {
        planningContainer.classList.remove('expanded');
    }
}

/**
 * Toggle dagplanning expanded/collapsed state
 */
function toggleDayPlanning() {
    const planningContainer = document.getElementById('day-planning');
    if (!planningContainer) {
        return;
    }
    
    planningContainer.classList.toggle('expanded');
    
    // Update toggle text
    const toggleText = planningContainer.querySelector('.day-planning-toggle-text');
    if (toggleText) {
        toggleText.textContent = planningContainer.classList.contains('expanded') ? 'Inklappen' : 'Uitklappen';
    }
}

/**
 * Render een enkele planning taak
 */
function renderPlanningTask(task, isCompleted, lastClickData = null) {
    const completedClass = isCompleted ? 'completed' : '';
    const checkedAttr = isCompleted ? 'checked' : '';
    
    let taskHTML = `<div class="planning-task ${completedClass}" data-task-id="${escapeHtml(task.id)}">`;
    taskHTML += `<input type="checkbox" class="planning-checkbox" ${checkedAttr} onchange="toggleCompletedTask('${escapeHtml(task.id)}', event)">`;
    taskHTML += `<div class="planning-task-content" onclick="handlePlanningTaskClick('${escapeHtml(task.id)}', event)">`;
    taskHTML += `<span class="planning-task-icon">${task.icon}</span>`;
    taskHTML += `<div class="planning-task-info">`;
    taskHTML += `<div class="planning-task-title">${escapeHtml(task.title)}</div>`;
    if (task.description) {
        taskHTML += `<div class="planning-task-description">${escapeHtml(task.description)}</div>`;
    }
    // Voeg laatste klik info toe als beschikbaar (alleen voor taken met toolId)
    if (lastClickData && task.toolId) {
        const lastClick = lastClickData.timestamp ? new Date(lastClickData.timestamp) : null;
        if (lastClick) {
            const timeAgo = getTimeAgo(lastClick);
            taskHTML += `<div class="planning-task-meta">`;
            taskHTML += `<span class="planning-task-time">${escapeHtml(timeAgo)}</span>`;
            if (lastClickData.userName) {
                taskHTML += `<span class="planning-task-user">Door: ${escapeHtml(lastClickData.userName)}</span>`;
            }
            taskHTML += `</div>`;
        }
    }
    taskHTML += `</div></div></div>`;
    
    return taskHTML;
}

/**
 * Check of alle taken in een sectie voltooid zijn
 */
async function areAllTasksCompleted(section) {
    if (!currentUserName) {
        return false;
    }
    
    const now = new Date();
    const dateString = now.toISOString().split('T')[0];
    const status = await getDayPlanningStatus(dateString, currentUserName);
    
    const tasks = dayPlanning[section];
    if (tasks.length === 0) {
        return false;
    }
    
    // Check of alle taken voltooid zijn
    return tasks.every(task => status[task.id]?.completed === true);
}

/**
 * Toon easter egg boodschap (20% kans)
 */
function showEasterEggMessage(section) {
    // 20% kans
    if (Math.random() > 0.2) {
        return;
    }
    
    const messages = easterEggMessages[section];
    if (!messages || messages.length === 0) {
        return;
    }
    
    // Kies willekeurige boodschap
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Toon modal
    showEasterEggModal(randomMessage.message, randomMessage.author);
}

/**
 * Toon easter egg modal
 */
function showEasterEggModal(message, author) {
    // Maak modal element als het nog niet bestaat
    let modal = document.getElementById('easter-egg-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'easter-egg-modal';
        modal.className = 'easter-egg-modal';
        modal.innerHTML = `
            <div class="easter-egg-backdrop" onclick="closeEasterEggModal()"></div>
            <div class="easter-egg-content">
                <div class="easter-egg-icon">🎉</div>
                <div class="easter-egg-message"></div>
                <div class="easter-egg-author"></div>
                <button class="easter-egg-close" onclick="closeEasterEggModal()">Sluiten</button>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    // Vul boodschap in
    const messageEl = modal.querySelector('.easter-egg-message');
    const authorEl = modal.querySelector('.easter-egg-author');
    
    if (messageEl) {
        messageEl.textContent = message;
    }
    if (authorEl) {
        authorEl.textContent = `- ${author}`;
    }
    
    // Toon modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

/**
 * Sluit easter egg modal
 */
function closeEasterEggModal() {
    const modal = document.getElementById('easter-egg-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

/**
 * Open tutorial overlay
 */
function openTutorial(toolId, event) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    
    const tutorial = tutorials[toolId];
    if (!tutorial) {
        return;
    }
    
    // Maak of update tutorial modal
    let modal = document.getElementById('tutorial-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'tutorial-modal';
        modal.className = 'tutorial-modal';
        modal.innerHTML = `
            <div class="tutorial-backdrop" onclick="closeTutorial()"></div>
            <div class="tutorial-content">
                <div class="tutorial-header">
                    <h2 class="tutorial-title"></h2>
                    <button class="tutorial-close" onclick="closeTutorial()">&times;</button>
                </div>
                <div class="tutorial-description"></div>
                <div class="tutorial-sections"></div>
                <div class="tutorial-footer">
                    <button class="btn-primary" onclick="closeTutorial()">Sluiten</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    // Vul tutorial content in
    const titleEl = modal.querySelector('.tutorial-title');
    const descEl = modal.querySelector('.tutorial-description');
    const sectionsEl = modal.querySelector('.tutorial-sections');
    
    if (titleEl) {
        titleEl.textContent = tutorial.title;
    }
    if (descEl) {
        descEl.textContent = tutorial.description;
    }
    if (sectionsEl) {
        sectionsEl.innerHTML = tutorial.sections.map((section, index) => {
            let sectionHTML = `
                <div class="tutorial-section">
                    <h3 class="tutorial-section-title">${escapeHtml(section.title)}</h3>
                    <div class="tutorial-section-content">
                        ${section.image ? `
                            <div class="tutorial-image-container">
                                <img src="${escapeHtml(section.image)}" alt="${escapeHtml(section.title)}" class="tutorial-image" onerror="this.style.display='none'">
                            </div>
                        ` : ''}
                        <div class="tutorial-text">
                            ${escapeHtml(section.content).replace(/\n/g, '<br>')}
                        </div>
                    </div>
                </div>
            `;
            return sectionHTML;
        }).join('');
    }
    
    // Toon modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Scroll naar boven
    modal.querySelector('.tutorial-content').scrollTop = 0;
}

/**
 * Sluit tutorial overlay
 */
function closeTutorial() {
    const modal = document.getElementById('tutorial-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

/**
 * Toggle voltooid status van een planning taak
 */
async function toggleCompletedTask(taskId, event) {
    if (event) {
        event.stopPropagation();
    }
    
    if (!currentUserName) {
        return;
    }
    
    const checkbox = event?.target;
    const completed = checkbox?.checked || false;
    
    // Easter egg: tel clicks op "Inklokken" checkbox
    if (taskId === 'clock-in' && completed) {
        clockInClickCount++;
        if (clockInClickCount >= CLOCK_IN_TRIGGER_COUNT) {
            // Reset teller
            clockInClickCount = 0;
            // Trigger fake errors als functie bestaat
            if (typeof triggerFakeErrors === 'function') {
                triggerFakeErrors();
            }
        }
    }
    
    // Sla status op in Firebase
    await saveDayPlanningStatus(taskId, completed);
    
    // Update UI - render hele planning opnieuw om "Volgende taak:" te updaten
    await renderDayPlanning();
    
    // Check of alle taken voltooid zijn en toon easter egg (alleen als taak wordt afgevinkt)
    if (completed) {
        // Bepaal in welke sectie deze taak zit
        let section = null;
        if (dayPlanning.opening.find(t => t.id === taskId)) {
            section = 'morning';
        } else if (dayPlanning.closing.find(t => t.id === taskId)) {
            section = 'evening';
        }
        
        if (section) {
            // Check of alle taken in deze sectie voltooid zijn
            const allCompleted = await areAllTasksCompleted(section === 'morning' ? 'opening' : 'closing');
            if (allCompleted) {
                // 20% kans op easter egg
                showEasterEggMessage(section);
            }
        }
    }
}

/**
 * Handle klik op planning taak (open tool/link)
 */
async function handlePlanningTaskClick(taskId, event) {
    // Voorkom dat checkbox toggle wordt getriggerd
    if (event && event.target.classList.contains('planning-checkbox')) {
        return;
    }
    
    if (!currentUserName) {
        showNameModal();
        return;
    }
    
    // Vind de taak in dayPlanning
    let task = null;
    for (const section of ['opening', 'during', 'closing']) {
        task = dayPlanning[section].find(t => t.id === taskId);
        if (task) break;
    }
    
    if (!task) {
        return;
    }
    
    const now = new Date();
    
    // Als taak een toolId heeft, open de tool
    if (task.toolId) {
        // Speciale behandeling voor kart-daily-logboek: open overlay
        if (task.toolId === 'kart-daily-logboek') {
            openKartDailyOverlay(event);
            return;
        }
        
        // Speciale behandeling voor kuismachine-logs: open overlay
        if (task.toolId === 'kuismachine-logs') {
            openKuismachineOverlay(event);
            return;
        }
        
        // Vind de tool card en scroll ernaar toe
        const toolCard = document.querySelector(`.tool-card[data-tool-id="${task.toolId}"]`);
        if (toolCard) {
            toolCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Trigger click op tool button na korte delay
            setTimeout(() => {
                const toolButton = toolCard.querySelector('.tool-link-button');
                if (toolButton && !toolButton.disabled) {
                    toolButton.click();
                }
            }, 300);
        }
        
        // Log click
        await saveClickLog(task.toolId, now);
        
        // Update tool card display
        updateLastClickDisplay(task.toolId, now, currentUserName);
        
        // Refresh planning om laatste klik info te updaten
        setTimeout(async () => {
            await renderDayPlanning();
        }, 500);
    } 
    // Als taak een URL heeft, open externe link
    else if (task.url) {
        window.open(task.url, '_blank');
        
        // Log click met taskId
        await saveClickLog(taskId, now);
        
        // Refresh planning om laatste klik info te updaten
        setTimeout(async () => {
            await renderDayPlanning();
        }, 500);
    }
}

/**
 * Open feedback modal
 */
function openFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    if (!modal) {
        return;
    }
    
    // Reset form
    const form = document.getElementById('feedback-form');
    if (form) {
        form.reset();
    }
    
    // Hide error/success messages
    const errorDiv = document.getElementById('feedback-form-error');
    const successDiv = document.getElementById('feedback-form-success');
    if (errorDiv) errorDiv.style.display = 'none';
    if (successDiv) successDiv.style.display = 'none';
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Focus on first input
    setTimeout(() => {
        const firstInput = document.getElementById('feedback-type');
        if (firstInput) firstInput.focus();
    }, 100);
}

/**
 * Close feedback modal
 */
function closeFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    if (!modal) {
        return;
    }
    
    modal.style.display = 'none';
    document.body.style.overflow = '';
    
    // Reset form after animation
    setTimeout(() => {
        const form = document.getElementById('feedback-form');
        if (form) {
            form.reset();
        }
        const errorDiv = document.getElementById('feedback-form-error');
        const successDiv = document.getElementById('feedback-form-success');
        if (errorDiv) errorDiv.style.display = 'none';
        if (successDiv) successDiv.style.display = 'none';
    }, 300);
}

/**
 * Toon Daily Report waarschuwing modal
 */
function showDailyReportWarning() {
    const modal = document.getElementById('daily-report-warning-modal');
    if (!modal) {
        return;
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

/**
 * Sluit Daily Report waarschuwing modal
 */
function closeDailyReportWarning() {
    const modal = document.getElementById('daily-report-warning-modal');
    if (!modal) {
        return;
    }
    
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

/**
 * Ga door naar Daily Report document
 */
function proceedToDailyReport() {
    // Sluit modal
    closeDailyReportWarning();
    
    // Log de klik tijd
    const now = new Date();
    saveClickLog('daily-report', now);
    updateLastClickDisplay('daily-report', now, currentUserName);
    
    // Open de link
    const dailyReportTool = tools.find(t => t.id === 'daily-report');
    if (dailyReportTool && dailyReportTool.url) {
        window.open(dailyReportTool.url, '_blank');
    }
}

/**
 * Handle feedback form submit
 */
async function handleFeedbackSubmit(event) {
    event.preventDefault();
    
    const errorDiv = document.getElementById('feedback-form-error');
    const successDiv = document.getElementById('feedback-form-success');
    const submitButton = event.target.querySelector('button[type="submit"]');
    
    // Hide previous messages
    if (errorDiv) errorDiv.style.display = 'none';
    if (successDiv) successDiv.style.display = 'none';
    
    // Disable submit button
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Verzenden...';
    
    try {
        // Get form data
        const formData = {
            type: document.getElementById('feedback-type').value,
            title: document.getElementById('feedback-title').value.trim(),
            description: document.getElementById('feedback-description').value.trim(),
            email: document.getElementById('feedback-email').value.trim() || null,
            userName: currentUserName || 'Anoniem',
            timestamp: Date.now(),
            dateTime: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
        };
        
        // Validate
        if (!formData.type || !formData.title || !formData.description) {
            throw new Error('Vul alle verplichte velden in.');
        }
        
        // Save to Firebase
        await saveFeedbackToFirebase(formData);
        
        // Show success message
        if (successDiv) {
            successDiv.style.display = 'block';
        }
        
        // Reset form
        event.target.reset();
        
        // Close modal after 2 seconds
        setTimeout(() => {
            closeFeedbackModal();
        }, 2000);
        
    } catch (error) {
        console.error('Error submitting feedback:', error);
        if (errorDiv) {
            errorDiv.textContent = error.message || 'Er is een fout opgetreden bij het verzenden. Probeer het opnieuw.';
            errorDiv.style.display = 'block';
        }
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
}

/**
 * Save feedback to Firebase
 */
async function saveFeedbackToFirebase(feedbackData) {
    if (!database || !firebaseFunctions) {
        throw new Error('Firebase niet beschikbaar');
    }
    
    try {
        const { ref, push } = firebaseFunctions;
        const feedbackRef = ref(database, 'feedback');
        await push(feedbackRef, feedbackData);
        
        console.log('Feedback opgeslagen in Firebase');
    } catch (error) {
        console.error('Error saving feedback to Firebase:', error);
        throw new Error('Kon feedback niet opslaan. Controleer je internetverbinding.');
    }
}
