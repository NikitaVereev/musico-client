import {NextPage} from "next";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";


const AccessoriesDrumPage: NextPage = () => {
    const subType = 'accessories-drum'
    const heading = 'Аксессуары для ударных'
    const featuresProductType = 'Аксессуар для ударных'


    return (
        <CatalogWrapper
                        subType={subType}
                        heading={heading}
                        featuresProductType={featuresProductType}
                        />
    );
}

export default AccessoriesDrumPage;