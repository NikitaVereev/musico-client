
import {NextPageAuth} from "@/src/shared/types/auth.types";

import CreateFeatures from "@/src/components/screens/admin/product/create-product/CreateFeatures";

const CreateFeaturesPage: NextPageAuth = () => {
    return (
        <div>
            <CreateFeatures />
        </div>
    );
}

CreateFeaturesPage.isOnlyAdmin = true

export default CreateFeaturesPage;