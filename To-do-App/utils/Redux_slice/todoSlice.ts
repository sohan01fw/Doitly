import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Redux_Store/store";

type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};
interface TodoState {
  todo: Array<Todo>;
}
const initialState: TodoState = {
  todo: [],
};
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todo.push({
        id: Math.random().toString(),
        task: action.payload,
        completed: false,
        createdAt: new Date(),
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;
//here state is from rootstate and todos is from store.ts->storeconfigure and todo is the intialStateValues
export const TodoValues = (state: RootState) => state.todos.todo;
export const todosReducer = todoSlice.reducer;
