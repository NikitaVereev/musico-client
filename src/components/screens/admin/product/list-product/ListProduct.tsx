import { FC } from 'react';
import AdminNavigation from "@/src/components/ui/admin-navigation/AdminNavigation";
import AdminHeader from "@/src/components/ui/admin-table/AdminHeader";
import AdminTable from "@/src/components/ui/admin-table/AdminTable/AdminTable";
import Button from '@/src/components/ui/button/Button'
import {useProductsList} from "@/src/components/screens/admin/product/list-product/useProductsList";
import {useRouter} from "next/router";


const ListProduct: FC = () => {
    const {queryData, handleSearch, searchTerm, isLoading, deleteAsync} = useProductsList()

    const {push} = useRouter()

    return (
        <div className='wrapper '>
            <AdminNavigation />
            <h1 className='animate-fade'>Список продуктов</h1>
            <div className='animate-scaleIn'>
                <div className='flex items-center justify-between'>
                    <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch}/>
                    <Button onClick={() => push('/manage/create-product')}>Создать продукт</Button>
                </div>
                <AdminTable tableItems={queryData || []} isLoading={isLoading} headerItems={['Название', 'Подтип', 'Компания', 'Цена', 'Действия']} removeHandler={deleteAsync} />
            </div>
        </div>
    );
}

export default ListProduct;