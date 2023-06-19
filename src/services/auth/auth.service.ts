import {removeTokensStorage, saveToStorage} from './auth.helper'
import {IAuthResponse} from "@/src/components/store/user/user.interface";
import axios from "axios";
import Cookies from 'js-cookie'

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(
			'http://localhost:8080/auth/register',
			{ email, password }
		)
		console.log(response.data.accessToken)

		if (response.data.accessToken) saveToStorage(response.data)
		return response
	},
	async login(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(
			'http://localhost:8080/auth/login',
			{ email, password }
		)
		console.log(response.data)

		if (response.data.accessToken) saveToStorage(response.data)
		return response
	},

	logout(){
		removeTokensStorage()
		localStorage.removeItem('user')
	}


}
