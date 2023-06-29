import {FC, MouseEvent} from 'react';
import {useActions} from "@/src/hooks/useActions";
import Button from '@/src/components/ui/button/Button'
import {MaterialIcon} from "@/src/components/ui/MaterialIcon";
import {useQueryClient} from "@tanstack/react-query";

const LogoutButton: FC = () => {
    const {logout} = useActions()
    const queryClient = useQueryClient()

    const logoutHandler =  async(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        logout()
        await queryClient.invalidateQueries(["single"])

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