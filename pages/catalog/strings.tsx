import {NextPage} from "next";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";

const StringsPage: NextPage = () => {
    const subType = 'strings'
    const heading = 'Струны'
    const featuresProductType = 'Струны'



    return (
        <CatalogWrapper
                        subType={subType}
                        featuresProductType={featuresProductType}
            heading={heading} />
    );
}

export default StringsPage;