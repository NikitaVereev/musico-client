import { FC } from 'react';
import {FormState, UseFormRegister} from "react-hook-form";

import Field from '@/src/components/ui/form-elements/Field'

import {validEmail} from "@/src/shared/regex";

interface IAuthFields {
    register: UseFormRegister<any>
    formState: FormState<any>
    isPasswordRequired?:boolean
}

const AuthFields: FC<IAuthFields> = ({
    register,
    formState: {errors},
    isPasswordRequired = false
                                     }) => {
    return (
        <>
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
                placeholder="Password"
                type="password"
                //@ts-ignore
                error={errors.password}
            />
        </>
    );
}

export default AuthFields;