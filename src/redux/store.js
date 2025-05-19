import { configureStore } from "@reduxjs/toolkit";
import likeCounter from "./like";
import user from "../redux/user";
export const store = configureStore({
  reducer: {
    like: likeCounter,
    user: user,
  },
});
