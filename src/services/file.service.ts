import axios from 'axios'


export const FileService = {



	async upload(file: FormData, productId?: string) {
		return axios.post<{ url: string; name: string }[]>(`http://89.248.193.110:8080/product/upload`, file, {
			params: { productId },
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},
	async uploadReviewFile(file: FormData, reviewId?: string) {
		return axios.post<{ url: string; name: string }[]>(`http://89.248.193.110:8080/review/upload`, file, {
			params: { reviewId },
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},
}
