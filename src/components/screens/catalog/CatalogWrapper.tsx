import React, { FC, useEffect, useState } from 'react';
import styles from './Catalog.module.scss';

import CatalogItem from '@/src/components/screens/catalog/catalog-item/CatalogItem';
import { IProduct } from '@/src/interfaces/product.interface';
import { BsFilterCircleFill } from 'react-icons/bs';
import Button from '@/src/components/ui/button/Button';
import {useFilters} from "@/src/components/screens/catalog/useFilters";
import {useQuery} from "@tanstack/react-query";
import {useRouter} from "next/router";
import cn from "classnames";
import Banner from "@/src/components/ui/banner/Banner";
import {filtersData} from "@/src/components/screens/catalog/filters/filters.data";
import Sort from "@/src/components/screens/catalog/sort/Sort";

const CatalogWrapper: FC<{ products: IProduct[], heading: string }> = ({ products,heading }) => {
    const [categories, setCategories] = useState(products);
    const [isProduct, setIsProduct] = useState(products);
    const [resultsFound, setResultsFound] = useState(true);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const router = useRouter()
    const [isFilterOpen, setIsFilterOpen] = useState(false)
        // const {isFilterUpdated, queryParams, updateQueryParams} = useFilters()

    return (
        <div className="wrapper mt-32">

            {/*{router.pathname !== '/' ? <Button onClick={() => setIsFilterOpen(!isFilterOpen)}>*/}
            {/*    {isFilterOpen ? 'Закрыть фильтры' : 'Показать фильтры'}*/}
            {/*</Button> : null}*/}
            <h1 className='mb-12'>{heading}</h1>
            <div className={cn(styles.explorer, {[styles.filterOpened]: !isFilterOpen})}>
                <aside>
                    <ul>
                        <Sort />
                        {filtersData.map((item, index) => (
                            <li key={index}>
                                <h3>{item.title}</h3>
                            </li>
                        ))}
                    </ul>
                </aside>
                <section>
                    <div className={styles.grid}>

                        <div className={cn(styles.container, isProduct.length === 0 && 'block')}>
                            {resultsFound ? (
                                isProduct.length === 0 ? <Banner className='w-full'><h1>Сорян, братан, товаров в данной категории не имеется, заходи завтра</h1></Banner> : isProduct.map((product: IProduct) => <CatalogItem key={product.id} product={product} />)
                            ) : (
                                <div>Нет результатов</div>
                            )}
                        </div>
                    </div>
                    {/*Pagination*/}
                </section>
            </div>


        </div>
    );
};

export default CatalogWrapper;
