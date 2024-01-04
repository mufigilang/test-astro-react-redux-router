import { configureStore } from "@reduxjs/toolkit";
import hitungReducer from "./hitungSlice";

export const simpan = configureStore({
  reducer: {
    hitung: hitungReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof simpan.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof simpan.dispatch;
