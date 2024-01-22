"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const TopNav = () => {
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
