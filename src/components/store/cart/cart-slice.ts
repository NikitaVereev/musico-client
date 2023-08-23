import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IAddToCartPayload, IChangeQuantityPayload, IInitialState} from '@/src/components/store/cart/cart.interface';
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
      //@ts-ignore
     const isExist = state.items.some(item => item.product.id === action.payload.product.id)
  //@ts-ignore
      if(!isExist) state.items.push({...action.payload, id: state.items.length})
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) =>
          //@ts-ignore
          item.id !== action.payload.id);
    },
  },
  //@ts-ignore
  changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
    const {id, type} = action.payload
    const item = state.items.find(
        //@ts-ignore
        item => item.id === id)
    if(item) type === 'plus' ? item.quantity++ : item.quantity--
  },
  //@ts-ignore
  reset: state => {
    state.items = []
  }
});

export const { reducer } = cartSlice;
