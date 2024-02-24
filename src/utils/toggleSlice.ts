import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    value: false,
  },
  reducers: {
    toggleValue: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleValue } = toggleSlice.actions;
export const selectToggleValue = (state: any) => state.toggle.value;

export default toggleSlice.reducer;
