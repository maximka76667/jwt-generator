import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import jwtReducer from '../features/generator/generatorSlice';

export const store = configureStore({
  reducer: {
    jwt: jwtReducer,
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
