'use client'

import React, { FC } from 'react';
import Carousel from "@/src/components/ui/carousel/Carousel";
import {carouselItems} from "@/src/components/screens/home/carousel.data";
import {useQuery} from "@tanstack/react-query";
import styles from './Home.module.scss'
import {IProduct} from "@/src/interfaces/product.interface";
import {ProductServices} from "@/src/services/product.services";
import Banner from "@/src/components/ui/banner/Banner";
import {banerData} from "@/src/components/screens/home/banner.data";
import {MaterialIcon} from "@/src/components/ui/MaterialIcon";



import SwiperContainer from "@/src/components/screens/home/swiper/SwiperContainer";
import Meta from "@/src/components/utils/meta/Meta";
import cn from "classnames";





const Home: FC = () => {
  // const {data: products, isLoading, isError}: any = useQuery<IProduct[]>(['all products'], () => ProductServices.getAllProducts())
  // if(isLoading)  return <div className='loader'>Загрузка</div>



    return <Meta title='Главная страница' description='Музыкальные инструменты для всех, покупка музыкальных инструментов'>
    <div className='wrapper py-12 relative'>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>


      <div className='flex items-center gap-6 flex-col'>

        <div className='w-full overflow-hidden flex flex-col items-center mb-24'>

          <h1 className={styles.logo}>Mus & Co</h1>
          <h3 className='text-center text-[2vw] animate-scaleIn'>магазин музыкальных инструментов</h3>
        </div>
        <Carousel items={carouselItems} className='mb-12 w-full ' />
      </div>
      {/*<div>*/}
      {/*  <h1 className='font-bold text-5xl mb-8'>Популярные продукты</h1>*/}
      {/*  <div className={styles.mostPopular}>*/}
      {/*    {isError ? <div>Ошибка загрузки</div> :*/}
      {/*      products.map((product: IProduct) => <CatalogItem  key={product.id} product={product} /> ).slice(0,4)*/}
      {/*    }*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div>
      </div>
    </div>;
    {/*<Banner className={styles.bannerContainer}>*/}
    {/*  <div className='wrapperHeader'>*/}
    {/*    <h1>Выбирая нас вы получите</h1>*/}
    {/*    <div className={styles.bannerWrapper}>*/}
    {/*      {banerData.map(item => (*/}
    {/*          <div key={item.title} className={styles.banner}>*/}
    {/*            <MaterialIcon name={item.icon} />*/}
    {/*            <h4>{item.title}</h4>*/}
    {/*          </div>*/}
    {/*      )) }*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</Banner>*/}
  <div className="wrapperHeader">
    <h1 className='font-bold  mb-8'>Кто мы?</h1>
    <div className={styles.aboutWrapper}>
      <div className={styles.about}>
        <h2 className='font-bold  mb-6'>MUS & CO</h2>
        <p>Музыкальный магазин MUS&CO работает без обеда и выходных с 10:00 до 20:00!</p>
        <p>В магазине представлены товары мировых брендов для новичков и профессионалов.</p>
        <p>Среди них - всемирно известные марки музыкальных инструментов: Casio, Cort LAG, Parkwood, SIGMA, D`addario, Flight, Ditson ...</p>
        <p>В ассортименте представлены разные модели струнных, духовых, клавишных, ударных инструментов и расходники к ним, а также звуковое и световое оборудование!</p>

        <div className='flex gap-12 mt-24'>
          <div>
            <h2 className=' font-black text-primary'></h2>
            <p className='text-primary'></p>
          </div>
          <div>
            <h2 className=' font-black text-primary'></h2>
            <p className='text-primary'></p>
          </div>

        </div>
      </div>
      <div className='w-full overflow-hidden rounded-3xl'>
        <SwiperContainer />
      </div>

    </div>

  </div>
  </Meta>
};

export default Home;
