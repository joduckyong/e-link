import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookieToken } from '../storage/Cookie';

export const selectManager = createAsyncThunk('LIST_MANAGER', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  let param = `list/${newList.pageIndex}`;

  const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/manager/${param}`, config);
  return response.data;
});

export const selectManagerInfo = createAsyncThunk('INFO_MANGER', async (id) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/manager/${id}`, config);
  return response.data;
});

export const insertManager = createAsyncThunk('ADD_MANAGER', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/api/manager/`,
    method: 'POST',
    data: newList,
    headers: {
      Authorization: token,
    },
  });
  return response.data;
});

export const updateManager = createAsyncThunk('MOD_MANAGER', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/api/manager/update`,
    method: 'POST',
    data: newList,
    headers: {
      Authorization: token,
    },
  });

  return response.data;
});

export const deleteManagerIds = createAsyncThunk('DEL_MANAGER_IDS', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/manager/`, {
    headers: {
      Authorization: token,
    },
    data: newList,
  });
  return response.data;
});

export const managerReducer = createSlice({
  name: 'manager',
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
    [selectManager.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      totalCount: payload.totalCount,
      data: payload.data,
    }),
    [selectManagerInfo.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      dataInfo: payload.data,
      files: payload.files,
    }),
    [insertManager.fulfilled]: (state, { payload }) => ({
      ...state,
      dataInfo: payload.data,
    }),
    [updateManager.fulfilled]: (state, { payload }) => ({
      ...state,
      dataInfo: payload.data,
    }),
    [deleteManagerIds.fulfilled]: (state, { payload }) => ({
      ...state,
    }),
  },
});
