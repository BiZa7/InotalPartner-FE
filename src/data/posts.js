// Sumber data sementara untuk halaman Informasi.
// Backend INOTAL Partner belum punya endpoint post (routes.go cuma daftarkan /api/auth/*),
// jadi halaman ini baca dari sini. Begitu endpoint-nya jadi, ganti isi file ini jadi
// pemanggilan api — bentuk datanya udah disamakan dengan kolom yang bakal dikirim BE.

export const POSTS_PER_PAGE = 10


export const posts = [
  {
    id: 1,
    title: 'Kolaborasi Prototipe INOTAL Partner Resmi Diluncurkan',
    excerpt:
      'Program kemitraan ekosistem INOTAL resmi dengan 12 perusahaan dan 5 komunitas kampus sebagai mitra awal. Setiap mitra mendapat pendampingan teknis langsung dari tim kami.',
    category: 'Pengumuman',
    date: '2026-09-28',
    author: 'Tim INOTAL Partner',
    readTime: 4,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Workshop DevOps Bersama Komunitas IT Bandung',
    excerpt:
      'Sesi teknis tiga jam bersama praktisi dari beberapa perusahaan mitra. Bahasannya deployment pipeline, monitoring, dan incident response yang benar-benar dipakai produksi.',
    category: 'Komunitas',
    date: '2026-09-24',
    author: 'Rizky Pratama',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&q=80',
  },
  {
    id: 3,
    title: 'Cara Kami Memilih Mitra, dan Kenapa Prosesnya Takes Time',
    excerpt:
      'Pendekatan pemetaan kebutuhan yang kami pakai sebelum menerima mitra baru. Bukan formalitas — ada hal yang perlu diselesaikan dulu sebelum proceeding.',
    category: 'Kolaborasi',
    date: '2026-09-21',
    author: 'Sari Andriani',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80',
  },
  {
    id: 4,
    title: 'Pengalaman Mitra di Program Magang Bersama Batch Pertama',
    excerpt:
      'Cerita dari mitra yang kelasnya dipakai untuk program magang bersama. Hasilnya bukan cuma tugas selesai, tapi rekam jejak kerja yang bisa dilihat HRD.',
    category: 'Program',
    date: '2026-09-18',
    author: 'Dimas Saputra',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&q=80',
  },
  {
    id: 5,
    title: 'Mengelola Risiko Kolaborasi dari Awal',
    excerpt:
      'Risiko teknis dan non-teknis yang muncul di balik sebuah kolaborasi besar, dan bagaimana mitigasi disusun sejak awal.',
    category: 'Kolaborasi',
    date: '2026-09-15',
    author: 'Bagas Nugraha',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80',
  },
  {
    id: 6,
    title: 'INOTAL Partner Raih Penghargaan Kolaborasi Teknologi',
    excerpt:
      'Penghargaan untuk program kemitraan yang dinilai paling konsisten di antara proposal tahun ini.',
    category: 'Pengumuman',
    date: '2026-09-12',
    author: 'Tim INOTAL Partner',
    readTime: 3,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&q=80',
  },
  {
    id: 7,
    title: 'Teknologi AI di Dunia Kolaborasi Modern',
    excerpt:
      'Studi internal: tools AI apa yang benar-benar dipakai tim collaborative sekarang, dan mana yang ternyata cuma hype.',
    category: 'Teknologi',
    date: '2026-09-09',
    author: 'Citra Maharani',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&q=80',
  },
  {
    id: 8,
    title: 'Membangun API yang Ramah Developer',
    excerpt:
      'Panduan teknis dari tim kami: versioning, error response, dan dokumentasi yang bikin integrator nggak frustrasi.',
    category: 'Teknologi',
    date: '2026-09-06',
    author: 'Rizky Pratama',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?w=1000&q=80',
  },
  {
    id: 9,
    title: 'Belajar Kolaborasi dari Nol',
    excerpt:
      'Seri panduan untuk tim kecil yang ingin mulai kolaborasi tapi bingung mulai dari mana.',
    category: 'Komunitas',
    date: '2026-09-03',
    author: 'Sari Andriani',
    readTime: 4,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&q=80',
  },
  {
    id: 10,
    title: 'Rekap Aktivitas Ekosistem Q3',
    excerpt:
      'Ringkasan tiga bulan terakhir: berapa program yang jalan, mitra baru, dan hal yang perlu diperbaiki di Q4.',
    category: 'Komunitas',
    date: '2026-08-30',
    author: 'Tim INOTAL Partner',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&q=80',
  },
  {
    id: 11,
    title: 'Bermitra untuk Keberlanjutan Listrik di Gedung Komersil',
    excerpt:
      'Kasus kolaborasi dengan mitra energi untuk efisiensi konsumsi listrik di gedung komersil.',
    category: 'Kolaborasi',
    date: '2026-08-27',
    author: 'Bagas Nugraha',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1000&q=80',
  },
  {
    id: 12,
    title: 'Belajar Kolaborasi dari Nol, Part 2',
    excerpt:
      'Lanjutan seri belajar kolaborasi: cara menulis RFC yang acceptable, bukan cuma enak dibaca.',
    category: 'Komunitas',
    date: '2026-08-24',
    author: 'Sari Andriani',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=1000&q=80',
  },
  {
    id: 13,
    title: 'Otomatisasi Deploy untuk Tim Kecil',
    excerpt:
      'Setup CI/CD yang tetap ringan dan tetap ringan, buat tim yang belum punya DevOps dedicated.',
    category: 'Teknologi',
    date: '2026-08-21',
    author: 'Dimas Saputra',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1000&q=80',
  },
  {
    id: 14,
    title: 'INOTAL Partner Hadir di Campus Fest 2026',
    excerpt:
      'Booth dan sesinya: mau lihat gambarnya, plus rekrutmen untuk program magang batch kedua.',
    category: 'Program',
    date: '2026-08-18',
    author: 'Tim INOTAL Partner',
    readTime: 3,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&q=80',
  },
  {
    id: 15,
    title: 'Memilih Tech Stack untuk Tim yang Baru Start',
    excerpt:
      'Pertimbangan teknis dan non-teknis sebelum commit ke satu stack, plus kesalahan umum tim kecil.',
    category: 'Teknologi',
    date: '2026-08-15',
    author: 'Rizky Pratama',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1000&q=80',
  },
  {
    id: 16,
    title: 'Peluncuran Program Edukasi untuk Komunitas',
    excerpt:
      'Kelas-kelas teknis terbuka untuk komunitas IT kampus, dengan mentor dari tim mitra.',
    category: 'Program',
    date: '2026-08-12',
    author: 'Citra Maharani',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&q=80',
  },
  {
    id: 17,
    title: 'Refactor API Metadata untuk Sistem Internal',
    excerpt:
      'Refactor API metadata: dari 14 endpoint jadi 3, dengan response yang jauh lebih ringkas.',
    category: 'Teknologi',
    date: '2026-08-09',
    author: 'Dimas Saputra',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1000&q=80',
  },
  {
    id: 18,
    title: 'Kisah Mitra: Dari Awal sampai Program Delapan Bulan',
    excerpt:
      'Perjalanan satu mitra dari submission proposal sampai program berjalan selama delapan bulan.',
    category: 'Kolaborasi',
    date: '2026-08-06',
    author: 'Bagas Nugraha',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&q=80',
  },
  {
    id: 19,
    title: 'Ngobrol Bareng: Sesi Mentoring untuk Developer',
    excerpt:
      'Ingin tahu cara mentoring yang bisa diakses alumni dan mitra baru? Ini rangkumannya.',
    category: 'Komunitas',
    date: '2026-08-03',
    author: 'Tim INOTAL Partner',
    readTime: 4,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1000&q=80',
  },
  {
    id: 20,
    title: 'Identitas dan Sistem di Era Baru',
    excerpt:
      'Konsistensi brand di semua kanal digital, dan kenapa yang penting bukan cuma visual.',
    category: 'Pengumuman',
    date: '2026-08-01',
    author: 'Citra Maharani',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1000&q=80',
  },
  {
    id: 21,
    title: 'Technical Writing yang Efektif untuk Tim Dev',
    excerpt:
      'Cara menulis dokumen teknis yang dibaca, bukan cuma ditulis dan disimpan.',
    category: 'Teknologi',
    date: '2026-07-29',
    author: 'Rizky Pratama',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1000&q=80',
  },
  {
    id: 22,
    title: 'Kolaborasi dengan Sektor Pendidikan',
    excerpt:
      'Pengalaman bermitra dengan institusi pendidikan, dan perbedaan mekanisme dengan korporat.',
    category: 'Kolaborasi',
    date: '2026-07-26',
    author: 'Sari Andriani',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1000&q=80',
  },
  {
    id: 23,
    title: 'Evaluasi Program Kolaborasi Semester Ini',
    excerpt:
      'Apa yang jalan, apa yang nggak, dan perubahan konkret untuk semester berikutnya.',
    category: 'Program',
    date: '2026-07-23',
    author: 'Tim INOTAL Partner',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&q=80',
  },
  {
    id: 29,
    title: 'Rate Limiting dan Retry: Menjaga API Tetap Sopan',
    excerpt:
      'Backoff exponential, jitter, dan batas retry — pola sederhana yang mencegah satu partner yang error bisa menjatuhkan layanan untuk semua.',
    category: 'Teknologi',
    date: '2026-09-07',
    author: 'Dimas Saputra',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=80',
  },
  {
    id: 25,
    title: 'Arsitektur Microservice untuk Tim yang Masih Kecil',
    excerpt:
      'Kapan microservice memang perlu, dan kapan itu cuma beban. Panduan dari pengalaman proyek yang gagal dipecah terlalu cepat.',
    category: 'Teknologi',
    date: '2026-09-11',
    author: 'Dimas Saputra',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&q=80',
  },
  {
    id: 26,
    title: 'Observability: Cara Tahu Sistemmu Sehat atau Bermasalah',
    excerpt:
      'Log, metric, dan trace — tiga hal yang wajib ada sebelum aplikasi masuk produksi, plus cara mulai dari yang paling murah.',
    category: 'Teknologi',
    date: '2026-08-25',
    author: 'Rizky Pratama',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80',
  },
  {
    id: 27,
    title: 'TypeScript di Project JavaScript Legacy',
    excerpt:
      'Strategi migrasi bertahap supaya tidak freeze seluruh codebase. Termasuk bagian yang paling sering dilewatkan: setup editor dan eslint.',
    category: 'Teknologi',
    date: '2026-08-13',
    author: 'Citra Maharani',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1000&q=80',
  },
  {
    id: 28,
    title: 'Integrasi Payment Gateway untuk Mitra Marketplace',
    excerpt:
      'Catatan teknis dari integrasi payment di program marketplace: webhook, idempotency, dan Reconciliation yang sering jadi sumber bug.',
    category: 'Teknologi',
    date: '2026-07-25',
    author: 'Bagas Nugraha',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=80',
  },
  {
    id: 24,
    title: 'Open Workshop: Kolaborasi Tanpa Birokrasi',
    excerpt:
      'Diskusi terbuka soal hambatan administratif yang sering muncul di kolaborasi, plus solusinya.',
    category: 'Komunitas',
    date: '2026-07-20',
    author: 'Dimas Saputra',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000&q=80',
  },
]

// ngurutin berita dari yang terbaru
posts.sort((a, b) => new Date(b.date) - new Date(a.date))

// jumlah kategori dihitung dari posts, bukan ditulis manual — dulu pernah meleset
// karena angka di sini nggak sama sama isi data
export const categories = [
  { name: 'Semua', count: posts.length },
  ...[...new Set(posts.map(p => p.category))]
    .sort((a, b) =>
      posts.filter(p => p.category === b).length - posts.filter(p => p.category === a).length
    )
    .map(name => ({ name, count: posts.filter(p => p.category === name).length })),
]
