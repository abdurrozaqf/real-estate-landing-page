import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});
