import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// Define the counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value > 0 ? state.value -= 1 : 0;
    }
  }
});

// Create the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// Export actions to be used in components
export const { increment, decrement } = counterSlice.actions;

// Types for the state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook to access the dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
