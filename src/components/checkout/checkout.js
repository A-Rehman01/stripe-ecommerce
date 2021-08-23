import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-conrext';
import Layout from '../shared/layout';
import './checkout.style.scss';
import ShippingAddress from './custom-checkout/shipping-address';
import StripeCheckout from './stripe-checkout/stripe-checkout';

const Checkout = () => {
  const { itemCount, total } = useContext(CartContext);
  const [shipping, setShipping] = useState(null);
  const addressShown = {
    display: shipping ? 'none' : 'block',
  };
  return (
    <Layout>
      <div className='checkout'>
        <h2>Checkout Summary</h2>
        <h3>Total Items: {itemCount}</h3>
        <h4>Amount to Pay: ${total}</h4>
        {/* <StripeCheckout />  stripe builtin page  */}
        <div style={addressShown}>
          <ShippingAddress setShipping={setShipping} />
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
