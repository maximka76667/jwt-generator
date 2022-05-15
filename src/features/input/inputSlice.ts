import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface InputState {
  text: string,
}

const initialState: InputState = {
  text: "Write something",
}

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    change: (state, action) => {
      state.text = action.payload
    }
  }
})

export const { change } = inputSlice.actions;
export const selectInput = (state: RootState) => state.input.text;
export default inputSlice.reducer;