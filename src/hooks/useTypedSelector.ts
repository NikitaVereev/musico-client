import { TypedUseSelectorHook, useSelector } from 'react-redux'
import {TypeRootState} from "@/src/components/store/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
