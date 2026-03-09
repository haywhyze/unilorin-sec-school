import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export const metadata: Metadata = {
  title: 'Academics',
  description:
    'Explore our six academic departments — Sciences, Arts, Commercial, Technical, Languages, and Sports — preparing students for excellence.',
}

const departments = [
  {
    name: 'Sciences',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Agricultural Science', 'Computer Studies'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    color: 'bg-purple-100 text-purple-700 border-purple-200',
    accent: 'bg-purple-600',
  },
  {
    name: 'Arts',
    subjects: ['Literature in English', 'History', 'Government', 'Christian Religious Studies', 'Islamic Religious Studies', 'Fine Arts'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'bg-gold-100 text-gold-700 border-gold-200',
    accent: 'bg-gold-500',
  },
  {
    name: 'Commercial',
    subjects: ['Accounting', 'Commerce', 'Economics', 'Business Studies', 'Office Practice', 'Typing'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'bg-green-100 text-green-700 border-green-200',
    accent: 'bg-green-600',
  },
  {
    name: 'Technical',
    subjects: ['Technical Drawing', 'Woodwork', 'Metalwork', 'Basic Electronics', 'Basic Electricity', 'Auto Mechanics'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'bg-orange-100 text-orange-700 border-orange-200',
    accent: 'bg-orange-600',
  },
  {
    name: 'Languages',
    subjects: ['English Language', 'Yoruba', 'Arabic', 'French', 'Hausa', 'Igbo'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    color: 'bg-blue-100 text-blue-700 border-blue-200',
    accent: 'bg-blue-600',
  },
  {
    name: 'Sports & PE',
    subjects: ['Physical Education', 'Health Education', 'Athletics', 'Football', 'Basketball', 'Table Tennis'],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'bg-red-100 text-uss-red-600 border-red-200',
    accent: 'bg-uss-red-600',
  },
]

export default function AcademicsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0150-scaled.jpg')" }} />
        <div className="container-uss relative z-10">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-gold-400 mb-4">
            <span className="w-8 h-0.5 bg-gold-500 inline-block" /> Academics
          </span>
          <h1 className="text-white max-w-2xl">Building Minds, Shaping Futures</h1>
          <p className="text-white/70 text-lg mt-4 max-w-xl">Six comprehensive departments designed to develop well-rounded scholars.</p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-uss">
          <SectionHeading
            label="Departments"
            title="Academic Departments"
            description="Our curriculum spans a wide range of disciplines, ensuring every student finds their path to excellence."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, i) => (
              <ScrollReveal key={dept.name} delay={i * 80}>
                <div className={`group rounded-2xl border ${dept.color} p-8 hover:shadow-lg transition-all duration-300 h-full`}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${dept.color} flex items-center justify-center`}>
                      {dept.icon}
                    </div>
                    <h3 className="text-xl">{dept.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {dept.subjects.map((subject) => (
                      <li key={subject} className="flex items-center gap-2 text-uss-body text-sm">
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

      {/* Academic Standards */}
      <section className="py-20 md:py-28 bg-purple-50">
        <div className="container-uss">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <SectionHeading label="Standards" title="Our Academic Approach" centered={false} />
              <div className="space-y-4 text-uss-body leading-relaxed">
                <p>
                  At USS, we follow the Nigerian national curriculum enriched with supplementary
                  programmes designed to give our students an edge. Our teachers are highly
                  qualified and regularly undergo professional development.
                </p>
                <p>
                  Students sit for the West African Examinations Council (WAEC) and the National
                  Examinations Council (NECO) examinations, with our pass rates consistently
                  among the highest in Kwara State.
                </p>
                <p>
                  Beyond regular coursework, we offer preparatory classes for UTME, science
                  competitions, and inter-school debates to sharpen critical thinking and
                  problem-solving skills.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 border border-purple-100 text-center">
                  <div className="text-3xl font-display font-bold text-purple-700">100%</div>
                  <div className="text-sm text-uss-muted mt-1">WAEC Pass Rate</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-purple-100 text-center">
                  <div className="text-3xl font-display font-bold text-gold-600">6</div>
                  <div className="text-sm text-uss-muted mt-1">Departments</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-purple-100 text-center">
                  <div className="text-3xl font-display font-bold text-uss-red-600">42+</div>
                  <div className="text-sm text-uss-muted mt-1">Years Teaching</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-purple-100 text-center">
                  <div className="text-3xl font-display font-bold text-purple-700">JSS–SSS</div>
                  <div className="text-sm text-uss-muted mt-1">Full Programme</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
