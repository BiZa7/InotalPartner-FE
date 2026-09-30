import api from './axios'

// PENTING: harus di-index dengan [postType], kalau tidak fungsi ini
// mengembalikan objek {news,event,article} utuh, bukan string path,
// dan axios akan gagal dengan error "Invalid URL".
const basePath = (postType) => ({
  news: '/news',
  event: '/events',
  article: '/articles',
})[postType]

export const createPostApi = (postType, payload) =>
  api.post(basePath(postType), payload).then((r) => r.data.data)

export const updatePostApi = (postType, id, payload) =>
  api.put(`${basePath(postType)}/${id}`, payload).then((r) => r.data.data)

export const getPostsApi = (postType, page = 1, limit = 10) =>
  api
    .get(basePath(postType), {
      params: { page, limit },
    })
    .then((r) => r.data.data)

export const getPostApi = (postType, id) =>
  api
    .get(`${basePath(postType)}/${id}`)
    .then((r) => r.data.data)

export const publishPostApi = (postType, id) =>
  api
    .post(`${basePath(postType)}/${id}/publish`)
    .then((r) => r.data.data)

export const takedownPostApi = (postType, id) =>
  api
    .post(`${basePath(postType)}/${id}/takedown`)
    .then((r) => r.data.data)


// ─────────────────────────────────────────────
// PUBLIC NEWS
// ─────────────────────────────────────────────

export const getPublicNewsApi = async (
  page = 1,
  limit = 10
) => {
  const response = await api.get('/public/news', {
    params: {
      page,
      limit,
    },
  })

  return response.data
}

export const getPublicEventsApi = async (
  page = 1,
  limit = 10
) => {
  const response = await api.get('/public/events', {
    params: {
      page,
      limit,
    },
  })

  return response.data
}

export const getPublicArticlesApi = async (
  page = 1,
  limit = 10
) => {
  const response = await api.get('/public/articles', {
    params: {
      page,
      limit,
    },
  })

  return response.data
}


// ─────────────────────────────────────────────
// UPLOAD IMAGE
// ─────────────────────────────────────────────

export const uploadImageApi = async (file) => {
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

  return (
    response.data.data?.url ||
    response.data.url
  )
}


// ─────────────────────────────────────────────
// RESOLVE IMAGE URL
// ─────────────────────────────────────────────

export const resolveImageUrl = (url) => {
  if (!url) return ''

  if (
    url.startsWith('blob:') ||
    url.startsWith('data:') ||
    /^https?:\/\//i.test(url)
  ) {
    return url
  }

  const baseUrl = (
    import.meta.env.VITE_FILE_BASE_URL || ''
  ).replace(/\/$/, '')

  return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`
}