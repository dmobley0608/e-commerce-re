
import { ProductCard } from '../../[components]/navbar/product/ProductCard'
import { useGetProductsQuery } from '../../[store]/productsSlice'

export const Products = () => {
    const { data, error, isLoading } = useGetProductsQuery()
    const products = data;
    console.log(data)


    return (

        <div className='flex justify-center items-center w-full' >
            {isLoading ? "Loading" : error ? "error" :
                <div className='flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:max-w-[1144px] sm:justify-start w-full '>
                    {products.map((product, index) => <ProductCard key={index} product={product} />)}
                </div>
            }
        </div>

    )
}
