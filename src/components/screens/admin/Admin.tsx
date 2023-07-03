import { FC } from 'react';
import AdminNavigation from "@/src/components/ui/admin-navigation/AdminNavigation";
import Statistics from "@/src/components/screens/admin/statistics/Statistics";

const Admin: FC = () => {
    return (
        <div className='wrapper'>

            <AdminNavigation />
            <h1>Статистика</h1>
            <Statistics />
        </div>
    );
}

export default Admin;