import type { WaitlistPayload } from '@/lib/airtable';

export async function createGoogleSheetsWaitlistRecord(payload: WaitlistPayload) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
  const requestId = crypto.randomUUID();

  if (!webhookUrl) {
    console.error('[waitlist][google-sheets] Missing webhook URL', { requestId });
    throw new Error('Google Sheets waitlist service is not configured with a webhook URL.');
  }

  if (!webhookSecret) {
    console.error('[waitlist][google-sheets] Missing webhook secret', { requestId });
    throw new Error('Google Sheets waitlist service is not configured with a webhook secret.');
  }

  console.info('[waitlist][google-sheets] Sending waitlist record', {
    requestId,
    interest: payload.interest,
    hasSecret: Boolean(webhookSecret),
  });

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(webhookSecret ? { Authorization: `Bearer ${webhookSecret}` } : {}),
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      interest: payload.interest,
      note: payload.note ?? '',
      source: 'drivenow-web',
      submittedAt: new Date().toISOString(),
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    const body = await response.text();
    console.error('[waitlist][google-sheets] Webhook request failed', {
      requestId,
      status: response.status,
      statusText: response.statusText,
      body,
    });
    throw new Error(body || 'Google Sheets rejected the waitlist request.');
  }

  const text = await response.text();

  if (!text) {
    console.info('[waitlist][google-sheets] Waitlist record saved', {
      requestId,
      status: response.status,
      responseType: 'empty-body',
    });
    return null;
  }

  let parsed: { ok?: boolean; message?: string } | null = null;

  try {
    parsed = JSON.parse(text) as { ok?: boolean; message?: string };
  } catch {
    console.info('[waitlist][google-sheets] Waitlist record saved', {
      requestId,
      status: response.status,
      responseType: 'non-json-body',
    });
    return { ok: true };
  }

  if (parsed.ok === false) {
    console.error('[waitlist][google-sheets] Webhook reported failure', {
      requestId,
      status: response.status,
      message: parsed.message ?? 'Unknown webhook error',
    });
    throw new Error(parsed.message ?? 'Google Sheets webhook reported failure.');
  }

  console.info('[waitlist][google-sheets] Waitlist record saved', {
    requestId,
    status: response.status,
    responseType: 'json-body',
  });

  return parsed;
}
