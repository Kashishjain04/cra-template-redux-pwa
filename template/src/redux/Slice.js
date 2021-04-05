import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "slice",
  initialState: {
    value: 0,
  },
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Below actions can performed by dispatching like useDispatch(setData(value))
export const { setData } = Slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectValue = (state) => state.slice.value;

export default Slice.reducer;
