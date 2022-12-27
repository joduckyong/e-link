import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { popupReducer } from './popupReducer';
import { boardReducer } from './boardReducer';
import logger from 'redux-logger';

const reducer = combineReducers({ popupReducer: popupReducer.reducer, boardReducer: boardReducer.reducer });

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
