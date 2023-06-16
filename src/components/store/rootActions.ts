import * as userActions from './user/user.actions'
import {cartSlice} from "@/src/components/store/cart/cart-slice";



export const allActions = {
    ...userActions,
    ...cartSlice.actions
}