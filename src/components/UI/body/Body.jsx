import React from 'react';
import IconsContainer from './IconsContainer';
import './body.css';
import TravelDestinations from './travelDestinations/TravelDestinations';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Body = () => {
  return (
    <div>
      <Header />
      <IconsContainer />
      <TravelDestinations/>
      <Footer />
    </div>
  );
};

export default Body;
