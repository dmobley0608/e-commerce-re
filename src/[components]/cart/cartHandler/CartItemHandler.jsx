import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../../[store]/slices/cartSlice";
import { CartHandlerStyles } from "./cartHandler.styles";

export default function CartItemHandler({product}) {  
    const cartItem = useSelector(state=>state.cart.items.filter(item=> item.id === product.id)[0]) 
  
    const dispatch = useDispatch()



  return (
    <div className="flex w-[75px] justify-between">
      <button
        onClick={() => dispatch(removeItemFromCart(product))}
        className={CartHandlerStyles.button}>
        -
      </button>
      <p className="font-bold">{cartItem ? cartItem.quantity : 0}</p>
      <button
        onClick={() => dispatch(addItemToCart(product))}
        className={CartHandlerStyles.button}>
        +
      </button> 
    </div>
  );
}
