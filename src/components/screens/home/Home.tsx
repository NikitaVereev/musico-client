'use client'

import React, { FC } from 'react';
import Carousel from "@/src/components/ui/carousel/Carousel";
import {carouselItems} from "@/src/components/screens/home/carousel.data";
import Catalog from "@/pages/catalog";
import CatalogMain from "@/src/components/screens/catalog/CatalogMain";
import Product from "@/src/components/screens/product/Product";
import {useQuery} from "@tanstack/react-query";
import styles from './Home.module.scss'
import {IProduct} from "@/src/interfaces/product.interface";
import {ProductServices} from "@/src/services/product.services";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";
import CatalogItem from "@/src/components/screens/catalog/catalog-item/CatalogItem";
import {drum, guitars, klavish} from "@/src/components/screens/catalog/catalog-list";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import Banner from "@/src/components/ui/banner/Banner";
import {banerData} from "@/src/components/screens/home/banner.data";
import {MaterialIcon} from "@/src/components/ui/MaterialIcon";
import MapComponent from "@/src/components/ui/map/MapComponent";



import SwiperContainer from "@/src/components/screens/home/swiper/SwiperContainer";





const Home: FC = () => {
  const {data: products, isLoading, isError}: any = useQuery<IProduct[]>(['all products'], () => ProductServices.getAllProducts())
  if(isLoading)  return <div className='loader'>Загрузка</div>

  return <>
    {/*<div className="box">*/}
    {/*  <div className="effect"></div>*/}
    {/*  <div className="effect"></div>*/}
    {/*  <div className="effect"></div>*/}
    {/*  <div className="effect"></div>*/}
    {/*  <div className="effect"></div>*/}
    {/*  <div className="effect"></div>*/}
    {/*  <div className="effect"></div>*/}
    {/*  <div className="effect"></div>*/}
    {/*  <div className="effect"></div>*/}
    {/*  <div className="effect"></div>*/}
    {/*  <div className="effect"></div>*/}
    {/*  <div className="effect"></div>*/}
    {/*  <div className="effect"></div>*/}
    {/*  <div className="effect"></div>*/}
    {/*</div>*/}
    <div className='wrapper py-12 relative'>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>


      <div className='flex items-center gap-6 flex-col'>

        <div className='w-full overflow-hidden flex flex-col items-center mb-24'>

          <h1 className='text-[8vw] font-black  animate-scaleIn'>Mus & Co</h1>
          <h3 className='text-center text-[2vw] animate-scaleIn'>магазин музыкальных инструментов</h3>
        </div>
        <Carousel items={carouselItems} className='mb-12 w-full ' />
      </div>
      <div>
        <h1 className='font-bold text-5xl mb-8'>Популярные продукты</h1>
        <div className={styles.mostPopular}>
          {isError ? <div>Ошибка загрузки</div> :
            products.map((product: IProduct) => <CatalogItem  key={product.id} product={product} /> ).slice(0,4)
          }
        </div>
      </div>
      <div>
      </div>
    </div>;
    <Banner className='my-32'>
      <div className='wrapperHeader'>
        <h1>Выбирая нас вы получите</h1>
        <div className={styles.bannerWrapper}>
          {banerData.map(item => (
              <div key={item.title} className={styles.banner}>
                <MaterialIcon name={item.icon} />
                <h4>{item.title}</h4>
              </div>
          )) }
        </div>
      </div>
    </Banner>
  <div className="wrapperHeader">
    <h1 className='font-bold text-5xl mb-8'>Кто мы?</h1>
    <div className='flex gap-10 items-end '>
      <div className={styles.about}>
        <h1 className='font-bold text-3xl mb-6'>MUS & CO - МУЗ и Ко</h1>
        <p>Музыкальный магазин MUS&CO работает без обеда и выходных с 10:00 до 20:00!</p>
        <p>В магазине представлены товары мировых брендов для новичков и профессионалов.</p>
        <p>Среди них - всемирно известные марки музыкальных инструментов: Casio, Cort LAG, Parkwood, SIGMA, D`addario, Flight, Ditson ...</p>
        <p>В ассортименте представлены разные модели струнных, духовых, клавишных, ударных инструментов и расходники к ним, а также звуковое и световое оборудование!</p>

        <div className='flex gap-12 mt-24'>
          <div>
            <h2 className='text-4xl font-black text-primary'>1000+</h2>
            <p className='text-primary'>Довольных клиентов</p>
          </div>
          <div>
            <h2 className='text-4xl font-black text-primary'>500+</h2>
            <p className='text-primary'>Тысяч заплачено Егору и Никите</p>
          </div>

        </div>
      </div>
      <div className='w-full overflow-hidden rounded-3xl'>
        <SwiperContainer />
      </div>

    </div>

  </div>
      <div className="wrapper my-32">
          <div>
              <h1 className='font-bold text-5xl mb-8'>Отзывы</h1>
              <div className='flex items-center justify-between gap-12'>
                  <div
                      style={{
                          width: '100%',
                          height: 1200,
                          overflow: "hidden",
                          position: "relative"
                      }}
                      className={styles.map}
                  >
                      <iframe
                          id="widgetFrame"
                          style={{
                              width: "100%",
                              height: "100%",
                              border: "1px solid #e6e6e6",
                              borderRadius: 8,
                              boxSizing: "border-box"
                          }}
                          src="https://yandex.ru/maps-reviews-widget/16582718810?comments"
                      />
                      <a
                          href="https://yandex.ru/maps/org/mus_co/16582718810/"
                          target="_blank"
                          style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              color: "#b3b3b3",
                              fontSize: 10,
                              fontFamily: "YS Text,sans-serif",
                              padding: "0 16px",
                              position: "absolute",
                              bottom: 8,
                              width: "100%",
                              textAlign: "center",
                              left: 0,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "block",
                              maxHeight: 14,
                              whiteSpace: "nowrap"
                          }}
                      >
                          Mus &amp; Co на карте Перми — Яндекс&nbsp;Карты
                      </a>
                  </div>

              </div>
          </div>
      </div>
  </>
};

export default Home;
