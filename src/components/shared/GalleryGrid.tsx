'use client'

import { useState } from 'react'

type GalleryImage = {
  id: string
  title: string
  category: string
  image: string
  size: 'small' | 'medium' | 'large'
}

const categories = ['all', 'campus', 'academics', 'events', 'sports', 'culture']

const categoryLabels: Record<string, string> = {
  all: 'All',
  campus: 'Campus',
  academics: 'Academics',
  events: 'Events',
  sports: 'Sports',
  culture: 'Culture',
}

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  const filtered = filter === 'all' ? images : images.filter((img) => img.category === filter)

  return (
    <>
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? 'bg-purple-700 text-white shadow-md'
                : 'bg-purple-50 text-uss-muted hover:bg-purple-100 hover:text-purple-700'
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((img) => {
          const heightClass =
            img.size === 'large' ? 'h-80' : img.size === 'medium' ? 'h-64' : 'h-48'

          return (
            <button
              key={img.id}
              onClick={() => setLightbox(img)}
              className="group relative w-full overflow-hidden rounded-xl break-inside-avoid block"
            >
              <div
                className={`${heightClass} w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500`}
                style={{ backgroundImage: `url('${img.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-medium text-sm">{img.title}</p>
                <span className="text-white/60 text-xs capitalize">{img.category}</span>
              </div>
            </button>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-uss-muted">
          No images found in this category yet.
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-white font-display text-lg">{lightbox.title}</p>
              <span className="text-white/60 text-sm capitalize">{lightbox.category}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
