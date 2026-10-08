import api from './axios'

export const getUsersApi = async (page = 1, limit = 10, search = '') => {
  const res = await api.get('/users', {
    params: {
      page,
      limit,
      search: search.trim(),
    },
  })

  return res.data.data
}

export const getUserApi = async (id) => {
  const res = await api.get(`/users/${id}`)
  return res.data.data
}

export const createUserApi = async ({
  fullName,
  email,
  password,
  company,
  role,
}) => {
  const res = await api.post('/users', {
    full_name: fullName,
    email,
    password,
    company,
    role,
  })

  return res.data.data
}

export const updateUserApi = async (
  id,
  { fullName, email, company, role }
) => {
  const res = await api.put(`/users/${id}`, {
    full_name: fullName,
    email,
    company,
    role,
  })

  return res.data.data
}

export const deleteUserApi = async (id) => {
  const res = await api.delete(`/users/${id}`)
  return res.data
}

export const changePasswordApi = async ({
  oldPassword,
  newPassword,
  confirmPassword,
}) => {
  const res = await api.patch('/users/me/password', {
    old_password: oldPassword,
    new_password: newPassword,
    confirm_password: confirmPassword,
  })

  return res.data
}

export const adminResetPasswordApi = async (
  id,
  { newPassword, confirmPassword }
) => {
  const res = await api.patch(`/users/${id}/password`, {
    new_password: newPassword,
    confirm_password: confirmPassword,
  })

  return res.data
}