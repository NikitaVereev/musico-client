import axios from "axios";

export const OrderService = {
    async createOrder({email, idProduct}: {email: string, idProduct: string}){
        try{
            return axios.post(`/order?email=${email}&idProduct=${idProduct}`)
        }
        catch(e){
            console.log(e)
        }
    },
    async getOrder(data: string){
        try{
            const response = await axios.get(`/order/pending?email=${data}`)
            return response.data
        }
        catch(e){
            console.log(e)
        }
    },
    async deleteOrderItem(data: string){
        try{
            return axios.delete(`/order?idItemOrder=${data}`)
        }catch(e){
            console.log(e)
        }
    },
    async getAllOrders(data: string){
        try{
            const response = await axios.get(`/order?email=${data}`)
            return response.data
        }
        catch(e){
            console.log(e)
        }
    },
    async decrementQuantityOrderItem(data: string){
        try{
            return axios.put(`/order?action=DECREASE&idItemOrder=${data}`)

        }
        catch(e){
            console.log(e)
        }
    },

    async getAllOrdersByAdmin(){
        try{
            const response = await axios.get('/order/all')
            return response.data
        }catch(e){
            console.log(e)
        }
    }

}