import { FC } from 'react';
import {TypeComponentAuthFields} from "@/src/shared/types/auth.types";
import {useAuth} from "@/src/hooks/useAuth";
import {useRouter} from "next/router";

const CheckRole: FC<TypeComponentAuthFields> = ({
    children,
    Component: {isOnlyAdmin, isOnlyUser}
                                                }) => {
    const {user} = useAuth()
    const router = useRouter()
    const Children = () => <>{children}</>

    if(user?.admin) return <Children />

    if(isOnlyAdmin){
        router.pathname !== '/404' && router.replace('/404')
        return null
    }

    const isUser = user && !user.admin
    if(isUser && isOnlyUser) return <Children />
    else{
        router.pathname !== '/auth' && router.replace('/auth')
        return null
    }

}

export default CheckRole;