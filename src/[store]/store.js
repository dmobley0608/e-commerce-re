import {  configureStore } from "@reduxjs/toolkit";
import navReducer from './slices/navigationSlice'
import { productsApi } from "./slices/productsSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartReducer from './slices/cartSlice'


const store = configureStore({
    reducer: {
        nav: navReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer
    } ,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(productsApi.middleware)
})

setupListeners(store.dispatch)

export default store;