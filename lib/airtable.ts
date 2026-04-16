type WaitlistPayload = {
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

  if (!baseId || !tableId || !apiKey) {
    throw new Error('Waitlist service is not configured.');
  }

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
    throw new Error(body || 'Airtable rejected the waitlist request.');
  }

  return response.json();
}
