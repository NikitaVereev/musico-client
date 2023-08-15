import { FC, useState, useEffect } from 'react';
import { useFilters } from '@/src/components/screens/catalog/useFilters';
import { useCategories } from '@/src/hooks/queries/useCategories';
import Checkbox from '@/src/components/ui/checkbox/Checkbox';
import FilterWrapper from '@/src/components/screens/catalog/filters/FilterWrapper';
import styles from '../Filters.module.scss'
import {MaterialIcon} from "@/src/components/ui/MaterialIcon";
import {useRouter} from 'next/router'

const CategoryGroup: FC<{ heading?: string | any; subType?: string }> = ({ heading, subType }) => {
    const { queryParams, updateQueryParams } = useFilters();
    const { data, isLoading } = useCategories(heading);
    const [categoryStates, setCategoryStates] = useState<Array<{ id: number; isOpen: boolean }>>([]);
    const [previousPathname, setPreviousPathname] = useState<string | null>(null);

    const [checkedItems, setCheckedItems] = useState<string[]>([]);

    const {pathname} = useRouter()

    useEffect(() => {
        const updatedCheckedItems = queryParams.categoryId ? queryParams.categoryId.split(',') : [];
        setCheckedItems(updatedCheckedItems);
    }, [queryParams.categoryId]);

    useEffect(() => {
        if (pathname !== previousPathname) {
            updateQueryParams('searchTerm', '');
        }
        setPreviousPathname(pathname);
    }, [pathname]);


    useEffect(() => {
        if (data) {
            const initialCategoryStates = data.map((category: any) => ({
                id: category.id,
                isOpen: false
            }));
            setCategoryStates(initialCategoryStates);
        }
    }, [data]);

    if (isLoading) return <div>Загрузка</div>;

    const handleCheckboxClick = (param: any) => {
        const updatedCheckedItems = [...checkedItems];

        if (updatedCheckedItems.includes(param.id)) {
            const index = updatedCheckedItems.indexOf(param.id);
            updatedCheckedItems.splice(index, 1);
        } else {
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


        if (pathname === `/catalog/${subType}`) {
            updateQueryParams('searchTerm', updatedSearchTerms.join('&'));
        }
    };


    const toggleCategory = (categoryId: number) => {
        setCategoryStates(prevStates =>
            prevStates.map(state =>
                state.id === categoryId ? { ...state, isOpen: !state.isOpen } : state
            )
        );
    };

    const getCategoryState = (categoryId: number) => {
        const categoryState = categoryStates.find(state => state.id === categoryId);
        return categoryState ? categoryState.isOpen : false;
    };



    return (
        <FilterWrapper title=''>
            <div className={styles.item}>
                {data?.length ? (
                    data.map((category: any) => (
                        <div key={category.id} className=' w-full  p-2 rounded-3xl'>
                            <div className={styles.heading} onClick={() => toggleCategory(category.id)}>
                                <h2 className={styles.filterTitle}>{category.name}</h2>
                                <MaterialIcon name={getCategoryState(category.id) ? 'MdKeyboardArrowUp' : 'MdKeyboardArrowDown'} />
                            </div>
                            {getCategoryState(category.id) &&  category.filterValues.map((param: any) => {
                                const isChecked = checkedItems.includes(param.id);
                                if(param.name === null ) return null

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
