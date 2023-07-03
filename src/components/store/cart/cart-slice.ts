import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddToCartPayload, IInitialState } from '@/src/components/store/cart/cart.interface';
import { OrderService } from '@/src/services/order.service';

const initialState: IInitialState = {
  items: [],
};

if (typeof window !== 'undefined') {
  const storedCartItems = localStorage.getItem('cartItems');
  initialState.items = storedCartItems ? JSON.parse(storedCartItems) : [];
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ payload: IAddToCartPayload; user: string }>) => {
      const { payload, user } = action.payload;
      const item = state.items.find((item) => item.id ===
          //@ts-ignore
          payload.id);
      if (!item) {
        state.items.push({ ...payload,
          //@ts-ignore
          id: state.items.length });
        OrderService.createOrder({
          email: user || 'user@example.com', // Используем переданный user или дефолтное значение
          idProduct:
          //@ts-ignore
          payload.id,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) =>
          //@ts-ignore
          item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    // Add any extra reducers if needed
  },
});

export const { reducer } = cartSlice;
