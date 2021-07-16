import React from 'react';
import { withRouter } from 'react-router-dom';
import './main-section.styles.scss';

const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img
            src='https://images.unsplash.com/photo-1562869323-d3d7be3e88a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
            alt='studioBags'
          />
        </div>
        <div className='ms-m-description'>
          <h2>Designed for Fashion. Crafted for sport</h2>
          <p>
            We Make products that effortlessly transition from day to night.
            From the board room to the fitness studio, and everywhere in
            between, each Nomads piece is thoughtfully created to be tha perfect
            balance of from and function
          </p>
          <button
            className='button is-black'
            id='shop-now'
            onClick={() => history.push('/product')}
          >
            STUDIO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
