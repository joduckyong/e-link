import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { serverUrl } from './serverUrl';

export const selectBoard = createAsyncThunk('LIST_BOARD', async (id, pageIndex) => {
  const response = await axios.get(`${serverUrl}/api/board/${id}/1`);
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
    [selectBoardInfo.fulfilled]: (state, { payload }) => [...payload],
    [insertBoard.fulfilled]: (state, { payload }) => [...state, payload],
    [updateBoard.fulfilled]: (state, { payload }) => {
      return state.map((list) => {
        if (list.id === payload.listId) {
          return { ...list };
        } else {
          return list;
        }
      });
    },
    [deleteBoard.fulfilled]: (state, { payload }) => state.filter((list) => list.id !== payload),
  },
});
