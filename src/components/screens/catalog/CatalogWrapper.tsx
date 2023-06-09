import React, { FC, useEffect, useState } from 'react';

import styles from './Catalog.module.scss';
import Filter from '@/src/components/screens/catalog/aside/Filter';
import CatalogItem from '@/src/components/screens/catalog/catalog-item/CatalogItem';
import { IProduct } from '@/src/components/types/product.interface';
import {BsFilterCircleFill} from "react-icons/bs";
import Button from '@/src/components/ui/button/Button'


const CatalogWrapper: FC<{products: IProduct[] }> = ({products}) => {
    const [categories, setCategories] = useState(products);
    const [isProduct, setIsProduct] = useState(products);
    const [isOpen, setIsOpen] = useState(false)
    const [resultsFound, setResultsFound] = useState(true);

    const handleChangeChecked = (id: string) => {
        const categoriesStateList = [...categories];
        const changeCheckedCategories = categoriesStateList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setCategories(changeCheckedCategories);
    };

    const applyFilters = () => {
        let updatedList = products;
        const categoriesChecked = categories
            .filter((item) => item.checked)
            .map((item) => item.company.toLowerCase());

        if (categoriesChecked.length) {
            updatedList = updatedList.filter((item) =>
                categoriesChecked.includes(item.company)
            );
        }

        setIsProduct(updatedList);

        !updatedList.length ? setResultsFound(false) : setResultsFound(true);
    };

    useEffect(() => {
        applyFilters();
    }, [categories]);



    return (
        <div className="wrapper">
            <h1 className="title">Каталог</h1>
            <div className={styles.grid}>
                <div className={styles.filters}>
                    <Button onClick={() => setIsOpen(prevState => !prevState)}><BsFilterCircleFill /></Button>
                    {isOpen && <Filter categories={categories} changeChecked={handleChangeChecked} />}

                </div>
                <div className={styles.container}>
                    {resultsFound ? (
                        isProduct.map((product: IProduct) => (
                            <CatalogItem key={product.id} product={product} />
                        ))
                    ) : (
                        <div>Нет результатов</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CatalogWrapper;
