import { JWT } from 'google-auth-library';
import fs from 'fs';
import path from 'path';

// Configure Google Sheets with service account key file
// Using your existing setup with key file

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '';
const SERVICE_ACCOUNT_KEY_FILE = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE || '';

// Read and parse the service account key file
function getServiceAccountCredentials() {
  try {
    const keyFile = fs.readFileSync(path.resolve(process.cwd(), SERVICE_ACCOUNT_KEY_FILE), 'utf8');
    return JSON.parse(keyFile);
  } catch (error) {
    throw new Error('Failed to read service account key file');
  }
}

// Get JWT token for Google Sheets API
async function getGoogleSheetsToken() {
  try {
    const credentials = getServiceAccountCredentials();
    const jwt = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const token = await jwt.authorize();
    return token.access_token;
  } catch (error) {
    console.error('Error getting Google Sheets token:', error);
    throw new Error('Failed to authenticate with Google Sheets');
  }
}

export async function appendToSheet(data: Record<string, any>) {
  const token = await getGoogleSheetsToken();

  // Prepare the row data
  const rowValues = [
    new Date().toISOString(),
    data.Industry || '',
    data.BusinessIdea || '',
    data.Email || '',
    data.BusinessName || '',
    data.Website || '',
    data.Country || '',
    data.ip || '',
    data.userAgent || ''
  ];

  // Check if sheet has headers by reading the first row
  const range = 'Sheet1!A1:I1';
  const checkUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}`;

  try {
    const checkResponse = await fetch(checkUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });

    const checkResult = await checkResponse.json();

    // If the first row is empty or doesn't exist, add headers
    if (!checkResult.values || checkResult.values.length === 0 || !checkResult.values[0] || checkResult.values[0].length === 0) {
      console.log('Sheet is empty or missing headers, adding headers...');

      // Add headers
      const headers = [
        ['Timestamp', 'Industry', 'Business Idea', 'Email', 'Business Name', 'Website', 'Country', 'IP Address', 'User Agent']
      ];

      const headerUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A1:I1?valueInputOption=USER_ENTERED`;

      await fetch(headerUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: headers
        })
      });
    }

    // Append the new row
    const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A:I:append?valueInputOption=USER_ENTERED`;

    const response = await fetch(appendUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [rowValues]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Google Sheets API error: ${errorData.error?.message || response.statusText}`);
    }

    const result = await response.json();
    return { success: true, updatedRange: result.updatedRange };

  } catch (error) {
    console.error('Error appending to sheet:', error);
    throw new Error('Failed to save data to Google Sheets');
  }
}