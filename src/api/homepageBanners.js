import api from './axios'

const getErrorMessage = (error, fallback) =>
  error?.response?.data?.message ||
  error?.response?.data?.error ||
  fallback

// =========================================================
// GET SEMUA BANNER - ADMIN
// =========================================================

export const getBannersApi = async () => {
  try {
    const response = await api.get('/homepage/banners')
    return response.data
  } catch (error) {
    throw new Error(
      getErrorMessage(error, 'Gagal mengambil data slider.')
    )
  }
}

// =========================================================
// GET BANNER AKTIF - PUBLIC
// =========================================================

export const getPublicBannersApi = async () => {
  try {
    const response = await api.get('/public/homepage/banners')
    return response.data
  } catch (error) {
    throw new Error(
      getErrorMessage(
        error,
        'Gagal mengambil slider Landing Page.'
      )
    )
  }
}

// =========================================================
// UPLOAD IMAGE - ADMIN
// =========================================================

export const uploadBannerImageApi = async (file) => {
  try {
    const formData = new FormData()

    formData.append('image', file)

    const response = await api.post(
      '/uploads/image',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 60000,
      }
    )

    const data = response.data

    if (typeof data === 'string') {
      return data
    }

    return (
      data?.url ||
      data?.image_url ||
      data?.path ||
      data?.data?.url ||
      data?.data?.image_url ||
      data?.data?.path ||
      ''
    )
  } catch (error) {
    throw new Error(
      getErrorMessage(
        error,
        'Gagal mengupload gambar.'
      )
    )
  }
}

// =========================================================
// CREATE BANNER - ADMIN
// =========================================================

export const createBannerApi = async (payload) => {
  try {
    const response = await api.post(
      '/homepage/banners',
      payload
    )

    return response.data
  } catch (error) {
    throw new Error(
      getErrorMessage(
        error,
        'Gagal membuat slider.'
      )
    )
  }
}

// =========================================================
// UPDATE BANNER - ADMIN
// =========================================================

export const updateBannerApi = async (id, payload) => {
  try {
    const response = await api.put(
      `/homepage/banners/${id}`,
      payload
    )

    return response.data
  } catch (error) {
    throw new Error(
      getErrorMessage(
        error,
        'Gagal mengubah slider.'
      )
    )
  }
}

// =========================================================
// DELETE / TAKE DOWN BANNER - ADMIN
// =========================================================

export const deleteBannerApi = async (id) => {
  try {
    const response = await api.delete(
      `/homepage/banners/${id}`
    )

    return response.data
  } catch (error) {
    throw new Error(
      getErrorMessage(
        error,
        'Gagal menurunkan slider.'
      )
    )
  }
}

// =========================================================
// RESOLVE IMAGE URL
// =========================================================

export const resolveBannerImageUrl = (url) => {
  if (!url) return ''

  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('blob:')
  ) {
    return url
  }

  if (url.startsWith('/')) {
    return `http://localhost:8080${url}`
  }

  return `http://localhost:8080/${url}`
}