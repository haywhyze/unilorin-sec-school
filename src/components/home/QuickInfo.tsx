import Link from 'next/link'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const cards = [
  {
    title: 'Academic Excellence',
    description:
      'Top-quality education helping students reach their full potential through rigorous academics, certified teachers, and a commitment to excellence.',
    href: '/academics',
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
      </svg>
    ),
  },
  {
    title: 'Parent Partnership',
    description:
      'Strong parent involvement and open communication channels ensure every child receives the support they need.',
    href: '/admissions',
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Student Resources',
    description:
      'Modern libraries, laboratories, technology facilities, and extracurricular programmes provide students with everything they need.',
    href: '/gallery',
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="9" y1="7" x2="16" y2="7" />
        <line x1="9" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
]

export function QuickInfo() {
  return (
    <section className="py-24 bg-cream">
      <div className="container-uss">
        <SectionHeading
          label="Discover USS"
          title="Excellence in Education Since 1982"
          description="A disciplined and caring educational environment where students achieve their full potential in academics, sports, and personal development."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 150}>
              <div className="gold-bar-top card-lift bg-white rounded-2xl border border-border p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-6">
                  {card.icon}
                </div>

                <h3 className="text-xl font-display font-bold text-text-heading mb-3">
                  {card.title}
                </h3>

                <p className="text-text-muted leading-relaxed mb-5 flex-1">
                  {card.description}
                </p>

                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-gold-600 hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
