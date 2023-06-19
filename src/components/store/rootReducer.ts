import {reducer as toastrReducer} from 'react-redux-toastr'
import {reducer as userReducer} from './user/user.slice'
import {reducer as cartSlice} from "@/src/components/store/cart/cart-slice";
import {reducer as filterSlice} from '@/src/components/store/filters/filters.slice'

export const reducers = {
    user: userReducer,
    toastr: toastrReducer,
    cart: cartSlice,
    filters: filterSlice
}