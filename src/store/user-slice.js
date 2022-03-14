import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  return await axios
    .get("http://localhost:8000/users")
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: null,
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.movies = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default userSlice.reducer;
