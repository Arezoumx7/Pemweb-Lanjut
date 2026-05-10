import { useState } from 'react'
import { cars, categories } from '../../data/fleet'

export default function FleetPricePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCars = cars.filter(car => {
    const matchCategory = activeCategory === 'all' || car.category === activeCategory
    const matchSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        car.type.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  // Format currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="min-h-screen" style={{ background: '#F8FAFC' }}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
            Daftar Harga Sewa Mobil
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
            Pilih mobil favorit Anda dengan harga terbaik. Semua mobil dalam kondisi prima dan siap menemani perjalanan Anda.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-12">
        
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Cari mobil berdasarkan nama atau tipe..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-xl border border-slate-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              style={{ background: '#fff' }}
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeCategory === cat.value
                  ? 'text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
              style={activeCategory === cat.value ? { background: '#F97316' } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Price List Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: '#F1F5F9' }}>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#0B1437' }}>Mobil</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#0B1437' }}>Tipe</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#0B1437' }}>Tahun</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#0B1437' }}>Transmisi</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#0B1437' }}>Kapasitas</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#0B1437' }}>Harga 12 Jam</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#0B1437' }}>Harga 24 Jam</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#0B1437' }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredCars.map((car, index) => (
                  <tr 
                    key={car.id} 
                    className="border-t border-slate-100 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M5 10v10h14V10" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold" style={{ color: '#0B1437' }}>{car.name}</p>
                          <p className="text-xs text-slate-500">{car.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{car.category || 'SUV'}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{car.year}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        car.transmission === 'Automatic' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {car.transmission === 'Automatic' ? (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        ) : (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        )}
                        {car.transmission}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{car.seats} Kursi</td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-orange-600">{formatPrice(car.price12h || 1500000)}</span>
                      <p className="text-xs text-slate-400">/12 jam</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-orange-600">{formatPrice(car.price24h || 2000000)}</span>
                      <p className="text-xs text-slate-400">/24 jam</p>
                    </td>
                    <td className="px-6 py-4">
                      <button className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105" style={{ background: '#0B1437', color: '#fff' }}>
                        Sewa Sekarang
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Empty State */}
          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">Tidak ada mobil yang ditemukan</p>
            </div>
          )}
        </div>

        {/* Price Notes */}
        <div className="mt-8 p-5 bg-amber-50 rounded-xl border border-amber-200">
          <h4 className="font-semibold text-amber-800 mb-2">Informasi Harga:</h4>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>✓ Harga sudah termasuk driver dan bahan bakar (untuk dalam kota)</li>
            <li>✓ Harga belum termasuk tol, parkir, dan retribusi</li>
            <li>✓ Tersedia juga paket mingguan dan bulanan dengan harga khusus</li>
            <li>✓ Free antar-jemput di area Jabodetabek</li>
          </ul>
        </div>
      </div>
    </div>
  )
}