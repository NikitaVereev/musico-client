import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '@/src/components/store/cart/cart-slice';
import storage from 'redux-persist';
import {reducers} from "@/src/components/store/rootReducer";


export const store = configureStore({
  reducer: reducers,
});

export type TypeRootState = ReturnType<typeof store.getState>;
