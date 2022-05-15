import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface GeneratorState {
  value: string,
}

const initialState: GeneratorState = {
  value: "",
}

export const generatorSlice = createSlice({
  name: "jwt",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { change } = generatorSlice.actions;
export const selectJwt = (state: RootState) => state.jwt.value;
export default generatorSlice.reducer;