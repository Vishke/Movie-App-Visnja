import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  return await axios
    .get("http://localhost:8000/movies")
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    status: null,
  },
  extraReducers: {
    [getMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMovies.fulfilled]: (state, action) => {
      state.status = "success";
      state.movies = action.payload;
    },
    [getMovies.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default moviesSlice.reducer;
