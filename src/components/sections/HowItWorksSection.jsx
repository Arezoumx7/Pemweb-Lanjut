import { steps } from '../../data/fleet'

const StepIcons = {
  grid: (c) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  file: (c) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  pin: (c) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 2C6.48 2 2 6.48 2 10c0 5.52 10 12 10 12S22 15.52 22 10c0-3.87-3.13-7-7-7z"/></svg>,
}

export default function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 px-5 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: "'Syne', sans-serif" }}>Cara Kerjanya</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mx-auto mb-5">
              {StepIcons.grid('#0B1437')}
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Pilih Kendaraan Anda</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
              Pilih mobil favorit dari berbagai merek seperti Toyota, Honda, Mitsubishi, dan Daihatsu. Filter berdasarkan kategori SUV, MPV, Sedan, atau Hatchback sesuai kebutuhan Anda.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mx-auto mb-5">
              {StepIcons.file('#0B1437')}
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Upload Dokumen</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
              Kirim SIM / KTP Anda secara aman melalui kontak kami. Verifikasi dalam hitungan menit — tanpa perlu datang ke cabang.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mx-auto mb-5">
              {StepIcons.pin('#0B1437')}
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Mulai Perjalanan</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
              Kendaraan diantar ke rumah Anda atau ambil di kantor kami. Dapatkan kunci dan mulai petualangan Anda — dukungan 24/7 tersedia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}