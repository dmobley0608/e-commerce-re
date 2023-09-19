import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
    const [open, setOpen] = useState(false)
    const {pathname} = useLocation()
   

    //Set Active Link Style
    const setStyle = (to)=>{
        let style = 'cursor-pointer hover:font-bold mb-3 '
        if(pathname === to){
            style += 'border-b-2 font-extrabold text-center tracking-[2px]'
        }else{
            style += 'font-bold'
        }        
        return style
    }

  
    return (
        <div
            className={`${open ? 'animate-slideRight  bg-slate-500' : 'translate-x-[-125px] '} 
        sm:translate-x-0 w-[150px] pl-2 pr-6 pt-5 min-h-screen text-slate-200 sm:bg-slate-500`}>
            <div className='sm:hidden text-black translate-x-[25px]' onClick={() => setOpen(!open)}>
                {!open ?
                    <h1 className='text-2xl font-extrabold text-right pr-2 '>{">"}</h1>
                    :
                    <h1 className='text-2xl font-semibold text-right pr-2 text-white'>X</h1>
                }
            </div>
            <ul className='text-start'>
              
                <li className={setStyle('/admin')} onClick={()=>setOpen(!open)}>
                    <Link to="/admin" >Dashboard </Link>
                </li>
                <li className={setStyle('/admin/products')}  onClick={()=>setOpen(!open)}>
                    <Link to="/admin/products" >Products </Link>
                </li>
                <li className={setStyle('/admin/transactions')}  onClick={()=>setOpen(!open)}>
                    <Link to="/admin/transactions" >Transactions </Link>
                </li>
                <li className={setStyle('/admin/users')}  onClick={()=>setOpen(!open)}>
                    <Link to="/admin/users" >Users </Link>
                </li>               
            </ul>
        </div>
    )
}
