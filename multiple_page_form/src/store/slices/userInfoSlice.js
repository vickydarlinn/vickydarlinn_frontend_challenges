// import {createSlice} from "@redu"
import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    name: "",
    email: "",
    phone: "",
  },
  reducers: {
    changeName(state, action) {
      // payload will get name
      state.name = action.payload;
    },
    changeEmail(state, action) {
      // payload will get email
      state.email = action.payload;
    },
    changePhone(state, action) {
      //payload will get phn no.
      state.phone = action.payload;
    },
  },
});

export const { changeEmail, changeName, changePhone } = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;
