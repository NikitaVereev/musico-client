import {useMemo} from 'react'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from "redux";
import {allActions} from "@/src/components/store/rootActions";


export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}