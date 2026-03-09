import type { ReactNode } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BackToTop } from '@/components/shared/BackToTop'
import '../globals.css'

export const metadata = {
  title: {
    template: '%s | Unilorin Secondary School',
    default: 'Unilorin Secondary School — Hardwork, Discipline and Progress',
  },
  description:
    'Unilorin Secondary School (USS) is a distinguished co-educational institution affiliated with the University of Ilorin, founded in 1982 in Ilorin, Kwara State, Nigeria.',
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
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
      <body className="font-body text-uss-body bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
