// Data event INOTAL Partner.
//
// Backend belum punya endpoint event (routes.go cuma daftarkan /api/auth/*),
// jadi halaman ini baca dari sini. Begitu endpoint-nya jadi, ganti isi file ini
// jadi pemanggilan api — bentuk datanya udah disamaan dengan kolom yang bakal
// dikirim BE.
//
// Catatan tanggal: event yang masih 'upcoming' sengaja diset di masa depan
// relatif(Q4 2026) supaya halaman nggak otomatis kosong saat backend nyala.

export const EVENTS_PER_PAGE = 6

// 'open' = pendaftaran dibuka, 'full' = kuota habis, 'past' = sudah lewat
export const EVENT_TYPES = [
  'Semua', 'Workshop', 'Webinar', 'Meetup', 'Mentoring', 'Competition',
]

export const events = [
  {
    id: 1,
    title: 'Workshop DevOps: Deployment Pipeline yang Benar-benar Jalan di Produksi',
    type: 'Workshop',
    date: '2026-11-14',
    time: '09:00 - 15:00 WIB',
    venue: 'Gear Space ITB',
    city: 'Bandung, Jawa Barat',
    online: false,
    host: 'Rizky Pratama',
    hostRole: 'Engineering Lead, Mitra Sistem',
    excerpt:
      'Sesi enam jam yang ngobrolin deployment pipeline, alerting yang nggak bikin spam, sampai runbook. Peserta langsung praktik di repo masing-masing, bukan cuma dengerin.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=80',
    quota: 40,
    registered: 34,
    price: 'Gratis',
    status: 'open',
    topics: ['CI/CD', 'Monitoring', 'Incident Response'],
  },
  {
    id: 2,
    title: 'Webinar: Menulis API yang Tidak Bikin Integrator Frustrasi',
    type: 'Webinar',
    date: '2026-11-21',
    time: '19:30 - 21:00 WIB',
    venue: 'Online via Zoom',
    city: 'Streaming',
    online: true,
    host: 'Rizky Pratama',
    hostRole: 'Engineering Lead, Mitra Sistem',
    excerpt:
      'Versioning, error response, dan dokumentasi — tiga hal yang kelihatan sepele tapi menentukan apakah orang mau pakai API lo atau balik lagi ke Discord.',
    image: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?w=1400&q=80',
    quota: 200,
    registered: 128,
    price: 'Gratis',
    status: 'open',
    topics: ['API Design', 'Documentation', 'Developer Experience'],
  },
  {
    id: 3,
    title: 'Meetup Ecosystem: Ngobrol ringan soal Kendala Kolaborasi di Lapangan',
    type: 'Meetup',
    date: '2026-11-28',
    time: '18:00 - 21:00 WIB',
    venue: 'Cafe di Braga',
    city: 'Bandung, Jawa Barat',
    online: false,
    host: 'Sari Andriani',
    hostRole: 'Program Lead, INOTAL Partner',
    excerpt:
      'Ngobrol santai soal apa yang jalan dan apa yang mentok dalam kolaborasi. Botol kopi, tidak ada agenda formal — yang penting ada yang saling dengerin.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80',
    quota: 60,
    registered: 22,
    price: 'Gratis',
    status: 'open',
    topics: ['Ekosistem', 'Jaringan Mitra'],
  },
  {
    id: 4,
    title: 'Mentoring Clinic: Review Portofolio dan Dokumentasi Produk',
    type: 'Mentoring',
    date: '2026-12-05',
    time: '10:00 - 16:00 WIB',
    venue: 'Ruang Kolaborasi, Gedung Sate',
    city: 'Bandung, Jawa Barat',
    online: false,
    host: 'Citra Maharani',
    hostRole: 'Documentation Lead',
    excerpt:
      'Bawa satu dokumentasi yang menurut lo udah jadi. Kita review bareng — yang sudah jelas, yang masih ambigu, dan bagian yang bikin pembaca berhenti di paragraf ketiga.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80',
    quota: 24,
    registered: 24,
    price: 'Gratis',
    status: 'full',
    topics: ['Dokumentasi', 'Review', 'Writing'],
  },
  {
    id: 5,
    title: 'Competition: INOTAL Build Challenge 2026',
    type: 'Competition',
    date: '2026-12-12',
    time: '08:00 - 22:00 WIB',
    venue: 'Online + Babak Final Offline',
    city: 'Bandung, Jawa Barat',
    online: true,
    host: 'Tim INOTAL Partner',
    hostRole: 'Penyelenggara',
    excerpt:
      'Kompetisi membangun solusi untuk masalah operasional mitra. Tiga tim terbaik dapat pendampingan teknis selama tiga bulan.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80',
    quota: 150,
    registered: 96,
    price: 'Gratis',
    status: 'open',
    topics: ['Hackathon', 'Inovasi', 'Mentorship'],
  },
  {
    id: 6,
    title: 'Workshop Kolaborasi untuk Tim Non-Teknis',
    type: 'Workshop',
    date: '2026-12-19',
    time: '09:00 - 13:00 WIB',
    venue: 'Hotel Grand Setia Bandung',
    city: 'Bandung, Jawa Barat',
    online: false,
    host: 'Bagas Nugraha',
    hostRole: 'Operations Head',
    excerpt:
      'Buat tim yangoría biasanya kerja sama dengan developer tapi nggak ngerti kalau batasannya. Kita bahas cara brief requirement yang jelas sejak awal.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&q=80',
    quota: 50,
    registered: 31,
    price: 'Rp 350.000',
    status: 'open',
    topics: ['Komunikasi', 'Requirement', 'Manajemen'],
  },
  {
    id: 7,
    title: 'Webinar: Memilih AI Tool yang Beneran Dipakai',
    type: 'Webinar',
    date: '2026-10-24',
    time: '19:30 - 21:00 WIB',
    venue: 'Online via Zoom',
    city: 'Streaming',
    online: true,
    host: 'Citra Maharani',
    hostRole: 'Documentation Lead',
    excerpt:
      'Kami uji 14 tool AI selama dua bulan. Hasilnya jujur: tiga anodanya bagus, satu benar-benar menghemat waktu, sisanya cuma demo.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80',
    quota: 200,
    registered: 187,
    price: 'Gratis',
    status: 'past',
    topics: ['AI', 'Tools', 'Review'],
  },
  {
    id: 8,
    title: 'Meetup Komunitas IT Bandung: Kolaborasi di Era AI',
    type: 'Meetup',
    date: '2026-10-17',
    time: '18:30 - 21:00 WIB',
    venue: 'Auditorium ITB',
    city: 'Bandung, Jawa Barat',
    online: false,
    host: 'Dimas Saputra',
    hostRole: 'Community Coordinator',
    excerpt:
      'Diskusi terbuka: apakah AI membuat collaborative dan terbentuk lebih cepat, atau justru menambah layer komunikasi baru.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80',
    quota: 120,
    registered: 120,
    price: 'Gratis',
    status: 'past',
    topics: ['Komunitas', 'AI', 'Ekosistem'],
  },
  {
    id: 9,
    title: 'Workshop Setup Dev Lokal yang Tidak Bikin Frustrasi',
    type: 'Workshop',
    date: '2026-10-10',
    time: '09:00 - 14:00 WIB',
    venue: 'Gear Space ITB',
    city: 'Bandung, Jawa Barat',
    online: false,
    host: 'Rizky Pratama',
    hostRole: 'Engineering Lead, Mitra Sistem',
    excerpt:
      'Container vs native vs remote — perbandingan jujur untuk tim kecil yang mau bisa melakukan onboarding developer baru dalam hitungan menit.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&q=80',
    quota: 40,
    registered: 40,
    price: 'Gratis',
    status: 'past',
    topics: ['DevOps', 'Onboarding', 'Tools'],
  },
  {
    id: 10,
    title: 'Mentoring Clinic: Menyusun Requirement yang Tidak Ambigu',
    type: 'Mentoring',
    date: '2026-09-26',
    time: '13:00 - 17:00 WIB',
    venue: 'Ruang Kolaborasi, Gedung Sate',
    city: 'Bandung, Jawa Barat',
    online: false,
    host: 'Bagas Nugraha',
    hostRole: 'Operations Head',
    excerpt:
      'Sesi empat jam untuk tim yang sering revisi karena requirement-nya kabur. Kita latihan dari kasus nyata masing-masing.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80',
    quota: 24,
    registered: 24,
    price: 'Gratis',
    status: 'past',
    topics: ['Requirement', 'Analysis', 'Manajemen'],
  },
  {
    id: 11,
    title: 'Competition: INOTAL Dev Sprint — Batch Pertama',
    type: 'Competition',
    date: '2026-09-19',
    time: '09:00 - 20:00 WIB',
    venue: 'Online',
    city: 'Streaming',
    online: true,
    host: 'Tim INOTAL Partner',
    hostRole: 'Penyelenggara',
    excerpt:
      'Sprint dua hari untuk membangun prototipe fitur komunitas. Tiga tim terbaik dapat pendampingan teknis.', 
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80',
    quota: 90,
    registered: 90,
    price: 'Gratis',
    status: 'past',
    topics: ['Sprint', 'Prototipe', 'Komunitas'],
  },
  {
    id: 12,
    title: 'Webinar: Mengelola Risiko Kolaborasi dari Awal',
    type: 'Webinar',
    date: '2026-09-12',
    time: '19:30 - 21:00 WIB',
    venue: 'Online via Zoom',
    city: 'Streaming',
    online: true,
    host: 'Sari Andriani',
    hostRole: 'Program Lead, INOTAL Partner',
    excerpt:
      'Risiko teknis dan non-teknis di balik sebuah kolaborasi besar, dan bagaimana peta risikonya disusun sebelum tanda tangan diteken.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80',
    quota: 200,
    registered: 143,
    price: 'Gratis',
    status: 'past',
    topics: ['Risk Management', 'Mitra'],
  },
]

// urutin dari yang paling dekat
events.sort((a, b) => new Date(a.date) - new Date(b.date))

// jumlah per tipe dihitung dari data, bukan ditulis manual
export const eventTypeCounts = [
  { name: 'Semua', count: events.length },
  ...EVENT_TYPES.filter(t => t !== 'Semua')
    .map(name => ({
      name,
      count: events.filter(e => e.type === name).length,
    }))
    .filter(c => c.count > 0),
]

// event yang masih bisa didaftar, urut dari yang paling dekat
export const upcomingEvents = events.filter(
  e => e.status === 'open' || e.status === 'full',
)

// event paling dekat yang kuotanya masih tersedia
export const nextEvent = upcomingEvents.find(e => e.status === 'open') ?? upcomingEvents[0]
