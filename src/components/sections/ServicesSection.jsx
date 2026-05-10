import { services } from '../../data/fleet'

const ServiceIcons = {
  shield: (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  home: (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  clock: (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  ),
  dollar: (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  map: (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  users: (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 px-5 md:px-8 lg:px-10" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style={{ background: '#EEF0F8', color: '#4A5AA8' }}>
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Syne',sans-serif", color: '#0B1437', letterSpacing: '-.02em' }}>
            Everything You Need,<br />Nothing You Don't
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <div className="step-card" key={service.id}>
              <div className="step-icon-wrap" style={{ background: service.iconBg }}>
                {ServiceIcons[service.icon]?.(service.iconColor)}
              </div>
              <h3 className="font-bold text-base mb-2" style={{ fontFamily: "'Syne',sans-serif", color: '#0B1437' }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B', fontWeight: 300 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
