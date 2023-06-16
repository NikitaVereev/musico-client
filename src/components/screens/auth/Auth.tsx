import {FC, useState} from 'react';
import styles from './Auth.module.scss'
import {SubmitHandler, useForm} from "react-hook-form";
import Button from '@/src/components/ui/button/Button'
import {useActions} from "@/src/hooks/useActions";
import {useAuth} from "@/src/hooks/useAuth";

import AuthFields from "@/src/components/screens/auth/AuthFields";
import {IAuthInput} from "@/src/components/screens/auth/auth.interface";
import {useAuthRedirect} from "@/src/components/screens/auth/useAuthRedirect";


const Auth: FC = () => {
  useAuthRedirect()

  const { isLoading } = useAuth()

  const [type, setType] = useState<'login' | 'register'>('login')

  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
  } = useForm<IAuthInput>({
    mode: 'onChange',
  })

  const { login, register } = useActions()

  const onSubmit: SubmitHandler<IAuthInput> = (data) => {
    if (type === 'login') login(data)
    else if (type === 'register') register(data)

    reset()
  }

    return (
        <div>
          <section className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 title="Авторизация" className="mb-6" />
              <AuthFields
                  formState={formState}
                  register={registerInput}
                  isPasswordRequired
              />
              <div className={styles.button}>
                <Button
                    type="submit"
                    onClick={() => setType('login')}
                    disabled={isLoading}
                >
                  Логин
                </Button>
                <Button type="submit" onClick={() => setType('register')}>
                  Регистрация
                </Button>
              </div>
            </form>
          </section>
        </div>
    );
}

export default Auth;