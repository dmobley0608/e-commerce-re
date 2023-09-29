import React from 'react'
import { useGetProductByIdQuery } from '../../store/slices/productsSlice'
import { Link, useParams } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import CartItemHandler from '../../components/cart/cartHandler/CartItemHandler'


export default function Product() {
    let { id } = useParams()
    
    const { data:product, isLoading, error } = useGetProductByIdQuery(id)
    const { title, description, price, quantity, images } = product || ""
    const cartItem = useSelector((state)=>state.cart.items.filter(item=>item.id === product.id)[0])
    console.log(product)
    return (
        <div>
            {isLoading ? "Loading" : error ? "Error" :
                <div className='flex flex-col items-center justify-start min-h-screen'>
                    <h1 className='font-bold text-3xl uppercase'>{title}</h1>
                    <img className='mb-3 border-b-2 shadow-md shadow-black max-w-[300px]' src={images[0].url} alt={title} /> 
                    <p className='font-extrabold'>{!cartItem ?`Unit Price: $${price.toFixed(2)}`: `Cart Price: $${(price * cartItem.quantity).toFixed(2)}`}</p>
                    <h6 className='bg-gray '>{quantity} IN STOCK</h6> 
                    <div className='flex w-[75px] justify-between m-3'>                                         
                    <CartItemHandler product={product} />
                    </div>
                    <h3><strong>Description: <br/></strong> {description}</h3>
                    <Link to={`/users/${product.userId}/profile`} className='text-xs'>Seller: {product.user.firstName[0]}. {product.user.lastName}</Link>
                   
                    
                </div>}
        </div>
    )
}
