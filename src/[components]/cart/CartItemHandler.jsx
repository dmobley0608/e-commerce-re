import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../[store]/slices/cartSlice";

export default function CartItemHandler({product}) {  
    const cartItem = useSelector(state=>state.cart.items.filter(item=> item.id === product.id)[0]) 
  
    const dispatch = useDispatch()



  return (
    <div className="flex">
      <button
        onClick={() => dispatch(removeItemFromCart(product))}
        className="flex bg-slate-50  w-5 h-5 items-center justify-center rounded text-xl hover:-translate-y-0.5 hover:shadow-md shadow-black">
        -
      </button>
      <p className="font-bold">{cartItem ? cartItem.quantity : 0}</p>
      <button
        onClick={() => dispatch(addItemToCart(product))}
        className="flex bg-slate-50  w-5 h-5 items-center justify-center rounded text-xl hover:-translate-y-0.5 hover:shadow-md shadow-black">
        +
      </button>
    </div>
  );
}
