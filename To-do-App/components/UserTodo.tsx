"use client";
import { useTodoContext } from "@/store/Todo";
import React, { FormEvent, useState } from "react";

type Props = {};

const UserTodo = (props: Props) => {
  const [UserTodo, setUserTodo] = useState<string>("");
  const { handleAddTodo } = useTodoContext();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (UserTodo !== "") {
      handleAddTodo(UserTodo);
    }

    setUserTodo("");
  };
  return (
    <form className="flex p-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="your todo goes here..."
        className="input input-bordered w-full max-w-xs mr-2"
        value={UserTodo}
        onChange={(e) => {
          setUserTodo(e.target.value);
        }}
      />
      <button type="submit" className="btn">
        ADD
      </button>
    </form>
  );
};

export default UserTodo;
