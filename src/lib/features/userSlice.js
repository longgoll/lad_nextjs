import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userArray: []
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.userArray = action.payload;
    }
  }
});

export const { toggleTheme, setInputValue } = userSlice.actions;
export default userSlice.reducer;