import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    increment: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.totalPrice += item.price; 
      }
    },
    decrement: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        state.totalPrice -= item.price; 
      }
    },
    
    additem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice +=  existingItem.price;
      } else {
        state.items.push({ ...action.payload, quantity:1 });
        state.totalPrice += action.payload.price;
      }
    },
    removeitem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalPrice -= existingItem.price;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
          state.totalPrice -= existingItem.price;
        }
      }
    },


    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { additem, removeitem, clearCart, increment ,decrement } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export default cartSlice.reducer;
