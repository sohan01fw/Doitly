import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Todo {
  id: string;
  task: string;
  completed: boolean;
  createdAt: string;
  // Add other properties if needed
}

export const todoapi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (build) => ({
    getTodos: build.query<Todo[], void>({
      query: () => "getTodos",
    }),
    addTodos: build.mutation<Todo, Partial<Todo>>({
      query: (todos) => ({
        url: "/createTodo",
        method: "POST",
        body: todos,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation } = todoapi;
