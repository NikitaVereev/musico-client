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
        (item) => item.product._id === action.payload.product._id
      );
      if (!item)
        state.items.push({ ...action.payload, _id: state.items.length });
    },
    removeFromCart: (state, action: PayloadAction<{ _id: number }>) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});
