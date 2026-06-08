import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { carAPI } from '../services/api';

export default function FleetPricePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cars, setCars] = useState([]);
  const [categories, setCategories] = useState([{ value: 'all', label: 'All Cars' }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data dari backend
  useEffect(() => {
    fetchData();
    
    // Refresh data saat tab/window menjadi aktif kembali
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchData();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Ambil data mobil dan kategori secara paralel
      const [carsData, categoriesData] = await Promise.all([
        carAPI.getAll(),
        carAPI.getCategories()
      ]);
      
      // Debug: lihat data transmission dari API
      console.log('🚗 Data dari API:', carsData.data);
      console.log('⚙️ Transmission values:', carsData.data.map(car => ({ 
        id: car.id,
        name: car.name, 
        transmission: car.transmission 
      })));
      
      setCars(carsData.data);
      
      // Format categories untuk filter
      const categoryList = [
        { value: 'all', label: 'All Cars' },
        ...categoriesData.data.map(cat => ({
          value: cat.category,
          label: cat.category.charAt(0).toUpperCase() + cat.category.slice(1)
        }))
      ];
      setCategories(categoryList);
      
    } catch (err) {
      console.error('Failed to fetch data:', err);
      setError('Gagal memuat data mobil. Silakan refresh halaman.');
    } finally {
      setLoading(false);
    }
  };

  // Filter mobil berdasarkan category & search
  const filteredCars = cars.filter(car => {
    const matchCategory = activeCategory === 'all' || car.category === activeCategory;
    const matchSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-slate-600">Memuat data mobil...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={fetchData}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20" style={{ background: '#F8FAFC' }}>
      {/* Hero Section */}
      <div className="bg-linear-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
            Daftar Harga Sewa Mobil
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Pilih mobil favorit Anda dengan harga terbaik. Data langsung dari database.
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

        {/* Info Jumlah Mobil */}
        <div className="mb-4 text-sm text-slate-500">
          Menampilkan {filteredCars.length} dari {cars.length} mobil
        </div>

        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100 hover:shadow-lg transition group">
              <Link to={`/car/${car.id}`} className="block overflow-hidden bg-slate-100">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                />
              </Link>
              
              <div className="p-5">
                <Link to={`/car/${car.id}`}>
                  <h3 className="text-2xl font-bold mb-3 hover:text-orange-500 transition">{car.name}</h3>
                </Link>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-600 font-medium">TEMPAT DUDUK</span>
                    <span className="font-semibold text-slate-800">{car.seats} Kursi</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-600 font-medium">TRANSMISI</span>
                    <span className="font-semibold text-slate-800">
                      {car.transmission === 'Auto' ? 'Automatic' : car.transmission === 'Manual' ? 'Manual' : car.transmission}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-600 font-medium">BAGASI</span>
                    <span className="font-semibold text-slate-800">{car.bags} Koper</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Harga/Hari</span>
                    <span className="text-2xl font-bold text-orange-600">{formatPrice(car.price_per_day)}</span>
                  </div>
                </div>
                
                <Link to={`/car/${car.id}`}>
                  <button className="w-full py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ background: '#0B1437' }}>
                    Sewa Sekarang
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-slate-500">Tidak ada mobil yang ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
}