import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { serverUrl } from './serverUrl';

export const selectBoard = createAsyncThunk('LIST_BOARD', async (newList) => {
  let keyWord = newList.searchKeyword;
  if (keyWord === '') {
    keyWord = null;
  }
  const response = await axios.get(`${serverUrl}/api/board/${newList.boardId}/${newList.pageIndex}/${keyWord}`);
  return response.data;
});

export const selectBoardInfo = createAsyncThunk('INFO_BOARD', async (id) => {
  const response = await axios.get(`${serverUrl}/api/board/${id}`);
  return response.data;
});

export const insertBoard = createAsyncThunk('ADD_BOARD', async (newList) => {
  const response = await axios.post(`${serverUrl}/api/board`, newList);
  return response.data;
});

export const updateBoard = createAsyncThunk('MOD_BOARD', async (newList) => {
  const response = await axios.put(`${serverUrl}/api/board/`, newList);
  return response.data;
});

export const deleteBoard = createAsyncThunk('DEL_BOARD', async (id) => {
  const response = await axios.delete(`${serverUrl}/api/board/${id}`);
  return response.data;
});

export const boardReducer = createSlice({
  name: 'board',
  initialState: [],
  reducers: {},
  extraReducers: {
    [selectBoard.fulfilled]: (state, { payload }) => [...payload],
    [selectBoardInfo.fulfilled]: (state, { payload }) => [state, payload],
    [insertBoard.fulfilled]: (state, { payload }) => [...state, payload],
    [updateBoard.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteBoard.fulfilled]: (state, { payload }) => state.filter((list) => list.id !== payload),
  },
});
