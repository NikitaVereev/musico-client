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
import dynamic from "next/dynamic";
import {MaterialIcon} from "@/src/components/ui/MaterialIcon";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {OrderService} from "@/src/services/order.service";
import {useAuth} from "@/src/hooks/useAuth";

const DynamicRating = dynamic(() => import('./rating/RateProduct'), {
    ssr: false
})

const Product: FC<ProductPageProps> = ({ product }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
    const [firstSwiper, setFirstSwiper] = useState<SwiperClass>();
    const [secondSwiper, setSecondSwiper] = useState<SwiperClass>();
    const [isPopup, setIsPopup] = useState(false)
    const swiper1Ref = useRef<React.MutableRefObject<null>>(null);
    const swiper2Ref = useRef();


    const queryClient = useQueryClient()



    const {isLoading: loadingCreated, isError, error, isSuccess, mutate} = useMutation({
        mutationFn: (createCartItem) => OrderService.createOrder(
            // @ts-ignore
            createCartItem),
        onSuccess: () =>
            queryClient.invalidateQueries(["single"]

        )
    })

    const {user} = useAuth()
    const email = user?.email

    useLayoutEffect(() => {
        if (swiper1Ref.current !== null) {
            //@ts-ignore
            swiper1Ref.current.controller.control = swiper2Ref.current;
        }
    }, []);

    const handleClick = () => {
        if(!user) return alert('Зарегистрируйтесь, ради бога')
        //@ts-ignore
        mutate({email: user.email, idProduct: product.id})


    }

    return (
        <div className={cn(styles.wrapper, 'pt-[100px] ')}>
            <div>
                {/*<h1>{product.title}</h1>*/}
            </div>
            <div className={cn(styles.mainInfo)}>
                <div className={cn("h-full gap-10  w-1/2 flex flex-row-reverse")}>
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
                        // navigation={true}
                        thumbs={{
                            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                        }}
                        modules={[FreeMode, Navigation, Thumbs, Controller]}
                        className="w-full h-[600px]  "
                    >
                        {product.fileUrl && product.fileUrl.map(item => (
                            <SwiperSlide  key={item.id}>
                                <Image src={item.url} fill alt={product.title}/>
                            </SwiperSlide>
                        ))}
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
                        className="w-[120px] h-[600px] rounded-xl "
                    >
                        {product.fileUrl && product.fileUrl.map(item => (
                            <SwiperSlide  key={item.id}>
                                <Image src={item.url} fill alt={product.title}  />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='w-1/2 h-full pt-[50px] wrapperHeader'>
                    <div id='myPortal' ></div>
                    <div className={styles.side}>
                        <h1 className='text-3xl'>{product.title}</h1>
                        <div className={styles.rating}>

                            <MaterialIcon name='MdStarRate' />
                            <span>{product?.rating ? product?.rating : 0}</span>
                        </div>
                        <p><span className='font-bold '>Категория:</span> {product.subType}</p>
                        <p><span className='font-bold '>Производитель:</span> {product.company}</p>
                        <p><span className='font-bold '>Описание:</span> {product.description}</p>
                    </div>
                    <div className='flex items-center mt-12 justify-between'>
                        <h1 className='m-0 p-0'>{product.price} руб.</h1>
                        <Button className={styles.btn}onClick={handleClick}>
                            Добавить в корзину
                        </Button>
                    </div>
                </div>
            </div>

            <div className='w-[75%] mt-24'>
                <div className='align-baseline flex mb-[24px]'>
                    <h2 className='text-[#001a34] text-[24px] font-bold'>Характеристики</h2>
                </div>
                <div >
                   <div className='grid grid-cols-2 gap-8'>
                       {product?.features && Object.entries(product?.features).map(([key, value]) => (
                           <div key={key}>
                               <div className={cn( 'w-full flex gap-12 justify-between')}>
                                   <div className={styles.features}>{key}</div>
                                   <p className='w-1/2'>{value}</p>
                               </div>
                           </div>
                       )).slice(1)}
                   </div>
                </div>
            </div>

            <div>
                <div className='flex items-center justify-between'>
                    <h1>Отзывы</h1>
                    <Button onClick={() => setIsPopup(!isPopup)}>
                        Добавить отзыв
                    </Button>
                </div>
                {isPopup && <div className='relative'>

                    <DynamicRating setIsPopup={setIsPopup} productId={product.id}/>
                </div>}
                {product?.productReview.map(item => (
                    <div key={item.id} className={styles.reviewsWrapper}>
                        <div className='flex items-center gap-3 '>
                            <h2>имя</h2>
                            <div className={styles.rating}>
                                <MaterialIcon name='MdStarRate' />
                                <span>{item.rating} / 5</span>
                            </div>
                        </div>
                        <div>
                            {item.review}
                        </div>
                        <div >
                            {item.image && <div className='flex gap-2'>
                                {item.image.map(item => (
                                    <>
                                        {console.log(item)}
                                        <Image src={item.url} key={item.id} width={140} height={140} alt={item.id} /></>
                                ))}
                            </div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
