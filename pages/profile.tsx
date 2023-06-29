import Profile from "@/src/components/screens/profile/Profile";
import {NextPageAuth} from "@/src/shared/types/auth.types";


const ProfilePage: NextPageAuth = () => {
    return (
        <Profile />
    );
}

ProfilePage.isOnlyUser = true

export default ProfilePage;