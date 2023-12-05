import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// npm i redux react-redux react-router-dom axios
// npm i redux-thunk redux-logger

// router
import { BrowserRouter } from 'react-router-dom'

// store
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux'
import rootStore from '@stores';
const store = createStore(rootStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
