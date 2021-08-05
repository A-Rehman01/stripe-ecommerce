import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../../context/cart-conrext';
import { withRouter } from 'react-router-dom';
import Layout from '../../shared/layout';

const Success = ({ history }) => {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
  }, []);
  return (
    <Layout>
      <div className='checkout'>
        <h1>Thankyou For your Order</h1>
        <p>
          we are currently processing your order and will you send a
          confirmation email Shortly
        </p>
        <div>
          <button
            className='button is-black nomad-btn submit'
            onClick={() => history.push('/shop')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(Success);
