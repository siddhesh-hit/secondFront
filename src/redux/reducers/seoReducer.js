// seoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const seoSlice = createSlice({
  name: "seo",
  initialState: {
    data: {},
  },
  reducers: {
    setSEOData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setSEOData } = seoSlice.actions;

export default seoSlice.reducer;
