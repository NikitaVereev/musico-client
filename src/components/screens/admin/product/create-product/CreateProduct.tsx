import {FC, useEffect, useState} from 'react';
import { Controller, useForm } from 'react-hook-form';
import AdminNavigation from '@/src/components/ui/admin-navigation/AdminNavigation';
import cn from 'classnames';
import Field from '@/src/components/ui/form-elements/Field';
import SlugField from '@/src/components/ui/form-elements/slug-field/SlugField';
import generateSlug from '@/src/components/utils/string/generate-slug';
import styles from '@/src/components/screens/admin/product/ProductManipulation.module.scss';
import Button from '@/src/components/ui/button/Button';
import Link from 'next/link';
import { useAuth } from '@/src/hooks/useAuth';
import { useProduct } from '@/src/components/screens/admin/product/create-product/useProduct';
import dynamic from "next/dynamic";

const DynamicSelectType = dynamic(() => import('@/src/components/screens/admin/product/create-product/SelectType'), {
    ssr: false
})
const CreateProduct: FC = () => {
    const [isSubType, setIsSubType] = useState(null)
    useEffect(() => {
        setIsSubType(getValues('subType'))
        console.log('sdgdsg')
    }, [])


    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
        getValues,
        control,
    } = useForm({
        mode: 'onChange',
    });

    const options = [
        { value: 'Электрогитара', label: 'Электрогитара' },
        {value: "Клавишные", label: "Клавишные"},
        { value: 'Акустическая', label: 'Акустическая гитара' },
        { value: 'Классическая', label: 'Классическая гитара' },
      {value: 'Укулеле', label: 'Укулеле'}
    ]

    const { user } = useAuth();
    const { onSubmitCreate } = useProduct(setValue);

    if (user?.admin === false) {
        return <div>Нету(</div>;
    }
    console.log(getValues('subType'), 'aaaa');


    return (
        <div className="wrapper">
            <AdminNavigation />
            <h1>Создание продукта</h1>
            <form
                onSubmit={
                    handleSubmit(onSubmitCreate)

                }
                style={{ padding: 30 }}
                className={cn('marginTop, animate-scaleIn')}
            >
              <Controller
                control={control}
                name="subType"
                render={({ field, fieldState: { error } }) => (
                  <DynamicSelectType
                    field={field}
                    options={options || {}}
                    isLoading={false}

                    placeholder="Тип"
                    error={error}
                  />
                )}
                rules={{
                  required: 'Пожалуйста, введите хоть один жанр!',
                }}
              />
            <div >
                <Field
                    {...register('title', {
                        required: 'Title is required',
                    })}
                    // @ts-ignore
                    error={errors.title}
                    placeholder="Заголовок статьи..."
                    name="title"
                />
            </div>
            <div>
                <SlugField
                    register={register}
                    generate={() => {
                        setValue('slug', generateSlug(getValues('title')));
                    }}
                />
            </div>
            <div>
                <Field
                    {...register('price', {
                        required: 'Цена нужна, не продавайте за бесплатно!',
                    })}
                    placeholder="Цена"
                    type="number"
                    name="price"

                />
            </div>
            <div>
                <Field
                    {...register('description', )}
                    placeholder="Описание"
                    name="description"

                />
            </div>

            <div>
                <Field
                    placeholder="Компания"
                    {...register('company', )}
                    name="company"
                />

            </div>






                <div className={styles.buttons}>
                    <Button>
                        <span>Добавить изображения</span>
                    </Button>
                    <Link href="/">
                        <Button>
                            <span>Отмена</span>
                        </Button>
                    </Link>
                </div>

            </form>


        </div>
    );
};

export default CreateProduct;
