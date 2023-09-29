import React from 'react'
import { useGetUserByIdQuery } from '../../store/slices/userSlice'
import ProfileImage from '../../components/profile/profileImage/ProfileImage'
import { ProductCard } from '../../components/product/ProductCard'
import { useGetProductsQuery } from '../../store/slices/productsSlice'
import { useParams } from 'react-router-dom'

export default function Profile() {
  const {id} = useParams()
 
  const { data: user, isFetching:fetchingUser } = useGetUserByIdQuery(id)
  const { products, isFetching:fetchingProducts } = useGetProductsQuery(undefined,
    {
      selectFromResult: ({ data }) => { 
        if(user){     
          return { products: data?.filter(product => product.userId === user.id ) ?? [] } 
        }
        return []      
      }
    });
  
  return (
    <div className='flex flex-col justify-center items-center'>
      {!fetchingUser && !fetchingProducts &&
        <>
        <div className='rounded-full bg-red-600 w-[150px] h-[150px] overflow-hidden'>
         <ProfileImage user={user}/>
        </div>
        <div>
          <p className='capitalize'>{user.firstName.toLowerCase()} {user.lastName.toLowerCase()}</p>
          <p>Contact Seller</p>
          <p>****Duck Rating*****</p>
        </div>
        {/* Products For Sale */}
        <div className=' w-full mt-5'>
          <h2 className='text-3xl font-bold'>Items For Sale By {user.firstName}</h2>
          <div className='flex flex-col sm:flex-row border-t justify-center items-center overflow-x-scroll'>
            {products.map(product=><ProductCard key={product.id} product={product}/>)}
          </div>
        </div>
        </>

      }
    </div >
  )
}
