import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      //chaniging the statte
    },

    removeItem: (state, action) => {
      state.items.pop();
    },
    clearItem: (state, action) => {
      state.items.length = 0;
    //   console.log("cart cleared");
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
