import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { PageSection } from '@/components/ui/page-section';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { SECTION_BG } from '@/lib/constants/media';

const comparisonRows = [
  {
    platform: 'Traditional schools',
    commission: '30–50%',
    payments: 'Cash / school',
    aiMatching: 'No',
    ukNative: 'Yes',
    highlight: false,
  },
  {
    platform: 'EzLicence',
    commission: '25% + fees',
    payments: 'In-app (credits)',
    aiMatching: 'No',
    ukNative: 'No (AU)',
    highlight: false,
  },
  {
    platform: 'CarLer',
    commission: '0% (no revenue)',
    payments: 'None',
    aiMatching: 'No',
    ukNative: 'Partial',
    highlight: false,
  },
  {
    platform: 'Aggregator directories',
    commission: 'Listing fee',
    payments: 'None',
    aiMatching: 'No',
    ukNative: 'Yes',
    highlight: false,
  },
  {
    platform: 'DriveNow',
    commission: '20% flat',
    payments: 'Stripe (real refunds)',
    aiMatching: 'Yes ✓ First in UK',
    ukNative: 'Yes ✓',
    highlight: true,
  },
];

export function ComparisonSection() {
  return (
    <PageSection id="comparison" bgImage={SECTION_BG.mvp}>
      <div className="grid gap-8">
        <Reveal>
          <SectionHeading
            caption="How we compare"
            heading={
              <>
                DriveNow wins on the
                <br />
                metrics that matter.
              </>
            }
          />
        </Reveal>

        <Reveal delay={100} className="lg:hidden">
          <div className="grid gap-3">
            {comparisonRows.map(row => (
              <Card
                key={row.platform}
                className={
                  row.highlight
                    ? 'rounded-[20px] border-primary/25 bg-primary/8'
                    : 'rounded-[20px] border-foreground/12'
                }>
                <CardContent className="grid gap-3 p-5">
                  <p
                    className={
                      row.highlight
                        ? 'font-heading text-lg font-semibold text-foreground'
                        : 'font-heading text-lg font-semibold text-foreground/90'
                    }>
                    {row.platform}
                  </p>
                  <dl className="grid gap-2.5">
                    <div className="flex items-start justify-between gap-4">
                      <dt className="text-xs font-semibold tracking-wide uppercase text-primary">
                        Commission
                      </dt>
                      <dd className="text-right text-sm text-muted-foreground">{row.commission}</dd>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <dt className="text-xs font-semibold tracking-wide uppercase text-primary">
                        Payments
                      </dt>
                      <dd className="text-right text-sm text-muted-foreground">{row.payments}</dd>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <dt className="text-xs font-semibold tracking-wide uppercase text-primary">
                        AI matching
                      </dt>
                      <dd className="text-right text-sm text-muted-foreground">{row.aiMatching}</dd>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <dt className="text-xs font-semibold tracking-wide uppercase text-primary">
                        UK-native
                      </dt>
                      <dd className="text-right text-sm text-muted-foreground">{row.ukNative}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="hidden lg:block">
          <Card className="overflow-hidden rounded-t-[12px] rounded-b-none">
            <CardContent className="p-0">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary">
                    <th className="px-5 py-4 text-left text-sm font-semibold tracking-wide uppercase text-primary-foreground">
                      Platform
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-semibold tracking-wide uppercase text-primary-foreground">
                      Commission
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-semibold tracking-wide uppercase text-primary-foreground">
                      Payments
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-semibold tracking-wide uppercase text-primary-foreground">
                      AI matching
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-semibold tracking-wide uppercase text-primary-foreground">
                      UK-native
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(row => (
                    <tr
                      key={row.platform}
                      className={
                        row.highlight
                          ? 'border-t border-primary/20 bg-primary/3'
                          : 'border-t border-foreground/8'
                      }>
                      <td
                        className={`px-5 py-4 text-base ${
                          row.highlight
                            ? 'font-heading text-base font-semibold text-foreground'
                            : 'text-foreground/90'
                        }`}>
                        {row.platform}
                      </td>
                      <td
                        className={`px-5 py-4 text-base ${
                          row.highlight ? 'text-primary font-medium' : 'text-muted-foreground'
                        }`}>
                        {row.commission}
                      </td>
                      <td
                        className={`px-5 py-4 text-base ${
                          row.highlight ? 'text-primary font-medium' : 'text-muted-foreground'
                        }`}>
                        {row.payments}
                      </td>
                      <td
                        className={`px-5 py-4 text-base ${
                          row.highlight ? 'text-primary font-medium' : 'text-muted-foreground'
                        }`}>
                        {row.aiMatching}
                      </td>
                      <td
                        className={`px-5 py-4 text-base ${
                          row.highlight ? 'text-primary font-medium' : 'text-muted-foreground'
                        }`}>
                        {row.ukNative}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal delay={180}>
            <Card className="h-full rounded-[24px]">
              <CardContent className="p-6">
                <CardTitle className="mb-3 text-primary text-lg sm:text-2xl">
                  vs EzLicence
                </CardTitle>
                <p className="text-base text-muted-foreground sm:text-lg text-pretty">
                  EzLicence charges 25% commission plus additional processing fees on top. DriveNow
                  takes a flat 20% — no hidden charges. On a £40 lesson, instructors keep £4 more
                  per hour. That is over £1,500 a year for a busy ADI. EzLicence also issues only
                  platform credits on cancellations — DriveNow processes real cash refunds via
                  Stripe.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={260}>
            <Card className="h-full rounded-[24px]">
              <CardContent className="p-6">
                <CardTitle className="mb-3 text-primary text-lg sm:text-2xl">vs CarLer</CardTitle>
                <p className="text-base text-muted-foreground sm:text-lg text-pretty">
                  CarLer is a free scheduling tool — it does not handle payments at all. Instructors
                  collect money from learners themselves, with no protection, no automation, and no
                  accountability. DriveNow&apos;s Stripe Connect infrastructure collects, splits,
                  and pays out automatically. That is the difference between a scheduling app and a
                  proper marketplace.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </PageSection>
  );
}
