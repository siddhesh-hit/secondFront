import { createSlice } from "@reduxjs/toolkit";
import { authState } from "../initalState";

export const userInfo = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    login(state, action) {
      console.log(action)
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state, action) {
      state.isAuthenticated = false;
      state.user = {};
      sessionStorage.removeItem("userInfo");
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userInfo.actions;

export default userInfo.reducer;
