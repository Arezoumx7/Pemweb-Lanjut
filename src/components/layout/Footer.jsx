import { Link } from 'react-router-dom';

const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#F97316" strokeWidth="2"/>
    <path d="M12 6v6l4 2" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="3" fill="#F97316"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Fungsi untuk membuka WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '6287885195456';
    const message = 'Halo Kacong Rent Car, saya ingin bertanya tentang rental mobil.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Fungsi untuk membuka telepon
  const openPhone = () => {
    window.location.href = 'tel:+6287885195456';
  };

  // Fungsi untuk membuka email
  const openEmail = () => {
    window.location.href = 'mailto:faridblack32@gmail.com';
  };

  // Fungsi untuk membuka Instagram
  const openInstagram = () => {
    window.open('https://instagram.com/', '_blank');
  };

  // Fungsi untuk membuka Facebook
  const openFacebook = () => {
    window.open('https://facebook.com/', '_blank');
  };

  // Fungsi untuk membuka TikTok
  const openTikTok = () => {
    window.open('https://tiktok.com/', '_blank');
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-16 pb-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LogoIcon />
              <span 
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Kacong Rent Car
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Rental mobil terpercaya di Bandung dengan armada lengkap dan pelayanan terbaik untuk perjalanan Anda.
            </p>
            {/* Social Media Icons - Terintegrasi */}
            <div className="flex gap-3">
              <button 
                onClick={openInstagram}
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/>
                </svg>
              </button>
              <button 
                onClick={openFacebook}
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </button>
              <button 
                onClick={openTikTok}
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.28 8.28 0 0 0 4.83 1.54V6.78a4.84 4.84 0 0 1-1.06-.09z"/>
                </svg>
              </button>
              {/* Gmail Button - Terintegrasi */}
              <button 
                onClick={openEmail}
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
                aria-label="Gmail"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Tautan Cepat */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-orange-500 transition text-sm">Beranda</Link></li>
              <li><Link to="/fleet-price" className="text-slate-400 hover:text-orange-500 transition text-sm">Daftar Harga</Link></li>
              <li><Link to="/profile" className="text-slate-400 hover:text-orange-500 transition text-sm">Profil</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-orange-500 transition text-sm">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <button onClick={openPhone} className="text-slate-400 hover:text-orange-500 transition text-sm block text-left">
                    0878-8519-5456
                  </button>
                  <button onClick={openPhone} className="text-slate-400 hover:text-orange-500 transition text-sm block text-left">
                    0878-8519-5456
                  </button>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <button onClick={openEmail} className="text-slate-400 hover:text-orange-500 transition text-sm">
                  faridblack32@gmail.com
                </button>
              </li>
            </ul>
          </div>

          {/* Alamat */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Alamat</h4>
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-slate-400 text-sm leading-relaxed">
                Jl. Turangga Bar. I No.7 B, <br />
                Kec. Lengkong, Kota Bandung, <br />
                Jawa Barat 40264
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom Bar - Copyright */}
        <div className="text-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} Kacong Rent Car. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}