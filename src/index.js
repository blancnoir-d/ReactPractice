import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //./App은 App.js를 의미함
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom' //라우터 사용

const root = ReactDOM.createRoot(document.getElementById('root')); //index.html에 있는 <div id="root"></div> 이 부분을 가져온 것
root.render(
    //이 부분이 <div id="root">요사이</div>를 의미하는데 <App />이 App.js이다
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
