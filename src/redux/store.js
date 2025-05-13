import { configureStore } from "@reduxjs/toolkit";
import likeCounter from "./slice";
export const store = configureStore({
  reducer: {
    like: likeCounter,
  },
});
