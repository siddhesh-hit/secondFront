import { createSlice } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";
import { SecretKey } from "../../services/config";
var initialState = {};
if (localStorage.getItem("user")) {
  // Decrypt
  var bytes = CryptoJS.AES.decrypt(localStorage.getItem("user"), SecretKey);
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  console.log("decryptedData", decryptedData)
  initialState = decryptedData
}
export const UserInfo = createSlice({
  name: "UserInfo",
  initialState: initialState,
  reducers: {
    setUserDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    Logout: (state, action) => {
      state._id = null;
      state.user_verfied = false;
      localStorage.removeItem("user");
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserDetails, Logout } = UserInfo.actions;

export default UserInfo.reducer;
