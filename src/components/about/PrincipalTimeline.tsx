import { ScrollReveal } from '@/components/shared/ScrollReveal'

const principals = [
  { name: 'Chief S.O. Oshatoba', tenure: '1982 – 1992', order: 1 },
  { name: 'Chief O.O. Omotosho', tenure: '1992 – 1996', order: 2 },
  { name: 'Mrs. S.O. Awobuluyi', tenure: '1996 – 2009', order: 3 },
  { name: 'Alhaji R.O. Alaja', tenure: '2010 – 2015', order: 4 },
  { name: 'Alhaja S.N. Jaiyeola', tenure: '2016 – 2019', order: 5 },
  { name: 'Alhaji T.N. Durojaiye', tenure: '2020 – Present', order: 6 },
]

export function PrincipalTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 -translate-x-1/2" />

      <div className="space-y-12">
        {principals.map((p, i) => (
          <ScrollReveal key={p.order} delay={i * 80} direction={i % 2 === 0 ? 'left' : 'right'}>
            <div className={`relative flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Dot on the timeline */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-purple-600 border-4 border-purple-100 -translate-x-1/2 z-10" />

              {/* Spacer for the timeline side on desktop */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content card */}
              <div className="ml-14 md:ml-0 md:w-1/2 bg-white rounded-xl p-6 border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                <span className="text-sm font-semibold text-gold-600">{p.tenure}</span>
                <h4 className="text-lg font-display font-bold text-uss-dark mt-1">{p.name}</h4>
                <span className="text-xs text-uss-muted">
                  {p.order === 6 ? 'Current Principal' : `${p.order}${getSuffix(p.order)} Principal`}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

function getSuffix(n: number): string {
  if (n === 1) return 'st'
  if (n === 2) return 'nd'
  if (n === 3) return 'rd'
  return 'th'
}
