import { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import { ProductServices } from '@/src/services/product.services';
import CatalogWrapper from '@/src/components/screens/catalog/CatalogWrapper';
import Banner from '@/src/components/ui/banner/Banner';

const ElectricGuitarPage: NextPage = () => {
    const subType = 'electric-guitar';
    const heading = 'Электрогитары';
    const featuresProductType = 'Электрогитара'



    return <CatalogWrapper  heading={heading} subType={subType} featuresProductType={featuresProductType} />;
};

export default ElectricGuitarPage;
