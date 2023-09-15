import React from 'react'
import { products } from './temp'
import { ProductCard } from '../../[components]/navbar/product/ProductCard'

export const Products = () => {

    return (
        <div className='flex justify-center items-center w-full' >
            <div className='flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:max-w-[1144px] sm:justify-start w-full '>
                {products.map((product, index) => <ProductCard key={index} product={product} />)}
            </div>

        </div>
    )
}
