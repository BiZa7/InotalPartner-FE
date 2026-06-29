import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function PublicNavbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate?.('landing')}
        >
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
            <span className="text-white font-extrabold text-xs tracking-tight">IN</span>
          </div>
          <span className="font-extrabold text-lg tracking-tight text-gray-900">
            INOTAL <span className="text-sky-400">PARTNER</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500 font-medium">
          <a href="#services" className="hover:text-sky-500 transition-colors">Services</a>
          <a href="#partners" className="hover:text-sky-500 transition-colors">Partners</a>
          <a href="#about" className="hover:text-sky-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onNavigate?.('login')}
            className="text-sm text-gray-600 hover:text-sky-500 transition-colors px-4 py-2 font-medium"
          >
            Log In
          </button>
          <button
            onClick={() => onNavigate?.('register')}
            className="text-sm bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-lg transition-colors font-semibold"
          >
            Become a Partner
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-gray-500" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-sky-100 px-6 py-4 flex flex-col gap-4 text-sm text-gray-600">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#partners" onClick={() => setMenuOpen(false)}>Partners</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <hr className="border-sky-100" />
          <button
            onClick={() => { setMenuOpen(false); onNavigate?.('login') }}
            className="text-left text-gray-700 font-medium"
          >
            Log In
          </button>
          <button
            onClick={() => { setMenuOpen(false); onNavigate?.('register') }}
            className="bg-sky-500 text-white px-4 py-2 rounded-lg w-fit font-semibold text-sm"
          >
            Become a Partner
          </button>
        </div>
      )}
    </nav>
  )
}
