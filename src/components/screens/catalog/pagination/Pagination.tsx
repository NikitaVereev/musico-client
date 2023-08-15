import {FC, useEffect} from 'react';
import Button from '@/src/components/ui/button/Button'
import {useRouter} from 'next/router'

interface IPagination {
    numberPages: number
    changePage: (page: string) => void
    currentPage?: number | string
}

const Pagination: FC<IPagination> = ({
                                         numberPages,
                                         changePage,
                                         currentPage
                                     }) => {
    const {pathname} = useRouter()

    useEffect(() => {
        changePage('0');
    }, [pathname]);

    return (
        <div className='text-center mt-16'>
            {Array.from({length: numberPages > 1 ? numberPages : 1}).map(
                (_, index) => {
                    const pageNumber = (index + 1).toString()

                    return (
                        <Button key={pageNumber}  className='mx-3'  onClick={() => changePage(
                            //@ts-ignore
                            pageNumber - 1)}>
                            {pageNumber}
                        </Button>
                    )
                }
            )}
        </div>
    );
}

export default Pagination;