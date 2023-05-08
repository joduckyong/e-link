import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import tokenReducer from './Auth';
import evTokenReducer from './EvAuth';
import { popupReducer } from './popupReducer';
import { popupEnReducer } from './popupEnReducer';
import { boardReducer } from './boardReducer';
import { boardEnReducer } from './boardEnReducer';
import { contactUsReducer } from './contactUsReducer';
import { contactUsEnReducer } from './contactUsEnReducer';
import { managerReducer } from './managerReducer';
import { outlineReducer } from './outlineReducer';
import { outlineEnReducer } from './outlineEnReducer';
import { EvReducer } from './EvReducer';
import logger from 'redux-logger';

const reducer = combineReducers({
  authToken: tokenReducer,
  evAuthToken: evTokenReducer,
  popupReducer: popupReducer.reducer,
  popupEnReducer: popupEnReducer.reducer,
  boardReducer: boardReducer.reducer,
  boardEnReducer: boardEnReducer.reducer,
  contactUsReducer: contactUsReducer.reducer,
  contactUsEnReducer: contactUsEnReducer.reducer,
  managerReducer: managerReducer.reducer,
  outlineReducer: outlineReducer.reducer,
  outlineEnReducer: outlineEnReducer.reducer,
  EvReducer: EvReducer.reducer,
});

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
