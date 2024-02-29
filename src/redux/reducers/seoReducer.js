// seoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const seoSlice = createSlice({
    name: 'seo',
    initialState: {},
    reducers: {
        setSEOData: (state, action) => {
            state = action.payload;
        },
    },
});

export const { setSEOData } = seoSlice.actions;

export default seoSlice.reducer;
