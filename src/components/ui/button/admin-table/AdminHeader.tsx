import { ChangeEvent, FC } from 'react'


import AdminCreateButton from "@/src/components/ui/button/admin-table/admin-create-button/AdminCreateButton";
import SearchField from "@/src/components/ui/search-field/SearchField";



interface IAdminHeader {
    onClick?: () => void
    searchTerm: string
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const AdminHeader: FC<IAdminHeader> = ({
                                           onClick,
                                           searchTerm,
                                           handleSearch,
                                       }) => {
    return (
        <div className="flex justify-between items-center">
            <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
            {onClick && <AdminCreateButton onClick={onClick} />}
        </div>
    )
}

export default AdminHeader
