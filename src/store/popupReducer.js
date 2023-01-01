import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { serverUrl } from './serverUrl';
import { getCookieToken } from '../storage/Cookie';

const loginUrl = '/admin/login';
export const selectPopup = createAsyncThunk('LIST_POPUP', async (newList) => {
  const token = getCookieToken();
  console.log('token : ' + token);

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = loginUrl;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.get(`${serverUrl}/api/popup/${newList.popupId}/${newList.pageIndex}`, config);
  return response.data;
});

export const selectPopupInfo = createAsyncThunk('INFO_POPUP', async (id) => {
  const token = getCookieToken();
  console.log('token : ' + token);

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = loginUrl;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.get(`${serverUrl}/api/popup/${id}`, config);
  return response.data;
});

export const insertPopup = createAsyncThunk('ADD_POPUP', async (newList) => {
  const token = getCookieToken();
  console.log('token : ' + token);

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = loginUrl;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.post(`${serverUrl}/api/popup`, newList, config);
  return response.data;
});

export const updatePopup = createAsyncThunk('MOD_POPUP', async (newList) => {
  const token = getCookieToken();
  console.log('token : ' + token);

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = loginUrl;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.put(`${serverUrl}/api/popup/`, newList, config);
  return response.data;
});

export const deletePopup = createAsyncThunk('DEL_POPUP', async (id) => {
  const token = getCookieToken();
  console.log('token : ' + token);

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = loginUrl;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.delete(`${serverUrl}/api/popup/${id}`, config);
  return response.data;
});

export const deletePopupIds = createAsyncThunk('DEL_POPUP_IDS', async (newList) => {
  const token = getCookieToken();
  console.log('token : ' + token);

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = loginUrl;
  }

  const response = await axios.delete(`${serverUrl}/api/popup/`, {
    headers: {
      Authorization: token,
    },
    data: newList,
  });
  return response.data;
});

export const popupReducer = createSlice({
  name: 'popup',
  initialState: {
    status: null,
    message: null,
    totalCount: null,
    data: [],
    dataInfo: {},
  },
  reducers: {},
  extraReducers: {
    [selectPopup.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      totalCount: payload.totalCount,
      data: payload.data,
    }),
    [selectPopupInfo.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      dataInfo: payload.data,
    }),
    [insertPopup.fulfilled]: (state, { payload }) => ({
      ...state,
      dataInfo: payload.data,
    }),
    [updatePopup.fulfilled]: (state, { payload }) => ({
      ...state,
      payload,
    }),
    [deletePopup.fulfilled]: (state, { payload }) => ({
      ...state,
    }),
    [deletePopupIds.fulfilled]: (state, { payload }) => ({
      ...state,
    }),
  },
});
