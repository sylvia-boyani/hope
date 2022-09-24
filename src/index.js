import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Route, } from 'react-router-dom';
// import nairobi from './components/pages/nairobi'
// import kilifi from './components/pages/kilifi'
// import mombasa from './components/pages/mombasa'
// import header from './components/Header/header.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
   
   //  <BrowserRouter>  
   //      <Route exact path="/" component={header} />
   //      <Route path="/page2" component={kilifi} />
   //      <Route path="/page2" component={nairobi} />
   //      <Route path="/page2" component={mombasa} />
      
   //     </BrowserRouter>,
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
