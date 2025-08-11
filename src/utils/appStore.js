import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchReducer from "./searchGptSlice";
import gptMovieReducer from "./gptMovieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    search: searchReducer,
    gptMovie: gptMovieReducer,
  },
});

export default appStore;
