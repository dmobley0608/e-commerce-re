import React from 'react'

export default function TextInput({ name, label, register, errors, errorMessage, type, placeholder, required, value }) {
    return (
        <div className='relative mb-6 w-full'>
            <div className='absolute top-[47px] text-center w-full text-red-600'>
                {errors[name] && <h3 className='text-xs pt-0.5'>{errors[name].message}</h3>}            </div>
            {required && <span className='font-light text-xs absolute top-[-15px] right-1'>*Required</span>}
            <label className='capitalize absolute top-[-20px] left-4 font-bold'>{label}:</label>
            <input type={type} className='form-input px-4 py-3 rounded-lg w-full'
                placeholder={placeholder} {...register(name, { required: required ? errorMessage : false })} value={value} />
        </div>
    )
}
