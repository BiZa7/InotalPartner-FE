import { useState, useRef, useEffect, useMemo } from 'react'
import PublicNavbar from '../../components/PublicNavbar'
import {
  ChevronRight, Home, Search, ArrowRight, Clock,
  ChevronLeft, ChevronDown, Eye, TrendingUp, MessageSquare,
} from 'lucide-react'
import { posts, categories, POSTS_PER_PAGE } from '../../data/posts'
import { trendingArticles } from '../../data/articles'

function useInView({ threshold = 0.1, fallbackMs = 700 } = {}) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } },
      { threshold },
    )
    io.observe(el)
    // kalau observer nggak kepicu, munculkan juga — lebih baik telat daripada nggak sama sekali
    const t = setTimeout(() => setSeen(true), fallbackMs)
    return () => { io.disconnect(); clearTimeout(t) }
  }, [threshold, fallbackMs])

  return [ref, seen]
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, seen] = useInView()
  return (
    <div
      ref={ref}
      className={`h-full transition-all duration-700 ease-out ${seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

export default function BeritaPage({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('Semua')
  const [query, setQuery] = useState('')
  const [sortNewest, setSortNewest] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = posts
    if (category !== 'Semua') list = list.filter(p => p.category === category)
    if (q) {
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q)
      )
    }
    return [...list].sort((a, b) => {
      const diff = new Date(b.date) - new Date(a.date)
      return sortNewest ? diff : -diff
    })
  }, [category, query, sortNewest])

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const visible = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  )

  useEffect(() => {
    if (page > totalPages) {
      const raf = requestAnimationFrame(() => setPage(totalPages))
      return () => cancelAnimationFrame(raf)
    }
  }, [page, totalPages])

  const go = (n) => {
    setPage(n)
    const top = document.getElementById('daftar-berita')?.offsetTop ?? 0
    window.scrollTo({ top: Math.max(0, top - 90), behavior: 'smooth' })
  }

  // komentar terakhir — dummy dari data berita yang ada, biar widget sidebar nggak kosong
  const recentComments = posts.slice(0, 4).map((p, i) => ({
    id: p.id,
    author: ['Dewi Lestari', 'Ahmad Fauzi', 'Rina Kusuma', 'Bayu Nugroho'][i],
    text: 'Menarik banget, kami juga lewat bagian ini.',
    on: p.title,
  }))

  return (
    <div className="min-h-screen bg-white text-[#0c4a6e]" style={{ fontFamily: "'Mona Sans', system-ui, sans-serif" }}>

      <div className="h-[68px]">
        <PublicNavbar onNavigate={onNavigate} activePage="berita" scrolled={scrolled} />
      </div>

      {/* ============ PAGE HEADER ============ */}
      <section className="mx-3 md:mx-4 mt-3 rounded-2xl bg-[#0c4a6e] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e]/85 via-[#0c4a6e]/55 to-[#0c4a6e]/85" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:items-end">
            <div>
              <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-sky-400 mb-4">
                Kabar Ecosystem
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
                Berita
              </h1>
              <div className="inline-flex items-center gap-2 text-[13px] font-medium">
                <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur border border-white/15 flex items-center justify-center">
                  <Home size={14} className="text-sky-400" />
                </span>
                <button onClick={() => onNavigate?.('landing')} className="text-white/80 hover:text-white transition-colors">
                  Beranda
                </button>
                <ChevronRight size={14} className="text-white/40" />
                <span className="text-sky-400 font-semibold">Berita</span>
              </div>
            </div>
            <p className="text-white/70 text-[15px] leading-relaxed lg:text-right max-w-md lg:justify-self-end">
              Kabar terbaru, pengumuman, dan hal yang perlu lo tahu tentang program INOTAL Partner.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CONTENT: GRID UTAMA + SIDEBAR ============ */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-12">

          {/* ---------- KOLOM KIRI ---------- */}
          <div id="daftar-berita" className="scroll-mt-24 min-w-0">

            {/* search + sort */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setPage(1) }}
                  placeholder="Cari judul, isi, atau penulis..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/15 transition-all"
                />
              </div>
              <button
                onClick={() => setSortNewest(v => !v)}
                className="shrink-0 inline-flex items-center gap-2 px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-[13.5px] font-semibold text-[#0c4a6e] hover:border-[#0284c7]/50 transition-colors"
              >
                {sortNewest ? 'Terbaru' : 'Terlama'}
                <ChevronDown size={15} className={sortNewest ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
            </div>

            {/* kategoriler — horizontal pills, ala Newspaper: aktif filled, inaktif plain */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map(c => (
                <button
                  key={c.name}
                  onClick={() => { setCategory(c.name); setPage(1) }}
                  className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all ${
                    category === c.name
                      ? 'bg-[#0284c7] text-white'
                      : 'bg-[#F0F4F8] text-[#0c4a6e] hover:bg-[#0284c7]/10'
                  }`}
                >
                  {c.name}
                  <span className={`ml-1.5 text-[11px] ${category === c.name ? 'text-white/70' : 'text-gray-400'}`}>
                    {c.count}
                  </span>
                </button>
              ))}
            </div>

            {/* section header ala Newspaper: block header dengan garis bawah */}
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                {category === 'Semua' ? 'Berita Terbaru' : category}
              </h2>
              <span className="text-[12px] text-gray-400">{filtered.length} artikel</span>
            </div>

            {visible.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-gray-200 rounded-2xl">
                <p className="text-[#0c4a6e] font-bold text-lg mb-2">Nggak ada hasilnya</p>
                <p className="text-[14px] text-[#364e52] mb-6">
                  Coba kata kunci lain atau ganti kategorinya.
                </p>
                <button
                  onClick={() => { setQuery(''); setCategory('Semua'); setPage(1) }}
                  className="text-[13.5px] font-bold text-[#0284c7] hover:text-[#0c4a6e] transition-colors"
                >
                  Reset semua filter
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-6 items-stretch">
                {visible.map((p, i) => (
                  <Reveal key={p.id} delay={(i % 2) * 100} className="h-full">
                    <article className="group h-full bg-white border border-gray-200/80 rounded-xl overflow-hidden hover:border-[#0284c7]/50 transition-colors flex flex-col">
                      <div className="relative overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute left-3 top-3 bg-white/95 backdrop-blur rounded-md px-2.5 py-1 text-[11px] font-bold text-[#0284c7]">
                          {p.category}
                        </span>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-[12px] text-gray-400 mb-3">
                          <span>{formatDate(p.date)}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span className="inline-flex items-center gap-1">
                            <Clock size={12} />
                            {p.readTime} menit
                          </span>
                        </div>
                        <h3 className="text-[17px] font-bold leading-[1.35] mb-3 group-hover:text-[#0284c7] transition-colors line-clamp-2 min-h-[2.7em]">
                          {p.title}
                        </h3>
                        <p className="text-[13.5px] leading-relaxed text-[#364e52] mb-5 line-clamp-3">{p.excerpt}</p>
                        <div className="mt-auto flex items-center justify-between">
                          <span className="text-[12px] font-semibold text-gray-400">{p.author}</span>
                          <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#0284c7]">
                            Baca
                            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            )}

            {/* pagination */}
            {totalPages > 1 && (
              <div className="mt-14 flex items-center justify-center gap-2">
                <button
                  onClick={() => go(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-[#0c4a6e] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#0284c7]/50 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                  <button
                    key={n}
                    onClick={() => go(n)}
                    className={`w-10 h-10 rounded-lg border text-[14px] font-bold transition-all ${
                      n === currentPage
                        ? 'bg-[#0284c7] border-[#0284c7] text-white'
                        : 'border-gray-200 text-[#0c4a6e] hover:border-[#0284c7]/50'
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => go(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-[#0c4a6e] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#0284c7]/50 transition-colors">
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* ---------- SIDEBAR KANAN (ala Newspaper) ---------- */}
          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">

            {/* Trending / Most Popular */}
            <div className="bg-white border border-gray-200/80 rounded-xl overflow-hidden">
              <div className="bg-[#0c4a6e] px-5 py-3.5 flex items-center gap-2">
                <TrendingUp size={16} className="text-sky-400" />
                <h3 className="text-white font-extrabold text-[13px] tracking-[0.12em] uppercase">
                  Paling Populer
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {trendingArticles.map((a, i) => (
                  <button
                    key={a.id}
                    onClick={() => onNavigate?.('artikel')}
                    className="w-full text-left px-5 py-4 hover:bg-[#F0F4F8] transition-colors flex gap-3 items-start"
                  >
                    <span className="text-[20px] font-extrabold text-[#0284c7]/25 leading-none pt-0.5 w-6 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-[13.5px] font-bold leading-[1.4] text-[#0c4a6e] group-hover:text-[#0284c7] line-clamp-2">
                        {a.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] text-gray-400 mt-1.5">
                        <span className="inline-flex items-center gap-1">
                          <Eye size={11} />
                          {a.views.toLocaleString('id-ID')}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span>{a.readTime} mnt</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Kategori populer */}
            <div className="bg-white border border-gray-200/80 rounded-xl overflow-hidden">
              <div className="bg-[#0c4a6e] px-5 py-3.5 flex items-center gap-2">
                <span className="text-white font-extrabold text-[13px] tracking-[0.12em] uppercase">
                  Kategori
                </span>
              </div>
              <div className="p-5 space-y-3">
                {categories.filter(c => c.name !== 'Semua').map(c => (
                  <button
                    key={c.name}
                    onClick={() => { setCategory(c.name); setPage(1) }}
                    className="w-full inline-flex items-center justify-between text-[13.5px] font-semibold text-[#0c4a6e] hover:text-[#0284c7] transition-colors"
                  >
                    <span>{c.name}</span>
                    <span className="text-[11px] text-gray-400">{c.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Comments */}
            <div className="bg-white border border-gray-200/80 rounded-xl overflow-hidden">
              <div className="bg-[#0c4a6e] px-5 py-3.5 flex items-center gap-2">
                <MessageSquare size={16} className="text-sky-400" />
                <h3 className="text-white font-extrabold text-[13px] tracking-[0.12em] uppercase">
                  Komentar Terbaru
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {recentComments.map(c => (
                  <div key={c.id} className="px-5 py-4">
                    <p className="text-[12.5px] text-[#364e52] leading-relaxed line-clamp-2">
                      <span className="font-bold text-[#0c4a6e]">{c.author}</span> on{' '}
                      <span className="font-semibold text-[#0284c7]">{c.on}</span>: {c.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA sidebar — ask a question */}
            <div className="bg-[#0284c7] text-white rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
              <div className="relative p-6">
                <h3 className="font-extrabold text-lg mb-2">Butuh Info Lebih?</h3>
                <p className="text-[13px] text-white/80 leading-relaxed mb-5">
                  Tim kami bisa bantu jawab pertanyaan soal program kemitraan.
                </p>
                <button
                  onClick={() => onNavigate?.('partnership')}
                  className="inline-flex items-center gap-2 bg-white text-[#0284c7] font-bold text-[13px] px-4 py-2.5 rounded-lg transition-transform hover:translateY(-1px)"
                >
                  Hubungi Kami
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </aside>

        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-[#0c4a6e] text-white/70">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#0284c7] flex items-center justify-center">
                <span className="text-white font-extrabold text-xs tracking-tight">IN</span>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                INOTAL <span className="text-sky-400">PARTNER</span>
              </span>
            </div>
            <p className="text-[13px] leading-relaxed">
              Ekosistem kemitraan teknologi — menghubungkan perusahaan, komunitas, dan talenta digital.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-[13px] tracking-[0.12em] uppercase mb-4">Kontak</h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>(022) 1234 5678</li>
              <li>halo@inotalpartner.id</li>
              <li>Bandung, Indonesia</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-[13px] tracking-[0.12em] uppercase mb-4">Navigasi</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13.5px]">
              <button onClick={() => onNavigate?.('landing')} className="hover:text-sky-400 transition-colors">Beranda</button>
              <button onClick={() => onNavigate?.('program')} className="hover:text-sky-400 transition-colors">Program</button>
              <button onClick={() => onNavigate?.('event')} className="hover:text-sky-400 transition-colors">Event</button>
              <button onClick={() => onNavigate?.('tentang')} className="hover:text-sky-400 transition-colors">Tentang</button>
              <button onClick={() => onNavigate?.('partnership')} className="hover:text-sky-400 transition-colors">Partnership</button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 text-center text-[12px] text-white/40">
            © 2026 INOTAL Partner. Semua hak dilindungi.
          </div>
        </div>
      </footer>

    </div>
  )
}
