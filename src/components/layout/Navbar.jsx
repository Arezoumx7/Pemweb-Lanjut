// components/layout/Navbar.jsx
import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#0B1437" strokeWidth="2"/>
    <path d="M12 6v6l4 2" stroke="#0B1437" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="3" fill="#0B1437"/>
  </svg>
)

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/fleet-price', label: 'Harga Unit' },
  { path: '/contact', label: 'Hubungi Kami' },
  { path: '/profile', label: 'Profil' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Efek scroll untuk memberikan shadow halus saat user scroll ke bawah
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Tutup mobile menu saat ganti halaman
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-sm' : 'shadow-none'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-4 flex items-center justify-between">
        
        {/* LOGO - SEBELAH KIRI */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <LogoIcon />
          <span 
            style={{ 
              fontFamily: "'Syne',sans-serif", 
              fontWeight: 700, 
              fontSize: '1.25rem', 
              color: '#0B1437' 
            }}
          >
            Kacong
            Rental Mobil
          </span>
        </Link>

        {/* DESKTOP NAVIGASI - SEBELAH KANAN */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive ? '#0B1437' : 'rgba(11,20,55,0.6)',
                    fontWeight: isActive ? 600 : 500,
                  }}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      <div 
        className={`md:hidden bg-white border-t border-slate-100 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col py-4 px-5 list-none m-0">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-3 text-base font-medium transition-colors duration-200 ${
                    isActive ? 'text-orange-500' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}