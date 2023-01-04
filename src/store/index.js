import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import tokenReducer from './Auth';
import { popupReducer } from './popupReducer';
import { boardReducer } from './boardReducer';
import { contactUsReducer } from './contactUsReducer';
import logger from 'redux-logger';

const reducer = combineReducers({ authToken: tokenReducer, popupReducer: popupReducer.reducer, boardReducer: boardReducer.reducer, contactUsReducer: contactUsReducer.reducer });

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
