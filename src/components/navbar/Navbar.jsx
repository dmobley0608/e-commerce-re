import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { useDispatch, useSelector } from "react-redux";
import { closeNav, toggleNav } from "../../store/slices/navigationSlice";
import ShoppingCart from "../cart/shoppingCart/ShoppingCart";
import { useGetCurrentUserQuery, useLogoutMutation } from "../../store/slices/userSlice";
import ProfileImage from "../profile/profileImage/ProfileImage";


export default function Navbar() {
  const show = useSelector((state) => state.nav.showMobileNav)
  const [showMiniNav, setShowMiniNav] = useState(false)
  const dispatch = useDispatch()
  const { data: user } = useGetCurrentUserQuery()

  const [logout] = useLogoutMutation()


  return (
    <nav className="flex shadow-lg max-h-[125px]  items-end  px-4 py-7 bg-slate-100 shadow-black pb-1 mb-20 z-50">
      <div id="nav-brand" className="mr-[100px]">
        <h4>ALL THE DUCKS</h4>
      </div>


      <div className="flex justify-between w-full">
        <ul
          className={` ${show
            ? "animate-fadein flex-col absolute top-[95px] right-0 bg-slate-200 w-full "
            : "hidden"
            } sm:flex justify-end items-end`}>
          <li className="">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="">
            <NavLink to="/products">Shop</NavLink>
          </li>
          <li className="">
            <NavLink to="/about">About</NavLink>
          </li>


          {user &&
            <>
              <li className="sm:hidden">
                <NavLink to={`/${user.id}/dashboard`}>Dashboard</NavLink>
              </li>
              <li className="sm:hidden">
                <NavLink to={`/users/${user.id}/profile`} >Profile</NavLink>
              </li>
              <li onClick={() => logout()} className="sm:hidden">
                <NavLink to='/' >Sign Out</NavLink>
              </li>
            </>
          }
        </ul>
        <div className="flex px-3 w-[200px] justify-between items-end">

          <div>
            <Link to={'/cart'}> <ShoppingCart /></Link>
          </div>

          {!user && <Link to="/login">Sign In</Link>}
          {user &&
            <div className='hidden sm:flex w-[80px] h-[80px] float-right cursor-pointer' onClick={() => setShowMiniNav(!showMiniNav)}>
              <ProfileImage user={user} />
            </div>

          }
          {showMiniNav &&
            <ul onClick={() => setShowMiniNav(false)} className="sm:absolute bg-slate-300 p-6 w-52 rounded font-bold text-start top-[112px] -right-[3px]">
              <li>
                <NavLink to={`/${user.id}/dashboard`}>Dashboard</NavLink>
              </li>
              <li>
                <NavLink to={`/users/${user.id}/profile`} >Profile</NavLink>
              </li>
              <li onClick={() => logout()}>
                <NavLink to='/sign-out' >Sign Out</NavLink>
              </li>
            </ul>
          }
        </div>

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

    </nav>
  );
}
