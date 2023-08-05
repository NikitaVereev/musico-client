import {NextPage} from "next";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";

const UkulelePage: NextPage = () => {
    const subType = 'ukulele'
    const heading = 'Укулеле'
    const featuresProductType = 'Укулеле'



    return (
        <CatalogWrapper
                        subType={subType}
                        featuresProductType={featuresProductType}
            heading={heading} />
    );
}

export default UkulelePage;