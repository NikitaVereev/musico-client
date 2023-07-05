import axios from "axios";

export const CategoryService = {
    async getAllCategories() {
        try{
            const response = await axios.get('http://localhost:8080/catalog/Электрогитара/features')
            console.log(response.data)
            return response.data
        }catch (e){
            console.log(e)
        }
}
}