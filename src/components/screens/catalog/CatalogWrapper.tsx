import React, { FC } from 'react';
import styles from './Catalog.module.scss';

import CatalogItem from '@/src/components/screens/catalog/catalog-item/CatalogItem';
import { IProduct } from '@/src/interfaces/product.interface';
import { useFilters } from '@/src/components/screens/catalog/useFilters';
import {useQuery} from '@tanstack/react-query';
import cn from 'classnames';
import Banner from '@/src/components/ui/banner/Banner';
import Sort from '@/src/components/screens/catalog/sort/Sort';
import Filters from '@/src/components/screens/catalog/filters/Filters';
import { ProductServices } from '@/src/services/product.services';
import Pagination from "@/src/components/screens/catalog/pagination/Pagination";
import Meta from "@/src/components/utils/meta/Meta";

const CatalogWrapper: FC<{  heading?: string; subType: string, featuresProductType: string }> = ({  heading, subType, featuresProductType }) => {


    const { isFilterUpdated, queryParams, updateQueryParams } = useFilters();






    const { data, isFetching, isLoading, isError } = useQuery(['product explorer', queryParams, heading], () =>
            ProductServices.getOnlyCategories(subType, queryParams.page, queryParams.searchTerm, queryParams.sort),
        {
            initialData: [],
            enabled: true,
        }
    );




    if (isError)
        return (
            <Banner className="wrapper">
                <h1>Проблемы на серверной стороне, мы уже разбираемся с этим</h1>
            </Banner>
        );



    return (
        <Meta title={subType} description='Музыкальные инструменты для всех, покупка музыкальных инструментов'>
        <div className="wrapper mt-32">
            <h1 className="mb-12">{heading}</h1>
            <Sort />
            <div className={cn(styles.explorer)}>
                <aside>

                    <Filters heading={featuresProductType} subType={subType} />
                </aside>

                <section>
                    <div className={styles.grid}>
                        <div className={cn(styles.container)}>
                            {!isFetching && !isLoading ? (
                                data.length === 0 ? (
                                    <Banner className="w-full">
                                        <h1>Товаров в выбранной категории на данный момент нет</h1>
                                    </Banner>
                                ) : (
                                    data.objects.map((product: IProduct) => <CatalogItem key={product.id} product={product} />)
                                )
                            ) : (
                                <div className="loader">Загрузка</div>
                            )}

                        </div><div>
                        {!isFetching && !isLoading ? (
                            <Pagination
                                changePage={page => updateQueryParams('page', page.toString())}
                                currentPage={queryParams.page}
                                numberPages={data.numberOfPage}
                            />
                        ): <div className="loader">Загрузка</div>}
                    </div>
                    </div>
                </section>
            </div>
        </div>
        </Meta>
    );
};

export default CatalogWrapper;
