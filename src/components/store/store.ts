import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cartSlice} from "@/src/components/store/cart/cart-slice";
import storage from 'redux-persist'

const rootReducer = combineReducers({
    cart: cartSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type TypeRootState = ReturnType<typeof rootReducer>