import { createSlice } from "@reduxjs/toolkit";

const gptMovieSlice = createSlice({
  name: "gptMovie",
  initialState: {
    grokMovie: [],
    tmdbMovie: [],
  },
  reducers: {
    addgptmovie: (state, action) => {
      state.grokMovie = action.payload;
    },
    addtmdbMovie: (state, action) => {
      state.tmdbMovie = action.payload;
    },
  },
});

export default gptMovieSlice.reducer;

export const { addgptmovie, addtmdbMovie } = gptMovieSlice.actions;
