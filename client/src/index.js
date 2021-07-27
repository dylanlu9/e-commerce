import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductsPage from './page-components/ProductsPage';
import HomePage from './page-components/HomePage';
import ProductPage from './page-components/ProductPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route } from 'react-router-dom';
dotenv.config();

ReactDOM.render(
  <HashRouter>
    <Route path='/' component={NavBar} />
    <Route exact path='/' component={HomePage} />
    <Route exact path='/products' component={SearchBar} />
    <Route exact path='/products' component={ProductsPage} />
    <Route exact path='/product' component={ProductPage} />
    <Route path='/' component={Footer} />
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
