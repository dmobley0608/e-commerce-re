import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const userApiSlice = createApi({
    reducerPath:'usersSlice',
    baseQuery:fetchBaseQuery({baseUrl:"/api/users"}),
    tagTypes:["Users"],
    endpoints:(builder=>({
        getUser:builder.query({query:()=>"/", providesTags:['Users']}),
        logout:builder.mutation({
            query:()=>({url:"/logout"}),
            invalidatesTags:["Users"]
            }),
        registerUser:builder.mutation({
            query:(body)=>({
                url:"/register",
                method:"POST",
                body:body
            })
        }),
        login:builder.mutation({
            query:(body)=>({
                url:"/login/password",
                method:"POST",
                body:body
            }),
            invalidatesTags:["Users"]
        })
    }))
})



export const {useRegisterUserMutation, useLoginMutation, useGetUserQuery, useLogoutMutation} = userApiSlice
