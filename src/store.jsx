import { configureStore } from "@reduxjs/toolkit";
import popUpReducer from "./slices/popUpSlice";
import noteDisplayReducer from "./slices/noteDisplaySlice";

const store = configureStore({
  reducer: {
    popUp: popUpReducer,
    noteDisplay: noteDisplayReducer,
  },
});

export default store;
