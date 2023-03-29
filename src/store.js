import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./api/authSlice";
import profileSlice from "./api/profileSlice";
import  submissionSlice  from "./api/submissionSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
    submission: submissionSlice,
  },
});
