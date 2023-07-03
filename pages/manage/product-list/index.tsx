
import {NextPageAuth} from "@/src/shared/types/auth.types";
import ListProduct from "@/src/components/screens/admin/product/list-product/ListProduct";

const AdminProductsPage: NextPageAuth = () => {
    return (
        <ListProduct />
    );
}

AdminProductsPage.isOnlyAdmin = true

export default AdminProductsPage;