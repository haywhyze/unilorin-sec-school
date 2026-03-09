'use client'

import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const stats = [
  {
    value: null,
    display: '1982',
    label: 'Year Founded',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    value: 40,
    suffix: '+',
    label: 'Years of Excellence',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    value: 6,
    suffix: '',
    label: 'Academic Departments',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
      </svg>
    ),
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Proud Alumni',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

export function Stats() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-gold-50 via-cream to-gold-50 border-y border-gold-200/60 overflow-hidden">
      {/* Subtle diagonal accent */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(201,168,76,0.3) 60px, rgba(201,168,76,0.3) 61px)',
        }}
      />

      <div className="container-uss relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon circle */}
              <div className="w-11 h-11 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mb-3 group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300">
                {stat.icon}
              </div>

              <div className="text-3xl sm:text-4xl font-display font-bold text-purple-900 mb-1">
                {stat.value !== null ? (
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.display
                )}
              </div>
              <div className="text-sm text-text-muted font-medium">{stat.label}</div>

              {/* Gold underline accent */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
