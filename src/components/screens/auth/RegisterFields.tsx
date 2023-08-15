import { FC } from 'react';
import {FormState, UseFormRegister} from "react-hook-form";
import Button from '@/src/components/ui/button/Button'
import Field from '@/src/components/ui/form-elements/Field'
import styles from './Auth.module.scss'
import {validEmail} from "@/src/shared/regex";
import cn from "classnames";

interface IRegisterFields {
    register: UseFormRegister<any>
    formState: FormState<any>
    isPasswordRequired?:boolean
    handleSubmit: () => void
}

const RegisterFields: FC<IRegisterFields> = ({
                                         register,
                                         formState: {errors},
                                         isPasswordRequired = false,
                                            handleSubmit
                                     }) => {
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={cn(styles.form__title, styles.title)}>Создать аккаунт</h2>
            <Field
                {...register('firstName', {
                    required: 'Имя обязательно',
                })}
                placeholder="Имя пользователя"
                //@ts-ignore
                error={errors.name}
            />
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
            <Button>Зарегистрироваться</Button>
        </form>
    );
}

export default RegisterFields;