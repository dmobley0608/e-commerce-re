import React from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '../components/inputs/TextInput'
import NumberInput from '../components/inputs/NumberInput'
import SubmitInput from '../components/inputs/SubmitInput'
import Loading from '../components/loading/Loading'
import { useAddProductMutation } from '../store/slices/productsSlice'
import { useGetUserQuery } from '../store/slices/userSlice'

export default function NewProductForm({ setShow }) {
    const { register, handleSubmit,  formState: { errors } } = useForm()
    const [addProduct, {isLoading}] = useAddProductMutation()
    const {data:user} = useGetUserQuery()


    const onSubmit = async (data) => {    
        data.userId = user.id   
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
