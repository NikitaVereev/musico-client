import {NextPageAuth} from "@/src/shared/types/auth.types";
import Admin from "@/src/components/screens/admin/Admin";


const AdminPage: NextPageAuth = () => {
    return <Admin />
}
AdminPage.isOnlyAdmin = true

export default AdminPage
