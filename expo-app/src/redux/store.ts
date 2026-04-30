import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import authSlice from "./slices/auth/authSlice";
import themeSlice from "./slices/themeSlice/themeSlice";

const store = configureStore({
  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => store.dispatch as AppDispatch;
const useAppSelector = () => useSelector((store: RootState) => store);

export { store, useAppDispatch, useAppSelector };
export type { AppDispatch, RootState };
