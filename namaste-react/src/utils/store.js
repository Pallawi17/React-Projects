import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer:{
    cart: cartSlice,
  }
});

export default store;


/**
 * 1. Create store using `configureStore()` imported from rtk
 * 2. Provide my store to the app
 *    <Provide store={storeName}/> - imported from react-redux
 * 3. Create slice using `createSlice` imported from rtk
 *    createSlice({
 *        name: "",
 *        initialState:"",
 *        reducers: {
 *          addItem: (state, action) => {state = action.payload}
 *        }
 *      })
 * 4. export {addItem} = createSlice.actions
 * 5. export default createSlice.reducer
 * 6. put that slice into the store
 * configureStore({
 *  reducer: {
 *  cart: cartSlice
 * ......
 *  }
 * })
 * 
 * 
 */