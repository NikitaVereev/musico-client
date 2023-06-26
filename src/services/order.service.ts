import axios from "axios";

export const OrderService = {
    async createOrder({email, idProduct}){
        try{
            return axios.post(`http://localhost:8080/order?email=${email}&idProduct=${idProduct}`)
        }
        catch(e){
            console.log(e)
        }
    },
    async getOrder(data: string){
        try{
            const response = await axios.get(`http://localhost:8080/order/pending?email=${data}`)
            return response.data
        }
        catch(e){
            console.log(e)
        }
    }
}