"use client";
import { account } from "@/lib/appwrite";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const TopNav = () => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      // Call the Appwrite API to delete the user's session
      await account.deleteSession("current"); // "current" means the current user's session

      // Remove the user_id cookie
      Cookies.remove("user_id");

      // Clear the user data from local storage
      localStorage.removeItem("User-Details");

      // Redirect the user to the login page after logout
      router.push("/auth");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">To-Dooldo</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/sohan.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <Link href="/dashboard">
              <li>
                <div className="justify-between">
                  Dashboard
                  <span className="badge">New</span>
                </div>
              </li>
            </Link>
            <li>
              <div>Settings</div>
            </li>

            <li onClick={handleDelete}>
              <div>Logout</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
