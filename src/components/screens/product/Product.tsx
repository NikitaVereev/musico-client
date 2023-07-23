import React, {FC, useLayoutEffect, useRef, useState} from 'react';
import { ProductPageProps } from '@/pages/product/[slug]';
import ReactImageMagnify from 'react-image-magnify';
import styles from './Product.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import Button from '@/src/components/ui/button/Button';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SwiperClass from "swiper/types/swiper-class";
import SwiperCore, { FreeMode, Navigation, Thumbs, Controller } from "swiper";

const Product: FC<ProductPageProps> = ({ product }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
    const [firstSwiper, setFirstSwiper] = useState<SwiperClass>();
    const [secondSwiper, setSecondSwiper] = useState<SwiperClass>();
    const swiper1Ref = useRef<React.MutableRefObject<null>>(null);
    const swiper2Ref = useRef();

    console.log(product)

    useLayoutEffect(() => {
        if (swiper1Ref.current !== null) {
            //@ts-ignore
            swiper1Ref.current.controller.control = swiper2Ref.current;
        }
    }, []);

    return (
        <div className={cn(styles.wrapper, 'pt-[100px]')}>
            <div className={cn(styles.mainInfo, 'h-[90vh]')}>
                <div className={cn("h-[550px] ")}>
                    <Swiper
                        onSwiper={(swiper) => {
                            if (swiper1Ref.current !== null) {
                                //@ts-ignore
                                swiper1Ref.current = swiper;
                            }
                        }}
                        
                        controller={{ control: secondSwiper }}
                        spaceBetween={10}
                        slidesPerView={1}
                        grabCursor={true}
                        navigation={true}
                        thumbs={{
                            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                        }}
                        modules={[FreeMode, Navigation, Thumbs, Controller]}
                        className="w-[848px] h-[454px] rounded-xl"
                    >
                        {product.fileUrl && product.fileUrl.map(item => (
                            <SwiperSlide  key={item.id}>
                                <img
                                    src={item.url}

                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        controller={{ control: firstSwiper }}
                        loop={false}
                        spaceBetween={10}
                        slidesPerView={8}
                        watchSlidesProgress
                        touchRatio={0.2}
                        //@ts-ignore
                        preloadImages={false}
                        lazy
                        slideToClickedSlide={true}
                        onSwiper={setThumbsSwiper}
                        modules={[Navigation, Thumbs, Controller]}
                        className="h-[100.4px] w-[848px] mt-[20px] rounded-xl"
                    >
                        {product.fileUrl && product.fileUrl.map(item => (
                            <SwiperSlide className='w-[70px]' key={item.id}>
                                <img
                                    src={item.url}
                                className='rounded-2xl h-[70px]'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='w-1/2 h-full pt-[50px] wrapperHeader'>
                    <div id='myPortal' ></div>
                    <div className={styles.side}>
                        <h1 >{product.title}</h1>
                        <div>rating</div>
                        <p><span className='font-bold '>Категория:</span> {product.subType}</p>
                        <p><span className='font-bold '>Описание:</span> {product.description}</p>
                    </div>
                    <div className='flex items-center mt-12 justify-between'>
                        <h1 className='m-0 p-0'>{product.price} руб.</h1>
                        <Button className={styles.btn} onClick={() => {}}>
                            Добавить в корзину
                        </Button>
                    </div>
                </div>
            </div>

            {product?.features && Object.entries(product?.features).map(([key, value]) => (
            <div key={key} className='flex items-center gap-8'>
                <h3 className='w-[200px]'>{key}</h3>
                <p>{value}</p>
            </div>
        )).slice(1)}
        </div>
    );
};

export default Product;
