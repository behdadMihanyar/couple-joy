import { createSlice } from "@reduxjs/toolkit";
const like = createSlice({
  name: "like",
  initialState: {
    status: true,
    counter: 0,
    requests: [],
    first: true,
    second: true,
    third: true,
    fourth: true,
  },
  reducers: {
    disable: (state) => {
      state.status = false;
    },
    incremenet: (state) => {
      state.counter = state.counter + 1;
    },
    decrement: (state) => {
      state.counter = state.counter - 1;
    },
    first: (state) => {
      return {
        ...state,
        first: !state.first,
      };
    },
    second: (state) => {
      return {
        ...state,
        second: !state.second,
      };
    },
    third: (state) => {
      return {
        ...state,
        third: !state.third,
      };
    },
    fourth: (state) => {
      return {
        ...state,
        fourth: !state.fourth,
      };
    },
    statusReverse: (state) => {
      state.status = false;
    },
  },
});
export default like.reducer;
export const {
  statusReverse,
  incremenet,
  decrement,
  first,
  second,
  third,
  fourth,
} = like.actions;
