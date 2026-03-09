import type { Metadata } from 'next'
import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { PrincipalTimeline } from '@/components/about/PrincipalTimeline'
import { PageHero } from '@/components/ui/PageHero'
import { getPayload } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Unilorin Secondary School — our history, mission, values, and leadership since 1982.',
}

const CLOUDINARY_BASE = 'https://res.cloudinary.com/haywhyze/image/upload/'

function extractPlainText(richText: any): string {
  if (!richText || !richText.root || !richText.root.children) return ''
  const extractFromNode = (node: any): string => {
    if (node.text) return node.text
    if (node.children) return node.children.map(extractFromNode).join('')
    return ''
  }
  return richText.root.children.map(extractFromNode).join(' ')
}

const coreValues = [
  {
    title: 'Excellence',
    description:
      'We are dedicated to maintaining the highest standards in all areas of school life, nurturing students who lead with competence and confidence.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description:
      'Fostering a culture of ethical behaviour and mutual respect, encouraging students to be responsible, empathetic, and honest in all their dealings.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Compassion',
    description:
      'We encourage students to be responsible, empathetic, and creative thinkers who contribute positively to their communities and the world.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" />
      </svg>
    ),
  },
  {
    title: 'Collaboration',
    description:
      'We foster a sense of belonging and shared purpose, building strong bonds between students, staff, parents, and the broader university family.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
]

export default async function AboutPage() {
  const payload = await getPayload()
  const principalsResult = await payload.find({
    collection: 'principals',
    sort: 'order',
    limit: 20,
  })

  const principals = principalsResult.docs.map((doc: any) => ({
    name: doc.name,
    tenure: `${doc.tenureStart}\u2013${doc.tenureEnd || 'Present'}`,
    title: doc.title || '',
    bio: extractPlainText(doc.bio),
    order: doc.order,
  }))
  return (
    <>
      <PageHero
        label="About Us"
        title="Our Story of Excellence"
        description="A nurturing and empowering environment where students discover and develop their unique talents since 1982."
        image="uss-media/about-full.webp"
      />

      {/* History */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-uss">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionHeading
                  label="Our History"
                  title="A Legacy of Academic Excellence"
                  centered={false}
                />
                <div className="space-y-5 text-text-body leading-relaxed">
                  <p>
                    The University Council meeting of <strong className="text-text-heading">November 1981</strong> identified
                    the challenges university staff faced in obtaining secondary school admission for
                    their children in Kwara State government schools. The school was conceived as
                    &ldquo;a model, a centre of academic excellence for staff children, as well as for
                    children in its immediate environment.&rdquo;
                  </p>
                  <p>
                    The Kwara State Ministry of Education approved the school via letter{' '}
                    <strong className="text-text-heading">PLAN/GEN/9/T/93</strong> on June 21, 1982. The Vice Chancellor,
                    Late <strong className="text-text-heading">Professor Afolabi Toye</strong>, inaugurated the Governing Board
                    on May 17, 1982, headed by Professor M. O. Olofintoba, and the school officially
                    opened on <strong className="text-text-heading">October 7, 1982</strong>.
                  </p>
                  <p>
                    Over four decades, USS has grown from a modest beginning into one of the most
                    respected secondary schools in Kwara State and beyond. The school motto —
                    &ldquo;Hard work, Discipline and Progress&rdquo; — was submitted by the first head boy,
                    Kunle Oyeyemi, and continues to guide every student to this day.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-80 md:h-[28rem]">
                  <Image
                    src={`${CLOUDINARY_BASE}uss-media/about-full.webp`}
                    alt="Students at Unilorin Secondary School assembly"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/80 to-transparent p-6">
                  <p className="text-white font-display text-lg">
                    Students in their distinctive purple uniforms
                  </p>
                </div>
                {/* Gold accent corner */}
                <div className="absolute top-0 right-0 w-20 h-20">
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold-400 rounded-tr-xl" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 bg-surface-alt">
        <div className="container-uss">
          <SectionHeading
            label="Our Values"
            title="The Pillars That Guide Us"
            description="Excellence, integrity, respect, responsibility, compassion, innovation, and collaboration — these values shape every aspect of life at USS."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 border border-border text-center hover:shadow-lg hover:border-purple-200 transition-all duration-300 h-full group">
                  <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto mb-5 group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl mb-3 text-purple-800">{value.title}</h3>
                  <p className="text-text-muted leading-relaxed text-sm">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Aim */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-uss">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="bg-purple-950 rounded-2xl p-10 text-white h-full grain relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gold-500/10 blur-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <h3 className="text-2xl text-white mb-4 font-display font-bold">Our Mission</h3>
                  <p className="text-white/80 leading-relaxed">
                    To create a nurturing and challenging environment where students excel
                    academically and grow holistically. We are committed to fostering a love
                    of learning, promoting personal development, and instilling strong
                    community values — empowering students to become compassionate leaders
                    who will make a positive impact on the world.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-gradient-to-br from-gold-50 to-gold-100/50 rounded-2xl p-10 border border-gold-200 h-full relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-purple-200/20 blur-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-2xl mb-4 font-display font-bold text-text-heading">Our Aim</h3>
                  <p className="text-text-muted leading-relaxed">
                    To create a disciplined and caring educational environment where students
                    can achieve their full potential in academics, sports, and personal
                    development — producing well-rounded graduates who are global citizens
                    and agents of positive change.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Principal Timeline */}
      <section className="py-24 md:py-32 bg-surface-alt">
        <div className="container-uss">
          <SectionHeading
            label="Leadership"
            title="Our Principals Through the Years"
            description="USS has been led by distinguished educators who each contributed to the school's growth and reputation."
          />
          <PrincipalTimeline principals={principals.length > 0 ? principals : undefined} />
        </div>
      </section>
    </>
  )
}
