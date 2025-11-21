// Link data met alle tools en links
const tools = [
    {
        id: 'overview',
        title: 'Overview',
        url: 'https://becreativeruben.github.io/BK_Overview_Demo/'
    },
    {
        id: 'cash-payments',
        title: 'Cash & Payments Employees',
        url: 'https://docs.google.com/spreadsheets/d/1NRhb54013pCnwgjNvl6OgvL7UAzP_xarv601Va_DFNY/edit?gid=263458102#gid=263458102'
    },
    {
        id: 'kart-daily-logboek',
        title: 'Kart Daily logboek',
        url: 'Kart Logboek v.xlsx',
        isFile: true
    },
    {
        id: 'daily-report',
        title: 'Daily Report',
        url: 'Dagreport.docx',
        isFile: true
    },
    {
        id: 'bk-panel',
        title: 'BK panel',
        url: 'https://oauth.battlekart.com/authorize?client_id=d66a502f0a4b7690ed5808e0b559010b&redirect_uri=https%3A%2F%2Fpanel.battlekart.com%2F&response_type=id_token&scope=openid+profile+email&state=33be5a04e47045b69f25360d57512097&brand_id=2&flow='
    },
    {
        id: 'kuismachine-website',
        title: 'Kuismachine website',
        url: 'https://becreativeruben.github.io/BK_Overview_Demo/'
    },
    {
        id: 'kuismachine-logs',
        title: 'Kuismachine logs',
        url: '#',
        isFile: true
    },
    {
        id: 'stockcheck-bk',
        title: 'StockcheckBK',
        url: 'https://becreativeruben.github.io/StockCheckBK_V2/'
    },
    {
        id: 'kart-weekly-site',
        title: 'Kart Weekly site',
        url: 'https://becreativeruben.github.io/WeeklyKartCheck/'
    },
    {
        id: 'kart-weekly-logboek',
        title: 'Kart Weekly logboek',
        url: 'https://docs.google.com/spreadsheets/d/1sCTKJzF1b7pZ5bB1AFD8Y-Hzx2HXI4x5AhVMNVi6gM8/edit'
    }
];

// Laad dashboard bij pagina load
document.addEventListener('DOMContentLoaded', () => {
    loadDashboard();
});

/**
 * Laad dashboard en toon alle tools
 */
function loadDashboard() {
    const container = document.getElementById('tools-container');
    container.innerHTML = '';

    tools.forEach(tool => {
        const toolCard = createToolCard(tool);
        container.appendChild(toolCard);
    });
}

/**
 * Maak een tool card element
 */
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.setAttribute('data-tool-id', tool.id);
    
    // Haal laatste klik tijd op
    const lastClick = getLastClick(tool.id);
    const lastClickText = lastClick 
        ? formatDateTime(lastClick) 
        : 'Nog niet geklikt';

    card.innerHTML = `
        <div class="tool-header">
            <div class="tool-title">${escapeHtml(tool.title)}</div>
        </div>
        <div class="tool-info">
            <div class="info-item">
                <span class="info-label">Laatst geklikt:</span>
                <span class="info-value ${!lastClick ? 'empty' : ''}">${escapeHtml(lastClickText)}</span>
            </div>
        </div>
        <div class="tool-actions">
            ${tool.url && tool.url !== '#' ? `
            <a href="${escapeHtml(tool.url)}" 
               class="tool-link-button" 
               target="_blank"
               onclick="handleLinkClick('${tool.id}', event)">
                → Ga naar tool
            </a>
            ` : `
            <span class="tool-link-button disabled">Binnenkort beschikbaar</span>
            `}
        </div>
    `;

    return card;
}

/**
 * Handle link click - log de klik tijd
 */
function handleLinkClick(toolId, event) {
    // Log de klik tijd
    const now = new Date();
    saveLastClick(toolId, now);
    
    // Update de weergave
    updateLastClickDisplay(toolId, now);
}

/**
 * Sla laatste klik tijd op in localStorage
 */
function saveLastClick(toolId, dateTime) {
    try {
        const clickData = {
            timestamp: dateTime.getTime(),
            dateTime: dateTime.toISOString()
        };
        localStorage.setItem(`lastClick_${toolId}`, JSON.stringify(clickData));
    } catch (error) {
        console.error('Error saving click data:', error);
    }
}

/**
 * Haal laatste klik tijd op uit localStorage
 */
function getLastClick(toolId) {
    try {
        const stored = localStorage.getItem(`lastClick_${toolId}`);
        if (stored) {
            const data = JSON.parse(stored);
            return new Date(data.timestamp);
        }
    } catch (error) {
        console.error('Error loading click data:', error);
    }
    return null;
}

/**
 * Update de weergave van laatste klik tijd
 */
function updateLastClickDisplay(toolId, dateTime) {
    const card = document.querySelector(`.tool-card[data-tool-id="${toolId}"]`);
    if (card) {
        const infoValue = card.querySelector('.info-value');
        if (infoValue) {
            infoValue.textContent = formatDateTime(dateTime);
            infoValue.classList.remove('empty');
        }
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
 * Escape HTML om XSS te voorkomen
 */
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
