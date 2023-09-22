import React from 'react'
import ducks from '../../images/duck.gif'
export default function Loading({children}) {
    return (
        <div className='w-full  flex justify-center items-center'>
            <div className='max-w-[600px] '>
                <img src={ducks} className='w-full' alt='loading' />
                <img className='rotate-180 w-full -mt-3' src={ducks} alt='loading' />
                <h1 className='font-bold text-4xl animate-bounce -mt-9'>{children}</h1>
            </div>

        </div>
    )
}
