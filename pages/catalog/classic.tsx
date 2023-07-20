import { NextPage } from 'next';
import CatalogWrapper from '@/src/components/screens/catalog/CatalogWrapper';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from '@/src/interfaces/product.interface';
import { ProductServices } from '@/src/services/product.services';
import Banner from '@/src/components/ui/banner/Banner';

const ClassicPage: NextPage = () => {
    const subType = 'classic-guitar';
    const { data: products, isLoading, isError }: any = useQuery<IProduct[]>(['classic'], () =>
        ProductServices.getOnlyCategories(subType, 'Классическая')
    );
    const heading = 'Классические гитары';

    if (isLoading) return <div className="loader">Загрузка</div>;
    if (isError)
        return (
            <Banner className="wrapper">
                <h1>Проблемы на серверной стороне, мы уже разбираемся с этим</h1>
            </Banner>
        );
    console.log(products);
    return <CatalogWrapper products={products} heading={heading} subType={subType} />;
};

export default ClassicPage;
