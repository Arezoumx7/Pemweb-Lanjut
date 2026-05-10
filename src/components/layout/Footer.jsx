const LogoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17h18M5 17l1.5-5h11L19 17M7 12l1-4h8l1 4M9 17v2m6-2v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7.5" cy="17.5" r="1.5" fill="white"/>
    <circle cx="16.5" cy="17.5" r="1.5" fill="white"/>
  </svg>
)

const quickLinks = [
  { href: '#fleet', label: 'Our Fleet' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#services', label: 'Services' },
  { href: '#', label: 'Pricing' },
  { href: '#', label: 'FAQ' },
  { href: '#', label: 'Blog' },
]

const supportLinks = [
  { href: '#', label: 'Help Center' },
  { href: '#', label: 'Cancellation Policy' },
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Partner with Us' },
]

const paymentMethods = ['VISA', 'MC', 'BCA', 'QRIS', 'GoPay', 'OVO', 'Dana']

export default function Footer() {
  return (
    <footer id="footer" style={{ background: '#07102D', color: '#94A3B8' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-16 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#F97316,#ea580c)' }}>
                <LogoIcon />
              </div>
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.2rem', color: '#fff', letterSpacing: '-.01em' }}>VELOCE</span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,.45)', fontWeight: 300 }}>
              Premium car rental for every journey. Drive confidently across Indonesia.
            </p>
            <div className="flex gap-3">
              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(255,255,255,.07)', color: 'rgba(255,255,255,.5)' }} title="Instagram">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="#" className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(255,255,255,.07)', color: 'rgba(255,255,255,.5)' }} title="WhatsApp">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
              {/* TikTok */}
              <a href="#" className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(255,255,255,.07)', color: 'rgba(255,255,255,.5)' }} title="TikTok">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.28 8.28 0 0 0 4.83 1.54V6.78a4.84 4.84 0 0 1-1.06-.09z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white">Quick Links</h4>
            {quickLinks.map(link => (
              <a key={link.label} href={link.href} className="footer-link">{link.label}</a>
            ))}
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white">Support</h4>
            {supportLinks.map(link => (
              <a key={link.label} href={link.href} className="footer-link">{link.label}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" className="mt-0.5 flex-shrink-0"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,.5)' }}>Jl. Asia Afrika No. 100,<br/>Bandung 40111, Jawa Barat</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" className="flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+622212345678" className="footer-link" style={{ margin: 0 }}>+62 22 1234-5678</a>
              </div>
              <div className="flex items-center gap-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" className="flex-shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:hello@veloce.id" className="footer-link" style={{ margin: 0 }}>hello@veloce.id</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-5" style={{ borderColor: 'rgba(255,255,255,.07)' }}>
          <p className="text-xs order-2 md:order-1" style={{ color: 'rgba(255,255,255,.3)' }}>© 2025 VELOCE Car Rental. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2 order-1 md:order-2">
            <span className="text-xs mr-1" style={{ color: 'rgba(255,255,255,.3)' }}>We accept:</span>
            {paymentMethods.map(method => (
              <span key={method} className="pay-icon">{method}</span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
