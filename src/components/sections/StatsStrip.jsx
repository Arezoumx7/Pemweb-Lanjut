import { stats } from '../../data/fleet'

export default function StatsStrip() {
  return (
    <div className="stat-strip py-5 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
              {stat.value.replace('+', '')}{stat.value.includes('+') && <span style={{ color: '#F97316' }}>+</span>}
              {stat.value.includes('★') && <span style={{ color: '#F97316' }}>★</span>}
            </p>
            <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,.5)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
