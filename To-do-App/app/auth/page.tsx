"use client";
import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <button
      className=" m-10 p-5 rounded-md shadow-md hover:bg-slate-300 font-semibold hover:font-bold whitespace-nowrap"
      onClick={() =>
        signIn("google", { callbackUrl: "http://localhost:3000/" })
      }
    >
      Sign in with Google
    </button>
  );
};

export default page;
