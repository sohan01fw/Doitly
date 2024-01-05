"use client";
import { useAppDispatch } from "@/utils/Redux_Store/Hooks";
import { addTodo } from "@/utils/Redux_slice/todoSlice";
import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

type Props = {};

const UserTodo = (props: Props) => {
  const dispatch = useDispatch();
  const [UserTodo, setUserTodo] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (UserTodo !== "") {
      dispatch(addTodo(UserTodo));
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
