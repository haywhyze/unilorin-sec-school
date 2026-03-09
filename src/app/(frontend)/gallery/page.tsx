import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { GalleryGrid } from '@/components/shared/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse photos from Unilorin Secondary School — campus life, events, academics, sports, and culture.',
}

// Placeholder images — will come from CMS
const galleryImages = [
  {
    id: '1',
    title: 'Students in the Classroom',
    category: 'academics',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0142-scaled.jpg',
    size: 'large' as const,
  },
  {
    id: '2',
    title: 'Lab Session',
    category: 'academics',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0263-scaled.jpg',
    size: 'medium' as const,
  },
  {
    id: '3',
    title: 'Campus View',
    category: 'campus',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0150-scaled.jpg',
    size: 'medium' as const,
  },
  {
    id: '4',
    title: 'Assembly Ground',
    category: 'campus',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0142-scaled.jpg',
    size: 'small' as const,
  },
  {
    id: '5',
    title: 'Cultural Performance',
    category: 'culture',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0263-scaled.jpg',
    size: 'small' as const,
  },
  {
    id: '6',
    title: 'Science Exhibition',
    category: 'events',
    image: 'https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0150-scaled.jpg',
    size: 'large' as const,
  },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="container-uss relative z-10">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-gold-400 mb-4">
            <span className="w-8 h-0.5 bg-gold-500 inline-block" /> Gallery
          </span>
          <h1 className="text-white max-w-2xl">Campus Life in Pictures</h1>
          <p className="text-white/70 text-lg mt-4 max-w-xl">A glimpse into the vibrant life at Unilorin Secondary School.</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-uss">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  )
}
