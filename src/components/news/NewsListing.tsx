'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export type NewsArticle = {
  title: string
  excerpt: string
  category: string
  publishedDate: string
  slug: string
  image: string
}

const categories = ['all', 'news', 'events', 'announcements'] as const

const categoryLabels: Record<string, string> = {
  all: 'All',
  news: 'News',
  events: 'Events',
  announcements: 'Announcements',
}

const categoryColors: Record<string, string> = {
  news: 'bg-purple-100 text-purple-700',
  events: 'bg-gold-100 text-gold-600',
  announcements: 'bg-crimson-100 text-crimson-500',
}

export function NewsListing({ articles }: { articles: NewsArticle[] }) {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filteredNews =
    activeFilter === 'all' ? articles : articles.filter((n) => n.category === activeFilter)

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-uss">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-purple-700 text-white shadow-lg shadow-purple-700/20'
                  : 'bg-purple-50 text-text-muted hover:bg-purple-100 hover:text-purple-700'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 60}>
              <Link
                href={`/news/${article.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-purple-200 transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${article.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      categoryColors[article.category] || 'bg-purple-100 text-purple-700'
                    }`}
                  >
                    {categoryLabels[article.category] || article.category}
                  </span>
                </div>
                {/* Content */}
                <div className="p-6">
                  <time className="text-xs text-text-muted font-medium">
                    {new Date(article.publishedDate).toLocaleDateString('en-NG', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <h3 className="text-lg mt-2 mb-3 text-text-heading group-hover:text-purple-700 transition-colors line-clamp-2 font-display font-bold">
                    {article.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-purple-700 text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all">
                    Read More
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
