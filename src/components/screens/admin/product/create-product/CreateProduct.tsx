import { FC } from 'react';
import Button from '@/src/components/ui/button/Button';
import { useForm, Controller } from 'react-hook-form';
import Field from '@/src/components/ui/form-elements/Field';
import Link from 'next/link';
import styles from '../ProductManipulation.module.scss';
import cn from 'classnames';
import generateSlug from '@/src/components/utils/string/generate-slug';
import SlugField from '@/src/components/ui/form-elements/slug-field/SlugField';
import {useProduct} from "@/src/components/screens/admin/product/create-product/useProduct";
import UploadField from "@/src/components/ui/form-elements/upload-field/UploadField";
import {useAuth} from "@/src/hooks/useAuth";
import AdminNavigation from "@/src/components/ui/admin-navigation/AdminNavigation";


const CreateProduct: FC = () => {

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
    const { user } = useAuth()
    console.log(user)
    const {onSubmitCreate} = useProduct(setValue)
    if(user?.admin === false) {
        return <div>Нету(</div>
    }




    return (
        <div className='wrapper'>

            <AdminNavigation />
            <h1>Создание продукта</h1>
        <form onSubmit={handleSubmit(onSubmitCreate)} style={{ padding: 30 }} className={cn( 'marginTop, animate-scaleIn')}>
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
                    placeholder="Подтип"
                    {...register('subType', )}
                    name="subType"
                />
            </div>
            <div>
                <Field
                    placeholder="Компания"
                    {...register('company', )}
                    name="company"
                />
            </div>

            <Controller
                control={control}
                name="fileUrl"
                defaultValue=""

                render={({
                             field: { value, onChange },
                             fieldState: { error },
                         }) => (
                    <UploadField
                        onChange={onChange}
                        value={value}
                        placeholder="Изображение"
                        error={error}
                        folder="uploads"
                    />
                )}
                rules={{
                    required: 'Poster is required',
                }}
            />




            <div className={styles.buttons}>
                <Button >
                    <span>Опубликовать</span>
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
