import { FC } from 'react';
import Image from 'next/image';
import styles from './CatalogItem.module.scss';
import {FaShoppingCart} from "react-icons/fa";
import Button from "@/src/components/ui/button/Button";
import {useActions} from "@/src/hooks/useActions";
import {IProduct} from "@/src/interfaces/product.interface";
import Link from "next/link";
import cn from "classnames";
import {useAuth} from "@/src/hooks/useAuth";
import {useMutation} from "@tanstack/react-query";
import {OrderService} from "@/src/services/order.service";

const CatalogWrapper: FC<{ product: IProduct }> = ({product}) => {
    const {addToCart, removeFromCart} = useActions()

    const {user} = useAuth()
    //@ts-ignore
    const email = user?.email
    console.log(user)


    const {mutateAsync} = useMutation(
        (data) => OrderService.createOrder(data),
        {
            onSuccess:(data) => {
                console.log('kkk')
            }

        }
    )

    const handleClick = () => {
        addToCart({product, quantity: 1})
        mutateAsync({email: email, idProduct: product.id})
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
