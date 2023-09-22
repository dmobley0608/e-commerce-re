
import Loading from '../../[components]/loading/Loading';
import { ProductCard } from '../../[components]/product/ProductCard'
import { useGetProductsQuery } from '../../[store]/slices/productsSlice'

export const Products = () => {
    const { data, error, isLoading } = useGetProductsQuery()
    const products = data;
    
    return (

        <div className='flex justify-center items-center w-full' >
            {isLoading ? <Loading>Rounding Up The Ducks!</Loading> : error ? "error" :
                <div className='flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:max-w-[800px] lg:max-w-[1000px] md:justify-start'>
                    {products.map((product, index) => <ProductCard key={index} product={product} />)}
                </div>
            }
        </div>

    )
}
