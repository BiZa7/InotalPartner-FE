import React from 'react'
import { MapPin, Camera, Phone } from 'lucide-react'

const footerProfil = ['Tentang', 'Visi Misi', 'Kemitraan', 'Event']

const footerPartnership = [
  'Bergabung Sekarang',
  'InotalHub Tech',
  'Group & Div',
  'Kontak',
]

export default function PublicFooter({ onNavigate }) {
  return (
    <footer className="bg-gray-900 text-gray-400 px-6 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Identitas dan kontak */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">
                  IN
                </span>
              </div>

              <span className="font-extrabold text-lg text-white tracking-tight">
                INOTAL
                <span className="text-sky-400"> PARTNER</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Menyatukan potensi bangsa tuk kebangkitan emas 2045
            </p>

            <div className="flex items-start gap-2 text-sm text-gray-500 mb-2">
              <MapPin
                size={14}
                className="mt-0.5 flex-shrink-0 text-sky-500"
              />
              <span>
                Jl. Placeholder No. 123, Jakarta Selatan,
                DKI Jakarta 12345
              </span>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 transition-all group"
              >
                <Camera
                  size={16}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all group"
              >
                <Phone
                  size={16}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Navigasi profil */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">
              Profil
            </h4>

            <ul className="space-y-3">
              {footerProfil.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      onNavigate?.(item)
                    }}
                    className="text-sm text-gray-500 hover:text-sky-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigasi partnership */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">
              Partnership
            </h4>

            <ul className="space-y-3">
              {footerPartnership.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      onNavigate?.(item)
                    }}
                    className="text-sm text-gray-500 hover:text-sky-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright dan kebijakan */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex gap-5">
            <a
              href="#"
              className="hover:text-sky-400 transition-colors"
            >
              Kebijakan Privasi
            </a>

            <span>|</span>

            <a
              href="#"
              className="hover:text-sky-400 transition-colors"
            >
              Kebijakan Pengguna
            </a>
          </div>

          <span>Copyright © INOTAL Partner</span>
        </div>
      </div>
    </footer>
  )
}