import React from 'react';
import FeaturedCollection from './featured-collection/featured-collection';
import Hero from './hero/hero';
import MainSection from './main-section/main-section';
import Layout from './shared/layout';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <MainSection />
      <FeaturedCollection />
    </Layout>
  );
};

export default HomePage;
