import axios from 'axios'
import {IProduct} from "@/src/interfaces/product.interface";
import Cookies from "js-cookie";
// import axios from "@/src/api/api.interceptors";


export const ProductServices = {
    async getAllProducts(search?:string){
       try{
           const response = await axios.get(`http://localhost:8080/product/search?query=${search}`, )

           return response.data
       }catch(e){
           console.log(e)
       }
    },
    async getProductBySlug(slug: string){
        try{
            const response = await axios.get(`http://localhost:8080/product/slug?slug=${slug}`)
            return response.data
        }catch(e) {
            console.log(e)
        }
    },
    async getSearchedProduct(data: IProduct[]){
        try{
            const response = await axios.get(`http://localhost:8080/product/search/${data}`)
            return response.data
        }catch(e){
            console.log(e)
        }
    } ,
    async getOnlyCategories(heading: string, page: number, data: string, sort: string) {
        try {
            const response = await axios.get(`http://localhost:8080/product/search/${heading}${data && `?${data}`}`, {
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
            return axios.post('http://localhost:8080/product/new', data)
        }catch(e){
            console.log(e)
        }
    },

    async createReview(email: string, productId: string, data: any){
        try{
            return axios.post(`http://localhost:8080/review/new?email=${email}&productId=${productId}`, data)
        }catch(e){
            console.log(e)
        }
    },

    async createFeatures(type: string, id: string | null, data: string){
        try{
            return axios.post(`http://localhost:8080/product/features/${type}?productId=${id}`, data)
        }catch (e){
            console.log(e)
        }
    },

    async createImageProduct(id: string, data: any){
        try{
            return axios.post(`http://localhost:8080/product/upload?productId=${id}`, data)
        }catch(e){
            console.log(e)
        }
    },

    async changeProduct( data: string) {
        try{
            return axios.put(`http://localhost:8080/product/changes`, data)
            console.log('привет', data)
        }catch (e){
            console.log(e, 'dsgwegewhewh')
        }
    },

    async deleteProduct(id: string){
        return axios.delete<string>(`http://localhost:8080/product/changes?id=${id}`)
    }
}