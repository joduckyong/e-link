import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { serverUrl } from './serverUrl';
import { getCookieToken } from '../storage/Cookie';

const loginUrl = '/admin/login';
export const selectBoard = createAsyncThunk('LIST_BOARD', async (newList) => {
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

  let keyWord = newList.searchKeyword;
  if (!keyWord) {
    keyWord = '';
  }

  const response = await axios.get(`${serverUrl}/api/board/${newList.boardId}/${newList.pageIndex}/${keyWord}`, config);
  return response.data;
});

export const selectBoardInfo = createAsyncThunk('INFO_BOARD', async (id) => {
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

  const response = await axios.get(`${serverUrl}/api/board/${id}`, config);
  return response.data;
});

export const insertBoard = createAsyncThunk('ADD_BOARD', async (newList) => {
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

  const response = await axios.post(`${serverUrl}/api/board`, newList, config);
  return response.data;
});

export const updateBoard = createAsyncThunk('MOD_BOARD', async (newList) => {
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

  const response = await axios.put(`${serverUrl}/api/board/`, newList, config);
  return response.data;
});

export const deleteBoard = createAsyncThunk('DEL_BOARD', async (id) => {
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
    }),
    [insertBoard.fulfilled]: (state, { payload }) => ({
      ...state,
      dataInfo: payload.data,
    }),
    [updateBoard.fulfilled]: (state, { payload }) => ({
      ...state,
      payload,
    }),
    [deleteBoard.fulfilled]: (state, { payload }) => ({
      ...state,
    }),
    [deleteBoardIds.fulfilled]: (state, { payload }) => ({
      ...state,
    }),
  },
});
