import { steps } from '../../data/fleet'

const StepIcons = {
  grid: (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
  file: (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  pin: (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <circle cx="12" cy="10" r="3"/>
      <path d="M12 2C6.48 2 2 6.48 2 10c0 5.52 10 12 10 12S22 15.52 22 10c0-3.87-3.13-7-7-7z"/>
    </svg>
  ),
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-5 md:px-8 lg:px-10" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Steps */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style={{ background: '#EEF0F8', color: '#4A5AA8' }}>
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "'Syne',sans-serif", color: '#0B1437', letterSpacing: '-.02em' }}>
              On the Road in<br />3 Easy Steps
            </h2>
            <p className="mb-10 text-base" style={{ color: '#64748B', fontWeight: 300 }}>
              No paperwork nightmares, no hidden fees. Just a smooth experience from booking to keys in hand.
            </p>

            <div className="flex flex-col gap-6">
              {steps.map(step => (
                <div className="step-card" data-step={step.step} key={step.step}>
                  <div className="flex items-start gap-5">
                    <div className="step-icon-wrap" style={{ background: step.iconBg }}>
                      {StepIcons[step.icon]?.(step.iconColor)}
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1" style={{ fontFamily: "'Syne',sans-serif", color: '#0B1437' }}>
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#64748B', fontWeight: 300 }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual + Testimonial */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: 420 }}>
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=85&auto=format&fit=crop"
                alt="Driving"
                className="w-full h-full object-cover"
                style={{ transform: 'scale(1.02)' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,transparent 50%,rgba(11,20,55,.75) 100%)' }} />
            </div>

            {/* Floating Testimonial Card */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 p-5 rounded-2xl shadow-xl" style={{ background: '#fff', minWidth: 220 }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-lg">😊</div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#0B1437' }}>Budi Santoso</p>
                  <p className="text-xs" style={{ color: '#94A3B8' }}>Jakarta → Bandung</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>
                "Seamless booking, spotless Fortuner, driver was on time. <strong style={{ color: '#0B1437' }}>10/10 will book again!</strong>"
              </p>
              <div className="flex items-center gap-1 mt-2.5">
                <span className="stars text-sm">★★★★★</span>
              </div>
            </div>

            {/* Floating Stat Card */}
            <div className="absolute -top-4 -right-4 md:-right-6 p-4 rounded-2xl shadow-xl flex items-center gap-3" style={{ background: '#0B1437' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(249,115,22,.2)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white" style={{ fontFamily: "'Syne',sans-serif" }}>100% Safe</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,.5)' }}>All cars inspected</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
