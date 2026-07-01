import React, { useState, useEffect, useRef } from 'react'
import PublicNavbar from '../components/PublicNavbar'
import {
  MonitorCog,
  Layers,
  Settings2,
  Code2,
  ChevronLeft,
  ChevronRight,
  Phone,
  MapPin,
  Mail,
  MousePointer,
  Quote,
  Camera,
  Calendar,
  Users,
} from 'lucide-react'

// ─── DATA ────────────────────────────────────────────────────────────────────

// Setiap slide hero punya: gambar background, kata highlight (di-block biru), dan sub-headline.
// Ketiganya berganti bersamaan.
const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80',
    highlight: 'Keberlanjutan',
    subline: 'Apapun itu, semangat keberlanjutan amat penting tuk masa depan.',
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80',
    highlight: 'Inovasi',
    subline: 'Inovasi digital untuk transformasi bisnis dan ekosistem bangsa.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
    highlight: 'Kolaborasi',
    subline: 'Bersama kita wujudkan Indonesia emas 2045 melalui kolaborasi nyata.',
  },
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80',
    highlight: 'Kemitraan',
    subline: 'Platform tunggal untuk potensi, program, dan kemitraan strategis.',
  },
]

const partnershipBoxes = [
  {
    icon: MonitorCog,
    title: 'IT CONSULTANT',
    desc: 'Layanan konsultasi IT profesional untuk bisnis yang ingin memanfaatkan teknologi secara strategis demi pertumbuhan dan efisiensi operasional.',
  },
  {
    icon: Layers,
    title: 'SYSTEM INTEGRATION',
    desc: 'Memastikan komponen perangkat lunak dan keras dalam ekosistem IT bisnis Anda bekerja secara harmonis dan terpadu.',
  },
  {
    icon: Settings2,
    title: 'RESOURCE MANAGEMENT',
    desc: 'Layanan konsultasi dan implementasi strategis untuk mengalokasikan sumber daya secara efektif demi efisiensi biaya maksimal.',
  },
  {
    icon: Code2,
    title: 'SOFTWARE DEVELOPMENT',
    desc: 'Pengembangan solusi perangkat lunak kustom yang disesuaikan dengan kebutuhan spesifik dan visi bisnis klien.',
  },
]

const events = [
  {
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    title: 'Workshop Transformasi Digital',
    date: '10 Agustus 2025',
    location: 'Jakarta Selatan',
    quota: '80 Peserta',
    desc: 'Pelajari strategi transformasi digital terkini bersama para praktisi dan pakar industri terpilih.',
  },
  {
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    title: 'Summit INOTAL 2025',
    date: '22 September 2025',
    location: 'Jakarta Convention Center',
    quota: '300 Peserta',
    desc: 'Pertemuan tahunan para mitra strategis untuk membahas inovasi dan peluang kolaborasi ke depan.',
  },
  {
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    title: 'Bootcamp Kepemimpinan Pemuda',
    date: '5 Oktober 2025',
    location: 'Bandung, Jawa Barat',
    quota: '60 Peserta',
    desc: 'Program intensif pengembangan jiwa kepemimpinan bagi generasi muda potensial Indonesia.',
  },
  {
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    title: 'Forum Keberlanjutan Bisnis',
    date: '18 Oktober 2025',
    location: 'Surabaya, Jawa Timur',
    quota: '120 Peserta',
    desc: 'Diskusi mendalam mengenai praktik bisnis berkelanjutan dan dampak jangka panjang bagi ekosistem.',
  },
  {
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    title: 'Pelatihan AI untuk UMKM',
    date: '2 November 2025',
    location: 'Yogyakarta',
    quota: '100 Peserta',
    desc: 'Memberdayakan pelaku usaha kecil dan menengah dengan kecerdasan buatan yang praktis dan terjangkau.',
  },
  {
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    title: 'Gala Dinner Mitra 2025',
    date: '15 Desember 2025',
    location: 'Jakarta Pusat',
    quota: '250 Undangan',
    desc: 'Malam apresiasi bagi seluruh mitra dan alumni yang telah berkontribusi nyata bagi ekosistem INOTAL.',
  },
]

