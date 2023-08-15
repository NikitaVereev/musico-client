import { FC } from 'react';
import CategoryGroup from "@/src/components/screens/catalog/filters/category-group/CategoryGroup";

const Filters: FC<{heading?: string; subType?:string}> = ({heading, subType}) => {
    return (
        <>
            <CategoryGroup heading={heading} subType={subType} />
        </>
    );
}

export default Filters;