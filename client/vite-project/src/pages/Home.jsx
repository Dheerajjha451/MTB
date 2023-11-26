import React from 'react';
import Categories from '../components/Categories';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
    </>
  );
};

export default Home;
