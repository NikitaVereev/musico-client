import Admin from "@/src/components/screens/admin/Admin";
import {NextPageAuth} from "@/src/shared/types/auth.types";


const AdminPage: NextPageAuth = () => {
    return <Admin />
}
AdminPage.isOnlyAdmin = true

export default AdminPage
