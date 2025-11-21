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
        url: 'Kart Logboek v.xlsx',
        isFile: true,
        frequency: 'daily'
    },
    {
        id: 'daily-report',
        title: 'Daily Report',
        url: 'Dagreport.docx',
        isFile: true,
        frequency: 'daily'
    },
    {
        id: 'bk-panel',
        title: 'BK panel',
        url: 'https://oauth.battlekart.com/authorize?client_id=d66a502f0a4b7690ed5808e0b559010b&redirect_uri=https%3A%2F%2Fpanel.battlekart.com%2F&response_type=id_token&scope=openid+profile+email&state=33be5a04e47045b69f25360d57512097&brand_id=2&flow=',
        frequency: 'daily'
    },
    {
        id: 'kuismachine-website',
        title: 'Kuismachine website',
        url: 'https://becreativeruben.github.io/BK_Overview_Demo/',
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

// Firebase database referentie en functies (wordt gezet in index.html)
let database = null;
let firebaseFunctions = null;

// Huidige gebruiker naam
let currentUserName = null;

// Inactivity timer
let inactivityTimer = null;
const INACTIVITY_TIMEOUT = 3 * 60 * 1000; // 3 minuten in milliseconden

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
    for (const tool of weeklyTools) {
        const toolCard = await createToolCard(tool);
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
    if (tool.id === 'kuismachine-logs') {
        const lastLog = await getLastKuismachineLog();
        if (lastLog) {
            const logDate = new Date(lastLog.timestamp);
            const dateTimeStr = formatDateTime(logDate);
            const userName = lastLog.userName || 'Onbekend';
            
            // Piste info
            const pisteAInfo = [];
            const pisteBInfo = [];
            
            if (lastLog.kuismachineGebruikt) {
                if (lastLog.kuismachinePisteA) pisteAInfo.push('Kuismachine');
                if (lastLog.kuismachinePisteB) pisteBInfo.push('Kuismachine');
            }
            if (lastLog.stofzuigerGebruikt) {
                if (lastLog.stofzuigerPisteA) pisteAInfo.push('Stofzuiger');
                if (lastLog.stofzuigerPisteB) pisteBInfo.push('Stofzuiger');
            }
            
            kuismachineInfoHTML = `
                ${pisteAInfo.length > 0 ? `
                <div class="info-item">
                    <span class="info-label">Baan A:</span>
                    <span class="info-value">${escapeHtml(dateTimeStr)}</span>
                </div>
                ` : ''}
                ${pisteBInfo.length > 0 ? `
                <div class="info-item">
                    <span class="info-label">Baan B:</span>
                    <span class="info-value">${escapeHtml(dateTimeStr)}</span>
                </div>
                ` : ''}
                ${lastLog.kuismachineGebruikt ? `
                <div class="info-item">
                    <span class="info-label">Kuismachine uitgekuist?</span>
                    <span class="info-value">${lastLog.kuismachineUitgekuist ? 'Ja' : 'Nee'}</span>
                </div>
                ` : ''}
                ${lastLog.stofzuigerGebruikt ? `
                <div class="info-item">
                    <span class="info-label">Stofzuiger uitgekuist?</span>
                    <span class="info-value">${lastLog.stofzuigerUitgekuist ? 'Ja' : 'Nee'}</span>
                </div>
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

    card.innerHTML = `
        <div class="tool-header">
            <div class="tool-title">${escapeHtml(tool.title)}</div>
            ${frequencyBadge}
        </div>
        ${timeAgoText ? `<div class="time-ago-tag">${escapeHtml(timeAgoText)}</div>` : ''}
        <div class="tool-info">
            ${tool.id === 'kuismachine-logs' ? kuismachineInfoHTML : `
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
    document.getElementById('kuismachine-reden-fields').style.display = 'none';
    document.getElementById('stofzuiger-reden-fields').style.display = 'none';
    
    // Vul automatisch datum en tijd
    const now = new Date();
    const dateStr = now.toLocaleDateString('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('nl-NL', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    document.getElementById('kuismachine-datum').value = dateStr;
    document.getElementById('kuismachine-tijd').value = timeStr;
    
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
    
    if (checkbox.checked) {
        fields.style.display = 'block';
    } else {
        fields.style.display = 'none';
        // Reset velden
        document.getElementById(`${machineType}-piste-a`).checked = false;
        document.getElementById(`${machineType}-piste-b`).checked = false;
        document.getElementById(`${machineType}-uitgekuist`).checked = false;
        const redenFields = document.getElementById(`${machineType}-reden-fields`);
        if (redenFields) {
            redenFields.style.display = 'none';
            document.getElementById(`${machineType}-reden`).value = '';
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
    
    if (!checkbox.checked) {
        // Niet uitgekuist - toon reden veld
        redenFields.style.display = 'block';
        redenInput.required = true;
    } else {
        // Wel uitgekuist - verberg reden veld
        redenFields.style.display = 'none';
        redenInput.required = false;
        redenInput.value = '';
    }
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
    
    // Valideer kuismachine velden
    if (formData.kuismachineGebruikt) {
        if (!formData.kuismachinePisteA && !formData.kuismachinePisteB) {
            errors.push('Selecteer minimaal één piste voor de kuismachine (A of B)');
        }
        if (!formData.kuismachineUitgekuist && !formData.kuismachineReden) {
            errors.push('Geef een reden op waarom de kuismachine niet uitgekuist kon worden');
        }
    }
    
    // Valideer stofzuiger velden
    if (formData.stofzuigerGebruikt) {
        if (!formData.stofzuigerPisteA && !formData.stofzuigerPisteB) {
            errors.push('Selecteer minimaal één piste voor de stofzuiger (A of B)');
        }
        if (!formData.stofzuigerUitgekuist && !formData.stofzuigerReden) {
            errors.push('Geef een reden op waarom de stofzuiger niet uitgekuist kon worden');
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
        kuismachineUitgekuist: document.getElementById('kuismachine-uitgekuist').checked,
        kuismachineReden: document.getElementById('kuismachine-reden').value.trim(),
        stofzuigerGebruikt: document.getElementById('stofzuiger-gebruikt').checked,
        stofzuigerPisteA: document.getElementById('stofzuiger-piste-a').checked,
        stofzuigerPisteB: document.getElementById('stofzuiger-piste-b').checked,
        stofzuigerUitgekuist: document.getElementById('stofzuiger-uitgekuist').checked,
        stofzuigerReden: document.getElementById('stofzuiger-reden').value.trim()
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
                    lastLog = log;
                }
            });
            
            return lastLog;
        }
    } catch (error) {
        console.error('Error loading kuismachine log from Firebase:', error);
    }
    
    return null;
}
