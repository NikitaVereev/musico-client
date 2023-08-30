import instance from "@/src/api/api.interceptors";
import axios from "axios";
import Cookies from "js-cookie";


export const FileService = {



	async upload(file: FormData, productId?: string) {
		const refreshToken = Cookies.get('accessToken')
		return axios.post<{ url: string; name: string }[]>(`/product/upload`, file, {
			params: { productId },
			headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${refreshToken}`  },
		})
	},
	async uploadReviewFile(file: FormData, reviewId?: string) {
		return axios.post<{ url: string; name: string }[]>(`/review/upload`, file, {
			params: { reviewId },
			headers: { 'Content-Type': 'multipart/form-data'},
		})
	},
}
