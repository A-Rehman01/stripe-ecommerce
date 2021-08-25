import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import NotFound from './components/not-found';
import Shop from './components/pages/shop/shop';
import SingleProduct from './components/single-product/single-product';
import Cart from './components/pages/cart-page/cart-page';
import Checkout from './components/checkout/checkout';
import Success from './components/checkout/stripe-checkout/success';
import Canceled from './components/checkout/stripe-checkout/canceled';
import SignUp from './components/sign-up/sign-up';

//Layout
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/success' component={Success} />
        <Route path='/canceled' component={Canceled} />
        <Route path='/signup' component={SignUp} />

        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

// .env
// REACT_APP_STRIPE_PUBLISH_KEY=pk_test_51JKndNCesDhLVmZCCE2SjX6lzu9r5yab8rYvtycPRiRcfvjcMUvgxzBEiFc0Yt0JYVr8sj3CKXMsi5bIrkq4bXt0005YnfLWhe
