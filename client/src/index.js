import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductsPage from './page-components/ProductsPage/ProductsPage';
import HomePage from './page-components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/products' component={ProductsPage} />
    <Route path='/' component={NavBar} />
    <Route path='/' component={Footer} />
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
