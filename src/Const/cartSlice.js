import { createSlice } from "@reduxjs/toolkit";
const initialCartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items:  initialCartItems,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      //chaniging the statte
    },

    removeItem: (state, action) => {
     
      state.items = state.items.filter(cartItem => {
 
        return cartItem.card.info.id !== action.payload.items.card.info.id;
      });
     
     
    },
    
    
  
    clearItem: (state, action) => {
      state.items.length = [];
    //   console.log("cart cleared");
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
