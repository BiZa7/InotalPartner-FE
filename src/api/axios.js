import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 detik
})

// Request interceptor
// Otomatis menyisipkan JWT token dari localStorage ke setiap request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('inotal_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor 
// Tangani error 401 secara global: hapus token dan redirect ke login
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('inotal_token')
      localStorage.removeItem('inotal_user')
      // Redirect ke login
      window.location.hash = 'login'
    }
    return Promise.reject(error)
  }
)

export default api