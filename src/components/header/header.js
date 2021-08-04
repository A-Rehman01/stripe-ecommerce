import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icons/cart';
import './header.styles.scss';

const Header = () => {
  return (
    <nav className='nav-menu container'>
      <div className='logo'>
        <Link to='/'>AR</Link>
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
      </ul>
      <CartIcon />
    </nav>
  );
};

export default Header;
