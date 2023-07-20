import React, { FC, useState } from 'react';
import styles from './Catalog.module.scss';

import CatalogItem from '@/src/components/screens/catalog/catalog-item/CatalogItem';
import { IProduct } from '@/src/interfaces/product.interface';
import { useFilters } from '@/src/components/screens/catalog/useFilters';
import { useQuery } from '@tanstack/react-query';
import cn from 'classnames';
import Banner from '@/src/components/ui/banner/Banner';
import Sort from '@/src/components/screens/catalog/sort/Sort';
import Filters from '@/src/components/screens/catalog/filters/Filters';
import { ProductServices } from '@/src/services/product.services';

const CatalogWrapper: FC<{ products: IProduct[]; heading?: string; subType: string }> = ({ products, heading, subType }) => {
    const [isProduct, setIsProduct] = useState(products);

    const { isFilterUpdated, queryParams, updateQueryParams } = useFilters();

    const { data, isFetching } = useQuery(['product explorer', queryParams, heading], () =>
            ProductServices.getShittyFilter(subType, products[0].subType, queryParams.searchTerm),
        {
            initialData: products,
            enabled: true,
        }
    );

    return (
        <div className="wrapper mt-32">
            <h1 className="mb-12">{heading}</h1>
            <Sort />
            <div className={cn(styles.explorer)}>
                <aside>
                    <Filters heading={products[0]?.subType} />
                </aside>
                <section>
                    <div className={styles.grid}>
                        <div className={cn(styles.container, isProduct.length === 0 && 'block')}>
                            {!isFetching ? (
                                data.length === 0 ? (
                                    <Banner className="w-full">
                                        <h1>Товаров в выбранной категории на данный момент нет</h1>
                                    </Banner>
                                ) : (
                                    data.map((product: IProduct) => <CatalogItem key={product.id} product={product} />)
                                )
                            ) : (
                                <div className="loader">Загрузка</div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CatalogWrapper;
