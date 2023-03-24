import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProfileService } from "./profileService";

const initialState = {
  userProfile: null,
  otherProfile: null,
  isError: false,
  isLoading: false,
  message: "",
};

export const getProfile = createAsyncThunk(
  "/profile/me",
  async (token, thunkAPI) => {
    try {
      return await ProfileService.getProfile(token);
    } catch (error) {
      const msg =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset: (state) => {
      state.userProfile = null;
      state.otherProfile = null;
      state.isError = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.userProfile = null;
      });
  },
});

export const { reset } = profileSlice.actions;
export default profileSlice.reducer;
