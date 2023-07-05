import { FC } from 'react';
import {useFilters} from "@/src/components/screens/catalog/useFilters";
import {useCategories} from "@/src/hooks/queries/useCategories";
import Checkbox from '@/src/components/ui/checkbox/Checkbox'
import FilterWrapper from "@/src/components/screens/catalog/filters/FilterWrapper";
import {useQuery} from "@tanstack/react-query";
import {CategoryService} from "@/src/services/category.service";
import {ProductServices} from "@/src/services/product.services";

const CategoryGroup: FC = () => {
    const {queryParams, updateQueryParams} = useFilters()




    return (
        <FilterWrapper title='Категории'>
            {/*{isLoading ? (*/}
            {/*    <div className='loaded'>Загрузка</div>*/}

            {/*): data?.length ? (*/}
            {/*    data.map((category: any) => {*/}
            {/*        const isChecked = queryParams.categoryId === category.id.toString()*/}
            {/*        return(*/}
            {/*            <Checkbox*/}
            {/*            isChecked={isChecked}*/}
            {/*            onClick={() => updateQueryParams('categoryId', isChecked ? '' : category.id.toString())}*/}
            {/*            key={category.id}*/}
            {/*            className='mb-2 text-sm'*/}
            {/*            >*/}
            {/*                {category.name}*/}
            {/*            </Checkbox>*/}
            {/*        )*/}
            {/*    })*/}
            {/*) : (*/}
            {/*    <p>Категории не найдены</p>*/}
            {/*)}*/}
            {/*<Checkbox isChecked={() => {}} onClick={() => {}}>*/}

            {/*</Checkbox>*/}

        </FilterWrapper>
    );
}

export default CategoryGroup;