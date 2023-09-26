import React from 'react'
import ducks from '../../images/duck.gif'
export default function Loading({ children }) {
    return (
        <div className='w-full  flex flex-col justify-center items-center'>

            <div className='w-full h-full max-h-[600px] max-w-[600px] rounded-full border '>
                <h1 className='font-bold text-4xl animate-bounce mt-9'>{children}</h1>
                <img src={ducks} className='w-full rounded-full' alt='loading' />
            </div>


        </div>
    )
}
