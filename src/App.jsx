import React, { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import TentangPage from './pages/FrontPage/TentangPage'
import ProgramPage from './pages/FrontPage/ProgramPage'
import EventPage from './pages/FrontPage/EventPage'
import InformasiPage from './pages/FrontPage/InformasiPage'
import PartnershipPage from './pages/FrontPage/PartnershipPage'

const PROTECTED_PAGES = ['dashboard']

const ALL_PAGES = [
  'login', 'register', 'dashboard',
  'tentang', 'program', 'event', 'informasi', 'partnership',
]

function getInitialPage() {
  const hash  = window.location.hash.replace('#', '')
  const valid = ALL_PAGES.includes(hash) ? hash : 'landing'
  const token = localStorage.getItem('inotal_token')
  if (PROTECTED_PAGES.includes(valid) && !token) {
    window.location.hash = 'login'
    return 'login'
  }
  return valid
}

function App() {
  const [page, setPage] = useState(getInitialPage)

  // Handle Google OAuth callback
  useEffect(() => {
    if (window.location.pathname === '/auth/callback') {
      const params = new URLSearchParams(window.location.search)
      const token  = params.get('token')
      if (token) {
        localStorage.setItem('inotal_token', token)
        window.history.replaceState({}, '', '/')
        setPage('dashboard')
      } else {
        setPage('login')
      }
    }
  }, [])

  // Handle browser back/forward & manual hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash  = window.location.hash.replace('#', '')
      const valid = ALL_PAGES.includes(hash) ? hash : 'landing'
      const token = localStorage.getItem('inotal_token')
      if (PROTECTED_PAGES.includes(valid) && !token) {
        window.location.hash = 'login'
        setPage('login')
        return
      }
      setPage(valid)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (target) => {
    const token = localStorage.getItem('inotal_token')
    if (PROTECTED_PAGES.includes(target) && !token) {
      window.location.hash = 'login'
      setPage('login')
      return
    }
    setPage(target)
    window.location.hash = target === 'landing' ? '' : target
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  if (page === 'login')        return <LoginPage       onNavigate={navigate} />
  if (page === 'register')     return <RegisterPage     onNavigate={navigate} />
  if (page === 'dashboard')    return <DashboardPage    onNavigate={navigate} />
  if (page === 'tentang')      return <TentangPage      onNavigate={navigate} />
  if (page === 'program')      return <ProgramPage      onNavigate={navigate} />
  if (page === 'event')        return <EventPage        onNavigate={navigate} />
  if (page === 'informasi')    return <InformasiPage    onNavigate={navigate} />
  if (page === 'partnership')  return <PartnershipPage  onNavigate={navigate} />
  return <LandingPage onNavigate={navigate} />
}

export default App