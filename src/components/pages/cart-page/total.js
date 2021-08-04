import React from 'react';
import { withRouter } from 'react-router-dom';
import './cart-page-style.scss';

const Total = ({ itemCount, total, history, clearCart }) => {
  return (
    <div className='total-container'>
      <div className='total'>
        <p>Total Items: {itemCount}</p>
        <p>Total : ${total}</p>
      </div>
      <div className='checkout'>
        <button
          className='button is-black'
          onClick={() => history.push('/checkout')}
        >
          Checkout
        </button>
        <button className='button is-white' onClick={() => clearCart()}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default withRouter(Total);
