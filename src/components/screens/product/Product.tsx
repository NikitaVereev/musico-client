import { FC } from 'react';
import {ProductPageProps} from "@/pages/product/[slug]";
import {useActions} from "@/src/components/hooks/useActions";
import styles from './Product.module.scss'
import Image from "next/image";
import cn from 'classnames'
import Button from '@/src/components/ui/button/Button'
import {FiChevronLeft , FiChevronRight} from "react-icons/fi";

const Product: FC<ProductPageProps> = ({product}) => {
    const {addToCart} = useActions()

    return (
        <>
            <div className={cn(styles.wrapper)}>

                <div className={styles.mainInfo}>
                    <div className={styles.images}>
                        <Image src={product.fileUrl} alt={product.title} fill />
                        <button><FiChevronLeft /></button>
                        <button><FiChevronRight /></button>
                    </div>
                    <div className={styles.side}>
                        <p>{product.subType}</p>
                        <h1>{product.title}</h1>
                        <div className={styles.sideInfo}>
                            <p>Артикул: dklfjlwheg</p>
                            <p>Гарантия: 1 год</p>
                        </div>
                        <p>{product.description}</p>
                        <Button className={styles.btn} onClick={() => addToCart({product, quantity: 1})}>
                            Добавить в корзину
                        </Button>
                        <div className={styles.info}>
                            <div><h3>Характеристика</h3><p>Описание</p></div>
                            <div><h3>Характеристика</h3><p>Описание</p></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Product;