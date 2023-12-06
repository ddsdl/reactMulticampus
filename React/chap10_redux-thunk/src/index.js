import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// npm i redux@4 react-redux@8  axios react-router-dom 
// npm i redux-thunk@2 redux-logger

// router
import { BrowserRouter } from 'react-router-dom'

// store
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootStore from '@stores';

// middleware
import logger from './middleware/logger'
import loggerTwo from './middleware/loggerTwo'
import reduxThunk from 'redux-thunk'

const store = createStore(
  rootStore,
  applyMiddleware(logger, loggerTwo, reduxThunk)
);

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
