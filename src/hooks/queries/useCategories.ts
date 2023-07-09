import {useQuery} from "@tanstack/react-query";
import {CategoryService} from "@/src/services/category.service";

export const useCategories = (subType: string) => {
    const {data, isLoading, isError} = useQuery(['get all categories'], () => CategoryService.getAllCategories(subType))


    return {data, isLoading, isError}
}
