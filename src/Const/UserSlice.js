import { createSlice } from "@reduxjs/toolkit";
const initialusernumber=localStorage.getItem("swiggyuser")
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: initialusernumber, // Change the initialState to an object with a user property
    // Other initial state properties if needed
  },
  reducers: {
    userSignin: (state, action) => {
      state.user = action.payload; // Update the user property with the payload
    },
    // Define other reducers if needed
  },
});

export const { userSignin } = userSlice.actions;
export default userSlice.reducer;
