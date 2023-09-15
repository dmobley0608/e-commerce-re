import React, { useState } from 'react'
import { useGetProductByIdQuery } from '../../[store]/productsSlice'
import { useParams } from 'react-router-dom'

export default function Product() {
    let { id } = useParams()
    const { data, isLoading, error } = useGetProductByIdQuery(id)
    const { title, description, price, quantity, imgUrl } = data || ""

    const [count, setCount] = useState(0)

    const handleCount = (increment) => {
        if (increment === -1 && count < 1) {
            setCount(0)
            return
        }       
            setCount(() => count + increment)
       

    }
    return (
        <div>
            {isLoading ? "Loading" : error ? "Error" :
                <div className='flex flex-col items-center justify-start min-h-screen'>
                    <h1 className='font-bold text-3xl uppercase'>{title}</h1>
                    <img className='mb-3 border-b-2 shadow-md shadow-black' src={imgUrl} alt={title} />
                    <div className='flex w-[75px] justify-between'>
                        <button onClick={() => handleCount(1)} className='flex bg-slate-50  w-5 h-5 items-center justify-center rounded text-xl hover:-translate-y-0.5 hover:shadow-md shadow-black'>+</button>
                        <p className='font-bold'>{count}</p>
                        <button onClick={() => handleCount(-1)} className='flex bg-slate-50  w-5 h-5 items-center justify-center rounded text-xl hover:-translate-y-0.5 hover:shadow-md shadow-black'>-</button>
                    </div>
                    <h3><strong>Description: <br/></strong> {description}</h3>
                    <h6 className='bg-gray '>{quantity} IN STOCK</h6>
                    
                </div>}
        </div>
    )
}
