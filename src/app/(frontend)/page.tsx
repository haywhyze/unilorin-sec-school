import { Hero } from '@/components/home/Hero'
import { Stats } from '@/components/home/Stats'
import { QuickInfo } from '@/components/home/QuickInfo'
import { FeaturedNews } from '@/components/home/FeaturedNews'
import { Testimonials } from '@/components/home/Testimonials'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <QuickInfo />
      <FeaturedNews />
      <Testimonials />

      {/* Portal CTA Banner */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-uss">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 p-10 md:p-16 text-center noise-overlay">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-uss-red-500/10 blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-white mb-4">Ready to Join Our Community?</h2>
                <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
                  Whether you&apos;re a prospective student or a current member, our portal gives you
                  everything you need.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/admissions" className="btn btn-gold">
                    Apply for Admission
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
