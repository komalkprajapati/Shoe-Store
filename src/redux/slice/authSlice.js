import { createSlice } from '@reduxjs/toolkit';
import { userdata } from '../../user';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users:userdata, // List of registered users
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find((user) => user.username === username  && user.password === password);
      if (user) {
        state.isAuthenticated = true;
      } else {
        throw new Error('Invalid email or password');
      }
    },
    
  },
});

export const {login } = authSlice.actions;
export default authSlice.reducer;
