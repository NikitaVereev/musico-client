import { FC } from 'react';
import {ProductPageProps} from "@/pages/product/[slug]";
import {useActions} from "@/src/components/hooks/useActions";
import styles from './Product.module.scss'
import Image from "next/image";

const Product: FC<ProductPageProps> = ({product}) => {
    const {addToCart} = useActions()

    return (
        <div className={styles.wrapper}>
            <div className={styles.mainInfo}>
                <div className={styles.images}>
                    <Image src={product.fileUrl} alt={product.title} fill />
                </div>
                <div className={styles.side}>
                    <p>{product.subType}</p>
                    <h1>{product.title}</h1>
                    <div className={styles.sideInfo}>
                        <p>Артикул: dklfjlwheg</p>
                        <p>Гарантия: 1 год</p>
                    </div>
                    <p>{product.description}</p>

                </div>
            </div>
        </div>
    );
}

export default Product;