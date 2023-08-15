import { NextPage } from 'next';
import CatalogWrapper from '@/src/components/screens/catalog/CatalogWrapper';

const ClassicPage: NextPage = () => {
    const subType = 'classic-guitar';
    const heading = 'Классические гитары';
    const featuresProductType = 'Классическая'



    return <CatalogWrapper  heading={heading} subType={subType} featuresProductType={featuresProductType} />;
};

export default ClassicPage;
