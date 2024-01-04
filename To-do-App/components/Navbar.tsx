import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="m-2">
      <Link href="/" className="btn btn-group-horizontal m-1">
        All task
      </Link>
      <Link href="/?todo=active" className="btn m-1">
        Active task
      </Link>
      <Link href="/?todo=completed" className="btn m-1">
        Completed task
      </Link>
    </div>
  );
};

export default Navbar;
