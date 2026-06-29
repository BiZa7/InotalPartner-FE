import React from 'react'
import PublicNavbar from '../components/PublicNavbar'
import {
  MonitorCog,
  Layers,
  Settings2,
  Code2,
  ServerCog,
  GraduationCap,
  ArrowRight,
  Camera,     
  Briefcase,  
  Hash,       
  Globe,      
  Play,       
  ChevronRight,
} from 'lucide-react'

const services = [
  {
    icon: MonitorCog,
    title: 'IT CONSULTANT',
    description:
      'Your IT consultancy service involves providing expert advice and guidance to businesses looking to leverage technology for their growth and efficiency.',
  },
  {
    icon: Layers,
    title: 'SYSTEM INTEGRATION',
    description:
      'System integration is the process of ensuring that different software and hardware components within a business\'s IT ecosystem work seamlessly together.',
  },
  {
    icon: Settings2,
    title: 'RESOURCES MANAGE SERVICE',
    description:
      'We offer strategic consulting and implementation services to effectively allocate and utilize resources, ensuring maximum efficiency and cost-effectiveness.',
  },
  {
    icon: Code2,
    title: 'SOFTWARE DEVELOPMENT',
    description:
      'Software development is the creation of custom software solutions tailored to a client\'s specific needs.',
  },
  {
    icon: ServerCog,
    title: 'OPERATION SYSTEM & MAINTENANCE',
    description:
      'Our experts provide customized solutions to design, implement, and maintain robust operational frameworks that align with your business goals and regulatory requirements.',
  },
  {
    icon: GraduationCap,
    title: 'TRAINING DEVELOPMENT',
    description:
      'From curriculum design to delivery, our solutions are designed to drive performance and foster professional growth.',
  },
]

const partners = [
  'PT Maju Bersama',
  'Teknologi Nusantara',
  'DataCore Asia',
  'Solusi Digital',
  'InfraNet Group',
  'CloudBridge ID',
]

const footerLinks = {
  Company: ['About Us', 'Our Team', 'Careers', 'News'],
  Services: ['IT Consultant', 'System Integration', 'Software Development', 'Training'],
  Support: ['Help Center', 'Documentation', 'System Status', 'Contact Us'],
}

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* NAVBAR */}
      <PublicNavbar onNavigate={onNavigate} />

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 text-xs text-sky-600 font-semibold mb-8 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Strategic IT Partnership Platform
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-6">
            Build Partnerships
            <br />
            <span className="text-sky-400">Smarter</span>
            <br />
            with INOTAL
          </h1>

          <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            INOTAL PARTNER is the gateway for organizations to collaborate, integrate, and
            grow through trusted IT services and sustainable strategic alliances.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate?.('register')}
              className="group flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-sky-200"
            >
              Register as a Partner
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-sky-500 px-6 py-3.5 rounded-xl border border-gray-200 hover:border-sky-300 transition-all text-sm font-medium">
              Learn More <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS */}
      <section id="partners" className="px-6 py-12 bg-sky-50/60 border-y border-sky-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs text-sky-400 font-semibold tracking-[0.2em] uppercase mb-8">
            Trusted by Our Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {partners.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center bg-white border border-sky-100 rounded-xl px-6 py-3 min-w-[140px] h-14 shadow-sm hover:shadow-md hover:border-sky-300 transition-all"
              >
                <span className="text-sm font-semibold text-gray-400 text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-sky-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Everything You Need
              <br />
              for Modern Partnerships
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              From consultation to development — designed for your business operational complexities.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100 transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-sky-100 flex items-center justify-center mb-5 transition-colors">
                  <Icon size={22} className="text-sky-500" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm tracking-wider text-gray-800 mb-3 leading-snug">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="contact" className="px-6 py-16 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-sky-200 rounded-3xl px-8 md:px-14 py-14 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="text-sky-500 text-xs font-bold tracking-widest uppercase mb-3">Get Started</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                  Ready to Partner with Us?
                </h2>
                <p className="text-gray-400 text-base max-w-lg">
                  Log in to your account or register your organization to begin the partnership process
                  and access our complete service portfolio.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  onClick={() => onNavigate?.('login')}
                  className="bg-white text-sky-600 font-bold px-8 py-3.5 rounded-xl hover:bg-sky-50 transition-colors text-sm whitespace-nowrap border border-sky-200"
                >
                  Log In
                </button>
                <button
                  onClick={() => onNavigate?.('register')}
                  className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-sm whitespace-nowrap shadow-lg shadow-sky-200"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 px-6 pt-14 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
            {/* Brand col */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
                  <span className="text-white font-extrabold text-xs">IN</span>
                </div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  INOTAL<span className="text-sky-400">PARTNER</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-500 mb-2">
                INOTAL International
              </p>
              <p className="text-sm leading-relaxed text-gray-500 mb-1">
                Jl. Placeholder No. 123, South Jakarta
              </p>
              <p className="text-sm leading-relaxed text-gray-500 mb-1">
                DKI Jakarta, Indonesia 12345
              </p>
              <p className="text-sm leading-relaxed text-gray-500 mt-3">
                info@inotal.co.id
              </p>
              <p className="text-sm leading-relaxed text-gray-500">
                +62 21 1234 5678
              </p>
            </div>

            {/* Link cols */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-gray-500 hover:text-sky-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social col */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Camera, label: 'Instagram' },
                  { icon: Briefcase, label: 'LinkedIn' },
                  { icon: Hash, label: 'Twitter / X' },
                  { icon: Globe, label: 'Facebook' },
                  { icon: Play, label: 'YouTube' },
                ].map(({ icon: SocialIcon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 transition-all group"
                  >
                    <SocialIcon size={17} className="text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-5 leading-relaxed">
                Follow us for the latest updates on partnerships, technology, and INOTAL innovations.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <span>© {new Date().getFullYear()} INOTAL International. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}