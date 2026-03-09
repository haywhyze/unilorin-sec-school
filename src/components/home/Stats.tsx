import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const stats = [
  { value: 3000, suffix: '+', label: 'Students Enrolled' },
  { value: 42, suffix: '+', label: 'Years of Excellence' },
  { value: 6, suffix: '', label: 'Academic Departments' },
  { value: 100, suffix: '%', label: 'WAEC Success Rate' },
]

export function Stats() {
  return (
    <section className="relative -mt-1 bg-white pb-4">
      <div className="container-uss">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-purple-50 rounded-2xl p-8 md:p-10 border border-purple-100 shadow-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-purple-700 mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-uss-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
