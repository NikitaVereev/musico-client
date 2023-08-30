
import {IProduct} from "@/src/interfaces/product.interface";
import instance from "@/src/api/api.interceptors";
import Cookies from "js-cookie";



export const ProductServices = {
    async getAllProducts(search?: string) {
        try {
            const response = await instance.get(`/product/search?query=${search}`);
            return response.data;
        } catch (e) {
            throw new Error('Не удалось получить данные о продуктах');
        }
    },
    async getProductBySlug(slug: string){
        try{
            const response = await instance.get(`/product/slug?slug=${slug}`)
            return response.data
        }catch(e) {
            console.log(e)
        }
    },
    async getSearchedProduct(data: IProduct[]){
        try{
            const response = await instance.get(`/product/search/${data}`)
            return response.data
        }catch(e){
            console.log(e)
        }
    } ,
    async getOnlyCategories(heading: string, page: number, data: string, sort: string) {
        try {
            const response = await instance.get(`/product/search/${heading}${data && `?${data}`}`, {
                params: {
                    numberOfPage: page,
                    sort: sort,

                },
            });
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    async createProduct(data: string){

        try{
            const refreshToken = Cookies.get('accessToken')
            return instance.post('/product/new', data, {
                headers: {Authorization: `Bearer ${refreshToken}`}
            })
        }catch(e){
            console.log(e)
        }
    },

    async createReview(email: string, productId: string, data: any){
        try{
            return instance.post(`/review/new?email=${email}&productId=${productId}`, data)
        }catch(e){
            console.log(e)
        }
    },

    async createFeatures(type: string, id: string | null, data: string){
        const refreshToken = Cookies.get('accessToken')
        try{
            return instance.post(`/product/features/${type}?productId=${id}`, data,{
                headers: {Authorization: `Bearer ${refreshToken}`}
            })
        }catch (e){
            console.log(e)
        }
    },


    async changeProduct( data: string) {
        try{
            return instance.put(`/product/changes`, data)
            console.log('привет', data)
        }catch (e){
            console.log(e, 'dsgwegewhewh')
        }
    },

    async deleteProduct(id: string) {
        try {
            const refreshToken = Cookies.get('accessToken')
            const response = await instance.delete<string>(`/product/changes?id=${id}`, {
                headers: {Authorization: `Bearer ${refreshToken}`}
            });
            return response.data;
        } catch (e) {
            throw new Error('Не удалось удалить продукт');
        }
    },
}