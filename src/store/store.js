import { configureStore } from "@reduxjs/toolkit";
import navReducer from './navigationSlice'

const store = configureStore({
    reducer:{
        nav:navReducer
    }
})

export default store;