import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useGetUserQuery, useLoginMutation, useRegisterUserMutation } from '../../store/slices/userSlice'
import Loading from '../../components/loading/Loading'
import TextInput from '../../components/inputs/TextInput'
import SubmitInput from '../../components/inputs/SubmitInput'

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [registerUser, { isLoading }] = useRegisterUserMutation()
  const [registrationErrors, setRegistrationErrors] = useState([])
  const [login] = useLoginMutation()
  const {data:user, isFetching} = useGetUserQuery()
  const nav = useNavigate()

  const onSubmit = async data => { 
    const result = await registerUser(data)
    if(result.error){    
      if(result.error.data.code === "P2002"){
        setRegistrationErrors(["Email Account Already Registered"])
        return
      }else{
        setRegistrationErrors("Uh-Oh! We are experiencing Technical Difficulties!")
        return
      }
    }
    await login({email:data.email, password:data.password})

  }

  useEffect(()=>{
    if(user){
      nav(`/${user.id}/dashboard`)
    }
    // eslint-disable-next-line
  },[user])

  
  return (
    <div className='flex w-full items-center justify-center'>
     
      {isLoading || isFetching ? <Loading>Registering User</Loading> :
        <form className='border rounded shadow w-[95%] sm:max-w-[600px] flex flex-wrap justify-between p-6' onSubmit={handleSubmit(onSubmit)}>
           {registrationErrors.map(err=><h2 key={err} className='text-red-700 bg-opacity-50 rounded bg-slate-400 p-2 w-full'>{err}</h2>)}
          <div className='w-full mb-6 text-2xl'>
            <h1>Create A New Account</h1>
          </div>
          <div className='w-full sm:w-[40%]'>
            <TextInput name="firstName" type="text" label={"First Name"} placeholder={"First Name"} register={register} errors={errors} />
          </div>
          <div className='w-full sm:w-[40%]'>
            <TextInput name="lastName" type="text" label={"Last Name"} placeholder={"Last Name"} register={register} errors={errors} />
          </div>
          <div className='w-full '>
            <TextInput name="email" type="email" label={"Email"} placeholder={"johnDoe@email.com"} register={register} errors={errors} required={true} errorMessage={"Email Field Is Required"} />
          </div>
          <div className='w-full '>
            <TextInput name="password" type="password" label="Password" placeholder={"Password"} register={register} errors={errors} required={true} errorMessage={"Password Field Is Required"} />
          </div>
          <div className='w-full '>
            <TextInput name="confirmPassword" type="password" label="Confirm Password" placeholder={"Confirm Password"} register={register} required={true} errors={errors} errorMessage={"Confirm Password Field Is Required"} />
          </div>
          <div>
            <SubmitInput text="Register" />
          </div>
          <div className='flex flex-col items-center justify-start'>
            <h3 className='font-bold text-sm'>Already Have An Account?</h3>
            <Link className='text-white  rounded border px-2 bg-blue-400 hover:bg-blue-600 hover:translate-y-0.5 cursor-pointer'
              to="/login">Sign In</Link>
          </div>


          <div className='w-full'>
            <hr />
            <h3 className='font-bold'>OR <br />Register With:</h3>
            Google
          </div>

        </form>
      }
    </div>
  )
}
