import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState.planner";

const numberOfPeopleSlice = createSlice({
  name: "numberOfPeople",
  initialState: initialState.noOfPeople,
  reducers: {
    updateNumberOfPeople: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateNumberOfPeople } = numberOfPeopleSlice.actions;
export default numberOfPeopleSlice.reducer;
