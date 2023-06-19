import {FC, MouseEvent} from 'react';
import {useActions} from "@/src/hooks/useActions";
import Button from '@/src/components/ui/button/Button'
import {MaterialIcon} from "@/src/components/ui/MaterialIcon";

const LogoutButton: FC = () => {
    const {logout} = useActions()

    const logoutHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        logout()
    }

    return (

           <li>
               <Button onClick={logoutHandler}>
                   <MaterialIcon
                       name='MdLogout' />
               </Button>
           </li>

    );
}

export default LogoutButton;