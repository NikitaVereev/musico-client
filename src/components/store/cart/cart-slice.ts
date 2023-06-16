import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IAddToCartPayload,
  IInitialState,
} from '@/src/components/store/cart/cart.interface';


const initialState: IInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (!item)
        state.items.push({ ...action.payload, id: state.items.length });
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {reducer} = cartSlice
