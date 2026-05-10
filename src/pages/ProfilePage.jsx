// pages/ProfilePage.jsx
import { useState, useEffect } from 'react'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('about')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const reasons = [
    {
      icon: '🚗',
      title: 'Armada Terbaru & Terawat',
      desc: 'Semua mobil kami rutin diservis dan dalam kondisi prima. Tahun produksi 2021-2024 dengan standar perawatan tinggi.'
    },
    {
      icon: '💰',
      title: 'Harga Transparan',
      desc: 'Tidak ada biaya tersembunyi. Harga yang Anda lihat adalah harga yang Anda bayar, sudah termasuk pajak dan asuransi dasar.'
    },
    {
      icon: '🔒',
      title: 'Keamanan Terjamin',
      desc: 'Setiap unit dilengkapi asuransi komprehensif dan GPS tracking untuk keamanan maksimal perjalanan Anda.'
    },
    {
      icon: '🕐',
      title: 'Layanan 24/7',
      desc: 'Tim support kami siap membantu Anda kapan saja, di mana saja. Darurat di jalan? Kami selalu standby.'
    },
    {
      icon: '📄',
      title: 'Proses Cepat & Mudah',
      desc: 'Booking online, verifikasi dokumen instan, dan mobil bisa langsung diantar ke lokasi Anda.'
    },
    {
      icon: '🏆',
      title: 'Berpengalaman',
      desc: 'Lebih dari 5 tahun melayani ribuan pelanggan di seluruh Indonesia dengan tingkat kepuasan 98%.'
    }
  ]

  const values = [
    { number: '150+', label: 'Unit Mobil', color: '#F97316' },
    { number: '18rb+', label: 'Pelanggan Puas', color: '#4A5AA8' },
    { number: '25+', label: 'Kota Coverage', color: '#F97316' },
    { number: '4.9★', label: 'Rating Pelanggan', color: '#4A5AA8' }
  ]

  return (
    <div className="min-h-screen pt-20" style={{ background: '#F8FAFC' }}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
            Tentang Kami
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Mitra terpercaya untuk perjalanan Anda di seluruh Indonesia
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style={{ background: '#FEF3E2', color: '#F97316' }}>
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Syne',sans-serif", color: '#0B1437' }}>
              Solusi Transportasi Modern & Terpercaya
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Didirikan pada tahun 2019, Rental Mobil hadir sebagai solusi transportasi modern yang mengutamakan kenyamanan, keamanan, dan kepuasan pelanggan. Kami memahami bahwa perjalanan yang nyaman adalah kunci produktivitas dan kebahagiaan.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Dengan armada yang terus diperbarui dan tim profesional yang berpengalaman, kami telah melayani ribuan pelanggan untuk berbagai kebutuhan - mulai dari perjalanan bisnis, liburan keluarga, hingga event korporat.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Komitmen kami adalah memberikan layanan terbaik dengan harga yang kompetitif, tanpa mengorbankan kualitas dan keselamatan.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Syne',sans-serif" }}>
              Mengapa Memilih Kami?
            </h3>
            <div className="space-y-4">
              {reasons.slice(0, 4).map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-2xl">{reason.icon}</span>
                  <div>
                    <h4 className="font-semibold mb-1">{reason.title}</h4>
                    <p className="text-sm text-slate-300">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Value Stats */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Syne',sans-serif", color: '#0B1437' }}>
              Rental Mobil dalam Angka
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Capaian yang membuktikan komitmen kami terhadap layanan terbaik
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: value.color, fontFamily: "'Syne',sans-serif" }}>
                  {value.number}
                </div>
                <div className="text-slate-600 font-medium">{value.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visi & Misi */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: '#FEF3E2' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Syne',sans-serif", color: '#0B1437' }}>
              Visi Kami
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Menjadi perusahaan rental mobil terdepan di Indonesia yang dikenal dengan layanan berkualitas, armada premium, dan pengalaman pelanggan yang tak terlupakan.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: '#EEF0F8' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4A5AA8" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Syne',sans-serif", color: '#0B1437' }}>
              Misi Kami
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Menyediakan armada berkualitas dengan standar perawatan tertinggi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Memberikan harga transparan dan kompetitif di setiap layanan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Menjaga kepuasan pelanggan melalui layanan responsif 24/7</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Terus berinovasi untuk kemudahan akses dan kenyamanan pelanggan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alasan Memilih Kami - Full List */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Syne',sans-serif", color: '#0B1437' }}>
              6 Alasan Harus Memilih Kami
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Kenapa ribuan pelanggan mempercayakan perjalanan mereka kepada kami
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0B1437' }}>{reason.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Syne',sans-serif" }}>
            Siap Memulai Perjalanan Anda?
          </h3>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">
            Dapatkan pengalaman berkendara terbaik dengan armada premium kami
          </p>
          <button className="px-8 py-3 rounded-xl font-bold transition-all hover:scale-105" style={{ background: '#F97316', color: '#fff' }}>
            Lihat Armada Kami →
          </button>
        </div>
      </div>
    </div>
  )
}