import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import inputReducer from '../features/input/inputSlice';

export const store = configureStore({
  reducer: {
    input: inputReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
