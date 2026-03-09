import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPayload } from '@/lib/payload'
import { RichText } from '@payloadcms/richtext-lexical/react'

const CLOUDINARY_BASE = 'https://res.cloudinary.com/haywhyze/image/upload/'

type PageProps = {
  params: Promise<{ slug: string }>
}

function formatSlugAsTitle(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload()
  const result = await payload.find({
    collection: 'news',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  const article = result.docs[0] as any

  if (article) {
    return {
      title: `${article.title} | Unilorin Secondary School`,
      description: article.excerpt || `Read about ${article.title} at Unilorin Secondary School.`,
    }
  }

  const title = formatSlugAsTitle(slug)
  return {
    title: `${title} | Unilorin Secondary School`,
    description: `Read about ${title} at Unilorin Secondary School.`,
  }
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload()
  const result = await payload.find({
    collection: 'news',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
  })

  const article = result.docs[0] as any

  if (!article) {
    notFound()
  }

  const title = article.title
  const imageUrl = article.featuredImage?.url || `${CLOUDINARY_BASE}uss-media/event-1.jpg`
  const imageAlt = article.featuredImage?.alt || title
  const publishedDate = article.publishedDate
    ? new Date(article.publishedDate).toLocaleDateString('en-NG', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : ''

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-purple-950">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(170deg, rgba(15,7,32,0.95) 0%, rgba(30,10,60,0.85) 50%, rgba(15,7,32,0.92) 100%)',
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ opacity: 0.05 }}>
          <div className="absolute top-[30%] left-0 w-[35%] h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        </div>
        <div className="container-uss relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/news" className="hover:text-white transition-colors">
              News
            </Link>
            <span>/</span>
            <span className="text-white/80 truncate max-w-xs">{title}</span>
          </nav>
          <h1 className="text-white max-w-3xl">{title}</h1>
          {publishedDate && (
            <time className="text-white/50 text-sm mt-4 block">{publishedDate}</time>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* Article Body */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-uss">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden mb-12 shadow-lg">
              <div className="relative h-64 md:h-[28rem]">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            {article.content ? (
              <div className="rich-text-content text-lg leading-relaxed text-text-muted">
                <RichText data={article.content} />
              </div>
            ) : (
              <div className="rich-text-content text-lg leading-relaxed text-text-muted">
                <p className="mb-6">{article.excerpt}</p>
              </div>
            )}

            {/* Divider */}
            <div className="section-divider my-12">
              <div className="section-divider-icon" />
            </div>

            {/* Back navigation */}
            <div className="flex items-center">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:gap-3 transition-all group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
