import { createSlice } from "@reduxjs/toolkit";
const initialCartItems = JSON.parse(localStorage.getItem("cart")) || [];
// const initialCartItems = [] 
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
      console.log("after")
  
      console.log("state",state)
      console.log("state.itmes",state.items)
    },
    clearItem: (state, action) => {
      state.items.length = [];
      localStorage.setItem('cart', JSON.stringify([]));
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
