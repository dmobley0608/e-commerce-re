import React from 'react'

export default function SubmitInput({text}) {
    return (
        <div className='mb-3 '>
            <input className='border px-6 py-2 rounded bg-slate-400 hover:bg-slate-600 hover:translate-y-0.5 cursor-pointer text-white' 
            type="submit"  value={text?text:"Submit"} />
        </div>
    )
}
