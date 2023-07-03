import { FC } from 'react';
import {Controller, useForm} from "react-hook-form";
import {useAuth} from "@/src/hooks/useAuth";
import {useProduct} from "@/src/components/screens/admin/product/create-product/useProduct";
import AdminNavigation from "@/src/components/ui/admin-navigation/AdminNavigation";
import cn from "classnames";
import Field from "@/src/components/ui/form-elements/Field";
import SlugField from "@/src/components/ui/form-elements/slug-field/SlugField";
import generateSlug from "@/src/components/utils/string/generate-slug";
import UploadField from "@/src/components/ui/form-elements/upload-field/UploadField";
import styles from "@/src/components/screens/admin/product/ProductManipulation.module.scss";
import Button from "@/src/components/ui/button/Button";
import Link from "next/link";
import {IProduct} from "@/src/interfaces/product.interface";

const EditProduct: FC<IProduct> = ({
                                       //@ts-ignore
                                       product}) => {

    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
        getValues,
        control,
        resetField,
        formState: {isDirty, isValid}
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            title: product.title,
            price: product.price,
            description: product.description,
            subType: product.subType,
            company: product.company

        }
    });
    const { user } = useAuth()
    console.log(user)
    const {onSubmitEdit} = useProduct(setValue)
    if(user?.admin === false) {
        return <div>Нету(</div>
    }




    return (
        <div className='wrapper'>

            <AdminNavigation />
            <h1>Редактирование продукта</h1>
            <form onSubmit={handleSubmit(onSubmitEdit)} style={{ padding: 30 }} className={cn( 'marginTop, animate-scaleIn')}>
                <div >
                    <Field
                        {...register('title')}
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
                            setValue('slug',
                                //@ts-ignore
                                generateSlug(getValues('title')));
                        }}
                    />
                </div>
                <div>
                    <Field
                        {...register('price')}
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
                    defaultValue={product.fileUrl}

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
                        <span>Изменить</span>
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

}

export default EditProduct;