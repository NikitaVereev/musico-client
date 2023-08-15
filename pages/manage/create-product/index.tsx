import {NextPageAuth} from "@/src/shared/types/auth.types";
import CreateProduct from "@/src/components/screens/admin/product/create-product/CreateProduct";

const CreateProductPage: NextPageAuth = () => {
    return (
        <CreateProduct />
    )
}

CreateProductPage.isOnlyAdmin = true

export default CreateProductPage;