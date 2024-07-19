import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState.planner";

const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState.destination,
  reducers: {
    changeDestination: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeDestination } = destinationSlice.actions;
export default destinationSlice.reducer;
