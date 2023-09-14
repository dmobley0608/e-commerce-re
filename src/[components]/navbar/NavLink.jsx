import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavLink({to, children}) {
    const {pathname} = useLocation()
    
    const setLinkStyle = ()=>{
        let style = "hover:border-b mx-4"
        if(to === pathname){
            style += ' border-b-black border-b text-xl'
        }else{
            style += ' text-md'
        }
        return style
    }
  return (
    <Link className={setLinkStyle()} to={`${to}`}>{children}</Link>
  )
}
