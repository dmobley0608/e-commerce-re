import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const userApiSlice = createApi({
    reducerPath:'usersSlice',
    baseQuery:fetchBaseQuery({baseUrl:"/api/users"}),
    tagTypes:["Users, User"],
    endpoints:(builder=>({
        getCurrentUser:builder.query({query:()=>"/current-user", providesTags:['Users']}),
        getUserById:builder.query({query:(id)=>`/${id}`, providesTags:['User']}),
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



export const {useRegisterUserMutation, useLoginMutation,  useGetCurrentUserQuery, useGetUserByIdQuery, useLogoutMutation} = userApiSlice
