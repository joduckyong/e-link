import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookieEvToken } from '../storage/EvCookie';

export const selectEv = createAsyncThunk('LIST_EV', async (newList) => {
  const token = getCookieEvToken();

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/api/ev/common`,
    method: 'POST',
    data: newList,
    headers: {
      accessEvToken: token,
    },
  });
  return response.data;
});

export const insertEv = createAsyncThunk('ADD_EV', async (newList) => {
  const token = getCookieEvToken();

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/api/ev/common/insert`,
    method: 'POST',
    data: newList,
    headers: {
      accessEvToken: token,
    },
  });
  return response.data;
});

export const EvReducer = createSlice({
  name: 'ev',
  initialState: {
    status: null,
    message: null,
    totalCount: null,
    data: [],
    dataInfo: {},
    files: [],
    prevNextData: {},
  },
  reducers: {},
  extraReducers: {
    [selectEv.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      totalCount: payload.totalCount,
      data: payload.data,
    }),
    [insertEv.fulfilled]: (state, { payload }) => ({
      ...state,
      dataInfo: payload.data,
    }),
  },
});
