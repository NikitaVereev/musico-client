import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { ProductServices } from '@/src/services/product.services';
import { toastError } from '@/src/components/utils/toast-error';
import { toastr } from 'react-redux-toastr';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FileService } from '@/src/services/file.service';

export const useProduct = (setValue: UseFormSetValue<any>) => {
    const { query, push } = useRouter();
    const [ggg, setGGG] = useState(null);

    const { mutateAsync: createProduct } = useMutation(
        (data: any) => ProductServices.createProduct(data),
        {
            onError(error) {
                toastError(error, 'Добавление продукта');
            },
            onSuccess(ggg) {
                toastr.success('Товар добавлен', 'товар добавлен успешно');
                //@ts-ignore
                setGGG(ggg);
                localStorage.setItem('ggg',
                    //@ts-ignore
                    ggg.data.id);
                localStorage.setItem('subType',
                    //@ts-ignore
                    ggg.data.subType)
                push('http://localhost:3000/manage/create-product/create-image');
            },
        }
    );

    const { mutateAsync: changeProduct } = useMutation(
        (data: any) => ProductServices.changeProduct(data),
        {
            onError(error) {
                toastError(error, 'Товар не был обновлён');
            },
            onSuccess() {
                toastr.success('Товар обновлен', 'товар успешно обновлен');
                push('http://localhost:3000/catalog');
            },
        }
    );

    const { mutateAsync: createImageProduct } = useMutation(
        (data: any) => FileService.upload(data,
            //@ts-ignore
            ggg),
        {
            onError(error) {
                toastError(error, 'Добавление продукта');
            },
            onSuccess() {
                toastr.success('Товар добавлен', 'товар добавлен успешно');

            },
        }
    );

    const onSubmitCreate: SubmitHandler<any> = async (data) => {
        console.log('dsf', data);
        await createProduct(data);
    };

    const onSubmitEdit: SubmitHandler<any> = async (data) => {
        console.log('df', data);
        await changeProduct(data);
    };

    const onSubmitImage: SubmitHandler<any> = async (data) => {
        console.log('df', data);
        await createImageProduct(data);
    };

    return { onSubmitCreate, onSubmitEdit, onSubmitImage, ggg };
};
