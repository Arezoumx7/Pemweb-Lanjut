import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { carAPI } from '../../services/api';

export default function FleetSection() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Daftar mobil yang ingin ditampilkan (urutan sesuai permintaan)
  const targetCars = [
    'Mitsubishi Pajero Sport',
    'Mitsubishi Xpander',
    'Toyota Fortuner',
    'Daihatsu Terios',
    'Toyota Rush',
    'Toyota Innova Reborn MT'
  ];

  // Fetch data dari backend
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Ambil semua mobil dari database
      const carsData = await carAPI.getAll();
      const allCars = carsData.data;
      
      // Filter hanya 6 mobil yang diinginkan
      const filteredCars = allCars.filter(car => 
        targetCars.some(target => car.name.toLowerCase().includes(target.toLowerCase()))
      );
      
      // Urutkan sesuai targetCars
      const sortedCars = targetCars.map(target => 
        filteredCars.find(car => car.name.toLowerCase().includes(target.toLowerCase()))
      ).filter(car => car); // Hapus yang undefined
      
      setCars(sortedCars);
      
    } catch (err) {
      console.error('Failed to fetch cars:', err);
      setError('Gagal memuat data mobil');
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
      <section className="py-20 md:py-28 bg-white px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">OUR FLEET</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: "'Syne', sans-serif" }}>
              Popular Car Models
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Choose your favorite car from our best collection
            </p>
          </div>
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 md:py-28 bg-white px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">OUR FLEET</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: "'Syne', sans-serif" }}>
              Popular Car Models
            </h2>
          </div>
          <div className="text-center py-12 text-red-500">
            <p>{error}</p>
            <button 
              onClick={fetchData}
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-white px-5 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">OUR FLEET</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: "'Syne', sans-serif" }}>
            Popular Car Models
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Choose your favorite car from our best collection
          </p>
        </div>

        {/* Car Cards Grid - 2 kolom di tablet, 3 kolom di desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div 
              key={car.id} 
              className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100 hover:shadow-lg transition group"
            >
              {/* Gambar Mobil */}
              <Link to={`/car/${car.id}`} className="block overflow-hidden bg-slate-100">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                />
              </Link>
              
              {/* Informasi Mobil */}
              <div className="p-5">
                <Link to={`/car/${car.id}`}>
                  <h3 className="text-xl font-bold mb-3 hover:text-orange-500 transition">{car.name}</h3>
                </Link>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-600 font-medium text-sm">TEMPAT DUDUK</span>
                    <span className="font-semibold text-slate-800">{car.seats} Kursi</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-600 font-medium text-sm">TRANSMISI</span>
                    <span className="font-semibold text-slate-800">
                      {car.transmission === 'Auto' ? 'Automatic' : car.transmission === 'Manual' ? 'Manual' : car.transmission}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-600 font-medium text-sm">BAGASI</span>
                    <span className="font-semibold text-slate-800">{car.bags} Koper</span>
                  </div>
                </div>
                
                {/* Harga */}
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-sm">Harga/Hari</span>
                    <span className="text-xl font-bold text-orange-600">{formatPrice(car.price_per_day)}</span>
                  </div>
                </div>
                
                {/* Tombol Sewa */}
                <Link to={`/car/${car.id}`}>
                  <button className="w-full py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ background: '#0B1437' }}>
                    Sewa Sekarang
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <div className="text-center mt-12">
          <Link 
            to="/fleet-price"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-orange-200 transition-colors"
          >
            Lihat Semua Mobil ({cars.length}+ models) →
          </Link>
        </div>
      </div>
    </section>
  );
}