import {BaseSyntheticEvent, FC} from 'react';
import {FormState, UseFormRegister} from "react-hook-form";
import styles from './Auth.module.scss'
import Field from '@/src/components/ui/form-elements/Field'
import Button from '@/src/components/ui/button/Button'
import {validEmail} from "@/src/shared/regex";
import cn from "classnames";

interface IAuthFields {
    register: UseFormRegister<any>
    formState: FormState<any>
    isPasswordRequired?:boolean
    handleSubmit: () => void
}

const AuthFields: FC<IAuthFields> = ({
    register,
    formState: {errors},
    isPasswordRequired = false,
    handleSubmit
                                     }) => {
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={cn(styles.form__title, styles.title)}>Войти на сайт</h2>
            <Field
                {...register('email', {
                    required: 'Email обязательный',
                    pattern: {
                        value: validEmail,
                        message: 'Это не e-mail, пожалуйста, введите e-mail',
                    },
                })}
                placeholder="E-mail"
                //@ts-ignore
                error={errors.email}
            />
            <Field
                {...register(
                    'password',
                    isPasswordRequired
                        ? {
                            required: 'Пароль обязательный',
                            minLength: {
                                value: 6,
                                message: 'Длина пароля должна быть больше 6 символов',
                            },
                        }
                        : {}
                )}
                placeholder="Пароль"
                type="password"
                //@ts-ignore
                error={errors.password}
            />
            <Button  className={`${styles.switch__button} ${styles.button} ${styles.switch__btn} `}>Войти</Button>
        </form>
    );
}

export default AuthFields;