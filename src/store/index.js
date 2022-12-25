import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { boardReducer } from './boardReducer';
import logger from 'redux-logger';

const reducer = combineReducers({ boardReducer: boardReducer.reducer });

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
