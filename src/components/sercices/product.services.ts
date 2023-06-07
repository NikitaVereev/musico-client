import axios from 'axios'

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