import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => action.payload,
    decrement: (state, action) => action.payload,
    reset: (state, action) => 0
  }
});
