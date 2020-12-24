import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../features/Slice";

export default configureStore({
  reducer: {
    slice: mainReducer,
  },
});
