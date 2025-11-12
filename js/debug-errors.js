/**
 * ============================================
 * EASTER EGG: FAKE ERROR MESSAGES - DEBUG MODE
 * Verwijder of comment dit bestand uit om te deactiveren
 * ============================================
 */

// Fake error messages voor dramatisch effect
const FAKE_ERROR_MESSAGES = [
    "CRITICAL ERROR: Database connection failed!",
    "SYSTEM ALERT: Memory overflow detected!",
    "WARNING: Unauthorized access attempt!",
    "ERROR 500: Internal server error!",
    "FATAL: Application crash imminent!",
    "SECURITY BREACH: Intrusion detected!",
    "ERROR: Failed to load critical resources!",
    "WARNING: System resources depleted!",
    "CRITICAL: Data corruption detected!",
    "ERROR: Network timeout exceeded!",
    "ALERT: Service unavailable!",
    "ERROR: Invalid authentication token!",
    "WARNING: Disk space critically low!",
    "FATAL ERROR: Application state corrupted!",
    "ERROR: External API connection lost!",
    "CRITICAL: Backup system failure!",
    "WARNING: High CPU usage detected!",
    "ERROR: Configuration file missing!",
    "ALERT: Multiple concurrent errors!",
    "FATAL: System shutdown initiated!"
];

let errorInterval = null;
let errorCount = 0;
const MAX_ERRORS = 50; // Maximum aantal errors in 30 seconden
const ERROR_DURATION = 30000; // 30 seconden

/**
 * Trigger fake error messages
 */
function triggerFakeErrors() {
    // Disable de knop tijdens de chaos
    const button = document.getElementById('debug-error-button');
    if (button) {
        button.disabled = true;
        button.textContent = '💥 CHAOS MODE!';
        button.classList.add('debug-error-active');
    }
    
    errorCount = 0;
    const startTime = Date.now();
    
    // Creëer eerste error direct
    createFakeError();
    
    // Creëer errors met willekeurige intervallen
    errorInterval = setInterval(() => {
        if (Date.now() - startTime >= ERROR_DURATION || errorCount >= MAX_ERRORS) {
            stopFakeErrors();
            return;
        }
        
        // Creëer 1-3 errors tegelijk voor meer chaos
        const numErrors = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < numErrors; i++) {
            setTimeout(() => createFakeError(), i * 100);
        }
    }, 200 + Math.random() * 400); // Willekeurige interval tussen 200-600ms
}

/**
 * Stop fake errors
 */
function stopFakeErrors() {
    if (errorInterval) {
        clearInterval(errorInterval);
        errorInterval = null;
    }
    
    const button = document.getElementById('debug-error-button');
    if (button) {
        button.disabled = false;
        button.textContent = '⚠️ DEBUG';
        button.classList.remove('debug-error-active');
    }
}

/**
 * Creëer een fake error pop-up
 */
function createFakeError() {
    if (errorCount >= MAX_ERRORS) {
        return;
    }
    
    errorCount++;
    
    // Selecteer willekeurige error message
    const message = FAKE_ERROR_MESSAGES[Math.floor(Math.random() * FAKE_ERROR_MESSAGES.length)];
    
    // Creëer error pop-up element
    const errorPopup = document.createElement('div');
    errorPopup.className = 'fake-error-popup';
    
    // Willekeurige positie op scherm
    const x = Math.random() * (window.innerWidth - 400);
    const y = Math.random() * (window.innerHeight - 200);
    
    errorPopup.style.left = x + 'px';
    errorPopup.style.top = y + 'px';
    
    // Willekeurige error type voor variatie
    const errorTypes = ['critical', 'warning', 'fatal', 'alert'];
    const errorType = errorTypes[Math.floor(Math.random() * errorTypes.length)];
    errorPopup.classList.add('fake-error-' + errorType);
    
    // Willekeurige animatie richting
    const directions = ['slide-in-left', 'slide-in-right', 'slide-in-top', 'slide-in-bottom', 'zoom-in', 'rotate-in'];
    const direction = directions[Math.floor(Math.random() * directions.length)];
    errorPopup.classList.add(direction);
    
    // Error content
    errorPopup.innerHTML = `
        <div class="fake-error-header">
            <span class="fake-error-icon">${getErrorIcon(errorType)}</span>
            <span class="fake-error-title">${errorType.toUpperCase()} ERROR</span>
            <button class="fake-error-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
        <div class="fake-error-body">
            <p>${message}</p>
            <div class="fake-error-details">
                <small>Error Code: ${Math.floor(Math.random() * 9999)}</small>
                <small>Timestamp: ${new Date().toLocaleTimeString()}</small>
            </div>
        </div>
        <div class="fake-error-footer">
            <button class="fake-error-btn" onclick="this.closest('.fake-error-popup').remove()">Dismiss</button>
            <button class="fake-error-btn fake-error-btn-primary" onclick="this.closest('.fake-error-popup').remove()">Ignore</button>
        </div>
    `;
    
    // Voeg toe aan body
    document.body.appendChild(errorPopup);
    
    // Forceer reflow om animatie te triggeren
    errorPopup.offsetHeight;
    
    // Zorg dat popup zichtbaar is
    errorPopup.style.display = 'block';
    errorPopup.style.visibility = 'visible';
    errorPopup.style.opacity = '1';
    
    // Shake effect na korte delay
    setTimeout(() => {
        errorPopup.classList.add('shake');
    }, 100);
    
    // Auto-remove na willekeurige tijd (3-8 seconden)
    const autoRemoveTime = 3000 + Math.random() * 5000;
    setTimeout(() => {
        if (errorPopup.parentElement) {
            errorPopup.classList.add('fade-out');
            setTimeout(() => {
                if (errorPopup.parentElement) {
                    errorPopup.remove();
                }
            }, 500);
        }
    }, autoRemoveTime);
}

/**
 * Get error icon based on type
 */
function getErrorIcon(type) {
    const icons = {
        'critical': '🔴',
        'warning': '⚠️',
        'fatal': '💀',
        'alert': '🚨'
    };
    return icons[type] || '❌';
}

