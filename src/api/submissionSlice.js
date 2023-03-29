import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SubmissionService } from "./submissionService";

const initialState = {
  submissions: [],
  isRetrieved: false,
  isError: false,
  isLoading: false,
  message: "",
};

export const getSubmissions = createAsyncThunk(
  "/submissions/friend",
  async (token, thunkAPI) => {
    try {
      return await SubmissionService.getSubmissions(token);
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

export const submissionSlice = createSlice({
  name: "submission",
  initialState,
  reducers: {
    reset: (state) => {
      state.submissions = [];
      state.isRetrieved = false;
      state.isError = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSubmissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubmissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.submissions = action.payload.handles;
        state.isRetrieved = true;
      })
      .addCase(getSubmissions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = submissionSlice.actions;
export default submissionSlice.reducer;
