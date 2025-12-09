// Logs Dashboard JavaScript

// Authenticatie
const ADMIN_PASSWORD = 'battlekart2024';
const AUTH_STORAGE_KEY = 'logs_authenticated';

// Data storage
let allLogs = {
    clicks: [],
    kuismachine: [],
    kartDaily: [],
    feedback: []
};

let filteredLogs = {
    clicks: [],
    kuismachine: [],
    kartDaily: [],
    feedback: []
};

let currentSort = {
    table: null,
    column: null,
    direction: 'asc'
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuthentication();
});

// Debounce timer voor updates
let updateDebounceTimer = null;
const UPDATE_DEBOUNCE_MS = 1000; // Wacht 1 seconde na laatste update

// Debounce timer voor search input
let searchDebounceTimer = null;
const SEARCH_DEBOUNCE_MS = 300; // Korter dan update debounce voor snellere respons

/**
 * Controleer authenticatie status
 */
function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    if (isAuthenticated) {
        showLogsContainer();
        loadAllLogs();
        setupFirebaseListeners();
    } else {
        showPasswordModal();
    }
}

/**
 * Toon wachtwoord modal
 */
function showPasswordModal() {
    document.getElementById('password-modal').style.display = 'flex';
    document.getElementById('logs-container').style.display = 'none';
}

/**
 * Verberg wachtwoord modal
 */
function hidePasswordModal() {
    document.getElementById('password-modal').style.display = 'none';
}

/**
 * Handle wachtwoord submit
 */
function handlePasswordSubmit(event) {
    event.preventDefault();
    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value;
    const errorDiv = document.getElementById('password-error');

    if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
        hidePasswordModal();
        showLogsContainer();
        loadAllLogs();
        setupFirebaseListeners();
        passwordInput.value = '';
        errorDiv.style.display = 'none';
    } else {
        errorDiv.textContent = 'Onjuist wachtwoord. Probeer het opnieuw.';
        errorDiv.style.display = 'block';
        passwordInput.value = '';
    }
}

/**
 * Logout
 */
function logout() {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    allLogs = { clicks: [], kuismachine: [], kartDaily: [] };
    filteredLogs = { clicks: [], kuismachine: [], kartDaily: [] };
    showPasswordModal();
}

/**
 * Toon logs container
 */
function showLogsContainer() {
    document.getElementById('logs-container').style.display = 'block';
}

/**
 * Laad alle logs uit Firebase
 */
async function loadAllLogs() {
    if (!window.firebaseDatabase || !window.firebaseDatabaseFunctions) {
        console.error('Firebase niet beschikbaar');
        return;
    }

    const { ref, get } = window.firebaseDatabaseFunctions;
    const database = window.firebaseDatabase;

    try {
        console.log('Start loading all logs...');
        
        // Laad click logs
        console.log('Loading click logs...');
        await loadClickLogs(database, ref, get);
        console.log(`Loaded ${allLogs.clicks.length} click logs`);
        
        // Laad kuismachine logs
        console.log('Loading kuismachine logs...');
        await loadKuismachineLogs(database, ref, get);
        console.log(`Loaded ${allLogs.kuismachine.length} kuismachine logs`);
        
        // Laad kart daily checks
        console.log('Loading kart daily checks...');
        await loadKartDailyChecks(database, ref, get);
        console.log(`Loaded ${allLogs.kartDaily.length} kart daily checks`);
        
        // Laad feedback
        console.log('Loading feedback...');
        await loadFeedback(database, ref, get);
        console.log(`Loaded ${allLogs.feedback.length} feedback items`);
        
        // Update filters en render
        populateUserFilter();
        applyFilters();
        calculateStats();
        
        console.log('Finished loading all logs');
        
    } catch (error) {
        console.error('Error loading logs:', error);
        console.error('Error stack:', error.stack);
    }
}

/**
 * Laad click logs
 */
async function loadClickLogs(database, ref, get) {
    try {
        const logsRef = ref(database, 'logs');
        const snapshot = await get(logsRef);
        
        allLogs.clicks = [];
        
        if (snapshot.exists()) {
            const logsData = snapshot.val();
            
            // Itereer door alle tools
            Object.keys(logsData).forEach(toolId => {
                const toolLogs = logsData[toolId];
                
                // Skip als toolLogs null of undefined is
                if (!toolLogs || typeof toolLogs !== 'object') {
                    return;
                }
                
                // Itereer door alle logs voor deze tool
                Object.keys(toolLogs).forEach(logId => {
                    const log = toolLogs[logId];
                    allLogs.clicks.push({
                        id: logId,
                        toolId: toolId,
                        userName: log.userName || 'Onbekend',
                        timestamp: log.timestamp || 0,
                        dateTime: log.dateTime || '',
                        type: 'clicks'
                    });
                });
            });
        }
        
        // Sorteer op timestamp (nieuwste eerst)
        allLogs.clicks.sort((a, b) => b.timestamp - a.timestamp);
        
    } catch (error) {
        console.error('Error loading click logs:', error);
    }
}

/**
 * Laad kuismachine logs
 */
