import { createSlice } from "@reduxjs/toolkit/dist";


const cartSlice = createSlice({
    "name": "cart",
    initialState:{items:[], totalCost:0, totalItems:0},
    reducers:{
        addItemToCart:(state,{payload})=>{
            const cartItem = state.items.filter(product=>product.id === payload.id)[0]
            if(cartItem){
                let index =  state.items.indexOf(cartItem)
                cartItem.quantity += 1;
                state.items[index] = cartItem
               
            }else{
                state.items.push({...payload, quantity:1})
            }
            state.totalCost = state.items.reduce((accum,product)=> accum + (product.price * product.quantity), 0).toFixed(2)
            state.totalItems = state.items.reduce((accum, product)=>accum + (product.quantity),0)
        },
        removeItemFromCart:(state, {payload})=>{
            const cartItem = state.items.filter(product=>product.id === payload.id)[0]
            cartItem.quantity -= 1
            if(cartItem.quantity <= 0){
                state.items = state.items.filter(product=>product.id !== cartItem.id)
            }
            state.totalCost = state.items.reduce((accum,product)=> accum + (product.price * product.quantity), 0).toFixed(2)
            state.totalItems = state.items.reduce((accum, product)=>accum + (product.quantity),0)
        }
    }
})

export const {addItemToCart, removeItemFromCart} = cartSlice.actions

export default cartSlice.reducer