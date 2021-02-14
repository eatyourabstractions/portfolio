import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
// import './index.css';
// import App from './App';
import TwitterClone from './apps/TwitterClone/src/TwitterClone'
import Main from './components/Main';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// TODO 1: Make the main component which will contain the react-Router
// TODO (1 CONT): and make the twitter clone function with child routes