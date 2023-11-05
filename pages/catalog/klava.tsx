import {NextPage} from "next";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";


const KlavaPage: NextPage = () => {
    const subType = 'piano'
    const heading = 'Клавишные'
    const featuresProductType = 'Клавишные'



    return (
        <CatalogWrapper
                        subType={subType}
                        featuresProductType={featuresProductType}
            heading={heading} />
    );
}

export default KlavaPage;