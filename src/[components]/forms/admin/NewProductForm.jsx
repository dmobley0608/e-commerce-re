import React from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '../inputs/TextInput'
import NumberInput from '../inputs/NumberInput'
import SubmitInput from '../SubmitInput'
import { useAddProductMutation, useGetProductsQuery } from '../../../[store]/slices/productsSlice'
import Loading from '../../loading/Loading'

export default function NewProductForm({ setShow, isLoading }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [addProduct, result] = useAddProductMutation()


    const onSubmit = async (data) => {       
        await addProduct(data)
        setShow(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {isLoading ? <Loading>Adding New Product</Loading> :
                <>
                    <h1 className='text-2xl'>Create New Product</h1>
                    <div className='mt-6'>
                        <TextInput type={'text'} name='title' label={"Title"} register={register}
                            errors={errors} placeholder={"Example Product"} errorMessage={"Title Field is required"} required={true} />
                    </div>
                    <div className='mt-6'>
                        <TextInput type={'text'} name='description' label={"Description"} register={register}
                            errors={errors} placeholder={"The Best Product Ever"} />
                    </div>
                    <div className='mt-6'>
                        <TextInput type={'text'} name='imageUrl' label={"ImageUrl"} register={register}
                            errors={errors} placeholder={"www.myimageurl.com"} />
                    </div>
                    <div className='mt-6 flex justify-between'>
                        <div className='w-[45%]'>
                            <NumberInput type={'number'} step="0.01" name='price' label={"Price"} register={register}
                                errors={errors} placeholder={"0.00"} required={true} errorMessage={"Price is required"} />
                        </div>
                        <div className='w-[45%]'>
                            <NumberInput type={'number'} step="0" name='quantity' label={"Quantity"} register={register}
                                errors={errors} placeholder={"0"} required={true} errorMessage={"Quantity is required"} />
                        </div>
                    </div>
                    <div >
                        <SubmitInput />
                    </div>
                </>
            }

        </form>
    )
}
