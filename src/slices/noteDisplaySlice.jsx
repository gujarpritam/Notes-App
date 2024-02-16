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

    hideNote: (state) => {
      state.value = -1;
    },
  },
});

export const { showNote, hideNote } = noteDisplaySlice.actions;
export default noteDisplaySlice.reducer;
