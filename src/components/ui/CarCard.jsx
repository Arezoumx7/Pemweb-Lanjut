export default function CarCard({ car }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      i < rating ? '★' : '☆'
    )).join('')
  }

  return (
    <div className="car-card">
      <div style={{ overflow: 'hidden', height: 190 }}>
        <img className="car-card-img" src={car.image} alt={car.name} />
      </div>

      {/* Badges */}
      {car.badges.map((badge, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{ top: 12, [idx === 0 ? 'left' : 'right']: 12 }}
        >
          <span className="badge" style={badge.style}>{badge.label}</span>
        </div>
      ))}

      <div className="p-5">
        <h3 className="font-bold text-base" style={{ fontFamily: "'Syne',sans-serif", color: '#0B1437' }}>
          {car.name}
        </h3>
        <p className="text-xs mt-0.5" style={{ color: '#94A3B8' }}>{car.subtitle}</p>
        <div className="flex items-center gap-1 mt-1.5">
          <span className="stars text-xs">{renderStars(car.rating)}</span>
          <span className="text-xs" style={{ color: '#94A3B8' }}>({car.reviews} reviews)</span>
        </div>

        <div className="flex items-center gap-4 mt-4 py-3.5 border-t border-b" style={{ borderColor: '#F1F5F9' }}>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: '#64748B' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            {car.seats} Seats
          </div>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: '#64748B' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
            {car.transmission}
          </div>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: '#64748B' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12H2M12 2l10 10-10 10"/></svg>
            {car.bags} Bags
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-xl font-bold" style={{ fontFamily: "'Syne',sans-serif", color: '#0B1437' }}>
              {car.price}
            </span>
            <span className="text-xs" style={{ color: '#94A3B8' }}>/day</span>
          </div>
          <button className="book-btn">Book Now</button>
        </div>
      </div>
    </div>
  )
}