const testimonials = [
  {
    quote: 'INOTAL membuka wawasan saya tentang bagaimana teknologi dan kolaborasi bisa berjalan beriringan untuk membangun Indonesia yang lebih maju.',
    name: 'Andi Prasetyo',
    role: 'CEO, TechNusa Ventures',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    quote: 'Program kemitraan INOTAL memberikan saya akses ke jaringan yang tidak ternilai. Dalam 6 bulan, bisnis kami berkembang pesat berkat ekosistem ini.',
    name: 'Sari Dewi',
    role: 'Founder, GreenLoop ID',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    quote: 'Sebagai pemuda yang baru terjun ke dunia bisnis, INOTAL hadir sebagai mentor sekaligus jembatan menuju peluang yang lebih besar.',
    name: 'Bima Sakti',
    role: 'Direktur, Inovasi Muda',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    quote: 'Kualitas program pelatihan INOTAL jauh melampaui ekspektasi kami. Tim profesional dan kurikulumnya relevan.',
    name: 'Rina Melati',
    role: 'VP Strategy, DataCore Asia',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
  },
]

const allPartners = [
  'Kementerian Kominfo', 'Kementerian BUMN', 'RSUP Fatmawati', 'RS Siloam Group',
  'Telkom Indonesia', 'Bank BRI', 'Pertamina', 'PLN', 'Bulog', 'Kemenkes RI',
  'Gojek', 'Tokopedia', 'Traveloka', 'OVO', 'Dana', 'Shopee', 'Blibli', 'Lazada'
];

const actionBoxes = [
  {
    title: 'Dunia Cepat Berubah',
    desc: 'Perubahan teknologi dan pasar terjadi begitu cepat — mereka yang adaptif akan memimpin gelombang berikutnya.',
    color: 'bg-sky-50 border-sky-200',
    textColor: 'text-sky-700',
  },
  {
    title: 'Blue Ocean',
    desc: 'Masih banyak ruang tak terjamah di ekosistem digital Indonesia. Jadilah yang pertama mengisinya bersama INOTAL.',
    color: 'bg-emerald-50 border-emerald-200',
    textColor: 'text-emerald-700',
  },
  {
    title: 'Ekonomi Inovasi Bikin Aksi',
    desc: 'Inovasi bukan sekadar ide — ia adalah aksi nyata yang menggerakkan roda ekonomi dan menciptakan dampak sosial.',
    color: 'bg-violet-50 border-violet-200',
    textColor: 'text-violet-700',
  },
  {
    title: 'Momentum Pergerakan',
    desc: 'Saat ini adalah waktu terbaik untuk bergerak. Bergabunglah dengan komunitas pemuda yang tidak menunggu.',
    color: 'bg-amber-50 border-amber-200',
    textColor: 'text-amber-700',
  },
  {
    title: 'Potensi Bangsa',
    desc: 'Indonesia memiliki 270 juta jiwa dengan semangat luar biasa. INOTAL hadir untuk mengoptimalkan setiap potensi itu.',
    color: 'bg-rose-50 border-rose-200',
    textColor: 'text-rose-700',
  },
  {
    title: 'Investasi Masa Depan',
    desc: 'Bergabung hari ini adalah investasi terbaik untuk karier, jaringan, dan dampak yang akan kamu rasakan bertahun-tahun ke depan.',
    color: 'bg-teal-50 border-teal-200',
    textColor: 'text-teal-700',
  },
]

