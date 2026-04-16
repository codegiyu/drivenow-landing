# DriveNow

DriveNow is a Next.js 16 landing page for an AI-assisted driving lesson marketplace. The site captures early interest through an Airtable-backed waitlist form and is structured so it can grow into a larger multi-page marketing site later.

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
cp .env.example .env.local
```

3. Fill in the Airtable values in `.env.local`.

4. Start the app:

```bash
npm run dev
```

## Airtable setup

The waitlist form submits server-side through `app/api/waitlist/route.ts`, which forwards the payload to Airtable using `lib/airtable.ts`.

### Required environment variables

Add these to `.env.local`:

```env
AIRTABLE_API_KEY=pat_xxxxxxxxxxxxxxxxx
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_ID=Waitlist
NEXT_PUBLIC_SITE_URL=https://your-live-domain.com
```

What each variable does:

- `AIRTABLE_API_KEY`: Airtable personal access token used by the server to create records.
- `AIRTABLE_BASE_ID`: The Airtable base that will store waitlist submissions.
- `AIRTABLE_TABLE_ID`: The target table name or table ID inside that base.
- `NEXT_PUBLIC_SITE_URL`: Used for reusable SEO metadata so canonical URLs can point to the real live site.

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
