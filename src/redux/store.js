import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import seoReducer from "./reducers/seoReducer";

export const store = configureStore({
  reducer: { auth: userReducer, seo: seoReducer },
  devTools: true,
});
