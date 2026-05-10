// components/layout/Navbar.jsx
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const LogoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17h18M5 17l1.5-5h11L19 17M7 12l1-4h8l1 4M9 17v2m6-2v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7.5" cy="17.5" r="1.5" fill="white"/>
    <circle cx="16.5" cy="17.5" r="1.5" fill="white"/>
  </svg>
)

const navLinks = [
  { href: '/', label: 'Home', isPage: true },
  { href: '/fleet-price', label: 'Harga Unit', isPage: true },
  { href: '/profile', label: 'Profil', isPage: true },
  { href: '#how-it-works', label: 'How It Works', isPage: false },
  { href: '#services', label: 'Services', isPage: false },
  { href: '#footer', label: 'Contact', isPage: false },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  
  // Cek apakah di halaman fleet-price atau profile
  const isSolidNavPage = location.pathname === '/fleet-price' || location.pathname === '/profile'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Tentukan style navbar berdasarkan halaman
  let navStyle = {}
  
  if (isSolidNavPage) {
    // Di halaman fleet atau profile: background SOLID gelap (tidak transparan)
    navStyle = {
      background: '#0B1437',
      boxShadow: '0 4px 32px rgba(0,0,0,0.25)'
    }
  } else {
    // Di halaman home: transparan saat di atas, solid saat discroll
    navStyle = scrolled
      ? { background: 'rgba(11,20,55,0.97)', backdropFilter: 'blur(20px)', boxShadow: '0 4px 32px rgba(0,0,0,0.25)' }
      : { background: 'transparent' }
  }

  const handleNavClick = (e, href, isPage) => {
    if (!isPage) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={navStyle}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center pulse-ring"
            style={{ background: 'linear-gradient(135deg,#F97316,#ea580c)' }}
          >
            <LogoIcon />
          </div>
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.35rem', color: '#fff', letterSpacing: '-.01em' }}>
            Rental Mobil
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isPage)}
                className="nav-link"
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontWeight: location.pathname === link.href ? '600' : '400',
                  borderBottom: location.pathname === link.href ? '2px solid #F97316' : 'none',
                  paddingBottom: '4px'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:bg-white/10"
            style={{ color: 'rgba(255,255,255,.85)', borderColor: 'rgba(255,255,255,.25)' }}
          >
            Log In
          </button>
          <button
            className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg,#F97316,#ea580c)', color: '#fff', fontFamily: "'Syne',sans-serif", letterSpacing: '.03em', boxShadow: '0 4px 18px rgba(249,115,22,.35)' }}
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white rounded block" />
          <span className="w-4 h-0.5 bg-white rounded block" />
          <span className="w-6 h-0.5 bg-white rounded block" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden" style={{ background: '#0B1437' }}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href, link.isPage)
                  setMenuOpen(false)
                }}
                className="font-medium py-1"
                style={{
                  color: 'rgba(255,255,255,.8)',
                  textDecoration: 'none'
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 py-2.5 rounded-xl text-sm font-semibold border text-white" style={{ borderColor: 'rgba(255,255,255,.3)' }}>Log In</button>
              <button className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white" style={{ background: 'linear-gradient(135deg,#F97316,#ea580c)' }}>Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}