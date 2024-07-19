import { createSlice } from "@reduxjs/toolkit";

// Initial number of days in travel planner is set to 0
const initialState = {
  noOfDays: { value: 0 },
  noOfPeople: { value: 0 },
  budget: { value: "" },
  destination: { value: "" },
};

const numberOfDaysSlice = createSlice({
  name: "numberOfDays",
  initialState: initialState.noOfDays,
  reducers: {
    incrementNoOfDays: (state) => {
      state.value += 1;
    },
    decrementNoOfDays: (state) => {
      state.value -= 1;
    },

    // User can manually enters number of days in a number input
    incrementNoOfDaysByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {
  incrementNoOfDays,
  decrementNoOfDays,
  incrementNoOfDaysByAmount,
} = numberOfDaysSlice.actions;
export default numberOfDaysSlice.reducer;
