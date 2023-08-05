import {NextPage} from "next";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";


const KlavaPage: NextPage = () => {
    const subType = 'keyboard'
    const heading = 'Клавишные'
    const featuresProductType = 'Клавишная'



    return (
        <CatalogWrapper
                        subType={subType}
                        featuresProductType={featuresProductType}
            heading={heading} />
    );
}

export default KlavaPage;