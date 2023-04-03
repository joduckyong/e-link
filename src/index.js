import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index';
import './styles/layout.css';
import './styles/ev.css';
import './styles/layout_1440.css';
import './styles/layout_780.css';
import './styles/paging.css';
import './styles/custom.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
