'use client'

import { useState, useCallback, useEffect } from 'react'

export type GalleryImage = {
  src: string
  alt: string
  category: string
}

const defaultImages: GalleryImage[] = [
  {
    src: 'https://res.cloudinary.com/haywhyze/image/upload/uss-media/about-full.webp',
    alt: 'School campus full view',
    category: 'campus',
  },
  {
    src: 'https://res.cloudinary.com/haywhyze/image/upload/uss-media/event-1.jpg',
    alt: 'Students in academic session',
    category: 'academics',
  },
  {
    src: 'https://res.cloudinary.com/haywhyze/image/upload/uss-media/hero-1.webp',
    alt: 'Campus grounds and buildings',
    category: 'campus',
  },
  {
    src: 'https://res.cloudinary.com/haywhyze/image/upload/uss-media/event-2.jpg',
    alt: 'Cultural Day celebrations',
    category: 'culture',
  },
  {
    src: 'https://res.cloudinary.com/haywhyze/image/upload/uss-media/event-3.jpg',
    alt: 'Inter-house sports competition',
    category: 'sports',
  },
  {
    src: 'https://res.cloudinary.com/haywhyze/image/upload/uss-media/hero-2.webp',
    alt: 'Science laboratory practical',
    category: 'academics',
  },
  {
    src: 'https://res.cloudinary.com/haywhyze/image/upload/uss-media/event-4.jpg',
    alt: 'Annual prize giving ceremony',
    category: 'events',
  },
  {
    src: 'https://res.cloudinary.com/haywhyze/image/upload/uss-media/hero-3.jpeg',
    alt: 'Classroom learning session',
    category: 'academics',
  },
  {
    src: 'https://res.cloudinary.com/haywhyze/image/upload/uss-media/about-full.webp',
    alt: 'School assembly ground',
    category: 'campus',
  },
  {
    src: 'https://res.cloudinary.com/haywhyze/image/upload/uss-media/event-1.jpg',
    alt: 'Founder\'s Day celebration',
    category: 'events',
  },
  {
    src: 'https://res.cloudinary.com/haywhyze/image/upload/uss-media/event-3.jpg',
    alt: 'Athletics and track events',
    category: 'sports',
  },
  {
    src: 'https://res.cloudinary.com/haywhyze/image/upload/uss-media/event-2.jpg',
    alt: 'Traditional dance performances',
    category: 'culture',
  },
]

const categories = ['all', 'campus', 'academics', 'events', 'sports', 'culture']

const categoryLabels: Record<string, string> = {
  all: 'All Photos',
  campus: 'Campus',
  academics: 'Academics',
  events: 'Events',
  sports: 'Sports',
  culture: 'Culture',
}

// Deterministic height pattern for masonry visual variety
const heightPattern = ['h-64', 'h-80', 'h-56', 'h-72', 'h-60', 'h-80', 'h-52', 'h-68']

export function GalleryGrid({ images = defaultImages }: { images?: GalleryImage[] }) {
  const [filter, setFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    filter === 'all' ? images : images.filter((img) => img.category === filter)

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }, [])

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : 0,
    )
  }, [lightboxIndex, filtered.length])

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0,
    )
  }, [lightboxIndex, filtered.length])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, closeLightbox, goNext, goPrev])

  return (
    <>
      {/* Category filter buttons */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              filter === cat
                ? 'bg-purple-700 text-white shadow-lg'
                : 'bg-purple-50 text-text-muted hover:bg-purple-100 hover:text-purple-700'
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filtered.map((img, i) => {
          const heightClass = heightPattern[i % heightPattern.length]

          return (
            <button
              key={`${img.src}-${img.alt}-${filter}`}
              onClick={() => openLightbox(i)}
              className="group relative mb-5 block w-full cursor-pointer overflow-hidden rounded-xl break-inside-avoid border-0 bg-transparent p-0"
              style={{
                animation: `fadeInUp 0.5s ease ${i * 60}ms both`,
              }}
            >
              <div
                className={`${heightClass} w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110`}
                style={{ backgroundImage: `url('${img.src}')` }}
              />
              {/* Hover overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-900/20 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              {/* Gold corner accent */}
              <div
                className="absolute right-0 top-0 h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'linear-gradient(225deg, var(--color-gold-400, #d4a017) 0%, transparent 60%)',
                }}
              />
              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-base font-semibold text-white">
                  {img.alt}
                </p>
                <span
                  className="mt-1 inline-block rounded-full px-3 py-0.5 text-xs font-medium capitalize"
                  style={{
                    background: 'rgba(212, 160, 23, 0.2)',
                    color: 'var(--color-gold-300, #fbbf24)',
                    border: '1px solid rgba(212, 160, 23, 0.3)',
                  }}
                >
                  {img.category}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-50">
            <svg
              className="h-8 w-8 text-purple-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <p className="text-lg font-medium text-[var(--color-uss-muted)]">
            No images found in this category yet.
          </p>
        </div>
      )}

      {/* Lightbox modal */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-white/20 hover:text-white"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Previous button */}
          {filtered.length > 1 && (
            <button
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-white/20 hover:text-white md:left-6"
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              aria-label="Previous image"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
            />
            {/* Caption bar */}
            <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="font-display text-lg font-semibold text-white">
                {filtered[lightboxIndex].alt}
              </p>
              <div className="mt-1 flex items-center gap-3">
                <span className="text-sm capitalize text-white/60">
                  {filtered[lightboxIndex].category}
                </span>
                <span className="text-sm text-white/40">
                  {lightboxIndex + 1} / {filtered.length}
                </span>
              </div>
            </div>
          </div>

          {/* Next button */}
          {filtered.length > 1 && (
            <button
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-white/20 hover:text-white md:right-6"
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              aria-label="Next image"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  )
}
