import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'

export default function Navbar() {
    return (
        <nav className="flex w-full border-b-2 shadow-lg h-[75px] items-end px-4 pb-3">
            <div id="nav-brand" className='mr-[100px]'>
                <h4>ALL THE DUCKS</h4>
            </div>
            <ul className='flex w-full'>
                <li className=''>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className=''>
                    <NavLink to="/products">Shop</NavLink>
                </li>
                <li className=''>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className='ms-auto'>
                    <Link to="/login">Sign In</Link>
                </li>
            </ul>
        </nav>
    )
}
