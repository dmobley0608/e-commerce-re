import { createSlice } from "@reduxjs/toolkit/dist";


const cartSlice = createSlice({
    "name": "cart",
    initialState: { items: [], totalCost: (0).toFixed(2), totalItems: 0 },
    reducers: {
        addItemToCart: (state, { payload }) => {
            if (payload.quantity === 0) return
            const cartItem = state.items.find(product => product.id === payload.id)
            if (cartItem && payload.quantity > cartItem.quantity) {
                let index = state.items.indexOf(cartItem)
                cartItem.quantity += 1;
                state.items[index] = cartItem

            } else if (!cartItem) {
                state.items.push({ ...payload, quantity: 1 })
            }
            state.totalCost = state.items.reduce((accum, product) => accum + (product.price * product.quantity), 0).toFixed(2)
            state.totalItems = state.items.reduce((accum, product) => accum + (product.quantity), 0)
        },
        removeItemFromCart: (state, { payload }) => {
            const cartItem = state.items.find(product => product.id === payload.id)

            if (cartItem && cartItem.quantity > 0) {
                cartItem.quantity -= 1
                if (cartItem.quantity === 0) {
                    state.items = state.items.filter(product => product.id !== cartItem.id)
                }

            }
            state.totalCost = state.items.reduce((accum, product) => accum + (product.price * product.quantity), 0).toFixed(2)
            state.totalItems = state.items.reduce((accum, product) => accum + (product.quantity), 0)
        }
    }
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer