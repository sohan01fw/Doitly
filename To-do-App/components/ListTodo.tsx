"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { TodoValues } from "@/utils/Redux_slice/todoSlice";
import { useSelector } from "react-redux";
import { useGetTodosQuery } from "@/utils/api/apiSlice";
type Props = {};

const ListTodo = (props: Props) => {
  const {
    data: todosRes,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetTodosQuery();

  const searchParams = useSearchParams();
  const a = useSelector(TodoValues);
  let content;
  console.log(todosRes);
  /*  const search = searchParams.get("todo");
  console.log(search); */
  /* let filterTodos = todo;
  if (search === "active") {
    filterTodos = todo.filter((task) => !task.completed);
  } else if (search === "completed") {
    filterTodos = todo.filter((task) => task.completed);
  } */

  /*   if (isLoading) {
    content = <p>loading.....</p>;
  } else if (isSuccess) {
    content = JSON.stringify(todos);
  } else if (isError) {
    content = <p>there is error in a code,{`${error}`}</p>;
  } */
  return (
    <div>
      {/*   {filterTodos.map((data) => {
        return (
          <div key={data.id}>
            <ul className="flex m-3 p-1 text-center justify-between ">
              <div className="flex">
                <input
                  type="checkbox"
                  id={data.id}
                  className="checkbox checkbox-info mr-2"
                  checked={data.completed}
                  onChange={(e) => handleTodoCompleted(data.id)}
                />
                <h3 className="font-semibold text-2xl mt-[-7px]">
                  {data.task}
                </h3>
              </div>

              {data.completed && (
                <button
                  className="btn text-sm mt-[-10px] hover:bg-red-500 hover:text-white"
                  onClick={() => {
                    handleTodoDeleted(data.id);
                  }}
                >
                  Delete
                </button>
              )}
            </ul>
          </div>
        );
      })} */}
    </div>
  );
};

export default ListTodo;
