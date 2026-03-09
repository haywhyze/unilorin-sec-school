import Image from 'next/image'

interface PageHeroProps {
  label: string
  title: string
  description?: string
  image?: string
}

const CLOUDINARY_BASE = 'https://res.cloudinary.com/haywhyze/image/upload/'

export function PageHero({ label, title, description, image }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 md:pb-24 overflow-hidden bg-purple-950">
      {/* Background image if provided */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image.startsWith('http') ? image : `${CLOUDINARY_BASE}${image}`}
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
      )}

      {/* Multi-stop overlay — not a flat gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(170deg, rgba(15,7,32,0.95) 0%, rgba(30,10,60,0.85) 50%, rgba(15,7,32,0.92) 100%)',
        }}
      />

      {/* Geometric accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ opacity: 0.05 }}>
        <div className="absolute top-[30%] left-0 w-[35%] h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <div className="absolute bottom-[20%] right-0 w-[25%] h-px bg-gradient-to-l from-transparent via-gold-400 to-transparent" />
      </div>

      {/* Gold corner frame */}
      <div className="absolute top-24 right-8 md:right-16 w-16 h-16 border-t border-r border-gold-500/20 rounded-tr-xl pointer-events-none" />
      <div className="absolute bottom-8 left-8 md:left-16 w-16 h-16 border-b border-l border-gold-500/20 rounded-bl-xl pointer-events-none" />

      <div className="container-uss relative z-10">
        <span className="inline-flex items-center gap-3 mb-5">
          <span className="w-10 h-px bg-gold-500" />
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-400">
            {label}
          </span>
        </span>
        <h1 className="text-white max-w-2xl">{title}</h1>
        {description && (
          <p className="text-white/55 text-lg mt-4 max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Bottom cream fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}
