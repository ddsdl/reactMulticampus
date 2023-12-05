import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux setting
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux';

// root store
// import rootStore from '@stores/countStore'
import rootStore from '@stores'
const store = createStore(rootStore);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
