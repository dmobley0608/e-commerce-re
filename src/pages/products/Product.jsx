import React from 'react'
import { useGetProductByIdQuery } from '../../[store]/productsSlice'
import { useParams } from 'react-router-dom'

export default function Product() {
    let { id } = useParams()
    const { data, isLoading, error } = useGetProductByIdQuery(id)
    return (
        <div>
            {isLoading ? "Loading" : error ? "Error" :
                <div>
                    <h1>{data.title}</h1>
                </div>}
        </div>
    )
}
