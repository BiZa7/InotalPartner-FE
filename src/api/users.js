import api from './axios'

// GET /api/users?page=&limit=
export const getUsersApi = async (page = 1, limit = 10) => {
  const res = await api.get('/users', { params: { page, limit } })
  return res.data.data
}

// GET /api/users/:id
export const getUserApi = async (id) => {
  const res = await api.get(`/users/${id}`)
  return res.data.data
}

// POST /api/users (admin membuat user baru)
export const createUserApi = async ({ fullName, email, password, company, role }) => {
  const res = await api.post('/users', {
    full_name: fullName, 
    email, 
    password, 
    company, 
    role,
  })
  return res.data.data
}

// PUT /api/users/:id (admin mengubah data user lain)
export const updateUserApi = async (id, { fullName, email, company, role }) => {
  const res = await api.put(`/users/${id}`, {
    full_name: fullName, 
    email, 
    company, 
    role,
  })
  return res.data.data
}

// DELETE /api/users/:id (admin menghapus user)
export const deleteUserApi = async (id) => {
  const res = await api.delete(`/users/${id}`)
  return res.data
}

// PATCH /api/users/me/password (ganti password sendiri)
export const changePasswordApi = async ({ oldPassword, newPassword, confirmPassword }) => {
  const res = await api.patch('/users/me/password', {
    old_password: oldPassword,
    new_password: newPassword,
    confirm_password: confirmPassword,
  })
  return res.data
}

// PATCH /api/users/:id/password (admin reset password user lain)
export const adminResetPasswordApi = async (id, { newPassword, confirmPassword }) => {
  const res = await api.patch(`/users/${id}/password`, {
    new_password: newPassword,
    confirm_password: confirmPassword,
  })
  return res.data
}