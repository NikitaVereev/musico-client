import instance from "@/src/api/api.interceptors";


export const FileService = {



	async upload(file: FormData, productId?: string) {
		return instance.post<{ url: string; name: string }[]>(`/product/upload`, file, {
			params: { productId },
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},
	async uploadReviewFile(file: FormData, reviewId?: string) {
		return instance.post<{ url: string; name: string }[]>(`/review/upload`, file, {
			params: { reviewId },
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},
}
