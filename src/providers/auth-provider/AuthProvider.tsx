import {FC, useEffect} from 'react';
import {TypeComponentAuthFields} from "@/src/shared/types/auth.types";
import {useActions} from "@/src/hooks/useActions";
import {useAuth} from "@/src/hooks/useAuth";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {ssr: false})

const AuthProvider: FC<TypeComponentAuthFields> = ({
                                                       children,
                                                       Component: {isOnlyAdmin, isOnlyUser}
                                                   }) => {
    const {user} = useAuth()
    const {logout, checkAuth} = useActions()
    const {pathname} = useRouter()

    useEffect(() => {
        const accessToken = Cookies.get('accessToken')
        if(accessToken) checkAuth()
    }, [])

    useEffect(() => {
        const refreshToken = Cookies.get('accessToken')
        if(!refreshToken && user) logout()
    }, [pathname])
        console.log(checkAuth)

    return !isOnlyUser && !isOnlyAdmin ? <>{children}</> : (
        <DynamicCheckRole Component={{isOnlyAdmin, isOnlyUser}}>
            {children}
        </DynamicCheckRole>
    );
}

export default AuthProvider;