import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items:[]
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});
/**
 * Under the hood redux maintains these structure
 * cardSlice = {
 * reducer: reducers
 * actions: {
 * addItem,
 * removeItmem,
 * clearCart}
 * }
 */

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;