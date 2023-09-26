import React from 'react'
import shoppingBag from "../../../images/shoppingBag.png"
import { useSelector } from 'react-redux'
export default function ShoppingCart() {
    const itemCount = useSelector(state => state.cart.totalItems)
    return (
        <div className='w-[50px] relative'>
            <img src={shoppingBag} alt='shopping bag' width={'100%'} />
            <div className='absolute top-8 left-0 font-bold w-[50px]'>
                <p >{itemCount}</p>
            </div>

        </div>
    )
}
