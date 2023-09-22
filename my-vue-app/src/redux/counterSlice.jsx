import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state, action) => {
      console.log("Incrementing by 1");
      state.count = state.count + action.payload;
    },
    decrement: (state) => {
        console.log("Decrementing by 1");
        state.count -= 1;
        },
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
