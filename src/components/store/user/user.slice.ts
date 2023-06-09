import {IInitialState} from "@/src/components/store/user/user.interface";
import {getStoreLocal} from "@/src/components/utils/local-storage";
import {register, login, logout, checkAuth} from "@/src/components/store/user/user.actions";
import {createSlice} from "@reduxjs/toolkit";

const initialState: IInitialState = {
    user: getStoreLocal('user') || null,
    isLoading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.user = payload.user
                console.log(payload)
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false
                state.user = null
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.user = payload.user
                console.log(payload)
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false
                state.user = null
            })
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true
            })
            .addCase(checkAuth.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.user = payload.user
                console.log(payload)
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isLoading = false
                state.user = null
            })

    },
})

export const {reducer} = userSlice