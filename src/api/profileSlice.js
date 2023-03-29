import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProfileService } from "./profileService";

const initialState = {
  name: "",
  email: "",
  codeforces: "",
  atcoder: "",
  following: [],
  isRetrieved: false,
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

export const friendProfile = createAsyncThunk(
  "profile/name",
  async (name, thunkAPI) => {
    try {
      return await ProfileService.friendProfile(name);
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
      state.name = "";
      state.email = "";
      state.following = "";
      state.isRetrieved = false;
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
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.codeforces = action.payload.codeforces;
        state.atcoder = action.payload.atcoder;
        state.isRetrieved = true;
        state.following = action.payload.following;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(friendProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(friendProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.codeforces = action.payload.codeforces;
        state.atcoder = action.payload.atcoder;
        state.isRetrieved = true;
        state.following = action.payload.following;
      })
      .addCase(friendProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = profileSlice.actions;
export default profileSlice.reducer;
