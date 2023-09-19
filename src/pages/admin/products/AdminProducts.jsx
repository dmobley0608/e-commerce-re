import React from 'react'
import { useGetProductsQuery } from '../../../[store]/slices/productsSlice'

export default function AdminProducts() {
    const { data, isLoading, errors } = useGetProductsQuery()
    return (
        <div className='w-full'>
            {!isLoading && !errors &&
                <>
                <button className='bg-green-600 text-white p-3 rounded mb-1 hover:bg-green-400'>+ Add New Product</button>
                    <div className='flex justify-between border'>
                        <div className='w-[5%] flex justify-center'>
                            <p className='font-extrabold'>ID</p>
                        </div>
                        <div className='hidden w-[15%] sm:flex justify-center'>
                            <p className='font-extrabold'>Image</p>
                        </div>
                        <div className='w-[20%] flex justify-center'>
                            <p className='font-extrabold'>Title</p>
                        </div>
                        <div className='hidden w-[32%] sm:flex justify-center'>
                            <p className='font-extrabold'>Description</p>
                        </div>
                        <div className='w-[7%] flex justify-center'>
                            <p className='font-extrabold'>Quantity</p>
                        </div>
                        <div className='w-[7%] flex justify-center'>
                            <p className='font-extrabold'>Price</p>
                        </div>
                        <div className='w-[7%] flex justify-center'>

                        </div>
                        <div className='w-[7%] flex justify-center'>

                        </div>

                    </div>

                    {data.map(product =>
                        <div className='flex justify-between border  items-center'>
                            <div className='w-[5%]'>
                                <p className='font-semibold'>{product.id}</p>
                            </div>
                            <div className='hidden w-[15%] sm:flex justify-center'>
                                <img src={product.imgUrl} alt={product.imgUrl} className='w-[50px]' />
                            </div>
                            <div className='flex justify-center w-[20%]'>
                                <p className='font-semibold'>{product.title}</p>
                            </div>
                            <div className='hidden w-[32%] sm:flex flex-wrap justify-center'>
                                <p className='font-semibold'>{product.description}</p>
                            </div>
                            <div className='w-[7%] flex justify-center'>
                                <p className='font-semibold'>{product.quantity}</p>
                            </div>
                            <div className='w-[7%] flex justify-center'>
                                <p className='font-semibold'>${product.price}</p>
                            </div>
                            <div className='w-[7%] flex justify-center '>
                                <button className='font-semibold bg-slate-400  rounded p-2 '>Edit</button>
                            </div>
                            <div className='w-[7%] flex justify-center '>
                                <button className='font-semibold bg-red-400 w-[25px] h-[25px]'>X</button>
                            </div>

                        </div>
                    )}
                </>
            }
        </div>
    )
}
