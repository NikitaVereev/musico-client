import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/src/hooks/useAuth'

export const useAuthRedirect = () => {
    const { user } = useAuth()
    console.log(user)

    const {replace} = useRouter()

    useEffect(() => {
    if(user){
        replace('/')
    }
        }, [user])
}
