import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BackToTop } from '@/components/shared/BackToTop'
import { getPayload } from '@/lib/payload'
import '../globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Unilorin Secondary School',
    default: 'Unilorin Secondary School — Hard work, Discipline and Progress',
  },
  description:
    'Unilorin Secondary School (USS) is a distinguished co-educational institution affiliated with the University of Ilorin, established in 1982 in Ilorin, Kwara State, Nigeria.',
}

export default async function FrontendLayout({ children }: { children: ReactNode }) {
  let settings: any = null
  try {
    const payload = await getPayload()
    settings = await payload.findGlobal({ slug: 'site-settings' })
  } catch {
    // Fall back to defaults if CMS is unavailable
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body text-text-body bg-cream antialiased">
        <Header />
        <main>{children}</main>
        <Footer
          settings={
            settings
              ? {
                  contactPhone: settings.contactPhone,
                  contactEmail: settings.contactEmail,
                  address: settings.address,
                }
              : undefined
          }
        />
        <BackToTop />
      </body>
    </html>
  )
}
