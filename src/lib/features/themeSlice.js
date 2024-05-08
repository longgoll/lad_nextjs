import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTheme: "dark",
  inputValue: "ABC"
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
      toggleTheme: (state)=>{
          state.currentTheme = state.currentTheme === "dark" ? "light" : "dark";
      },
      setInputValue: (state, action)=>{
          state.inputValue = action.payload;
      }
  }
});

export const { toggleTheme, setInputValue } = themeSlice.actions;
export default themeSlice.reducer;