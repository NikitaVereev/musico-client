import {reducer as toastrReducer} from 'react-redux-toastr'
import {reducer as userReducer} from './user/user.slice'
import {reducer as cartSlice} from "@/src/components/store/cart/cart-slice";

export const reducers = {
    user: userReducer,
    toastr: toastrReducer,
    cart: cartSlice,
}