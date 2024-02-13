import { createSlice } from "@reduxjs/toolkit";

export const noteDisplaySlice = createSlice({
  name: "noteDisplay",

  initialState: {
    value: -1,
  },

  reducers: {
    showNote: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { showNote } = noteDisplaySlice.actions;
export default noteDisplaySlice.reducer;
