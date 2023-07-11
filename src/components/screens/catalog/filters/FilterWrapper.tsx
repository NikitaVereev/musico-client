import type {FC, PropsWithChildren} from 'react';

interface IFilterWrapper{
    title: string
}
const FilterWrapper: FC<PropsWithChildren<IFilterWrapper>> = ({title, children}) => {
    return (
        <div className='my-6'>
            <h2 className='mb-3 font-semibold text-4xl'>{title}</h2>
            <div className='flex flex-col items-start justify-between'>{children}</div>
        </div>
    );
}

export default FilterWrapper;