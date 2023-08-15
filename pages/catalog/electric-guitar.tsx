import { NextPage } from 'next';
import CatalogWrapper from '@/src/components/screens/catalog/CatalogWrapper';

const ElectricGuitarPage: NextPage = () => {
    const subType = 'electric-guitar';
    const heading = 'Электрогитары';
    const featuresProductType = 'Электрогитара'



    return <CatalogWrapper  heading={heading} subType={subType} featuresProductType={featuresProductType} />;
};

export default ElectricGuitarPage;
