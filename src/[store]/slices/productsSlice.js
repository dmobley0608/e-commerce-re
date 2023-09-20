import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const productsApi = createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({baseUrl:'/api/products'}),
    tagTypes:['Products'],
    endpoints:(builder)=>({       
        getProducts: builder.query({query:()=>'/', providesTags:["Products"]}),
        getProductById:builder.query({query:(id)=>`/${id}`}),
        addProduct: builder.mutation({
            query:({...body})=>({
                url:"/new",
                method:'POST',
                body:body,
                
            }),
            invalidatesTags:['Products']
        }),
        
        
    })
})


export const {useGetProductsQuery, useGetProductByIdQuery, useAddProductMutation} = productsApi