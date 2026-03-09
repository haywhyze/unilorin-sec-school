import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

// Placeholder data — replaced by CMS data when available
const placeholderNews = [
  {
    title: 'USS Students Excel at National Science Olympiad',
    excerpt:
      'Our science department students brought home multiple awards at this year&apos;s National Science Olympiad, showcasing the depth of our STEM education.',
    category: 'Academics',
    date: '2024-11-15',
    slug: 'science-olympiad-2024',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0150-scaled.jpg',
  },
  {
    title: 'Annual Cultural Day Celebration',
    excerpt:
      'Students from all departments came together to celebrate Nigeria&apos;s rich cultural heritage through performances, food, and art exhibitions.',
    category: 'Events',
    date: '2024-10-20',
    slug: 'cultural-day-2024',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0263-scaled.jpg',
  },
  {
    title: '2025 Admission Process Now Open',
    excerpt:
      'Registration for the 2025/2026 academic session is now open. Visit our admissions page or the student portal to begin your application.',
    category: 'Announcements',
    date: '2024-09-01',
    slug: 'admissions-2025',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0142-scaled.jpg',
  },
]

const categoryColors: Record<string, string> = {
  Academics: 'bg-purple-100 text-purple-700',
  Events: 'bg-gold-100 text-gold-700',
  Announcements: 'bg-red-100 text-uss-red-600',
  news: 'bg-purple-100 text-purple-700',
  events: 'bg-gold-100 text-gold-700',
  announcements: 'bg-red-100 text-uss-red-600',
}

export function FeaturedNews({ news }: { news?: typeof placeholderNews }) {
  const articles = news && news.length > 0 ? news : placeholderNews

  return (
    <section className="py-20 md:py-28 bg-uss-light">
      <div className="container-uss">
        <SectionHeading
          label="Latest Updates"
          title="News & Events"
          description="Stay informed about the latest happenings at Unilorin Secondary School."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 100}>
              <Link
                href={`/news/${article.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-uss-border hover:shadow-xl hover:border-purple-200 transition-all duration-300 h-full"
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
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <time className="text-xs text-uss-muted">
                    {new Date(article.date).toLocaleDateString('en-NG', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <h3 className="text-lg mt-2 mb-3 group-hover:text-purple-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-uss-muted leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/news" className="btn btn-primary">
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
