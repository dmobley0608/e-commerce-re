import React from 'react'
import { useSelector } from 'react-redux'
import CartRow from '../../components/cart/cartRow/CartRow'

export default function Cart() {
    const cart = useSelector(state => state.cart)
    const shippingCost = (.25 * cart.totalCost) > 9.99 ? (9.99).toFixed(2) : (.25 * cart.totalCost).toFixed(2)
    const tax = (.07 * cart.totalCost).toFixed(2)

    const calculateTotal = ()=>{       
        return (Number(cart.totalCost) + Number(shippingCost) +Number(tax)).toFixed(2)
    }

    return (
        <div>
            <div className='w-full flex justify-center'>
                <table className='w-full sm:max-w-[1144px]'>
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
                    <tr className=''>
                            <td className='w-0'></td>
                            <td className='hidden sm:block'></td>
                            <td className='w-0'></td>                           
                            <td className='font-bold border-l-2 w-[25%]'>Cart Total</td>
                            <td className='font-bold border-2 '>${cart.totalCost}</td>
                        </tr>  
                    <tr className=''>
                            <td className='w-0'></td>
                            <td className='hidden sm:block'></td>
                            <td className='w-0'></td>                           
                            <td className='font-bold border-2 w-[25%]'>Tax</td>
                            <td className='font-bold  border-2'>${tax}</td>
                        </tr> 
                       
                        <tr className=''>
                            <td className='w-0'></td>
                            <td className='hidden sm:block'></td>
                            <td className='w-0'></td>                           
                            <td className='font-bold border-2 w-[25%]'>Shipping</td>
                            <td className='font-bold border-2 '>${shippingCost}</td>
                        </tr>     
                        <tr className=''>
                            <td className='w-0'></td>
                            <td className='hidden sm:block'></td>
                            <td className='w-0'></td>                           
                            <td className='font-bold border-2 w-[25%]'>Total Cost</td>
                            <td className='font-bold border-2'>${calculateTotal()}</td>
                        </tr>                        
                    </tfoot>
                </table>               
            </div>
        </div>
    )
}
