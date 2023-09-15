import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { closeNav } from '../../store/navigationSlice'

export default function NavLink({to,  children}) {
    const {pathname} = useLocation()    
    const dispatch = useDispatch()
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
    <div onClick={()=>dispatch(closeNav())}>
        <Link className={setLinkStyle()} to={`${to}`} >{children}</Link>
    </div>
    
  )
}
