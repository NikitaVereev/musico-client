import { FC } from 'react';
import {useFilters} from "@/src/components/screens/catalog/useFilters";

const CategoryGroup: FC = () => {
    const {queryParams, updateQueryParams} = useFilters()



    return (
        <div>
            
        </div>
    );
}

export default CategoryGroup;