import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '../styles/Header';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={logo} alt='App logo' />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
