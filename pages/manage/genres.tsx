// import { NextPageAuth } from '@/shared/types/auth-types'


import {NextPage} from "next";
import GenreList from "@/src/components/screens/admin/genres/GenreList";

const GenreListPage: NextPage = () => {
    return <GenreList />
}
// GenreListPage.isOnlyAdmin = true

export default GenreListPage
