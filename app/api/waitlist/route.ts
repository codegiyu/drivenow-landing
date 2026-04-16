import { NextResponse } from 'next/server';

import { createWaitlistRecord } from '@/lib/airtable';

type WaitlistRequest = {
  name?: string;
  email?: string;
  interest?: string;
  note?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WaitlistRequest;
    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const interest = body.interest?.trim();
    const note = body.note?.trim();

    if (!name || name.length < 2) {
      return NextResponse.json({ message: 'Please enter your full name.' }, { status: 400 });
    }

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!interest) {
      return NextResponse.json({ message: 'Please choose an interest type.' }, { status: 400 });
    }

    await createWaitlistRecord({ name, email, interest, note });

    return NextResponse.json({
      message: 'Thanks for joining. We will keep you posted.',
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : 'We could not save your request right now.',
      },
      { status: 500 }
    );
  }
}
