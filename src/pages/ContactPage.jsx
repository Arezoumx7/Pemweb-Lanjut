import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  // Fungsi untuk membuka WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '6287885195456'; // 087885195456 tanpa 0 di depan
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

  return (
    <div className="min-h-screen pt-20" style={{ background: '#F8FAFC' }}>
      {/* Hero Section */}
      <div className="bg-linear-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
            Hubungi Kami
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Kacong Rent Car siap melayani kebutuhan rental mobil Anda 24/7. Hubungi kami melalui kontak di bawah ini.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
        {/* Jam Operasional - Paling Atas */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl text-slate-800 mb-2">Jam Operasional</h3>
            <p className="text-slate-600 text-lg">Senin - Minggu: 08:00 - 22:00</p>
            <p className="text-slate-400 text-sm mt-1">24/7 Customer Support via WhatsApp</p>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-800">Lokasi Kami</h2>
              <p className="text-slate-500 mt-1">
                Jl. Turangga No.10, Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40264
              </p>
            </div>
            <div className="w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.735102855996!2d107.62227027499224!3d-6.923818468063831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7b7e2f5e8b1%3A0x8e4b2b1a5e4b2b1a!2sJl.%20Turangga%20No.10%2C%20Lkr.%20Sel.%2C%20Kec.%20Lengkong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040264!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kacong Rent Car Location"
              ></iframe>
            </div>
            <div className="p-4 bg-slate-50 text-center">
              <a
                href="https://maps.google.com/?q=Jl.+Turangga+No.10,+Lkr.+Sel.,+Kec.+Lengkong,+Kota+Bandung,+Jawa+Barat+40264"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Informasi Kontak - 4 Card (Alamat, Telepon, WhatsApp, Email) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card Alamat */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition group">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0 mb-4 group-hover:bg-orange-100 transition">
                <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Alamat</h3>
              <p className="text-slate-600 leading-relaxed">
                Jl. Turangga Bar. I No.7 B, Kec. Lengkong, <br />
                Kota Bandung, Jawa Barat 40264
              </p>
            </div>
          </div>

          {/* Card Telepon */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition group">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mb-4 group-hover:bg-blue-100 transition">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Telepon</h3>
              <button 
                onClick={openPhone}
                className="text-slate-600 hover:text-orange-500 transition font-medium"
              >
                0878-8519-5456
              </button>
            </div>
          </div>

          {/* Card WhatsApp */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition group">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 mb-4 group-hover:bg-green-100 transition">
                <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">WhatsApp</h3>
              <button 
                onClick={openWhatsApp}
                className="text-slate-600 hover:text-green-500 transition font-medium"
              >
                0878-8519-5456
              </button>
            </div>
          </div>

          {/* Card Email */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition group">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 mb-4 group-hover:bg-red-100 transition">
                <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">E-mail</h3>
              <button 
                onClick={openEmail}
                className="text-slate-600 hover:text-orange-500 transition"
              >
                faridblack32@gmail.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}