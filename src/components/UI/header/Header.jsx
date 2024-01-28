import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <h1>Travel Agency</h1>
      <div className='menuHeader'>
        <Link to='/travelDestinations'>Destinations</Link>
        <Link to='/flightsHotels'>Flights & Hotels</Link>
        <Link to='/actualDeals'>Actual Deals</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/signin' className='signIn' style={{ backgroundColor: '#4BA3C3', color: 'white', padding: '10px 30px' }}>Sign In</Link>
        <Link to='/register' className='registerLink' style={{ backgroundColor: '#4BA3C3', color: 'white', padding: '10px 30px' }}>Register</Link>
      </div>
    </div>
  );
}

export default Header;
