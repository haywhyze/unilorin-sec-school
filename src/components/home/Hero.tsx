'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CLOUDINARY_BASE = 'https://res.cloudinary.com/haywhyze/image/upload/'

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-purple-950">
      {/* Full-bleed background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src={`${CLOUDINARY_BASE}uss-media/hero-2.webp`}
          alt="Unilorin Secondary School campus"
          fill
          className="object-cover"
          priority
        />
        {/* Rich multi-layered overlay — not a flat gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(170deg, rgba(15,7,32,0.92) 0%, rgba(30,10,60,0.75) 35%, rgba(15,7,32,0.6) 60%, rgba(15,7,32,0.85) 100%)',
          }}
        />
      </div>

      {/* Geometric gold accent lines */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.06 }}
      >
        <div className="absolute top-[20%] left-0 w-[40%] h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <div className="absolute top-[70%] right-0 w-[30%] h-px bg-gradient-to-l from-transparent via-gold-400 to-transparent" />
        <div className="absolute top-0 left-[15%] w-px h-[40%] bg-gradient-to-b from-transparent via-gold-400 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container-uss py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text — Left side */}
            <div className="lg:col-span-7">
              {/* Established badge */}
              <div
                className={`inline-flex items-center gap-3 mb-8 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <span className="w-12 h-px bg-gold-500" />
                <span className="text-sm text-gold-400 tracking-[0.25em] uppercase font-medium">
                  Est. 1982 &middot; University of Ilorin
                </span>
              </div>

              {/* Main heading — editorial treatment */}
              <h1
                className={`font-display font-bold text-white leading-[1.05] mb-8 transition-all duration-700 delay-150 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
              >
                Empowering
                <br />
                <span className="relative">
                  <span className="text-gradient-gold">Minds,</span>
                </span>{' '}
                Shaping
                <br />
                <span className="text-white/90">Futures</span>
              </h1>

              {/* Motto in an editorial style */}
              <div
                className={`flex items-center gap-4 mb-8 transition-all duration-700 delay-300 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-gold-400 to-gold-600" />
                <div>
                  <p className="text-lg text-white/50 italic font-display">
                    &ldquo;Hard work, Discipline and Progress&rdquo;
                  </p>
                  <p className="text-sm text-gold-400/70 mt-1">School Motto</p>
                </div>
              </div>

              {/* Description */}
              <p
                className={`text-lg text-white/55 max-w-lg mb-10 leading-relaxed transition-all duration-700 delay-[450ms] ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                A centre of academic excellence producing well-rounded
                graduates since 1982. Where discipline meets innovation.
              </p>

              {/* CTAs */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[600ms] ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
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
                <Link href="/about" className="btn btn-outline">
                  Our Story
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
              </div>
            </div>

            {/* Right side — Floating info cards */}
            <div
              className={`hidden lg:flex lg:col-span-5 flex-col items-end gap-5 transition-all duration-1000 delay-500 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              {/* Mini stats cards */}
              <div className="bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-2xl p-6 w-72">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-white">40+</div>
                    <div className="text-xs text-white/40">Years of Excellence</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-2xl p-6 w-64 mr-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-white">1000+</div>
                    <div className="text-xs text-white/40">Proud Alumni</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-2xl p-6 w-72">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-crimson-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-crimson-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-white">Top Rated</div>
                    <div className="text-xs text-white/40">In Kwara State</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge — warm cream transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent z-10" />
    </section>
  )
}
