import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
  name: "plan",
  initialState: {
    plan: "arcade",
    tenure: "monthly",
    addOns: [],
  },
  reducers: {
    changePlan(state, action) {
      state.plan = action.payload;
    },
    changeTenure(state, action) {
      state.tenure = action.payload;
    },
    changeAddOns(state, action) {
      state.addOns = action.payload;
    },
  },
});
export const userPlanReducer = planSlice.reducer;
export const { changePlan, changeTenure, changeAddOns } = planSlice.actions;
