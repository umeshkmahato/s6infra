import { google } from 'googleapis';

type ContactEnquiryRow = {
  submittedAt: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  ipAddress: string;
  userAgent: string;
};

const GOOGLE_SHEETS_SCOPE = ['https://www.googleapis.com/auth/spreadsheets'];
const DEFAULT_SHEET_NAME = 'Enquiries';

const getSheetsConfig = () => {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME ?? DEFAULT_SHEET_NAME;

  if (!spreadsheetId || !clientEmail || !privateKey) {
    return null;
  }

  return {
    spreadsheetId,
    clientEmail,
    privateKey,
    sheetName,
  };
};

export async function appendContactEnquiryToSheet(row: ContactEnquiryRow) {
  const config = getSheetsConfig();

  if (!config) {
    console.warn('Google Sheets not configured - skipping storage');
    return {
      stored: false,
      reason: 'unconfigured' as const,
    };
  }

  try {
    const auth = new google.auth.JWT({
      email: config.clientEmail,
      key: config.privateKey,
      scopes: GOOGLE_SHEETS_SCOPE,
    });

    const sheets = google.sheets({
      version: 'v4',
      auth,
    });

    // Quote sheet name if it contains spaces
    const sheetNameQuoted = config.sheetName.includes(' ') ? `'${config.sheetName}'` : config.sheetName;
    const range = `${sheetNameQuoted}!A:H`;

    console.log(`Appending to Google Sheet: ${range}`);

    await sheets.spreadsheets.values.append({
      spreadsheetId: config.spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            row.submittedAt,
            row.name,
            row.email,
            row.phone,
            row.subject,
            row.message,
            row.ipAddress,
            row.userAgent,
          ],
        ],
      },
    });

    console.log('Successfully stored enquiry in Google Sheets');

    return {
      stored: true,
      reason: 'stored' as const,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Failed to append to Google Sheets:', errorMessage);
    
    return {
      stored: false,
      reason: 'error' as const,
    };
  }
}

