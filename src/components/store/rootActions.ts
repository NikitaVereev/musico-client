import * as userActions from './user/user.actions'
import {cartSlice} from "@/src/components/store/cart/cart-slice";
import {filtersSlice} from "@/src/components/store/filters/filters.slice";
import {carouselSlice} from "@/src/components/store/carousel/carousel.slice";



export const allActions = {
    ...userActions,
    ...cartSlice.actions,
    ...filtersSlice.actions,
    ...carouselSlice.actions
}