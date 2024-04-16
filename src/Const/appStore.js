import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer : {
        Cart : cartReducer,
    },

})

export default appStore;