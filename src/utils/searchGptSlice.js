import { createSlice } from "@reduxjs/toolkit";

const searchGptSlice = createSlice({
  name: "search",
  initialState: {
    toggleSearch: false,
  },
  reducers: {
    changeSearch: (state, action) => {
      state.toggleSearch = !state.toggleSearch;
    },
  },
});

export default searchGptSlice.reducer;
export const { changeSearch } = searchGptSlice.actions;
