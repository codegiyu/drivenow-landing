import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PageSection } from '@/components/ui/page-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { SectionIllustration } from '@/components/ui/section-illustration';
import { Reveal } from '@/components/ui/reveal';
import { SECTION_BG, SECTION_ILLUS } from '@/lib/constants/media';

const faqs = [
  {
    question: 'When is DriveNow launching?',
    answer:
      'We are preparing for a pilot-city launch, and early waitlist members will be the first to hear when bookings open.',
  },
  {
    question: 'Which city are you launching in first?',
    answer:
      'The current plan is to begin in a major UK city such as Manchester, Birmingham, or Leeds.',
  },
  {
    question: 'Are instructors verified?',
    answer:
      'Yes. DriveNow is built around verified DVSA-licensed instructors to help create more trust for learners.',
  },
  {
    question: 'How do payments work?',
    answer:
      'The wider product roadmap includes secure lesson payments through Stripe once booking functionality goes live.',
  },
  {
    question: 'How can I get access?',
    answer:
      'Join the waitlist to register your interest. We will notify early users as soon as pilot bookings open.',
  },
];

export function FaqSection() {
  return (
    <PageSection
      bgImage={SECTION_BG.faq}
      id="faq"
      containerClassName="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
      <div className="min-w-0">
        <Reveal>
          <SectionHeading caption="FAQs" heading="Answers for early users." />
        </Reveal>

        <Accordion type="single" collapsible className="mt-6 grid gap-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 80}>
              <AccordionItem value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>

      <div className="hidden lg:flex lg:justify-end">
        <SectionIllustration
          src={SECTION_ILLUS.faq}
          alt=""
          alwaysVisible
          className="max-w-[480px] lg:sticky lg:top-28"
        />
      </div>
    </PageSection>
  );
}
