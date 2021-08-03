import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProductsContextProvider from './context/product-context';
import CartConextProvider from './context/cart-conrext';

ReactDOM.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <CartConextProvider>
        <App />
      </CartConextProvider>
    </ProductsContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
