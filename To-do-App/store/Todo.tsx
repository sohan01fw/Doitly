"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type childrenprops = {
  children: ReactNode;
};

type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

// Create the TodoContext
export const TodoContexts = createContext<{
  todo: Todo[];
  handleAddTodo: (task: string) => void;
  handleTodoCompleted: (id: string) => void;
  handleTodoDeleted: (id: string) => void;
} | null>(null);

const useTodoContext = () => {
  const context = useContext(TodoContexts);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoContextProvider");
  }
  return context;
};

const DataContextProvider = ({ children }: childrenprops) => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      task,
      completed: false,
      createdAt: new Date(),
    };

    setTodo((prev) => [newTodo, ...prev]);
  };

  //handle todo completed value
  const handleTodoCompleted = (id: string) => {
    setTodo((prev) => {
      const newTodo = prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task; // Return the task as it is if the id does not match
        }
      });
      return newTodo; // Return the new array after mapping
    });
  };

  //handle todo deleted
  const handleTodoDeleted = (id: string) => {
    setTodo((prev) => {
      return prev.filter((todoItem) => todoItem.id !== id);
    });
  };
  // Return the TodoContexts.Provider with the value containing the state and functions
  return (
    <TodoContexts.Provider
      value={{ todo, handleAddTodo, handleTodoCompleted, handleTodoDeleted }}
    >
      {children}
    </TodoContexts.Provider>
  );
};

export { DataContextProvider, useTodoContext };
