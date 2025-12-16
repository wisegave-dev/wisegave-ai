// Configure Google Sheets with API key (simpler approach for Edge Runtime)
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '';
const API_KEY = process.env.GOOGLE_SHEETS_API_KEY || '';

// Simple approach using API key for public sheets or OAuth2 for private sheets
async function getGoogleSheetsToken() {
  // For this implementation, we'll use API key approach
  // Note: This works if the spreadsheet is shared with "Anyone with the link"
  // For private sheets, you'd need to implement OAuth2 flow or use service account

  if (!API_KEY) {
    throw new Error('Google Sheets API key not found in environment variables');
  }

  return API_KEY;
}

export async function appendToSheet(data: Record<string, any>) {
  const apiKey = await getGoogleSheetsToken();

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
  const checkUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${apiKey}`;

  try {
    const checkResponse = await fetch(checkUrl, {
      method: 'GET',
      headers: {
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

      const headerUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A1:I1?valueInputOption=USER_ENTERED&key=${apiKey}`;

      await fetch(headerUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: headers
        })
      });
    }

    // Append the new row
    const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A:I:append?valueInputOption=USER_ENTERED&key=${apiKey}`;

    const response = await fetch(appendUrl, {
      method: 'POST',
      headers: {
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