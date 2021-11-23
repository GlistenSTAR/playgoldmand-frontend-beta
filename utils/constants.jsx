const dev = process.env.NODE_ENV !== 'production'

export const baseApiUrl = dev ? 'http://localhost:3001/' : 'http://dev.goldmand.io:8081/'

export const tokenKey = 'gmd_auth_token'

export const SECOND = 1000
export const MINUTE = SECOND * 60
export const HOUR = MINUTE * 60
export const DAY = HOUR * 24