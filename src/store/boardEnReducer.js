import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookieToken } from '../storage/Cookie';

export const selectBoard = createAsyncThunk('EN_LIST_BOARD', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
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

  const response = await axios.get(`${process.env.REACT_APP_API_URL}/en/api/board/${param}`, config);
  return response.data;
});

export const selectBoardInfo = createAsyncThunk('EN_INFO_BOARD', async (id) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.get(`${process.env.REACT_APP_API_URL}/en/api/board/${id}`, config);
  return response.data;
});

export const insertBoard = createAsyncThunk('EN_ADD_BOARD', async (newList) => {
  const token = getCookieToken();

  console.log(newList);
  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const formData = new FormData();
  formData.append('thumbnail', newList.thumbnail);
  formData.append('file', newList.file);

  if (newList.files) {
    for (let i = 0; i < newList.files.length; i++) {
      formData.append('files', newList.files[i]);
    }
  }

  formData.append(
    'boardVo',
    new Blob([JSON.stringify(newList)], {
      type: 'application/json',
    }),
  );

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/en/api/board/`,
    method: 'POST',
    data: formData,
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
});

export const updateBoard = createAsyncThunk('EN_MOD_BOARD', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const formData = new FormData();
  formData.append('thumbnail', newList.thumbnail);
  formData.append('file', newList.file);

  if (newList.files) {
    for (let i = 0; i < newList.files.length; i++) {
      formData.append('files', newList.files[i]);
    }
  }

  formData.append(
    'boardVo',
    new Blob([JSON.stringify(newList)], {
      type: 'application/json',
    }),
  );

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/en/api/board/update`,
    method: 'POST',
    data: formData,
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
});

export const selectPinupId = createAsyncThunk('EN_INFO_PINUP', async () => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.get(`${process.env.REACT_APP_API_URL}/en/api/board/pinup`, config);
  return response.data;
});

export const updatePinupId = createAsyncThunk('EN_MOD_PINUP', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const response = await axios({
    url: `${process.env.REACT_APP_API_URL}/en/api/board/update/pinup`,
    method: 'POST',
    data: newList,
    headers: {
      Authorization: token,
    },
  });

  return response.data;
});

export const deleteBoard = createAsyncThunk('EN_DEL_BOARD', async (id) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.delete(`${process.env.REACT_APP_API_URL}/en/api/board/${id}`, config);
  return response.data;
});

export const deleteBoardIds = createAsyncThunk('EN_DEL_BOARD_IDS', async (newList) => {
  const token = getCookieToken();

  if (token === undefined && typeof token === 'undefined') {
    document.location.href = process.env.REACT_APP_ADMIN_LOGIN;
  }

  const response = await axios.delete(`${process.env.REACT_APP_API_URL}/en/api/board/`, {
    headers: {
      Authorization: token,
    },
    data: newList,
  });
  return response.data;
});

export const selectClientBoard = createAsyncThunk('EN_CLIENT_LIST_BOARD', async (newList) => {
  let param = `${newList.boardId}/${newList.pageIndex}`;
  let keyWord = newList.searchKeyword;
  let condition = newList.searchCondition;
  let boardType = newList.boardType;
  if (keyWord) {
    param += `/${keyWord}`;
    if (condition) {
      param += `/${condition}`;
    }
  }
  if (!boardType) {
    boardType = '';
  }

  const response = await axios.get(`${process.env.REACT_APP_API_URL}/en/api/client/board/${param}?boardType=${boardType}`);
  return response.data;
});

export const selectClientBoardInfo = createAsyncThunk('EN_CLIENT_INFO_BOARD', async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/en/api/client/board/${id}`);
  return response.data;
});

export const selectClientBoardInfoWithPinup = createAsyncThunk('EN_CLIENT_INFO_BOARD_WITH_PINUP', async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/en/api/client/board/WithPinup`);
  return response.data;
});

export const boardEnReducer = createSlice({
  name: 'board',
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
    [selectPinupId.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      pinupData: payload.pinupData,
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
    [selectClientBoard.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      totalCount: payload.totalCount,
      data: payload.data,
    }),
    [selectClientBoardInfo.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      dataInfo: payload.data,
      files: payload.files,
      prevNextData: payload.prevNextData,
    }),
    [selectClientBoardInfoWithPinup.fulfilled]: (state, { payload }) => ({
      ...state,
      status: payload.status,
      message: payload.message,
      dataInfo: payload.data,
    }),
  },
});
