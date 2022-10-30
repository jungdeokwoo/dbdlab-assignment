import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
})
