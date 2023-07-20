import axios from 'axios'
import {IProduct} from "@/src/interfaces/product.interface";


export const ProductServices = {
    async getAllProducts(search?:string){
       try{
           const response = await axios.get(`http://localhost:8080/product`, {
               params: {search},

           })

           return response.data
       }catch(e){
           console.log(e)
       }
    },
    async getShittyFilter(subType: string, heading: string,data: string){
        try{
            const response = await axios.get(`http://localhost:8080/product/search/${subType}?product.subType=${heading}&${data}`)
            return response.data
        }catch(e){
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
    async getOnlyCategories( data: string, heading: string) {
        try{
            const response = await axios.get(`http://localhost:8080/product/search/${data}?product.subType=${heading}`)
            return response.data
        }catch(e){
            console.log(e)
        }
    },
    async createProduct(data: string){
        try{
            return axios.post('http://localhost:8080/product', data)
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
        return axios.delete<string>(`http://localhost:8080/product?id=${id}`)
    }
}