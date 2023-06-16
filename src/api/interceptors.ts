import axios from 'axios'
import Cookies from 'js-cookie'





import { errorCatch, getContentType } from './api.helpers'

export const axiosClassic = axios.create({
    baseURL: 'http://localhost:8080',
    headers: getContentType(),
})

export const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: getContentType(),
})

instance.interceptors.request.use((config) => {
    const accessToken = Cookies.get('accessToken')

    if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})


export default instance
