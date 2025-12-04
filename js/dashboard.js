// Link data met alle tools en links
const tools = [
    // Dagelijkse taken
    {
        id: 'cash-payments',
        title: 'Cash & Payments Employees',
        url: 'https://docs.google.com/spreadsheets/d/1NRhb54013pCnwgjNvl6OgvL7UAzP_xarv601Va_DFNY/edit?gid=263458102#gid=263458102',
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
                content: 'Dit document helpt ons om alle cash transacties en employee payments bij te houden. Het is belangrijk voor financiële tracking en rapportage.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Cash+Payments+1'
            },
            {
                title: 'Stap 1: Open het document',
                content: 'Klik op de link om het Google Sheets document te openen. Zorg dat je de juiste rechten hebt om te bewerken.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Cash+Payments+2'
            },
            {
                title: 'Stap 2: Vul de gegevens in',
                content: 'Vul voor elke transactie de datum, het bedrag, de beschrijving en de betrokken employee in. Controleer altijd of de bedragen kloppen.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Cash+Payments+3'
            },
            {
                title: 'Tips',
                content: '• Sla regelmatig op tijdens het invullen\n• Controleer de totalen aan het einde\n• Neem contact op bij twijfel over een transactie',
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
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Kart+Daily+1'
            },
            {
                title: 'Stap 1: Download het bestand',
                content: 'Klik op de link om het Excel bestand te downloaden. Open het in Excel of een compatibel programma.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Kart+Daily+2'
            },
            {
                title: 'Stap 2: Vul per kart in',
                content: 'Voor elke kart noteer je de status, eventuele problemen, onderhoud dat is uitgevoerd, en wie de kart heeft gebruikt.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Kart+Daily+3'
            },
            {
                title: 'Tips',
                content: '• Wees specifiek bij problemen\n• Noteer altijd de tijd van meldingen\n• Upload het bestand na invullen',
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
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Daily+Report+1'
            },
            {
                title: 'Stap 1: Open het document',
                content: 'Download het Word document en open het. Je kunt het ook online bewerken als je de juiste rechten hebt.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Daily+Report+2'
            },
            {
                title: 'Stap 2: Vul de secties in',
                content: 'Vul alle relevante secties in: bezoekersaantallen, incidenten, onderhoud, opmerkingen, en andere belangrijke informatie van de dag.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Daily+Report+3'
            },
            {
                title: 'Tips',
                content: '• Vul het rapport in aan het einde van de dag\n• Wees objectief en duidelijk\n• Vermeld alle belangrijke gebeurtenissen',
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
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Kuismachine+1'
            },
            {
                title: 'Stap 1: Open de overlay',
                content: 'Klik op "Ga naar tool" bij Kuismachine logs om de invoer overlay te openen.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Kuismachine+2'
            },
            {
                title: 'Stap 2: Vul de gegevens in',
                content: 'Geef aan welke machines je hebt gebruikt (kuismachine en/of stofzuiger), welke pistes je hebt gekuist (A en/of B), en of je de machines daarna hebt uitgekuist. Vul ook de start- en eindtijden in van de machine displays.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Kuismachine+3'
            },
            {
                title: 'Stap 3: Reden indien niet uitgekuist',
                content: 'Als je een machine niet hebt uitgekuist, is het verplicht om een reden op te geven. Dit helpt bij planning en communicatie.',
                image: 'https://via.placeholder.com/800x400?text=Placeholder+Screenshot+Kuismachine+4'
            },
            {
                title: 'Tips',
                content: '• Vul de logs direct in na het kuisen\n• Controleer de machine displays voor de juiste tijden\n• Geef altijd een duidelijke reden als je niet kunt uitkuisen',
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
    }
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
        // Speciale button voor kuismachine overlay
        actionsHTML = `
            <button class="tool-link-button" onclick="openKuismachineOverlay(event)">
                → Ga naar tool
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

/**
 * Open help tutorial (placeholder voor toekomstige implementatie)
 */
function openHelpTutorial() {
    // Placeholder functie - wordt later geïmplementeerd
    alert('Hulp & Tutorial functie komt binnenkort beschikbaar!');
    // TODO: Implementeer interactieve tutorial overlay
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
 * Open kuismachine overlay
 */
function openKuismachineOverlay(event) {
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
    
    // Toon overlay
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

/**
 * Sluit kuismachine overlay
 */
function closeKuismachineOverlay() {
    const overlay = document.getElementById('kuismachine-overlay');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
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
    const formData = {
        kuismachineGebruikt: document.getElementById('kuismachine-gebruikt').checked,
        kuismachinePisteA: document.getElementById('kuismachine-piste-a').checked,
        kuismachinePisteB: document.getElementById('kuismachine-piste-b').checked,
        kuismachineBegintijd: document.getElementById('kuismachine-begintijd').value.trim(),
        kuismachineEindtijd: document.getElementById('kuismachine-eindtijd').value.trim(),
        kuismachineUitgekuist: document.getElementById('kuismachine-uitgekuist').checked,
        kuismachineReden: document.getElementById('kuismachine-reden').value.trim(),
        kuismachineNietGebruiktReden: document.getElementById('kuismachine-niet-gebruikt-reden')?.value.trim() || '',
        stofzuigerGebruikt: document.getElementById('stofzuiger-gebruikt').checked,
        stofzuigerPisteA: document.getElementById('stofzuiger-piste-a').checked,
        stofzuigerPisteB: document.getElementById('stofzuiger-piste-b').checked,
        stofzuigerBegintijd: document.getElementById('stofzuiger-begintijd').value.trim(),
        stofzuigerEindtijd: document.getElementById('stofzuiger-eindtijd').value.trim(),
        stofzuigerUitgekuist: document.getElementById('stofzuiger-uitgekuist').checked,
        stofzuigerReden: document.getElementById('stofzuiger-reden').value.trim(),
        stofzuigerNietGebruiktReden: document.getElementById('stofzuiger-niet-gebruikt-reden')?.value.trim() || ''
    };
    
    // Valideer
    const errors = validateKuismachineForm(formData);
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
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Opslaan...';
    
    try {
        // Sla op in Firebase
        await saveKuismachineLog(formData);
        
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
            <div class="kart-block-number" onclick="toggleKartDetails(${i})">
                <span class="kart-number">${i}</span>
                <input type="checkbox" id="kart-${i}-problem" name="kart-${i}-problem" class="kart-problem-checkbox-input" onchange="toggleKartProblem(${i})">
            </div>
            <div id="kart-${i}-details" class="kart-details" style="display: none;">
                <div class="kart-details-header">
                    <h4>Kart ${i} - Probleem rapporteren</h4>
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
 * Toggle kart details venster (bij klik op kart blokje)
 */
function toggleKartDetails(kartNumber) {
    const detailsDiv = document.getElementById(`kart-${kartNumber}-details`);
    const kartBlock = document.querySelector(`.kart-block[data-kart-number="${kartNumber}"]`);
    
    if (detailsDiv.style.display === 'none' || !detailsDiv.style.display) {
        detailsDiv.style.display = 'block';
        if (kartBlock) {
            kartBlock.classList.add('kart-block-active');
        }
    } else {
        detailsDiv.style.display = 'none';
        if (kartBlock) {
            kartBlock.classList.remove('kart-block-active');
        }
    }
}

/**
 * Toggle kart probleem reden veld
 */
function toggleKartProblem(kartNumber) {
    const checkbox = document.getElementById(`kart-${kartNumber}-problem`);
    const reasonField = document.getElementById(`kart-${kartNumber}-reason-field`);
    const reasonInput = document.getElementById(`kart-${kartNumber}-reason`);
    const detailsDiv = document.getElementById(`kart-${kartNumber}-details`);
    const kartBlock = document.querySelector(`.kart-block[data-kart-number="${kartNumber}"]`);
    
    // Als checkbox wordt aangevinkt, open details en maak reden verplicht
    if (checkbox.checked) {
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
        }
    } else {
        // Als checkbox wordt uitgevinkt, maak reden niet verplicht maar laat details open
        if (reasonField) {
            reasonField.style.display = 'block';
        }
        if (reasonInput) {
            reasonInput.required = false;
            reasonInput.value = '';
        }
        if (kartBlock) {
            kartBlock.classList.remove('kart-block-has-problem');
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
    
    // Update UI
    const taskElement = document.querySelector(`.planning-task[data-task-id="${taskId}"]`);
    if (taskElement) {
        if (completed) {
            taskElement.classList.add('completed');
        } else {
            taskElement.classList.remove('completed');
        }
    }
    
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
