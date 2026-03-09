import Link from 'next/link'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const cards = [
  {
    title: 'Academic Excellence',
    description:
      'Six comprehensive departments covering Sciences, Arts, Commercial, Technical, Languages, and Sports — preparing students for national and international examinations.',
    href: '/academics',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    color: 'purple',
  },
  {
    title: 'Admissions Open',
    description:
      'Join our community of driven learners. Our streamlined 5-step admission process makes it easy to begin your journey at USS.',
    href: '/admissions',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'gold',
  },
  {
    title: 'Campus Life',
    description:
      'A vibrant community on the University of Ilorin campus, offering students access to university-level facilities, sports, and cultural activities.',
    href: '/gallery',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'red',
  },
]

const colorMap = {
  purple: {
    bg: 'bg-purple-50',
    icon: 'bg-purple-100 text-purple-700',
    border: 'border-purple-100',
    hover: 'hover:border-purple-300 hover:shadow-purple-100/50',
    link: 'text-purple-700',
  },
  gold: {
    bg: 'bg-gold-50',
    icon: 'bg-gold-100 text-gold-700',
    border: 'border-gold-100',
    hover: 'hover:border-gold-300 hover:shadow-gold-100/50',
    link: 'text-gold-700',
  },
  red: {
    bg: 'bg-red-50',
    icon: 'bg-red-100 text-uss-red-600',
    border: 'border-red-100',
    hover: 'hover:border-red-300 hover:shadow-red-100/50',
    link: 'text-uss-red-600',
  },
}

export function QuickInfo() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-uss">
        <SectionHeading
          label="Discover USS"
          title="Excellence in Education Since 1982"
          description="Affiliated with the University of Ilorin, we combine academic rigour with character building to produce well-rounded graduates."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const colors = colorMap[card.color as keyof typeof colorMap]
            return (
              <ScrollReveal key={card.title} delay={i * 100}>
                <Link
                  href={card.href}
                  className={`group block p-8 rounded-2xl border ${colors.border} ${colors.hover} hover:shadow-xl transition-all duration-300 h-full`}
                >
                  <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-purple-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-uss-muted leading-relaxed mb-4">{card.description}</p>
                  <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${colors.link} group-hover:gap-3 transition-all`}>
                    Learn More
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
