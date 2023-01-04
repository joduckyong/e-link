import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { serverUrl } from './serverUrl';
import { getCookieToken } from '../storage/Cookie';

const loginUrl = '/admin/login';
export const selectContactUs = createAsyncThunk('LIST_CONTACTUS', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = loginUrl;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  let param = `${newList.boardId}/${newList.pageIndex}`;
  let keyWord = newList.searchKeyword;
  let condition = newList.searchCondition;
  if (keyWord) {
    param += `/${keyWord}`;
    if (condition) {
      param += `/${condition}`;
    }
  }

  const response = await axios.get(`${serverUrl}/api/contactUs/${param}`, config);
  return response.data;
});

export const selectContactUsInfo = createAsyncThunk('INFO_CONTACTUS', async (id) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = loginUrl;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.get(`${serverUrl}/api/contactUs/${id}`, config);
  return response.data;
});

export const insertContactUs = createAsyncThunk('ADD_CONTACTUS', async (newList) => {
  // const token = getCookieToken();

  // if (token === undefined && typeof token === 'undefined') {
  //   document.location.href = loginUrl;
  // }

  const formData = new FormData();
  formData.append('file', newList.file);
  formData.append(
    'contactUsVo',
    new Blob([JSON.stringify(newList)], {
      type: 'application/json',
    }),
  );

  const response = await axios({
    url: `${serverUrl}/api/client/contactUs/`,
    method: 'POST',
    data: formData,
    headers: {
      // Authorization: token,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
});


export const deleteContactUsIds = createAsyncThunk('DEL_CONTACTUS_IDS', async (newList) => {
  const token = getCookieToken();
  console.log('token : ' + token);

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = loginUrl;
  }

  const response = await axios.delete(`${serverUrl}/api/contactUs/`, {
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
    [deleteContactUsIds.fulfilled]: (state, { payload }) => ({
      ...state,
    }),
  },
});
