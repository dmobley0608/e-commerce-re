import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../../store/slices/cartSlice";
import { CartHandlerStyles } from "./cartHandler.styles";
import { useGetProductByIdQuery } from "../../../store/slices/productsSlice";

export default function CartItemHandler({ product }) {
  const cartItem = useSelector(state => state.cart.items.filter(item => item.id === product.id)[0])
  const { data: stockProduct, isLoading } = useGetProductByIdQuery(product.id)
  const dispatch = useDispatch()



  return (
    <div className="flex w-[75px] justify-between">
      {isLoading ? "Checking Stock" :
        <>
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
        </>
      }
    </div>
  );
}
