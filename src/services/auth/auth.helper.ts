import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from '@/store/user/user.interface'

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set('token', data.token)
	Cookies.set('refreshToken', data.token)
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	console.log(data)
	localStorage.setItem('user', JSON.stringify(data))
}

export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}
