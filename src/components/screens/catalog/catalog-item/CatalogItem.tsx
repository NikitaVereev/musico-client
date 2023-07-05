import {FC, useEffect} from 'react';
import Image from 'next/image';
import styles from './CatalogItem.module.scss';
import {FaShoppingCart} from "react-icons/fa";
import Button from "@/src/components/ui/button/Button";
import {useActions} from "@/src/hooks/useActions";
import {IProduct} from "@/src/interfaces/product.interface";
import Link from "next/link";
import cn from "classnames";
import {useAuth} from "@/src/hooks/useAuth";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {OrderService} from "@/src/services/order.service";

const CatalogWrapper: FC<{ product: IProduct }> = ({product}) => {
    const {addToCart, removeFromCart} = useActions()

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
        if(!user) return alert('Зарегистрируйтесь, ради бога')
        //@ts-ignore
        mutate({email: user.email, idProduct: product.id})


    }

    return (
        <>
                <div key={product.id} className={cn(styles.glass, 'animate-scaleIn')}>
                    <Link className={styles.absolutePosition} href={`/product/${product.slug}`}></Link>
                    <div className={styles.card}>


                        <div className={styles.image}>
                            <Image src={product.fileUrl} fill alt={product.title} />
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
