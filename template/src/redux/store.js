import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./Slice";

export default configureStore({
  reducer: {
    slice: mainReducer,
  },
  devTools: !process.env.NODE_ENV || process.env.NODE_ENV === "development",
});
