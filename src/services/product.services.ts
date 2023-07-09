import axios from 'axios'
import {IProduct} from "@/src/interfaces/product.interface";


export const ProductServices = {
    async getAllProducts(searchTerm?:string){
       try{
           const response = await axios.get(`http://localhost:8080/product `, {
               params: searchTerm ? {searchTerm} : {}
           })
           return response.data
       }catch(e){
           console.log(e)
       }
    },
    async getShittyFilter(data: string){
        try{
            const response = await axios.get(`http://localhost:8080/product/search/${data}`)
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
    async getOnlyCategories(data: string) {
        try{
            const response = await axios.get(`http://localhost:8080/catalog/${data}`)
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