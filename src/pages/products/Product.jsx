import React from 'react'
import { useGetProductByIdQuery } from '../../store/slices/productsSlice'
import { useParams } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import CartItemHandler from '../../components/cart/cartHandler/CartItemHandler'


export default function Product() {
    let { id } = useParams()
    
    const { data, isLoading, error } = useGetProductByIdQuery(id)
    const { title, description, price, quantity, images } = data || ""
    const cartItem = useSelector((state)=>state.cart.items.filter(item=>item.id === data.id)[0])
    return (
        <div>
            {isLoading ? "Loading" : error ? "Error" :
                <div className='flex flex-col items-center justify-start min-h-screen'>
                    <h1 className='font-bold text-3xl uppercase'>{title}</h1>
                    <img className='mb-3 border-b-2 shadow-md shadow-black' src={images[0].url} alt={title} /> 
                    {!cartItem ?`Unit Price: $${price}`: `Cart Price: $${(price * cartItem.quantity).toFixed(2)}`}
                    <div className='flex w-[75px] justify-between'>                       
                    <CartItemHandler product={data} />
                    </div>
                    <h3><strong>Description: <br/></strong> {description}</h3>
                    <h6 className='bg-gray '>{quantity} IN STOCK</h6>
                    
                </div>}
        </div>
    )
}
