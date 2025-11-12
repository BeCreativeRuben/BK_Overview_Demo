// Google Apps Script Web App URL - Deze moet worden aangepast na deployment
const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_WEB_APP_URL_HERE';

// Laad dashboard bij pagina load
document.addEventListener('DOMContentLoaded', () => {
    loadDashboard();
});

/**
 * Laad dashboard data van Google Apps Script of localStorage
 */
async function loadDashboard() {
    const loadingEl = document.getElementById('loading');
    const errorEl = document.getElementById('error');
    const dashboardEl = document.getElementById('dashboard');

    // Toon loading state
    loadingEl.style.display = 'block';
    errorEl.style.display = 'none';
    dashboardEl.style.display = 'none';

    try {
        let tools = [];

        // Probeer eerst data op te halen van Google Apps Script
        if (APPS_SCRIPT_URL && APPS_SCRIPT_URL !== 'YOUR_APPS_SCRIPT_WEB_APP_URL_HERE') {
            try {
                const response = await fetch(APPS_SCRIPT_URL);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                
                if (data.success && data.tools) {
                    tools = data.tools;
                    // Sla data op in localStorage als backup
                    localStorage.setItem('dashboardData', JSON.stringify(tools));
                    localStorage.setItem('dashboardDataTimestamp', Date.now().toString());
                } else {
                    throw new Error('Invalid response format');
                }
            } catch (fetchError) {
                console.warn('Failed to fetch from Apps Script, trying localStorage:', fetchError);
                // Fallback naar localStorage
                tools = loadFromLocalStorage();
            }
        } else {
            // Geen URL geconfigureerd, gebruik demo data
            tools = getDefaultTools();
            // Sla demo data op in localStorage voor consistentie
            localStorage.setItem('dashboardData', JSON.stringify(tools));
            localStorage.setItem('dashboardDataTimestamp', Date.now().toString());
        }

        // Toon dashboard
        displayTools(tools);
        loadingEl.style.display = 'none';
        dashboardEl.style.display = 'block';

    } catch (error) {
        console.error('Error loading dashboard:', error);
        
        // Probeer localStorage als laatste redmiddel
        const tools = loadFromLocalStorage();
        
        if (tools.length > 0) {
            displayTools(tools);
            loadingEl.style.display = 'none';
            dashboardEl.style.display = 'block';
        } else {
            // Geen data beschikbaar
            loadingEl.style.display = 'none';
            errorEl.style.display = 'block';
        }
    }
}

/**
 * Laad data uit localStorage
 */
function loadFromLocalStorage() {
    try {
        const storedData = localStorage.getItem('dashboardData');
        if (storedData) {
            return JSON.parse(storedData);
        }
    } catch (error) {
        console.error('Error loading from localStorage:', error);
    }
    
    // Return default/empty tools als fallback
    return getDefaultTools();
}

/**
 * Toon tools in het dashboard
 */
function displayTools(tools) {
    const container = document.getElementById('tools-container');
    container.innerHTML = '';

    if (tools.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: white; padding: 40px;">Geen tools beschikbaar.</p>';
        return;
    }

    tools.forEach(tool => {
        const toolCard = createToolCard(tool);
        container.appendChild(toolCard);
    });
}

/**
 * Controleer of een tool actie vereist vandaag
 */
function needsActionToday(tool) {
    if (!tool.lastUpdatedDate || tool.lastUpdatedDate === '') {
        return true; // Nooit ingevuld
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const lastUpdate = new Date(tool.lastUpdatedDate);
    lastUpdate.setHours(0, 0, 0, 0);

    if (tool.frequency === 'Dagelijks') {
        // Voor dagelijkse taken: moet vandaag zijn
        return lastUpdate.getTime() < today.getTime();
    } else if (tool.frequency === 'Wekelijks') {
        // Voor wekelijkse taken: moet binnen de laatste 7 dagen zijn
        const daysDiff = Math.floor((today - lastUpdate) / (1000 * 60 * 60 * 24));
        return daysDiff >= 7;
    }

    return false;
}

/**
 * Maak een tool card element
 */
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    
    const needsAction = tool.needsAction !== undefined ? tool.needsAction : needsActionToday(tool);
    if (needsAction) {
        card.classList.add('needs-action');
    } else {
        card.classList.add('completed');
    }

    const hasLastUpdate = tool.lastUpdatedDate && tool.lastUpdatedDate !== '';
    const lastUpdateDate = hasLastUpdate ? formatDate(tool.lastUpdatedDate) : 'Nog niet ingevuld';
    const lastUpdateTime = hasLastUpdate && tool.lastUpdatedTime ? tool.lastUpdatedTime : '';
    const lastUpdatedBy = tool.lastUpdatedBy && tool.lastUpdatedBy !== '' ? tool.lastUpdatedBy : 'N/A';

    const statusBadge = needsAction 
        ? '<span class="status-badge status-pending">⚠️ Actie vereist</span>'
        : '<span class="status-badge status-completed">✓ Voltooid</span>';

    card.innerHTML = `
        <div class="tool-header">
            <div>
                <div class="tool-title">${escapeHtml(tool.title)}</div>
            </div>
            <span class="tool-frequency">${escapeHtml(tool.frequency)}</span>
        </div>
        ${statusBadge}
        <div class="tool-info">
            <div class="info-item">
                <span class="info-label">Laatste invuldatum:</span>
                <span class="info-value ${!hasLastUpdate ? 'empty' : ''}">${escapeHtml(lastUpdateDate)}</span>
            </div>
            ${lastUpdateTime ? `
            <div class="info-item">
                <span class="info-label">Tijd:</span>
                <span class="info-value">${escapeHtml(lastUpdateTime)}</span>
            </div>
            ` : ''}
            <div class="info-item">
                <span class="info-label">Door:</span>
                <span class="info-value ${!tool.lastUpdatedBy || tool.lastUpdatedBy === '' ? 'empty' : ''}">${escapeHtml(lastUpdatedBy)}</span>
            </div>
        </div>
        <div class="tool-actions">
            <button class="check-button ${needsAction ? 'check-button-pending' : 'check-button-completed'}" onclick="handleCheck('${tool.id}')">
                ${needsAction ? '✓ Check nu' : '✓ Opnieuw checken'}
            </button>
            ${tool.link && tool.link !== '#' ? `
            <a href="${escapeHtml(tool.link)}" class="tool-link-button">→ Ga naar tool</a>
            ` : `
            <span class="tool-link-button disabled">Binnenkort beschikbaar</span>
            `}
        </div>
    `;

    return card;
}

