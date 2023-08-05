import axios from "axios";

export const CategoryService = {
    async getAllCategories(subType: string) {
        try{
            const response = await axios.get(`/product/features/subtype?subType=${subType}`)
            return response.data
        }catch (e){
            console.log(e)
        }
}
}