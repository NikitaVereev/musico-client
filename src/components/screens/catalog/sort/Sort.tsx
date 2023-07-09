import { FC } from 'react';
import {useFilters} from "@/src/components/screens/catalog/useFilters";
import Select from '@/src/components/ui/select/Select'
import {SORT_SELECT_DATA} from "@/src/components/screens/catalog/sort/sort.data";

const Sort: FC = () => {
    const {queryParams, updateQueryParams} = useFilters()

    return (
        <div className='text-right w-full flex justify-end z-10 mb-8'>
            <Select
            data={SORT_SELECT_DATA}
            onChange={value => updateQueryParams('sort', value.key.toString())}
            value={SORT_SELECT_DATA.find(value => value.key === queryParams.sort)}
            />
        </div>
    );
}

export default Sort;