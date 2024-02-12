import { createSlice } from "@reduxjs/toolkit";

export const popUpSlice = createSlice({
  name: "popUp",

  initialState: {
    value: 0,
  },

  reducers: {
    setPopUp: (state) => {
      state.value = 1;
    },

    unSetPopUp: (state) => {
      state.value = 0;
    },
  },
});

export const { setPopUp, unSetPopUp } = popUpSlice.actions;
export default popUpSlice.reducer;
