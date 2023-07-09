import { FC, useState, useEffect } from 'react';
import { useFilters } from '@/src/components/screens/catalog/useFilters';
import { useCategories } from '@/src/hooks/queries/useCategories';
import Checkbox from '@/src/components/ui/checkbox/Checkbox';
import FilterWrapper from '@/src/components/screens/catalog/filters/FilterWrapper';
import { useQuery } from '@tanstack/react-query';
import { CategoryService } from '@/src/services/category.service';

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

        const updatedSearchTerm = updatedCheckedItems.length > 0 ? updatedCheckedItems.map((id) => {
            let categoryName = '';
            data.forEach((category: any) => {
                const filterValue = category.filterValues.find((filterValue: any) => filterValue.id === id);
                if (filterValue) {
                    categoryName = filterValue.name;
                }
            });
            return categoryName;
        }).join(' ') : '';

        updateQueryParams('categoryId', updatedCheckedItems.length > 0 ? updatedCheckedItems.join(',') : null);
        updateQueryParams('searchTerm', updatedSearchTerm);
    };



    return (
        <FilterWrapper title='Фильтры'>
            <div className='flex gap-10 items-start flex-wrap'>
                {data?.length ? (
                    data.map((category: any) => (
                        <div key={category.id} className='max-w-[30%] w-fit border border-solid border-gray-500 p-2 rounded-3xl'>
                            <h2>{category.name}</h2>
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
                    <p>Категории не найдены</p>
                )}
            </div>
        </FilterWrapper>
    );
};

export default CategoryGroup;
