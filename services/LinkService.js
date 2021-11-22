import Axios from '../utils/axios'
import { baseApiUrl } from '../utils/constants'
export const endpointUrl = url => `${baseApiUrl}${url}`

export const fetchLinkGet = () => {
  return Axios.get(endpointUrl('link/getLink'))
}

export const fetchEditLink = data => {
  return Axios.post(endpointUrl('link/editLink'), data)
}
