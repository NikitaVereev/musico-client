import {createAsyncThunk} from "@reduxjs/toolkit";
import {IAuthResponse, IEmailPassword} from "@/src/components/store/user/user.interface";
import {AuthService} from "@/src/services/auth/auth.service";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/src/components/utils/toast-error";
import {errorCatch} from "@/src/api/api.helpers";


export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/register',
    async ({ email, password, firstName }, thunkApi) => {
        try {
            const response = await AuthService.register(email, password, firstName)
            toastr.success('Регистрация почти закончена', 'Чтобы подтвердить регистрацию, перейдите по ссылке, прищедщей на вашу почту')
            return response.data
        } catch (error) {
            toastError(error)
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/login',
    async ({ email, password }, thunkApi) => {
        try {

            const response = await AuthService.login(email, password)
            toastr.success('Авторизация', 'вы успешно вошли в аккаунт')
            console.log(response.data)
            return response.data

        } catch (error) {
            toastError(error)
            return thunkApi.rejectWithValue(error)
        }
    }
)


export const checkAuth = createAsyncThunk<IAuthResponse>(
    'auth/check-auth',
    async (_, thunkApi) => {
        try {
            const response = await AuthService.getNewTokens()
            console.log(response.data)
            return response.data
        } catch (error) {
            if (errorCatch(error) === 'jwt expired') {
                toastr.error(
                    'Logout',
                    'You authorization is finished, plz sign in again'
                )
                thunkApi.dispatch(logout())
            }

            return thunkApi.rejectWithValue(error)
        }
    }
)

export const logout = createAsyncThunk('auth/logout', async () => {
    await AuthService.logout()
})