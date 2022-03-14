import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (dispatch, getState) => {
    return await axios
      .get("http://localhost:8000/comments")
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    movies: [],
    status: null,
  },
  extraReducers: {
    [getComments.pending]: (state, action) => {
      state.status = "loading";
    },
    [getComments.fulfilled]: (state, action) => {
      state.status = "success";
      state.comments = action.payload;
    },
    [getComments.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default commentSlice.reducer;
