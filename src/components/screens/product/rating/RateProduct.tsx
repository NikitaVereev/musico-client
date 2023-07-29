import {FC, useState} from 'react';
import styles from './RateProduct.module.scss'
import {useAuth} from "@/src/hooks/useAuth";
import {useRateProduct} from "@/src/components/screens/product/rating/useRateProduct";
import StarRating from 'react-star-rating-component'
import button from "@/src/components/ui/button/Button";
import Field from "@/src/components/ui/form-elements/Field";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import UploadField from "@/src/components/ui/form-elements/upload-field/UploadField";

interface IRateProduct{
    productId: string
}

const RateProduct: FC<IRateProduct> = ({productId}) => {
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
    const {user} = useAuth()
    const [isRating, setIsRating] = useState(0)
    const [isComment, setIsComment] = useState('')
    const {handleClick, mutateAsync, isSended, rating} = useRateProduct({email: user?.email, productId})

    const onSubmitCreate: SubmitHandler<any> = async (data) => {
        console.log('Данные формы:', data); // Вывод данных формы в консоль
        await mutateAsync({rating: rating, review: data.review});
    };

    return (
        <div className={styles.wrapper}>
            <h3>Поставьте отметку данному товару</h3>
            <p>Оценка влияет на рекомендации</p>
            {user ? (
                <>
                    {isSended ?<div className={styles.thanks}>Спасибо за оценку</div> :<form  onSubmit={
                        handleSubmit(onSubmitCreate)

                    }>
                        <StarRating name='star-rating' value={rating} onStarClick={handleClick} emptyStarColor='#4f4f4f'  />
                        <Field
                            placeholder="Комментарий"
                            {...register('review', )}
                            name="review"
                        />
                        <Controller
                            control={control}
                            name="fileUrl"
                            defaultValue=""
                            render={({ field: { value, onChange }, fieldState: { error } }) => (
                                <UploadField
                                    onChange={onChange}
                                    value={value}
                                    placeholder="Изображение"
                                    error={error}
                                    //@ts-ignore

                                />
                            )}
                        />
                        <button>Отправить</button>
                        <button>ДОбавить изображения</button>
                    </form>}
                </>
            ) : <button>Зарегистрироваться</button>}
        </div>
    );
}

export default RateProduct;