import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { serverUrl } from './serverUrl';

export const selectPopup = createAsyncThunk('LIST_POPUP', async (newList) => {
  let keyWord = newList.searchKeyword;
  if (keyWord === '') {
    keyWord = null;
  }
  const response = await axios.get(`${serverUrl}/api/popup/${newList.popupId}/${newList.pageIndex}`);
  return response.data;
});

export const selectPopupInfo = createAsyncThunk('INFO_POPUP', async (id) => {
  const response = await axios.get(`${serverUrl}/api/popup/${id}`);
  return response.data;
});

export const insertPopup = createAsyncThunk('ADD_POPUP', async (newList) => {
  const response = await axios.post(`${serverUrl}/api/popup`, newList);
  return response.data;
});

export const updatePopup = createAsyncThunk('MOD_POPUP', async (newList) => {
  const response = await axios.put(`${serverUrl}/api/popup/`, newList);
  return response.data;
});

export const deletePopup = createAsyncThunk('DEL_POPUP', async (id) => {
  const response = await axios.delete(`${serverUrl}/api/popup/${id}`);
  return response.data;
});

export const popupReducer = createSlice({
  name: 'popup',
  initialState: [],
  reducers: {},
  extraReducers: {
    [selectPopup.fulfilled]: (state, { payload }) => [...payload],
    [selectPopupInfo.fulfilled]: (state, { payload }) => [state, payload],
    [insertPopup.fulfilled]: (state, { payload }) => [...state, payload],
    [updatePopup.fulfilled]: (state, { payload }) => [...state, payload],
    [deletePopup.fulfilled]: (state, { payload }) => state.filter((list) => list.id !== payload),
  },
});
