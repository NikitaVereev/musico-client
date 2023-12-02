import React, {FC} from 'react';
import Image from 'next/image';
import styles from './CatalogItem.module.scss';
import {FaShoppingCart} from "react-icons/fa";
import Button from "@/src/components/ui/button/Button";

import {IProduct} from "@/src/interfaces/product.interface";
import Link from "next/link";
import cn from "classnames";
import {useAuth} from "@/src/hooks/useAuth";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {OrderService} from "@/src/services/order.service";
import {MaterialIcon} from "@/src/components/ui/MaterialIcon";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/src/components/utils/toast-error";

const CatalogWrapper: FC<{ product: IProduct }> = ({product}) => {


    const queryClient = useQueryClient()





    const {isLoading: loadingCreated, isError, error, isSuccess, mutate} = useMutation({
        mutationFn: (createCartItem) => OrderService.createOrder(
            // @ts-ignore
            createCartItem),
        onSuccess: () => queryClient.invalidateQueries(["single"])
    })

    const {user} = useAuth()
    const email = user?.email




    const { data: orders, isLoading } = useQuery(['single'], () => email ? OrderService.getOrder(email) : null, {

    });
    if(isLoading) return <div className='loader'>Загрузка</div>






    const handleClick = () => {
        if(!user) return toastr.error('Зарегистрируйтесь', 'чтобы совершить покупки')
        //@ts-ignore
        mutate({email: user.email, idProduct: product.id})


    }

    return (
        <>
                <div key={product.id} className={cn(styles.glass, 'animate-scaleIn')}>
                    <Link className={styles.absolutePosition} href={`/product/${product.slug}`}></Link>
                    <div className={styles.rating}>
                        <MaterialIcon name='MdStarRate' />
                        <span>{product?.rating ? product?.rating : 0}</span>
                    </div>
                    <div className={styles.card}>


                        <div className={styles.image}>
                            {Boolean(product.fileUrl[0]?.url)  ? <Image src={product.fileUrl[0]?.url} fill alt={product.title} /> : <div className={styles.notImage}>
                                <MaterialIcon name='MdImageNotSupported' />
                                <h2>Изображение отсутствует</h2>
                            </div>}
                        </div>
                        <h3 className={styles.price}>{product.price} р.</h3>
                        <div className={styles.title}>
                            <h5>{product.title}</h5>
                        </div>
                        <div className={styles.description}>

                            <Button onClick={handleClick}><FaShoppingCart />ДОБАВИТЬ</Button>
                        </div>
                    </div>
                </div>
           

        </>
    );
};

export default CatalogWrapper;
