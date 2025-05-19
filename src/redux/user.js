import { createSlice } from "@reduxjs/toolkit";
import behdad from "../../public/images/behdad.jpg";
const user = createSlice({
  name: "user",
  initialState: {
    name: "",
    family: "",
    phoneNumber: "",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: behdad,
  },
  reducers: {
    getName: (state, actions) => {
      state.name = actions.payload;
    },
    getFamily: (state, actions) => {
      state.family = actions.payload;
    },
    getPhoneNumber: (state, actions) => {
      state.phoneNumber = actions.payload;
    },
    getbio: (state, actions) => {
      state.bio = actions.payload;
    },
    getImage: (state, actions) => {
      state.image = actions.payload;
    },
  },
});
export default user.reducer;
export const { getName, getFamily, getPhoneNumber, getImage, getbio } =
  user.actions;
