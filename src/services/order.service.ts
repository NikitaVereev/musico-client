import instance from "@/src/api/api.interceptors";


export const OrderService = {
    async createOrder({email, idProduct}: {email: string, idProduct: string}){
        try{
            return instance.post(`/order?email=${email}&idProduct=${idProduct}`)
        }
        catch(e){
            console.log(e)
        }
    },

    async createPaymant({
                            //@ts-ignore
                            data}){
        try{
            return instance.post('/pay/url', data)
        }catch (e){
            console.log(e)
        }
    },
    async getOrder(data: string){
        try{
            const response = await instance.get(`/order/pending?email=${data}`)
            return response.data
        }
        catch(e){
            console.log(e)
        }
    },
    async deleteOrderItem(data: string){
        try{
            return instance.delete(`/order?idItemOrder=${data}`)
        }catch(e){
            console.log(e)
        }
    },
    async getAllOrders(data: string){
        try{
            const response = await instance.get(`/order?email=${data}`)
            return response.data
        }
        catch(e){
            console.log(e)
        }
    },
    async decrementQuantityOrderItem(data: string){
        try{
            return instance.put(`/order?action=DECREASE&idItemOrder=${data}`)

        }
        catch(e){
            console.log(e)
        }
    },

    async getAllOrdersByAdmin(){
        try{
            const response = await instance.get('/order/all')
            return response.data
        }catch(e){
            console.log(e)
        }
    }

}