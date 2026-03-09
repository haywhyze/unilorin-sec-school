import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const CLOUDINARY_BASE = 'https://res.cloudinary.com/haywhyze/image/upload/'

const placeholderNews = [
  {
    title: 'USS Students Excel at National Science Olympiad',
    excerpt:
      'Our science department students brought home multiple awards at this year\'s National Science Olympiad, showcasing the depth of our STEM education.',
    category: 'Academics' as const,
    date: '2025-11-15',
    slug: 'science-olympiad-2025',
    image: `${CLOUDINARY_BASE}uss-media/event-1.jpg`,
  },
  {
    title: 'Annual Cultural Day Celebration',
    excerpt:
      'Students from all departments came together to celebrate Nigeria\'s rich cultural heritage through performances, food, and art exhibitions.',
    category: 'Events' as const,
    date: '2025-10-20',
    slug: 'cultural-day-2025',
    image: `${CLOUDINARY_BASE}uss-media/event-2.jpg`,
  },
  {
    title: '2026/2027 Admission Process Now Open',
    excerpt:
      'Registration for the 2026/2027 academic session is now open. Visit our admissions page or the student portal to begin your application.',
    category: 'Announcements' as const,
    date: '2025-09-01',
    slug: 'admissions-2026-2027',
    image: `${CLOUDINARY_BASE}uss-media/event-3.jpg`,
  },
]

const categoryColors: Record<string, { badge: string }> = {
  Academics: { badge: 'bg-purple-100 text-purple-700' },
  Events: { badge: 'bg-gold-100 text-gold-600' },
  Announcements: { badge: 'bg-crimson-100 text-crimson-500' },
}

export function FeaturedNews({ news }: { news?: { title: string; excerpt: string; category: string; date: string; slug: string; image: string }[] }) {
  const articles = news && news.length > 0 ? news : placeholderNews
  const [featured, ...rest] = articles

  return (
    <section className="py-20 md:py-28 bg-surface-alt">
      <div className="container-uss">
        <SectionHeading
          label="Latest Updates"
          title="News & Events"
          description="Stay informed about the latest happenings at Unilorin Secondary School."
        />

        {/* Magazine-style grid: first article spans 2 cols on desktop */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Featured (large) article */}
          <ScrollReveal delay={0}>
            <Link
              href={`/news/${featured.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
            >
              <div className="relative h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${featured.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                    categoryColors[featured.category]?.badge ?? 'bg-purple-100 text-purple-700'
                  }`}
                >
                  {featured.category}
                </span>
              </div>

              <div className="p-6">
                <time className="text-xs text-text-muted uppercase tracking-wide">
                  {new Date(featured.date).toLocaleDateString('en-NG', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
                <h3 className="text-xl font-display font-bold text-text-heading mt-2 mb-3 group-hover:text-purple-700 transition-colors line-clamp-2">
                  {featured.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-purple-700 group-hover:gap-2 transition-all duration-300">
                  Read More
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Remaining articles stacked in the second column */}
          <div className="flex flex-col gap-8">
            {rest.map((article, i) => (
              <ScrollReveal key={article.slug} delay={(i + 1) * 120}>
                <Link
                  href={`/news/${article.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${article.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                        categoryColors[article.category]?.badge ?? 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <time className="text-xs text-text-muted uppercase tracking-wide">
                      {new Date(article.date).toLocaleDateString('en-NG', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                    <h3 className="text-lg font-display font-bold text-text-heading mt-2 mb-3 group-hover:text-purple-700 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-purple-700 group-hover:gap-2 transition-all duration-300">
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
        </div>

        <div className="text-center mt-14">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-gold-600 hover:gap-3 transition-all duration-300 text-sm uppercase tracking-wide"
          >
            View All News
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
