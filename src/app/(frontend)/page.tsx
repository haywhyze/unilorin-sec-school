import { Hero } from '@/components/home/Hero'
import { Stats } from '@/components/home/Stats'
import { QuickInfo } from '@/components/home/QuickInfo'
import { FeaturedNews } from '@/components/home/FeaturedNews'
import { Testimonials } from '@/components/home/Testimonials'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from '@/lib/payload'

const CLOUDINARY_BASE = 'https://res.cloudinary.com/haywhyze/image/upload/'

const categoryDisplayNames: Record<string, string> = {
  news: 'Academics',
  events: 'Events',
  announcements: 'Announcements',
}

export default async function HomePage() {
  const payload = await getPayload()

  const [testimonialsResult, newsResult] = await Promise.all([
    payload.find({ collection: 'testimonials', limit: 6 }),
    payload.find({
      collection: 'news',
      where: { status: { equals: 'published' } },
      sort: '-publishedDate',
      limit: 3,
      depth: 1,
    }),
  ])

  const testimonials = testimonialsResult.docs.map((doc: any) => ({
    quote: doc.quote,
    author: doc.author,
    role: doc.role,
  }))

  const news = newsResult.docs.map((doc: any) => ({
    title: doc.title,
    excerpt: doc.excerpt,
    category: categoryDisplayNames[doc.category] || doc.category,
    date: doc.publishedDate,
    slug: doc.slug,
    image: doc.featuredImage?.url || `${CLOUDINARY_BASE}uss-media/event-1.jpg`,
  }))
  return (
    <>
      <Hero />

      <Stats />

      <QuickInfo />

      <FeaturedNews news={news.length > 0 ? news : undefined} />

      <Testimonials testimonials={testimonials.length > 0 ? testimonials : undefined} />

      {/* Begin Your Journey CTA — Split design */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Left — Image panel */}
          <div className="relative h-64 lg:h-auto">
            <Image
              src={`${CLOUDINARY_BASE}uss-media/hero-1.webp`}
              alt="Students at Unilorin Secondary School"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-purple-950/40" />
            {/* Gold corner accent */}
            <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-gold-400/60 rounded-br-2xl" />
          </div>

          {/* Right — Content panel */}
          <div className="relative bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 px-8 py-20 lg:px-16 lg:py-24 grain">
            {/* Decorative gold circle */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl" />

            <div className="relative z-10 max-w-lg">
              <ScrollReveal>
                <span className="inline-flex items-center gap-3 mb-6">
                  <span className="w-10 h-px bg-gold-500" />
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-400">
                    Admissions Open
                  </span>
                </span>

                <h2 className="text-white font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                  Begin Your
                  <br />
                  <span className="text-gradient-gold">Journey</span>
                </h2>

                <p className="text-white/60 text-lg leading-relaxed mb-10">
                  Join a nurturing and empowering environment where students
                  discover and develop their unique talents through academic
                  excellence and personal growth.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/admissions" className="btn btn-gold">
                    Apply for Admission
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                  <a
                    href="https://portal.uss.sch.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Student Portal
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
