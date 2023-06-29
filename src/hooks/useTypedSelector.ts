import { TypedUseSelectorHook, useSelector } from 'react-redux'
//@ts-ignore
import {TypeRootState} from "@/src/components/store/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
