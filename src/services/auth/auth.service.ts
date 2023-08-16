import {removeTokensStorage, saveToStorage} from './auth.helper'
import {IAuthResponse} from "@/src/components/store/user/user.interface";
import axios from "axios";
import Cookies from 'js-cookie'
import {getContentType} from "@/src/api/api.helpers";
// import axios from "@/src/api/api.interceptors";

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(
			'http://89.248.193.110:8080/auth/register',
			{ email, password }
		)


		if (response.data.accessToken) saveToStorage(response.data)
		return response
	},
	async login(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(
			'http://89.248.193.110:8080/auth/login',
			{ email, password }
		)
		console.log(response.data)

		if (response.data.accessToken) saveToStorage(response.data)
		return response
	},

	logout(){
		removeTokensStorage()
		localStorage.removeItem('user')
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axios.post<IAuthResponse>(
			'http://89.248.193.110:8080/auth/refresh-token', null,
			{
				headers: {Authorization: `Bearer ${refreshToken}`}
			}
		)
		if(response.data) saveToStorage(response.data)
		console.log(response.data)
		return response
	}


}
