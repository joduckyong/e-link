import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookieToken } from '../storage/Cookie';

export const selectPopup = createAsyncThunk('EN_LIST_POPUP', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  let param = `${newList.popupId}/${newList.pageIndex}`;

  const response = await axios.get(`${process.env.REACT_APP_API_URL}/en/api/popup/${param}`, config);
  return response.data;
});

export const selectPopupInfo = createAsyncThunk('EN_INFO_POPUP', async (id) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.get(`${process.env.REACT_APP_API_URL}/en/api/popup/${id}`, config);
  return response.data;
});

export const insertPopup = createAsyncThunk('EN_ADD_POPUP', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const formData = new FormData();
  formData.append('thumbnail', newList.thumbnail);
  formData.append('file', newList.file);
  formData.append(
    'popupVo',
    new Blob([JSON.stringify(newList)], {
      type: 'application/json',
    }),
  );

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/en/api/popup/`,
    method: 'POST',
    data: formData,
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
});

export const updatePopup = createAsyncThunk('EN_MOD_POPUP', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const formData = new FormData();
  formData.append('thumbnail', newList.thumbnail);
  formData.append('file', newList.file);
  formData.append(
    'popupVo',
    new Blob([JSON.stringify(newList)], {
      type: 'application/json',
    }),
  );

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/en/api/popup/update`,
    method: 'POST',
    data: formData,
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
});

export const deletePopup = createAsyncThunk('EN_DEL_POPUP', async (id) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.delete(`${process.env.REACT_APP_API_URL}/en/api/popup/${id}`, config);
  return response.data;
});

export const deletePopupIds = createAsyncThunk('EN_DEL_POPUP_IDS', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const response = await axios.delete(`${process.env.REACT_APP_API_URL}/en/api/popup/`, {
    headers: {
      Authorization: token,
    },
    data: newList,
  });
  return response.data;
});

export const selectClientPopup = createAsyncThunk('EN_CLIENT_LIST_POPUP', async (newList) => {
  let param = `${newList.popupId}/${newList.pageIndex}`;
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/en/api/client/popup/${param}/now`);
  return response.data;
});

export const selectClientPopupInfo = createAsyncThunk('EN_CLIENT_INFO_POPUP', async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/en/api/client/popup/${id}`);
  return response.data;
});

export const popupEnReducer = createSlice({
  name: 'popup',
  initialState: {
    status: null,
    message: null,
    totalCount: null,
    data: [],
    dataInfo: {},
    files: [],
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
      files: payload.files,
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

    [selectClientPopup.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      totalCount: payload.totalCount,
      data: payload.data,
    }),
    [selectClientPopupInfo.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      dataInfo: payload.data,
      files: payload.files,
    }),
  },
});
