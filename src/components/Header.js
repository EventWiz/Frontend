import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '../styles/Header';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>Event Wiz</h1>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
