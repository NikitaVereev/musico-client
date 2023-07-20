
import {NextPageAuth} from "@/src/shared/types/auth.types";
import CreateImage from "@/src/components/screens/admin/product/create-product/CreateImage";

const CreateImagePage: NextPageAuth = () => {
    return (
        <div>
            <CreateImage />
        </div>
    );
}

CreateImagePage.isOnlyAdmin = true

export default CreateImagePage;