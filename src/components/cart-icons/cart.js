import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import ShoppingCart from '../../assets/shopping-cart.png';
import { CartContext } from '../../context/cart-conrext';
import './cart.styles.scss';

const CartIcon = (props) => {
  const { itemCount, cartItems } = useContext(CartContext);
  console.log({ cartItems });

  return (
    <div className='cart-container' onClick={() => props.history.push('/cart')}>
      <img src={ShoppingCart} alt='shoppingcart' />
      {itemCount > 0 ? <span className='cart-count'>{itemCount}</span> : null}
    </div>
  );
};

export default withRouter(CartIcon);
