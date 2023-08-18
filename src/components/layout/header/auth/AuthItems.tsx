import { FC } from 'react';
import {useAuth} from "@/src/hooks/useAuth";
import MenuItem from '@/src/components/layout/header/menu/MenuItem'
import LogoutButton from "@/src/components/layout/header/auth/LogoutButton";

const AuthItems: FC = () => {
    const {user} = useAuth()
    console.log(user)
    return (
        <>
            {user ? (
                <>
                    <MenuItem
                        item={{
                            icon: 'MdPerson',
                            link: '/profile',
                            title: user.firstName,

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