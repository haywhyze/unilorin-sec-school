interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeading({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'}`}>
      {label && (
        <div
          className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}
        >
          <span className="h-px w-8 bg-gold-400" />
          <span
            className={`text-xs font-semibold tracking-[0.18em] uppercase ${
              light ? 'text-gold-300' : 'text-gold-600'
            }`}
          >
            {label}
          </span>
          {centered && <span className="h-px w-8 bg-gold-400" />}
        </div>
      )}
      <h2 className={light ? 'text-white' : ''}>{title}</h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? 'text-white/60' : 'text-text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
