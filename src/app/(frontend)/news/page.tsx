import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { NewsListing, type NewsArticle } from '@/components/news/NewsListing'
import { getPayload } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'News & Events',
  description:
    'Stay informed about everything happening at Unilorin Secondary School.',
}

const CLOUDINARY_BASE = 'https://res.cloudinary.com/haywhyze/image/upload/'

const placeholderNews: NewsArticle[] = [
  {
    title: 'USS Students Excel at National Science Olympiad',
    excerpt:
      'Our science department students brought home multiple awards at this year\'s National Science Olympiad, showcasing the depth of our STEM programme.',
    category: 'news',
    publishedDate: '2025-11-15',
    slug: 'science-olympiad-2025',
    image: `${CLOUDINARY_BASE}uss-media/event-1.jpg`,
  },
  {
    title: 'Annual Cultural Day Celebration',
    excerpt:
      'Students from all departments came together to celebrate Nigeria\'s rich cultural heritage through performances, food, and art exhibitions.',
    category: 'events',
    publishedDate: '2025-10-20',
    slug: 'cultural-day-2025',
    image: `${CLOUDINARY_BASE}uss-media/event-2.jpg`,
  },
  {
    title: '2026/2027 Admission Process Now Open',
    excerpt:
      'Registration for the 2026/2027 academic session is now open. Visit our admissions page to learn about the application process.',
    category: 'announcements',
    publishedDate: '2025-09-01',
    slug: 'admissions-2026',
    image: `${CLOUDINARY_BASE}uss-media/hero-1.webp`,
  },
  {
    title: 'Inter-House Sports Competition Results',
    excerpt:
      'Blue House emerged champions at this year\'s inter-house sports competition held at the university stadium with record-breaking performances.',
    category: 'events',
    publishedDate: '2025-08-15',
    slug: 'inter-house-sports-2025',
    image: `${CLOUDINARY_BASE}uss-media/event-3.jpg`,
  },
  {
    title: 'PTA Meeting: Building Stronger Community',
    excerpt:
      'The Parent-Teacher Association held its quarterly meeting to discuss plans for the upcoming academic session and infrastructure development.',
    category: 'announcements',
    publishedDate: '2025-07-10',
    slug: 'pta-meeting-q3-2025',
    image: `${CLOUDINARY_BASE}uss-media/about-full.webp`,
  },
  {
    title: 'New Computer Lab Inaugurated',
    excerpt:
      'A state-of-the-art computer laboratory has been inaugurated to enhance ICT education at USS, featuring 40 modern workstations.',
    category: 'news',
    publishedDate: '2025-06-01',
    slug: 'new-computer-lab-2025',
    image: `${CLOUDINARY_BASE}uss-media/event-4.jpg`,
  },
]

export default async function NewsPage() {
  const payload = await getPayload()
  const newsResult = await payload.find({
    collection: 'news',
    where: { status: { equals: 'published' } },
    sort: '-publishedDate',
    limit: 50,
    depth: 1,
  })

  const articles: NewsArticle[] = newsResult.docs.map((doc: any) => ({
    title: doc.title,
    excerpt: doc.excerpt,
    category: doc.category,
    publishedDate: doc.publishedDate,
    slug: doc.slug,
    image: doc.featuredImage?.url || `${CLOUDINARY_BASE}uss-media/event-1.jpg`,
  }))

  const newsData = articles.length > 0 ? articles : placeholderNews

  return (
    <>
      <PageHero
        label="News & Events"
        title="Latest Updates"
        description="Stay informed about everything happening at Unilorin Secondary School."
      />

      <NewsListing articles={newsData} />
    </>
  )
}
