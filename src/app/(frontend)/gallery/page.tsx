import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GalleryGrid, type GalleryImage } from '@/components/shared/GalleryGrid'
import { PageHero } from '@/components/ui/PageHero'
import { getPayload } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A glimpse into the vibrant life at Unilorin Secondary School.',
}

export default async function GalleryPage() {
  const payload = await getPayload()
  const imagesResult = await payload.find({
    collection: 'gallery-images',
    sort: 'order',
    limit: 50,
    depth: 1,
  })

  const images: GalleryImage[] = imagesResult.docs
    .filter((doc: any) => doc.image?.url)
    .map((doc: any) => ({
      src: doc.image.url,
      alt: doc.title || doc.image.alt || 'Gallery image',
      category: doc.category || 'campus',
    }))

  return (
    <>
      <PageHero
        label="Gallery"
        title="Campus Life in Pictures"
        description="A glimpse into the vibrant life at Unilorin Secondary School."
      />

      {/* Gallery */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-uss">
          <SectionHeading
            label="Photo Gallery"
            title="Moments That Define Us"
          />
          <GalleryGrid images={images.length > 0 ? images : undefined} />
        </div>
      </section>
    </>
  )
}
