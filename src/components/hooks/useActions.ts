import {useMemo} from 'react'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from "redux";
import {cartSlice} from "@/src/components/store/cart/cart-slice";

const rootAction = {
    ...cartSlice.actions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}