import { useState } from 'react'
import './HeroSection.css'

export default function HeroSection() {
  const featuredCars = [
    { 
      brand: 'Toyota', 
      image: 'https://i.pinimg.com/736x/33/ed/f5/33edf50419b40c0d3716f55954afcae9.jpg',
      logo: 'https://img.favpng.com/14/22/2/toyota-corolla-car-toyota-rav4-honda-logo-png-favpng-sUVgZNgBdtF3kDk3RyFeFyqZt.jpg'
    },
    { 
      brand: 'Honda', 
      image: 'https://i.pinimg.com/1200x/ba/44/09/ba4409fd522e221a1e0b51e33238a459.jpg',
      logo: 'https://img.cintamobil.com/2020/10/07/ZXn5Pos1/logo-honda-mobil-1-c22e.jpg'
    },
    { 
      brand: 'Mitsubishi',  
      image: 'https://i.pinimg.com/736x/0d/16/f2/0d16f2a497de0f5ccf682b2d1ae46af5.jpg',
      logo: 'https://thumbs.dreamstime.com/b/web-141701114.jpg'
    },
    { 
      brand: 'Daihatsu',  
      image: 'https://i.pinimg.com/1200x/b3/17/ab/b317ab8121047731fefd71f1d1343277.jpg',
      logo: 'https://download.logo.wine/logo/Daihatsu/Daihatsu-Logo.wine.png'
    },
  ]

  const [selectedCarIndex, setSelectedCarIndex] = useState(0)

  const handleBrandClick = (index) => {
    setSelectedCarIndex(index)
  }

  return (
    <section id="home" className="bg-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text */}
          <div className="space-y-6">
            <h1 className="hero-title text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]" style={{ fontFamily: "'Syne', sans-serif" }}>
              Premium Car Rental <br /> in Bandung
            </h1>
            <p className="hero-description text-lg text-slate-600 max-w-md leading-relaxed">
              Don't deny yourself the pleasure of driving the best cars from Toyota, Honda, Mitsubishi, and Daihatsu. Click the brand logo to see our fleet.
            </p>
            <button className="hero-button book-now-btn px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors">
              Book Now
            </button>
          </div>

          {/* Right: Car Image with Transition */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg" style={{ minHeight: '320px' }}>
              {featuredCars.map((car, idx) => (
                <img 
                  key={idx}
                  src={car.image} 
                  alt={`${car.brand} ${car.model}`}
                  className={`hero-car-image w-full object-contain drop-shadow-xl absolute top-0 left-0 ${
                    idx === selectedCarIndex ? 'active' : 'inactive'
                  }`}
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 'auto'
                  }}
                />
              ))}
              {/* Spacer to maintain height */}
              <div style={{ paddingBottom: '66%' }} />
            </div>
          </div>
        </div>

        {/* Brand Logos Strip - Interactive */}
        <div className="brand-strip mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
            Choose Your Brand
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10">
            {featuredCars.map((car, idx) => {
              const isSelected = idx === selectedCarIndex
              
              return (
                <button
                  key={`${car.brand}-${car.model}-${idx}`}
                  onClick={() => handleBrandClick(idx)}
                  className={`brand-logo-btn group flex flex-col items-center gap-3 transition-all duration-300 ${
                    isSelected ? 'active opacity-100' : 'opacity-60 hover:opacity-80'
                  }`}
                  aria-label={`View ${car.brand} ${car.model}`}
                  title={`View ${car.brand} ${car.model}`}
                >
                  <div className={`logo-wrapper p-2 rounded-xl transition-all duration-300 ${
                    isSelected ? 'bg-slate-100 shadow-lg scale-110' : 'hover:bg-slate-50'
                  }`}>
                    <img 
                      src={car.logo} 
                      alt={`${car.brand} logo`}
                      className={`brand-logo-img w-12 h-12 md:w-14 md:h-14 object-contain transition-all duration-300 ${
                        !isSelected ? 'grayscale' : ''
                      }`}
                      onError={(e) => {
                        // Fallback jika logo tidak bisa di-load
                        e.target.src = 'https://via.placeholder.com/56?text=' + car.brand.charAt(0)
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <p className={`text-xs font-bold transition-colors duration-300 ${
                      isSelected ? 'text-slate-900' : 'text-slate-500'
                    }`}>
                      {car.brand}
                    </p>
                    <p className="text-[10px] text-slate-400">{car.model}</p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}