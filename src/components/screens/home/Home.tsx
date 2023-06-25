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

const Home: FC = () => {
  const {data: products, isLoading}: any = useQuery<IProduct[]>(['all products'], () => ProductServices.getAllProducts())
  if(isLoading)  return <div>Загрузка</div>



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
    <div className='wrapper py-6 relative'>
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
        <Carousel items={carouselItems} className='mb-6 w-full ' />
      </div>
      <div>
        <h1 className='font-bold text-5xl mb-8'>Популярные продукты</h1>
        <div className={styles.mostPopular}>
          {
            products.map((product: IProduct) => <CatalogItem  key={product.id} product={product} /> ).slice(0,5)
          }
        </div>
      </div>
      <div>
      </div>
    </div>;
    <Banner>
      <div className='wrapper'>
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
  <div className="wrapper">

  </div>
  </>
};

export default Home;
