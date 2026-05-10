import { useState, useEffect } from 'react'

const fmt = (d) => d.toISOString().split('T')[0]

export default function BookingWidget() {
  const [driveWithDriver, setDriveWithDriver] = useState(false)
  const [sameLocation, setSameLocation] = useState(false)
  const [searching, setSearching] = useState(false)
  const [pickupDate, setPickupDate] = useState('')
  const [dropoffDate, setDropoffDate] = useState('')

  useEffect(() => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    setPickupDate(fmt(today))
    setDropoffDate(fmt(tomorrow))
  }, [])

  const handleSearch = () => {
    setSearching(true)
    setTimeout(() => {
      setSearching(false)
      document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })
    }, 1600)
  }

  return (
    <>
      <h2 className="mb-5" style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#0B1437' }}>
        Find Your Car
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Pick-up Location */}
        <div className="sm:col-span-2">
          <p className="input-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            Pick-Up Location
          </p>
          <input type="text" className="input-field" placeholder="e.g. Bandung — Husein Sastranegara" />
        </div>

        {/* Drop-off Location */}
        <div className="sm:col-span-2">
          <p className="input-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4A5AA8" strokeWidth="2.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            Drop-Off Location
            <label className="ml-auto flex items-center gap-1.5 cursor-pointer text-xs" style={{ color: '#94A3B8', fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>
              <input
                type="checkbox"
                className="w-3 h-3 accent-orange-500"
                checked={sameLocation}
                onChange={e => setSameLocation(e.target.checked)}
              />
              Same as pick-up
            </label>
          </p>
          <input
            type="text"
            className="input-field"
            placeholder="e.g. Jakarta — Soekarno-Hatta"
            disabled={sameLocation}
            style={{ opacity: sameLocation ? 0.45 : 1 }}
          />
        </div>

        {/* Pick-up Date */}
        <div>
          <p className="input-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Pick-Up Date
          </p>
          <input type="date" className="input-field" value={pickupDate} onChange={e => setPickupDate(e.target.value)} />
        </div>

        {/* Drop-off Date */}
        <div>
          <p className="input-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4A5AA8" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Drop-Off Date
          </p>
          <input type="date" className="input-field" value={dropoffDate} onChange={e => setDropoffDate(e.target.value)} />
        </div>

        {/* Pick-up Time */}
        <div>
          <p className="input-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            Pick-Up Time
          </p>
          <input type="time" className="input-field" defaultValue="09:00" />
        </div>

        {/* Drop-off Time */}
        <div>
          <p className="input-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4A5AA8" strokeWidth="2.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            Drop-Off Time
          </p>
          <input type="time" className="input-field" defaultValue="18:00" />
        </div>

      </div>

      {/* Drive Mode Toggle */}
      <div className="mt-5 flex items-center justify-between p-4 rounded-xl" style={{ background: '#F1F5F9' }}>
        <div>
          <p className="text-sm font-semibold" style={{ color: '#0B1437' }}>Drive Mode</p>
          <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>
            {driveWithDriver ? 'With Driver selected — chauffeur included' : 'Self-Drive selected'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium" style={{ color: '#94A3B8' }}>Self-Drive</span>
          <div
            className={`toggle-track ${driveWithDriver ? 'active' : ''}`}
            onClick={() => setDriveWithDriver(!driveWithDriver)}
          >
            <div className="toggle-thumb" />
          </div>
          <span className="text-xs font-medium" style={{ color: '#94A3B8' }}>With Driver</span>
        </div>
      </div>

      {/* Search Button */}
      <button className="search-btn mt-5" onClick={handleSearch} disabled={searching}>
        {searching ? (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="animate-spin">
              <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" opacity=".3"/>
              <path d="M21 12a9 9 0 0 1-9 9"/>
            </svg>
            Searching...
          </>
        ) : (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            Search Available Cars
          </>
        )}
      </button>
    </>
  )
}
