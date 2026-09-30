import api from './axios'

export const getCategoriesApi = () => api.get('/categories').then(r => r.data.data)
export const getTagsApi = () => api.get('/tags').then(r => r.data.data)
export const createCategoryApi = (name) => api.post('/categories', { name }).then(r => r.data.data)
export const createTagApi = (name) => api.post('/tags', { name }).then(r => r.data.data)