// pages/FleetPricePage.jsx
import { useState } from 'react'
import { cars, categories } from '../data/fleet'

export default function FleetPricePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCars = cars.filter(car => {
    const matchCategory = activeCategory === 'all' || car.category === activeCategory
    const matchSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  const formatPrice = (price) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''))
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(numericPrice)
  }

  return (
    // Hapus pt-24 karena navbar sudah solid, ganti dengan pt-20
    <div className="min-h-screen pt-20" style={{ background: '#F8FAFC' }}>
      {/* Hero Section dengan gradien gelap - tidak ada padding-top tambahan */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
            Daftar Harga Sewa Mobil
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Pilih mobil favorit Anda dengan harga terbaik. Semua mobil dalam kondisi prima.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Cari mobil..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-5 py-3 rounded-xl border border-slate-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                activeCategory === cat.value
                  ? 'text-white shadow-lg'
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
              style={activeCategory === cat.value ? { background: '#F97316' } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100 hover:shadow-lg transition">
              <div className="h-48 bg-slate-100 flex items-center justify-center">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{car.name}</h3>
                <p className="text-slate-500 text-sm mb-3">{car.subtitle}</p>
                <div className="flex gap-4 mb-4 text-sm">
                  <span>🚗 {car.seats} Kursi</span>
                  <span>⚙️ {car.transmission}</span>
                  <span>🧳 {car.bags} Bagasi</span>
                </div>
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Harga 12 Jam</span>
                    <span className="text-xl font-bold text-orange-600">{formatPrice(car.price)}</span>
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl font-semibold text-white" style={{ background: '#0B1437' }}>
                  Sewa Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCars.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-slate-500">Tidak ada mobil yang ditemukan</p>
          </div>
        )}
      </div>
    </div>
  )
}