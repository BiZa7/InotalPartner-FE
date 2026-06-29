import React from 'react'
import { LayoutDashboard, Building2, Users, Settings, LogOut } from 'lucide-react'

export const navItems = [
  { key: 'dashboard', label: 'Dashboard',     icon: LayoutDashboard },
  { key: 'company',   label: 'Input Company', icon: Building2 },
  { key: 'users',     label: 'Users',         icon: Users },
  { key: 'settings',  label: 'Settings',      icon: Settings },
]

export default function Sidebar({ activeNav, setActiveNav, sidebarOpen, setSidebarOpen, onNavigate }) {

  const handleLogout = () => {
    localStorage.removeItem('inotal_token')
    localStorage.removeItem('inotal_user')
    onNavigate?.('login')
  }

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30 w-60 bg-white border-r border-sky-100
          flex flex-col transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2.5 px-5 py-5 border-b border-sky-100 cursor-pointer shrink-0"
          onClick={() => onNavigate?.('landing')}
        >
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
            <span className="text-white font-extrabold text-xs">IN</span>
          </div>
          <span className="font-extrabold text-base text-gray-900 tracking-tight">
            INOTAL <span className="text-sky-400">PARTNER</span>
          </span>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {navItems.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => { setActiveNav(key); setSidebarOpen(false) }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left
                ${activeNav === key
                  ? 'bg-sky-50 text-sky-600 border border-sky-200'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'}`}
            >
              <Icon size={17} className={activeNav === key ? 'text-sky-500' : 'text-gray-400'} />
              {label}
            </button>
          ))}
        </nav>

        {/* User pill + Logout */}
        <div className="px-3 py-4 border-t border-sky-100 shrink-0 space-y-2">
          {/* User info */}
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-sky-50">
            <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">AD</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-gray-800 truncate">Admin User</p>
              <p className="text-[10px] text-gray-400 truncate">admin@inotal.co.id</p>
            </div>
          </div>

          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 hover:text-red-600 transition-all"
          >
            <LogOut size={17} />
            Log Out
          </button>
        </div>
      </aside>
    </>
  )
}