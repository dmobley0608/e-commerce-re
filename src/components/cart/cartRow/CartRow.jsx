import React from 'react'
import CartItemHandler from '../cartHandler/CartItemHandler';
import { useGetProductByIdQuery } from '../../../store/slices/productsSlice';

export default function CartRow({ product }) {
  const { title, description, quantity, price, images } = product;
  const {data, isLoading} = useGetProductByIdQuery(product.id)
  return (
    <>
    {!isLoading &&
    <tr className='border-y-2' >
      <td>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='uppercase'>{title}</h2>
          <div className='w-[75px]'>
            <img src={images[0].url} alt={title} />
          </div>
        </div>

      </td>
      <td className='hidden sm:table-cell capitalize' >{description}</td>
      <td>${price}</td>
      <td className=' w-[20%]' align='center'><CartItemHandler product={data}/></td>
      <td className=' w-[25%]'>${(price * quantity).toFixed(2)}</td>
    </tr>
    }
    </>
  )
}
