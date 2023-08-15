import {FC, MutableRefObject, useRef, useState} from 'react';
import styles from './Auth.module.scss'
import {SubmitHandler, useForm} from "react-hook-form";
import Button from '@/src/components/ui/button/Button'
import {useActions} from "@/src/hooks/useActions";

import AuthFields from "@/src/components/screens/auth/AuthFields";
import {IAuthInput} from "@/src/components/screens/auth/auth.interface";
import {useAuthRedirect} from "@/src/components/screens/auth/useAuthRedirect";
import {useAuth} from "@/src/hooks/useAuth";
import {useQueryClient} from "@tanstack/react-query";
import cn from "classnames";
import RegisterFields from "@/src/components/screens/auth/RegisterFields";


const Auth: FC = () => {

  useAuthRedirect()
  const {isLoading} = useAuth()

  const [type, setType] = useState<'login' | 'register'>('register')

  const switchCtn = useRef() as MutableRefObject<HTMLDivElement>
  const switchC1 = useRef() as MutableRefObject<HTMLDivElement>
  const switchC2 = useRef() as MutableRefObject<HTMLDivElement>
  const switchCircle1 = useRef() as MutableRefObject<HTMLDivElement>
  const switchCircle2 = useRef() as MutableRefObject<HTMLDivElement>
  const aContainer = useRef() as MutableRefObject<HTMLDivElement>
  const bContainer = useRef() as MutableRefObject<HTMLDivElement>


  const switchForm = () => {
    switchCtn.current.classList.add(styles.is_gx)

    setTimeout(() => switchCtn.current.classList.remove(styles.is_gx), 1500)

    switchCtn.current.classList.toggle(styles.is_txr)
    switchCircle1.current.classList.toggle(styles.is_txr)
    switchCircle2.current.classList.toggle(styles.is_txr)

    switchC1.current.classList.toggle(styles.is_hidden)
    switchC2.current.classList.toggle(styles.is_hidden)
    aContainer.current.classList.toggle(styles.is_txl)
    bContainer.current.classList.toggle(styles.is_txl)
    bContainer.current.classList.toggle(styles.is_z200)


  }

  const queryClient = useQueryClient()

  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
  } = useForm<IAuthInput>({
    mode: 'onChange',
  })

  const { login, register } = useActions()

  const onSubmit: SubmitHandler<IAuthInput> = async (data) => {

    if (type === 'login') {
      await queryClient.invalidateQueries(["single"])
      login(data)

    }
    else if (type === 'register') register(data)
    reset()
  }





    return (
          <div className={`${styles.main} wrapper`}>
            <div
                className={`${styles.container} ${styles.a_container} `}
                id="a-container"
                ref={aContainer}
            >
              <div className={cn(styles.container__inner, 'animate-scaleIn')}>
                {type === 'login' && <AuthFields
                    formState={formState}
                    handleSubmit={handleSubmit(onSubmit)}
                    register={registerInput}
                    isPasswordRequired />}
              </div>
            </div>
            <div
                className={`${styles.container} ${styles.b_container} `}
                id="b-container"
                ref={bContainer}
            >
              <div className={cn(styles.container__inner, 'animate-scaleIn')}>
                {type === 'register' && <RegisterFields formState={formState} handleSubmit={handleSubmit(onSubmit)}
                                                        register={registerInput}
                                                        isPasswordRequired />}
              </div>
            </div>
            <div
                className={`${styles.switch} `}
                id="switch-cnt"
                ref={switchCtn}
            >
              <div
                  className={`${styles.switch__circle} `}
                  ref={switchCircle1}
              />
              <div
                  className={`${styles.switch__circle} ${styles.switch__circle__t} `}
                  ref={switchCircle2}
              />
              <div className={styles.switch__container} id="switch-c1" ref={switchC1}>
                { (
                    <>
                      <h2
                          className={`${styles.switch__title} ${styles.title} `}
                      >
                        Добро пожаловать!
                      </h2>
                      <p
                          className={`${styles.switch__description} ${styles.description} `}
                      >
                        Чтобы оставаться на связи с нами, пожалуйста, войдите под своей
                        личной информацией
                      </p>
                    </>
                )}
                <button
                    onClick={() => {
                      switchForm(),
                      setTimeout(() => setType('login'), 400)
                    }}
                    className={`${styles.switch__button} ${styles.button} ${styles.switch__btn} `}
                >
                  ВОЙТИ
                </button>
              </div>
              <div
                  className={`${styles.switch__container} ${styles.is_hidden}`}
                  id="switch-c2"
                  ref={switchC2}
              >
                {(
                    <>
                      <h2
                          className={`${styles.switch__title} ${styles.title} `}
                      >
                        Привет, друг!
                      </h2>
                      <p
                          className={`${styles.switch__description} ${styles.description} `}
                      >
                        Введите свои личные данные и начните путешествие с нами
                      </p>
                    </>
                )}
                <button
                    onClick={() => {
                      switchForm(),
                          setTimeout(() => setType('register'), 400)
                    }}
                    className={`${styles.switch__button} ${styles.button} ${styles.switch__btn} `}
                >
                  ЗАРЕГИСТРИРОВАТЬСЯ
                </button>
              </div>
            </div>
          </div>
    );
}

export default Auth;