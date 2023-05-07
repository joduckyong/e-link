import { createSlice } from '@reduxjs/toolkit';

export const TOKEN_TIME_OUT = 86400000;

export const evTokenSlice = createSlice({
  name: 'evAuthToken',
  initialState: {
    authenticated: false,
    accessToken: null,
    expireTime: null,
  },
  reducers: {
    SET_EV_TOKEN: (state, action) => {
      state.authenticated = true;
      state.accessToken = action.payload;
      state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
    },
    DELETE_EV_TOKEN: (state) => {
      state.authenticated = false;
      state.accessToken = null;
      state.expireTime = null;
    },
  },
});

export const { SET_EV_TOKEN, DELETE_EV_TOKEN } = evTokenSlice.actions;

export default evTokenSlice.reducer;
