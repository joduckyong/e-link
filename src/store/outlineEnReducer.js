import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookieToken } from '../storage/Cookie';

export const selectOutline = createAsyncThunk('EN_LIST_OUTLINE', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.get(`${process.env.REACT_APP_API_URL}/en/api/company/outline`, config);
  return response.data;
});

export const insertOutline = createAsyncThunk('EN_ADD_OUTLINE', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/en/api/company/outline`,
    method: 'POST',
    data: newList,
    headers: {
      Authorization: token,
    },
  });
  return response.data;
});

export const updateOutline = createAsyncThunk('EN_MOD_OUTLINE', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/en/api/company/outline/update`,
    method: 'POST',
    data: newList,
    headers: {
      Authorization: token,
    },
  });

  return response.data;
});

export const deleteOutlineIds = createAsyncThunk('EN_DEL_OUTLINE_IDS', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const response = await axios.delete(`${process.env.REACT_APP_API_URL}/en/api/company/outline`, {
    headers: {
      Authorization: token,
    },
    data: newList,
  });
  return response.data;
});

export const selectClientOutline = createAsyncThunk('EN_CLIENT_LIST_OUTLINE', async (newList) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/en/api/client/company/outline`);
  return response.data;
});

export const outlineEnReducer = createSlice({
  name: 'outline',
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
    [selectOutline.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      totalCount: payload.totalCount,
      data: payload.data,
    }),
    [insertOutline.fulfilled]: (state, { payload }) => ({
      ...state,
      dataInfo: payload.data,
    }),
    [updateOutline.fulfilled]: (state, { payload }) => ({
      ...state,
      dataInfo: payload.data,
    }),
    [deleteOutlineIds.fulfilled]: (state, { payload }) => ({
      ...state,
    }),
    [selectClientOutline.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      totalCount: payload.totalCount,
      data: payload.data,
    }),
  },
});
