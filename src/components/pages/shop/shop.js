import React, { useContext } from 'react';
import Layout from '../../shared/layout';
import { ProductsContext } from '../../../context/product-context';
import './shop.styles.scss';
import FeaturedProduct from '../../shared/featured-product';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const allproducts = products.map((product) => (
    <FeaturedProduct {...product} key={product.id} />
  ));
  return (
    <Layout>
      <div className='product-list-container'>
        <h2 className='product-list-title'>Shop</h2>
        <div className='product-list'>{allproducts}</div>
      </div>
    </Layout>
  );
};

export default Shop;
