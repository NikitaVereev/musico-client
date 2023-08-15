import { FC } from 'react';
import Field from "@/src/components/ui/form-elements/Field";
import {SubmitHandler, useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {ProductServices} from "@/src/services/product.services";
import {toastError} from "@/src/components/utils/toast-error";
import {toastr} from "react-redux-toastr";
import styles from "@/src/components/screens/admin/product/ProductManipulation.module.scss";
import Button from "@/src/components/ui/button/Button";
import Link from "next/link";

const FieldsClassic: FC<{productId: string | null}> = ({ productId}) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    const { mutateAsync } = useMutation(
        (data: any) => ProductServices.createFeatures('classic-guitar', productId, data),

        {
            onError(error) {
                toastError(error, 'Добавление продукта');
            },
            onSuccess(ggg) {
                toastr.success('Товар добавлен', 'товар добавлен успешно');


            },
        }
    );

    const onSubmitCreate: SubmitHandler<any> = async (data) => {
        console.log('Данные формы:', data);
        await mutateAsync(data);
    };
    return (
        <><form  onSubmit={
            handleSubmit(onSubmitCreate)

        }>
            <Field
                placeholder="Форма корпуса"
                {...register('Форма корпуса', )}
                name="Форма корпуса"
            />
            <Field
                placeholder="Верхняя дека"
                {...register('Верхняя дека', )}
                name="Верхняя дека"
            />
            <Field
                placeholder="Задняя дека"
                {...register('Задняя дека', )}
                name="Задняя дека"
            />
            <Field
                placeholder="Обечайка"
                {...register('Обечайка', )}
                name="Обечайка"
            />
            <Field
                placeholder="Ширина грифа"
                {...register('Ширина грифа', )}
                name="Ширина грифа"
            />
            <Field
                placeholder="Накладка грифа"
                {...register('Накладка грифа', )}
                name="Накладка грифа"
            />
            <Field
                placeholder="Лады"
                {...register('Лады', )}
                name="Лады"
            />
            <Field
                placeholder="Цвет"
                {...register('Цвет', )}
                name="Цвет"
            />
            <Field
                placeholder="Количество струн"
                {...register('Количество струн', )}
                name="Количество струн"
            />
            <Field
                placeholder="Гриф"
                {...register('Гриф', )}
                name="Гриф"
            />
            <Field
                placeholder="Колковая механика"
                {...register('Колковая механика', )}
                name="Колковая механика"
            />
            <Field
                placeholder="Мензура"
                {...register('Бридж', )}
                name="Бридж"
            />
            <div className={styles.buttons}>
                <Button>
                    <span>Опубликовать</span>
                </Button>
                <Link href="/">
                    <Button>
                        <span>Отмена</span>
                    </Button>
                </Link>
            </div>
        </form>
        </>
    );
}

export default FieldsClassic;