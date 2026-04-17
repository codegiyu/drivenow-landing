# DriveNow

DriveNow is a Next.js 16 landing page for an AI-assisted driving lesson marketplace. The site captures early interest through a waitlist form with provider-based integrations (Google Sheets by default, Airtable as an alternative) and is structured so it can grow into a larger multi-page marketing site later.

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
cp .env.example .env.local
```

3. Configure waitlist integration in `.env.local` (Google Sheets is the default).

4. Start the app:

```bash
npm run dev
```

## Waitlist provider setup

The waitlist form submits server-side through `app/api/waitlist/route.ts`, which forwards payloads via `lib/waitlist.ts`.

The provider is selected by `WAITLIST_PROVIDER`:

- `google_sheets` (default if omitted)
- `airtable`

### Required baseline environment variable

Add this to `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://your-live-domain.com
```

- `NEXT_PUBLIC_SITE_URL`: Used for reusable SEO metadata so canonical URLs can point to the real live site.

## Google Sheets setup (default)

The Google Sheets integration posts form submissions to your webhook endpoint through `lib/google-sheets.ts`.

### Required environment variables

Add these to `.env.local`:

```env
WAITLIST_PROVIDER=google_sheets
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/xxxxxxxxxxxxxxxx/exec
GOOGLE_SHEETS_WEBHOOK_SECRET=replace-with-random-secret
NEXT_PUBLIC_SITE_URL=https://your-live-domain.com
```

What each variable does:

- `WAITLIST_PROVIDER`: Chooses which backend receives waitlist submissions.
- `GOOGLE_SHEETS_WEBHOOK_URL`: Your deployed Google Apps Script Web App URL (or compatible webhook URL).
- `GOOGLE_SHEETS_WEBHOOK_SECRET`: Optional shared secret sent as `Authorization: Bearer <secret>`.

### Google Apps Script steps

1. Create a Google Sheet and name the first tab `Waitlist` (or use any tab name and update your script accordingly).
2. Open **Extensions > Apps Script**.
3. Add a script that accepts POST requests and appends rows (copy/paste example):

```javascript
const SPREADSHEET_ID = 'your-google-sheet-id';
const WAITLIST_SHEET_NAME = 'DriveNow Waitlist';
const EXPECTED_SECRET = 'replace-with-random-secret'; // Match GOOGLE_SHEETS_WEBHOOK_SECRET

function doPost(e) {
  try {
    const authHeader =
      (e && e.parameter && e.parameter.authorization) ||
      (e && e.headers && (e.headers.Authorization || e.headers.authorization)) ||
      '';

    if (EXPECTED_SECRET) {
      const expectedBearer = `Bearer ${EXPECTED_SECRET}`;
      if (authHeader !== expectedBearer) {
        return jsonResponse({ ok: false, message: 'Unauthorized' });
      }
    }

    const payload = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(WAITLIST_SHEET_NAME);

    if (!sheet) {
      return jsonResponse({ ok: false, message: `Sheet "${WAITLIST_SHEET_NAME}" not found` });
    }

    sheet.appendRow([
      payload.name || '',
      payload.email || '',
      payload.interest || '',
      payload.note || '',
      payload.source || '',
      payload.submittedAt || new Date().toISOString(),
    ]);

    return jsonResponse({ ok: true, message: 'Saved' });
  } catch (error) {
    return jsonResponse({ ok: false, message: error && error.message ? error.message : 'Invalid request' });
  }
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
```
Notes:

- **Headers are optional.** `appendRow([...])` writes into columns A, B, C, … in order. It does **not** look up columns by title. A completely empty sheet is fine—the first submission fills row 1, the next row 2, and so on. You can add a header row later in row 1 and still append below it, or rename the tab without changing column letters.
- Use the Google Sheet ID from your sheet URL: `https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit`.
- `openById(...)` works for both standalone and bound Apps Script projects.
- If nothing appears in the sheet but your app reports success, verify **`WAITLIST_SHEET_NAME` matches the tab name exactly** (including case), **`SPREADSHEET_ID`** is the file you have open, and you redeployed the Web App after editing the script.
- Apps Script web apps usually return HTTP 200 even for app-level errors, so check the JSON response body (`ok: true/false`) and Apps Script execution logs.

4. Deploy as a **Web app**:
   - Execute as: your account
   - Access: anyone with the link (or your preferred restriction)
5. Copy the deployed Web App URL into `GOOGLE_SHEETS_WEBHOOK_URL`.
6. If you use `GOOGLE_SHEETS_WEBHOOK_SECRET`, validate the bearer token in your Apps Script before writing to the sheet.

### Payload sent to your webhook

The API sends:

- `name`
- `email`
- `interest`
- `note`
- `source` (`drivenow-web`)
- `submittedAt` (ISO timestamp)

Your script should append these values into columns in the order you expect.

## Airtable setup (alternate provider)

The Airtable integration is still available through `lib/airtable.ts`.

### Required environment variables

Add these to `.env.local`:

```env
WAITLIST_PROVIDER=airtable
AIRTABLE_API_KEY=pat_xxxxxxxxxxxxxxxxx
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_ID=Waitlist
NEXT_PUBLIC_SITE_URL=https://your-live-domain.com
```

What each variable does:

- `AIRTABLE_API_KEY`: Airtable personal access token used by the server to create records.
- `AIRTABLE_BASE_ID`: The Airtable base that will store waitlist submissions.
- `AIRTABLE_TABLE_ID`: The target table name or table ID inside that base.
### How to create the Airtable base

1. Log into Airtable and create a new base for DriveNow.
2. Create a table for waitlist submissions.
3. Name the table `Waitlist`, or use any other name and place that exact name in `AIRTABLE_TABLE_ID`.
4. Add these fields exactly as written:

- `Name`
- `Email`
- `Interest`
- `Note`

The current server code writes to those exact field names, so the Airtable columns should match them precisely.

### Recommended field types

- `Name`: Single line text
- `Email`: Email
- `Interest`: Single select or single line text
- `Note`: Long text

### How to get the credentials

1. `AIRTABLE_API_KEY`

- In Airtable, create a personal access token.
- Grant it access to the target base.
- Make sure it has permission to create records in the waitlist table.

2. `AIRTABLE_BASE_ID`

- Open the Airtable base.
- Copy the base ID from the Airtable API docs or base settings. It usually starts with `app`.

3. `AIRTABLE_TABLE_ID`

- Use either:
- The exact table name, for example `Waitlist`
- Or the table ID from Airtable if you prefer

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run format
npm run format:check
```

## SEO structure

Reusable site-wide SEO values live in `lib/constants/texts.ts`.

This keeps the layout metadata clean now and makes it easier to add page-specific metadata later when the site becomes multi-page.
