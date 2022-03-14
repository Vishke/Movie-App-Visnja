import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./comment-slice";
import moviesSlice from "./movies-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    movies: moviesSlice,
    comments: commentSlice,
    users: userSlice,
  },
});

export default store;
