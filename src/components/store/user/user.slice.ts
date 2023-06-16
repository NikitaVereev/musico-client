import {IInitialState} from "@/src/components/store/user/user.interface";
import {getStoreLocal} from "@/src/components/utils/local-storage";
import {register} from "@/src/components/store/user/user.actions";
import {createSlice} from "@reduxjs/toolkit";

const initialState: IInitialState = {
    user: getStoreLocal('user'),
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
            .addCase(register.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.user = payload.user
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false
                state.user = null
            })
    }
})

export const {reducer} = userSlice