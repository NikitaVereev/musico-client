import { NextPage } from 'next';
import CatalogWrapper from '@/src/components/screens/catalog/CatalogWrapper';

const AcousticPage: NextPage = () => {
    const subType = 'acoustic-guitar';
    const heading = 'Акустические гитары';
    const featuresProductType = 'Акустическая'


    return <CatalogWrapper  heading={heading} subType={subType} featuresProductType={featuresProductType} />;
};

export default AcousticPage;
