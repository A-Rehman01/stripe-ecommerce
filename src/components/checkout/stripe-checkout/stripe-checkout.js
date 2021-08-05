import React, { useContext, useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { CartContext } from '../../../context/cart-conrext';
import { fetchFormAPI } from '../../../helpers';

const StripeCheckout = () => {
  const { cartItems } = useContext(CartContext);
  const [email, setEmail] = useState('');
  const stripe = useStripe();
  const handleCheckout = async (e) => {
    e.preventDefault();
    const line_items = cartItems?.map((item) => {
      return {
        quantity: item?.quantity,
        price_data: {
          currency: 'usd',
          unit_amount: item?.price * 100, //amount in cents
          product_data: {
            name: item?.title,
            description: item?.description,
            images: [item?.imageUrl],
          },
        },
      };
    });
    const response = await fetchFormAPI('create-checkout-session', {
      body: { line_items, customer_email: email },
    });
    const { sessionId } = response;
    const { error } = await stripe.redirectToCheckout({
      sessionId
    });
    if (error) {
      console.log(error);
      console.log(error.response);
    }
  };
  return (
    <form onSubmit={(e) => handleCheckout(e)}>
      <div>
        <input
          type='email'
          placeholder='Email'
          className='nomad-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className='submit-btn'>
          <button type='submit' className='button is-black nomad-btn submit'>
            Checkout
          </button>
        </div>
      </div>
    </form>
  );
};

export default StripeCheckout;
