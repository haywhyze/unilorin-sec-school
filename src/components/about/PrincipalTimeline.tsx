'use client'

import { useEffect, useRef, useState } from 'react'

interface Principal {
  name: string
  tenure: string
  title: string
  bio: string
  order: number
}

const placeholderPrincipals: Principal[] = [
  {
    name: 'Late Chief S. O. Oshatoba',
    tenure: '1982\u20131992',
    title: 'Founding Principal',
    bio: 'Pioneered the establishment of Unilorin Secondary School as the founding principal. Under his dedicated leadership over a decade, he laid the academic and moral foundation that would define the institution, building it from the ground up into a respected centre of learning within the University of Ilorin community.',
    order: 1,
  },
  {
    name: 'Chief O. O. Omotosho',
    tenure: '1992\u20131996',
    title: '2nd Principal',
    bio: 'Consolidated the gains of the founding era and expanded the school\'s academic programmes. His tenure saw the introduction of new subjects and the strengthening of the school\'s reputation for discipline and academic rigour across Kwara State.',
    order: 2,
  },
  {
    name: 'Mrs. S. O. Awobuluyi',
    tenure: '1996\u20132009',
    title: '3rd Principal',
    bio: 'Served the longest tenure in the school\'s history, overseeing tremendous growth in student enrolment and infrastructure development. She championed staff welfare, enhanced the school\'s extracurricular programmes, and guided generations of students to academic success in national examinations.',
    order: 3,
  },
  {
    name: 'Alhaji R. O. Alaja',
    tenure: '2010\u20132015',
    title: '4th Principal',
    bio: 'Modernised the school\'s administrative processes and strengthened the institution\'s ties with the University of Ilorin. He prioritised infrastructural upgrades including new classroom blocks and laboratory facilities, and fostered a culture of excellence among both staff and students.',
    order: 4,
  },
  {
    name: 'Alhaja S. N. Jaiyeola',
    tenure: '2016\u20132019',
    title: '5th Principal',
    bio: 'Brought renewed focus on holistic student development, balancing academic achievement with character formation and moral instruction. Under her leadership, students excelled in inter-school competitions and the school maintained its standing as one of the premier secondary schools in Kwara State.',
    order: 5,
  },
  {
    name: 'Alhaji T. N. Durojaiye',
    tenure: '2020\u2013Present',
    title: 'Current Principal',
    bio: 'Continues to build on the school\'s proud legacy with a forward-looking vision encompassing STEM education, digital literacy, and 21st-century skills. Under his stewardship, the school is embracing innovative teaching methodologies while preserving the core values of discipline, integrity, and academic excellence.',
    order: 6,
  },
]

function TimelineCard({
  principal,
  index,
  isVisible,
  totalCount,
}: {
  principal: Principal
  index: number
  isVisible: boolean
  totalCount: number
}) {
  const isLeft = index % 2 === 0
  const isCurrent = principal.order === totalCount

  return (
    <div className="relative flex items-start">
      {/* Desktop: alternating left/right layout */}
      <div
        className={`hidden w-full items-start md:flex ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
      >
        {/* Card side */}
        <div className="w-[calc(50%-2rem)]">
          <div
            className={`rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-700 ease-out hover:shadow-lg ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : isLeft
                  ? '-translate-x-12 opacity-0'
                  : 'translate-x-12 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Gold tenure badge */}
            <span className="inline-block rounded-full bg-gold-100 px-4 py-1 text-xs font-bold tracking-wide text-gold-600">
              {principal.tenure}
            </span>

            {/* Person icon circle */}
            <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                  className="text-purple-400"
                  stroke="currentColor"
                />
                <circle cx="12" cy="7" r="4" className="text-purple-400" stroke="currentColor" />
              </svg>
            </div>

            <h4 className="mt-3 font-display text-xl font-bold">
              {principal.name}
            </h4>
            <p
              className={`mt-0.5 text-sm font-semibold ${
                isCurrent ? 'text-purple-600' : 'text-gold-600'
              }`}
            >
              {principal.title}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {principal.bio}
            </p>
          </div>
        </div>

        {/* Center spacer for the dot */}
        <div className="w-16 shrink-0" />

        {/* Empty side */}
        <div className="w-[calc(50%-2rem)]" />
      </div>

      {/* Mobile: single column layout */}
      <div className="flex w-full items-start md:hidden">
        <div className="ml-14 flex-1">
          <div
            className={`rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-700 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <span className="inline-block rounded-full bg-gold-100 px-3 py-0.5 text-xs font-bold tracking-wide text-gold-600">
              {principal.tenure}
            </span>

            {/* Mobile person icon */}
            <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <svg
                className="h-5 w-5 text-purple-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <h4 className="mt-2 font-display text-lg font-bold">
              {principal.name}
            </h4>
            <p
              className={`text-sm font-semibold ${
                isCurrent ? 'text-purple-600' : 'text-gold-600'
              }`}
            >
              {principal.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {principal.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Timeline dot — positioned on the line */}
      <div className="absolute left-6 top-6 z-10 -translate-x-1/2 md:left-1/2 md:top-8">
        {/* Outer glow ring */}
        <div
          className={`absolute -inset-2 rounded-full transition-all duration-700 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
          style={{
            background: isCurrent
              ? 'radial-gradient(circle, rgba(212, 160, 23, 0.25), transparent 70%)'
              : 'radial-gradient(circle, rgba(92, 36, 131, 0.15), transparent 70%)',
            transitionDelay: `${index * 100 + 200}ms`,
          }}
        />
        {/* Dot */}
        <div
          className={`relative h-5 w-5 rounded-full border-4 transition-all duration-500 ${
            isVisible ? 'scale-100' : 'scale-0'
          } ${
            isCurrent
              ? 'border-gold-100 bg-gold-500'
              : 'border-purple-100 bg-purple-600'
          }`}
          style={{
            boxShadow: isCurrent
              ? '0 0 12px rgba(212, 160, 23, 0.4)'
              : '0 0 8px rgba(92, 36, 131, 0.2)',
            transitionDelay: `${index * 100 + 100}ms`,
          }}
        />
      </div>
    </div>
  )
}

export function PrincipalTimeline({
  principals: principalsProp,
}: {
  principals?: Principal[]
}) {
  const principals =
    principalsProp && principalsProp.length > 0 ? principalsProp : placeholderPrincipals
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cards = container.querySelectorAll('[data-timeline-index]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.timelineIndex)
            setVisibleCards((prev) => new Set(prev).add(index))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical timeline line — left on mobile, center on desktop */}
      <div
        className="absolute bottom-0 left-6 top-0 w-0.5 -translate-x-1/2 md:left-1/2"
        style={{
          background:
            'linear-gradient(to bottom, var(--color-purple-200, #e9d5ff), var(--color-purple-400, #a855f7), var(--color-purple-200, #e9d5ff))',
        }}
      />

      {/* Timeline entries */}
      <div className="space-y-16">
        {principals.map((principal, index) => (
          <div key={principal.order} data-timeline-index={index}>
            <TimelineCard
              principal={principal}
              index={index}
              isVisible={visibleCards.has(index)}
              totalCount={principals.length}
            />
          </div>
        ))}
      </div>

      {/* Bottom cap */}
      <div className="absolute -bottom-3 left-6 -translate-x-1/2 md:left-1/2">
        <div
          className="h-3 w-3 rounded-full bg-gold-500"
          style={{
            boxShadow: '0 0 10px rgba(212, 160, 23, 0.3)',
          }}
        />
      </div>
    </div>
  )
}
