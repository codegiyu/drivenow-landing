import { createWaitlistRecord, type WaitlistPayload } from '@/lib/airtable';
import { createGoogleSheetsWaitlistRecord } from '@/lib/google-sheets';

const WAITLIST_PROVIDER_AIRTABLE = 'airtable';
const WAITLIST_PROVIDER_GOOGLE_SHEETS = 'google_sheets';

function getWaitlistProvider() {
  const provider = process.env.WAITLIST_PROVIDER?.trim().toLowerCase();

  if (!provider) {
    return WAITLIST_PROVIDER_AIRTABLE;
  }

  if (provider === WAITLIST_PROVIDER_GOOGLE_SHEETS || provider === WAITLIST_PROVIDER_AIRTABLE) {
    return provider;
  }

  throw new Error(
    `Unsupported waitlist provider "${provider}". Use "${WAITLIST_PROVIDER_GOOGLE_SHEETS}" or "${WAITLIST_PROVIDER_AIRTABLE}".`
  );
}

export async function createWaitlistEntry(payload: WaitlistPayload) {
  const provider = getWaitlistProvider();

  if (provider === WAITLIST_PROVIDER_AIRTABLE) {
    return createWaitlistRecord(payload);
  }

  if (provider === WAITLIST_PROVIDER_GOOGLE_SHEETS) {
    return createGoogleSheetsWaitlistRecord(payload);
  }

  throw new Error(
    `Unsupported waitlist provider "${provider}". Use "${WAITLIST_PROVIDER_AIRTABLE}" or "${WAITLIST_PROVIDER_GOOGLE_SHEETS}".`
  );
}