async function loadKuismachineLogs(database, ref, get) {
    try {
        const logsRef = ref(database, 'logs/kuismachine-logs');
        const snapshot = await get(logsRef);
        
        allLogs.kuismachine = [];
        
        if (snapshot.exists()) {
            const logsData = snapshot.val();
            
            Object.keys(logsData).forEach(logId => {
                const log = logsData[logId];
                allLogs.kuismachine.push({
                    id: logId,
                    userName: log.userName || 'Onbekend',
                    timestamp: log.timestamp || 0,
                    dateTime: log.dateTime || '',
                    kuismachineGebruikt: log.kuismachineGebruikt || false,
                    kuismachinePisteA: log.kuismachinePisteA || false,
                    kuismachinePisteB: log.kuismachinePisteB || false,
                    kuismachineUitgekuist: log.kuismachineUitgekuist || false,
                    kuismachineBegintijd: log.kuismachineBegintijd || log.kuismachineStarttijd || '',
                    kuismachineEindtijd: log.kuismachineEindtijd || '',
                    kuismachineReden: log.kuismachineReden || '',
                    kuismachineNietGebruiktReden: log.kuismachineNietGebruiktReden || '',
                    stofzuigerGebruikt: log.stofzuigerGebruikt || false,
                    stofzuigerPisteA: log.stofzuigerPisteA || false,
                    stofzuigerPisteB: log.stofzuigerPisteB || false,
                    stofzuigerUitgekuist: log.stofzuigerUitgekuist || false,
                    stofzuigerBegintijd: log.stofzuigerBegintijd || log.stofzuigerStarttijd || '',
                    stofzuigerEindtijd: log.stofzuigerEindtijd || '',
                    stofzuigerReden: log.stofzuigerReden || '',
                    stofzuigerNietGebruiktReden: log.stofzuigerNietGebruiktReden || '',
                    updatedLater: log.updatedLater || false,
                    updatedTimestamp: log.updatedTimestamp || null,
                    updatedDateTime: log.updatedDateTime || '',
                    updatedBy: log.updatedBy || '',
                    type: 'kuismachine'
                });
            });
        }
        
        // Sorteer op timestamp (nieuwste eerst)
        allLogs.kuismachine.sort((a, b) => b.timestamp - a.timestamp);
        
    } catch (error) {
        console.error('Error loading kuismachine logs:', error);
        // Zorg dat we altijd een lege array hebben, zelfs bij error
        allLogs.kuismachine = [];
    }
}

/**
 * Laad kart daily checks
 */
async function loadKartDailyChecks(database, ref, get) {
    try {
        const logsRef = ref(database, 'logs/kart-daily-checks');
        const snapshot = await get(logsRef);
        
        allLogs.kartDaily = [];
        
        if (snapshot.exists()) {
            const logsData = snapshot.val();
            
            // Itereer door alle datums
            Object.keys(logsData).forEach(dateString => {
                const dateLogs = logsData[dateString];
                
                // Skip als dateLogs null of undefined is
                if (!dateLogs || typeof dateLogs !== 'object') {
                    return;
                }
                
                // Itereer door alle logs voor deze datum
                Object.keys(dateLogs).forEach(logId => {
                    const log = dateLogs[logId];
                    
                    // Tel aantal karts met problemen
                    let problemCount = 0;
                    const kartProblems = [];
                    
                    if (log.karts) {
                        Object.keys(log.karts).forEach(kartNum => {
                            const kart = log.karts[kartNum];
                            const hasProblem = kart.hasProblem === true || kart.hasProblem === 'true' || kart.hasProblem === 1;
                            if (hasProblem) {
                                problemCount++;
                                kartProblems.push({
                                    number: kartNum,
                                    reason: kart.reason || '',
                                    comments: kart.comments || ''
                                });
                            }
                        });
                    }
                    
                    allLogs.kartDaily.push({
                        id: logId,
                        userName: log.userName || 'Onbekend',
                        timestamp: log.timestamp || 0,
                        dateTime: log.dateTime || '',
                        dateString: dateString,
                        problemCount: problemCount,
                        kartProblems: kartProblems,
                        allKartsCleaned: log.allKartsCleaned === true || log.allKartsCleaned === 'true' || log.allKartsCleaned === 1,
                        generalComments: log.generalComments || '',
                        karts: log.karts || {},
                        type: 'kart-daily'
                    });
                });
            });
        }
        
        // Sorteer op timestamp (nieuwste eerst)
        allLogs.kartDaily.sort((a, b) => b.timestamp - a.timestamp);
        
    } catch (error) {
        console.error('Error loading kart daily checks:', error);
        // Zorg dat we altijd een lege array hebben, zelfs bij error
        allLogs.kartDaily = [];
    }
}

/**
 * Laad feedback
 */
async function loadFeedback(database, ref, get) {
    try {
        const feedbackRef = ref(database, 'feedback');
        const snapshot = await get(feedbackRef);
        
        allLogs.feedback = [];
        
        if (snapshot.exists()) {
            const feedbackData = snapshot.val();
            
            Object.keys(feedbackData).forEach(feedbackId => {
                const feedback = feedbackData[feedbackId];
                allLogs.feedback.push({
                    id: feedbackId,
                    userName: feedback.userName || 'Anoniem',
                    timestamp: feedback.timestamp || 0,
                    dateTime: feedback.dateTime || '',
                    type: feedback.type || 'other',
                    title: feedback.title || '',
                    description: feedback.description || '',
                    email: feedback.email || null,
                    userAgent: feedback.userAgent || '',
                    url: feedback.url || '',
                    feedbackType: 'feedback'
                });
            });
        }
        
        // Sorteer op timestamp (nieuwste eerst)
        allLogs.feedback.sort((a, b) => b.timestamp - a.timestamp);
        
    } catch (error) {
        console.error('Error loading feedback:', error);
        // Zorg dat we altijd een lege array hebben, zelfs bij error
        allLogs.feedback = [];
    }
}

/**
 * Vul gebruiker filter dropdown
 */
function populateUserFilter() {
    const userFilter = document.getElementById('user-filter');
    const users = new Set();
    
    // Verzamel alle unieke gebruikersnamen
    allLogs.clicks.forEach(log => users.add(log.userName));
    allLogs.kuismachine.forEach(log => users.add(log.userName));
    allLogs.kartDaily.forEach(log => users.add(log.userName));
    
    // Sorteer gebruikers
    const sortedUsers = Array.from(users).sort();
    
    // Voeg opties toe (behoud "Alle gebruikers")
    const currentValue = userFilter.value;
    userFilter.innerHTML = '<option value="">Alle gebruikers</option>';
    
    sortedUsers.forEach(user => {
        const option = document.createElement('option');
        option.value = user;
        option.textContent = user;
        userFilter.appendChild(option);
    });
    
    // Herstel vorige selectie
    if (currentValue) {
        userFilter.value = currentValue;
    }
}

/**
 * Pas filters toe
 */
