'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'News', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-gradient-to-r from-purple-950/95 via-purple-900/95 to-purple-950/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(45,14,66,0.25)] py-2'
            : 'bg-transparent py-4'
        }`}
      >
        {/* Gold accent line at top — visible on scroll */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="container-uss flex items-center justify-between">
          {/* Logo + School Name */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative w-11 h-11 shrink-0">
              <Image
                src="https://res.cloudinary.com/haywhyze/image/upload/uss-media/school-logo.png"
                alt="Unilorin Secondary School Logo"
                width={44}
                height={44}
                className="rounded-full object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-lg leading-tight text-white group-hover:text-gold-300 transition-colors duration-300">
                Unilorin Secondary
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-gold-400 font-medium">
                School
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-[0.9rem] font-medium text-white/80 hover:text-white transition-colors duration-300 rounded-lg group"
              >
                {item.label}
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold-400 transition-all duration-300 group-hover:w-3/5 rounded-full" />
              </Link>
            ))}

            <a
              href="https://portal.uss.sch.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 btn btn-gold text-sm py-2 px-5 rounded-lg"
            >
              Student Portal
            </a>
          </nav>

          {/* Mobile Hamburger / X toggle */}
          <button
            className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block w-full h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`}
              />
              <span
                className={`block w-full h-[2px] bg-white rounded-full transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-full h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950" />

        {/* Decorative blurs */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-gold-500/10 blur-3xl" />

        <nav className="relative flex flex-col items-center justify-center h-full gap-1 px-8">
          {navItems.map((item: NavItem, i: number) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className={`text-white/90 text-2xl font-display font-bold py-3 px-8 rounded-xl hover:bg-white/5 hover:text-gold-300 transition-all duration-300 ${
                mobileOpen ? 'animate-[fadeInUp_0.5s_ease_forwards]' : ''
              }`}
              style={{
                animationDelay: `${i * 70 + 100}ms`,
                opacity: mobileOpen ? undefined : 0,
              }}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="https://portal.uss.sch.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-lg px-8"
              onClick={closeMobile}
            >
              Student Portal
            </a>
          </div>

          {/* School motto */}
          <p className="absolute bottom-12 text-sm text-gold-400/60 font-display italic">
            Hardwork, Discipline and Progress
          </p>
        </nav>
      </div>
    </>
  )
}
