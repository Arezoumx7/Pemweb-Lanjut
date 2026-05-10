export default function CTABanner() {
  const scrollToTop = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 px-5 md:px-8" style={{ background: 'linear-gradient(120deg,#0B1437 0%,#1E2D6B 100%)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Syne',sans-serif", letterSpacing: '-.02em' }}
        >
          Ready to Hit the Open Road?
        </h2>
        <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,.65)', fontWeight: 300 }}>
          Join 18,000+ satisfied customers. Book your car today and get{' '}
          <span style={{ color: '#F97316', fontWeight: 600 }}>10% off your first rental</span>{' '}
          with code{' '}
          <span style={{ color: '#F97316', fontWeight: 700 }}>VELOCE10</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="search-btn w-auto px-10 py-4 text-base"
            style={{ maxWidth: 260, margin: '0 auto' }}
            onClick={scrollToTop}
          >
            Book Now — Get 10% Off
          </button>
          <button
            className="px-8 py-4 rounded-xl text-sm font-semibold border transition-all"
            style={{ borderColor: 'rgba(255,255,255,.25)', color: 'rgba(255,255,255,.8)' }}
            onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,.6)'}
            onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,.25)'}
          >
            View All Offers →
          </button>
        </div>
      </div>
    </section>
  )
}
