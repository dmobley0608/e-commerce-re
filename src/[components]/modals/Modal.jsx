import React from 'react'

export default function Modal({ show, setShow, children }) {
    
    return (
        <>
            {show ?
                <div className='absolute top-0 left-0 min-h-screen min-w-full bg-slate-500 opacity-90 z-50 '>

                    <div className='flex min-h-screen flex-col justify-center items-center'>
                        <div className='relative max-w-[600px] items-center opacity-100 z-50 p-5 bg-white rounded'>
                            <div>
                                <button onClick={()=>setShow(false)}
                                 className='text-xl font-extrabold absolute right-5 bg-red-500 p-1 rounded hover:bg-red-900 hover:text-white'>X</button>
                            </div>
                            {children}
                        </div>

                    </div>

                </div>
                : ""

            }
        </>
    )
}
