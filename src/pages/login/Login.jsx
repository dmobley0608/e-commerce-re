import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import TextInput from '../../[components]/forms/inputs/TextInput'
import SubmitInput from '../../[components]/forms/SubmitInput'
import { useGetUserQuery, useLoginMutation } from '../../[store]/slices/userSlice'
import Loading from '../../[components]/loading/Loading'
export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [login, result] = useLoginMutation()
  const { data: user } = useGetUserQuery()

  const nav = useNavigate()

  const onSubmit = async data => {
    const result = await login(data)       
  }

  useEffect(()=>{
    if(user){
      nav("/admin")
    }
  },[user])

  return (
    <div className='flex flex-col items-center'>
      {result.isLoading ? <Loading>Logging In</Loading> :
        <>
          <form className='border p-6 w-[95%] sm:max-w-[600px] shadow mb-3' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-3xl mb-12'>Login</h1>
            {result.error && result.error.originalStatus === 401 ? 
            <h6 className='mb-6 bg-red-600 text-white'>Invalid Username or Password</h6>: result.error ?
            <h6 className='mb-6 text-white bg-orange-600 rounded'>Uh-Oh We Are Expreriencing Difficulties</h6>:""}
            <TextInput name={"email"} type={"text"} label={"Email"} register={register} errors={errors} errorMessage={"Email address Is Required"} required={true} />
            <TextInput name={"password"} label={"Password"} type={"password"} register={register} errors={errors} errorMessage={"Password Field Is Required"} required={true} />
            <SubmitInput />
            <h2>Login in Via:</h2>
            <Link>Google</Link>
          </form>

          <h2 className='font-bold'>Don't have an account?<br /> No worries! <br />Click below to register!</h2>
          <Link className='text-white text-lg rounded border px-2 bg-slate-400 hover:bg-slate-600 hover:translate-y-0.5 cursor-pointer' to="/register">Register</Link>
        </>
      }
    </div>
  )
}
