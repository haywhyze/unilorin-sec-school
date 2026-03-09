import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { PrincipalTimeline } from '@/components/about/PrincipalTimeline'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Unilorin Secondary School — our history, mission, values, and leadership since 1982.',
}

const coreValues = [
  {
    title: 'Hardwork',
    description: 'We instil a strong work ethic that prepares students for the challenges of higher education and professional life.',
    icon: '💪',
  },
  {
    title: 'Discipline',
    description: 'Self-control, respect, and responsibility form the backbone of our educational philosophy.',
    icon: '🎯',
  },
  {
    title: 'Progress',
    description: 'Continuous improvement in academics, character, and community involvement drives everything we do.',
    icon: '🚀',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0263-scaled.jpg')" }} />
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="container-uss relative z-10">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-gold-400 mb-4">
            <span className="w-8 h-0.5 bg-gold-500 inline-block" /> About Us
          </span>
          <h1 className="text-white max-w-2xl">Our Story of Excellence</h1>
          <p className="text-white/70 text-lg mt-4 max-w-xl">Since 1982, nurturing leaders for Nigeria and beyond.</p>
        </div>
      </section>

      {/* History */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-uss">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionHeading label="Our History" title="A Legacy of Academic Excellence" centered={false} />
                <div className="space-y-4 text-uss-body leading-relaxed">
                  <p>
                    Unilorin Secondary School (USS) was established in 1982 as a co-educational institution
                    affiliated with the University of Ilorin. Located on the Mini Campus of the university
                    in Ilorin, Kwara State, Nigeria, the school was founded to provide quality secondary
                    education that combines academic rigour with character development.
                  </p>
                  <p>
                    Over four decades, USS has grown from a modest beginning into one of the most
                    respected secondary schools in Kwara State and beyond. Our students consistently
                    excel in WAEC, NECO, and other national examinations, gaining admission into
                    top universities across Nigeria and internationally.
                  </p>
                  <p>
                    The school benefits from its unique position within the university community,
                    giving students access to advanced facilities, mentorship from university
                    academics, and an environment that fosters intellectual curiosity.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div
                  className="h-80 md:h-96 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0263-scaled.jpg')" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/80 to-transparent p-6">
                  <p className="text-white font-display text-lg">Students in their distinctive purple uniforms</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-purple-50">
        <div className="container-uss">
          <SectionHeading
            label="Our Motto"
            title="Hardwork, Discipline and Progress"
            description="These three pillars guide every aspect of life at Unilorin Secondary School."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 border border-purple-100 text-center hover:shadow-lg hover:border-purple-200 transition-all h-full">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl mb-3 text-purple-800">{value.title}</h3>
                  <p className="text-uss-muted leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-uss">
          <SectionHeading
            label="Leadership"
            title="Our Principals Through the Years"
            description="USS has been led by distinguished educators who each contributed to the school's growth."
          />
          <PrincipalTimeline />
        </div>
      </section>
    </>
  )
}