function applyFilters() {
    const dateFrom = document.getElementById('date-from').value;
    const dateTo = document.getElementById('date-to').value;
    const userFilter = document.getElementById('user-filter').value;
    const typeFilter = document.getElementById('type-filter').value;
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    
    // Filter click logs
    filteredLogs.clicks = allLogs.clicks.filter(log => {
        if (typeFilter && typeFilter !== 'clicks') return false;
        if (userFilter && log.userName !== userFilter) return false;
        if (dateFrom && log.timestamp < new Date(dateFrom).getTime()) return false;
        if (dateTo && log.timestamp > new Date(dateTo).getTime() + 86400000) return false;
        if (searchInput) {
            const searchText = `${log.userName} ${log.toolId} ${log.dateTime}`.toLowerCase();
            if (!searchText.includes(searchInput)) return false;
        }
        return true;
    });
    
    // Filter kuismachine logs
    filteredLogs.kuismachine = allLogs.kuismachine.filter(log => {
        if (typeFilter && typeFilter !== 'kuismachine') return false;
        if (userFilter && log.userName !== userFilter) return false;
        if (dateFrom && log.timestamp < new Date(dateFrom).getTime()) return false;
        if (dateTo && log.timestamp > new Date(dateTo).getTime() + 86400000) return false;
        if (searchInput) {
            const searchText = `${log.userName} ${log.dateTime} ${log.kuismachineReden || ''} ${log.stofzuigerReden || ''}`.toLowerCase();
            if (!searchText.includes(searchInput)) return false;
        }
        return true;
    });
    
    // Filter kart daily checks
    filteredLogs.kartDaily = allLogs.kartDaily.filter(log => {
        if (typeFilter && typeFilter !== 'kart-daily') return false;
        if (userFilter && log.userName !== userFilter) return false;
        if (dateFrom && log.timestamp < new Date(dateFrom).getTime()) return false;
        if (dateTo && log.timestamp > new Date(dateTo).getTime() + 86400000) return false;
        if (searchInput) {
            const searchText = `${log.userName} ${log.dateTime} ${log.generalComments || ''}`.toLowerCase();
            if (!searchText.includes(searchInput)) return false;
        }
        return true;
    });
    
    // Filter feedback
    filteredLogs.feedback = allLogs.feedback.filter(log => {
        if (typeFilter && typeFilter !== 'feedback') return false;
        if (userFilter && log.userName !== userFilter) return false;
        if (dateFrom && log.timestamp < new Date(dateFrom).getTime()) return false;
        if (dateTo && log.timestamp > new Date(dateTo).getTime() + 86400000) return false;
        if (searchInput) {
            const searchText = `${log.userName} ${log.dateTime} ${log.title || ''} ${log.description || ''} ${log.type || ''}`.toLowerCase();
            if (!searchText.includes(searchInput)) return false;
        }
        return true;
    });
    
    // Render alleen de actieve tabel (performance optimalisatie)
    const activeTab = document.querySelector('.tab-content.active');
    if (activeTab) {
        const tabId = activeTab.id;
        if (tabId === 'tab-clicks') {
            renderClickLogsTable();
        } else if (tabId === 'tab-kuismachine') {
            renderKuismachineLogsTable();
        } else if (tabId === 'tab-kart-daily') {
            renderKartDailyChecksTable();
        } else if (tabId === 'tab-feedback') {
            renderFeedbackTable();
        }
    } else {
        // Fallback: render allemaal bij eerste load of als geen tab actief is
        renderClickLogsTable();
        renderKuismachineLogsTable();
        renderKartDailyChecksTable();
        renderFeedbackTable();
    }
    
    // Update statistieken
    calculateStats();
}

/**
 * Debounced search functie - wacht tot gebruiker stopt met typen
 */
function debouncedSearch() {
    if (searchDebounceTimer) {
        clearTimeout(searchDebounceTimer);
    }
    searchDebounceTimer = setTimeout(() => {
        applyFilters();
        searchDebounceTimer = null;
    }, SEARCH_DEBOUNCE_MS);
}

/**
 * Render click logs tabel
 */
