import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../[components]/navbar/Navbar'
import {  useDispatch } from 'react-redux'

import { closeNav } from '../[store]/navigationSlice'

function Root() {
  const dispatch = useDispatch()
  return (
    <div>
      
        <header className='sticky top-0 w-full mb-3'>
          <Navbar  />
        </header>

        <main onClick={()=>dispatch(closeNav())}>
          <Outlet />
        </main>

    

    </div>
  )
}

export default Root