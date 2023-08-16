import axios from "axios";

export const CategoryService = {
    async getAllCategories(subType: string) {
        try{
            const response = await axios.get(`http://89.248.193.110:8080/product/features/subtype?subType=${subType}`)
            return response.data
        }catch (e){
            console.log(e)
        }
}
}