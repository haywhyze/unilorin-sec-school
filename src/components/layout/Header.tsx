'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-uss flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-purple-700 flex items-center justify-center text-white font-display font-bold text-lg group-hover:bg-purple-600 transition-colors">
              U
            </div>
            <div className="hidden sm:block">
              <div className={`font-display font-bold text-lg leading-tight transition-colors ${scrolled ? 'text-purple-900' : 'text-white'}`}>
                Unilorin Secondary
              </div>
              <div className={`text-xs tracking-wider uppercase transition-colors ${scrolled ? 'text-gold-600' : 'text-gold-300'}`}>
                School
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10 ${
                  scrolled
                    ? 'text-uss-body hover:text-purple-700 hover:bg-purple-50'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://portal.uss.sch.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 btn btn-gold text-sm py-2 px-5"
            >
              Student Portal
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? `rotate-45 translate-y-2 ${scrolled ? 'bg-purple-700' : 'bg-white'}`
                  : scrolled ? 'bg-purple-700' : 'bg-white'
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              } ${scrolled ? 'bg-purple-700' : 'bg-white'}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? `-rotate-45 -translate-y-2 ${scrolled ? 'bg-purple-700' : 'bg-white'}`
                  : scrolled ? 'bg-purple-700' : 'bg-white'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-purple-950/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-2">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/90 text-2xl font-display font-bold py-3 px-8 rounded-xl hover:bg-white/10 hover:text-gold-300 transition-all"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://portal.uss.sch.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 btn btn-gold text-lg"
            onClick={() => setMobileOpen(false)}
          >
            Student Portal
          </a>
        </nav>
      </div>
    </>
  )
}
