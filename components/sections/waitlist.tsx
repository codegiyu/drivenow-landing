'use client';

import { useState, type FormEvent } from 'react';

import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PageSection } from '@/components/ui/page-section';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SectionHeading } from '@/components/ui/section-heading';
import { Textarea } from '@/components/ui/textarea';
import { Reveal } from '@/components/ui/reveal';
import { SECTION_BG } from '@/lib/constants/media';

export function WaitlistSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [interest, setInterest] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!interest) {
      toast.error('Please tell us how you’re joining.', {
        description: 'Select whether you’re a learner, instructor, or partner.',
      });
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          interest,
          note: formData.get('note'),
        }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? 'Something went wrong.');
      }

      event.currentTarget.reset();
      setInterest('');
      toast.success('You’re on the waitlist.', {
        description: payload.message ?? 'We will keep you posted as pilot bookings open.',
      });
    } catch (error) {
      toast.error('Could not submit your request.', {
        description:
          error instanceof Error ? error.message : 'We could not submit your details right now.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <PageSection
      bgImage={SECTION_BG.waitlist}
      id="waitlist"
      containerClassName="grid justify-items-center gap-10">
      <div className="grid min-w-0 max-w-2xl gap-7 text-center">
        <Reveal>
          <SectionHeading
            caption="Waitlist"
            heading="Register before we launch."
            subtext="Join the list to hear about launch updates, early access, and upcoming onboarding for the marketplace."
          />
        </Reveal>

        <Reveal delay={120}>
          <Card className="w-full rounded-[28px] text-left">
            <CardContent className="p-6">
              <form className="grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-2.5">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" type="text" placeholder="Jane Smith" required />
                </div>
                <div className="grid gap-2.5">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2.5">
                  <Label>I&apos;m a...</Label>
                  <Select value={interest || undefined} onValueChange={setInterest}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="learner">Learner</SelectItem>
                      <SelectItem value="instructor">Instructor</SelectItem>
                      <SelectItem value="partner">Partner / supporter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2.5">
                  <Label htmlFor="note">Optional note</Label>
                  <Textarea
                    id="note"
                    name="note"
                    rows={4}
                    placeholder="Anything you'd like us to know..."
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} size="lg">
                  {isSubmitting ? 'Submitting...' : 'Join the waitlist'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </PageSection>
  );
}
