import { configureStore } from "@reduxjs/toolkit";
import popUpReducer from "./slices/popUpSlice";

const store = configureStore({
  reducer: {
    popUp: popUpReducer,
  },
});

export default store;
