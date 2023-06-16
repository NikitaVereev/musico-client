import {  saveToStorage } from './auth.helper'
import {IAuthResponse} from "@/src/components/store/user/user.interface";
import axios from "axios";

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(
			'http://localhost:8080/auth/register',
			{ email, password }
		)
		console.log(response.data.token)

		if (response.data.token) saveToStorage(response.data.token)
		return response
	},
	async login(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(
			'http://localhost:8080/auth/authenticate',
			{ email, password }
		)
		console.log(response.data)

		if (response.data.token) saveToStorage(response.data.token)
		return response
	},


}
