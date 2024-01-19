import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "../Redux_slice/todoSlice";
import { todoapi } from "../api/apiSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    [todoapi.reducerPath]: todoapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoapi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