const newsItems = [
  {
    category: 'Kabar Utama',
    title: 'INOTAL Resmi Jalin Kemitraan dengan 3 Kementerian Republik Indonesia',
    excerpt: 'Langkah bersejarah bagi ekosistem INOTAL: penandatanganan MoU dengan tiga kementerian strategis membuka peluang program nasional yang lebih luas dan berdampak bagi generasi muda.',
    img: 'https://img.magnific.com/foto-gratis/sekelompok-orang-bisnis-beragam-kerja-tim-sukses-bekerja-bersama-dengan-komputer-laptop-di-kantor_640221-492.jpg?semt=ais_hybrid&w=740&q=80',
    date: '25 Juni 2025',
  },
  {
    category: 'Prestasi Alumni',
    title: '95 Alumni INOTAL Berhasil Masuk Ekosistem Startup dan Korporasi Nasional',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80',
    date: '10 Juni 2025',
  },
  {
    category: 'Event',
    title: 'Workshop Inovasi Digital Sukses Digelar di Kota Bandung',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
    date: '5 Juni 2025',
  },
  {
    category: 'Kolaborasi',
    title: 'Peluncuran Platform INOTALHub untuk Mendukung Digitalisasi UMKM',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80',
    date: '28 Mei 2025',
  },
  {
    category: 'Insight',
    title: 'Tren Teknologi 2025: Apa yang Harus Disiapkan Pemuda Indonesia?',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
    date: '15 Mei 2025',
  }
];

const stats = [
  { value: '2021', label: 'TAHUN BERDIRI' },
  { value: '95+', label: 'ALUMNI' },
  { value: '7', label: 'PARTNERSHIP' },
  { value: '19', label: 'PROGRAM' },
]

const footerProfil = ['Tentang', 'Visi Misi', 'Kemitraan', 'Event']
const footerPartnership = ['Bergabung Sekarang', 'InotalHub Tech', 'Group & Div', 'Kontak']

// ─── SCROLL INDICATOR ────────────────────────────────────────────────────────
function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-1 animate-bounce">
      <div className="w-6 h-10 rounded-full border-2 border-white/60 flex items-start justify-center pt-1.5">
        <div className="w-1 h-2 bg-white/80 rounded-full animate-[scrollDot_1.5s_ease-in-out_infinite]" />
      </div>
      <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
    </div>
  )
}

// ─── FLOATING STAT CARD ──────────────────────────────────────────────────────
// Kartu statistik yang melayang lembut, ditempatkan di pojok-pojok hero.
function FloatingStat({ value, label, className = '', rotate = '0deg', delay = '0s' }) {
  return (
    <div
      className={`hidden sm:flex absolute z-10 flex-col items-center bg-white rounded-2xl shadow-xl px-5 py-3 min-w-[112px] ${className}`}
      style={{
        animation: `floatY 4.5s ease-in-out ${delay} infinite`,
        '--rot': rotate,
      }}
    >
      <span className="text-sky-500 text-3xl md:text-3xl font-extrabold leading-none">{value}</span>
      <span className="text-gray-500 text-xs md:text-xs font-semibold tracking-wide mt-1.5 text-center">
        {label}
      </span>
    </div>
  )
}

