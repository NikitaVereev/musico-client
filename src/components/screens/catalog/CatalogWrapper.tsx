import React, { FC, useEffect, useState } from 'react';
import styles from './Catalog.module.scss';

import CatalogItem from '@/src/components/screens/catalog/catalog-item/CatalogItem';
import { IProduct } from '@/src/interfaces/product.interface';
import { BsFilterCircleFill } from 'react-icons/bs';
import Button from '@/src/components/ui/button/Button';
import { useFilters } from '@/src/components/screens/catalog/useFilters';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import cn from 'classnames';
import Banner from '@/src/components/ui/banner/Banner';
import { filtersData } from '@/src/components/screens/catalog/filters/filters.data';
import Sort from '@/src/components/screens/catalog/sort/Sort';
import Filters from '@/src/components/screens/catalog/filters/Filters';
import { CategoryService } from '@/src/services/category.service';
import { ProductServices } from '@/src/services/product.services';

const CatalogWrapper: FC<{ products: IProduct[]; heading: string }> = ({ products, heading }) => {
    const [categories, setCategories] = useState(products);
    const [isProduct, setIsProduct] = useState(products);
    const [resultsFound, setResultsFound] = useState(true);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const router = useRouter();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const { data: categoriesData, isLoading: categoriesLoading } = useQuery(['get electro features'], () =>
        CategoryService.getAllCategories()
    );

    const [selectedCategory, setSelectedCategory] = useState('');

    const { data: filteredData, isLoading: filteredDataLoading } = useQuery(
        ['filtered data search', selectedCategory],
        () => ProductServices.getShittyFilter(selectedCategory),
        {

            onSuccess: () => {
                console.log(filteredData);
            }
        }
    );

    useEffect(() => {
        if (!selectedCategory) {
            setIsProduct(products);
        }
    }, [selectedCategory, products]);

    useEffect(() => {
        if (!categoriesLoading && categoriesData) {
            setCategories(categoriesData);
        }
    }, [categoriesLoading, categoriesData]);

    if (categoriesLoading) {
        return <div className='loaded'>Загрузка</div>;
    }

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
    };

    const handleResetCategory = () => {
        setSelectedCategory('');
    };

    const productsToShow = selectedCategory ? filteredData : isProduct;

    return (
        <div className='wrapper mt-32'>
            <h1 className='mb-12'>{heading}</h1>
            <div className={cn(styles.explorer, { [styles.filterOpened]: !isFilterOpen })}>
                {heading === 'Электрогитары' && <aside>
                    <ul>

                        <Sort/>
                        {filtersData.map((item, index) => (
                            <li key={index}>
                                <h3>{item.title}</h3>
                            </li>
                        ))}
                    </ul>
                    <Filters/>
                    <div className='flex gap-10'>
                        {filteredDataLoading ? <div>Загрузка</div> : Object.keys(categories).map((categoryKey) => (
                            <div key={categoryKey}>
                                <h2>{categoryKey}</h2>
                                {categories[categoryKey].map((item) => (
                                    <button
                                        className={`block ${selectedCategory === item ? 'selected' : ''}`}
                                        key={item}
                                        onClick={() => handleCategorySelect(item)}
                                    >
                                        {item}
                                    </button>
                                ))}
                                {selectedCategory && (
                                    <button className='block reset' onClick={handleResetCategory}>
                                        Сбросить фильтр
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </aside>}
                <section>
                    <div className={styles.grid}>
                        <div className={cn(styles.container, isProduct.length === 0 && 'block')}>
                            {resultsFound ? (
                                productsToShow === undefined ? (
                                    <Banner className='w-full'>
                                        <h1>Сорян, братан, товаров в данной категории не имеется, заходи завтра</h1>
                                    </Banner>
                                ) : (
                                    productsToShow.map((product: IProduct) => <CatalogItem key={product.id} product={product} />)
                                )
                            ) : (
                                <div>Нет результатов</div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CatalogWrapper;
