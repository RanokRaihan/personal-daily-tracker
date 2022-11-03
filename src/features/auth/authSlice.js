import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state, action) => {
      state.accessToken = "";
      state.user = {};
    },
  },
});

export default authSlice.reducer;
export const { userLoggedIn, userLoggedOut } = authSlice.actions;
