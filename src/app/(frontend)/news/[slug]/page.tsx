import type { Metadata } from 'next'
import Link from 'next/link'

// Placeholder article data — will be replaced with CMS query
const articlesMap: Record<string, { title: string; content: string; category: string; date: string; image: string }> = {
  'science-olympiad-2024': {
    title: 'USS Students Excel at National Science Olympiad',
    content: `Our science department students brought home multiple awards at this year's National Science Olympiad, showcasing the depth of our STEM education programme.\n\nThe team of 12 students, led by Mr. Adeyemi of the Science Department, participated in categories spanning Physics, Chemistry, Biology, and Mathematics. USS placed in the top three positions in three separate categories.\n\nThis achievement reflects the school's commitment to practical science education and our recent investment in laboratory equipment. The Principal, Alhaji T.N. Durojaiye, commended the students and their teachers for the outstanding performance.\n\n"This is a testament to the quality of education we provide at USS. Our students are not just learning theory — they are applying knowledge to solve real problems," said the Principal.`,
    category: 'News',
    date: '2024-11-15',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0150-scaled.jpg',
  },
  'cultural-day-2024': {
    title: 'Annual Cultural Day Celebration',
    content: `Students from all departments came together to celebrate Nigeria's rich cultural heritage through performances, food, and art exhibitions.\n\nThe event featured traditional dance performances from the three major ethnic groups, a fashion show displaying traditional attire, and a food fair where students prepared local delicacies.\n\nThe Cultural Day celebration is an annual tradition at USS that promotes unity in diversity and helps students appreciate their cultural roots while embracing others.`,
    category: 'Events',
    date: '2024-10-20',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0263-scaled.jpg',
  },
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articlesMap[slug]
  return {
    title: article?.title || 'Article Not Found',
    description: article?.content.slice(0, 160) || '',
  }
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = articlesMap[slug]

  if (!article) {
    return (
      <>
        <section className="pt-36 pb-20 bg-gradient-to-br from-purple-900 to-purple-950">
          <div className="container-uss relative z-10">
            <h1 className="text-white">Article Not Found</h1>
            <p className="text-white/70 mt-4">This article may have been moved or doesn&apos;t exist.</p>
            <Link href="/news" className="btn btn-gold mt-6">
              Back to News
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: `url('${article.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 to-transparent" />
        <div className="container-uss relative z-10">
          <Link href="/news" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 text-sm transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to News
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold mb-4">
            {article.category}
          </span>
          <h1 className="text-white max-w-3xl">{article.title}</h1>
          <time className="text-white/50 text-sm mt-4 block">
            {new Date(article.date).toLocaleDateString('en-NG', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-uss">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
              <div
                className="h-64 md:h-96 bg-cover bg-center"
                style={{ backgroundImage: `url('${article.image}')` }}
              />
            </div>

            {/* Content */}
            <div className="rich-text-content text-lg leading-relaxed text-uss-body">
              {article.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-6">{paragraph}</p>
              ))}
            </div>

            {/* Share / Back */}
            <div className="mt-12 pt-8 border-t border-uss-border flex items-center justify-between">
              <Link href="/news" className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:gap-3 transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                All News & Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
