import Axios from '../utils/axios'
import { baseApiUrl } from '../utils/constants'
export const endpointUrl = url => `${baseApiUrl}${url}`

export const fetchLogout = () => {
  return Axios.get(endpointUrl('auth/logout'))
}
export const fetchRegister = data => {
  return Axios.post(endpointUrl('auth/register'), { username: data.username, email: data.email })
}