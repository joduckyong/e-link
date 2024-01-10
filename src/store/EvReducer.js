import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookieEvToken, getCookieEvUserNo } from '../storage/EvCookie';

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

export const updateEv = createAsyncThunk('Mod_EV', async (newList) => {
  const token = getCookieEvToken();

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/api/ev/common/update`,
    method: 'POST',
    data: newList,
    headers: {
      accessEvToken: token,
    },
  });
  return response.data;
});

export const deleteEv = createAsyncThunk('DELETE_EV', async (newList) => {
  const token = getCookieEvToken();

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/api/ev/common/delete`,
    method: 'POST',
    data: newList,
    headers: {
      accessEvToken: token,
    },
  });
  return response.data;
});

export const selectUserNo = createAsyncThunk('USER_EV', async (newList) => {
  const evUserNo = getCookieEvUserNo();

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/api/ev/common/decrypt`,
    method: 'POST',
    data: {userNo: evUserNo},
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
    userNo: {},
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
    [updateEv.fulfilled]: (state, { payload }) => ({
      ...state,
      dataInfo: payload.data,
    }),
    [deleteEv.fulfilled]: (state, { payload }) => ({
      ...state,
    }),
    [selectUserNo.fulfilled]: (state, { payload }) => ({
      ...state,
      userNo: payload.data,
    }),
  },
});
