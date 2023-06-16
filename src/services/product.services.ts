import axios from 'axios'
import {IProduct} from "@/src/shared/types/product.interface";

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
    async createProduct(data){
        try{
            return axios.post('http://localhost:8080/product', data)
        }catch(e){
            console.log(e)
        }
    }
}