// ─── CAROUSEL HOOK ───────────────────────────────────────────────────────────
function useCarousel(total, perView = 1) {
  const [idx, setIdx] = useState(0)
  const maxIdx = Math.max(0, total - perView)
  const prev = () => setIdx((i) => Math.max(0, i - 1))
  const next = () => setIdx((i) => Math.min(maxIdx, i + 1))
  return { idx, setIdx, prev, next, canPrev: idx > 0, canNext: idx < maxIdx }
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function LandingPage({ onNavigate }) {
  // Navbar transparency on scroll
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hero slide index — mengontrol gambar background, subline, DAN kata highlight sekaligus
  const [heroIdx, setHeroIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroSlides.length), 5000)
    return () => clearInterval(t)
  }, [])
  const heroPrev = () => setHeroIdx((i) => (i - 1 + heroSlides.length) % heroSlides.length)
  const heroNext = () => setHeroIdx((i) => (i + 1) % heroSlides.length)

  // Event carousel
  const eventC = useCarousel(events.length, 3)
 
  const testiC = useCarousel(testimonials.length, 2)
  useEffect(() => {
    const interval = setInterval(() => {
      testiC.setIdx((currentIdx) => 
        currentIdx >= testimonials.length - 2 ? 0 : currentIdx + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  //State untuk 12 partner yang sedang tampil di layar
  const [activePartners, setActivePartners] = useState(allPartners.slice(0, 12));
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePartners(current => {
        const newPartners = [...current];
        // Pilih 1 sampai 3 kotak secara acak untuk diganti logonya
        const numChanges = Math.floor(Math.random() * 3) + 1;

        for (let i = 0; i < numChanges; i++) {
          const slotIndex = Math.floor(Math.random() * 12); // 12 adalah jumlah grid
          
          // Cari partner yang belum ada di layar saat ini
          const availablePartners = allPartners.filter(p => !newPartners.includes(p));

          if (availablePartners.length > 0) {
            const randomNew = availablePartners[Math.floor(Math.random() * availablePartners.length)];
            newPartners[slotIndex] = randomNew;
          }
        }
        return newPartners;
      });
    }, 3000); // Berubah setiap 3 detik

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.3; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(-14px) rotate(var(--rot, 0deg)); }
        }
        .marquee-track { animation: marquee 22s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        @keyframes blobMorph {
          0%   { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: scale(1) rotate(0deg); }
          50%  { border-radius: 40% 60% 70% 30% / 50% 60% 40% 50%; transform: scale(1.05) rotate(8deg); }
          100% { border-radius: 30% 70% 40% 60% / 40% 50% 60% 50%; transform: scale(0.98) rotate(-4deg); }
        }
      `}</style>

      {/* ── 1. NAVBAR ── */}
      <PublicNavbar onNavigate={onNavigate} activePage="landing" scrolled={scrolled} />

      {/* ── 2. HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* Background crossfade — bergantian sesuai heroIdx */}
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              i === heroIdx ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        {/* Floating stat cards — melayang di pojok hero */}
        <FloatingStat
          value={stats[0].value}
          label={stats[0].label}
          delay="0s"
          rotate="-6deg"
          className="top-[15%] left-4 md:left-30"
        />
        <FloatingStat
          value={stats[1].value}
          label={stats[1].label}
          delay="0.8s"
          rotate="6deg"
          className="top-[15%] right-4 md:right-30"
        />
        <FloatingStat
          value={stats[2].value}
          label={stats[2].label}
          delay="1.6s"
          rotate="4deg"
          className="bottom-[18%] left-4 md:left-36"
        />
        <FloatingStat
          value={stats[3].value}
          label={stats[3].label}
          delay="2.4s"
          rotate="-4deg"
          className="bottom-[18%] right-4 md:right-36"
        />

        {/* Left arrow */}
        <button
          onClick={heroPrev}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center transition-all"
          aria-label="Sebelumnya"
        >
          <ChevronLeft size={22} className="text-white" />
        </button>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-sky-300 text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Platform Bersatu
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            United{' '}
            <span
              key={heroIdx}
              className="inline-block bg-sky-500 px-4 py-1 rounded-xl align-middle animate-[fadeIn_0.6s_ease]"
            >
              {heroSlides[heroIdx].highlight}
            </span>
            <br />
            Platform
          </h1>

          {/* Sub-headline — berganti seiring gambar */}
          <div className="h-16 flex items-center justify-center mb-10 overflow-hidden">
            <p
              key={heroIdx}
              className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl animate-[fadeIn_0.6s_ease]"
            >
              {heroSlides[heroIdx].subline}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate?.('register')}
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-sky-900/30 text-sm"
            >
              Gabung
            </button>
            <button className="border border-white/40 hover:border-white/70 text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-sm hover:bg-white/10">
              Pelajari
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIdx(i)}
                className={`rounded-full transition-all ${
                  i === heroIdx ? 'w-6 h-2 bg-sky-400' : 'w-2 h-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={heroNext}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center transition-all"
          aria-label="Berikutnya"
        >
          <ChevronRight size={22} className="text-white" />
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <ScrollIndicator />
        </div>
      </section>

      {/* ── 3. PARTNERSHIP  */}
      <section className="px-6 py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── KOLOM KIRI: Visual (blob + foto overlap) ── */}
          <div className="order-2 lg:order-1 relative mx-auto w-full max-w-sm lg:max-w-none h-[420px] sm:h-[480px]">

            {/* Organic gradient blob — latar belakang */}
            <div
              className="absolute inset-0 m-auto w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-sky-300 via-violet-300 to-emerald-200 opacity-70 blur-2xl"
              style={{
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                animation: 'blobMorph 14s ease-in-out infinite alternate',
              }}
            />

            {/* Foto belakang — lebih besar, posisi atas-kiri */}
            <div className="absolute top-2 left-0 sm:left-4 w-[72%] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl ring-4 ring-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Tim berdiskusi dalam pertemuan strategis"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foto depan — lebih kecil, overlap kanan-bawah, melayang */}
            <div
              className="absolute bottom-2 right-0 sm:right-2 w-[58%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white"
              style={{ animation: 'floatY 5s ease-in-out infinite' }}
            >
              <img
                src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=600&q=80"
                alt="Jabat tangan kemitraan bisnis"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Chip statistik melayang — konsisten dengan gaya hero */}
            <div
              className="hidden sm:flex absolute -top-2 right-4 items-center gap-2 bg-white rounded-full shadow-lg pl-2 pr-4 py-2"
              style={{ animation: 'floatY 4.5s ease-in-out 1s infinite' }}
            >
              <span className="w-8 h-8 rounded-full bg-sky-500 text-white text-xs font-extrabold flex items-center justify-center">
                7+
              </span>
              <span className="text-gray-700 text-xs font-semibold">Partnership Aktif</span>
            </div>
          </div>

          {/* ── KOLOM KANAN: Konten & Kartu (staggered 2x2) ── */}
          <div className="order-1 lg:order-2">
            <p className="text-sky-500 text-sm font-bold tracking-[0.2em] uppercase mb-3">
              Layanan Kami
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Partnership
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md">
              Empat pilar layanan yang kami rancang untuk mendampingi transformasi
              digital bisnis Anda, dari strategi hingga eksekusi.
            </p>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Kolom kartu kiri */}
              <div className="flex flex-col gap-5">
                {partnershipBoxes.slice(0, 2).map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="mb-9 mt-2">
                      <Icon size={70} className="text-sky-500" />
                    </div>
                    <h3 className="font-bold text-sm tracking-wide text-gray-800 mb-2 uppercase">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Kolom kartu kanan — offset ke bawah */}
              <div className="flex flex-col gap-5 sm:mt-10">
                {partnershipBoxes.slice(2, 4).map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="mb-9 mt-2">
                      <Icon size={70} className="text-sky-500" />
                    </div>
                    <h3 className="font-bold text-sm tracking-wide text-gray-800 mb-2 uppercase">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. EVENT UPDATE (Carousel) ── */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-sky-500 text-sm font-bold tracking-[0.2em] uppercase mb-2">
                Agenda Terkini
              </p>
              <h2 className="text-3xl font-extrabold text-gray-900">Event Update</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={eventC.prev}
                disabled={!eventC.canPrev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-sky-400 hover:text-sky-500 disabled:opacity-30 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={eventC.next}
                disabled={!eventC.canNext}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-sky-400 hover:text-sky-500 disabled:opacity-30 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Cards window */}
          <div className="overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${eventC.idx} * (100% / 3 + 6.67px)))` }}
            >
              {events.map((ev, i) => (
                <div
                  key={i}
                  // 1. Tinggi kartu diperbesar (h-[400px] & h-[440px])
                  className="group relative flex-shrink-0 w-[calc(33.333%-14px)] h-[400px] sm:h-[440px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                >
                  {/* Background */}
                  <img
                    src={ev.img}
                    alt={ev.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />

                  {/* Gradient overlay - sedikit lebih gelap di atas/bawah agar teks putih menonjol */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 pointer-events-none" />

                  {/* Judul — Diperbesar signifikan mengikuti Foto 1 */}
                  <h3 className="absolute top-6 left-6 right-6 text-white font-extrabold text-2xl sm:text-[28px] uppercase leading-snug tracking-wide drop-shadow-lg">
                    {ev.title}
                  </h3>

                  {/* Detail — Font & ikon diperbesar, jarak antar baris dilonggarkan */}
                  <div className="absolute bottom-6 left-6 flex flex-col gap-2.5">
                    <div className="flex items-center gap-2 text-white/95 text-sm font-medium">
                      <Calendar size={16} className="text-white/80 flex-shrink-0" />
                      <span>{ev.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/95 text-sm font-medium">
                      <Users size={16} className="text-white/80 flex-shrink-0" />
                      <span>{ev.quota}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/95 text-sm font-medium">
                      <MapPin size={16} className="text-white/80 flex-shrink-0" />
                      <span>{ev.location}</span>
                    </div>
                  </div>

                  {/* Tombol — Dibuat lebih lebar, tanpa ikon, seperti di Foto 1 */}
                  <button className="absolute bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors duration-300 shadow-md">
                    Lihat
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* ── 5. SOSOK INSPIRASI (Auto Carousel) ── */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Tengah (Mengikuti Foto 1) */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1a202c] leading-tight max-w-3xl mx-auto">
              Ratusan partner di seluruh Indonesia,<br/>
              tumbuh bersama dengan penuh kepercayaan
            </h2>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(calc(-${testiC.idx} * (50% + 16px)))` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  // Responsif: di HP numpuk ke bawah, di layar besar nyamping
                  className="flex-shrink-0 w-[calc(50%-16px)] flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6"
                >
                  {/* Foto Profil */}
                  <div className="w-24 h-24 sm:w-[110px] sm:h-[110px] flex-shrink-0 rounded-[1.25rem] overflow-hidden shadow-sm bg-gray-100">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Konten Teks */}
                  <div className="flex flex-col text-center sm:text-left">
                    <p className="text-[#0f172a] text-[15px] sm:text-[17px] font-medium italic leading-relaxed mb-4">
                      {t.quote}
                    </p>
          
                    {/* Nama */}
                    <p className="font-bold text-[#0f172a] text-base">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigasi Titik (Dots) di Bawah */}
          <div className="flex items-center justify-center gap-2.5 mt-16">
            {Array.from({ length: testimonials.length - 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => testiC.setIdx(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === testiC.idx 
                    ? 'w-3.5 h-3.5 bg-[#6366f1]' // Titik aktif (warna ungu/biru)
                    : 'w-3.5 h-3.5 bg-gray-200 hover:bg-gray-300' // Titik pasif
                }`}
                aria-label={`Ke slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PARTNER KAMI (Dynamic Grid) ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-14 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a202c]">
            Bergabunglah dengan Ekosistem Kami, Akselerasi Kemitraan Anda!
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          {/* Efek Gradient Putih di Kiri & Kanan (Fade edges) */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Grid Container (2 Baris, 6 Kolom di Desktop) */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-5 relative z-0">
            {activePartners.map((partner, idx) => (
              <div
                key={idx} // Index sebagai key kontainer agar posisinya tetap statis
                className="w-full aspect-square bg-white border border-gray-50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center p-4 sm:p-6"
              >
                <span
                  key={partner}
                  className="text-gray-400 font-bold text-xs sm:text-sm text-center animate-[fadeIn_0.6s_ease-in-out]"
                >
                  {/* Jika nanti Anda punya gambar: ganti span ini dengan tag <img> */}
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. SAATNYA BERSAMA BERAKSI (Interactive Layout) ── */}
      <section className="relative px-6 py-24 bg-white overflow-hidden">
        <div
          className="absolute -top-24 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-sky-200 to-sky-100 opacity-60 blur-3xl pointer-events-none"
          style={{ borderRadius: '58% 42% 35% 65% / 55% 40% 60% 45%' }}
        />
        <div
          className="absolute top-1/3 -right-20 w-[420px] h-[420px] bg-gradient-to-bl from-sky-100 to-blue-50 opacity-70 blur-3xl pointer-events-none"
          style={{ borderRadius: '42% 58% 65% 35% / 45% 55% 40% 60%' }}
        />
        <div
          className="absolute -bottom-32 left-1/4 w-[360px] h-[360px] bg-gradient-to-tr from-sky-100 to-sky-200 opacity-50 blur-3xl pointer-events-none"
          style={{ borderRadius: '50% 50% 40% 60% / 60% 40% 60% 40%' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-sky-500 text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Mengapa Bergabung
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-5">
              Saatnya Bersama Beraksi
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Indonesia butuh pemuda generasi masa depan emas 2045.
            </p>
          </div>

          {/* Grid Layout: Kiri (3 kotak), Tengah (Gambar Tumpuk), Kanan (3 kotak) */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4">
            
            {/* Kolom Kiri */}
            <div className="flex flex-col gap-6 w-full lg:w-[32%]">
              {actionBoxes.slice(0, 3).map((box, idx) => (
                <div
                  key={box.title}
                  className="group flex gap-5 items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-[#1a202c] transition-all duration-300 cursor-pointer"
                >
                  <span className="text-gray-300 group-hover:text-white font-bold text-3xl transition-colors duration-300">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-white mb-2 transition-colors duration-300">
                      {box.title}
                    </h3>
                    <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                      {box.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Kolom Tengah (3 Foto Bertumpuk) */}
            <div className="w-full sm:w-2/3 lg:w-[36%] flex items-center justify-center relative min-h-[380px] lg:min-h-[450px] my-10 lg:my-0">
              {/* Dekorasi Blob Background */}
              <div className="absolute inset-0 m-auto w-3/4 h-3/4 bg-gradient-to-tr from-sky-200 to-violet-200 rounded-full blur-3xl opacity-50 pointer-events-none" />

              {/* Kontainer Foto Tumpuk */}
              <div className="relative w-full max-w-[320px] h-[340px]">
                {/* Foto 1 (Kiri Atas - Paling Belakang) */}
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80"
                  alt="Tim diskusi"
                  className="absolute top-0 left-0 w-2/3 aspect-square object-cover  shadow-lg  -rotate-6 transition-transform duration-500 hover:scale-105 hover:z-30 cursor-pointer"
                />
                
                {/* Foto 2 (Kanan Bawah - Tengah) */}
                <img
                  src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500&q=80"
                  alt="Kemitraan"
                  className="absolute bottom-0 right-0 w-2/3 aspect-square object-cover  shadow-lg rotate-6 transition-transform duration-500 hover:scale-105 hover:z-30 cursor-pointer"
                />

                {/* Foto 3 (Tengah - Paling Depan) */}
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80"
                  alt="Kolaborasi"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] aspect-[4/3] object-cover  shadow-2xl  z-20 transition-transform duration-500 hover:scale-105 cursor-pointer"
                />
              </div>
            </div>

            {/* Kolom Kanan */}
            <div className="flex flex-col gap-6 w-full lg:w-[32%]">
              {actionBoxes.slice(3, 6).map((box, idx) => (
                <div
                  key={box.title}
                  className="group flex gap-5 items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-[#1a202c] transition-all duration-300 cursor-pointer"
                >
                  <span className="text-gray-300 group-hover:text-white font-bold text-3xl transition-colors duration-300">
                    0{idx + 4}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-white mb-2 transition-colors duration-300">
                      {box.title}
                    </h3>
                    <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                      {box.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 8. INFORMASI / BERITA (Magazine Layout) ── */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Layout (Kiri: Judul, Kanan: Link Lihat Semua) */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-gray-200 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a]">
                Informasi & Berita
              </h2>
            </div>
            <a href="#" className="flex items-center gap-1 text-sky-500 font-semibold hover:text-sky-600 transition-colors">
              Lihat semua <ChevronRight size={18} />
            </a>
          </div>

          {/* Grid Utama (Kiri: 1 Berita Besar, Kanan: List Berita Kecil) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Berita Utama (Kiri - Memakan 7 kolom) */}
            <div className="lg:col-span-7 group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-5">
                <img 
                  src={newsItems[0].img} 
                  alt={newsItems[0].title} 
                  className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sky-600 font-semibold text-sm mb-2 uppercase tracking-wide">
                {newsItems[0].category}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-3 group-hover:text-sky-600 transition-colors leading-snug">
                {newsItems[0].title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {newsItems[0].excerpt}
              </p>
            </div>

            {/* List Berita (Kanan - Memakan 5 kolom) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {newsItems.slice(1).map((news, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer items-center sm:items-start">
                  
                  {/* Thumbnail */}
                  <div className="w-[120px] sm:w-[160px] aspect-[4/3] flex-shrink-0 overflow-hidden rounded-lg">
                    <img 
                      src={news.img} 
                      alt={news.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Teks Konten */}
                  <div className="flex flex-col justify-center py-1">
                    <p className="text-sky-600 font-semibold text-xs mb-1.5 uppercase tracking-wide">
                      {news.category}
                    </p>
                    <h4 className="font-bold text-[#0f172a] text-sm sm:text-base group-hover:text-sky-600 transition-colors leading-snug line-clamp-3">
                      {news.title}
                    </h4>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 9. CTA KONSULTASI (Card Layout) ── */}
      <section className="relative px-6 py-24 bg-gray-50 overflow-hidden">
        
        {/* Background Pattern (Ganti url() ini dengan gambar pattern geometris Anda jika ada) */}
        <div 
          className="absolute inset-0 opacity-50 pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', // Pola titik sementara
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Card Container */}
        <div className="relative z-10 max-w-6xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 lg:p-20 gap-10">
          
          {/* Kolom Kiri: Teks & Tombol */}
          <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f172a] leading-tight mb-5">
              SIAP Menjadi Bagian INOTAL Partner?
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Bergabunglah dengan X stakeholder dalam program digital dan transformasi masa depan
            </p>
            <button
              onClick={() => onNavigate?.('register')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/30 text-sm tracking-wide"
            >
              GABUNG SEKARANG
            </button>
          </div>

          {/* Kolom Kanan: Logo / Gambar Graphic */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            
            {/* Ganti elemen div ini dengan tag <img /> logo/grafik Anda */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 bg-gray-900 rounded-lg transform rotate-12 flex items-center justify-center shadow-lg">
               <span className="text-white font-bold rotate-[-12deg]">Logo Placeholder</span>
            </div>
            
            {/* Contoh jika menggunakan gambar asli: 
            <img 
              src="URL_LOGO_ANDA.png" 
              alt="Logo Partnership" 
              className="w-48 sm:w-64 object-contain"
            /> 
            */}

          </div>

        </div>
      </section>

      {/* ── 10. FOOTER ── */}
      <footer className="bg-gray-900 text-gray-400 px-6 pt-14 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Kolom 1 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
                  <span className="text-white font-extrabold text-xs">IN</span>
                </div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  INOTAL<span className="text-sky-400">PARTNER</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-400 mb-5">
                Menyatukan potensi bangsa tuk kebangkitan emas 2045
              </p>
              <div className="flex items-start gap-2 text-sm text-gray-500 mb-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-sky-500" />
                <span>Jl. Placeholder No. 123, Jakarta Selatan, DKI Jakarta 12345</span>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 transition-all group"
                >
                  <Camera size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all group"
                >
                  <Phone size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Kolom 2: PROFIL */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">
                Profil
              </h4>
              <ul className="space-y-3">
                {footerProfil.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-sky-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 3: PARTNERSHIP */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">
                Partnership
              </h4>
              <ul className="space-y-3">
                {footerPartnership.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-sky-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <div className="flex gap-5">
              <a href="#" className="hover:text-sky-400 transition-colors">Kebijakan Privasi</a>
              <span>|</span>
              <a href="#" className="hover:text-sky-400 transition-colors">Kebijakan Pengguna</a>
            </div>
            <span>Copyright © INOTAL Partner</span>
          </div>
        </div>
      </footer>
    </div>
  )
}