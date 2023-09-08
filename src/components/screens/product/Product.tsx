import React, {FC, useLayoutEffect, useRef, useState} from 'react';
import { ProductPageProps } from '@/pages/product/[slug]';
import styles from './Product.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import Button from '@/src/components/ui/button/Button';

import dynamic from "next/dynamic";
import {MaterialIcon} from "@/src/components/ui/MaterialIcon";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {OrderService} from "@/src/services/order.service";
import {useAuth} from "@/src/hooks/useAuth";
import {ProductServices} from "@/src/services/product.services";
import RatingList from "@/src/components/screens/product/rating/RatingList";
import DashboardSlider from "@/src/components/ui/dashboard-slider/DashboardSlider";
import {useFilters} from "@/src/components/screens/catalog/useFilters";
import Skeleton from "react-loading-skeleton";
import ProductImage from "@/src/components/screens/product/product-image/ProductImage";
import Meta from "@/src/components/utils/meta/Meta";

const DynamicRating = dynamic(() => import('./rating/RateProduct'), {
    ssr: false
})

const Product: FC<ProductPageProps> = ({ product }) => {
    const [isTab, setIsTab] = useState(0)
    const [isPopup, setIsPopup] = useState(false)

    const queryClient = useQueryClient()
    const { isFilterUpdated, queryParams, updateQueryParams } = useFilters();
    const subType = 'acoustic-guitar';



    const {isLoading: loadingCreated, isError, error, isSuccess, mutate} = useMutation({
        mutationFn: (createCartItem) => OrderService.createOrder(
            // @ts-ignore
            createCartItem),
        onSuccess: () =>
            queryClient.invalidateQueries(["single"]

        )
    })

    const {isLoading, data: rating} = useQuery(['get product by id:', product.id], () => ProductServices.getReview(product.id))

    const {isLoading: loadingProducts, data: products, isFetching, isError: errorProduct} = useQuery(['get products'], () => ProductServices.getOnlyCategories(subType, queryParams.page, queryParams.searchTerm, queryParams.sort), {
        initialData: [],
        enabled: true,
    })

    const {user} = useAuth()
    const email = user?.email



    const handleClick = () => {
        if(!user) return alert('Зарегистрируйтесь, ради бога')
        //@ts-ignore
        mutate({email: user.email, idProduct: product.id})


    }





    return (
        <Meta title={product.title} description={product.description}>
        <div className={cn(styles.wrapper)}>
            <div>
                {/*<h1>{product.title}</h1>*/}
            </div>
            <div className={cn(styles.mainInfo)}>
                <div className={cn("h-full gap-10  w-1/2 flex flex-row-reverse relative")}>
                    <ProductImage images={product.fileUrl} />
                </div>
                <div className='w-1/2 h-full pt-[50px] wrapperHeader'>
                    <div id='myPortal' ></div>
                    <div className={styles.side}>
                        <h1 className='text-3xl'>{product.title}</h1>
                        <div className={styles.rating}>

                            <MaterialIcon name='MdStarRate' />
                            <span>{product?.rating ? product?.rating : 0}</span>
                        </div>
                        <div className={styles.tabs}>
                            <button className={cn(isTab === 0 && styles.active)} onClick={() => setIsTab(0)}>О товаре</button>
                            <button className={cn(isTab === 1 && styles.active)} onClick={() => setIsTab(1)}>Характеристики</button>
                            <button className={cn(isTab === 2 && styles.active)} onClick={() => setIsTab(2)}>Доставка</button>
                        </div>
                        {isTab === 0 ? <div className={styles.flexItem}>
                            <p><span className='font-bold '>Категория:</span> {product.subType}</p>
                            <p><span className='font-bold '>Производитель:</span> {product.company}</p>
                            <p><span className='font-bold '>Описание:</span> {product.description}</p>
                        </div> : isTab === 1 ?  <div className='grid overflow-y-auto grid-cols-2 gap-8'>
                            {product?.features && Object.entries(product?.features).map(([key, value]) => (
                                <div key={key}>
                                    <div className={cn( 'w-full flex gap-12 justify-between')}>
                                        <div className={styles.features}>{key}</div>
                                        <p className='w-1/2'>{value}</p>
                                    </div>
                                </div>
                            )).slice(1)}
                        </div> : <div><h2>Скоро добавится</h2></div>}

                    </div>
                    <div className='flex items-center mt-12 justify-between'>
                        <h1 className='m-0 p-0'>{product.price} руб.</h1>
                        <Button className={styles.btn}onClick={handleClick}>
                            Добавить в корзину
                        </Button>
                    </div>
                </div>
            </div>


            <div>
                <h2>Смотрите также</h2>
                <div>
                    {
                        loadingProducts ? <Skeleton /> ? errorProduct : <div>Ошибка</div> :
                            //@ts-ignore
                        <DashboardSlider products={products.objects} isLoading={loadingProducts}/>
                    }</div>
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <h2>Отзывы</h2>
                    <Button onClick={() => setIsPopup(!isPopup)}>
                        Добавить отзыв
                    </Button>
                </div>
                {isPopup && <div className='relative'>

                    <DynamicRating setIsPopup={setIsPopup} productId={product.id}/>
                </div>}

                {isLoading ? <div>Загрузка</div> :
                    //@ts-ignore
                    <RatingList data={rating} />}


            </div>
        </div>
        </Meta>
    );
};

export default Product;
