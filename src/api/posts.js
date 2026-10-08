import api from './axios'

// BASE PATH

const basePath = (postType) => {
  const paths = {
    news: '/news',
    event: '/events',
    article: '/articles',
  }

  return paths[postType]
}


// ADMIN / CMS POSTS API

export const createPostApi = (postType, payload) => {
  return api
    .post(basePath(postType), payload)
    .then((response) => response.data.data)
}

export const updatePostApi = (postType, id, payload) => {
  return api
    .put(`${basePath(postType)}/${id}`, payload)
    .then((response) => response.data.data)
}

export const getPostsApi = (postType, page = 1, limit = 10) => {
  return api
    .get(basePath(postType), {
      params: {
        page,
        limit,
      },
    })
    .then((response) => response.data.data)
}

export const getPostApi = (postType, id) => {
  return api
    .get(`${basePath(postType)}/${id}`)
    .then((response) => response.data.data)
}

export const publishPostApi = (postType, id) => {
  return api
    .post(`${basePath(postType)}/${id}/publish`)
    .then((response) => response.data.data)
}

export const takedownPostApi = (postType, id) => {
  return api
    .post(`${basePath(postType)}/${id}/takedown`)
    .then((response) => response.data.data)
}

// PUBLIC POSTS API

export const getPublicNewsApi = async (page = 1, limit = 10) => {
  const response = await api.get('/public/news', {
    params: {
      page,
      limit,
    },
  })

  return response.data
}

export const getPublicEventsApi = async (page = 1, limit = 10) => {
  const response = await api.get('/public/events', {
    params: {
      page,
      limit,
    },
  })

  return response.data
}

export const getPublicArticlesApi = async (page = 1, limit = 10) => {
  const response = await api.get('/public/articles', {
    params: {
      page,
      limit,
    },
  })

  return response.data
}


// UPLOAD IMAGE

export const uploadImageApi = async (file) => {
  const formData = new FormData()

  formData.append('image', file)

  const response = await api.post('/uploads/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    timeout: 60000,
  })

  return response.data.data?.url || response.data.url || ''
}


// RESOLVE IMAGE URL

export const resolveImageUrl = (url) => {
  if (!url) {
    return ''
  }


  if (
    url.startsWith('blob:') ||
    url.startsWith('data:') ||
    url.startsWith('http://') ||
    url.startsWith('https://')
  ) {
    return url
  }

  const baseUrl = (
    import.meta.env.VITE_FILE_BASE_URL || ''
  ).replace(/\/$/, '')

  return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`
}