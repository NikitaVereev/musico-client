import { FC } from 'react';
import {useAuth} from "@/src/hooks/useAuth";
import MenuItem from '@/src/components/layout/header/menu/MenuItem'
import LogoutButton from "@/src/components/layout/header/auth/LogoutButton";

const AuthItems: FC = () => {
    const {user} = useAuth()
    return (
        <>
            {user ? (
                <>
                    <MenuItem
                        item={{
                            icon: 'MdSettings',
                            link: '/profile',

                        }}
                    />
                    <LogoutButton />
                </>
            ) : (
                <>
                    <MenuItem
                        item={{
                            icon: 'MdPerson',
                            link: '/auth',

                        }}
                    />
                </>
            )}
            {user?.admin && (
                <MenuItem
                    item={{
                        icon: 'MdOutlineLock',
                        link: '/manage',

                    }}
                />
            )}
        </>
    );
}

export default AuthItems;