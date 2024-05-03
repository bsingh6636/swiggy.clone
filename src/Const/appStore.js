import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import  userReducer from "./UserSlice"

const appStore = configureStore({
    reducer : {
        Cart : cartReducer,
        User : userReducer,
    },

})

export default appStore;