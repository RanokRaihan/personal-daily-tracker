import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    theme: themeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (defaultMiddleware) => defaultMiddleware().concat(apiSlice.middleware),
});
