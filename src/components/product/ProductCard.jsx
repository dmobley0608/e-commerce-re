import React from 'react'

import { Link } from 'react-router-dom'
import { ProductCardStyles } from './productCard.styles'
import CartItemHandler from '../cart/cartHandler/CartItemHandler'

export const ProductCard = ({product}) => {
    const {title, price, quantity, images} = product

  return (
    <div className={ProductCardStyles.card}>
        <Link to={`${product.id}`} className={ProductCardStyles.cardHeader}>
            <img src={images[0].url} alt={title} /> 
        </Link>
        <div className={ProductCardStyles.cardBody}>
            <h2 className={ProductCardStyles.cardTitle}>{title}</h2>            
            <h4>${price}</h4>
            <h4>{quantity === 0 ?"Out of Stock" :quantity < 10 ?`Only ${quantity} in stock`: `${quantity} In Stock`}</h4>
            <h5 className='text-xs'>Seller: {product.user.firstName[0]}. {product.user.lastName}</h5>
        </div>
        <CartItemHandler product={product}/>       
       
    </div>
  )
}
