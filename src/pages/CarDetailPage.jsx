import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { carAPI } from '../services/api';

export default function CarDetailPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCarDetail();
  }, [id]);

  const fetchCarDetail = async () => {
    try {
      setLoading(true);
      const response = await carAPI.getById(id);
      console.log('Detail mobil:', response.data);
      setCar(response.data);
    } catch (err) {
      console.error('Failed to fetch car detail:', err);
      setError('Gagal memuat detail mobil');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4">Memuat detail mobil...</p>
        </div>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Mobil tidak ditemukan</h2>
          <Link to="/fleet-price" className="text-orange-500 hover:underline">
            Kembali ke daftar mobil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20" style={{ background: '#F8FAFC' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
        <Link to="/fleet-price" className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-500 mb-6 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Daftar Mobil
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-80 md:h-96 bg-slate-200">
            <img 
              src={car.image || (car.images && car.images[0]) || 'https://via.placeholder.com/600'} 
              alt={car.name} 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{car.name}</h1>
            <p className="text-slate-500 mb-6">{car.subtitle || `${car.year} • ${car.fuel_type}`}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-xl text-center">
                <div className="text-2xl mb-1">🚗</div>
                <div className="text-xs text-slate-500">Tempat Duduk</div>
                <div className="font-bold text-lg">{car.seats} Kursi</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-center">
                <div className="text-2xl mb-1">⚙️</div>
                <div className="text-xs text-slate-500">Transmisi</div>
                <div className="font-bold text-lg">{car.transmission === 'Auto' ? 'Automatic' : car.transmission === 'Manual' ? 'Manual' : car.transmission}</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-center">
                <div className="text-2xl mb-1">🧳</div>
                <div className="text-xs text-slate-500">Bagasi</div>
                <div className="font-bold text-lg">{car.bags} Koper</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-center">
                <div className="text-2xl mb-1">💰</div>
                <div className="text-xs text-slate-500">Harga/Hari</div>
                <div className="font-bold text-lg text-orange-600">{formatPrice(car.price_per_day)}</div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 mb-8">
              <h2 className="font-bold mb-3">Fasilitas & Layanan</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Asuransi Kendaraan
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Sopir Profesional
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Pengantaran ke Rumah
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Bantuan 24/7
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
              <a
                href={`https://wa.me/6281234567890?text=Saya%20tertarik%20untuk%20menyewa%20mobil%20${encodeURIComponent(car.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 rounded-xl font-semibold text-white text-center hover:opacity-90 transition"
                style={{ background: '#25D366' }}
              >
                💬 Hubungi Kami via WhatsApp
              </a>
              <a
                href="tel:+6281234567890"
                className="flex-1 py-4 rounded-xl font-semibold text-white text-center hover:opacity-90 transition"
                style={{ background: '#0B1437' }}
              >
                📞 Telepon Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}