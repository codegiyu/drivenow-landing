import { NextResponse } from 'next/server';

import { createWaitlistEntry } from '@/lib/waitlist';

type WaitlistRequest = {
  name?: string;
  email?: string;
  interest?: string;
  note?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();

  try {
    console.info('[waitlist][api] Incoming waitlist submission', { requestId });

    const body = (await request.json()) as WaitlistRequest;
    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const interest = body.interest?.trim();
    const note = body.note?.trim();

    if (!name || name.length < 2) {
      console.warn('[waitlist][api] Validation failed: invalid name', { requestId });
      return NextResponse.json({ message: 'Please enter your full name.' }, { status: 400 });
    }

    if (!email || !emailRegex.test(email)) {
      console.warn('[waitlist][api] Validation failed: invalid email', { requestId });
      return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!interest) {
      console.warn('[waitlist][api] Validation failed: missing interest', { requestId });
      return NextResponse.json({ message: 'Please choose an interest type.' }, { status: 400 });
    }

    console.info('[waitlist][api] Validation passed, creating waitlist entry', {
      requestId,
      interest,
    });

    await createWaitlistEntry({ name, email, interest, note });

    console.info('[waitlist][api] Waitlist submission completed', { requestId });

    return NextResponse.json({
      message: 'Thanks for joining. We will keep you posted.',
    });
  } catch (error) {
    console.error('[waitlist][api] Waitlist submission failed', {
      requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : 'We could not save your request right now.',
      },
      { status: 500 }
    );
  }
}
