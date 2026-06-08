import { Link } from 'react-router-dom';

export default function StatsStrip() {
  return (
    <section className="py-20 md:py-28 bg-white px-5 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner dengan Gambar + Overlay Teks */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          {/* Gambar Background */}
          <img 
            src="/image/cd8261e888599f32a3d18b8f9ed4354b.jpg" 
            alt="Luxury Car"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
          
          {/* Overlay Gelap agar teks lebih jelas */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Konten Teks di atas gambar */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
            <h2 
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Luxury Wheels for <br />
              Your Next Journey!
            </h2>
            <Link to="/fleet-price">
              <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-all hover:scale-105 transform duration-300 shadow-lg">
                Book Now
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}