import React from 'react'
import { useSelector } from 'react-redux'
import CartRow from '../../[components]/cart/cartRow/CartRow'

export default function Cart() {
    const cart = useSelector(state => state.cart)
    return (
        <div>
            <div className='w-full'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th className='hidden sm:block'>Description</th>
                            <th>Price</th>
                            <th className=''>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody className='border-b-2 '>
                        {cart.items.map(item => <CartRow key={item.id} product={item} />)}
                    </tbody>
                    <tfoot className=''>
                    <tr className='border-b-2'>
                            <td className='w-0'></td>
                            <td className='hidden sm:block'></td>
                            <td className='w-0'></td>                           
                            <td className='font-bold border-r-2 w-[25%]'>Tax</td>
                            <td className='font-bold '>${(cart.totalCost * .07).toFixed(2)}</td>
                        </tr>    
                        <tr className='border-b-2'>
                            <td className='w-0'></td>
                            <td className='hidden sm:block'></td>
                            <td className='w-0'></td>                           
                            <td className='font-bold border-r-2 w-[25%]'>Shipping</td>
                            <td className='font-bold '>$9.99</td>
                        </tr>     
                        <tr className='border-b-2'>
                            <td className='w-0'></td>
                            <td className='hidden sm:block'></td>
                            <td className='w-0'></td>                           
                            <td className='font-bold border-r-2 w-[25%]'>Total Items {cart.totalItems}</td>
                            <td className='font-bold '>Total Cost ${cart.totalCost + (cart.totalCost * .07).toFixed(2) + 9.99}</td>
                        </tr>                        
                    </tfoot>
                </table>               
            </div>
        </div>
    )
}
