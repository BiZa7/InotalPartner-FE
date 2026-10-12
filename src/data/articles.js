// Data artikel — dipisah dari posts.js (berita) karena bentuknya beda:
// artikel lebih panjang, punya tag, dan diurutin bukan per tanggal.
//
// Backend INOTAL Partner belum punya endpoint artikel (routes.go cuma daftarkan
// /api/auth/*), jadi halaman ini baca dari sini. Begitu endpoint-nya jadi, ganti
// isi file ini jadi pemanggilan api — bentuk datanya udah disamakan dengan kolom
// yang bakal dikirim BE.

export const ARTICLES_PER_PAGE = 6

export const articles = [
  {
    id: 1,
    slug: 'menyusun-kоровasi-kerja-yang-beneran-jalan',
    title: 'Menyusun Kolaborasi Kerja yang Benar-benar Jalan di Organisasi Kecil',
    excerpt:
      'Kebanyakan kolaborasi gagal bukan karena orangnya incapable, tapi karena cara kerjanya nggak pernah ditulis ulang. Ini_metode yang kami pakai sebelum menerima mitra baru.',
    category: 'Kolaborasi',
    tags: ['Metodologi', 'Manajemen', 'Mitra'],
    date: '2026-09-26',
    author: 'Sari Andriani',
    readTime: 11,
    views: 1840,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80',
    featured: true,
  },
  {
    id: 2,
    slug: 'api-yang-bikin-integrator-nggak-frustrasi',
    title: 'Merancang API yang Bikin Integrator Nggak Frustrasi',
    excerpt:
      'Versioning, error response, dan dokumentasi — tiga hal yang kelihatan sepele tapi menentukan apakah orang mau pakai API lo atau balik lagi ke Discord.',
    category: 'Teknologi',
    tags: ['API', 'Backend', 'Developer Experience'],
    date: '2026-09-19',
    author: 'Rizky Pratama',
    readTime: 14,
    views: 2630,
    image: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?w=1400&q=80',
  },
  {
    id: 3,
    slug: 'ai-tools-yang-beneran-dipakai-tim-kami',
    title: 'AI Tools yang Beneran Dipakai Tim Kami (dan yang Cuma Hype)',
    excerpt:
      'Kami uji 14 tool AI selama dua bulan dan catat hasilnya jujur. Tigainyagagah, satu benar-benar menghemat waktu, sisanya cuma demo yang没收 dibRTCn.',
    category: 'Teknologi',
    tags: ['AI', 'Tools', 'Review'],
    date: '2026-09-12',
    author: 'Citra Maharani',
    readTime: 9,
    views: 3210,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80',
  },
  {
    id: 4,
    slug: 'program-magang-yang-berdampak',
    title: 'Program Magang yang Berdampak, Bukan Sekadar Absen',
    excerpt:
      'Pengalaman batch pertama: apa yang bikin kelas yang dipakai mitra benar-benar menghasilkan rekam jejak kerja yang bisa dilihat HRD.',
    category: 'Program',
    tags: ['Magang', 'Ekosistem', 'Karier'],
    date: '2026-09-05',
    author: 'Dimas Saputra',
    readTime: 8,
    views: 1470,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80',
  },
  {
    id: 5,
    slug: 'mitigasi-risiko-kolaborasi-dari-awal',
    title: 'Mitigasi Risiko Kolaborasi dari Awal, Bukan Setelah Rusak',
    excerpt:
      'Risiko teknis dan non-teknis di balik sebuah kolaborasi besar, dan bagaimana peta risikonya disusun sebelum tanda tangan diteken.',
    category: 'Kolaborasi',
    tags: ['Risk Management', 'Mitra'],
    date: '2026-08-29',
    author: 'Bagas Nugraha',
    readTime: 12,
    views: 990,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80',
  },
  {
    id: 6,
    slug: 'devops-monitor-dan-incident-response',
    title: 'Monitoring dan Incident Response yang Jalan di Produksi',
    excerpt:
      'Praktik yang dibahas di workshop DevOps bersama komunitas IT Bandung: deployment pipeline, alerting yang nggak bikin EMAIL nge spam, dan runbook.',
    category: 'Teknologi',
    tags: ['DevOps', 'Infrastructure', 'Workshop'],
    date: '2026-08-22',
    author: 'Rizky Pratama',
    readTime: 13,
    views: 2050,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=80',
  },
  {
    id: 7,
    slug: 'komunitas-it-bandung-dan-ekosistem-lokal',
    title: 'Komunitas IT Bandung dan Ecosistem Kolaborasi Lokal',
    excerpt:
      'Catatan dari 12 workshop dan 5 komunitas yang kami rangkai. Pola yang berulang, dan apa yang bikin komunitas lokal benar-benar tumbuh.',
    category: 'Komunitas',
    tags: ['Komunitas', 'Ekosistem', 'Bandung'],
    date: '2026-08-15',
    author: 'Sari Andriani',
    readTime: 7,
    views: 760,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80',
  },
  {
    id: 8,
    slug: 'evaluasi-program-dengan-metrik-yang-jujur',
    title: 'Evaluasi Program dengan Metrik yang Jujur',
    excerpt:
      'Metrik yang gampang diukur sering nggak nyambung sama yang penting. Ini cara kami menyelaraskan angka dan realita program.',
    category: 'Program',
    tags: ['Evaluasi', 'Metrik', 'Manajemen'],
    date: '2026-08-08',
    author: 'Bagas Nugraha',
    readTime: 10,
    views: 1120,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&q=80',
  },
  {
    id: 9,
    slug: 'kepemimpinan-teknis-di-lingkung-non-teknis',
    title: 'Kepemimpinan Teknik di Lingkung Non-Teknis',
    excerpt:
      'Menjelaskan keputusan teknis ke orang yang tidak belajar programming itu hasil yang lebih besar dari kode yang elegan. Ini cara kami melakukan communicator.',
    category: 'Kolaborasi',
    tags: ['Komunikasi', 'Leadership'],
    date: '2026-08-01',
    author: 'Citra Maharani',
    readTime: 9,
    views: 890,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80',
  },
  {
    id: 10,
    slug: 'rekap-ekosistem-q3-2026',
    title: 'Rekap Ekosistem Q3 2026: Apa yang Berjalan, Apa yang Tidak',
    excerpt:
      'Ringkasan tiga bulan terakhir: berapa program yang jalan, mitra baru, dan hal yang perlu diperbaiki di Q4.',
    category: 'Komunitas',
    tags: ['Rekap', 'Ekosistem'],
    date: '2026-07-25',
    author: 'Tim INOTAL Partner',
    readTime: 6,
    views: 1540,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80',
  },
  {
    id: 11,
    slug: 'setup-dev-lokal-yang-cepet',
    title: 'Setup Dev Lokal yang Tidak Bikin Frustrasi',
    excerpt:
      'Container vs native vs remote — perbandingan jujur untuk tim kecil yang mau bisa melakukan onboarding developer baru dalam hitungan menit.',
    category: 'Teknologi',
    tags: ['DevOps', 'Onboarding', 'Tools'],
    date: '2026-07-18',
    author: 'Rizky Pratama',
    readTime: 8,
    views: 1730,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=80',
  },
  {
    id: 12,
    slug: 'menulis-dokumentasi-yang-dibaca',
    title: 'Menulis Dokumentasi yang Selesai Dibaca Orang',
    excerpt:
      'Dokumentasi yang bagus bukan soal panjang, tapi soal urutan. Empat struktur yang kami pakai supaya orang berhenti scroll dan mulai menjalankan.',
    category: 'Teknologi',
    tags: ['Dokumentasi', 'Developer Experience'],
    date: '2026-07-11',
    author: 'Citra Maharani',
    readTime: 7,
    views: 1290,
    image: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?w=1400&q=80',
  },
]

// ngurutin artikel dari yang terbaru
articles.sort((a, b) => new Date(b.date) - new Date(a.date))

// jumlah kategori dihitung dari articles, bukan ditulis manual — dulu pernah meleset
// karena angka di sini nggak sama sama isi data
export const articleCategories = [
  { name: 'Semua', count: articles.length },
  ...[...new Set(articles.map(a => a.category))]
    .sort((a, b) =>
      articles.filter(a => a.category === b).length - articles.filter(a => a.category === a).length
    )
    .map(name => ({ name, count: articles.filter(a => a.category === name).length })),
]

// trending: view tertinggi dari 30 hari terakhir
const CUTOFF = new Date('2026-08-01')
export const trendingArticles = [...articles]
  .filter(a => new Date(a.date) >= CUTOFF)
  .sort((a, b) => b.views - a.views)
  .slice(0, 5)
