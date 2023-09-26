import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { useDispatch, useSelector } from "react-redux";
import { closeNav, toggleNav } from "../../[store]/slices/navigationSlice";
import ShoppingCart from "../cart/shoppingCart/ShoppingCart";
import { useGetUserQuery, useLogoutMutation } from "../../[store]/slices/userSlice";


export default function Navbar() {
  const show = useSelector((state) => state.nav.showMobileNav)
  const [showMiniNav, setShowMiniNav] = useState(false)
  const dispatch = useDispatch()
  const { data: user } = useGetUserQuery()

  const [logout] = useLogoutMutation()


  return (
    <nav className="flex shadow-lg h-[75px]  items-end  px-4 pt-3 bg-slate-100 shadow-black pb-1 mb-20 z-50">
      <div id="nav-brand" className="mr-[100px]">
        <h4>ALL THE DUCKS</h4>
      </div>


      <div>
        <ul
          className={` ${show
            ? "animate-fadein flex-col absolute top-[75px] right-0 bg-slate-200 w-full"
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
          <li className="ms-auto sm:absolute right-5  " onClick={() => dispatch(closeNav())}>
            {!user && <Link to="/login">Sign In</Link>}
            {user &&
              <div onClick={() => setShowMiniNav(!showMiniNav)} className="rounded-full bg-red-500 w-16 h-16 sm:absolute -top-[38px] right-0 items-center justify-center flex p-0 cursor-pointer">
                <h1 className="text-5xl font-extrabold text-white">{user.firstName[0]}</h1>
              </div>
            }
            {showMiniNav &&
              <ul onClick={() => setShowMiniNav(false)} className="absolute bg-white p-3 rounded font-bold text-start top-[30px] -right-[3px]">
                <li>
                  <NavLink to="/admin">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to='/profile' >Profile</NavLink>
                </li>
                <li onClick={()=> logout()}>
                  <NavLink to='/' >Sign Out</NavLink>
                </li>
              </ul>
            }
          </li>
        </ul>
      </div>


      <Link to="/cart" className="ms-auto mr-20" >
        <ShoppingCart />
      </Link>
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

    </nav>
  );
}
