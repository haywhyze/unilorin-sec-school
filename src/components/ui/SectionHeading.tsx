import { ScrollReveal } from '@/components/shared/ScrollReveal'

export function SectionHeading({
  label,
  title,
  description,
  centered = true,
  light = false,
}: {
  label?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}) {
  return (
    <ScrollReveal className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase mb-3">
          <span className="w-8 h-0.5 bg-gold-500 inline-block" />
          <span className={light ? 'text-gold-300' : 'text-purple-600'}>{label}</span>
          <span className="w-8 h-0.5 bg-gold-500 inline-block" />
        </span>
      )}
      <h2 className={`${light ? 'text-white' : 'text-uss-dark'} ${centered ? 'max-w-2xl mx-auto' : ''}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${
            light ? 'text-white/70' : 'text-uss-muted'
          }`}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  )
}
