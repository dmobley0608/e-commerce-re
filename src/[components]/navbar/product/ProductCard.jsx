import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItemToCart } from '../../../[store]/slices/cartSlice'
import { ProductCardStyles } from './productCard.styles'
import CartItemHandler from '../../cart/CartItemHandler'

export const ProductCard = ({product}) => {
    const {title, price, quantity, imgUrl} = product
    const dispatch = useDispatch()
  return (
    <div className={ProductCardStyles.card}>
        <Link to={`${product.id}`} className={ProductCardStyles.cardHeader}>
            <img src={imgUrl} alt={title} />
        </Link>
        <div className={ProductCardStyles.cardBody}>
            <h2 className={ProductCardStyles.cardTitle}>{title}</h2>            
            <h4>${price}</h4>
            <h4>{quantity === 0 ?"Out of Stock" :quantity < 10 ?`Only ${quantity} in stock`: `${quantity} In Stock`}</h4>
        </div>
        <CartItemHandler product={product}/>       
       
    </div>
  )
}
