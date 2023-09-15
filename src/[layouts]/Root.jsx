import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../[components]/navbar/Navbar'
import {  useDispatch, useSelector } from 'react-redux'

import { closeNav } from '../[store]/slices/navigationSlice'

function Root() {
  const dispatch = useDispatch()
  const open = useSelector((state)=>state.nav.showMobileNav)
  return (
    <div>
      
        <header className='sticky top-0 '>
          <Navbar  />
        </header>

        <main onClick={()=>open ?dispatch(closeNav()) : null}>
          <Outlet />
        </main>

    

    </div>
  )
}

export default Root