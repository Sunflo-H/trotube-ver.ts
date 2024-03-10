import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "searchVideo",
  initialState: {
    keyword: null,
  },
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { setKeyword } = searchSlice.actions;

export default searchSlice.reducer;
