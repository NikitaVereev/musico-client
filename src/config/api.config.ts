export const API_URL = `${process.env.APP_URL}`
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}`

export const getAuthUrl = (string: string) => `/auth/${string}`
export const getUserUrl = (string: string) => `/users/${string}`
export const getGenresUrl = (string: string) => `/genres/${string}`
export const getMoviesUrl = (string: string) => `/movies/${string}`
export const getActorsUrl = (string: string) => `/actors/${string}`
export const getRatingUrl = (string: string) => `/ratings/${string}`
