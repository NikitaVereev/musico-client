import { FC } from 'react';
import CategoryGroup from "@/src/components/screens/catalog/filters/category-group/CategoryGroup";

const Filters: FC<{heading?: string}> = ({heading}) => {
    return (
        <>
            <CategoryGroup heading={heading} />
        </>
    );
}

export default Filters;