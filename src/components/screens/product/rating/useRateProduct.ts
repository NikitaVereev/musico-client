import {useState} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {toastError} from "@/src/components/utils/toast-error";
import {ProductServices} from "@/src/services/product.services";
import {toastr} from "react-redux-toastr";

export const useRateProduct = ({productId, email}) => {
    const [rating, setRating] = useState(0)
    const [isSended, setIsSended] = useState(false)
    const [isImage, setIsImage] = useState(null)


    const {mutateAsync} = useMutation(
        ['set rating product'],
        (data) => ProductServices.createReview(email, productId, data),
        {
            onError: (error) => {
                toastError(error, 'rating')
            },
            onSuccess(data){
                toastr.success('Рейтинг', 'спасибо за оценку, это важно для нас')
                setIsSended(true)
                setIsImage(data)
                console.log(data, 'adsgashash')


                setTimeout(() => {})
                setIsSended(false), 2500
            }
        }
    )

    const handleClick = async (nextValue: number) => {
        setRating(nextValue)
        // await mutateAsync({rating: nextValue, review: "Здарова"})
    }

    return {rating, isSended, mutateAsync, handleClick}
}