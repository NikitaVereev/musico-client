import {NextPage} from "next";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";

const AccessoriesGuitarPage: NextPage = () => {
    const subType = 'accessories-guitar'
    const heading = 'Аксессуары для гитар'
    const featuresProductType = 'Аксессуар для гитар'



    return (
        <

            CatalogWrapper
                           subType={subType}
                           featuresProductType={featuresProductType}
            heading={heading} />
    );
}

export default AccessoriesGuitarPage;