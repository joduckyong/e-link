import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { serverUrl } from './serverUrl';
import { getCookieToken } from '../storage/Cookie';

const loginUrl = '/admin/login';
export const selectBoard = createAsyncThunk('LIST_BOARD', async (newList) => {
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

  const response = await axios.get(`${serverUrl}/api/board/${param}`, config);
  return response.data;
});

export const selectBoardInfo = createAsyncThunk('INFO_BOARD', async (id) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = loginUrl;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.get(`${serverUrl}/api/board/${id}`, config);
  return response.data;
});

export const insertBoard = createAsyncThunk('ADD_BOARD', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = loginUrl;
  }

  const formData = new FormData();
  formData.append('thumbnail', newList.thumbnail);
  formData.append('file', newList.file);
  
  if(newList.files){
    for (let i = 0; i < newList.files.length; i++) { 
      formData.append("files", newList.files[i]);
    }
  }

  formData.append(
    'boardVo',
    new Blob([JSON.stringify(newList)], {
      type: 'application/json',
    }),
  );

  const response = await axios({
    url: `${serverUrl}/api/board/`,
    method: 'POST',
    data: formData,
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
});

export const updateBoard = createAsyncThunk('MOD_BOARD', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = loginUrl;
  }

  const formData = new FormData();
  formData.append('thumbnail', newList.thumbnail);
  formData.append('file', newList.file);

  if(newList.files){
    for (let i = 0; i < newList.files.length; i++) { 
      formData.append("files", newList.files[i]);
    }
  }
  
  formData.append(
    'boardVo',
    new Blob([JSON.stringify(newList)], {
      type: 'application/json',
    }),
  );

  const response = await axios({
    url: `${serverUrl}/api/board/update`,
    method: 'POST',
    data: formData,
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
});

export const deleteBoard = createAsyncThunk('DEL_BOARD', async (id) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = loginUrl;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.delete(`${serverUrl}/api/board/${id}`, config);
  return response.data;
});

export const deleteBoardIds = createAsyncThunk('DEL_BOARD_IDS', async (newList) => {
  const token = getCookieToken();
  console.log('token : ' + token);

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = loginUrl;
  }

  const response = await axios.delete(`${serverUrl}/api/board/`, {
    headers: {
      Authorization: token,
    },
    data: newList,
  });
  return response.data;
});

export const boardReducer = createSlice({
  name: 'board',
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
    [selectBoard.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      totalCount: payload.totalCount,
      data: payload.data,
    }),
    [selectBoardInfo.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      dataInfo: payload.data,
      files: payload.files,
    }),
    [insertBoard.fulfilled]: (state, { payload }) => ({
      ...state,
      dataInfo: payload.data,
    }),
    [updateBoard.fulfilled]: (state, { payload }) => ({
      ...state,
      dataInfo: payload.data,
    }),
    [deleteBoard.fulfilled]: (state, { payload }) => ({
      ...state,
    }),
    [deleteBoardIds.fulfilled]: (state, { payload }) => ({
      ...state,
    }),
  },
});
