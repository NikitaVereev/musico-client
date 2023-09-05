import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, {Navigation, Pagination, Autoplay, EffectCoverflow} from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/swiper.min.css";


import styles from "./DashboardSlider.module.scss";

import Image from "next/image";
import React, {FC} from "react";
import {IProduct} from "@/src/interfaces/product.interface";
import Skeleton from "react-loading-skeleton";
import {MaterialIcon} from "@/src/components/ui/MaterialIcon";
import cn from "classnames";
import Link from "next/link";
import Button from "@/src/components/ui/button/Button";
import {FaShoppingCart} from "react-icons/fa";


const DashboardSlider: FC<IProduct> = (
    //@ts-ignore
    {products, isLoading}) => {
    console.log(products)
    SwipeCore.use([Navigation, Pagination, Autoplay]);

    return (
        <>

            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                initialSlide={2}
                centeredSlides={true}
                pagination={{
                    clickable: true
                }}
                className={styles.mySwiper}
            >
                {isLoading ? <div>доав</div> : products?.map((product: IProduct) =>
                    (<SwiperSlide  key={product.id} className={styles.swiperSlide}>
                            <div  className={cn(styles.glass, 'animate-scaleIn')}>
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

                                    <div className={styles.title}>
                                        <h3>{product.title}</h3>
                                    </div>
                                    <div className={styles.description}>
                                        <h3 className={styles.price}>{product.price} р.</h3>
                                        <Button onClick={() => {}}><FaShoppingCart /></Button>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    );
};

export default DashboardSlider;
