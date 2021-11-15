import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Cookies from 'universal-cookie'
import { fetchUserProfile } from '../services/AuthService'
import { MINUTE, tokenKey } from '../utils/constants'

const useUserData = () => {
  const router = useRouter()
  const data = useQuery('userData', fetchUserProfile, {
    staleTime: MINUTE * 10,
    cacheTime: MINUTE * 10,
    retry: false,
    select: ({ data }) => data.data.user,
    onError: ({ response: { data } }) => {
      // user banned
      if (data.code === 405 || data.code === 406) {
        const cookies = new Cookies()
        cookies.remove(tokenKey, { path: '/', secure: true })
        return router.push('/auth/login')
      } else {
        toast.error('Error retrieving user data, please refresh the website.')
      }
    },
  })
  return data
}

export default useUserData
