import axios from '@/src/api/interceptors'

import { getUserUrl } from '@/src/config/api.config'

export const AdminService = {
	async getCountUsers() {
		return axios.get<number>(getUserUrl('/count'))
	},
}
