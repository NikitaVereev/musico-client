import axios from "axios";

export const CategoryService = {
    async getAllCategories(subType: string) {
        try{
            const response = await axios.get(`http://localhost:8080/catalog/${subType}/features`)
            return response.data
        }catch (e){
            console.log(e)
        }
}
}