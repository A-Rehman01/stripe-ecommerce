import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import NotFound from './components/not-found';
import Shop from './components/pages/shop/shop';
import SingleProduct from './components/single-product/single-product';
import Cart from './components/pages/cart-page/cart-page';

//Layout
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='/cart' component={Cart} />

        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
