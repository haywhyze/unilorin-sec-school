import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'Apply to Unilorin Secondary School — learn about our 5-step admission process, required documents, and how to enrol your child.',
}

const steps = [
  {
    number: 1,
    title: 'Obtain Application Form',
    description: 'Purchase the application form from the school administrative office or download it from the student portal.',
  },
  {
    number: 2,
    title: 'Complete Application',
    description: 'Fill out the application form with accurate information. Attach a recent passport photograph.',
  },
  {
    number: 3,
    title: 'Submit Required Documents',
    description: 'Submit the completed form along with all required documents to the admissions office.',
  },
  {
    number: 4,
    title: 'Entrance Examination',
    description: 'Attend the entrance examination on the scheduled date. The exam covers English, Mathematics, and General Knowledge.',
  },
  {
    number: 5,
    title: 'Admission Offer',
    description: 'Successful candidates will receive admission letters. Complete registration and fee payment to secure your place.',
  },
]

const documents = [
  'Birth Certificate or Age Declaration',
  'Primary School Leaving Certificate',
  'Recent Passport Photographs (4 copies)',
  'Report Cards from Previous School',
  'Local Government Identification',
  'Medical Fitness Certificate',
  'Parent/Guardian Identification',
]

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0142-scaled.jpg')" }} />
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="container-uss relative z-10">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-gold-400 mb-4">
            <span className="w-8 h-0.5 bg-gold-500 inline-block" /> Admissions
          </span>
          <h1 className="text-white max-w-2xl">Join the USS Family</h1>
          <p className="text-white/70 text-lg mt-4 max-w-xl">Begin your journey to academic excellence with our straightforward admission process.</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-uss">
          <SectionHeading
            label="How to Apply"
            title="Admission Process"
            description="Follow these five simple steps to join Unilorin Secondary School."
          />

          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 80}>
                <div className="flex gap-6 group">
                  {/* Step number */}
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-purple-700 text-white flex items-center justify-center font-display font-bold text-xl group-hover:bg-gold-500 group-hover:text-uss-dark transition-colors">
                      {step.number}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-lg mb-2">{step.title}</h3>
                    <p className="text-uss-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 md:py-28 bg-purple-50">
        <div className="container-uss">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <SectionHeading label="Requirements" title="Required Documents" centered={false} />
              <ul className="space-y-3">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-3 text-uss-body">
                    <svg className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {doc}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl p-8 border border-purple-100 shadow-sm">
                <h3 className="text-xl mb-4 text-purple-800">Ready to Apply?</h3>
                <p className="text-uss-muted leading-relaxed mb-6">
                  Visit our student portal to begin your online application, or come to the school
                  administrative office to collect a physical application form.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://portal.uss.sch.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary justify-center"
                  >
                    Apply via Portal
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                  <a href="/contact" className="btn btn-gold justify-center">
                    Contact Admissions Office
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