function renderClickLogsTable() {
    const tbody = document.getElementById('clicks-table-body');
    
    if (filteredLogs.clicks.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" class="empty">Geen logs gevonden</td></tr>';
        return;
    }
    
    tbody.innerHTML = filteredLogs.clicks.map(log => {
        const date = new Date(log.timestamp);
        const dateStr = date.toLocaleString('nl-NL', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        return `
            <tr>
                <td>${escapeHtml(dateStr)}</td>
                <td>${escapeHtml(log.userName)}</td>
                <td>${escapeHtml(log.toolId)}</td>
            </tr>
        `;
    }).join('');
}

/**
 * Render kuismachine logs tabel
 */
function renderKuismachineLogsTable() {
    const tbody = document.getElementById('kuismachine-table-body');
    
    if (filteredLogs.kuismachine.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty">Geen logs gevonden</td></tr>';
        return;
    }
    
    tbody.innerHTML = filteredLogs.kuismachine.map((log, index) => {
        const date = new Date(log.timestamp);
        const dateStr = date.toLocaleString('nl-NL', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        return `
            <tr class="expandable-row" onclick="toggleKuismachineDetails(${index}, event)">
                <td>${escapeHtml(dateStr)}</td>
                <td>${escapeHtml(log.userName)}</td>
                <td>${log.kuismachineGebruikt ? '<span class="badge badge-yes">Ja</span>' : '<span class="badge badge-no">Nee</span>'}</td>
                <td>${log.stofzuigerGebruikt ? '<span class="badge badge-yes">Ja</span>' : '<span class="badge badge-no">Nee</span>'}</td>
                <td><button class="btn-secondary" onclick="event.stopPropagation(); toggleKuismachineDetails(${index}, event)">Details</button></td>
            </tr>
            <tr id="kuismachine-details-${index}" class="expanded-details-row" style="display: none;">
                <td colspan="5" class="expanded-details">
                    <h4>Kuismachine Log Details</h4>
                    <div class="expanded-details-content">
                        <div class="detail-item">
                            <div class="detail-label">Datum/Tijd</div>
                            <div class="detail-value">${escapeHtml(dateStr)}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Gebruiker</div>
                            <div class="detail-value">${escapeHtml(log.userName)}</div>
                        </div>
                        
                        ${log.kuismachineGebruikt ? `
                        <div class="detail-item" style="grid-column: 1 / -1;">
                            <div class="detail-label" style="font-weight: 600; font-size: 1.1rem; margin-top: 16px; margin-bottom: 8px; border-top: 2px solid #e0e0e0; padding-top: 16px;">🧹 Kuismachine</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Gebruikt</div>
                            <div class="detail-value"><span class="badge badge-yes">Ja</span></div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Pistes gekuist</div>
                            <div class="detail-value">${log.kuismachinePisteA && log.kuismachinePisteB ? 'A & B' : log.kuismachinePisteA ? 'A' : log.kuismachinePisteB ? 'B' : 'Geen'}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Begintijd</div>
                            <div class="detail-value">${escapeHtml(log.kuismachineBegintijd || '-')}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Eindtijd</div>
                            <div class="detail-value">${escapeHtml(log.kuismachineEindtijd || '-')}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Uitgekuist</div>
                            <div class="detail-value">
                                ${log.kuismachineUitgekuist ? '<span class="badge badge-yes">Ja</span>' : '<span class="badge badge-no">Nee</span>'}
                                ${log.updatedLater && log.kuismachineUitgekuist ? '<span class="badge" style="background: #fff3cd; color: #856404; margin-left: 8px;" title="Achteraf aangepast">✏️ Achteraf aangepast</span>' : ''}
                            </div>
                        </div>
                        ${log.updatedLater && log.kuismachineUitgekuist && log.updatedTimestamp ? `
                        <div class="detail-item" style="grid-column: 1 / -1;">
                            <div class="detail-label">Achteraf aangepast</div>
                            <div class="detail-value" style="color: #856404;">
                                <strong>✏️ Aangepast op:</strong> ${escapeHtml(new Date(log.updatedTimestamp).toLocaleString('nl-NL'))}
                                ${log.updatedBy ? ` | <strong>Door:</strong> ${escapeHtml(log.updatedBy)}` : ''}
                            </div>
                        </div>
                        ` : ''}
                        ${log.kuismachineReden ? `
                        <div class="detail-item" style="grid-column: 1 / -1;">
                            <div class="detail-label">Commentaar (niet uitgekuist)</div>
                            <div class="detail-value">${escapeHtml(log.kuismachineReden)}</div>
                        </div>
                        ` : ''}
                        ` : `
                        <div class="detail-item" style="grid-column: 1 / -1;">
                            <div class="detail-label" style="font-weight: 600; font-size: 1.1rem; margin-top: 16px; margin-bottom: 8px; border-top: 2px solid #e0e0e0; padding-top: 16px;">🧹 Kuismachine</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Gebruikt</div>
                            <div class="detail-value"><span class="badge badge-no">Nee</span></div>
                        </div>
                        ${log.kuismachineNietGebruiktReden ? `
                        <div class="detail-item" style="grid-column: 1 / -1;">
                            <div class="detail-label">Reden niet gebruikt</div>
                            <div class="detail-value">${escapeHtml(log.kuismachineNietGebruiktReden)}</div>
                        </div>
                        ` : ''}
                        `}
                        
                        ${log.stofzuigerGebruikt ? `
                        <div class="detail-item" style="grid-column: 1 / -1;">
                            <div class="detail-label" style="font-weight: 600; font-size: 1.1rem; margin-top: 16px; margin-bottom: 8px; border-top: 2px solid #e0e0e0; padding-top: 16px;">💨 Stofzuiger</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Gebruikt</div>
                            <div class="detail-value"><span class="badge badge-yes">Ja</span></div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Pistes gekuist</div>
                            <div class="detail-value">${log.stofzuigerPisteA && log.stofzuigerPisteB ? 'A & B' : log.stofzuigerPisteA ? 'A' : log.stofzuigerPisteB ? 'B' : 'Geen'}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Begintijd</div>
                            <div class="detail-value">${escapeHtml(log.stofzuigerBegintijd || '-')}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Eindtijd</div>
                            <div class="detail-value">${escapeHtml(log.stofzuigerEindtijd || '-')}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Uitgekuist</div>
                            <div class="detail-value">
                                ${log.stofzuigerUitgekuist ? '<span class="badge badge-yes">Ja</span>' : '<span class="badge badge-no">Nee</span>'}
                                ${log.updatedLater && log.stofzuigerUitgekuist ? '<span class="badge" style="background: #fff3cd; color: #856404; margin-left: 8px;" title="Achteraf aangepast">✏️ Achteraf aangepast</span>' : ''}
                            </div>
                        </div>
                        ${log.updatedLater && log.stofzuigerUitgekuist && log.updatedTimestamp ? `
                        <div class="detail-item" style="grid-column: 1 / -1;">
                            <div class="detail-label">Achteraf aangepast</div>
                            <div class="detail-value" style="color: #856404;">
                                <strong>✏️ Aangepast op:</strong> ${escapeHtml(new Date(log.updatedTimestamp).toLocaleString('nl-NL'))}
                                ${log.updatedBy ? ` | <strong>Door:</strong> ${escapeHtml(log.updatedBy)}` : ''}
                            </div>
                        </div>
                        ` : ''}
                        ${log.stofzuigerReden ? `
                        <div class="detail-item" style="grid-column: 1 / -1;">
                            <div class="detail-label">Commentaar (niet uitgekuist)</div>
                            <div class="detail-value">${escapeHtml(log.stofzuigerReden)}</div>
                        </div>
                        ` : ''}
                        ` : `
                        <div class="detail-item" style="grid-column: 1 / -1;">
                            <div class="detail-label" style="font-weight: 600; font-size: 1.1rem; margin-top: 16px; margin-bottom: 8px; border-top: 2px solid #e0e0e0; padding-top: 16px;">💨 Stofzuiger</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Gebruikt</div>
                            <div class="detail-value"><span class="badge badge-no">Nee</span></div>
                        </div>
                        ${log.stofzuigerNietGebruiktReden ? `
                        <div class="detail-item" style="grid-column: 1 / -1;">
                            <div class="detail-label">Reden niet gebruikt</div>
                            <div class="detail-value">${escapeHtml(log.stofzuigerNietGebruiktReden)}</div>
                        </div>
                        ` : ''}
                        `}
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

/**
 * Toggle kuismachine details
 */
function toggleKuismachineDetails(index, event) {
    if (event) {
        event.stopPropagation();
    }
    const detailsRow = document.getElementById(`kuismachine-details-${index}`);
    if (detailsRow) {
        detailsRow.style.display = detailsRow.style.display === 'none' ? 'table-row' : 'none';
    }
}

/**
 * Render kart daily checks tabel
 */
function renderKartDailyChecksTable() {
    const tbody = document.getElementById('kart-daily-table-body');
    
    if (filteredLogs.kartDaily.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty">Geen logs gevonden</td></tr>';
        return;
    }
    
    tbody.innerHTML = filteredLogs.kartDaily.map((log, index) => {
        const date = new Date(log.timestamp);
        const dateStr = date.toLocaleString('nl-NL', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        return `
            <tr class="expandable-row" onclick="toggleKartDetails(${index}, event)">
                <td>${escapeHtml(dateStr)}</td>
                <td>${escapeHtml(log.userName)}</td>
                <td>${log.problemCount > 0 ? `<span class="badge badge-problem">${log.problemCount}</span>` : '<span class="badge badge-yes">0</span>'}</td>
                <td>${log.allKartsCleaned ? '<span class="badge badge-yes">Ja</span>' : '<span class="badge badge-no">Nee</span>'}</td>
                <td><button class="btn-secondary" onclick="event.stopPropagation(); toggleKartDetails(${index}, event)">Details</button></td>
            </tr>
            <tr id="kart-details-${index}" class="expanded-details" style="display: none;">
                <td colspan="5">
                    <h4>Kart Daily Check Details</h4>
                    <div class="expanded-details-content">
                        <div class="detail-item">
                            <div class="detail-label">Datum</div>
                            <div class="detail-value">${escapeHtml(dateStr)}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Gebruiker</div>
                            <div class="detail-value">${escapeHtml(log.userName)}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Aantal problemen</div>
                            <div class="detail-value">${log.problemCount}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Alle karts gekuist</div>
                            <div class="detail-value">${log.allKartsCleaned ? 'Ja' : 'Nee'}</div>
                        </div>
                        ${log.generalComments ? `
                        <div class="detail-item">
                            <div class="detail-label">Algemene opmerkingen</div>
                            <div class="detail-value">${escapeHtml(log.generalComments)}</div>
                        </div>
                        ` : ''}
                        ${log.kartProblems.length > 0 ? `
                        <div class="detail-item" style="grid-column: 1 / -1;">
                            <div class="detail-label">Karts met problemen</div>
                            <div class="detail-value">
                                ${log.kartProblems.map(kart => `
                                    <div style="margin-bottom: 8px; padding: 8px; background: #fff3cd; border-radius: 4px;">
                                        <strong>Kart ${kart.number}:</strong> ${escapeHtml(kart.reason)}
                                        ${kart.comments ? `<br><em>${escapeHtml(kart.comments)}</em>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

/**
 * Toggle kart details
 */
function toggleKartDetails(index, event) {
    if (event) {
        event.stopPropagation();
    }
    const detailsRow = document.getElementById(`kart-details-${index}`);
    if (detailsRow) {
        detailsRow.style.display = detailsRow.style.display === 'none' ? 'table-row' : 'none';
    }
}

/**
 * Render feedback tabel
 */
function renderFeedbackTable() {
    const tbody = document.getElementById('feedback-table-body');
    if (!tbody) {
        console.error('Feedback table body niet gevonden');
        return;
    }
    
    if (filteredLogs.feedback.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty">Geen feedback gevonden</td></tr>';
        return;
    }
    
    tbody.innerHTML = filteredLogs.feedback.map((log, index) => {
        const date = new Date(log.timestamp);
        const dateStr = date.toLocaleString('nl-NL', { dateStyle: 'short', timeStyle: 'short' });
        
        const typeBadge = log.type === 'bug' ? 'badge-problem' : 
                         log.type === 'feature' ? 'badge-success' : 
                         log.type === 'improvement' ? 'badge-warning' : 'badge-info';
        const typeText = log.type === 'bug' ? 'Bug' : 
                        log.type === 'feature' ? 'Feature Request' : 
                        log.type === 'improvement' ? 'Verbetering' : 'Anders';
        
        return `
            <tr class="expandable-row" onclick="toggleFeedbackDetails(${index}, event)">
                <td>${escapeHtml(dateStr)}</td>
                <td><span class="badge ${typeBadge}">${escapeHtml(typeText)}</span></td>
                <td>${escapeHtml(log.title)}</td>
                <td>${escapeHtml(log.userName)}</td>
                <td><span class="toggle-arrow"></span></td>
            </tr>
            <tr id="feedback-details-${index}" class="expanded-details-row" style="display: none;">
                <td colspan="5" class="expanded-details">
                    <h4>Feedback Details</h4>
                    <div class="expanded-details-content">
                        <div class="detail-item">
                            <div class="detail-label">Beschrijving</div>
                            <div class="detail-value">${escapeHtml(log.description)}</div>
                        </div>
                        ${log.userAgent ? `
                        <div class="detail-item">
                            <div class="detail-label">User Agent</div>
                            <div class="detail-value">${escapeHtml(log.userAgent)}</div>
                        </div>` : ''}
                        ${log.url ? `
                        <div class="detail-item">
                            <div class="detail-label">Pagina URL</div>
                            <div class="detail-value">${escapeHtml(log.url)}</div>
                        </div>` : ''}
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

/**
 * Toggle feedback details
 */
function toggleFeedbackDetails(index, event) {
    if (event) {
        event.stopPropagation();
    }
    const detailsRow = document.getElementById(`feedback-details-${index}`);
    if (detailsRow) {
        detailsRow.style.display = detailsRow.style.display === 'none' ? 'table-row' : 'none';
    }
}

/**
 * Bereken statistieken
 */
function calculateStats() {
    const totalLogs = filteredLogs.clicks.length + filteredLogs.kuismachine.length + filteredLogs.kartDaily.length + filteredLogs.feedback.length;
    
    // Meest actieve gebruiker
    const userCounts = {};
    [...filteredLogs.clicks, ...filteredLogs.kuismachine, ...filteredLogs.kartDaily, ...filteredLogs.feedback].forEach(log => {
        userCounts[log.userName] = (userCounts[log.userName] || 0) + 1;
    });
    
    const mostActiveUser = Object.keys(userCounts).length > 0 
        ? Object.keys(userCounts).reduce((a, b) => userCounts[a] > userCounts[b] ? a : b)
        : 'Geen';
    
    // Update UI
    document.getElementById('stat-total').textContent = totalLogs;
    document.getElementById('stat-user').textContent = mostActiveUser || '-';
    document.getElementById('stat-clicks').textContent = filteredLogs.clicks.length;
    document.getElementById('stat-kuismachine').textContent = filteredLogs.kuismachine.length;
    document.getElementById('stat-kart-daily').textContent = filteredLogs.kartDaily.length;
    document.getElementById('stat-feedback').textContent = filteredLogs.feedback.length;
}

/**
 * Switch tab
 */
function switchTab(tabName, event) {
    // Update tab buttons
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Set active tab button
    if (event && event.target) {
        event.target.classList.add('active');
    } else {
        // Fallback: find button by text content
        document.querySelectorAll('.tab-button').forEach(btn => {
            if (btn.textContent.toLowerCase().includes(tabName.replace('-', ' '))) {
                btn.classList.add('active');
            }
        });
    }
    
    document.getElementById(`tab-${tabName}`).classList.add('active');
}

/**
 * Sorteer tabel
 */
function sortTable(tableId, columnIndex) {
    const table = document.getElementById(tableId);
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    // Skip loading/empty rows
    if (rows.length === 0 || rows[0].querySelector('.loading') || rows[0].querySelector('.empty')) {
        return;
    }
    
    const isAsc = currentSort.table === tableId && currentSort.column === columnIndex && currentSort.direction === 'asc';
    currentSort = {
        table: tableId,
        column: columnIndex,
        direction: isAsc ? 'desc' : 'asc'
    };
    
    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent.trim();
        const bText = b.cells[columnIndex].textContent.trim();
        
        // Probeer als datum te parsen
        const aDate = new Date(aText);
        const bDate = new Date(bText);
        
        if (!isNaN(aDate.getTime()) && !isNaN(bDate.getTime())) {
            return isAsc ? aDate - bDate : bDate - aDate;
        }
        
        // Anders alfabetisch
        return isAsc ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });
    
    // Update tabel
    rows.forEach(row => tbody.appendChild(row));
    
    // Update sort indicator
    table.querySelectorAll('th').forEach((th, index) => {
        if (index === columnIndex) {
            th.textContent = th.textContent.replace(' ↑↓', '') + (isAsc ? ' ↓' : ' ↑');
        } else {
            th.textContent = th.textContent.replace(/ [↑↓]/, '') + ' ↑↓';
        }
    });
}

/**
 * Export naar CSV
 */
function exportToCSV(data, filename) {
    if (data.length === 0) {
        alert('Geen data om te exporteren');
        return;
    }
    
    // Bepaal headers op basis van eerste item
    const headers = Object.keys(data[0]);
    
    // Maak CSV content
    let csv = headers.join(',') + '\n';
    
    data.forEach(item => {
        const row = headers.map(header => {
            const value = item[header];
            // Escape quotes en wrap in quotes als nodig
            if (value === null || value === undefined) return '';
            const stringValue = String(value).replace(/"/g, '""');
            return `"${stringValue}"`;
        });
        csv += row.join(',') + '\n';
    });
    
    // Download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Export alle logs
 */
function exportAllLogs() {
    const allData = [
        ...filteredLogs.clicks.map(log => ({
            Type: 'Click',
            Datum: new Date(log.timestamp).toLocaleString('nl-NL'),
            Gebruiker: log.userName,
            Tool: log.toolId
        })),
        ...filteredLogs.kuismachine.map(log => ({
            Type: 'Kuismachine',
            Datum: new Date(log.timestamp).toLocaleString('nl-NL'),
            Gebruiker: log.userName,
            'Kuismachine gebruikt': log.kuismachineGebruikt ? 'Ja' : 'Nee',
            'Pistes': [log.kuismachinePisteA ? 'A' : '', log.kuismachinePisteB ? 'B' : ''].filter(Boolean).join(', ') || '-',
            'Uitgekuist': log.kuismachineUitgekuist ? 'Ja' : 'Nee',
            'Stofzuiger gebruikt': log.stofzuigerGebruikt ? 'Ja' : 'Nee',
            'Stofzuiger pistes': [log.stofzuigerPisteA ? 'A' : '', log.stofzuigerPisteB ? 'B' : ''].filter(Boolean).join(', ') || '-',
            'Stofzuiger uitgekuist': log.stofzuigerUitgekuist ? 'Ja' : 'Nee',
            Reden: log.kuismachineReden || log.stofzuigerReden || ''
        })),
        ...filteredLogs.kartDaily.map(log => ({
            Type: 'Kart Daily',
            Datum: new Date(log.timestamp).toLocaleString('nl-NL'),
            Gebruiker: log.userName,
            'Aantal problemen': log.problemCount,
            'Alle karts gekuist': log.allKartsCleaned ? 'Ja' : 'Nee',
            'Algemene opmerkingen': log.generalComments || ''
        })),
        ...filteredLogs.feedback.map(feedback => ({
            Type: 'Feedback',
            Datum: new Date(feedback.timestamp).toLocaleString('nl-NL'),
            'Feedback Type': feedback.type === 'bug' ? 'Bug' : feedback.type === 'feature' ? 'Feature Request' : feedback.type === 'improvement' ? 'Verbetering' : 'Anders',
            Titel: feedback.title,
            Beschrijving: feedback.description,
            Gebruiker: feedback.userName,
            Email: feedback.email || ''
        }))
    ];
    
    exportToCSV(allData, `battlekart-logs-${new Date().toISOString().split('T')[0]}.csv`);
}

/**
 * Export click logs
 */
function exportClickLogs() {
    const data = filteredLogs.clicks.map(log => ({
        Datum: new Date(log.timestamp).toLocaleString('nl-NL'),
        Gebruiker: log.userName,
        Tool: log.toolId
    }));
    
    exportToCSV(data, `battlekart-clicks-${new Date().toISOString().split('T')[0]}.csv`);
}

/**
 * Export kuismachine logs
 */
function exportKuismachineLogs() {
    const data = filteredLogs.kuismachine.map(log => ({
        Datum: new Date(log.timestamp).toLocaleString('nl-NL'),
        Gebruiker: log.userName,
        'Kuismachine gebruikt': log.kuismachineGebruikt ? 'Ja' : 'Nee',
        'Piste A': log.kuismachinePisteA ? 'Ja' : 'Nee',
        'Piste B': log.kuismachinePisteB ? 'Ja' : 'Nee',
        'Uitgekuist': log.kuismachineUitgekuist ? 'Ja' : 'Nee',
        'Start tijd': log.kuismachineStarttijd || '',
        'Eind tijd': log.kuismachineEindtijd || '',
        Reden: log.kuismachineReden || '',
        'Stofzuiger gebruikt': log.stofzuigerGebruikt ? 'Ja' : 'Nee',
        'Stofzuiger Piste A': log.stofzuigerPisteA ? 'Ja' : 'Nee',
        'Stofzuiger Piste B': log.stofzuigerPisteB ? 'Ja' : 'Nee',
        'Stofzuiger uitgekuist': log.stofzuigerUitgekuist ? 'Ja' : 'Nee',
        'Stofzuiger start tijd': log.stofzuigerStarttijd || '',
        'Stofzuiger eind tijd': log.stofzuigerEindtijd || '',
        'Stofzuiger reden': log.stofzuigerReden || ''
    }));
    
    exportToCSV(data, `battlekart-kuismachine-${new Date().toISOString().split('T')[0]}.csv`);
}

/**
 * Export kart daily checks
 */
function exportKartDailyChecks() {
    const data = filteredLogs.kartDaily.map(log => ({
        Datum: new Date(log.timestamp).toLocaleString('nl-NL'),
        Gebruiker: log.userName,
        'Aantal problemen': log.problemCount,
        'Alle karts gekuist': log.allKartsCleaned ? 'Ja' : 'Nee',
        'Algemene opmerkingen': log.generalComments || '',
        'Karts met problemen': log.kartProblems.map(k => `Kart ${k.number}: ${k.reason}`).join('; ') || 'Geen'
    }));
    
    exportToCSV(data, `battlekart-kart-daily-${new Date().toISOString().split('T')[0]}.csv`);
}

/**
 * Export feedback
 */
function exportFeedback() {
    const data = filteredLogs.feedback.map(feedback => ({
        Datum: new Date(feedback.timestamp).toLocaleString('nl-NL'),
        Type: feedback.type === 'bug' ? 'Bug' : feedback.type === 'feature' ? 'Feature Request' : feedback.type === 'improvement' ? 'Verbetering' : 'Anders',
        Titel: feedback.title,
        Beschrijving: feedback.description,
        Gebruiker: feedback.userName,
        Email: feedback.email || '',
        URL: feedback.url || ''
    }));
    
    exportToCSV(data, `battlekart-feedback-${new Date().toISOString().split('T')[0]}.csv`);
}

/**
 * Setup Firebase real-time listeners voor incremental updates
 */
function setupFirebaseListeners() {
    if (!window.firebaseDatabase || !window.firebaseDatabaseFunctions) {
        console.log('Firebase niet beschikbaar, geen real-time sync');
        return;
    }

    const { ref, onValue } = window.firebaseDatabaseFunctions;
    const database = window.firebaseDatabase;

    try {
        // Track welke log IDs we al hebben gezien (voor duplicate detection)
        const seenLogIds = {
            clicks: new Set(allLogs.clicks.map(log => `${log.toolId}_${log.id}`)),
            kuismachine: new Set(allLogs.kuismachine.map(log => log.id)),
            kartDaily: new Set(allLogs.kartDaily.map(log => log.id)),
            feedback: new Set(allLogs.feedback.map(log => log.id))
        };

        // Listener voor nieuwe click logs - luister naar de hele logs tree
        const clicksRef = ref(database, 'logs');
        onValue(clicksRef, (snapshot) => {
            if (snapshot.exists()) {
                const logsData = snapshot.val();
                let hasNewLogs = false;

                Object.keys(logsData).forEach(toolId => {
                    // Skip kuismachine-logs en kart-daily-checks (hebben eigen listeners)
                    if (toolId === 'kuismachine-logs' || toolId === 'kart-daily-checks') {
                        return;
                    }

                    const toolLogs = logsData[toolId];
                    if (!toolLogs) return;

                    Object.keys(toolLogs).forEach(logId => {
                        const log = toolLogs[logId];
                        const logKey = `${toolId}_${logId}`;
                        
                        // Check of we deze log al hebben gezien
                        if (!seenLogIds.clicks.has(logKey)) {
                            const logTimestamp = log.timestamp || 0;
                            
                            allLogs.clicks.push({
                                id: logId,
                                toolId: toolId,
                                userName: log.userName || 'Onbekend',
                                timestamp: logTimestamp,
                                dateTime: log.dateTime || '',
                                type: 'clicks'
                            });
                            
                            seenLogIds.clicks.add(logKey);
                            hasNewLogs = true;
                        }
                    });
                });

                if (hasNewLogs) {
                    allLogs.clicks.sort((a, b) => b.timestamp - a.timestamp);
                    debouncedUpdate('clicks');
                }
            }
        }, (error) => {
            console.error('Error in clicks listener:', error);
        });

        // Listener voor nieuwe kuismachine logs
        const kuismachineRef = ref(database, 'logs/kuismachine-logs');
        onValue(kuismachineRef, (snapshot) => {
            if (snapshot.exists()) {
                const logsData = snapshot.val();
                let hasNewLogs = false;

                Object.keys(logsData).forEach(logId => {
                    if (!seenLogIds.kuismachine.has(logId)) {
                        const log = logsData[logId];
                        const logTimestamp = log.timestamp || 0;
                        
                        allLogs.kuismachine.push({
                            id: logId,
                            userName: log.userName || 'Onbekend',
                            timestamp: logTimestamp,
                            dateTime: log.dateTime || '',
                            kuismachineGebruikt: log.kuismachineGebruikt || false,
                            kuismachinePisteA: log.kuismachinePisteA || false,
                            kuismachinePisteB: log.kuismachinePisteB || false,
                            kuismachineUitgekuist: log.kuismachineUitgekuist || false,
                            kuismachineBegintijd: log.kuismachineBegintijd || log.kuismachineStarttijd || '',
                            kuismachineEindtijd: log.kuismachineEindtijd || '',
                            kuismachineReden: log.kuismachineReden || '',
                            kuismachineNietGebruiktReden: log.kuismachineNietGebruiktReden || '',
                            stofzuigerGebruikt: log.stofzuigerGebruikt || false,
                            stofzuigerPisteA: log.stofzuigerPisteA || false,
                            stofzuigerPisteB: log.stofzuigerPisteB || false,
                            stofzuigerUitgekuist: log.stofzuigerUitgekuist || false,
                            stofzuigerBegintijd: log.stofzuigerBegintijd || log.stofzuigerStarttijd || '',
                            stofzuigerEindtijd: log.stofzuigerEindtijd || '',
                            stofzuigerReden: log.stofzuigerReden || '',
                            stofzuigerNietGebruiktReden: log.stofzuigerNietGebruiktReden || '',
                            updatedLater: log.updatedLater || false,
                            updatedTimestamp: log.updatedTimestamp || null,
                            updatedDateTime: log.updatedDateTime || '',
                            updatedBy: log.updatedBy || '',
                            type: 'kuismachine'
                        });
                        
                        seenLogIds.kuismachine.add(logId);
                        hasNewLogs = true;
                    }
                });

                if (hasNewLogs) {
                    allLogs.kuismachine.sort((a, b) => b.timestamp - a.timestamp);
                    debouncedUpdate('kuismachine');
                }
            }
        }, (error) => {
            console.error('Error in kuismachine listener:', error);
        });

        // Listener voor nieuwe kart daily checks
        const kartDailyRef = ref(database, 'logs/kart-daily-checks');
        onValue(kartDailyRef, (snapshot) => {
            if (snapshot.exists()) {
                const logsData = snapshot.val();
                let hasNewLogs = false;

                Object.keys(logsData).forEach(dateString => {
                    const dateLogs = logsData[dateString];
                    if (!dateLogs) return;
                    
                    Object.keys(dateLogs).forEach(logId => {
                        if (!seenLogIds.kartDaily.has(logId)) {
                            const log = dateLogs[logId];
                            const logTimestamp = log.timestamp || 0;
                            
                            const karts = log.karts || {};
                            const kartProblems = Object.keys(karts)
                                .filter(kartNum => karts[kartNum] && karts[kartNum].hasProblem)
                                .map(kartNum => ({
                                    number: parseInt(kartNum),
                                    reason: karts[kartNum].reason || '',
                                    comments: karts[kartNum].comments || ''
                                }));

                            allLogs.kartDaily.push({
                                id: logId,
                                userName: log.userName || 'Onbekend',
                                timestamp: logTimestamp,
                                dateTime: log.dateTime || '',
                                dateString: dateString,
                                problemCount: kartProblems.length,
                                kartProblems: kartProblems,
                                allKartsCleaned: log.allKartsCleaned || false,
                                generalComments: log.generalComments || '',
                                type: 'kart-daily'
                            });
                            
                            seenLogIds.kartDaily.add(logId);
                            hasNewLogs = true;
                        }
                    });
                });

                if (hasNewLogs) {
                    allLogs.kartDaily.sort((a, b) => b.timestamp - a.timestamp);
                    debouncedUpdate('kart-daily');
                }
            }
        }, (error) => {
            console.error('Error in kart daily listener:', error);
        });

        // Listener voor nieuwe feedback
        const feedbackRef = ref(database, 'feedback');
        onValue(feedbackRef, (snapshot) => {
            if (snapshot.exists()) {
                const feedbackData = snapshot.val();
                let hasNewLogs = false;

                Object.keys(feedbackData).forEach(feedbackId => {
                    if (!seenLogIds.feedback.has(feedbackId)) {
                        const feedback = feedbackData[feedbackId];
                        const logTimestamp = feedback.timestamp || 0;
                        
                        allLogs.feedback.push({
                            id: feedbackId,
                            userName: feedback.userName || 'Anoniem',
                            timestamp: logTimestamp,
                            dateTime: feedback.dateTime || '',
                            type: feedback.type || 'other',
                            title: feedback.title || '',
                            description: feedback.description || '',
                            email: feedback.email || null,
                            userAgent: feedback.userAgent || '',
                            url: feedback.url || '',
                            feedbackType: 'feedback'
                        });
                        
                        seenLogIds.feedback.add(feedbackId);
                        hasNewLogs = true;
                    }
                });

                if (hasNewLogs) {
                    allLogs.feedback.sort((a, b) => b.timestamp - a.timestamp);
                    debouncedUpdate('feedback');
                }
            }
        }, (error) => {
            console.error('Error in feedback listener:', error);
        });

        console.log('Firebase real-time listeners voor logs pagina actief');
    } catch (error) {
        console.error('Error setting up Firebase listeners:', error);
    }
}

/**
 * Debounced update functie - wacht tot updates stoppen voordat UI wordt geüpdatet
 */
function debouncedUpdate(logType) {
    // Clear bestaande timer
    if (updateDebounceTimer) {
        clearTimeout(updateDebounceTimer);
    }

    // Set nieuwe timer
    updateDebounceTimer = setTimeout(() => {
        // Update alleen de relevante filters en tabellen
        populateUserFilter();
        applyFilters();
        calculateStats();
        updateDebounceTimer = null;
    }, UPDATE_DEBOUNCE_MS);
}

/**
 * Escape HTML
 */
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
