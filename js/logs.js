// Logs Dashboard JavaScript

// Authenticatie
const ADMIN_PASSWORD = 'battlekart2024';
const AUTH_STORAGE_KEY = 'logs_authenticated';

// Data storage
let allLogs = {
    clicks: [],
    kuismachine: [],
    kartDaily: []
};

let filteredLogs = {
    clicks: [],
    kuismachine: [],
    kartDaily: []
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

/**
 * Controleer authenticatie status
 */
function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    if (isAuthenticated) {
        showLogsContainer();
        loadAllLogs();
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
        // Laad click logs
        await loadClickLogs(database, ref, get);
        
        // Laad kuismachine logs
        await loadKuismachineLogs(database, ref, get);
        
        // Laad kart daily checks
        await loadKartDailyChecks(database, ref, get);
        
        // Update filters en render
        populateUserFilter();
        applyFilters();
        calculateStats();
        
    } catch (error) {
        console.error('Error loading logs:', error);
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
                    kuismachineStarttijd: log.kuismachineStarttijd || '',
                    kuismachineEindtijd: log.kuismachineEindtijd || '',
                    kuismachineReden: log.kuismachineReden || '',
                    stofzuigerGebruikt: log.stofzuigerGebruikt || false,
                    stofzuigerPisteA: log.stofzuigerPisteA || false,
                    stofzuigerPisteB: log.stofzuigerPisteB || false,
                    stofzuigerUitgekuist: log.stofzuigerUitgekuist || false,
                    stofzuigerStarttijd: log.stofzuigerStarttijd || '',
                    stofzuigerEindtijd: log.stofzuigerEindtijd || '',
                    stofzuigerReden: log.stofzuigerReden || '',
                    type: 'kuismachine'
                });
            });
        }
        
        // Sorteer op timestamp (nieuwste eerst)
        allLogs.kuismachine.sort((a, b) => b.timestamp - a.timestamp);
        
    } catch (error) {
        console.error('Error loading kuismachine logs:', error);
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
    
    // Render tabellen
    renderClickLogsTable();
    renderKuismachineLogsTable();
    renderKartDailyChecksTable();
    
    // Update statistieken
    calculateStats();
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
        tbody.innerHTML = '<tr><td colspan="7" class="empty">Geen logs gevonden</td></tr>';
        return;
    }
    
    tbody.innerHTML = filteredLogs.kuismachine.map(log => {
        const date = new Date(log.timestamp);
        const dateStr = date.toLocaleString('nl-NL', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const kuismachinePistes = [];
        if (log.kuismachinePisteA) kuismachinePistes.push('A');
        if (log.kuismachinePisteB) kuismachinePistes.push('B');
        
        const stofzuigerPistes = [];
        if (log.stofzuigerPisteA) stofzuigerPistes.push('A');
        if (log.stofzuigerPisteB) stofzuigerPistes.push('B');
        
        return `
            <tr>
                <td>${escapeHtml(dateStr)}</td>
                <td>${escapeHtml(log.userName)}</td>
                <td>${log.kuismachineGebruikt ? '<span class="badge badge-yes">Ja</span>' : '<span class="badge badge-no">Nee</span>'}</td>
                <td>${kuismachinePistes.length > 0 ? kuismachinePistes.join(', ') : '-'}</td>
                <td>${log.kuismachineUitgekuist ? '<span class="badge badge-yes">Ja</span>' : '<span class="badge badge-no">Nee</span>'}</td>
                <td>${log.stofzuigerGebruikt ? '<span class="badge badge-yes">Ja</span>' : '<span class="badge badge-no">Nee</span>'}</td>
                <td>${escapeHtml(log.kuismachineReden || log.stofzuigerReden || '-')}</td>
            </tr>
        `;
    }).join('');
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
 * Bereken statistieken
 */
function calculateStats() {
    const totalLogs = filteredLogs.clicks.length + filteredLogs.kuismachine.length + filteredLogs.kartDaily.length;
    
    // Meest actieve gebruiker
    const userCounts = {};
    [...filteredLogs.clicks, ...filteredLogs.kuismachine, ...filteredLogs.kartDaily].forEach(log => {
        userCounts[log.userName] = (userCounts[log.userName] || 0) + 1;
    });
    
    const mostActiveUser = Object.keys(userCounts).reduce((a, b) => 
        userCounts[a] > userCounts[b] ? a : b, 'Geen'
    );
    
    // Update UI
    document.getElementById('stat-total').textContent = totalLogs;
    document.getElementById('stat-user').textContent = mostActiveUser || '-';
    document.getElementById('stat-clicks').textContent = filteredLogs.clicks.length;
    document.getElementById('stat-kuismachine').textContent = filteredLogs.kuismachine.length;
    document.getElementById('stat-kart-daily').textContent = filteredLogs.kartDaily.length;
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
 * Escape HTML
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

