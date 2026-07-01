import PublicNavbar from "../../components/PublicNavbar"

export default function EventPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white font-sans">
        <PublicNavbar onNavigate={onNavigate} activePage="event" />
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
            <p className="text-sky-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
                Halaman
            </p>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Event</h1>
            <p className="text-gray-400 text-base max-w-sm">
                Halaman ini sedang dalam pengembangan.
            </p>
            <button
                onClick={() => onNavigate?.('landing')}
                className="mt-8 text-sm text-sky-500 hover:text-sky-600 font-semibold transition-colors"
            >
                ← Kembali ke Beranda
            </button>
        </div>
    </div>
  )
}