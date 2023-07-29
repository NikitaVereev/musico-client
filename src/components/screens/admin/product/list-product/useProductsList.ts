import {ChangeEvent, useMemo, useState} from "react";
import {useDebounce} from "@/src/hooks/useDebounce";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "@tanstack/react-query";
import {ProductServices} from "@/src/services/product.services";
import {getAdminUrl} from "@/src/config/url.config";
import {toastError} from "@/src/components/utils/toast-error";
import {ITableItem} from "@/src/components/ui/admin-table/AdminTable/admin-table.interface";
import {toastr} from "react-redux-toastr";

export const useProductsList = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearch = useDebounce(searchTerm, 500)

    const {push} = useRouter()


    const {data: queryData, isLoading} = useQuery(['admin products list', debouncedSearch], () => ProductServices.getAllProducts(debouncedSearch), {
        select: ( data ) =>
            data.map(
                (
                    //@ts-ignore
                    product): ITableItem => ({
                    id: product.id,
                    editUrl: getAdminUrl(`/edit-product/${product.slug}`),
                    items: [
                        product.title,
                        product.subType,
                        product.company,
                        product.price
                    ],
                })
            ),
        onError: (error) => {
            toastError(error, 'movie list')
        },
    })


console.log(queryData, 'куку', debouncedSearch, searchTerm)



    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const {mutateAsync: deleteAsync} = useMutation(
        ['delete product'],
        (productId: string) => ProductServices.deleteProduct(productId),
        {
            onError: (error) => {
                toastError(error, 'Удаление товара не прошло')
            },
            onSuccess: () => {
                toastr.success('Удаление товара', 'удаление прошло успешно')
                // queryData.refetch()
            }
        }

    )


    return useMemo(
        () => ({
            handleSearch,
            queryData,
            searchTerm,
            deleteAsync,
            isLoading
        }),
        [searchTerm, deleteAsync, queryData, isLoading]
    )
}