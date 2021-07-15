import React from 'react';
import ShoppingCart from '../../assets/shopping-cart.png';
import './cart.styles.scss';

const CartIcon = () => {
  return (
    <div className='cart-container'>
      <img src={ShoppingCart} alt='shoppingcart' />
      <span className='cart-count'>5</span>
    </div>
  );
};

export default CartIcon;
