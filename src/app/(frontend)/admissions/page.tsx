import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { PageHero } from '@/components/ui/PageHero'
import { getPayload } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'Apply to Unilorin Secondary School — learn about our 5-step admission process, required documents, important dates, and how to enrol your child.',
}

const defaultSteps = [
  {
    number: 1,
    title: 'Obtain Application Form',
    description:
      'Purchase the application form from the school administrative office or download it from the student portal. The form costs a non-refundable fee.',
  },
  {
    number: 2,
    title: 'Complete Application',
    description:
      'Fill out the application form with accurate information. Attach a recent passport photograph and ensure all fields are completed legibly.',
  },
  {
    number: 3,
    title: 'Submit Required Documents',
    description:
      'Submit the completed form along with all required documents to the admissions office before the deadline. Late submissions will not be accepted.',
  },
  {
    number: 4,
    title: 'Entrance Examination',
    description:
      'Attend the entrance examination on the scheduled date. The exam covers English Language, Mathematics, and General Knowledge.',
  },
  {
    number: 5,
    title: 'Admission Offer & Registration',
    description:
      'Successful candidates receive admission letters. Complete registration and fee payment within two weeks to secure your place.',
  },
]

const defaultDocuments = [
  'Birth Certificate or Age Declaration',
  'Primary School Leaving Certificate',
  'Recent Passport Photographs (4 copies)',
  'Report Cards from Previous School',
  'Local Government Identification',
  'Medical Fitness Certificate',
  'Parent/Guardian Identification',
]

const importantDates = [
  {
    event: 'Application Form Sales Begin',
    date: 'January 15, 2026',
    status: 'upcoming' as const,
  },
  {
    event: 'Application Deadline',
    date: 'March 31, 2026',
    status: 'upcoming' as const,
  },
  {
    event: 'Entrance Examination',
    date: 'April 19, 2026',
    status: 'upcoming' as const,
  },
  {
    event: 'Results Announcement',
    date: 'May 10, 2026',
    status: 'upcoming' as const,
  },
  {
    event: 'Registration Deadline',
    date: 'June 15, 2026',
    status: 'upcoming' as const,
  },
  {
    event: 'Resumption of New Students',
    date: 'September 8, 2026',
    status: 'upcoming' as const,
  },
]

export default async function AdmissionsPage() {
  const payload = await getPayload()
  const settings = await payload.findGlobal({ slug: 'site-settings' }) as any

  const cmsSteps = settings?.admissionSteps?.length
    ? settings.admissionSteps.map((s: any) => ({
        number: s.stepNumber,
        title: s.title,
        description: s.description,
      }))
    : null

  const cmsDocuments = settings?.requiredDocuments?.length
    ? settings.requiredDocuments.map((d: any) => d.document)
    : null

  const steps: { number: number; title: string; description: string }[] = cmsSteps || defaultSteps
  const documents: string[] = cmsDocuments || defaultDocuments
  return (
    <>
      <PageHero
        label="Admissions"
        title="Join the USS Family"
        description="Begin your journey to academic excellence with our straightforward admission process."
      />

      {/* 5-Step Admission Process — Vertical Timeline */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-uss">
          <SectionHeading
            label="How to Apply"
            title="Admission Process"
            description="Follow these five steps to join Unilorin Secondary School."
          />

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical timeline line */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-purple-200 to-purple-100 hidden md:block" />

            <div className="space-y-10">
              {steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 100}>
                  <div className="flex gap-6 group relative">
                    {/* Step number circle */}
                    <div className="shrink-0 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-700 to-purple-800 text-white flex items-center justify-center font-display font-bold text-xl shadow-lg shadow-purple-700/20 group-hover:from-gold-500 group-hover:to-gold-400 group-hover:text-text-heading group-hover:shadow-gold-500/20 transition-all duration-300">
                        {step.number}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="pt-1 pb-2">
                      <h3 className="text-lg font-display font-bold text-text-heading mb-2 group-hover:text-purple-700 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents + Important Dates */}
      <section className="py-24 md:py-32 bg-surface-alt">
        <div className="container-uss">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Documents */}
            <ScrollReveal direction="left">
              <div>
                <SectionHeading label="Requirements" title="Required Documents" centered={false} />
                <div className="bg-white rounded-2xl p-8 border border-border">
                  <ul className="space-y-4">
                    {documents.map((doc) => (
                      <li key={doc} className="flex items-start gap-3 text-text-muted">
                        <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Important Dates */}
            <ScrollReveal direction="right">
              <div>
                <SectionHeading label="Calendar" title="Important Dates" centered={false} />
                <div className="bg-white rounded-2xl border border-border overflow-hidden">
                  {importantDates.map((item, i) => (
                    <div
                      key={item.event}
                      className={`flex items-center justify-between gap-4 px-8 py-5 ${
                        i !== importantDates.length - 1 ? 'border-b border-border' : ''
                      } hover:bg-purple-50/50 transition-colors`}
                    >
                      <div>
                        <p className="font-semibold text-text-heading text-sm">{item.event}</p>
                        <p className="text-text-muted text-sm mt-0.5">{item.date}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold shrink-0">
                        Upcoming
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA: Apply via Student Portal */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-uss">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-purple-950 p-12 md:p-16 grain">
              <div className="absolute inset-0" style={{ background: 'linear-gradient(170deg, rgba(15,7,32,0.95) 0%, rgba(30,10,60,0.9) 100%)' }} />
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold-500/8 blur-3xl" />

              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                  <span className="w-8 h-0.5 bg-gold-500 inline-block" />
                  <span className="text-gold-400">Ready to Apply?</span>
                  <span className="w-8 h-0.5 bg-gold-500 inline-block" />
                </span>

                <h2 className="text-white font-display font-bold text-3xl md:text-4xl leading-tight mb-4">
                  Start Your Application Today
                </h2>
                <p className="text-white/70 text-lg mb-10 leading-relaxed">
                  Visit our student portal to begin your online application, or come to
                  the school administrative office to collect a physical application form.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://portal.uss.sch.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                  >
                    Apply via Student Portal
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                  <a href="/contact" className="btn btn-outline">
                    Contact Admissions Office
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
