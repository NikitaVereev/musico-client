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

const FieldsUkulele: FC<{productId: string | null}> = ({ productId}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const { mutateAsync } = useMutation(
    (data: any) => ProductServices.createFeatures('ukulele', productId, data),

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
        placeholder="Тип"
        {...register('Тип', )}
        name="Тип"
      />
      <Field
        placeholder="Модель"
        {...register('Модель', )}
        name="Модель"
      />
      <Field
        placeholder="Размер"
        {...register('Размер', )}
        name="Размер"
      />
      <Field
        placeholder="Задняя дека"
        {...register('Задняя дека', )}
        name="Задняя дека"
      />
      <Field
        placeholder="Количество ладов"
        {...register('Количество ладов', )}
        name="Количество ладов"
      />
      <Field
        placeholder="Передняя дека"
        {...register('Передняя дека', )}
        name="Передняя дека"
      />
      <Field
        placeholder="Окантовка"
        {...register('Окантовка', )}
        name="Окантовка"
      />
      <Field
        placeholder="Гриф"
        {...register('Гриф', )}
        name="Гриф"
      />
      <Field
        placeholder="Накладка на гриф"
        {...register('Накладка на гриф', )}
        name="Накладка на гриф"
      />
      <Field
        placeholder="Порожки"
        {...register('Порожки', )}
        name="Порожки"
      />
      <Field
        placeholder="Колонки"
        {...register('Колонки', )}
        name="Колонки"
      />
      <Field
        placeholder="Цвет"
        {...register('Цвет', )}
        name="Цвет"
      />
      <Field
        placeholder="Покрытие"
        {...register('Покрытие', )}
        name="Покрытие"
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

export default FieldsUkulele;