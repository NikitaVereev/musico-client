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

const FieldsElectric: FC<{productId: string | null}> = ({ productId}) => {
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
                placeholder="Форма корпуса"
                {...register('Форма корпуса', )}
                name="Форма корпуса"
            />
            <Field
                placeholder="Корпус"
                {...register('Корпус', )}
                name="Корпус"
            />
            <Field
                placeholder="Гриф"
                {...register('Гриф', )}
                name="Гриф"
            />
            <Field
                placeholder="Крепление грифа"
                {...register('Крепление грифа', )}
                name="Крепление грифа"
            />
            <Field
                placeholder="Накладка грифа"
                {...register('Накладка грифа', )}
                name="Накладка грифа"
            />
            <Field
                placeholder="Профиль грифа"
                {...register('Профиль грифа', )}
                name="Профиль грифа"
            />
            <Field
                placeholder="Лады"
                {...register('Лады', )}
                name="Лады"
            />
            <Field
                placeholder="Колковая механика"
                {...register('Колковая механика', )}
                name="Колковая механика"
            />
            <Field
                placeholder="Мензура"
                {...register('Мензура', )}
                name="Мензура"
            />
            <Field
                placeholder="Звукосниматели"
                {...register('Звукосниматели', )}
                name="Звукосниматели"
            />
            <Field
                placeholder="Электроника"
                {...register('Электроника', )}
                name="Электроника"
            />
            <Field
                placeholder="Бридж"
                {...register('Бридж', )}
                name="Бридж"
            />
            <Field
                placeholder="Анкерный стержень"
                {...register('Анкерный стержень', )}
                name="Анкерный стержень"
            />
            <Field
                placeholder="Струны"
                {...register('Струны', )}
                name="Струны"
            />
            <Field
                placeholder="Фурнитура"
                {...register('Фурнитура', )}
                name="Фурнитура"
            />
            <Field
                placeholder="Цвет"
                {...register('Цвет', )}
                name="Цвет"
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

export default FieldsElectric;