import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import styles from './RateProduct.module.scss'
import {useAuth} from "@/src/hooks/useAuth";
import {useRateProduct} from "@/src/components/screens/product/rating/useRateProduct";
import StarRating from 'react-star-rating-component'
import button from "@/src/components/ui/button/Button";
import Field from "@/src/components/ui/form-elements/Field";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import UploadField from "@/src/components/ui/form-elements/upload-field/UploadField";
import {MaterialIcon} from "@/src/components/ui/MaterialIcon";
import {useOutside} from "@/src/hooks/useOutside";

interface IRateProduct{
    productId: string
    setIsPopup: Dispatch<SetStateAction<boolean>>
}

const RateProduct: FC<IRateProduct> = ({productId, setIsPopup}) => {
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
    const [isOpen, setIsOpen] = useState(false)
    const {ref, isShow, setIsShow} = useOutside(false)
    const [isComment, setIsComment] = useState('')
    const {handleClick, mutateAsync, isSended, rating, isImage, createImageWithComment} = useRateProduct({email: user?.email, productId})

    const onSubmitCreate: SubmitHandler<any> = async (data) => {
        console.log('Данные формы:', data); // Вывод данных формы в консоль
        //@ts-ignore
        await mutateAsync({rating: rating, review: data.review});
    };
    const onSubmitImage: SubmitHandler<any> = async (data) => {
        console.log('Данные формыdffdfdfddff:', data); // Вывод данных формы в консоль
        //@ts-ignore
        await createImageWithComment(isImage.data);
    };
    console.log(isImage, 'asgkhslke')

    return (
        <div className={styles.layout}>
            <button onClick={() => setIsPopup(false)}>
                <MaterialIcon name='MdClose'  />
            </button>
            <div className={styles.wrapper}>
                <h3>Поставьте отметку данному товару</h3>
                <p>Оценка влияет на рекомендации</p>
                {user ? (
                    <>
                        {isSended ?<div className={styles.thanks}>Спасибо за оценку</div> :<>
                            <form  onSubmit={
                                handleSubmit(onSubmitCreate)

                            }>
                                <StarRating name='star-rating' value={rating} onStarClick={handleClick} emptyStarColor='#4f4f4f'  />
                                <Field
                                    placeholder="Комментарий"
                                    {...register('review', )}
                                    name="review"
                                />
                                {isOpen && <form onSubmit={onSubmitImage}>
                                <Controller
                                    control={control}
                                    name="fileUrl"
                                    defaultValue=""
                                    render={({field: {value, onChange}, fieldState: {error}}) => (
                                        <UploadField
                                            onChange={onChange}
                                            value={value}
                                            placeholder="Изображение"
                                            error={error}
                                            //@ts-ignore
                                            folder={isImage?.data}
                                        />
                                    )}
                                />
                            </form>}

                                <button>Отправить</button>
                                <button onClick={() => {
                                    onSubmitCreate
                                    setIsOpen(true)

                                }}>ДОбавить изображения</button>
                            </form>
                            </>
                        }
                    </>
                ) : <button>Зарегистрироваться</button>}
            </div>
        </div>
    );
}

export default RateProduct;