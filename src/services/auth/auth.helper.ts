import Cookies from 'js-cookie'
import {IAuthResponse, ITokens} from "@/src/components/store/user/user.interface";


export const getAccessToken =  () => {
	const accessToken = Cookies.get('accessToken')
	console.log(accessToken, 'sdgdsg')
	return accessToken || null
}

// export const getUserFromStorage =  () => {
// 	return JSON.parse(localStorage.getItem('user') || '{}')
// }
export const saveTokensStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken)
	console.log(data.refreshToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	// localStorage.setItem('user', JSON.stringify(data.refreshToken))
}

export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
	localStorage.removeItem('user')
}
