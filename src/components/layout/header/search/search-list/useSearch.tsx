import { ChangeEvent, useState } from "react";
import { useDebounce } from "@/src/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { ProductServices } from "@/src/services/product.services";

export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const { isSuccess, data } = useQuery(
        ['search product list', debouncedSearch],
        () => {
            if (!debouncedSearch) {
                return Promise.resolve(null);
            } else {
                return ProductServices.getAllProducts(debouncedSearch);
            }
        }
    );

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return { isSuccess, handleSearch, setSearchTerm, data, searchTerm };
};
