import { stats } from '../../data/fleet'

export default function StatsStrip() {
  return (
    <section className="py-16 md:py-20 bg-white px-5 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Optional: Top border to separate from previous section */}
        <div className="w-full h-px bg-slate-100 mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => {
            // Logic to separate the number from symbols (+, ★) for better styling
            const valueStr = stat.value.toString()
            const number = valueStr.replace(/[^0-9.]/g, '')
            const suffix = valueStr.replace(/[0-9.]/g, '')

            return (
              <div key={stat.label} className="group">
                <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 transition-colors" style={{ fontFamily: "'Syne', sans-serif" }}>
                  <span>{number}</span>
                  {suffix && (
                    <span className="ml-1 text-orange-500 group-hover:text-orange-600 transition-colors">
                      {suffix}
                    </span>
                  )}
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* Optional: Bottom border to separate from next section */}
        <div className="w-full h-px bg-slate-100 mt-16" />
      </div>
    </section>
  )
}