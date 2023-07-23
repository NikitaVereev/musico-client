import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useActions } from '@/src/hooks/useActions';


import { useTypedSelector } from '@/src/hooks/useTypedSelector';
import { useEffect } from 'react';
import { TypeProductDataFilters } from '@/src/interfaces/product.interface';

export const useFilters = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { updateQueryParam } = useActions();
    const { replace } = useRouter();

    const { queryParams, isFilterUpdated } = useTypedSelector(state => state.filters);



    useEffect(() => {
        searchParams.forEach((value, key) => {
            updateQueryParam({
                key: key as keyof TypeProductDataFilters,
                value,
            });
        });
    }, []);

    const updateQueryParams = (key: keyof TypeProductDataFilters, value: string | null) => {
        const newParams = new URLSearchParams(searchParams.toString());

        if (value) {
            newParams.set(key, String(value));
        } else {
            newParams.delete(key);
        }

        replace(pathname + `?${newParams.toString().replace(/%7C/g, '|')}`);

        updateQueryParam({ key,
            //@ts-ignore
            value });
    };

    return { isFilterUpdated, updateQueryParams, queryParams };
};
