import api from './axios'

// Kirim pesan dari form Hubungi Kami (publik, tanpa token)
// POST /api/contacts
// Payload: { name, email, phone, subject, message }
// Returns: contact yang tersimpan
export const submitContactApi = async ({ name, email, phone, subject, message }) => {
  const res = await api.post('/contacts', {
    name,
    email,
    phone,
    subject,
    message,
  })
  return res.data
}