/**
 * Handle check button click
 */
function handleCheck(toolId) {
    // In een echte implementatie zou dit de tool als voltooid markeren
    console.log(`Checking tool: ${toolId}`);
    alert(`Tool "${toolId}" wordt nu gecheckt. In productie zou dit de status updaten.`);
    // Optioneel: reload dashboard om status te updaten
    // loadDashboard();
}

/**
 * Format datum voor weergave
 */
function formatDate(dateString) {
    if (!dateString) return '';
    
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            // Als het geen geldige datum is, probeer het als string te tonen
            return dateString;
        }
        
        return date.toLocaleDateString('nl-NL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (error) {
        return dateString;
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
 * Default tools voor als er geen data beschikbaar is
 */
function getDefaultTools() {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split('T')[0];
    const lastWeek = new Date(today);
    lastWeek.setDate(lastWeek.getDate() - 7);
    const lastWeekString = lastWeek.toISOString().split('T')[0];

    return [
        {
            id: 'stockcheck',
            title: 'Stockcheck Document',
            frequency: 'Wekelijks',
            lastUpdatedDate: lastWeekString,
            lastUpdatedTime: '14:30',
            lastUpdatedBy: 'Jan Janssen',
            link: '#',
            needsAction: false // Al gedaan deze week
        },
        {
            id: 'weekly-kart',
            title: 'Weekly Kart Check',
            frequency: 'Wekelijks',
            lastUpdatedDate: lastWeekString,
            lastUpdatedTime: '15:45',
            lastUpdatedBy: 'Maria de Vries',
            link: '#',
            needsAction: false // Al gedaan deze week
        },
        {
            id: 'cash-tracking',
            title: 'Cash-tracking',
            frequency: 'Dagelijks',
            lastUpdatedDate: todayString,
            lastUpdatedTime: '09:15',
            lastUpdatedBy: 'Piet Bakker',
            link: '#',
            needsAction: false // Al gedaan vandaag
        },
        {
            id: 'cash-payments',
            title: 'Cash & Payments',
            frequency: 'Dagelijks',
            lastUpdatedDate: yesterdayString,
            lastUpdatedTime: '17:30',
            lastUpdatedBy: 'Lisa Smit',
            link: '#',
            needsAction: true // Nog niet gedaan vandaag
        },
        {
            id: 'kuismachine-logs',
            title: 'Kuismachine Logs',
            frequency: 'Dagelijks',
            lastUpdatedDate: yesterdayString,
            lastUpdatedTime: '16:00',
            lastUpdatedBy: 'Tom de Boer',
            link: '#',
            needsAction: true // Nog niet gedaan vandaag
        },
        {
            id: 'daily-kartcheck',
            title: 'Daily Kartcheck',
            frequency: 'Dagelijks',
            lastUpdatedDate: todayString,
            lastUpdatedTime: '08:00',
            lastUpdatedBy: 'Anna van der Berg',
            link: '#',
            needsAction: false // Al gedaan vandaag
        },
        {
            id: 'dagreports',
            title: 'Dagreports',
            frequency: 'Dagelijks',
            lastUpdatedDate: yesterdayString,
            lastUpdatedTime: '18:00',
            lastUpdatedBy: 'Mark Jansen',
            link: '#',
            needsAction: true // Nog niet gedaan vandaag
        }
    ];
}

