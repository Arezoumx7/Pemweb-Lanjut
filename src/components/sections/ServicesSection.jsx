import { useState } from 'react';

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Bagaimana cara booking mobil?',
      answer: 'Booking sangat mudah dan cepat. Lihat armada kami secara online, pilih mobil favorit Anda, dan selesaikan pemesanan melalui WhatsApp atau telepon. Anda juga bisa menghubungi kami langsung untuk bantuan.'
    },
    {
      id: 2,
      question: 'Apakah mobil bisa diantar ke lokasi saya?',
      answer: 'Ya, kami menyediakan layanan antar jemput mobil ke rumah, hotel, atau kantor Anda. Tersedia layanan Door-to-Door Delivery dengan biaya yang terjangkau.'
    },
    {
      id: 3,
      question: 'Berapa minimal durasi sewa?',
      answer: 'Minimal durasi sewa adalah 1 hari. Untuk sewa mingguan atau bulanan, tersedia harga khusus yang bisa Anda tanyakan langsung ke customer service kami.'
    },
    {
      id: 4,
      question: 'Apakah asuransi termasuk dalam harga sewa?',
      answer: 'Ya, setiap penyewaan sudah termasuk asuransi komprehensif untuk perlindungan tabrakan dan pencurian. Anda dapat berkendara dengan tenang dan aman.'
    },
    {
      id: 5,
      question: 'Dokumen apa saja yang diperlukan untuk sewa mobil?',
      answer: 'Dokumen yang diperlukan adalah KTP (Kartu Tanda Penduduk) dan SIM (Surat Izin Mengemudi) yang masih berlaku. Untuk tamu asing, paspor juga diperlukan.'
    },
    {
      id: 6,
      question: 'Apakah ada deposit yang diperlukan?',
      answer: 'Ya, deposit keamanan diperlukan untuk setiap penyewaan. Deposit akan dikembalikan setelah mobil dikembalikan dalam kondisi baik tanpa kerusakan.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-white px-5 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">ADA PERTANYAAN?</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: "'Syne', sans-serif" }}>
            Kami Siap Menjawab!
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Berikut adalah pertanyaan yang paling sering diajukan tentang layanan rental mobil kami.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Pertanyaan 1: Cara Booking */}
          <div className="mb-6 border-b border-slate-100 pb-4">
            <button
              onClick={() => toggleFaq(0)}
              className="flex justify-between items-center w-full text-left py-3 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-orange-500 font-bold text-xl">📌</span>
                <h3 className="font-semibold text-lg text-slate-800 group-hover:text-orange-500 transition">
                  Bagaimana cara booking mobil?
                </h3>
              </div>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openIndex === 0 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === 0 && (
              <div className="mt-3 pl-9 pr-4">
                <p className="text-slate-600 leading-relaxed">
                  Booking sangat mudah dan cepat. Lihat armada kami secara online, pilih mobil favorit Anda, 
                  dan selesaikan pemesanan melalui WhatsApp atau telepon. Anda juga bisa menghubungi kami langsung untuk bantuan.
                </p>
              </div>
            )}
          </div>

          {/* Pertanyaan 2: Antar Lokasi */}
          <div className="mb-6 border-b border-slate-100 pb-4">
            <button
              onClick={() => toggleFaq(1)}
              className="flex justify-between items-center w-full text-left py-3 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-blue-500 font-bold text-xl">🚗</span>
                <h3 className="font-semibold text-lg text-slate-800 group-hover:text-orange-500 transition">
                  Apakah mobil bisa diantar ke lokasi saya?
                </h3>
              </div>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openIndex === 1 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === 1 && (
              <div className="mt-3 pl-9 pr-4">
                <p className="text-slate-600 leading-relaxed">
                  Ya, kami menyediakan layanan antar jemput mobil ke rumah, hotel, atau kantor Anda. 
                  Tersedia layanan Door-to-Door Delivery dengan biaya yang terjangkau.
                </p>
              </div>
            )}
          </div>

          {/* Pertanyaan 3: Minimal Sewa */}
          <div className="mb-6 border-b border-slate-100 pb-4">
            <button
              onClick={() => toggleFaq(2)}
              className="flex justify-between items-center w-full text-left py-3 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-green-500 font-bold text-xl">⏱️</span>
                <h3 className="font-semibold text-lg text-slate-800 group-hover:text-orange-500 transition">
                  Berapa minimal durasi sewa?
                </h3>
              </div>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openIndex === 2 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === 2 && (
              <div className="mt-3 pl-9 pr-4">
                <p className="text-slate-600 leading-relaxed">
                  Minimal durasi sewa adalah 1 hari/24jam. Untuk sewa mingguan atau bulanan, 
                  tersedia harga khusus yang bisa Anda tanyakan langsung ke customer service kami.
                </p>
              </div>
            )}
          </div>

          {/* Pertanyaan 4: Asuransi */}
          <div className="mb-6 border-b border-slate-100 pb-4">
            <button
              onClick={() => toggleFaq(3)}
              className="flex justify-between items-center w-full text-left py-3 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-red-500 font-bold text-xl">🛡️</span>
                <h3 className="font-semibold text-lg text-slate-800 group-hover:text-orange-500 transition">
                  Apakah asuransi termasuk dalam harga sewa?
                </h3>
              </div>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openIndex === 3 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === 3 && (
              <div className="mt-3 pl-9 pr-4">
                <p className="text-slate-600 leading-relaxed">
                  Ya, setiap penyewaan sudah termasuk asuransi komprehensif untuk perlindungan tabrakan dan pencurian. 
                  Anda dapat berkendara dengan tenang dan aman.
                </p>
              </div>
            )}
          </div>

          {/* Pertanyaan 5: Dokumen */}
          <div className="mb-6 border-b border-slate-100 pb-4">
            <button
              onClick={() => toggleFaq(4)}
              className="flex justify-between items-center w-full text-left py-3 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-purple-500 font-bold text-xl">📄</span>
                <h3 className="font-semibold text-lg text-slate-800 group-hover:text-orange-500 transition">
                  Dokumen apa saja yang diperlukan untuk sewa mobil?
                </h3>
              </div>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openIndex === 4 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === 4 && (
              <div className="mt-3 pl-9 pr-4">
                <p className="text-slate-600 leading-relaxed">
                  Dokumen yang diperlukan adalah KTP (Kartu Tanda Penduduk) dan SIM (Surat Izin Mengemudi) yang masih berlaku. 
                  Untuk tamu asing, paspor juga diperlukan.
                </p>
              </div>
            )}
          </div>

          {/* Pertanyaan 6: Deposit */}
          <div className="mb-6 border-b border-slate-100 pb-4">
            <button
              onClick={() => toggleFaq(5)}
              className="flex justify-between items-center w-full text-left py-3 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-yellow-500 font-bold text-xl">💰</span>
                <h3 className="font-semibold text-lg text-slate-800 group-hover:text-orange-500 transition">
                  Apakah ada deposit yang diperlukan?
                </h3>
              </div>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openIndex === 5 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === 5 && (
              <div className="mt-3 pl-9 pr-4">
                <p className="text-slate-600 leading-relaxed">
                  Ya, deposit keamanan diperlukan untuk setiap penyewaan. Deposit akan dikembalikan setelah mobil 
                  dikembalikan dalam kondisi baik tanpa kerusakan.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}