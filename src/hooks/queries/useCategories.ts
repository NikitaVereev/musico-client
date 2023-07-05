import {useQuery} from "@tanstack/react-query";
import {CategoryService} from "@/src/services/category.service";

export const useCategories = () => {const {data, isLoading} = useQuery(['get categories'], () => CategoryService.getAllCategories(),
    {
        select: ({data}) => data
    })
    console.log(data)
    return {data, isLoading}
}
