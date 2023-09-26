import {  configureStore } from "@reduxjs/toolkit";
import navReducer from './slices/navigationSlice'
import { productsApi } from "./slices/productsSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartReducer from './slices/cartSlice'
import { userApiSlice } from "./slices/userSlice";


const store = configureStore({
    reducer: {
        nav: navReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [userApiSlice.reducerPath]:userApiSlice.reducer
    } ,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare()
        .concat(productsApi.middleware)
        .concat(userApiSlice.middleware)
})

setupListeners(store.dispatch)

export default store;