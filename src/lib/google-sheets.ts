// Configure Google Sheets with environment variables
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '';

// Try API key first (simpler), fallback to service account if needed
const API_KEY = process.env.GOOGLE_SHEETS_API_KEY || '';
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '';
const SERVICE_ACCOUNT_PRIVATE_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || '';

// Get authentication token (API key or service account)
async function getGoogleSheetsToken() {
  // First try API key approach (simpler and works for publicly accessible sheets)
  if (API_KEY) {
    return API_KEY;
  }

  // Fallback to service account if API key not available
  if (SERVICE_ACCOUNT_EMAIL && SERVICE_ACCOUNT_PRIVATE_KEY) {
    console.log('Using service account authentication');
    return await getServiceAccountToken();
  }

  throw new Error('No Google Sheets authentication configured. Please set GOOGLE_SHEETS_API_KEY or service account credentials.');
}

// Service account JWT implementation for Edge Runtime
async function getServiceAccountToken(): Promise<string> {
  try {
    // Clean up the private key format
    const cleanPrivateKey = SERVICE_ACCOUNT_PRIVATE_KEY
      .replace(/-----BEGIN PRIVATE KEY-----/g, '')
      .replace(/-----END PRIVATE KEY-----/g, '')
      .replace(/\s/g, '')
      .replace(/\\n/g, '');

    // Create JWT header
    const header = {
      alg: 'RS256',
      typ: 'JWT'
    };

    // Create JWT payload
    const now = Math.floor(Date.now() / 1000);
    const payload = {
      iss: SERVICE_ACCOUNT_EMAIL,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600, // 1 hour expiration
      iat: now
    };

    // Helper function to base64url encode
    function base64urlEncode(str: string) {
      return btoa(str)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    }

    // Create JWT signature
    const encodedHeader = base64urlEncode(JSON.stringify(header));
    const encodedPayload = base64urlEncode(JSON.stringify(payload));
    const signatureInput = `${encodedHeader}.${encodedPayload}`;

    // Convert PEM private key to binary format for Web Crypto API
    const pemHeader = '-----BEGIN PRIVATE KEY-----';
    const pemFooter = '-----END PRIVATE KEY-----';

    // Remove headers, footers, and whitespace
    const pemContents = SERVICE_ACCOUNT_PRIVATE_KEY
      .replace(pemHeader, '')
      .replace(pemFooter, '')
      .replace(/\\n/g, '')
      .replace(/\s/g, '');

    // Decode base64 to get binary data
    let binaryDer;
    try {
      binaryDer = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));
    } catch (error) {
      console.error('Base64 decode error:', error);
      throw new Error('Failed to decode private key');
    }

    // Import the private key
    let privateKey;
    try {
      privateKey = await crypto.subtle.importKey(
        'pkcs8',
        binaryDer.buffer,
        {
          name: 'RSASSA-PKCS1-v1_5',
          hash: { name: 'SHA-256' },
        },
        false,
        ['sign']
      );
    } catch (error) {
      console.error('Key import error:', error);
      throw new Error('Failed to import private key');
    }

    // Sign the JWT
    const signature = await crypto.subtle.sign(
      'RSASSA-PKCS1-v1_5',
      privateKey,
      new TextEncoder().encode(signatureInput)
    );

    const encodedSignature = base64urlEncode(
      String.fromCharCode(...new Uint8Array(signature))
    );

    const jwt = `${signatureInput}.${encodedSignature}`;

    // Exchange JWT for access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt,
      }),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text();
      console.error('Token exchange error:', errorData);
      throw new Error(`Failed to get access token: ${errorData}`);
    }

    const tokenData = await tokenResponse.json();
    return tokenData.access_token;
  } catch (error) {
    console.error('Service account authentication error:', error);
    throw new Error('Failed to authenticate with service account');
  }
}

export async function appendToSheet(data: Record<string, any>) {
  const token = await getGoogleSheetsToken();

  // Check if using API key or service account token
  const isApiKey = API_KEY && token === API_KEY;

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
  const checkUrl = isApiKey
    ? `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${token}`
    : `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}`;

  try {
    const checkResponse = await fetch(checkUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(isApiKey ? {} : { 'Authorization': `Bearer ${token}` })
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

      const headerUrl = isApiKey
        ? `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A1:I1?valueInputOption=USER_ENTERED&key=${token}`
        : `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A1:I1?valueInputOption=USER_ENTERED`;

      await fetch(headerUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(isApiKey ? {} : { 'Authorization': `Bearer ${token}` })
        },
        body: JSON.stringify({
          values: headers
        })
      });
    }

    // Append the new row
    const appendUrl = isApiKey
      ? `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A:I:append?valueInputOption=USER_ENTERED&key=${token}`
      : `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A:I:append?valueInputOption=USER_ENTERED`;

    const response = await fetch(appendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(isApiKey ? {} : { 'Authorization': `Bearer ${token}` })
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