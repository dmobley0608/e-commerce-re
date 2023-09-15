import {  configureStore } from "@reduxjs/toolkit";
import navReducer from './navigationSlice'
import { productsApi } from "./productsSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";



const store = configureStore({
    reducer: {
        nav: navReducer,
        [productsApi.reducerPath]: productsApi.reducer
    } ,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(productsApi.middleware)
})

setupListeners(store.dispatch)

export default store;