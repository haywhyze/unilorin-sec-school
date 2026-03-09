import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export const metadata: Metadata = {
  title: 'News & Events',
  description:
    'Stay up to date with the latest news, events, and announcements from Unilorin Secondary School.',
}

// Placeholder — will be replaced with CMS query
const allNews = [
  {
    title: 'USS Students Excel at National Science Olympiad',
    excerpt: 'Our science department students brought home multiple awards at this year\'s National Science Olympiad.',
    category: 'news',
    publishedDate: '2024-11-15',
    slug: 'science-olympiad-2024',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0150-scaled.jpg',
  },
  {
    title: 'Annual Cultural Day Celebration',
    excerpt: 'Students from all departments came together to celebrate Nigeria\'s rich cultural heritage.',
    category: 'events',
    publishedDate: '2024-10-20',
    slug: 'cultural-day-2024',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0263-scaled.jpg',
  },
  {
    title: '2025 Admission Process Now Open',
    excerpt: 'Registration for the 2025/2026 academic session is now open. Visit our admissions page to begin.',
    category: 'announcements',
    publishedDate: '2024-09-01',
    slug: 'admissions-2025',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0142-scaled.jpg',
  },
  {
    title: 'Inter-House Sports Competition Results',
    excerpt: 'Blue House emerged champions at this year\'s inter-house sports competition held at the university stadium.',
    category: 'events',
    publishedDate: '2024-08-15',
    slug: 'inter-house-sports-2024',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0150-scaled.jpg',
  },
  {
    title: 'PTA Meeting: Building a Stronger School Community',
    excerpt: 'The Parent-Teacher Association held its quarterly meeting to discuss plans for the upcoming academic session.',
    category: 'announcements',
    publishedDate: '2024-07-10',
    slug: 'pta-meeting-q3-2024',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0263-scaled.jpg',
  },
  {
    title: 'New Computer Lab Inaugurated',
    excerpt: 'A state-of-the-art computer laboratory has been inaugurated to enhance ICT education at USS.',
    category: 'news',
    publishedDate: '2024-06-01',
    slug: 'new-computer-lab-2024',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0142-scaled.jpg',
  },
]

const categoryColors: Record<string, string> = {
  news: 'bg-purple-100 text-purple-700',
  events: 'bg-gold-100 text-gold-700',
  announcements: 'bg-red-100 text-uss-red-600',
}

const categoryLabels: Record<string, string> = {
  news: 'News',
  events: 'Events',
  announcements: 'Announcements',
}

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 overflow-hidden">
        <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="container-uss relative z-10">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-gold-400 mb-4">
            <span className="w-8 h-0.5 bg-gold-500 inline-block" /> News & Events
          </span>
          <h1 className="text-white max-w-2xl">Latest Updates</h1>
          <p className="text-white/70 text-lg mt-4 max-w-xl">Stay informed about everything happening at USS.</p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-uss">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 60}>
                <Link
                  href={`/news/${article.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-uss-border hover:shadow-xl hover:border-purple-200 transition-all duration-300 h-full"
                >
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
                  <div className="p-6">
                    <time className="text-xs text-uss-muted">
                      {new Date(article.publishedDate).toLocaleDateString('en-NG', {
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
        </div>
      </section>
    </>
  )
}
