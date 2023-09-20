import React, { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../../../[store]/slices/productsSlice'
import Modal from '../../../[components]/modals/Modal'
import NewProductForm from '../../../[components]/forms/admin/NewProductForm'

export default function AdminProducts() {
    const { data, isLoading, errors } = useGetProductsQuery()
    const [showModal, setShowModal] = useState(false)
    useEffect(()=>{},[isLoading])
    return (
        <div className='w-full'>
            {!isLoading && !errors &&
                <>
                <button className='bg-green-600 text-white p-3 rounded mb-1 hover:bg-green-400' onClick={()=>setShowModal(true)}>+ Add New Product</button>
                    <div className='flex justify-between border'>
                        <div className='w-[25%] flex justify-center'>
                            <p className='font-extrabold'>ID</p>
                        </div>
                        <div className='hidden w-[10%] sm:flex justify-center'>
                            <p className='font-extrabold'>Image</p>
                        </div>
                        <div className='w-[15%] flex justify-center'>
                            <p className='font-extrabold'>Title</p>
                        </div>
                        <div className='hidden w-[25%] sm:flex justify-center'>
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
                        <div key={product.id} className='flex justify-between border  items-center'>
                            <div className='w-[25%] text-xs'>
                                <p className='font-semibold'>{product.id}</p>
                            </div>
                            <div className='hidden w-[10%] sm:flex justify-center'>
                                <img src={product.images[0].url} alt={product.title} className='w-[50px]' />
                            </div>
                            <div className='flex justify-center w-[15%]'>
                                <p className='font-semibold'>{product.title}</p>
                            </div>
                            <div className='hidden w-[25%] sm:flex flex-wrap justify-center text-start'>
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
            <Modal show={showModal} setShow={setShowModal}><NewProductForm setShow={setShowModal} isLoading={isLoading}/></Modal>
        </div>
    )
}
