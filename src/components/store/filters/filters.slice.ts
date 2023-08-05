
import {IFiltersActionsPayload, IFiltersState} from "@/src/components/store/filters/filters.types";
import {EnumProductSort} from "@/src/interfaces/product.interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IFiltersState = {
    isFilterUpdated: false,
    queryParams: {
        sort: EnumProductSort.HIGH_PRICE,
        searchTerm: '',
        page: 0,
        perPage: 20,
        ratings: ''
    }
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateQueryParam: (state, action: PayloadAction<IFiltersActionsPayload>) => {
            const {key, value} = action.payload

            state.queryParams[key] = value
            state.isFilterUpdated = true
        },
        resetFilterUpdate: state => {
            state.isFilterUpdated = false
        }
    }
})

export const {reducer} = filtersSlice