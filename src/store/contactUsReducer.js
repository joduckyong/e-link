import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookieToken } from '../storage/Cookie';

export const selectContactUs = createAsyncThunk('LIST_CONTACTUS', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  let param = `${newList.contactId}/${newList.contactType}/${newList.pageIndex}`;
  let keyWord = newList.searchKeyword;
  let condition = newList.searchCondition;
  if (keyWord) {
    param += `/${keyWord}`;
    if (condition) {
      param += `/${condition}`;
    }
  }

  const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contactUs/${param}`, config);
  return response.data;
});

export const selectContactUsInfo = createAsyncThunk('INFO_CONTACTUS', async (id) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contactUs/${id}`, config);
  return response.data;
});

export const insertContactUs = createAsyncThunk('CLIENT_ADD_CONTACTUS', async (newList) => {
  const formData = new FormData();
  formData.append('file', newList.file);
  formData.append(
    'contactUsVo',
    new Blob([JSON.stringify(newList)], {
      type: 'application/json',
    }),
  );

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/api/client/contactUs/`,
    method: 'POST',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
});

export const updateContactUsIds = createAsyncThunk('MOD_CONTACTUS_IDS', async (newList) => {
  const token = getCookieToken();
  console.log('token : ' + token);

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/api/contactUs/`,
    method: 'POST',
    data: newList,
    headers: {
      Authorization: token,
    },
  });

  return response.data;
});

export const deleteContactUsIds = createAsyncThunk('DEL_CONTACTUS_IDS', async (newList) => {
  const token = getCookieToken();
  console.log('token : ' + token);

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/contactUs/`, {
    headers: {
      Authorization: token,
    },
    data: newList,
  });
  return response.data;
});

export const contactUsReducer = createSlice({
  name: 'contactUs',
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
    [selectContactUs.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      totalCount: payload.totalCount,
      data: payload.data,
    }),
    [selectContactUsInfo.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      dataInfo: payload.data,
      files: payload.files,
    }),
    [insertContactUs.fulfilled]: (state, { payload }) => ({
      ...state,
      dataInfo: payload.data,
    }),
    [updateContactUsIds.fulfilled]: (state, { payload }) => ({
      ...state,
      payload,
    }),
    [deleteContactUsIds.fulfilled]: (state, { payload }) => ({
      ...state,
    }),
  },
});
