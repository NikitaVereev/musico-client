import { FC } from 'react';
import {ProductPageProps} from "@/pages/product/[slug]";
import ReactImageMagnify from 'react-image-magnify'
import styles from './Product.module.scss'
import Image from "next/image";
import cn from 'classnames'
import Button from '@/src/components/ui/button/Button'
import {FiChevronLeft , FiChevronRight} from "react-icons/fi";

const Product: FC<ProductPageProps> = ({product}) => {


    return (
        <>
            <div className={cn(styles.wrapper, 'wrapper')}>

                <div className={styles.mainInfo}>
                    <div className={styles.images}>
                        {product.fileUrl ? <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: product.fileUrl,
                                },
                                largeImage: {
                                    src: product.fileUrl,
                                    width: 1200,
                                    height: 1800,
                                    sizes: '(min-width: 1200px) 1200px, 100vw',
                                },
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                                imageStyle: { objectFit: 'cover', backdropFilter: 'blur(20px)' },
                            }}
                        /> : <div>Нету</div>}
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
                        {/*<Button className={styles.btn} onClick={() => addToCart({product, quantity: 1})}>*/}
                        {/*    Добавить в корзину*/}
                        {/*</Button>*/}
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