import axios from 'axios'


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
    }
}