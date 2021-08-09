import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.css';
import OrderList from './components/OrderList';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <OrderList />
  </React.StrictMode>,
  document.getElementById('root')
);


