import React from 'react'

export const ProductCard = ({product}) => {
    const {title, description, price, quantity, imgUrl} = product
  return (
    <div className='border mb-4 flex flex-col items-center shadow-xl w-[95%] rounded p-3 sm:w-[300px] sm:m-3 hover:cursor-pointer'>
        <div className='border shadow-lg h-[250px] w-[250px] overflow-hidden p-3 animate-fadein mb-2'>
            <img src={imgUrl} alt={title} />
        </div>
        <div className='text-left uppercase border-b w-full mb-2 '>
            <h2 className='text-xl font-bold'>{title}</h2>            
            <h4>${price}</h4>
            <h4>{quantity === 0 ?"Out of Stock" :quantity < 10 ?`Only ${quantity} in stock`: `${quantity} In Stock`}</h4>
        </div>
        
        <div>
            <button className='bg-blue-500 p-1 px-3 rounded hover:shadow-xl shadow-black hover:-translate-y-0.5'>Add To Cart</button>
        </div>
    </div>
  )
}
