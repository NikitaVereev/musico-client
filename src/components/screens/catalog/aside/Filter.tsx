import React, { FC } from 'react';
import Categories from '@/src/components/screens/catalog/aside/categories/Categories';
import {ICategory} from "@/src/components/screens/catalog/aside/category.interface";


interface FilterProps {
    categories: ICategory[];
    changeChecked: (categoryId: string) => void;

}

const Filter: FC<FilterProps> = ({ categories, changeChecked }) => {
    const uniqueCategories = categories.filter(
        (category, index, self) =>
            index === self.findIndex((c) => c.company === category.company)
    );



    const productCounts: Record<string, number> = categories.reduce(
        (countMap: Record<string, number>, category: ICategory) => {
            countMap[category.company] = (countMap[category.company] || 0) + 1;
            return countMap;
        },
        {}
    );


    return (
        <ul>
            <h1>Фильтры</h1>
            {uniqueCategories.map((categoryItem) => (
                <Categories
                    key={categoryItem.id}
                    category={categoryItem}
                    count={productCounts[categoryItem.company]}
                    changeChecked={changeChecked}
                />
            ))}

        </ul>
    );
};

export default Filter;