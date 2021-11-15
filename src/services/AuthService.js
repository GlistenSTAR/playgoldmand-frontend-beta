import Axios from '../utils/axios'
import { baseApiUrl } from '../utils/constants'
export const endpointUrl = url => `${baseApiUrl}${url}`

export const fetchAdminLogin = data => {
  return Axios.get(endpointUrl('auth/adminlogin'), { adminUsername:data.adminUsername, password: data.password })
}
export const fetchLogout = () => {
  return Axios.get(endpointUrl('auth/logout'))
}
export const fetchRegister = data => {
  return Axios.post(endpointUrl('auth/register'), { accountName:data.accountName, username: data.username, email: data.email })
}
export const fetchCheckRegister = data => {
  return Axios.post(endpointUrl('auth/checkregister'), { accountName:data.accountName })
}
export const fetchUserProfile = () => {
  return Axios.get(endpointUrl('auth/getprofile'))
}