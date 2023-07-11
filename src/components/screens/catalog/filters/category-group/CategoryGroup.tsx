import { FC, useState, useEffect } from 'react';
import { useFilters } from '@/src/components/screens/catalog/useFilters';
import { useCategories } from '@/src/hooks/queries/useCategories';
import Checkbox from '@/src/components/ui/checkbox/Checkbox';
import FilterWrapper from '@/src/components/screens/catalog/filters/FilterWrapper';
import styles from '../Filters.module.scss'

const CategoryGroup: FC<{ heading?: string | any }> = ({ heading }) => {
    const { queryParams, updateQueryParams } = useFilters();
    const { data, isLoading } = useCategories(heading);

    const [checkedItems, setCheckedItems] = useState<string[]>([]);

    useEffect(() => {
        const updatedCheckedItems = queryParams.categoryId ? queryParams.categoryId.split(',') : [];
        setCheckedItems(updatedCheckedItems);
    }, [queryParams.categoryId]);

    if (isLoading) return <div>Загрузка</div>;

    const handleCheckboxClick = (param: any) => {
        const updatedCheckedItems = [...checkedItems];

        if (updatedCheckedItems.includes(param.id)) {
            // Если элемент уже выбран, удаляем его из checkedItems
            const index = updatedCheckedItems.indexOf(param.id);
            updatedCheckedItems.splice(index, 1);
        } else {
            // Если элемент не выбран, добавляем его в checkedItems
            updatedCheckedItems.push(param.id);
        }

        setCheckedItems(updatedCheckedItems);

        const updatedSearchTerms = updatedCheckedItems.map((id) => {
            let categoryField = '';
            let paramName = '';

            data.forEach((category: any) => {
                const filterValue = category.filterValues.find((filterValue: any) => filterValue.id === id);
                if (filterValue) {
                    categoryField = category.field;
                    paramName = filterValue.name;
                }
            });

            return `${encodeURIComponent(categoryField)}=${encodeURIComponent(paramName)}`;
        });

        updateQueryParams('product.subType', encodeURIComponent('Электрогитара'));
        updateQueryParams('searchTerm', updatedSearchTerms.join('&'));
    };



    return (
        <FilterWrapper title=''>
            <div className={styles.item}>
                {data?.length ? (
                    data.map((category: any) => (
                        <div key={category.id} className=' w-full  p-2 rounded-3xl'>
                            <div className={styles.heading}>
                                <h2 className={styles.filterTitle}>{category.name}</h2>
                            </div>
                            {category.filterValues.map((param: any) => {
                                const isChecked = checkedItems.includes(param.id);

                                return (
                                    <Checkbox
                                        key={param.id}
                                        isChecked={isChecked}
                                        onClick={() => handleCheckboxClick(param)}
                                        className='mb-2 text-sm animate-scaleIn'
                                    >
                                        {param.name}
                                    </Checkbox>
                                );
                            })}
                        </div>
                    ))
                ) : (
                    <p>Фильтры не найдены</p>
                )}
            </div>
        </FilterWrapper>
    );
};

export default CategoryGroup;
