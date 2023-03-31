import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LeaderboardService } from "./leaderboardService";

const initialState = {
  board: null,
  isError: false,
  isLoading: false,
  message: "",
};

export const getBoard = createAsyncThunk(
  "/leaderboard/all",
  async (platform, thunkAPI) => {
    try {
      return await LeaderboardService.leader(platform);
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

export const leaderSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    reset: (state) => {
      state.board = null;
      state.isError = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBoard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.board = action.payload;
      })
      .addCase(getBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.board = null;
      });
  },
});

export const { reset } = leaderSlice.actions;
export default leaderSlice.reducer;
