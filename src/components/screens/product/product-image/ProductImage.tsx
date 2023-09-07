import React, {FC, useEffect, useLayoutEffect, useRef, useState} from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import Drift from "drift-zoom";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SwiperClass from "swiper/types/swiper-class";
import SwiperCore, { FreeMode, Navigation, Thumbs, Controller } from "swiper";
import styles from "@/src/components/screens/product/Product.module.scss";
import {MaterialIcon} from "@/src/components/ui/MaterialIcon";
import ReactImageMagnify from "react-image-magnify";
import cn from "classnames";


interface ProductImageProps {
    images: [
        {
            id: string
            url: string
        }
    ]
}

const ProductImage: FC<ProductImageProps> = ({ images }) => {
    console.log(images)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
    const [firstSwiper, setFirstSwiper] = useState<SwiperClass>();
    const [secondSwiper, setSecondSwiper] = useState<SwiperClass>();
    const swiper1Ref = useRef<React.MutableRefObject<null>>(null);
    const swiper2Ref = useRef();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const paneContainerRef = useRef()
    const imageRef = useRef()

    useEffect(() => {
        const paneContainer = paneContainerRef.current;

        document.querySelectorAll('.swiper-slide').forEach((slide) => {
            const img = slide.querySelector('.img') as HTMLImageElement;

            if (img) {
                new Drift(img, {
                    paneContainer: paneContainer,
                    inlinePane: 0,
                });
            }
        });
    }, [images]);

    useLayoutEffect(() => {
        if (swiper1Ref.current !== null) {
            //@ts-ignore
            swiper1Ref.current.controller.control = swiper2Ref.current;
        }
    }, []);




    const handleSlideChange = (swiper: SwiperCore) => {
        const currentIndex = swiper.activeIndex;
        if (currentIndex !== currentSlideIndex) {
            setCurrentSlideIndex(currentIndex);
        }
    };

    return (
        <>
            <Swiper


                onSlideChange={(swiper) => handleSlideChange(swiper)}
                controller={{ control: secondSwiper }}
                spaceBetween={10}
                slidesPerView={1}
                grabCursor={true}
                // navigation={true}
                thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
                modules={[FreeMode, Navigation, Thumbs, Controller]}
                className={cn("w-full ml-10", styles.swiperMain)}
            >
                {Boolean(images[0]?.url)  ? images && images.map((item: {id: string, url: string}) => (
                    <SwiperSlide  key={item.id}>
                        <Image src={item.url} fill alt='fg' className='img' data-zoom={item.url} />
                    </SwiperSlide>
                )) : <div className={styles.notImage}>
                    <MaterialIcon name='MdImageNotSupported' />
                    <h2>Изображение отсутствует</h2>
                </div>}

            </Swiper>
            <Swiper
                controller={{ control: firstSwiper }}
                loop={false}
                spaceBetween={20}
                slidesPerView={3.5}
                watchSlidesProgress
                touchRatio={0.2}
                //@ts-ignore
                preloadImages={false}
                lazy
                direction={'vertical'}
                slideToClickedSlide={true}
                onSwiper={setThumbsSwiper}
                modules={[Navigation, Thumbs, Controller]}
                className={cn(styles.thumbGalaty,"w-[120px] h-[600px] rounded-xl swiperThumb")}
            >
                {images && images.map((item: {id: string, url: string}) => (
                    <SwiperSlide   key={item.id}>
                        <Image src={item.url} fill alt='fg' />

                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.zoom}
                 //@ts-ignore
                 ref={paneContainerRef}></div>
        </>
    );
};

export default ProductImage;
