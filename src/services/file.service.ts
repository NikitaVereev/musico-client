import axios from 'axios'
import instance from "@/src/api/api.interceptors";

export const FileService = {
	async upload(file: FormData, productId?: string) {
		return axios.post<{ url: string; name: string }[]>(`http://localhost:8080/product/upload`, file, {
			params: { productId },
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},
}
