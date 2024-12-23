import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import authReducer from './slice/authSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth : authReducer,
  },
});

export default store;