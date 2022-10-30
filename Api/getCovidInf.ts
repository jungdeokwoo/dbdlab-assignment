import { Axios } from '.'

const TOTAL_URL = process.env.NEXT_PUBLIC_TOTAL_API_URL
const AGEGEN_URL = process.env.NEXT_PUBLIC_AGEGEN_API_URL

export const getCovidTotalInf = async () => {
  if (TOTAL_URL) {
    const response = await Axios.get(TOTAL_URL)
    return response.data
  }
}

export const getCovidAgeGenInf = async () => {
  if (AGEGEN_URL) {
    const response = await Axios.get(AGEGEN_URL)
    return response.data
  }
}
