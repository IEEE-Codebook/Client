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
  "/profile/name",
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

export const addAtcoder = createAsyncThunk(
  "/profile/edit/atcoder",
  async (params, thunkAPI) => {
    try {
      return await ProfileService.addAtcoder(params);
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
export const addCodeforces = createAsyncThunk(
  "/profile/edit/codeforces",
  async (params, thunkAPI) => {
    try {
      return await ProfileService.addCodeforces(params);
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

export const addFriend = createAsyncThunk(
  "/profile/add",
  async (params, thunkAPI) => {
    try {
      return ProfileService.addFriend(params);
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

export const editDetails = createAsyncThunk(
  "/profile/edit",
  async (params, thunkAPI) => {
    try {
      return ProfileService.editDetails(params);
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
      state.following = [];
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
      })
      .addCase(addAtcoder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAtcoder.fulfilled, (state, action) => {
        state.atcoder = action.payload.atcoder;
        state.isLoading = false;
        state.isRetrieved = true;
      })
      .addCase(addAtcoder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.error;
      })
      .addCase(addCodeforces.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCodeforces.fulfilled, (state, action) => {
        state.atcoder = action.payload.codeforces;
        state.isLoading = false;
        state.isRetrieved = true;
      })
      .addCase(addCodeforces.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.error;
      })
      .addCase(addFriend.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFriend.fulfilled, (state, action) => {
        state.following = action.payload.following;
        state.isLoading = false;
        state.isError = false;
        state.isRetrieved = true;
      })
      .addCase(addFriend.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(editDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }).addCase(editDetails.fulfilled,(state,action) => {
        state.isLoading = false;
        state.isRetrieved = true;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.codeforces = action.payload.codeforces;
        state.atcoder = action.payload.atcoder;
      });
  },
});

export const { reset } = profileSlice.actions;
export default profileSlice.reducer;
