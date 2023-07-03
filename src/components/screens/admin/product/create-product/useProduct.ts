import {useMutation} from "@tanstack/react-query";
import {ProductServices} from "@/src/services/product.services";
import {toastError} from "@/src/components/utils/toast-error";
import {toastr} from 'react-redux-toastr'
import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";

export const useProduct = (setValue: UseFormSetValue<any>) => {
    const {query, push} = useRouter()

    const { mutateAsync } = useMutation(
        (data: any) => ProductServices.createProduct(data),
        {
            onError(error) {
                toastError(error, 'Добавление продукта');
            },
            onSuccess() {
                toastr.success('Товар добавлен', 'товар добавлен успешно');
                push('http://localhost:3000/catalog');
            },
        }
    );

    const {mutateAsync: mutateEditProduct} = useMutation(
        ({slug, data}: any) => ProductServices.changeProduct(slug, data),
        {
            onError(error) {
                toastError(error, 'Товар не был обновлён')
            },
            onSuccess(){
                toastr.success('Товар обновлен', 'товар успешно обновлен')
                push('http://localhost:3000/catalog')
            }
        }
    )

    const onSubmitCreate: SubmitHandler<any> = async(data) => {
        await mutateAsync(data)
    }
    const onSubmitEdit: SubmitHandler<any> = async(data) => {
        await mutateEditProduct(data)
    }

    return {onSubmitCreate, onSubmitEdit}
}