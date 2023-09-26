import React from 'react'
import { useGetUserQuery } from '../../store/slices/userSlice';
import { useGetProductsQuery } from '../../store/slices/productsSlice';

export default function Dashboard() {
  const { data: user } = useGetUserQuery()
  const messages = false
  const { products, isFetching } = useGetProductsQuery(undefined,
    {
      selectFromResult: ({ data }) => {
        if (user.role === 'USER') {
          return { products: data?.filter(product => product.userId === user.id) ?? [] }
        } else if (user.role === 'ADMIN') {
          return { products: data ?? [] }
        }
      }
    });
  return (
    <div className='flex flex-wrap justify-between'>
      <div className='max-w-[300px] border p-6 m-6 rounded shadow-md'>
        <h2>Total Products For Sale</h2>
        <h6>{products.length}</h6>
      </div>
      <div className='max-w-[300px] border p-6 m-6 rounded shadow-md'>
        <h2>Total Products Sold</h2>
        <h6>To Do</h6>
      </div>
      <div className='max-w-[300px] border p-6 m-6 rounded shadow-md'>
        <h2>Your Seller Rating</h2>
        <h6>To Do</h6>
      </div>
      <div className='max-w-[300px] border p-6 m-6 rounded shadow-md'>
        <h2>Your Buyer Rating</h2>
        <h6>To Do</h6>
      </div>
      <div className='w-full'>
        <h2>Messages</h2>
        <div className='flex flex-col pt-2 w-full border shadow-lg min-h-[50px]'>
          {!messages && <p>No Messages at this time</p>}
        </div>
      </div>
    </div>
  )
}
