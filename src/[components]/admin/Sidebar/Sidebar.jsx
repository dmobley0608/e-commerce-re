import React, { useState } from 'react'

export default function Sidebar() {
    const [open, setOpen] = useState(false)
    return (
        <div 
        className={`${open? 'animate-slideRight  bg-slate-500': 'translate-x-[-100px] '} 
        sm:translate-x-0 w-[150px] pl-2 pr-6 pt-5 min-h-screen text-slate-200 sm:bg-slate-500`}>
            <div className='sm:hidden text-black' onClick={()=>setOpen(!open)}>
               {!open ?
                <h1 className='text-2xl font-extrabold text-right pr-2 '>{">"}</h1>
                :
                <h1 className='text-2xl font-semibold text-right pr-2 text-white'>X</h1>
               }
            </div>
            <ul className='text-start'>
                <li className='font-semibold cursor-pointer hover:font-bold mb-3'>Analytics </li>
                <li className='font-semibold cursor-pointer hover:font-bold mb-3'>Products </li>
                <li className='font-semibold cursor-pointer hover:font-bold mb-3'>Transactions </li>
                <li className='font-semibold cursor-pointer hover:font-bold mb-3'>Users </li>
            </ul>
        </div>
    )
}
