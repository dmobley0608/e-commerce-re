import React from 'react'
import { useDeleteProductByIdMutation } from '../../../[store]/slices/productsSlice'
import Loading from '../../loading/Loading'

export default function DeleteProductForm({ setShow, product, setProduct }) {
    const [deleteProduct, { isLoading }] = useDeleteProductByIdMutation()
    const handleDelete = async() => {
        await deleteProduct(product.id)
        setProduct(null)
        setShow(false)
    }
    return (
        <form className='w-full max-w-[600px]'>
            {!isLoading ?
                <>
                    <h1 className='text-3xl text-start'>This cannot be undone!<br /> Are you sure you want to continue?</h1>
                    <div className='flex flex-wrap justify-between mt-5'>
                        <button className='text-white text-xl border rounded p-2 bg-red-500 hover:bg-red-300' onClick={handleDelete}>DELETE PRODUCT</button>
                        <button className='text-white text-xl border rounded p-2 bg-slate-500 hover:bg-slate-300' onClick={()=>setShow(false)}>GO BACK</button>
                    </div>
                </>
                : <Loading>Deleting Product</Loading>
            }
        </form>
    )
}
