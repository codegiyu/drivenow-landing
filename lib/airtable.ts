export type WaitlistPayload = {
  name: string;
  email: string;
  interest: string;
  note?: string;
};

const AIRTABLE_API_URL = 'https://api.airtable.com/v0';

export async function createWaitlistRecord(payload: WaitlistPayload) {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_TABLE_ID;
  const apiKey = process.env.AIRTABLE_API_KEY;
  const requestId = crypto.randomUUID();

  if (!baseId || !tableId || !apiKey) {
    console.error('[waitlist][airtable] Missing Airtable configuration', { requestId });
    throw new Error('Waitlist service is not configured.');
  }

  console.info('[waitlist][airtable] Sending waitlist record', {
    requestId,
    tableId,
    interest: payload.interest,
  });

  const response = await fetch(`${AIRTABLE_API_URL}/${baseId}/${encodeURIComponent(tableId)}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            Name: payload.name,
            Email: payload.email,
            Interest: payload.interest,
            Note: payload.note ?? '',
          },
        },
      ],
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    const body = await response.text();
    console.error('[waitlist][airtable] Airtable request failed', {
      requestId,
      status: response.status,
      statusText: response.statusText,
      body,
    });
    throw new Error(body || 'Airtable rejected the waitlist request.');
  }

  console.info('[waitlist][airtable] Waitlist record saved', {
    requestId,
    status: response.status,
  });

  return response.json();
}
