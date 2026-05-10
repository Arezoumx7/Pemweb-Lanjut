import { useState } from 'react'
import BookingWidget from '../ui/BookingWidget'

export default function HeroSection() {
  return (
    <section className="hero-section flex items-center pt-20" id="home">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Hero Copy */}
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold uppercase tracking-widest" style={{ background: 'rgba(249,115,22,.18)', color: '#FDA56D', border: '1px solid rgba(249,115,22,.35)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse inline-block" />
              Premium Car Rental — Bandung & Beyond
            </div>

            <h1 className="animate-fade-up-2" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2.4rem,5.5vw,3.8rem)', fontWeight: 800, lineHeight: 1.08, color: '#fff', letterSpacing: '-.02em' }}>
              Drive Your<br />
              <span style={{ background: 'linear-gradient(90deg,#F97316,#fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Perfect
              </span>
              &nbsp;Journey
            </h1>

            <p className="animate-fade-up-3 mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,.68)', fontWeight: 300 }}>
              Explore Indonesia in style — from mountain roads to coastal drives. Book in minutes, drive with confidence.
            </p>

            {/* Trust Badges */}
            <div className="animate-fade-in mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,.65)' }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#F97316" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>Fully Insured</span>
              </div>
              <div className="w-px h-4" style={{ background: 'rgba(255,255,255,.2)' }} />
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,.65)' }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#F97316" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <span>24 / 7 Support</span>
              </div>
              <div className="w-px h-4" style={{ background: 'rgba(255,255,255,.2)' }} />
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,.65)' }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#F97316" strokeWidth="2"><path d="M5 12l5 5L20 7"/></svg>
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="booking-widget p-6 md:p-8 animate-fade-up-2">
            <BookingWidget />
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center pt-1.5" style={{ borderColor: 'rgba(255,255,255,.35)' }}>
          <div className="w-1 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,.55)' }} />
        </div>
      </div>
    </section>
  )
}
