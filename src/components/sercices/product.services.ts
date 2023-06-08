import axios from 'axios'
import {IProduct} from "@/src/components/types/product.interface";

export const ProductServices = {
    async getAllProducts(){
       try{
           const response = await axios.get('http://localhost:8080/product ')
           return response.data
       }catch(e){
           console.log(e)
       }
    }
}