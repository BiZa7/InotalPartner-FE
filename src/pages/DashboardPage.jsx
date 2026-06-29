import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import MonthlyActivityChart from '../components/MonthlyActivityChart'
import ServiceDistributionChart from '../components/ServiceDistributionChart'
import ActivePartnersList from '../components/ActivePartnersList'
import CollaborationProjectsList from '../components/CollaborationProjectsList'
import PlaceholderPage from '../components/PlaceholderPage'

export default function DashboardPage({ onNavigate }) {
  const [activeNav, setActiveNav] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      
      <Sidebar 
        activeNav={activeNav} 
        setActiveNav={setActiveNav} 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        onNavigate={onNavigate} 
      />
      
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Topbar 
          activeNav={activeNav} 
          setSidebarOpen={setSidebarOpen} 
        />

        <main className="flex-1 overflow-y-auto p-5 lg:p-6">
          {activeNav === 'dashboard' ? (
            <>
              {/* Page header */}
              <div className="mb-6">
                <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">Dashboard Overview</h1>
                <p className="text-sm text-gray-400 mt-0.5">Monitor partnership activities and ongoing projects.</p>
              </div>

              {/* Charts row */}
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-5 mb-5">
                <MonthlyActivityChart />
                <ServiceDistributionChart />
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">
                <ActivePartnersList />
                <CollaborationProjectsList />
              </div>
            </>
          ) : (
            <PlaceholderPage activeNav={activeNav} />
          )}
        </main>
      </div>
    </div>
  )
}