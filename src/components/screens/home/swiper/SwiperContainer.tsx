import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, {Navigation, Pagination, Autoplay, EffectCoverflow} from "swiper";
// import { useState, useRef, useEffect } from "react";
import image1 from '@/src/assets/mus1.jpg'
import image2 from '@/src/assets/mus2.jpg'
import image3 from '@/src/assets/mus3.jpg'
import image4 from '@/src/assets/mus4.jpg'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "./SwiperContainer.module.scss";

import Image from "next/image";

const items = [
    {
        title: "Recursive",
        src:
            image1
    },
    {
        title: "Bunker",
        src:
image2    },
    {
        title: "Small Mountain",
        src:
image3    },
    {
        title: "Walking On a Dream",
        src:
image4    }
];

const SwiperContainer = () => {
    SwipeCore.use([Navigation, Pagination, Autoplay]);

    return (
        <>

            <Swiper
                rewind={true}
                navigation={true}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }}
                slidesPerView={1}
                coverflowEffect={{

                    stretch: 0,
                    depth: 200,
                    modifier: 2,
                    slideShadows: false
                }}
                // pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image className={styles.sliderImage} src={image1} alt="SliderImg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className={styles.sliderImage} src={image2} alt="SliderImg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className={styles.sliderImage} src={image3} alt="SliderImg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className={styles.sliderImage} src={image4} alt="SliderImg" />
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default SwiperContainer;
