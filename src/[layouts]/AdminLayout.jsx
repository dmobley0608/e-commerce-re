import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../[components]/admin/Sidebar/Sidebar'
import { useGetUserQuery } from '../[store]/slices/userSlice'

const AuthRoute = ({ children }) => {
    const { data: user } = useGetUserQuery()
    if (user) {
        return children
    }
    return "No GO"
}

export default function AdminLayout() {
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
