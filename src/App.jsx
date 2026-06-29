import React, { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'

// Halaman yang butuh token — kalau tidak ada token, redirect ke login
const PROTECTED_PAGES = ['dashboard']

function getInitialPage() {
  const hash  = window.location.hash.replace('#', '')
  const valid = ['login', 'register', 'dashboard'].includes(hash) ? hash : 'landing'
  const token = localStorage.getItem('inotal_token')

  // Kalau mau akses halaman protected tapi tidak punya token → paksa ke login
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
      const valid = ['login', 'register', 'dashboard'].includes(hash) ? hash : 'landing'
      const token = localStorage.getItem('inotal_token')

      // Guard: hash berubah ke halaman protected tanpa token
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

    // Guard: navigate ke halaman protected tanpa token
    if (PROTECTED_PAGES.includes(target) && !token) {
      window.location.hash = 'login'
      setPage('login')
      return
    }

    setPage(target)
    window.location.hash = target === 'landing' ? '' : target
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  if (page === 'login')     return <LoginPage     onNavigate={navigate} />
  if (page === 'register')  return <RegisterPage  onNavigate={navigate} />
  if (page === 'dashboard') return <DashboardPage onNavigate={navigate} />
  return <LandingPage onNavigate={navigate} />
}

export default App