import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Todo {
  title: string;
  // Add other properties if needed
}

export const todoapi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (build) => ({
    getTodos: build.query<Todo[], void>({
      query: () => "todos",
    }),
  }),
});

export const { useGetTodosQuery } = todoapi;
