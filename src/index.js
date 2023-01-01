import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import { CookiesProvider } from 'react-cookie';
import store from './store/index';
import './styles/layout.css';
import './styles/layout_1440.css';
import './styles/layout_780.css';
import './styles/paging.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <CookiesProvider>
  <Provider store={store}>
    <App />
  </Provider>,
  // </CookiesProvider>,
);

reportWebVitals();
