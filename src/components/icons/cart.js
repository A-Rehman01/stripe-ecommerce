import React, { useContext } from 'react';
import ShoppingCart from '../../assets/shopping-cart.png';
import { CartContext } from '../../context/cart-conrext';
import './cart.styles.scss';

const CartIcon = () => {
  const { itemCount, cartItems } = useContext(CartContext);
  console.log({ cartItems });
  return (
    <div className='cart-container'>
      <img src={ShoppingCart} alt='shoppingcart' />
      {itemCount > 0 ? <span className='cart-count'>{itemCount}</span> : null}
    </div>
  );
};

export default CartIcon;
