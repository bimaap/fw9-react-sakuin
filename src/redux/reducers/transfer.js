import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
  notes: ''
};

export const counterSlice = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    transfer: (state, action) => {
      state.amount = action.payload.amount
      state.notes = action.payload.notes
    }
  }
});

export const {
  transfer
} = counterSlice.actions;

export default counterSlice.reducer;
