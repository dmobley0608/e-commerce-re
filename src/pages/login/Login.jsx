import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import TextInput from '../../[components]/forms/inputs/TextInput'
import SubmitInput from '../../[components]/forms/SubmitInput'

export const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)

  useEffect(() => { console.log(errors) }, [errors])
  return (
    <div className='flex flex-col items-center'>
      <form className='border p-6 w-[95%] sm:max-w-[600px] shadow mb-3' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-3xl mb-12'>Login</h1>
        <TextInput name={"email"} type={"text"} label={"Email"}register={register} errors={errors} errorMessage={"Email address Is Required"} required={true} />
        <TextInput name={"password"} label={"Password"} type={"password"} register={register} errors={errors} errorMessage={"Password Field Is Required"} required={true} />
        <SubmitInput />
        <h2>Login in Via:</h2>
        <Link>Google</Link>        
      </form>
      <h2 className='font-bold'>Don't have an account?<br/> No worries! <br/>Click below to register!</h2>
      <Link className='text-white text-lg rounded border px-2 bg-slate-400 hover:bg-slate-600 hover:translate-y-0.5 cursor-pointer' to="/register">Register</Link>
    </div>
  )
}
