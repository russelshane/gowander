import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState.planner";

const budgetSlice = createSlice({
  name: "budget",
  initialState: initialState.budget,
  reducers: {
    updateBudget: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
