import { createSlice } from "@reduxjs/toolkit";



const navSlice = createSlice({
    name:"nav",
    initialState:{showMobileNav:false},
    reducers:{
        toggleNav:(state=>{state.showMobileNav = !state.showMobileNav}),
        closeNav: (state=>{state.showMobileNav = false})
    }
})

export const {toggleNav, closeNav} = navSlice.actions
export default navSlice.reducer