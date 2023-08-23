

import axios from "axios";
import instance from "@/src/api/api.interceptors";

export const CategoryService = {
    async getAllCategories(subType: string) {
        try{
            const response = await instance.get(`/product/features/subtype?subType=${subType}`)
            return response.data
        }catch (e){
            console.log(e)
        }
    }
}