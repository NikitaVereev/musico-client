import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  search: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.search = action.payload;
    },
    resetData: (state) => {
      state.search = [];
    },
  },


});

export const { reducer } = searchSlice;
