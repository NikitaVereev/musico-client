import React, { FC, useEffect, useState } from 'react';
import styles from './Catalog.module.scss';

import CatalogItem from '@/src/components/screens/catalog/catalog-item/CatalogItem';
import { IProduct } from '@/src/interfaces/product.interface';
import { BsFilterCircleFill } from 'react-icons/bs';
import Button from '@/src/components/ui/button/Button';
import {useFilters} from "@/src/components/screens/catalog/useFilters";
import {useQuery} from "@tanstack/react-query";
import cn from "classnames";

const CatalogWrapper: FC<{ products: IProduct[] }> = ({ products }) => {
    const [categories, setCategories] = useState(products);
    const [isProduct, setIsProduct] = useState(products);
    const [resultsFound, setResultsFound] = useState(true);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');


    const [isFilterOpen, setIsFilterOpen] = useState(false)
        // const {isFilterUpdated, queryParams, updateQueryParams} = useFilters()









    return (
        <div className="wrapper">
            <Button onClick={() => setIsFilterOpen(!isFilterOpen)}>
                {isFilterOpen ? 'Закрыть фильтры' : 'Показать фильтры'}
            </Button>
            <div className={cn(styles.explorer, {[styles.filterOpened]: isFilterOpen})}>
                <aside>
                    dfdf
                </aside>
                <section>
                    <div className={styles.grid}>

                        <div className={styles.container}>
                            {resultsFound ? (
                                isProduct.map((product: IProduct) => <CatalogItem key={product.id} product={product} />)
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
