import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "moview",
  initialState: {
    nowPlayingMovie: {},
    nowPlayingTrailer: {},
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addNowPlayingTrailer: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlayingMovies, addNowPlayingTrailer } = movieSlice.actions;
