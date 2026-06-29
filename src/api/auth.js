import api from './axios'

// Register
// POST /api/auth/register
// Payload: { full_name, company, email, password }
// Returns: { token, user }
export const registerApi = async ({ fullName, company, email, password }) => {
  const res = await api.post('/auth/register', {
    full_name: fullName,
    company,
    email,
    password,
  })
  return res.data.data // { token, user }
}

// Login =
// POST /api/auth/login
// Payload: { email, password }
// Returns: { token, user }
export const loginApi = async ({ email, password }) => {
  const res = await api.post('/auth/login', { email, password })
  return res.data.data // { token, user }
}

// Get current user
// GET /api/auth/me  (butuh token di header, sudah dihandle interceptor)
export const getMeApi = async () => {
  const res = await api.get('/auth/me')
  return res.data.data
}

// Google OAuth
// Redirect browser langsung ke BE — BE yang handle redirect ke Google
export const loginWithGoogle = () => {
  window.location.href = '/api/auth/google'
}