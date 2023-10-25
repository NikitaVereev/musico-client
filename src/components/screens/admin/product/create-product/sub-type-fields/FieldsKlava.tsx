import { FC } from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {ProductServices} from "@/src/services/product.services";
import {toastError} from "@/src/components/utils/toast-error";
import {toastr} from "react-redux-toastr";
import Field from "@/src/components/ui/form-elements/Field";
import styles from "@/src/components/screens/admin/product/ProductManipulation.module.scss";
import Button from "@/src/components/ui/button/Button";
import Link from "next/link";

const FieldsKlava: FC<{productId: string | null}> = ({ productId}) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });
    const { mutateAsync } = useMutation(
        (data: any) => ProductServices.createFeatures('electric-guitar', productId, data),

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
                placeholder="Отделка"
                {...register('Отделка', )}
                name="Отделка"
            />
            <Field
                placeholder="Клавиатура"
                {...register('Клавиатура', )}
                name="Клавиатура"
            />
            <Field
                placeholder="Звуковой чип"
                {...register('Звуковой чип', )}
                name="Звуковой чип"
            />
            <Field
                placeholder="Макс. полифония"
                {...register('Макс. полифония', )}
                name="Макс. полифония"
            />
            <Field
                placeholder="Беспроводное подключение"
                {...register('Беспроводное подключение', )}
                name="Беспроводное подключение"
            />
            <Field
                placeholder="Дисплей"
                {...register('Дисплей', )}
                name="Дисплей"
            />
            <Field
                placeholder="Управление"
                {...register('Управление', )}
                name="Управление"
            />
            <Field
                placeholder="Эффекты"
                {...register('Эффекты', )}
                name="Эффекты"
            />
            <Field
                placeholder="Педали"
                {...register('Педали', )}
                name="Педали"
            />
            <Field
                placeholder="Подключения"
                {...register('Подключения', )}
                name="Подключения"
            />
            <Field
                placeholder="Динамики"
                {...register('Динамики', )}
                name="Динамики"
            />
            <Field
                placeholder="Источник питания"
                {...register('Источник питания', )}
                name="Источник питания"
            />
            <Field
                placeholder="Размеры"
                {...register('Размеры', )}
                name="Размеры"
            />
            <Field
                placeholder="Вес"
                {...register('Вес', )}
                name="Вес"
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

export default FieldsKlava;