import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav className="flex w-full border-b-2 shadow-lg h-[75px] items-end px-4 pt-3 max-w-screen bg-slate-100 relative">
      <div id="nav-brand" className="mr-[100px]">
        <h4>ALL THE DUCKS</h4>
      </div>

      <div
        onClick={() => setShow(!show)}
        className="hamburger sm:hidden flex flex-col justify-between h-[20px] w-[20px] ms-auto mb-3 border-black">
        {!show ? (
          <>
            <div className="border-b-4 border-black w-[25px]"></div>
            <div className="border-b-4 border-black w-[25px]"></div>
            <div className="border-b-4 border-black w-[25px]"></div>
          </>
        ) : (
          "X"
        )}
      </div>

      <ul
        className={`${
          show
            ? "flex-col absolute top-[75px] right-0 bg-slate-200 w-full p-4"
            : "hidden"
        } sm:flex`}>
        <li className="">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="">
          <NavLink to="/products">Shop</NavLink>
        </li>
        <li className="">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="ms-auto">
          <Link to="/login">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}
