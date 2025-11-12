/**
 * Google Apps Script voor Battlekart Dashboard
 * 
 * Deze script leest data uit een Google Sheet en retourneert deze als JSON
 * voor gebruik in de dashboard frontend.
 */

// Vervang dit met de ID van je Google Sheet
// Je vindt de ID in de URL van je Google Sheet:
// https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
const SHEET_ID = 'YOUR_SHEET_ID_HERE';
const SHEET_NAME = 'Dashboard'; // Naam van het tabblad in de sheet

/**
 * HTTP GET handler - Retourneert dashboard data als JSON
 */
function doGet(e) {
    try {
        // Open de spreadsheet
        const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
        const sheet = spreadsheet.getSheetByName(SHEET_NAME);
        
        if (!sheet) {
            return createErrorResponse('Sheet niet gevonden: ' + SHEET_NAME);
        }
        
        // Haal alle data op (behalve header row)
        const data = sheet.getDataRange().getValues();
        
        if (data.length <= 1) {
            return createSuccessResponse([]);
        }
        
        // Skip header row (eerste rij)
        const headers = data[0];
        const rows = data.slice(1);
        
        // Map kolommen naar indices
        const columnMap = createColumnMap(headers);
        
        // Converteer rijen naar tool objecten
        const tools = rows.map(row => {
            return {
                id: getValue(row, columnMap, 'Tool ID'),
                title: getValue(row, columnMap, 'Tool Titel'),
                frequency: getValue(row, columnMap, 'Regelmaat'),
                lastUpdatedDate: getValue(row, columnMap, 'Laatste Invuldatum'),
                lastUpdatedTime: getValue(row, columnMap, 'Laatste Invultijd'),
                lastUpdatedBy: getValue(row, columnMap, 'Door Wie Ingevuld'),
                link: getValue(row, columnMap, 'Link')
            };
        }).filter(tool => tool.id && tool.title); // Filter lege rijen
        
        return createSuccessResponse(tools);
        
    } catch (error) {
        Logger.log('Error in doGet: ' + error.toString());
        return createErrorResponse('Fout bij het ophalen van data: ' + error.toString());
    }
}

/**
 * HTTP POST handler - Voor toekomstig gebruik (bijv. update laatste invuldatum)
 */
function doPost(e) {
    try {
        const postData = JSON.parse(e.postData.contents);
        const action = postData.action;
        
        if (action === 'update') {
            // Update laatste invuldatum voor een tool
            const toolId = postData.toolId;
            const date = postData.date;
            const time = postData.time;
            const user = postData.user;
            
            return updateToolLastUpdate(toolId, date, time, user);
        }
        
        return createErrorResponse('Onbekende actie: ' + action);
        
    } catch (error) {
        Logger.log('Error in doPost: ' + error.toString());
        return createErrorResponse('Fout bij verwerken van request: ' + error.toString());
    }
}

/**
 * Update laatste invuldatum voor een tool
 */
function updateToolLastUpdate(toolId, date, time, user) {
    try {
        const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
        const sheet = spreadsheet.getSheetByName(SHEET_NAME);
        
        if (!sheet) {
            return createErrorResponse('Sheet niet gevonden');
        }
        
        const data = sheet.getDataRange().getValues();
        const headers = data[0];
        const columnMap = createColumnMap(headers);
        
        // Zoek de rij met het juiste tool ID
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            const currentToolId = getValue(row, columnMap, 'Tool ID');
            
            if (currentToolId === toolId) {
                // Update de waarden
                if (columnMap['Laatste Invuldatum'] !== undefined) {
                    sheet.getRange(i + 1, columnMap['Laatste Invuldatum'] + 1).setValue(date);
                }
                if (columnMap['Laatste Invultijd'] !== undefined) {
                    sheet.getRange(i + 1, columnMap['Laatste Invultijd'] + 1).setValue(time);
                }
                if (columnMap['Door Wie Ingevuld'] !== undefined) {
                    sheet.getRange(i + 1, columnMap['Door Wie Ingevuld'] + 1).setValue(user);
                }
                
                return createSuccessResponse({ message: 'Updated successfully' });
            }
        }
        
        return createErrorResponse('Tool niet gevonden: ' + toolId);
        
    } catch (error) {
        Logger.log('Error updating tool: ' + error.toString());
        return createErrorResponse('Fout bij updaten: ' + error.toString());
    }
}

/**
 * Maak een map van kolomnamen naar indices
 */
function createColumnMap(headers) {
    const map = {};
    headers.forEach((header, index) => {
        if (header && header.toString().trim() !== '') {
            map[header.toString().trim()] = index;
        }
    });
    return map;
}

/**
 * Haal waarde op uit een rij op basis van kolomnaam
 */
function getValue(row, columnMap, columnName) {
    const index = columnMap[columnName];
    if (index !== undefined && row[index] !== undefined) {
        const value = row[index];
        // Converteer Date objecten naar string
        if (value instanceof Date) {
            return Utilities.formatDate(value, Session.getScriptTimeZone(), 'yyyy-MM-dd');
        }
        return value.toString().trim();
    }
    return '';
}

/**
 * Maak een succesvolle JSON response
 */
function createSuccessResponse(data) {
    return ContentService
        .createTextOutput(JSON.stringify({
            success: true,
            tools: data
        }))
        .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Maak een error JSON response
 */
function createErrorResponse(message) {
    return ContentService
        .createTextOutput(JSON.stringify({
            success: false,
            error: message
        }))
        .setMimeType(ContentService.MimeType.JSON);
}

