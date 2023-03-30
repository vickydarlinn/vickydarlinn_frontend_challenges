import { configureStore } from "@reduxjs/toolkit";
import {
  changePlan,
  changeTenure,
  changeAddOns,
  userPlanReducer,
} from "./slices/userPlanSlice";
import {
  userInfoReducer,
  changeEmail,
  changeName,
  changePhone,
} from "./slices/userInfoSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    userPlan: userPlanReducer,
  },
});
export {
  store,
  changeEmail,
  changeName,
  changePhone,
  changePlan,
  changeTenure,
  changeAddOns,
};
