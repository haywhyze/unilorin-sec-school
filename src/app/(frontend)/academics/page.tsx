import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { PageHero } from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Academics',
  description:
    'Explore our six academic departments — Sciences, Arts, Commercial, Technical, Languages, and Sports — preparing students for excellence.',
}

const departments = [
  {
    name: 'Sciences',
    description:
      'Building the next generation of scientists and engineers through rigorous STEM education, hands-on laboratory work, and national science competitions.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Agricultural Science', 'Computer Studies'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    color: 'bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-300',
    iconBg: 'bg-purple-100 text-purple-700',
    accent: 'bg-purple-600',
  },
  {
    name: 'Arts',
    description:
      'Cultivating critical thinkers and expressive minds through literature, history, and the humanities, grounded in both local and global perspectives.',
    subjects: ['Literature in English', 'History', 'Government', 'Christian Religious Studies', 'Islamic Religious Studies', 'Fine Arts'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'bg-gold-50 text-gold-700 border-gold-200 hover:border-gold-300',
    iconBg: 'bg-gold-100 text-gold-700',
    accent: 'bg-gold-500',
  },
  {
    name: 'Commercial',
    description:
      'Developing business acumen and financial literacy, equipping students with practical knowledge for commerce and entrepreneurship.',
    subjects: ['Accounting', 'Commerce', 'Economics', 'Business Studies', 'Office Practice', 'Typing'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'bg-green-50 text-green-700 border-green-200 hover:border-green-300',
    iconBg: 'bg-green-100 text-green-700',
    accent: 'bg-green-600',
  },
  {
    name: 'Technical',
    description:
      'Empowering students with hands-on technical skills and craftsmanship, bridging the gap between theory and real-world application.',
    subjects: ['Technical Drawing', 'Woodwork', 'Metalwork', 'Basic Electronics', 'Basic Electricity', 'Auto Mechanics'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-300',
    iconBg: 'bg-orange-100 text-orange-700',
    accent: 'bg-orange-600',
  },
  {
    name: 'Languages',
    description:
      'Fostering multilingual proficiency and cultural understanding through the study of Nigerian and international languages.',
    subjects: ['English Language', 'Yoruba', 'Arabic', 'French', 'Hausa', 'Igbo'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    color: 'bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-300',
    iconBg: 'bg-blue-100 text-blue-700',
    accent: 'bg-blue-600',
  },
  {
    name: 'Sports & PE',
    description:
      'Promoting physical fitness, teamwork, and sportsmanship through competitive athletics and comprehensive physical education.',
    subjects: ['Physical Education', 'Health Education', 'Athletics', 'Football', 'Basketball', 'Table Tennis'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    color: 'bg-red-50 text-crimson-600 border-red-200 hover:border-red-300',
    iconBg: 'bg-red-100 text-crimson-600',
    accent: 'bg-crimson-600',
  },
]

const curriculumHighlights = [
  {
    title: 'National Curriculum Plus',
    description: 'We follow the Nigerian national curriculum enriched with supplementary programmes for a competitive edge.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'WAEC & NECO Excellence',
    description: 'Students sit for WAEC and NECO examinations with consistently outstanding pass rates across all departments.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'UTME Preparation',
    description: 'Dedicated preparatory classes for the Unified Tertiary Matriculation Examination with proven success rates.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Competitions & Debates',
    description: 'Regular participation in science olympiads, essay competitions, and inter-school debate tournaments.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
]

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        label="Academics"
        title="Building Minds, Shaping Futures"
        description="Six comprehensive departments designed to develop well-rounded scholars ready for the challenges of tomorrow."
      />

      {/* Departments Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-uss">
          <SectionHeading
            label="Departments"
            title="Academic Departments"
            description="Our curriculum spans a wide range of disciplines, ensuring every student finds their path to excellence."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, i) => (
              <ScrollReveal key={dept.name} delay={i * 80}>
                <div className={`group rounded-2xl border ${dept.color} p-8 hover:shadow-xl transition-all duration-300 h-full`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl ${dept.iconBg} flex items-center justify-center shrink-0`}>
                      {dept.icon}
                    </div>
                    <h3 className="text-xl text-text-heading">{dept.name}</h3>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed mb-5">
                    {dept.description}
                  </p>
                  <ul className="space-y-2">
                    {dept.subjects.map((subject) => (
                      <li key={subject} className="flex items-center gap-2.5 text-text-muted text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full ${dept.accent} shrink-0`} />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-24 md:py-32 bg-surface-alt">
        <div className="container-uss">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <SectionHeading
                label="Curriculum"
                title="Our Academic Approach"
                centered={false}
                description="At USS, we go beyond the standard curriculum to give our students a competitive edge in national examinations and university admissions."
              />
              <div className="space-y-5 text-text-muted leading-relaxed">
                <p>
                  Our teachers are highly qualified and regularly undergo professional
                  development to stay current with best practices in education. With a
                  student-to-teacher ratio that ensures personalised attention, every
                  learner receives the guidance they need to thrive.
                </p>
                <p>
                  The school&apos;s affiliation with the University of Ilorin provides
                  unique access to university-level resources, mentorship from academics,
                  and an intellectually stimulating environment.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid sm:grid-cols-2 gap-5">
                {curriculumHighlights.map((item, i) => (
                  <div
                    key={item.title}
                    className={`bg-white rounded-xl p-6 border border-border hover:shadow-md hover:border-purple-200 transition-all ${
                      i === 0 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <h4 className="font-display font-bold text-text-heading mb-2">{item.title}</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 noise-overlay relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent" />
        <div className="container-uss relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white">100%</div>
              <div className="text-white/60 text-sm mt-1">WAEC Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gold-400">6</div>
              <div className="text-white/60 text-sm mt-1">Departments</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white">42+</div>
              <div className="text-white/60 text-sm mt-1">Years Teaching</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gold-400">JSS-SSS</div>
              <div className="text-white/60 text-sm mt-1">Full Programme</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
