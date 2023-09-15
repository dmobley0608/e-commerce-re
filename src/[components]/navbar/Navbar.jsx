import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { useDispatch, useSelector } from "react-redux";
import { closeNav, toggleNav } from "../../[store]/navigationSlice";

export default function Navbar() {
  const show = useSelector((state)=>state.nav.showMobileNav)  
  const dispatch = useDispatch()


  return (
    <nav className="flex w-full border-b-2 shadow-lg h-[75px] items-end px-4 pt-3 max-w-screen bg-slate-100 ">
      <div id="nav-brand" className="mr-[100px]">
        <h4>ALL THE DUCKS</h4>
      </div>

      <div
        onClick={() => dispatch(toggleNav())}
        className="hamburger sm:hidden flex flex-col justify-between h-[20px] w-[20px] ms-auto mb-3 border-black z-">
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
            ? "animate-fadein flex-col absolute top-[75px] right-0 bg-slate-200 w-full p-4 "
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
        <li className="ms-auto" onClick={()=>dispatch(closeNav())}>
          <Link to="/login">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}
