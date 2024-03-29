import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, { payload }) => {
      return {
        ...state,
        filter: payload,
      };
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { addFilter } = filterSlice.actions;
