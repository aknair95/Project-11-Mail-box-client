
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// bootstrap configuration
import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Provider } from 'react-redux';
import storeReducer from './store/reducerMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={storeReducer}>
      <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

