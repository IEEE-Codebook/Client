import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./api/authSlice";

export const store = configureStore({
    reducer:{ auth : authSlice},
})