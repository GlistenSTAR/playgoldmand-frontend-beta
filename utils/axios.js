import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': ' application/json',
  },
  withCredentials: true,
})

instance.interceptors.request.use(
  (httpConfig) => {
    return httpConfig
  },
  (err) => Promise.reject(err)
)

export default instance
