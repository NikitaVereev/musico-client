import { FC } from 'react';
import Image from 'next/image';
import styles from './CatalogItem.module.scss';
import {FaShoppingCart} from "react-icons/fa";
import Button from "@/src/components/ui/button/Button";
import {useActions} from "@/src/components/hooks/useActions";
import {IProduct} from "@/src/components/types/product.interface";
import Link from "next/link";

const CatalogWrapper: FC<{ product: IProduct }> = ({product}) => {
    const {addToCart, removeFromCart} = useActions()

    return (
        <>

                <div key={product.id} className={styles.glass}>
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

                            <Button onClick={() => addToCart({product, quantity: 1})}><FaShoppingCart />ДОБАВИТЬ</Button>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default CatalogWrapper;
