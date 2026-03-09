export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient fallback + overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800" />
        {/* School image background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://staging.pixelsdigitals.com/wp-content/uploads/2024/12/DSC_0142-scaled.jpg')",
          }}
        />
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />
        {/* Subtle diagonal pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)',
          }}
        />
      </div>

      <div className="container-uss relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8 animate-[fadeInUp_0.6s_ease_forwards]">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-sm text-white/80">Established 1982 &middot; University of Ilorin</span>
          </div>

          {/* Main heading */}
          <h1 className="text-white mb-6 animate-[fadeInUp_0.8s_ease_0.1s_both]">
            Unilorin{' '}
            <span className="text-gold-400">Secondary</span>{' '}
            School
          </h1>

          {/* Motto */}
          <p className="text-xl md:text-2xl text-white/70 font-display italic mb-4 animate-[fadeInUp_0.8s_ease_0.2s_both]">
            &ldquo;Hardwork, Discipline and Progress&rdquo;
          </p>

          {/* Description */}
          <p className="text-lg text-white/60 max-w-xl mb-10 leading-relaxed animate-[fadeInUp_0.8s_ease_0.3s_both]">
            A distinguished co-educational institution nurturing academic excellence,
            moral integrity, and future leaders in the heart of Ilorin, Kwara State.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-[fadeInUp_0.8s_ease_0.4s_both]">
            <a href="/admissions" className="btn btn-gold">
              Apply for Admission
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="https://portal.uss.sch.ng" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
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

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120V60C240 100 480 20 720 40C960 60 1200 100 1440 80V120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
