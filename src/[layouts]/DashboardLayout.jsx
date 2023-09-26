import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../components/dashboard/Sidebar/Sidebar'
import { useGetUserQuery } from '../store/slices/userSlice'
import policeDuck from "../images/police duck.png"
const AuthRoute = ({ children }) => {
    const { data: user } = useGetUserQuery()
    const nav = useNavigate()
    if (user) {
        return children
    } else {
        setTimeout(()=>{nav('/login')},5000)
        return (
            <div className='flex flex-col justify-center items-center w-full'>
                <h2 className='text-blue-400 font-extrabold sm:text-xl lg:text-5xl animate-pulse'>YOU DO NOT HAVE AUTHORIZATION TO BE IN THIS AREA!</h2>
                <div className='w-full max-w-[600px]'>
                    <img src={policeDuck} alt="" width={'100%'} />
                </div>

                <h2 className='text-red-400 font-extrabold  sm:text-lg lg:text-5xl animate-pulse'>YOU DO NOT HAVE AUTHORIZATION TO BE IN THIS AREA!</h2>
            </div>
        )
    }
}

export default function DashboardLayout() {
    return (
        <div className='flex'>
            <AuthRoute>
                <div className=' absolute min-h-screen mt-[-75px] max-w-52 mr-6'>
                    <Sidebar />
                </div>
                <div className='flex felx-col justify-center w-full sm:ml-[150px] ml-2 mr-2 sm:mr-[15px] p-2'>
                    <Outlet />
                </div>
            </AuthRoute>

        </div>
    )
}
