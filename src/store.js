import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./api/authSlice";
import profileSlice from "./api/profileSlice";

export const store = configureStore({
  reducer: { auth: authSlice, profile: profileSlice },
});
